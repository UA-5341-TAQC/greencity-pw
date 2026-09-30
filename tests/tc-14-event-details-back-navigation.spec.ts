import { test, expect } from '@/fixtures';
import { EventsPage } from '@/pages';
import { EventDetailsPage } from '@/pages/event-details-page';

test.describe('Event Details Navigation', () => {
  test('TC-14: verify navigation from Event Details back to Events', async ({ page }) => {
    const eventsPage = new EventsPage(page);
    const eventDetailsPage = new EventDetailsPage(page);

    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();

    const firstCard = eventsPage.getGridEventCardByIndex(0);
    await firstCard.clickMore();

    await eventDetailsPage.waitForDetailsPage();
    const title = await eventDetailsPage.getEventTitle();
    expect(title.length).toBeGreaterThan(0);

    await eventDetailsPage.clickBackToEvents();
    await eventsPage.waitForEventsPage();

    expect(page.url()).toContain('/greenCity/events');
  });
});