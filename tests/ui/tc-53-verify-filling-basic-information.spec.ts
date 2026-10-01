import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';
import { PlaceCategory } from '@/types/places.types';

const PLACE_NAME = 'Test Place';

test.describe('Places', () => {
  test.beforeEach(async ({ authenticatedUser }) => {
    void authenticatedUser;
  });

  test('TC-53 Verify filling basic information in Add Place modal', async ({
    placesPage,
    addPlaceModal,
  }) => {
    await test.step('Open the Add Place modal in English', async () => {
      await placesPage.navigateToPlacesPage();
      await placesPage.waitForPlacesPage();
      await placesPage.header.switchLanguage(Language.En);

      await placesPage.clickAddPlaceButton();
      await addPlaceModal.waitForVisible();
    });

    await test.step("Select 'Shops' from Category", async () => {
      await addPlaceModal.selectCategory(PlaceCategory.Shops);
    });

    await test.step('Enter a place name into the Name field', async () => {
      await addPlaceModal.fillName(PLACE_NAME);
    });

    await test.step("Verify the selected Category is 'Shops'", async () => {
      expect(await addPlaceModal.getSelectedCategory()).toBe(PlaceCategory.Shops);
    });

    await test.step('Verify the value in the Name field', async () => {
      expect(await addPlaceModal.getNameValue()).toBe(PLACE_NAME);
    });

    await test.step("Verify the 'Add' button remains disabled", async () => {
      expect(await addPlaceModal.isAddButtonEnabled()).toBe(false);
    });
  });
});
