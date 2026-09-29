# Playwright Test Automation Architecture Audit

Scope: static review of the repository (config, CI workflow, fixtures, helpers, specs, and selective reading of `pages/`, `components/`, `modals/`). The suite was not executed. Items that were not checked are marked "Not verified".

## 1. Executive Summary

| Metric              | Score  |
| ------------------- | ------ |
| Architecture        | 7/10   |
| Code quality        | 7/10   |
| Playwright maturity | 6.5/10 |
| Maintainability     | 7/10   |
| Scalability         | 5.5/10 |

**Strengths**

- Clean layering: tests → fixtures → pages → components/modals → Playwright; `@/` aliases and barrel files used consistently.
- Composition over inheritance (`profilePage.profileHeader`, `homePage.header`, card components split by view mode).
- Good auth primitive: worker-scoped `authSession` via API (`fixtures/auth-fixture.ts`) plus per-test `authenticatedPage` with localStorage injection.
- `.env` git-ignored, `.env.example` present, CI uses secrets, `forbidOnly` on CI, ESLint (Playwright plugin) and Prettier enforced in CI.
- Allure metadata and assertion messages used.

**Weaknesses**

- CI gate can pass while tests fail; matrix runs a nonexistent `api` project.
- Shared live user account, no data cleanup.
- Four login paths.
- A hard sleep and several swallowed exceptions in Page Objects.
- Fragile CSS/`.nth()` locators; `workers: 1` and 3 browsers per PR in CI.

**Overall assessment:** well-organised small framework (~11 specs) with a sound structure. Reliability tooling (isolation, CI gating, data cleanup) is what holds it back.

## 2. Overall Maturity Score

**6.5/10** (matrix in section 22).

## 3. Critical Issues

### [CRITICAL] CI matrix references nonexistent `api` project and can pass on failure

Location: `.github/workflows/playwright.yml` (matrix `[api, chromium, firefox, webkit]`, `continue-on-error: true` on the test step, "Validate test results" step); `playwright.config.ts:35-51`.

- Only chromium, firefox and webkit are defined; no `tests/api` directory exists, so `--project=api` fails. `continue-on-error` hides it.
- The final gate exits 0 when `summary.json` is missing.

Impact: a crashed run can produce a green pipeline.

Recommendation: remove `api` (or add the project), drop `continue-on-error` (keep `if: !cancelled()` on uploads), make the gate fail closed.

## 4. High-Priority Issues

### [HIGH] Shared live account and environment

- One `USER_EMAIL`/`USER_PASSWORD` secret for all workers and all three browsers, against `greencity.cx.ua`.
- Tests mutate account state (`tc-38` friend request, `tc-24` news creation, `add-place-modal.spec.ts` place creation) with no `afterEach`/cleanup anywhere in `tests/` or `fixtures/`.
- `tc-35` asserts `Rate: 0`, sensitive to pollution.
- Recommendation: user per worker/project, API cleanup fixtures, assert on self-created data.

### [HIGH] Four login paths

| Path             | Location                                            | Used by                                                       |
| ---------------- | --------------------------------------------------- | ------------------------------------------------------------- |
| API + storage    | `fixtures/auth-fixture.ts` (`authenticatedPage`)    | tc-38, tc-24, tc-25, ...                                      |
| Fixture UI login | `fixtures/page-fixture.ts:90` (`authenticatedUser`) | `tests/add-place-modal.spec.ts:5` (`void authenticatedUser;`) |
| Helper UI login  | `helpers/login-user.ts`                             | tc-37                                                         |
| Inline UI login  | `signInModal.signIn(...)`                           | tc-35                                                         |

`helpers/login-user.ts` imports `expect` from a fixtures file (wrong dependency direction, hidden assertion). UI login is legitimate only inside the login test (tc-4). Keep `authenticatedPage`; remove `authenticatedUser` and `loginUser`.

### [HIGH] Hard sleep and swallowed exceptions in Page Objects

