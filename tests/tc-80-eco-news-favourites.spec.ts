import { test, expect } from '@/fixtures';

test.describe('Eco News — favourites', () => {
  let newsHref: string | undefined;

  test.beforeEach(async ({ authenticatedUser, ecoNewsPage }) => {
    void authenticatedUser;
    newsHref = undefined;

    await ecoNewsPage.navigateToEcoNewsPage();
    await ecoNewsPage.waitForEcoNewsPage();
  });

  test.afterEach(async ({ page, ecoNewsPage }) => {
    if (!newsHref) return;

    await ecoNewsPage.navigateToEcoNewsPage();
    await page.reload();
    await ecoNewsPage.waitForEcoNewsPage();

    await ecoNewsPage.getNewsCardByHref(newsHref).removeFromFavourite();
  });

  test('TC-80 Verify adding and removing an Eco News item from favorites', async ({
    page,
    ecoNewsPage,
  }) => {
    await test.step('1: Locate the first Eco News card and record its title', async () => {
      const firstCard = ecoNewsPage.getNewsCard(0);
      newsHref = await firstCard.getHref();
      expect(newsHref, 'First card link should not be empty').not.toBe('');
      expect(await firstCard.getTitle(), 'First card title should not be empty').not.toBe('');

      await firstCard.removeFromFavourite();
    });

    await test.step('2: Click the favourites button on the selected card', async () => {
      const card = ecoNewsPage.getNewsCardByHref(newsHref!);
      await card.clickFavouriteButton();

      await expect(card.getFavouriteActiveFlag()).toBeVisible();
    });

    await test.step('3: Open the favourites section', async () => {
      await ecoNewsPage.openFavourites();

      await expect(ecoNewsPage.getNewsCardByHref(newsHref!).getFavouriteActiveFlag()).toBeVisible();
    });

    await test.step('4: Click the favourites button on the selected card again', async () => {
      const card = ecoNewsPage.getNewsCardByHref(newsHref!);
      await card.clickFavouriteButton();

      await expect(card.getFavouriteActiveFlag()).toBeHidden();
    });

    await test.step('5: Refresh the page and check favourites', async () => {
      await page.reload();
      await ecoNewsPage.waitForEcoNewsPage();
      await ecoNewsPage.openFavourites();

      await expect(page.locator(`a.link[href="${newsHref}"]`)).toHaveCount(0);
    });
  });
});
