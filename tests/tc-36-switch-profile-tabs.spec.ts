import { test, expect } from '@/fixtures';
import { Language, MenuItem } from '@/types/header.types';

test.describe('Profile tabs', () => {
  test('Verify user can switch between My Habits, My News, and My Events tabs', async ({
    authenticatedPage,
    homePage,
    profilePage,
  }) => {
    await test.step('Precondition: open profile page', async () => {
      await homePage.header.switchLanguage(Language.Uk);

      await homePage.header.navigateTo(MenuItem.MySpace);

      await profilePage.waitForProfile();
    });

    await test.step('Verify My Habits tab is initially active', async () => {
      await expect(profilePage.tabHeader.habitsTab).toHaveClass(/active/);
      await profilePage.habitsTab.waitForVisible();
    });

    await test.step('Switch to My News tab', async () => {
      await profilePage.tabHeader.newsTab.click();

      await expect(profilePage.tabHeader.newsTab).toHaveClass(/active/);
      await profilePage.newsTab.waitForVisible();
    });

    await test.step('Switch to My Events tab', async () => {
      await profilePage.tabHeader.eventsTab.click();

      await expect(profilePage.tabHeader.eventsTab).toHaveClass(/active/);
      await profilePage.eventsTab.waitForVisible();
    });

    await test.step('Switch back to My Habits tab', async () => {
      await profilePage.tabHeader.habitsTab.click();

      await expect(profilePage.tabHeader.habitsTab).toHaveClass(/active/);
      await profilePage.habitsTab.waitForVisible();
    });

    await test.step('Verify only My Habits tab is active', async () => {
      await expect(profilePage.tabHeader.habitsTab).toHaveClass(/active/);
      await expect(profilePage.tabHeader.newsTab).not.toHaveClass(/active/);
      await expect(profilePage.tabHeader.eventsTab).not.toHaveClass(/active/);
    });
  });
});
