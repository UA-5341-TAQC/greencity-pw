import { test, expect } from '@/fixtures';
import env from '@/config/env';

test.describe('Eco News — favourites', () => {
  let newsTitle: string | undefined;

  test.beforeEach(async ({ ecoNewsPage, signInModal }) => {
    newsTitle = undefined;

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.header.clickSignIn();
    await signInModal.signIn(env.USER_EMAIL, env.USER_PASSWORD);
    await signInModal.waitForHidden();
    expect(await ecoNewsPage.header.isLoggedIn()).toBe(true);

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
  });

  test.afterEach(async ({ ecoNewsPage, page }) => {
    if (!newsTitle) return;

    await ecoNewsPage.navigateToEcoNewsPage();
    await page.reload(); // скидає фільтр обраного (Firefox не робить цього при goto на той самий URL)
    await ecoNewsPage.waitForEcoNewsPage();

    const card = ecoNewsPage.getNewsCardByTitle(newsTitle);
    if (await card.isFavourite()) {
      await card.clickFavouriteButton();
    }
  });

  test('TC-80 Verify adding and removing an Eco News item from favorites', async ({
    ecoNewsPage,
    page,
  }) => {
    await test.step('1: Locate the first Eco News card and record its title', async () => {
      const firstCard = ecoNewsPage.getNewsCard(0);
      newsTitle = await firstCard.getTitle();
      expect(newsTitle, 'First card title should not be empty').not.toBe('');

      // Чистий стартовий стан: новина ще не в обраному
      if (await firstCard.isFavourite()) {
        await firstCard.clickFavouriteButton();
        await expect(firstCard.getFavouriteActiveFlag()).toBeHidden();
      }
    });

    await test.step('2: Click the favourites button on the selected card', async () => {
      const card = ecoNewsPage.getNewsCardByTitle(newsTitle!);
      await card.clickFavouriteButton();

      await expect(card.getFavouriteActiveFlag()).toBeVisible();
    });

    await test.step('3: Open the favourites section', async () => {
      await ecoNewsPage.openFavourites();

      await expect(
        ecoNewsPage.getNewsCardByTitle(newsTitle!).getFavouriteActiveFlag()
      ).toBeVisible();
    });

    await test.step('4: Click the favourites button on the selected card again', async () => {
      const card = ecoNewsPage.getNewsCardByTitle(newsTitle!);
      await card.clickFavouriteButton();

      await expect(card.getFavouriteActiveFlag()).toBeHidden();
    });

    await test.step('5: Refresh the page and check favourites', async () => {
      await page.reload();
      await ecoNewsPage.waitForEcoNewsPage();
      await ecoNewsPage.openFavourites();

      await expect(page.getByRole('heading', { name: newsTitle!, exact: true })).toHaveCount(0);
    });
  });
});
