import { test, expect } from '@/fixtures';
import { Language } from '@/types/header.types';

test.describe('Create event', () => {
  test.beforeEach(async ({ authenticatedUser, eventsPage }) => {
    void authenticatedUser;

    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();
    await eventsPage.header.switchLanguage(Language.En);
  });

  test('TC-17 Create one day event (Positive)', async ({ eventsPage, createEventPage }) => {
    const title = `Test Title Positive ${Date.now().toString().slice(-8)}`;

    const onlineLink = 'https://example.com/test-link';
    const description =
      'This is the story of a man named Stanley. Stanley worked for a company in a big building where he was employee # 427.';

    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const tomorrowLabel = tomorrow.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });

    await test.step('1: Click the "Create event" button', async () => {
      await eventsPage.clickCreateEvent();
      await createEventPage.waitForCreateEventPage();
    });

    await test.step('2: Fill the "Title" field', async () => {
      await createEventPage.fillTitle(title);

      expect(await createEventPage.getTitleValue()).toBe(title);
    });

    await test.step('3: Leave "Duration" field with default value', async () => {
      expect(await createEventPage.getDurationText()).toBe('1 day');
    });

    await test.step('4: Choose the next calendar day', async () => {
      await createEventPage.selectDate(tomorrow);

      await expect.poll(() => createEventPage.getDayValue()).toBe(tomorrowLabel);
    });

    await test.step('5: Set "Start Time" value', async () => {
      await createEventPage.selectStartTime('18:00');

      expect(await createEventPage.getStartTimeValue()).toBe('18:00');
    });

    await test.step('6: Set "End Time" value', async () => {
      await createEventPage.selectFinishTime('20:00');

      expect(await createEventPage.getFinishTimeValue()).toBe('20:00');
    });

    await test.step('7: Click on "Online" checkmark', async () => {
      await createEventPage.toggleOnline();

      expect(await createEventPage.isOnlineChecked()).toBe(true);
      await expect.poll(() => createEventPage.isOnlineLinkInputVisible()).toBe(true);
    });

    await test.step('8: Fill the "Online Link" field', async () => {
      await createEventPage.fillOnlineLink(onlineLink);

      expect(await createEventPage.getOnlineLinkValue()).toBe(onlineLink);
    });

    await test.step('9: Choose "Initiative type" label', async () => {
      await createEventPage.clickEconomicTag();

      await expect.poll(() => createEventPage.isEconomicTagSelected()).toBe(true);
    });

    await test.step('10: Leave the first "Event type" dropdown with "Open" value', async () => {
      expect(await createEventPage.getEventTypeText()).toBe('Open');
    });

    await test.step('11: Choose "All" in the second "Event type" dropdown', async () => {
      await createEventPage.selectInviteType('All');

      expect(await createEventPage.getInviteTypeText()).toBe('All');
    });

    await test.step('12: Fill the "Events Description" field', async () => {
      await createEventPage.fillDescription(description);

      expect(await createEventPage.getDescription()).toBe(description);
    });

    await test.step('13: Verify "Preview" button', async () => {
      expect(await createEventPage.isPreviewVisible()).toBe(true);
      await expect.poll(() => createEventPage.isPreviewEnabled()).toBe(true);
    });

    await test.step('14: Verify "Publish" button', async () => {
      expect(await createEventPage.isPublishVisible()).toBe(true);
      await expect.poll(() => createEventPage.isPublishEnabled()).toBe(true);
    });

    await test.step('15: Click "Publish" button', async () => {
      await createEventPage.clickPublish();
    });

    await test.step('16: Return to events page', async () => {
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
    });

    await test.step('17: Verify event is created', async () => {
      const card = eventsPage.getGridEventCardByTitle(title);

      await expect.poll(() => card.isVisible()).toBe(true);
      expect(await card.getTitle()).toBe(title);
    });
  });
});
