# GreenCity Playwright Starter Framework

Starter automation framework for collaborative student testing of [GreenCity UI](https://www.greencity.cx.ua/#/greenCity) and its REST API.

## Tech Stack

- TypeScript
- Playwright (`@playwright/test`)
- Allure Report (`allure-playwright`)
- ESLint + Prettier

## Prerequisites

- Node.js 20+
- Git

## Setup

1. Clone repository:
   ```bash
   git clone <repository-url>
   cd greencity-pw
   ```
2. Install dependencies:
   ```bash
   npm ci
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install --with-deps
   ```

## Project Structure

```text
src/
  api/         # API controllers/services with APIRequestContext
  components/  # Reusable UI components (COM)
  fixtures/    # Custom Playwright fixtures
  pages/       # Page objects (POM)
  utils/       # Constants and helpers
tests/
  api/         # API tests
  ui/          # UI tests
```

## Run Tests

- Run all tests:
  ```bash
  npm test
  ```
- Run UI tests:
  ```bash
  npm run test:ui
  ```
- Run API tests:
  ```bash
  npm run test:api
  ```
- Headed mode (example for UI):
  ```bash
  npx playwright test tests/ui --headed --project=chromium
  ```
- Headless mode is default.

## Code Quality

- Lint:
  ```bash
  npm run lint
  ```
- Auto-fix lint:
  ```bash
  npm run lint:fix
  ```
- Check formatting:
  ```bash
  npm run format:check
  ```

## Reporting (Allure)

1. Run tests to produce `allure-results`.
2. Generate report:
   ```bash
   npm run allure:generate
   ```
3. Open report:
   ```bash
   npm run allure:open
   ```

## Architecture Notes

- **POM**: Place page-level interactions in `src/pages`.
- **COM**: Put reusable UI blocks in `src/components`.
- **Fixtures**: Keep shared custom fixtures in `src/fixtures` and import them in tests.
- **API Layer**: Encapsulate endpoint calls in `src/api` to keep tests readable.

## Collaboration Workflow (Students)

1. Create a feature branch from `main`:
   - `feature/<task-id>-short-description`
2. Keep commits small and focused.
3. Open a PR using the repository PR template.
4. Request review from teammates.
5. Merge only after CI passes and review comments are resolved.

## PR Checklist Requirement

Every PR must include:

- Description of changes
- Type of change (UI test/API test/framework enhancement/bug fix)
- Confirmation that:
  - tests pass locally,
  - lint and format checks pass,
  - POM/COM structure is followed,
  - no `page.waitForTimeout()`/hardcoded unstable data is used,
  - assertions are meaningful
- Related issue/task link or ID
