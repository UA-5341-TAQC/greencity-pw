import { test, expect } from '@/fixtures';

test.describe('TC-31 Verify adding an event to the bookmarks', () => {
  test('should add and remove an event from bookmarks and persist the removal after refresh', async ({
    authenticatedPage,
    eventsPage,
  }) => {
    await test.step('Open the Events page as an authenticated user', async () => {
      await eventsPage.navigateToEventsPage();
      await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);

      await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
    });
    const waitForEventCountToMatchCards = async () => {
      await expect
        .poll(async () => {
          const itemsCount = await eventsPage.getItemsFoundCount();
          return itemsCount === (await eventsPage.getGridEventCardsCount());
        })
        .toBe(true);
    };

    await expect.poll(() => eventsPage.getGridEventCardsCount()).toBeGreaterThan(0);
    await waitForEventCountToMatchCards();
    const allEventCards = await eventsPage.getAllGridEventCards();
    const allEventTitles = await Promise.all(allEventCards.map((card) => card.getTitle()));

    await test.step('Open the bookmarked events and find an event not yet bookmarked', async () => {
      await eventsPage.clickBookmarkButton();
      await waitForEventCountToMatchCards();
    });

    const bookmarkedCards = await eventsPage.getAllGridEventCards();
    const bookmarkedTitles = await Promise.all(bookmarkedCards.map((card) => card.getTitle()));
    const eventTitle = allEventTitles.find((title) => !bookmarkedTitles.includes(title));
    expect(eventTitle, 'An event that is not already bookmarked should be available').toBeTruthy();

    await eventsPage.clickBookmarkButton();
    await waitForEventCountToMatchCards();
    const eventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
    await eventCard.waitForVisible();
    const defaultBookmarkState = await eventCard.getBookmarkButtonState();

    await test.step('Add the event to bookmarks and verify the selected icon state', async () => {
      await eventCard.clickBookmarkButton();
      await authenticatedPage.mouse.move(1, 1);
      await expect.poll(() => eventCard.getBookmarkButtonState()).not.toBe(defaultBookmarkState);
      // eslint-disable-next-line playwright/no-wait-for-timeout
      await authenticatedPage.waitForTimeout(3000);
    });

    await test.step('Verify the event appears in the bookmarked events list', async () => {
      await eventsPage.clickBookmarkButton();
      await waitForEventCountToMatchCards();
      await expect.poll(() => eventCard.isVisible()).toBe(true);
    });

    const bookmarkedCount = await eventsPage.getItemsFoundCount();
    const displayedBookmarkedCount = await eventsPage.getGridEventCardsCount();
    expect(bookmarkedCount).toBe(displayedBookmarkedCount);
    expect(bookmarkedTitles).not.toContain(eventTitle);

    const bookmarkedEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
    const selectedBookmarkState = await bookmarkedEventCard.getBookmarkButtonState();

    await test.step('Remove the event from bookmarks and verify the default icon state', async () => {
      await bookmarkedEventCard.clickBookmarkButton();
      await expect
        .poll(() => eventsPage.getGridEventCardsCount())
        .toBe(displayedBookmarkedCount - 1);
      await expect.poll(() => bookmarkedEventCard.isVisible()).toBe(false);
    });

    const remainingBookmarkCount = await eventsPage.getItemsFoundCount();
    expect(remainingBookmarkCount).toBe(await eventsPage.getGridEventCardsCount());

    await eventsPage.clickBookmarkButton();
    await waitForEventCountToMatchCards();
    const restoredEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
    await expect.poll(() => restoredEventCard.isVisible()).toBe(true);
    await authenticatedPage.mouse.move(1, 1);
    await expect.poll(() => restoredEventCard.getBookmarkButtonState()).toBe(defaultBookmarkState);
    expect(selectedBookmarkState).not.toBe(defaultBookmarkState);

    await test.step('Refresh and verify the event remains absent from bookmarks', async () => {
      await authenticatedPage.reload();
      await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
      await eventsPage.clickBookmarkButton();
      await waitForEventCountToMatchCards();

      await expect
        .poll(() => eventsPage.getGridEventCardByTitle(eventTitle!).isVisible())
        .toBe(false);
      expect(await eventsPage.getItemsFoundCount()).toBe(await eventsPage.getGridEventCardsCount());
    });
  });
});
