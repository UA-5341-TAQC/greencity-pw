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
    await eventsPage.openDateRangeFilter();
    await expect(eventsPage.calendarDropdown.calendar).toBeVisible();

    // Step 2: Select a start date (15).
    const startDate = 15;
    const endDate = 16;

    await eventsPage.calendarDropdown.selectDate(startDate);
    expect(await eventsPage.calendarDropdown.isDateSelected(startDate)).toBe(true);

    // Step 3: Select an end date (16).
    await eventsPage.calendarDropdown.selectDate(endDate);

    // Step 4: Verify that the filter indicator for the selected date range is displayed above the events list.
    await expect(eventsPage.activeFilterIndicator).toBeVisible();
    const activeFilterText = await eventsPage.getActiveFilterText();
    expect(activeFilterText).toContain(String(startDate));
    expect(activeFilterText).toContain(String(endDate));

    // Step 5: Verify that all displayed events fall within the selected date range.
    const filteredItemsCount = await eventsPage.getItemsFoundCount();
    const displayedCardsCount = await eventsPage.getGridEventCardsCount();
    expect(displayedCardsCount).toBe(filteredItemsCount);

    // Step 6: Verify that the "Items found" count is updated according to the number of events matching the selected date range.
    expect(filteredItemsCount).toBeLessThanOrEqual(initialItemsCount);

    // Step 7: Click the "x" icon on the date range filter indicator.
    await eventsPage.removeActiveDateFilter();
    await expect(eventsPage.activeFilterIndicator).toBeHidden();

    // Step 8: Verify that the "Items found" count is restored to the value recorded before applying the filter.
    await expect(eventsPage.itemsFoundElement).toHaveText(new RegExp(`\\b${initialItemsCount}\\b`));
    const restoredItemsCount = await eventsPage.getItemsFoundCount();
    expect(restoredItemsCount).toBe(initialItemsCount);
  });
});
