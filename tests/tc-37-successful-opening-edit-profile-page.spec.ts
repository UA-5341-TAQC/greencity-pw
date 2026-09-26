import { test, expect } from '@/fixtures';
import env from '@/config/env';
import { Language, MenuItem } from '@/types/header.types';
import { loginUser } from '@/helpers/login-user';

test.describe('Edit Profile page', () => {
  test('TC-37 Verify pencil icon opens Edit Profile page', async ({
    page,
    homePage,
    profilePage,
    editProfilePage,
    signInModal,
  }) => {
    await test.step('Open profile page', async () => {
      await homePage.navigateToHomePage();
      await homePage.waitForHomePage();
      await homePage.header.switchLanguage(Language.Uk);

      await loginUser(homePage, signInModal);

      await homePage.header.navigateTo(MenuItem.MySpace);

      await profilePage.waitForProfile();
    });

    await test.step('Click pencil icon to open Edit Profile page', async () => {
      await profilePage.profileHeader.clickEdit();

      await editProfilePage.waitForEditProfile();

      await expect(page).toHaveURL(/\/greenCity\/profile\/\d+\/edit/);

      expect(await editProfilePage.getTitle()).toBe('Редагування профілю');

      await expect(editProfilePage.nameInput).toBeVisible();
      await expect(editProfilePage.form).toBeVisible();
    });

    await test.step('Return to profile page without saving', async () => {
      // await editProfilePage.clickCancel();
      await page.goBack();

      await profilePage.waitForProfile();

      await expect(page).toHaveURL(/\/greenCity\/profile(?:\/\d+)?$/);
    });
  });
});
