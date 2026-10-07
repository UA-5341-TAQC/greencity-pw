import { test, type Page } from '@playwright/test';
import { CreateEventPage, EventsPage } from '@/pages';

export async function createSimpleEvent(
  page: Page,
  eventsPage: EventsPage,
  createEventPage: CreateEventPage
): Promise<string> {
  const title = `PW image validation event ${Date.now()}`;

  await test.step('Setup: create a simple event', async () => {
    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();
    await eventsPage.clickCreateEvent();
    await createEventPage.waitForCreateEventPage();

    await createEventPage.fillTitle(title);
    await createEventPage.selectOneDay();
    await createEventPage.clickEconomicTag();
    await createEventPage.selectEventType('Open');
    await createEventPage.selectInviteType('All');
    await createEventPage.fillDescription('Automated event for image upload validation.');

    const eventDate = new Date();
    eventDate.setDate(eventDate.getDate() + 1);
    await createEventPage.fillDay(
      `${eventDate.getMonth() + 1}/${eventDate.getDate()}/${eventDate.getFullYear()}`
    );

    await createEventPage.toggleAllDay();
    await createEventPage.toggleOnline();
    await createEventPage.fillOnlineLink('https://example.com/event');
    await createEventPage.clickPublish();

    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();
    await page.getByText(title, { exact: true }).waitFor({ state: 'visible' });
  });

  return title;
}