- `pages/create-news/create-news-page.ts:232-238`: `waitFor` + `waitForTimeout(1000)` inside `try/catch {}` — real failures look like "modal not needed".
- Other empty `catch {}`: `create-news-page.ts:275`, `pages/home-page.ts:261`, `pages/eco-news-details.page.ts:62`, `components/header-component.ts:74` (each needs review; legitimate only for truly optional elements).
- Recommendation: web-first waits; make optional handling explicit (`isVisible()` with a reason).

### [HIGH] `networkidle` in `BasePage`

`pages/base-page.ts:45` (`waitForPageLoad`) uses `waitForLoadState('networkidle')`, discouraged for SPAs with polling/widgets. `waitForLoadState('domcontentloaded')` after navigation in `tests/tc-24-create-news.spec.ts:20` and `tc-25:15` adds nothing. Number of callers of `waitForPageLoad`: not verified.

## 5. Architecture & Design Review

### 5.1 Overall Architecture

```text
tests/*.spec.ts
   ↓ import { test, expect } from '@/fixtures'
fixtures/index.ts = mergeTests(page-fixture, auth-fixture) ← base-fixture
   ↓
pages/ ──► components/, modals/   (composition)
   ↓
helpers/ (auth-api, local-storage-manager, login-user, resolve-user-id)
   ↓
config/env.ts
```

Violation: `helpers/login-user.ts` → `fixtures`. Circular imports: not verified.

### 5.2 Page Objects

- ~20 pages; largest `create-news-page.ts` (331 lines), `home-page.ts` (293), `events-page.ts` (287). Not yet God objects.
- `home-page.ts` relies on positional `.nth(index)` helpers (fragile to reordering).
- `BasePage` is thin (`navigateTo`, `waitForPageLoad`) — acceptable; do not grow it.
- Only 5 `expect(` calls across pages/components/modals/helpers/fixtures — assertions mostly live in specs.

### 5.3 Page Components

- Strongest layer (~30 components; `profile/`, `event-card/`, `eco-news-card/`, `places/`).
- `components/comment-item-component.ts` (385 lines) is the largest file; consider splitting reply/edit parts.
- Inconsistent suffix (`-component.ts` vs `.component.ts`) — style only.
- The three profile dashboard tab components are near-identical; do not abstract until a fourth appears.

### 5.4 Modals

`modals/base-modal.ts` shared by ten modals — abstraction justified. Selector duplication between modals: not verified.

### 5.5 Fixtures

- Good: `mergeTests`, worker-scoped API auth.
- `page-fixture.ts` has ~15 one-line `new X(page)` fixtures — boilerplate, a preference not a defect.
- `baseUrl`/`apiUrl` fixtures in `base-fixture.ts` duplicate `env`; usage not verified.
- `authenticatedUser` hides a UI login.
- `authenticatedPage` re-derives the `#/greenCity` URL and hardcodes `language: 'en'`.

### 5.6 Helpers

`local-storage-manager.ts` and `auth-api.ts` are legitimate. `login-user.ts` duplicates the fixture path. `resolve-user-id.ts`: not verified.

### 5.7 Locators

- ~73 `getByRole`, 0 `getByTestId`, ~183 `.locator('...')`.
- Fragile examples: `pages/places-page.ts:19` `.search-elements`; `pages/edit-profile-page.ts:44,56` `.details-img button`, `.privacy-wrapper`; `pages/habit/habit-form-page.ts:111` `.plus-circle`; `pages/eco-news.page.ts:72` `'.eco-news_list-content-title h3, .title-list h3, h3'` (bare `h3` matches almost anything); `components/eco-news-card/eco-news-table-card-component.ts:29-30` `.user-data-like` + `.nth()`; `components/profile/profile-header-widget.component.ts:38-41` `progressChains.nth(N).locator('p').nth(1)`.
- Prefer role/label/text; `data-testid` only where no accessible hook exists.

## 6. Code Quality & TypeScript

