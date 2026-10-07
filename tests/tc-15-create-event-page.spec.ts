import { test, expect } from '@/fixtures';
import { allureId, epic, feature, story, owner } from 'allure-js-commons';

test.describe('Create Event Page', () => {
  test('TC-15: Verify create event page fields, controls, and buttons', async ({
    authenticatedPage,
    eventsPage,
    createEventPage,
  }) => {
    const createEventPageAny = createEventPage as any;

    allureId('TC-15');
    epic('Events');
    feature('Create event');
    story('Create event page layout');
    owner('Yurii Koliada');

    await test.step('1. Open the Create event page', async () => {
      await authenticatedPage.waitForLoadState('domcontentloaded');
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
      await eventsPage.clickCreateEvent();
      await createEventPageAny.waitForCreateEventPage();
    });

    await test.step('2. Verify title and duration controls', async () => {
      await expect(createEventPageAny.titleInput, 'Title field should be visible').toBeVisible();
      await expect(
        createEventPageAny.titleField,
        'Title field should contain the expected placeholder text'
      ).toContainText('Enter a name for the event');
      await expect(
        createEventPageAny.durationSelect,
        'Duration dropdown should be visible'
      ).toBeVisible();
      await expect(
        createEventPageAny.durationSelect,
        'Duration should default to 1 day'
      ).toContainText('1 day');
    });

    await test.step('3. Verify duration settings and initiative types', async () => {
      for (const locator of [
        createEventPageAny.dayInput,
        createEventPageAny.startTimeInput,
        createEventPageAny.finishTimeInput,
        createEventPageAny.allDayCheckbox,
        createEventPageAny.placeCheckbox,
        createEventPageAny.onlineCheckbox,
      ]) {
        await expect(locator, 'Date, time, and duration controls should be visible').toBeVisible();
      }
      await expect(
        createEventPageAny.initiativeTypeLabels,
        'Economic, Social, and Environmental initiative types should be visible'
      ).toHaveText(['Economic', 'Social', 'Environmental']);
    });

    await test.step('4. Verify event type controls and description editor', async () => {
      await expect(
        createEventPageAny.eventTypeSelect,
        'Event type dropdown should be visible'
      ).toBeVisible();
      await expect(
        createEventPageAny.inviteSelect,
        'Invite type dropdown should be visible'
      ).toBeVisible();
      await expect(
        createEventPageAny.descriptionReminder,
        'Description length reminder should be visible'
      ).toBeVisible();
      await expect(
        createEventPageAny.description,
        'Description editor should be visible'
      ).toBeVisible();
      await expect(
        createEventPageAny.description,
        'Description editor should contain the expected placeholder'
      ).toHaveAttribute('data-placeholder', 'e.g. Short description of event, agenda for event');
    });

    await test.step('5. Verify picture section and action buttons', async () => {
      await expect(
        createEventPageAny.pictureSection,
        'Picture section should be visible'
      ).toBeVisible();
      await expect(
        createEventPageAny.pictureUploadHint,
        'Picture upload requirements should be visible'
      ).toBeVisible();
      await expect(createEventPageAny.cancelButton, 'Cancel button should be visible').toBeVisible();
      await expect(createEventPageAny.cancelButton, 'Cancel button should be enabled').toBeEnabled();
      await expect(createEventPageAny.previewButton, 'Preview button should be visible').toBeVisible();
      await expect(
        createEventPageAny.previewButton,
        'Preview button should be disabled'
      ).toBeDisabled();
      await expect(createEventPageAny.publishButton, 'Publish button should be visible').toBeVisible();
      await expect(
        createEventPageAny.publishButton,
        'Publish button should be disabled'
      ).toBeDisabled();
    });
  });
});
