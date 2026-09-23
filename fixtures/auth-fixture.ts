import { type Page } from '@playwright/test';
import { test as baseTest, expect as baseExpect } from '@/fixtures/base-fixture';
import env from '@/config/env';
import { LocalStorageManager, signInViaApi, type AuthSessionData } from '@/helpers';

import { HeaderComponent } from '@/components';

type AuthWorkerFixtures = {
  authSession: AuthSessionData;
};

type AuthTestFixtures = {
  authenticatedPage: Page;
};

export const test = baseTest.extend<AuthTestFixtures, AuthWorkerFixtures>({
  authSession: [
    async ({ playwright }, use): Promise<void> => {
      const apiContext = await playwright.request.newContext();
      const session = await signInViaApi(apiContext);
      await use(session);
      await apiContext.dispose();
    },
    { scope: 'worker' },
  ],

  authenticatedPage: async ({ page, authSession }, use): Promise<void> => {
    await test.step('Precondition: initialize authenticated user page', async () => {
      const storage = new LocalStorageManager(page);
      await storage.init({
        accessToken: authSession.accessToken,
        refreshToken: authSession.refreshToken,
        userId: String(authSession.userId),
        name: authSession.name,
        language: 'en',
      });
      const targetUrl = env.BASE_URL.includes('#/greenCity')
        ? env.BASE_URL
        : `${env.BASE_URL.replace(/\/+$/, '')}/#/greenCity`;
      await page.goto(targetUrl);
      const header = new HeaderComponent(page);
      await baseExpect(header.userMenuDropdown).toBeVisible({
        timeout: env.MEDIUM_TIMEOUT,
      });
    });

    await use(page);
  },
});

export { baseExpect as expect };
