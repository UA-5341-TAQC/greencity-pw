# Playwright Framework — Architecture Audit

Repository: `UA-5341-TAQC/greencity-pw` · Stack: TypeScript (strict), Playwright Test, POM + page components, Playwright fixtures, Allure, GitHub Actions.

> **Validation scope.** The sandbox used for this audit has no network access to the GreenCity application and no test credentials.
> `tsc`, ESLint, Prettier and `playwright test --list` (36 tests / 12 per browser, unchanged) were run for real.
> Browser test execution was attempted, but the app was unreachable, so **no e2e result was produced**.
> Every change that touches runtime behaviour is therefore listed as _needs verification in CI_.

## 1. Executive summary

The framework is in good shape for its size (~11 specs, ~3.3k LOC of POM): strict TypeScript, kebab-case linting, path aliases,
composition-based header/components, API-backed authentication with a worker-scoped fixture, i18n maps for locators,
Allure steps in the page layer. Baseline (`tsc`, `eslint`, `prettier`) was clean.

The problems were concentrated in four areas:

1. **CI was partly broken/masked** (a non-existent `api` Playwright project in the matrix, no type-check gate).
2. **Two parallel authentication mechanisms** (`authenticatedUser` = full UI sign-in per test; `authenticatedPage` = API + localStorage).
3. **Synchronisation anti-patterns** (`waitForTimeout`, `networkidle`, one-shot `expect(await x.isVisible())`).
4. **No lint guardrails** to stop (3) and un-awaited promises from coming back.

### Maturity scores (1–10)

| Area                    | Before | After | Comment                                                                         |
| ----------------------- | :----: | :---: | ------------------------------------------------------------------------------- |
| Architecture            |   7    |   8   | Clean layering pages → components → modals; composition already used            |
| Page Object Model       |   6    |   7   | Some POMs leak `is*()` snapshot methods; event pages diverge (see tech debt)    |
| Fixtures                |   6    |   8   | Duplicate UI login fixture removed; single auth path                            |
| TypeScript              |   8    |   8   | `strict` already on; added `noImplicitReturns`, `noFallthroughCasesInSwitch`    |
| Locators                |   6    |   6   | Mixed quality; several broad CSS/`.first()` locators remain (tech debt)         |
| Synchronisation         |   5    |   8   | `waitForTimeout` / `networkidle` removed and now lint-enforced                  |
| Assertions              |   5    |   6   | Web-first in refactored specs; many one-shot `getX()` assertions remain         |
| Test isolation / parall |   5    |   5   | One shared account; CI pinned to 1 worker (documented risk, `WORKERS` override) |
| Config / env            |   6    |   8   | No default password, fail-fast credentials, `USER_API_URL` documented           |
| CI/CD                   |   5    |   7   | Broken matrix entry removed, type-check gate added; result masking remains      |
| Documentation           |   6    |   8   | README + this audit                                                             |

## 2. Findings

Severity: CRITICAL / HIGH / MEDIUM / LOW. Locations refer to the **pre-refactor** code.