- `tsconfig.json`: `strict: true`; missing `noUncheckedIndexedAccess`, `noUnusedLocals`, `noUnusedParameters`.
- No `as any`, `as unknown as`, `@ts-ignore`, `@ts-expect-error` found. One unvalidated cast: `helpers/auth-api.ts` (`as AuthSessionData`) — acceptable.
- `@typescript-eslint/no-explicit-any` is only `warn`.
- Two `eslint-disable no-empty-pattern` in `base-fixture.ts` are the standard Playwright idiom.
- `package.json` `lint` uses `eslint . --ext .ts`; `--ext` is not valid in flat config (not verified by running).

## 7. Code, Logic & Functional Duplication

### 7.1 Code

Calendar navigation (`getDisplayedMonth`/`goToPreviousMonth`/`goToNextMonth`) in `pages/habit/habit-form-page.ts:191-199`, `pages/events-page.ts:211-216`, `components/calendar-dropdown-component.ts:44-51`. Reuse the calendar component if DOM/behaviour matches (not verified).

### 7.2 Logic

Per-page `waitFor*` methods wait on distinct elements — acceptable.

### 7.3 Functional

Login (four paths, see section 4). Home URL logic duplicated in `auth-fixture.ts` vs `BASE_URL` in `.env.example`.

### 7.4 Tests

Too few tests for overlap. `tests/example.spec.ts` is the scaffold (live title assertion; hardcoded `user@example.com`) — make it a real smoke test or delete. `tc-24`/`tc-25` share setup but cover different features (justified).

### 7.5–7.9 Page Objects, Components, Fixtures, Helpers, Locators

No large duplicated methods found in files read. Card components share a base (controlled). `authenticatedUser` vs `authenticatedPage` duplicates. Systematic locator duplication: not verified.

### 7.10 Test Data

Repeated literals in `tests/tc-3-successful-user-registration.spec.ts` (`'GreenPass#2026'` ×4) — use a local const. `Date.now()` email can collide across workers; add a random suffix. Factories/builders are not justified at this size. `types/*.i18n.ts` already exists for localised strings.

### 7.11 Configuration

- `config/env.ts` defaults `USER_PASSWORD` to `'password'` and `BASE_URL` to `localhost:3000` while `.env.example` points to production; missing values silently fall back instead of failing fast.
- `USER_API_URL` is hardcoded to a production host in `env.ts`, absent from `.env.example` and CI.
- Stale commented dotenv block in `playwright.config.ts`.

### Duplication summary

| Type                   | Instances | Severity | Locations                                       | Recommendation                   |
| ---------------------- | --------: | -------- | ----------------------------------------------- | -------------------------------- |
| Functional (login)     |         4 | High     | fixtures, helpers, tests                        | One API path + one UI login test |
| Code (calendar nav)    |         3 | Low–Med  | habit form, events page, calendar comp.         | Reuse calendar component         |
| Code (tab components)  |         3 | Low      | profile tabs                                    | Leave for now                    |
| Configuration          |         3 | Medium   | env.ts, workflow, `.env.example`                | Align, fail fast                 |
| Test data              |   several | Low      | tc-3, tc-24                                     | Local constants                  |
| Tests/Fixtures/Helpers |    1 each | Low      | example.spec, `authenticatedUser`, `login-user` | Delete legacy                    |

## 8. Playwright Best Practices

Good: role locators, web-first assertions with messages, `test.step`, `trace: 'on-first-retry'`, worker auth, `mergeTests`. Weak: `.nth()`/CSS, `networkidle`. Specs are long numbered manual-style flows (design choice; harder to localise failures).

## 9. Async / Await & Synchronization

One `waitForTimeout` (`create-news-page.ts:234`), one `networkidle` (`base-page.ts:45`), two no-op `domcontentloaded` waits in specs. `waitForLoadState()` in `components/chat-telegram-component.ts:29` (new tab) is justified. Hard-coded `timeout: 5000` in `create-news-page.ts` should use `env.SHORT_TIMEOUT`.

## 10. Assertions

