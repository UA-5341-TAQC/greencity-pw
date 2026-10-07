import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';
import { PlaceFilter } from '@/types/places.types';

test.describe('Places', () => {
  test.beforeEach(async ({ authenticatedUser }) => {
    void authenticatedUser;
  });

  test('TC-50 Verify filtering places by category', async ({ placesPage }) => {
    await test.step('Open the Places page in English', async () => {
      await placesPage.navigateToPlacesPage();
      await placesPage.waitForPlacesPage();
      await placesPage.header.switchLanguage(Language.En);
    });

    await test.step("Select the 'Shops' category", async () => {
      await placesPage.filters.selectFilter(PlaceFilter.Shops);
    });

    await test.step("Verify the 'Shops' filter is selected", async () => {
      expect(await placesPage.filters.isFilterSelected(PlaceFilter.Shops)).toBe(true);
    });
  });
});
