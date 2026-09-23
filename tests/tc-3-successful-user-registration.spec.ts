import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

test.describe('User Registration', () => {
  test('TC-3 Verify successful user registration with valid credentials', async ({
    homePage,
    signUpModal,
  }) => {
    await test.step('Open the Sign Up modal', async () => {
      await homePage.navigateToHomePage();
      await homePage.waitForHomePage();
      await homePage.header.switchLanguage(Language.Uk);

      await homePage.header.clickSignUp();

      await signUpModal.waitForVisible();
      expect(await signUpModal.getTitle()).toBe('Вітаємо!');
    });

    await test.step('Enter unregistered email, name and password', async () => {
      const email = `test.user${Date.now()}@gmail.com`;

      await signUpModal.fillEmail(email);
      await expect(signUpModal.emailInput).toHaveValue(email);

      await signUpModal.fillFirstName('Test User');
      await expect(signUpModal.firstNameInput).toHaveValue('Test User');

      await signUpModal.fillPassword('GreenPass#2026');
      await expect(signUpModal.passwordInput).toHaveValue('GreenPass#2026');
      await expect(signUpModal.passwordInput).toHaveAttribute('type', 'password');

      await signUpModal.fillConfirmPassword('GreenPass#2026');
      await expect(signUpModal.confirmPasswordInput).toHaveValue('GreenPass#2026');
      await expect(signUpModal.confirmPasswordInput).toHaveAttribute('type', 'password');

      await signUpModal.clickSignUp();
      await signUpModal.waitForHidden();

      await expect(homePage.toastMessage).toContainText(
        'Вітання! Ви успішно зареєструвалися на сайті.'
      );
    });

  });
});