- Mostly in specs. Exceptions: `helpers/login-user.ts`, precondition in `auth-fixture.ts` (acceptable), `verifyAllNavLinksAreVisible` in `header-component.ts`.
- Non-retrying: `expect(await signUpModal.getTitle()).toBe(...)` (tc-3), `await expect(signInModal.isSignInButtonEnabled()).resolves.toBe(false)` (example.spec) — prefer `toBeEnabled()`/`toHaveText()`.
- `toBeGreaterThanOrEqual(0)` counters in tc-35 are vacuous.
- tc-35 asserts exact English copy without forcing language.

## 11. Test Isolation

Browser state is isolated per test. Server state is not (section 4). `fullyParallel: true` but CI uses one worker, so parallel behaviour on CI is untested; `--workers=4` not run (not verified). No module-level mutable state found.

## 12. Authentication & State Management

API + localStorage injection suits an app that keeps tokens in localStorage. Risks: no token refresh for long-lived worker sessions; single role only. Secrets: `.env`/`.env.*` ignored, `.env.example` has placeholders; no committed secrets found.

## 13. Test Data

Inline static data, timestamp-based uniqueness, no cleanup of created news/places/friend requests (largest gap). No factories needed yet.

## 14. Playwright Configuration

`fullyParallel`, `retries: CI ? 2 : 0`, `workers: CI ? 1 : undefined`, `forbidOnly`, trace/screenshot settings, env-driven timeouts. Issues: `workers: 1` on CI; global `ignoreHTTPSErrors: true`; no HTML report/traces artifact uploaded (Allure attachment of traces not verified); commented dead config; no PR vs main profile.

## 15. Browser Strategy

All three browsers on every push/PR against one shared account. Suggest chromium on PR; firefox/webkit nightly or main. `npm test` (chromium) and `test:all` already exist.

## 16. Allure Reporting

`allure-playwright` configured; metadata seen in tc-38 (others not verified). Heavy `test.step` usage plus nested steps in page methods (noisy). `allureId(...)` etc. are called without `await`. CI uses unpinned `simple-elf/allure-report-action@master`. Single concurrency group can queue PR runs behind main.

## 17. CI/CD

Good: `npm ci`, npm and browser caching, lint job gate, `timeout-minutes`, `fail-fast: false`, artifacts on `!cancelled()`. Issues: `api` matrix entry and `continue-on-error`; workflow-wide `contents: write`/`pull-requests: write`; floating `node-version: lts/*`; `@master` action; no `tsc --noEmit`; 1-day artifact retention; fork-PR secrets not handled; `USER_API_URL` not set.

## 18. Dependencies & Tooling

Playwright ^1.63, TypeScript ^6, ESLint ^10, Prettier 3.9.6, allure, allure-js-commons, allure-playwright, dotenv. Lockfile not audited. `"main": "index.js"` refers to a nonexistent file (harmless). No pre-commit hooks. Quality gates: ESLint + Prettier yes, type-check no.

## 19. Flakiness Risk Assessment

| Risk                     | Probability | Impact | Evidence                      | Mitigation                     |
| ------------------------ | ----------- | ------ | ----------------------------- | ------------------------------ |
| Shared account state     | High        | High   | tc-38, tc-24, no cleanup      | Per-worker users + API cleanup |
| Live external site/API   | Medium      | High   | env points to greencity.cx.ua | Health check, retries          |
| Swallowed exceptions     | Medium      | Medium | five `catch {}` sites         | Explicit optional handling     |
| Fixed sleep on cropper   | Medium      | Low    | create-news-page.ts:234       | Web-first wait                 |
| Positional/CSS locators  | Medium      | Medium | ~183 `.locator()` calls       | Role/label locators            |
| Language/copy assertions | Medium      | Medium | tc-35, tc-3                   | Force language, use i18n types |
| `Date.now()` collisions  | Low         | Low    | tc-3                          | Random suffix                  |
| `networkidle`            | Low–Med     | Medium | base-page.ts:45               | Wait for an element            |

## 20. Scalability Assessment

- 100 tests: fine once the shared user is fixed.
- 500: `workers: 1` and the 3-browser matrix become the bottleneck; add `--shard`, per-worker users.
- 1000+: need API data setup/cleanup, tags (`@smoke`/`@regression`; none seen), Allure history retention rules.

