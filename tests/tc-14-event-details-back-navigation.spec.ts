import { test, expect } from '@/fixtures';

test.describe('Event Details Navigation', () => {
  test('TC-14: verify navigation from Event Details back to Events', async ({
    eventDetailsPage,
    eventsPage,
  }) => {
    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();

    const firstCard = eventsPage.getGridEventCardByIndex(0);
    await firstCard.clickMore();

    await eventDetailsPage.waitForDetailsPage();
    const title = await eventDetailsPage.getEventTitle();
    expect(title.length).toBeGreaterThan(0);

    await eventDetailsPage.clickBackToEvents();
    await eventsPage.waitForEventsPage();

    expect(eventsPage.url()).toContain('/greenCity/events');
    await expect.poll(() => eventsPage.getItemsFoundCount()).toBeGreaterThan(0);
  });
});
