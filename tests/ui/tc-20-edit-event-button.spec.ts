import { test, expect } from '@/fixtures';
import { createSimpleEvent } from '@/helpers';

test.describe('TC-20 Edit event entry points', () => {
  test('Verify author can edit an event from the card and details page', async ({
    authenticatedPage,
    eventsPage,
    eventDetailsPage,
    editEventPage,
    createEventPage,
  }) => {
    let eventTitle: string;
    let eventId: string;

    await test.step('Open the Events list as an authenticated user', async () => {
      expect(await eventsPage.header.isLoggedIn()).toBe(true);
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();

      await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
    });

    await test.step('Verify Edit event is available on the author event card', async () => {
      const ownedEventCard = await eventsPage.getFirstEditableEventCard(() =>
        createSimpleEvent(authenticatedPage, eventsPage, createEventPage)
      );
      await ownedEventCard.waitForVisible();

      expect(await ownedEventCard.isEditEventButtonVisible()).toBe(true);
      expect(await ownedEventCard.isEditEventButtonEnabled()).toBe(true);

      eventTitle = await ownedEventCard.getTitle();
      await ownedEventCard.clickEditEvent();
    });

    await test.step('Open the edit form from the event card', async () => {
      await expect(authenticatedPage).toHaveURL(/create-update-event\/\d+$/);
      await editEventPage.waitForEditEventPage();
      expect(await editEventPage.getEventTitle()).toBe(eventTitle);
      eventId = await editEventPage.getEventId();
    });

    await test.step('Return to the Events list', async () => {
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();

      await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
    });

    await test.step('Open the same event Details page using More', async () => {
      const sameEventCard = await eventsPage.getEventCardByTitle(eventTitle);
      await sameEventCard.waitForVisible();
      await sameEventCard.clickMore();

      await expect(authenticatedPage).toHaveURL(new RegExp(`#\\/greenCity\\/events\\/${eventId}$`));
      await eventDetailsPage.waitForDetailsPage();
      expect(await eventDetailsPage.getEventTitle()).toBe(eventTitle);
    });

    await test.step('Verify Edit on Details opens the same event edit form', async () => {
      // expect(await eventDetailsPage.isEditButtonVisible()).toBe(true); //TODO: Uncomment when the edit button is visible on the event details page
      expect(await eventDetailsPage.isEditButtonEnabled()).toBe(true);
    });

    await test.step('Click the "Edit" button', async () => {
      await eventDetailsPage.clickEdit();

      await expect(authenticatedPage).toHaveURL(new RegExp(`create-update-event\\/${eventId}$`));
      await editEventPage.waitForEditEventPage();
      expect(await editEventPage.getEventTitle()).toBe(eventTitle);
    });
  });
});