## 21. Maintainability Assessment

Structure is easy to follow (kebab-case, barrels, aliases). Friction: mixed component suffixes, mixed spec naming, multiple login examples to copy from. README not reviewed.

## 22. Architecture Maturity Matrix

| Area                 | Score | Main issue                         |
| -------------------- | ----: | ---------------------------------- |
| Architecture         |   7.5 | helpers→fixtures import            |
| POM                  |     7 | 300+ line pages, `.nth()`          |
| Components           |     8 | Naming, 385-line comment item      |
| Modals               |     7 | Selector duplication unchecked     |
| Fixtures             |   6.5 | Login duplication                  |
| Locators             |     6 | CSS classes, `.nth()`              |
| TypeScript           |     7 | Missing extra strict flags         |
| Duplication          |     7 | Login, calendar                    |
| Test isolation       |   4.5 | Shared account, no cleanup         |
| Playwright practices |   6.5 | networkidle, swallowed catches     |
| Test data            |     5 | No cleanup                         |
| Configuration        |   5.5 | Conflicting defaults               |
| CI/CD                |     5 | `api` project, `continue-on-error` |
| Allure               |     7 | Unawaited calls, unpinned action   |
| Maintainability      |     7 | Mixed conventions                  |
| Scalability          |     5 | workers:1, shared user             |

Overall: **6.5/10**.

## 23. Top 10 Recommended Improvements

1. **Fix the CI gate** (S): remove `api`, drop `continue-on-error`, fail closed. Evidence: workflow. Impact: false-green builds.
2. **Isolate test data and account** (L): per-worker users + API cleanup fixtures. Evidence: no cleanup, single secret.
3. **Consolidate login** (S): keep `authenticatedPage`; remove `authenticatedUser`, `loginUser`.
4. **Remove swallowed `catch {}` and hard sleep** (S–M): `create-news-page.ts:232-238` + four other sites.
5. **Config hygiene** (S): fail fast on missing vars; add `USER_API_URL` to `.env.example`/CI.
6. **Browser strategy and sharding** (M): chromium on PR, others nightly, `--shard`.
7. **Add `tsc --noEmit` and stricter flags** (S–M).
8. **Reduce fragile locators** (M): role-based where possible.
9. **Replace non-retrying/vacuous assertions** (S).
10. **CI hardening** (S): pin Node and actions, scope permissions, upload Playwright report/traces, longer retention.

## 24. Prioritized Refactoring Roadmap

- **Phase 1 – Critical:** item 1 (`.github/workflows/playwright.yml`). S.
- **Phase 2 – High:** items 2–4 (`fixtures/`, `helpers/login-user.ts`, `tests/add-place-modal.spec.ts`, `tests/tc-37*`, `tests/tc-35*`, `create-news-page.ts`, `home-page.ts`, `eco-news-details.page.ts`, `header-component.ts`). S–L.
- **Phase 3 – Maintainability:** items 5, 7, 9; unify component filename suffix; decide fate of `example.spec.ts`; reuse `CalendarDropdownComponent`; split `comment-item-component.ts`. S–M.
- **Phase 4 – Scalability:** items 6, 8, 10; add tags, sharding, role-based users when a second role is needed. M–L.

## 25. Final Assessment

- **Architecture:** sound layering and composition; minor leaks.
- **Code quality:** good TypeScript hygiene; compiler flags could be stricter.
- **Playwright practices:** mostly idiomatic.
- **Test reliability:** weakest area (shared account, no cleanup, permissive CI gate).
- **Duplication:** low, except login and calendar navigation.
- **Maintainability:** good; mixed conventions.
- **Scalability:** limited by serial CI, three browsers per PR, shared state.
- **CI/CD:** functional but not yet trustworthy.
- **Reporting:** good Allure setup; unawaited metadata calls and an unpinned action.

**Overall Architecture Maturity: 6.5/10.** To reach the next level: test-data isolation with cleanup, a CI gate that fails when tests fail, and a single authentication story; then sharding and a browser strategy.
