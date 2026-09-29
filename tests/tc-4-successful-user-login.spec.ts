import { test, expect } from '@/fixtures';
import env from '@/config/env';
import { Language } from '@/types/header.types';

test.describe('User Authentication', () => {
  test('TC-4 Verify successful user login with valid credentials', async ({
    homePage,
    signInModal,
  }) => {
    await test.step('Open the Sign In modal', async () => {
      await homePage.navigateToHomePage();
      await homePage.waitForHomePage();
      await homePage.header.switchLanguage(Language.Uk);

      await homePage.header.clickSignIn();

      await signInModal.waitForVisible();
      expect(await signInModal.getTitle()).toBe('З поверненням!');
    });

    await test.step('Enter registered email and valid password', async () => {
      await signInModal.fillEmail(env.USER_EMAIL);
      await expect(signInModal.emailInput).toHaveValue(env.USER_EMAIL);

      await signInModal.fillPassword(env.USER_PASSWORD);
      await expect(signInModal.passwordInput).toHaveValue(env.USER_PASSWORD);
      await expect(signInModal.passwordInput).toHaveAttribute('type', 'password');
    });

    await test.step('Sign in and verify successful login', async () => {
      await signInModal.clickSignIn();

      await signInModal.waitForHidden();
      expect(await homePage.header.isLoggedIn()).toBe(true);
      await expect(homePage.header.signInButton).toBeHidden();
      await expect(homePage.header.userMenuDropdown).toBeVisible();
    });
  });
});
