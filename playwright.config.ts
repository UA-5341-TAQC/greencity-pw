import { defineConfig } from '@playwright/test';

const uiBaseUrl = 'https://www.greencity.cx.ua/#/greenCity';
const apiBaseUrl = 'https://www.greencity.cx.ua';

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: [['line'], ['allure-playwright']],
  use: {
    baseURL: uiBaseUrl,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  projects: [
    {
      name: 'chromium',
      testMatch: /tests\/ui\/.*\.spec\.ts/,
      use: { browserName: 'chromium' }
    },
    {
      name: 'firefox',
      testMatch: /tests\/ui\/.*\.spec\.ts/,
      use: { browserName: 'firefox' }
    },
    {
      name: 'webkit',
      testMatch: /tests\/ui\/.*\.spec\.ts/,
      use: { browserName: 'webkit' }
    },
    {
      name: 'api',
      testMatch: /tests\/api\/.*\.spec\.ts/,
      use: { baseURL: apiBaseUrl }
    }
  ]
});
