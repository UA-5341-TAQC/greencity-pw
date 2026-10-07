import { test, expect } from '@/fixtures';
import { parseEventDateTime } from '@/helpers';
import { EventTimeFilter } from '@/types';

test.describe('TC-28 Verify that a user can filter events by event time', () => {
  test('should filter upcoming and past events and restore all events', async ({
    page,
    eventsPage,
  }) => {
    await test.step('Open the Events page and record the initial count', async () => {
      await eventsPage.navigateToEventsPage();
      await eventsPage.waitForEventsPage();
    });

    const initialItemsCount = await eventsPage.getItemsFoundCount();
    expect(initialItemsCount).toBeGreaterThan(0);

    await test.step('Verify Event time options are available', async () => {
      await eventsPage.filters.openTimeFilter();

      for (const filter of [EventTimeFilter.Any, EventTimeFilter.Upcoming, EventTimeFilter.Past]) {
        await expect(
          page.getByRole('option', { name: eventsPage.i18n.timeOptions[filter], exact: true })
        ).toBeVisible();
      }

      await eventsPage.filters.closeDropdown();
    });

    await test.step('Filter upcoming events and verify their dates', async () => {
      await eventsPage.filters.selectTimeFilter(EventTimeFilter.Upcoming);

      const upcomingChip = eventsPage.getActiveFilterChipByTime(EventTimeFilter.Upcoming);
      await expect(upcomingChip.chip).toBeVisible();

      await eventsPage.getGridEventCardByIndex(0).waitForVisible();
      const upcomingCount = await eventsPage.getItemsFoundCount();
      expect(upcomingCount).toBeGreaterThan(0);
      await eventsPage.scrollUntilAllEventCardsLoad();

      const now = Date.now();
      for (const card of await eventsPage.getAllGridEventCards()) {
        const eventDateTime = parseEventDateTime(await card.getDate(), await card.getTime());
        expect(eventDateTime.getTime()).toBeGreaterThan(now);
      }
      expect(upcomingCount).toBeLessThanOrEqual(initialItemsCount);

      await upcomingChip.remove();
      await expect(upcomingChip.chip).toBeHidden();
      await expect.poll(() => eventsPage.getItemsFoundCount()).toBe(initialItemsCount);
    });

    await test.step('Filter past events and verify their dates', async () => {
      await eventsPage.filters.selectTimeFilter(EventTimeFilter.Past);

      const pastChip = eventsPage.getActiveFilterChipByTime(EventTimeFilter.Past);
      await expect(pastChip.chip).toBeVisible();

      await eventsPage.getGridEventCardByIndex(0).waitForVisible();
      const pastCount = await eventsPage.getItemsFoundCount();
      expect(pastCount).toBeGreaterThan(0);
      await eventsPage.scrollUntilAllEventCardsLoad();

      const now = Date.now();
      for (const card of await eventsPage.getAllGridEventCards()) {
        const eventDateTime = parseEventDateTime(await card.getDate(), await card.getTime());
        expect(eventDateTime.getTime()).toBeLessThan(now);
      }
      expect(pastCount).toBeLessThanOrEqual(initialItemsCount);

      await eventsPage.filters.resetAll();
      await expect(pastChip.chip).toBeHidden();
      await expect.poll(() => eventsPage.getItemsFoundCount()).toBe(initialItemsCount);
    });

    await test.step('Select Any time and verify both time filters are active', async () => {
      await eventsPage.filters.selectTimeFilter(EventTimeFilter.Any);

      const upcomingChip = eventsPage.getActiveFilterChipByTime(EventTimeFilter.Upcoming);
      const pastChip = eventsPage.getActiveFilterChipByTime(EventTimeFilter.Past);
      await expect(upcomingChip.chip).toBeVisible();
      await expect(pastChip.chip).toBeVisible();
      await expect.poll(() => eventsPage.getItemsFoundCount()).toBe(initialItemsCount);
      await eventsPage.getGridEventCardByIndex(0).waitForVisible();
      await eventsPage.scrollUntilAllEventCardsLoad();

      await eventsPage.filters.selectTimeFilter(EventTimeFilter.Any);
      await expect(upcomingChip.chip).toBeHidden();
      await expect(pastChip.chip).toBeHidden();
      await expect.poll(() => eventsPage.getItemsFoundCount()).toBe(initialItemsCount);
    });
  });
});
