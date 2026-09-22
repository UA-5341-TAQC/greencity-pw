import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

test.describe('Places', () => {
  test.beforeEach(async ({ authenticatedUser }) => {
    void authenticatedUser;
  });

  test('TC-52 Verify opening the Add Place modal', async ({ placesPage, addPlaceModal }) => {
    await test.step('Open the Places page in English', async () => {
      await placesPage.navigateToPlacesPage();
      await placesPage.waitForPlacesPage();
      await placesPage.header.switchLanguage(Language.En);
    });

    await test.step("Click the 'Add place' button", async () => {
      await placesPage.clickAddPlaceButton();
    });

    await test.step('Verify the Add Place modal is displayed', async () => {
      await addPlaceModal.waitForVisible();
    });

    await test.step('Verify the Category control is displayed', async () => {
      expect(await addPlaceModal.isCategoryVisible()).toBe(true);
    });

    await test.step('Verify the Name and Address fields are displayed', async () => {
      expect(await addPlaceModal.isNameInputVisible()).toBe(true);
      expect(await addPlaceModal.isAddressInputVisible()).toBe(true);
    });

    await test.step("Verify the 'Cancel' and 'Add' buttons are displayed", async () => {
      expect(await addPlaceModal.isCancelButtonVisible()).toBe(true);
      expect(await addPlaceModal.isAddButtonVisible()).toBe(true);
    });
  });
});
