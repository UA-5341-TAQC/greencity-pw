import { test, expect } from '@/fixtures';
import env from '@/config/env';

test.describe('Create Event - Picture field validations', () => {
  test('TC-43: Verify pop error message "1 image minimum" for Picture field (negative)', async ({
    authenticatedPage,
    eventsPage,
    createEventPage,
  }) => {
    await test.step('Preconditions: navigate to Events page as registered and logged in user', async () => {
      await authenticatedPage.waitForLoadState('domcontentloaded');
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
    });

    await test.step('1: Click the "Create event" button', async () => {
      await eventsPage.clickCreateEvent();
      await createEventPage.waitForCreateEventPage();
    });

    await test.step('Steps 2 & 3: Scroll down and locate "Picture" field', async () => {
      await createEventPage.pictures.scrollTo();
      await expect(createEventPage.pictures.title).toBeVisible();
    });

    await test.step('4: Verify default picture is selected with "Main" badge', async () => {
      expect(await createEventPage.pictures.getImagesCount()).toBe(1);
      const mainImage = createEventPage.pictures.getMainImage();
      await expect(mainImage.image).toBeVisible();
      await expect(mainImage.badge).toHaveText('Main');
    });

    await test.step('5: Click cross element and verify popup error message appears and disappears', async () => {
      const mainImage = createEventPage.pictures.getMainImage();
      await mainImage.clickDelete();

      await expect(createEventPage.toastMessage).toBeVisible();
      await expect(createEventPage.toastMessage).toContainText('1 image minimum');
      await expect(createEventPage.toastMessage).toBeHidden({ timeout: env.MEDIUM_TIMEOUT });

      expect(await createEventPage.pictures.getImagesCount()).toBe(1);
    });
  });
});
