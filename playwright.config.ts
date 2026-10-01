import { defineConfig, devices } from '@playwright/test';
import env from '@/config/env';

const isCI = !!process.env.CI;
const desktopViewport = { width: 1920, height: 1080 };

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: isCI,
  retries: isCI ? 2 : 0,
  // 1 worker made the CI job serial; GitHub-hosted runners have several cores
  workers: isCI ? 2 : undefined,
  reporter: [
    ['list'],
    // needed for `npm run report:pw` and for the playwright-report artifact in CI
    ['html', { open: 'never' }],
    // allure-playwright v3 uses `resultsDir` (default is already "allure-results")
    ['allure-playwright', { resultsDir: 'allure-results' }],
    // machine-readable result, used by CI to tell test failures from real errors
    ['json', { outputFile: 'playwright-results.json' }],
  ],
  use: {
    trace: 'on-first-retry',
    baseURL: env.BASE_URL,
    headless: env.HEADLESS,
    actionTimeout: env.MEDIUM_TIMEOUT,
    navigationTimeout: env.LONG_TIMEOUT,
    ignoreHTTPSErrors: true,
    video: 'off',
    screenshot: 'only-on-failure',
  },
  timeout: env.LONG_TIMEOUT,
  expect: {
    timeout: env.MEDIUM_TIMEOUT,
  },

  projects: [
    // Required by the CI matrix (`--project=api`). No browser is launched
    // unless a test asks for the `page` fixture.
    {
      name: 'api',
      testDir: './tests/api',
    },

    // UI projects only look in tests/ui, so they never pick up API specs
    {
      name: 'chromium',
      testDir: './tests/ui',
      use: { ...devices['Desktop Chrome'], viewport: desktopViewport },
    },
    {
      name: 'firefox',
      testDir: './tests/ui',
      use: { ...devices['Desktop Firefox'], viewport: desktopViewport },
    },
    {
      name: 'webkit',
      testDir: './tests/ui',
      use: { ...devices['Desktop Safari'], viewport: desktopViewport },
    },
  ],
});
