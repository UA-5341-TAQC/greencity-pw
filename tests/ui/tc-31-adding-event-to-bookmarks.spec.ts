import { test, expect } from '@/fixtures';

test.describe('TC-31 Verify adding an event to the bookmarks', () => {
  test('should add and remove an event from bookmarks and persist the removal after refresh', async ({
    authenticatedPage,
    eventsPage,
  }) => {
    await test.step('Open the Events page as an authenticated user', async () => {
      await eventsPage.navigateToEventsPage();
      await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
      await eventsPage.waitForEventsPage();

      await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
    });

    const waitForEventCountToMatchCards = async () => {
      await eventsPage.scrollUntilAllEventCardsLoad();

      await expect
        .poll(async () => {
          const itemsCount = await eventsPage.getItemsFoundCount();
          const cardsCount = await eventsPage.getGridEventCardsCount();
          return itemsCount === 0 || itemsCount === cardsCount;
        })
        .toBe(true);
    };

    const toggleBookmarkFilterAndWaitForResults = async () => {
      await eventsPage.clickBookmarkButton();
      await eventsPage.waitForEventsPage();
      await waitForEventCountToMatchCards();
    };

    const waitForFavoriteResponse = (method: 'POST' | 'DELETE') =>
      authenticatedPage.waitForResponse(
        (response) =>
          response.request().method() === method &&
          /\/events\/\d+\/favorites(?:\?.*)?$/.test(response.url())
      );

    await expect.poll(() => eventsPage.getGridEventCardsCount()).toBeGreaterThan(0);
    await waitForEventCountToMatchCards();
    const allEventCards = await eventsPage.getAllGridEventCards();
    const allEventTitles = await Promise.all(allEventCards.map((card) => card.getTitle()));

    const bookmarkableCards = await Promise.all(
      allEventCards.map((card) => card.hasBookmarkButton())
    );

    await test.step('Open the bookmarked events and find an event not yet bookmarked', async () => {
      await toggleBookmarkFilterAndWaitForResults();
    });

    const bookmarkedCards = await eventsPage.getAllGridEventCards();
    const initialBookmarkedCount = await eventsPage.getItemsFoundCount();
    const bookmarkedTitles = await Promise.all(
      bookmarkedCards.slice(0, initialBookmarkedCount).map((card) => card.getTitle())
    );
    const eventTitle = allEventTitles.find(
      (title, index) => bookmarkableCards[index] && !bookmarkedTitles.includes(title)
    );
    expect(eventTitle, 'An event that is not already bookmarked should be available').toBeTruthy();

    await toggleBookmarkFilterAndWaitForResults();
    const eventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
    await eventCard.waitForVisible();
    await eventCard.hoverBookmarkButton();
    const defaultBookmarkState = await eventCard.getBookmarkButtonState();

    await test.step('Add the event to bookmarks and verify the selected icon state', async () => {
      const favoriteResponsePromise = waitForFavoriteResponse('POST');
      await eventCard.clickBookmarkButton();
      const favoriteResponse = await favoriteResponsePromise;
      expect(
        favoriteResponse.ok(),
        `Adding event to bookmarks failed: ${favoriteResponse.status()} ${await favoriteResponse.text()}`
      ).toBe(true);

      await eventCard.hoverBookmarkButton();
      await expect.poll(() => eventCard.getBookmarkButtonState()).not.toBe(defaultBookmarkState);
    });

    await test.step('Verify the event appears in the bookmarked events list', async () => {
      await toggleBookmarkFilterAndWaitForResults();
      await expect.poll(() => eventCard.isVisible()).toBe(true);
    });

    const bookmarkedCount = await eventsPage.getItemsFoundCount();
    const displayedBookmarkedCount = await eventsPage.getGridEventCardsCount();
    expect(bookmarkedCount).toBe(displayedBookmarkedCount);
    expect(bookmarkedTitles).not.toContain(eventTitle);

    const bookmarkedEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
    await bookmarkedEventCard.hoverBookmarkButton();
    const selectedBookmarkState = await bookmarkedEventCard.getBookmarkButtonState();

    await test.step('Remove the event from bookmarks and verify the default icon state', async () => {
      const favoriteResponsePromise = waitForFavoriteResponse('DELETE');
      await bookmarkedEventCard.clickBookmarkButton();
      const favoriteResponse = await favoriteResponsePromise;
      expect(
        favoriteResponse.ok(),
        `Removing event from bookmarks failed: ${favoriteResponse.status()} ${await favoriteResponse.text()}`
      ).toBe(true);

      await bookmarkedEventCard.hoverBookmarkButton();
      await expect
        .poll(() => bookmarkedEventCard.getBookmarkButtonState())
        .toBe(defaultBookmarkState);
    });

    await toggleBookmarkFilterAndWaitForResults();
    const restoredEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
    await expect.poll(() => restoredEventCard.isVisible()).toBe(true);
    await restoredEventCard.hoverBookmarkButton();
    await expect.poll(() => restoredEventCard.getBookmarkButtonState()).toBe(defaultBookmarkState);
    expect(selectedBookmarkState).not.toBe(defaultBookmarkState);

    await test.step('Refresh and verify the event remains absent from bookmarks', async () => {
      await authenticatedPage.reload();
      await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
      await toggleBookmarkFilterAndWaitForResults();

      await expect
        .poll(async () => {
          const itemsCount = await eventsPage.getItemsFoundCount();
          const eventIsVisible = await eventsPage.getGridEventCardByTitle(eventTitle!).isVisible();
          return itemsCount === 0 || !eventIsVisible;
        })
        .toBe(true);
    });
  });
});
