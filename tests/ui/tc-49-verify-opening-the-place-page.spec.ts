import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

test.describe('Places', () => {
  test.beforeEach(async ({ authenticatedUser }) => {
    void authenticatedUser;
  });

  test('TC-49 Verify opening the Places page', async ({ page, placesPage }) => {
    await test.step('Open the Places page in English', async () => {
      await placesPage.navigateToPlacesPage();
      await placesPage.waitForPlacesPage();
      await placesPage.header.switchLanguage(Language.En);
    });

    await test.step('Verify the Places page is displayed', async () => {
      await expect(page).toHaveURL(/\/#\/greenCity\/places$/);
    });

    await test.step('Verify the Search field is displayed', async () => {
      expect(await placesPage.search.isSearchVisible()).toBe(true);
    });

    await test.step('Verify category filters are displayed', async () => {
      expect(await placesPage.filters.areFiltersVisible()).toBe(true);
    });

    await test.step("Verify the 'Add place' button is displayed", async () => {
      expect(await placesPage.isAddPlaceButtonVisible()).toBe(true);
    });
  });
});
