import { expect, test } from '@/fixtures';
import env from '@/config/env';

test.describe('TC-14: Verify navigation from Event Details back to Events', () => {
  test('returns the authenticated user to the Events list', async ({
    authenticatedPage,
    eventDetailsPage,
    eventsPage,
  }) => {
    const expectedEventsUrl = new URL('/#/greenCity/events', env.BASE_URL).href;

    test
      .info()
      .annotations.push(
        { type: 'author', description: 'Svitlana Kovalova' },
        { type: 'priority', description: 'Medium' },
        { type: 'requirement', description: 'Event details navigation functionality' }
      );

    await test.step('Precondition: sign in and open an available event', async () => {
      await expect(eventsPage.header.userMenuDropdown).toBeVisible();
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
      await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
      await eventsPage.clickGridView();
      await expect.poll(() => eventsPage.getGridEventCardsCount()).toBeGreaterThan(0);

      const eventCard = eventsPage.getGridEventCardByIndex(0);
      await eventCard.waitForVisible();
      const eventTitle = await eventCard.getTitle();
      await eventCard.clickMore();

      await eventDetailsPage.waitForDetailsPage();
      await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/\d+$/);
      await expect.poll(() => eventDetailsPage.getEventTitle()).toBe(eventTitle);
    });

    await test.step('Verify Back to Events is visible and clickable', async () => {
      const backToEventsControl = authenticatedPage.locator('.event-nav .button-content');
      await expect(backToEventsControl).toBeVisible();
      await backToEventsControl.click({ trial: true });
    });

    await test.info().attach('TC-14 before navigating back', {
      body: await authenticatedPage.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });

    await test.step('Click Back to Events and verify the Events URL', async () => {
      await eventDetailsPage.clickBackToEvents();
      await expect(authenticatedPage).toHaveURL(expectedEventsUrl);
    });

    await test.step('Verify the Events page and available event list', async () => {
      await eventsPage.waitForEventsPage();
      await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
      await expect.poll(() => eventsPage.getGridEventCardsCount()).toBeGreaterThan(0);
      await expect(authenticatedPage).toHaveURL(expectedEventsUrl);
    });

    await test.info().attach('TC-14 after navigating back', {
      body: await authenticatedPage.screenshot({ fullPage: true }),
      contentType: 'image/png',
    });
  });
});