| ID   | Sev    | Location                                                    | Problem                                                                                                                                                                    | Impact                                                                                                | Recommendation                                                                   | Status                                              |
| ---- | ------ | ----------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------- |
| F-01 | HIGH   | `.github/workflows/playwright.yml:55,71,81,120`             | Matrix contains `api`, but `playwright.config.ts` has no `api` project → `--project=api` fails ("Project(s) not found"); failure hidden by `continue-on-error`             | A wasted job on every run, red noise, false sense of an "API" suite                                   | Remove entry (re-add together with a real `api` project)                         | IMPLEMENTED                                         |
| F-02 | HIGH   | `fixtures/page-fixture.ts:90`                               | `authenticatedUser` signs in through the UI for every test that uses it (`add-place-modal.spec.ts`), duplicating `authenticatedPage` (API token + storage)                 | Slower, flakier (modal timing, toasts), two ways to "be logged in" → drift                            | Single auth path: `authenticatedPage`                                            | IMPLEMENTED (needs CI verification)                 |
| F-03 | HIGH   | `config/env.ts:16`                                          | `USER_PASSWORD` defaults to the literal `'password'`; `USER_EMAIL` to `''`                                                                                                 | Missing CI secret ⇒ confusing 400/401 from API instead of a clear message; risk of lockout on retries | Fail fast with descriptive error                                                 | IMPLEMENTED                                         |
| F-04 | MEDIUM | `pages/create-news/create-news-page.ts:234`                 | `waitForTimeout(1000)` inside a `try/catch` that swallows every error                                                                                                      | Hard sleep; masks real failures of the click                                                          | `waitFor` for dialog (tolerating absence) then auto-waiting `click()`            | IMPLEMENTED (needs CI verification)                 |
| F-05 | MEDIUM | `pages/base-page.ts:45` (+ 10 callers)                      | `waitForLoadState('networkidle')` used as the page-ready signal                                                                                                            | Officially discouraged; slow and flaky with SPA polling/analytics; ready ≠ idle                       | Wait on a page-specific visible locator                                          | IMPLEMENTED (needs CI verification)                 |
| F-06 | MEDIUM | `tests/add-place-modal.spec.ts:25-35`, `tests/tc-25…:78-86` | `expect(await locator.isVisible()).toBe(true)` – one-shot snapshot, no retry                                                                                               | Flaky on animated modals / Angular renders                                                            | `await expect(locator).toBeVisible()` / `toBeEnabled()`                          | IMPLEMENTED (add-place, tc-25, tc-4)                |
| F-07 | MEDIUM | `eslint.config.js`                                          | No `no-floating-promises`; `no-wait-for-timeout` only a warning in `tests/`; nothing prevents sleeps/`networkidle` in POM code                                             | Regressions of F-04/F-05 and silently skipped awaits                                                  | Type-aware rule + `no-wait-for-timeout`, `no-networkidle` errors                 | IMPLEMENTED                                         |
| F-08 | MEDIUM | `.github/workflows/playwright.yml` (lint job)               | No `tsc --noEmit` gate; ESLint does not report type errors                                                                                                                 | Type errors can reach `main`                                                                          | `npm run typecheck` step                                                         | IMPLEMENTED                                         |
| F-09 | LOW    | `helpers/login-user.ts:2`                                   | Helper imports `expect` from `@/fixtures/page-fixture` (helpers depending on fixtures)                                                                                     | Layer inversion, potential import cycle                                                               | Import from `@playwright/test`                                                   | IMPLEMENTED                                         |
| F-10 | LOW    | `playwright.config.ts:3-9`, `:24`                           | Commented-out dotenv boilerplate (dotenv is loaded in `config/env.ts`); hard-coded worker count                                                                            | Confusion; no way to raise parallelism without editing config                                         | Remove boilerplate; `WORKERS` env override                                       | IMPLEMENTED                                         |
| F-11 | LOW    | `.env.example`, `README.md`                                 | `USER_API_URL` (used by API login) undocumented                                                                                                                            | New contributors cannot configure auth                                                                | Document                                                                         | IMPLEMENTED                                         |
| F-12 | LOW    | `pages/create-news/create-news-preview-page.ts`             | Five `is*Visible/Enabled` snapshot methods used by one test                                                                                                                | API that encourages non-retrying assertions                                                           | Expose locators, delete methods                                                  | IMPLEMENTED                                         |
| F-13 | MEDIUM | `components/header-component.ts:103`                        | `switchLanguage()` asserts on the **Sign in** button, which is hidden for authenticated users                                                                              | Cannot switch language after login; forces UI-login in TC-37                                          | Assert on `html[lang]` / another always-present label                            | NOT IMPLEMENTED (needs live app to choose selector) |
| F-14 | MEDIUM | `pages/create-event-page.ts` vs `pages/edit-event-page.ts`  | Two divergent POMs for the same form (different locator names and method APIs, largely the same fields); neither is used by a spec, neither exported from `pages/index.ts` | Future duplication once event tests are added                                                         | Extract `EventFormPage` (as done for habits) **when the first event test lands** | NOT IMPLEMENTED (no tests to prove equivalence)     |
| F-15 | MEDIUM | `.github/workflows/playwright.yml:86`                       | `continue-on-error: true` on the test step; final gate skips when the Allure summary is missing (`exit 0`)                                                                 | A crashed run can pass CI                                                                             | Gate on test job result or fail when the summary is missing                      | NOT IMPLEMENTED (needs maintainers' policy)         |
| F-16 | MEDIUM | tests using shared account (`tc-38`, `tc-24`)               | Single shared account mutated by tests (friend request, published news)                                                                                                    | Prevents `--workers>1`; cross-test interference                                                       | Per-worker accounts (`authSession` is already worker-scoped) + cleanup via API   | NOT IMPLEMENTED                                     |
| F-17 | LOW    | e.g. `create-news-preview-page.ts` back/publish             | Over-broad locators (`a.button-link, a[href*=…], div.button-content` + `.first()`), `nth()` on positional stats in `profile-header-widget`                                 | Fragile to markup changes                                                                             | Prefer `getByRole` + accessible names; ask devs for `data-testid` where needed   | NOT IMPLEMENTED                                     |
| F-18 | LOW    | `tests/*` (`getTitle()` reads)                              | Remaining `expect(await modal.getTitle()).toBe(...)` one-shot text reads                                                                                                   | Minor flakiness                                                                                       | Expose title locator and use `toHaveText`                                        | NOT IMPLEMENTED                                     |
| F-19 | LOW    | `fixtures/base-fixture.ts`                                  | `baseUrl` / `apiUrl` fixtures unused by any test                                                                                                                           | Dead code                                                                                             | Delete or use                                                                    | NOT IMPLEMENTED (harmless)                          |

## 3. Duplication audit

| Category         | Result                                                                                                                                                                            | Decision                                                                                                                  |
| ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| Login logic      | UI sign-in in `authenticatedUser` fixture **and** `loginUser` helper; API sign-in in `authenticatedPage`                                                                          | **Harmful** → fixture removed (F-02). `loginUser` kept only for TC-37 (needs UI login after switching language, see F-13) |
| Page objects     | Event create/edit pages overlap; habit create/edit already share `HabitFormPage`; event/eco-news/profile cards use a shared base + list/grid variants                             | Habit & cards: **good**. Event pages: debt F-14                                                                           |
| Components       | `BaseComponent`, `BaseModal`, `event-card/*`, `eco-news-card/*`, `profile-dashboard/*` share intent; `HabitItem`/`EventItem`/`NewsTabItem` are similar but bound to different DOM | **Intentional** – leave                                                                                                   |
| Fixtures         | One factory per page/modal; boilerplate but explicit                                                                                                                              | **Intentional** – readable, typed                                                                                         |
| Helpers          | `resolveUserId` shared by three pages; `LocalStorageManager` used by auth fixture                                                                                                 | Good                                                                                                                      |
| Locators         | i18n text kept in `types/*.i18n.ts`; the same "Sign in / Publish / Preview" locators appear in modals & pages, not shared across unrelated pages                                  | Acceptable                                                                                                                |
| Test data        | Inline per-test data (timestamped titles), image in `assets/`                                                                                                                     | **Intentional** – isolation                                                                                               |
| Tests            | No duplicated scenarios found; `example.spec.ts` overlaps loosely with TC-4 but tests different things (title/start-forming)                                                      | Keep                                                                                                                      |
| Config           | Timeouts centralised in `config/env.ts`; Playwright config consumes them                                                                                                          | Good                                                                                                                      |
| Pages / BasePage | `BasePage` carries real shared state (header, toast, navigation) – not an empty base class                                                                                        | Keep; removed the `networkidle` helper only                                                                               |

## 4. Best-practice review

- **Async/await:** consistent; now enforced with `@typescript-eslint/no-floating-promises` (0 violations found).
- **Assertions:** web-first in updated specs. Remaining one-shot reads listed as F-18.
- **Isolation:** every test gets a fresh `page`/context. `authSession` is worker-scoped (one API login per worker) — good; state is not shared between tests except the server-side account (F-16).
- **Auth/State:** API login + `addInitScript` localStorage is the recommended pattern; storage-state files are not needed because the token is injected per context. `authenticatedPage` now the only "logged-in" fixture.
- **Locators:** Playwright locator priority is mostly respected in components/modals; CSS-heavy pages are noted in F-17. `data-testid` is intentionally **not** introduced.
- **Timeouts:** centralised via `env.*` and used in `playwright.config.ts`.
- **Reporting:** Allure + `screenshot: 'only-on-failure'`, `trace: 'on-first-retry'`.

## 5. Top-10 priorities and maturity matrix

| #   | Improvement                                                         | Effort | Status                               |
| --- | ------------------------------------------------------------------- | ------ | ------------------------------------ |
| 1   | Remove broken `api` CI matrix entry (F-01)                          | XS     | IMPLEMENTED                          |
| 2   | One authentication path (F-02)                                      | S      | IMPLEMENTED                          |
| 3   | Fail-fast credentials (F-03)                                        | XS     | IMPLEMENTED                          |
| 4   | Remove `networkidle` / `waitForTimeout` + lint guard (F-04/5/7)     | S      | IMPLEMENTED                          |
| 5   | Type-check CI gate (F-08)                                           | XS     | IMPLEMENTED                          |
| 6   | Web-first assertions (F-06)                                         | S      | IMPLEMENTED (partial – F-18 remains) |
| 7   | Make CI test failures block merges (F-15)                           | S      | NOT IMPLEMENTED                      |
| 8   | Per-worker test accounts + API cleanup, enable `--workers=4` (F-16) | M      | NOT IMPLEMENTED                      |
| 9   | Fix `switchLanguage` for authenticated users (F-13)                 | S      | NOT IMPLEMENTED                      |
| 10  | Unify event form POM when event tests appear (F-14)                 | M      | NOT IMPLEMENTED                      |

## 6. Roadmap

1. **Phase 1 (done here):** CI correctness, single auth path, sync anti-patterns, lint guardrails, docs.
2. **Phase 2:** decide CI failure policy (F-15); fix `switchLanguage` (F-13); convert remaining one-shot assertions (F-18); tighten broad locators (F-17).
3. **Phase 3:** test-data strategy — per-worker users, API-level setup/teardown for news/friends; raise CI workers to 2–4 and validate with `--repeat-each`.
4. **Phase 4:** at 100+ tests: sharding in CI (`--shard`), tagging (`@smoke`, `@regression`), extract `EventFormPage`, consider an `api` project for API-only checks.

## 7. Final assessment and implementation status

| Status          | Items                                                                                                                                                                            |
| --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| IMPLEMENTED     | F-01, F-02, F-03, F-04, F-05, F-06, F-07, F-08, F-09, F-10, F-11, F-12                                                                                                           |
| NOT IMPLEMENTED | F-13, F-14, F-15, F-16, F-17, F-18, F-19 (reasons in table)                                                                                                                      |
| NOT AN ISSUE    | `BasePage` (holds real shared state), fixture-per-page boilerplate, per-test inline data, `strict: true` already on, no `@ts-ignore` / `any` / `test.only` / `force: true` found |

Validation (sandbox): `npx tsc --noEmit` ✅ · `npm run lint` ✅ · `npm run format:check` ✅ · `npx playwright test --list` ✅ (36 tests, unchanged) ·
`npx playwright test` ⚠️ not executable — target application unreachable from the sandbox and no credentials available.
**Action for maintainers:** run the CI pipeline on this PR and verify the TC-52, TC-24/25, TC-37/38, TC-4 specs, whose page-ready waits changed.

Residual risks: the changed page-ready waits (`HomePage`, `EventsPage`, `PlacesPage`) now depend on `h1` / `p.main-header` / "Add place" button visibility; `authenticatedPage` in TC-52 replaces UI login.
