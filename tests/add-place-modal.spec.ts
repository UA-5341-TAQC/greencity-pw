import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

test.describe('Places', () => {
  test.beforeEach(async ({ authenticatedPage }) => {
    await expect(authenticatedPage).toHaveURL(/greenCity/);
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
      await expect(addPlaceModal.categorySelect).toBeVisible();
    });

    await test.step('Verify the Name and Address fields are displayed', async () => {
      await expect(addPlaceModal.nameInput).toBeVisible();
      await expect(addPlaceModal.addressInput).toBeVisible();
    });

    await test.step("Verify the 'Cancel' and 'Add' buttons are displayed", async () => {
      await expect(addPlaceModal.cancelButton).toBeVisible();
      await expect(addPlaceModal.addButton).toBeVisible();
    });
  });
});
