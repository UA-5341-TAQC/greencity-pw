import { test, expect } from '@/fixtures';
import { TEST_VALID_IMAGE_PATH, TEST_NOT_VALID_IMAGE_PATH } from '@/assets';
import { createSimpleEvent } from '@/helpers/';

test.describe('TC-23 Edit event image upload validations', () => {
  test('Verify image upload validations (minimum limit, invalid format, maximum limit)', async ({
    authenticatedPage,
    eventsPage,
    editEventPage,
    createEventPage,
  }) => {
    await test.step('Open the Events list as an authenticated user', async () => {
      expect(await eventsPage.header.isLoggedIn()).toBe(true);
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();

      await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
    });

    await test.step('Open the edit form for an author event', async () => {
      const ownedEventCard = await eventsPage.getFirstEditableEventCard();
      if (!(await eventsPage.hasEditableEventCard())) {
        await createSimpleEvent(authenticatedPage, eventsPage, createEventPage);
      }

      await ownedEventCard.waitForVisible();
      await ownedEventCard.clickEditEvent();

      await expect(authenticatedPage).toHaveURL(/create-update-event\/\d+$/);
      await editEventPage.waitForEditEventPage();
    });

    await test.step('1: Verify minimum limit - attempt to delete the only image', async () => {
      const initialImageCount = await editEventPage.getAttachedImagesCount();
      expect(initialImageCount).toBe(1);

      await editEventPage.deleteUploadedImage();

      const toastMessage = await editEventPage.getToastMessage();
      expect(toastMessage).toBe('1 image minimum');

      const imageCountAfterDelete = await editEventPage.getAttachedImagesCount();
      expect(imageCountAfterDelete).toBe(1);
    });

    await test.step('2: Verify invalid format rejection', async () => {
      await editEventPage.uploadImage(TEST_NOT_VALID_IMAGE_PATH);

      const toastMessage = await editEventPage.getToastMessage();
      expect(toastMessage).toBe('Incorrect image type. Use files in JPG or PNG format instead');

      const imageCountAfterInvalidUpload = await editEventPage.getAttachedImagesCount();
      expect(imageCountAfterInvalidUpload).toBe(1);
    });

    await test.step('3: Upload valid custom image', async () => {
      await editEventPage.uploadImage(TEST_VALID_IMAGE_PATH);

      await editEventPage.waitForImageUpload(2);

      const imageCounter = await editEventPage.getImageCounter();
      expect(imageCounter).toBe('2/5');

      const currentImageCount = await editEventPage.getAttachedImagesCount();
      expect(currentImageCount).toBe(2);
    });

    await test.step('4: Add default Greencity images until maximum limit', async () => {
      for (let i = 0; i < 3; i++) {
        await editEventPage.selectDefaultImageByIndex(i);
        await editEventPage.waitForImageUpload(i + 3);
      }

      const imageCounter = await editEventPage.getImageCounter();
      expect(imageCounter).toBe('5/5');

      const finalImageCount = await editEventPage.getAttachedImagesCount();
      expect(finalImageCount).toBe(5);
    });

    await test.step('5: Verify maximum limit - attempt to add 6th image', async () => {
      await editEventPage.selectDefaultImageByIndex(0);

      const toastMessage = await editEventPage.getToastMessage();
      expect(toastMessage).toBe('You can upload max 5 photos');

      const imageCountAfterMaxAttempt = await editEventPage.getAttachedImagesCount();
      expect(imageCountAfterMaxAttempt).toBe(5);

      const imageCounter = await editEventPage.getImageCounter();
      expect(imageCounter).toBe('5/5');
    });
  });
});
