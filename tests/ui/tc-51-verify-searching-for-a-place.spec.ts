import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

const SEARCH_QUERY = 'Test';

test.describe('Places', () => {
  test.beforeEach(async ({ authenticatedUser }) => {
    void authenticatedUser;
  });

  test('TC-51 Verify searching for a place', async ({ placesPage }) => {
    await test.step('Open the Places page in English', async () => {
      await placesPage.navigateToPlacesPage();
      await placesPage.waitForPlacesPage();
      await placesPage.header.switchLanguage(Language.En);
    });

    await test.step('Enter a place name into the Search field', async () => {
      await placesPage.search.fillSearch(SEARCH_QUERY);

      expect(await placesPage.search.getSearchValue()).toBe(SEARCH_QUERY);
    });
  });
});
