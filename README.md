# GreenCity Playwright Tests

End-to-end tests for the GreenCity web application, written with Playwright and TypeScript.

## Prerequisites

- Node.js 24 or later
- npm
- Access to the GreenCity application under test

## Setup

Install dependencies and the Playwright browser binaries:

```bash
npm install
npx playwright install
```

Create a `.env` file in the project root when the default settings are not suitable:

```bash
cp .env.example .env
```

Then update the values as needed:

```env
BASE_URL=http://localhost:3000
API_URL=http://localhost:8080
HEADLESS=true
USER_EMAIL=your-email@example.com
USER_PASSWORD=your-password
SHORT_TIMEOUT=5000
MEDIUM_TIMEOUT=10000
LONG_TIMEOUT=30000
```

`BASE_URL` defaults to `http://localhost:3000`, and `API_URL` defaults to `http://localhost:8080`.
`HEADLESS` is enabled by default; set it to `false` to run tests with a visible browser.
Timeouts are configured in milliseconds: `SHORT_TIMEOUT` is used for short waits, `MEDIUM_TIMEOUT` for actions and assertions, and `LONG_TIMEOUT` for test and navigation limits.

## Running Tests

Run the full Playwright suite:

```bash
npm run test # runs all tests in the default browser (Chromium)
npm run test:all # runs all tests in all browsers
```

Run a specific test file or browser project:

```bash
npx playwright test tests/example.spec.ts
npx playwright test --project=chromium
```

Run tests with the Playwright UI:

```bash
npx playwright test --ui
```

## Reports

Open the latest Playwright HTML report:

```bash
npm run report:pw
```

Generate and open an Allure report:

```bash
npm run report
```

## Quality Checks

```bash
npm run lint
npm run format:check
```

`npm run pc` formats the project, applies ESLint fixes, runs linting, and verifies formatting.

## Project Structure

```text
config/     Environment configuration
types/      Shared enums and types
pages/      Page object models
components/ UI components
modals/     Modal components
fixtures/   Test fixtures
tests/      Playwright test specifications
```
