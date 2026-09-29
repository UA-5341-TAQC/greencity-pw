import { test, expect } from '@/fixtures';

const EVENT_TITLE = 'Community Cleanup Saturday';
const EVENT_ID = 56;

test.describe('Events - Edit Event', () => {
  test.beforeEach(async ({ authenticatedUser }) => {
    void authenticatedUser;
  });

  test('TC-21 Verify that a non-author cannot access the Edit functionality via UI or direct URL', async ({
    page,
    eventsPage,
    eventDetailsPage,
  }) => {
    await test.step('Open the Events page', async () => {
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
    });

    await test.step('Locate the event created by another user', async () => {
      const eventCard = eventsPage.getGridEventCardByTitle(EVENT_TITLE);

      expect(await eventCard.getTitle()).toBe(EVENT_TITLE);
    });

    await test.step("Verify the 'Edit event' button is not displayed on the event card", async () => {
      const eventCard = eventsPage.getGridEventCardByTitle(EVENT_TITLE);

      expect(await eventCard.isEditEventButtonVisible()).toBe(false);
    });

    await test.step("Click the 'More' button", async () => {
      const eventCard = eventsPage.getGridEventCardByTitle(EVENT_TITLE);

      await eventCard.clickMore();
      await eventDetailsPage.waitForDetailsPage();
    });

    await test.step("Verify the 'Edit' button is not displayed on the Event Details page", async () => {
      expect(await eventDetailsPage.isEditEventButtonVisible()).toBe(false);
    });

    await test.step('[Known Bug] Verify direct access to the Edit Event page is denied', async () => {
      await page.goto(`/#/greenCity/events/create-update-event/${EVENT_ID}`);

      await expect(page).not.toHaveURL(
        new RegExp(`#/greenCity/events/create-update-event/${EVENT_ID}$`)
      );
    });
  });
});
