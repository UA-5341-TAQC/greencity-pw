import { test, expect } from '@/fixtures';
import env from '@/config/env';
import { MenuItem } from '@/types/header.types';

test.describe('Page layout and key sections', () => {
  test('TC-35 Verify profile page layout and key sections after login', async ({
    page,
    homePage,
    profilePage,
    signInModal,
  }) => {
    await test.step('1.Open the main GreenCity page', async () => {
      await homePage.navigateToHomePage();
      await homePage.waitForHomePage();
      await homePage.header.clickSignIn();
      await signInModal.waitForVisible();
      await signInModal.signIn(env.USER_EMAIL, env.USER_PASSWORD);
      await homePage.header.verifyAllNavLinksAreVisible();
    });

    await test.step('2.Click "Мій Кабінет" (My Cabinet) in the header', async () => {
      await homePage.header.navigateTo(MenuItem.MySpace);
      await profilePage.waitForProfile();
      await expect(page).toHaveURL(/\/greenCity\/profile(?:\/\d+)?$/);
    });

    await test.step('3. Observe the left profile card', async () => {
      await expect(profilePage.profileHeader.avatar).toBeVisible();
      await expect(profilePage.profileHeader.status).toBeVisible();
      await expect(profilePage.profileHeader.name).toBeVisible();
      await expect(profilePage.profileHeader.rate).toBeVisible();

      const rateActual = await profilePage.profileHeader.getRateText();
      expect(rateActual).toBe('Rate: 0');

      await expect(profilePage.profileHeader.progress).toBeVisible();
    });

    await test.step('4. Check personal counters on the left card', async () => {
      await expect(profilePage.profileHeader.acquiredHabits).toBeVisible();
      await expect(profilePage.profileHeader.publishedNews).toBeVisible();
      await expect(profilePage.profileHeader.habitsInProgress).toBeVisible();
      await expect(profilePage.profileHeader.eventsCount).toBeVisible();

      const actualLables = await profilePage.profileHeader.getProgressLabels();
      expect(actualLables.acquiredHabits).toBe('acquired habits');
      expect(actualLables.habitsInProgress).toBe('habits in progress');
      expect(actualLables.publishedNews).toBe('published news');
      expect(actualLables.events).toBe('organized and attended events');

      const stats = await profilePage.profileHeader.getProgressStats();
      expect(stats.acquiredHabits).toBeGreaterThanOrEqual(0);
      expect(stats.publishedNews).toBeGreaterThanOrEqual(0);
      expect(stats.habitsInProgress).toBeGreaterThanOrEqual(0);
      expect(stats.events).toBeGreaterThanOrEqual(0);
    });

    await test.step('5. Check lower left sections.', async () => {
      await expect(profilePage.achievements.title).toBeVisible(); //"Мої досягнення"
      await expect(profilePage.friendsWidget.title).toBeVisible(); //"Мої Друзі"
      await expect(profilePage.myEcoPlacesWidget.title).toBeVisible(); //"Мої Еко Місця"
    });

    await test.step('6.Observe main content tabs.', async () => {
      await expect(profilePage.newsTab.tabHeader).toBeVisible();
      await expect(profilePage.habitsTab.tabHeader).toBeVisible();
      await expect(profilePage.eventsTab.tabHeader).toBeVisible();

      await expect(profilePage.habitsTab.tabHeader).toHaveAttribute('aria-selected', 'true');
    });

    await test.step('7.Observe right sidebar.', async () => {
      await expect(profilePage.calendar).toBeVisible();
      await expect(profilePage.factOfTheDay.title).toBeVisible();
      await expect(profilePage.factOfTheDay.description).toBeVisible();

      const factText = await profilePage.factOfTheDay.getFactText();
      expect(factText.length).toBeGreaterThan(0);

      await expect(profilePage.myToDoList.header).toBeVisible();
      await expect(profilePage.myToDoList.itemsCount).toBeVisible();
    });
  });
});
