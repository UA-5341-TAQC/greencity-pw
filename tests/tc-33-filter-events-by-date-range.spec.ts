import { test, expect } from '@/fixtures';

test.describe('TC-33 Verify that a user can filter events by date range', () => {
  test('should filter events by selected date range and restore list when filter is removed', async ({
    eventsPage,
  }) => {
    // Preconditions:
    // 1. At least one event exists in the system.
    // 2. Open the "GreenCity" site and navigate to the "Events" page.
    await eventsPage.navigateToEventsPage();
    await eventsPage.waitForEventsPage();

    // 3. Record the "Items found" count before applying any filter.
    const initialItemsCount = await eventsPage.getItemsFoundCount();
    expect(initialItemsCount).toBeGreaterThan(0);

    // Step 1: Click the "Date range" filter.
    await eventsPage.filters.openDateRangeFilter();
    await expect(eventsPage.filters.calendarDropdown.calendar).toBeVisible();

    // Steps 2 & 3: Select date range (15 to 16).
    const startDate = 15;
    const endDate = 16;
    await eventsPage.filters.calendarDropdown.selectDateRange(startDate, endDate);

    // Step 4: Verify that the filter indicator for the selected date range is displayed above the events list.
    const dateChip = eventsPage.getActiveDateRangeChip();
    await expect(dateChip.chip).toBeVisible();
    const activeFilterText = await dateChip.getText();
    expect(activeFilterText).toContain(String(startDate));
    expect(activeFilterText).toContain(String(endDate));

    // Step 5: Verify that all displayed events fall within the selected date range.
    const filteredItemsCount = await eventsPage.getItemsFoundCount();
    const displayedCardsCount = await eventsPage.getGridEventCardsCount();
    expect(displayedCardsCount).toBe(filteredItemsCount);

    // Step 6: Verify that the "Items found" count is updated according to the number of events matching the selected date range.
    expect(filteredItemsCount).toBeLessThanOrEqual(initialItemsCount);

    // Step 7: Click the "x" icon on the date range filter indicator.
    await dateChip.remove();
    await expect(dateChip.chip).toBeHidden();

    // Step 8: Verify that the "Items found" count is restored to the value recorded before applying the filter.
    await expect(eventsPage.itemsFound).toHaveText(new RegExp(`\\b${initialItemsCount}\\b`));
    const restoredItemsCount = await eventsPage.getItemsFoundCount();
    expect(restoredItemsCount).toBe(initialItemsCount);
  });
});
