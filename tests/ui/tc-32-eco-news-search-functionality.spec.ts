import { test, expect } from '@/fixtures';

const SEARCH_QUERY = 'Test';

test.describe('Eco News - Search', () => {
  test('TC-32 Verify Eco News search functionality', async ({ ecoNewsPage }) => {
    await test.step('Open the Eco News page', async () => {
      await ecoNewsPage.navigateToEcoNewsPage();
      await ecoNewsPage.waitForEcoNewsPage();
    });

    await test.step('Click the search button', async () => {
      await ecoNewsPage.openSearch();
    });

    await test.step('Enter the first letter "T" and verify search results are updated', async () => {
      await ecoNewsPage.typeSearchText(SEARCH_QUERY[0]);
      await ecoNewsPage.waitForSearchResults();
    });

    await test.step('Continue entering text until "Test" is entered and verify search results are updated', async () => {
      await ecoNewsPage.typeSearchText(SEARCH_QUERY.slice(1));
      await ecoNewsPage.waitForSearchResults();
    });

    await test.step('Verify search results are displayed', async () => {
      expect(await ecoNewsPage.getNewsCardsCount()).toBeGreaterThan(0);
    });

    await test.step('Clear the search field', async () => {
      await ecoNewsPage.clearSearch();
    });
  });
});
