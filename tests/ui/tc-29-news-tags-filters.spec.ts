import { test, expect } from '@/fixtures';

const NEWS_TAGS = ['News', 'Events', 'Education', 'Initiatives', 'Ads'];

test.describe('TC-29 Eco News tags and filters', () => {
  test('Verify available tags and filtering functionality', async ({
    authenticatedPage,
    ecoNewsPage,
  }) => {
    await test.step('Open Eco News as an authenticated user', async () => {
      await authenticatedPage.waitForLoadState('domcontentloaded');
      await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
      await ecoNewsPage.navigateToEcoNewsPage();
      await ecoNewsPage.waitForEcoNewsPage();
      await ecoNewsPage.clickListView();
      await ecoNewsPage.listViewCards.first().waitFor({ state: 'visible' });
    });

    await test.step('Verify the five available tag filters', async () => {
      expect(await ecoNewsPage.getTagNames()).toEqual(NEWS_TAGS);
    });

    const defaultCardCount = await ecoNewsPage.getNewsCardsCount();
    expect(defaultCardCount).toBeGreaterThan(0);

    const defaultTitles = await Promise.all(
      Array.from({ length: defaultCardCount }, async (_, index) =>
        ecoNewsPage.getNewsCard(index).getTitle()
      )
    );

    for (const tag of NEWS_TAGS) {
      await test.step(`Filter Eco News by ${tag} and clear the filter`, async () => {
        await ecoNewsPage.filterByTag(tag);

        await expect
          .poll(async () => {
            const cardCount = await ecoNewsPage.getNewsCardsCount();
            const cardTags = await Promise.all(
              Array.from({ length: cardCount }, async (_, index) =>
                ecoNewsPage.getNewsCard(index).getTags()
              )
            );

            return (
              cardCount > 0 &&
              cardTags.every((tags) => tags.map((cardTag) => cardTag.trim()).includes(tag))
            );
          })
          .toBe(true);

        const filteredCardCount = await ecoNewsPage.getNewsCardsCount();
        for (let index = 0; index < filteredCardCount; index++) {
          const cardTags = (await ecoNewsPage.getNewsCard(index).getTags()).map((cardTag) =>
            cardTag.trim()
          );
          expect(cardTags).toContain(tag);
        }

        await ecoNewsPage.filterByTag(tag);
        await expect(ecoNewsPage.listViewCards).toHaveCount(defaultCardCount);

        const restoredTitles = await Promise.all(
          Array.from({ length: defaultCardCount }, async (_, index) =>
            ecoNewsPage.getNewsCard(index).getTitle()
          )
        );
        expect(restoredTitles).toEqual(defaultTitles);
      });
    }
  });
});
