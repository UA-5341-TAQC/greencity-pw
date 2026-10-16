# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-31-adding-event-to-bookmarks.spec.ts >> TC-31 Verify adding an event to the bookmarks >> should add and remove an event from bookmarks and persist the removal after refresh
- Location: tests/ui/tc-31-adding-event-to-bookmarks.spec.ts:4:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: false

Call Log:
- Test timeout of 30000ms exceeded
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e2]:
    - generic [ref=e4]:
      - link "skip to the main content" [ref=e6] [cursor=pointer]:
        - /url: .main-content
      - banner "Welcome to header" [ref=e7]:
        - generic [ref=e9]:
          - link [ref=e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link "Image green city logo" [ref=e11]
          - generic [ref=e12]:
            - navigation [ref=e13]:
              - tablist [ref=e14]:
                - listitem [ref=e15]:
                  - link "Eco news" [ref=e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=e17]:
                  - link "Events" [ref=e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=e19]:
                  - link "Places" [ref=e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=e21]:
                  - link "About us" [ref=e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=e23]:
                  - link "My space" [ref=e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=e25]:
                  - link "UBS courier" [ref=e26] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=e28]:
              - listitem "site bookmark" [ref=e29] [cursor=pointer]
              - listitem "site notification" [ref=e31] [cursor=pointer]:
                - generic [ref=e33]: 99+
              - search "site search" [ref=e34] [cursor=pointer]
              - menu "language switcher" [ref=e36]:
                - option "english" [ref=e37] [cursor=pointer]:
                  - generic [aria-hidden] [ref=e38]: En
              - menu "profile options collapsed" [ref=e40]:
                - listitem [ref=e41] [cursor=pointer]: TestATestA
      - generic [ref=e42]:
        - generic "Tab To Main"
        - generic [ref=e43]:
          - generic [ref=e48]:
            - generic [ref=e49]:
              - generic [ref=e50]:
                - paragraph [ref=e51]: Events
                - generic [ref=e52]:
                  - generic [ref=e53] [cursor=pointer]
                  - generic [ref=e55] [cursor=pointer]
                  - img "my-event" [ref=e58] [cursor=pointer]
              - button "Create event" [ref=e60] [cursor=pointer]
            - generic [ref=e61]:
              - paragraph [ref=e62]: Filter
              - generic [ref=e63]:
                - generic [ref=e64] [cursor=pointer]:
                  - generic [ref=e65]: Event time
                  - combobox [ref=e66]
                - generic [ref=e72] [cursor=pointer]:
                  - generic [ref=e73]: Location
                  - combobox [ref=e74]
                - generic [ref=e80] [cursor=pointer]:
                  - generic [ref=e81]: Status
                  - combobox [ref=e82]
                - generic [ref=e88] [cursor=pointer]:
                  - generic [ref=e89]: Type
                  - combobox [ref=e90]
                - generic [ref=e96] [cursor=pointer]: Date range
                - button "Reset all" [disabled] [ref=e103]
            - separator [ref=e104]
            - generic [ref=e105]:
              - paragraph [ref=e106]: 2 Items found
              - generic [ref=e108]:
                - button "table view" [pressed] [ref=e109] [cursor=pointer]:
                  - emphasis [ref=e110]: 
                - button "list view" [ref=e111] [cursor=pointer]:
                  - emphasis [ref=e112]: 
            - generic [ref=e113]:
              - generic [ref=e116]:
                - generic [ref=e119]:
                  - generic [ref=e120]:
                    - img "*" [ref=e121]
                    - img "*" [ref=e122]
                    - img "*" [ref=e123]
                  - generic:
                    - img "*" [ref=e124]
                    - img "*" [ref=e125]
                    - img "*" [ref=e126]
                - img "event" [ref=e128]
                - generic [ref=e129]:
                  - generic [ref=e130]:
                    - list "filter by items" [ref=e131]:
                      - listitem [ref=e132]:
                        - button "Social" [ref=e133] [cursor=pointer]
                    - generic [ref=e135]:
                      - generic [ref=e137]: Apr 7, 2026
                      - generic [ref=e138]: "|"
                      - generic [ref=e139]: 3:30 PM
                    - paragraph [ref=e142]: L'viv, Tyutyunnykiv Street, 23
                    - generic [ref=e143]: Open
                    - paragraph [ref=e147]: TESTEVENT
                  - button "More" [ref=e149] [cursor=pointer]
                  - generic [ref=e150]:
                    - generic [ref=e151]:
                      - img "date" [ref=e152]
                      - paragraph [ref=e153]: Apr 07, 2026
                    - generic [ref=e154]:
                      - img "author" [ref=e155]
                      - paragraph [ref=e156]: TestATestA
                    - generic [ref=e157]:
                      - img "frame" [ref=e158]
                      - paragraph [ref=e159]: "0"
                    - generic [ref=e160]:
                      - button "Like this event" [ref=e161] [cursor=pointer]:
                        - img "Like" [ref=e162]
                        - text: "0"
                      - button "Dislike this event" [ref=e163] [cursor=pointer]:
                        - img "Dislike" [ref=e164]
                        - text: "0"
              - generic [ref=e167]:
                - generic [ref=e170]:
                  - generic [ref=e171]:
                    - img "*" [ref=e172]
                    - img "*" [ref=e173]
                    - img "*" [ref=e174]
                  - generic:
                    - img "*" [ref=e175]
                    - img "*" [ref=e176]
                    - img "*" [ref=e177]
                - generic [ref=e178]: "+2"
                - img "event" [ref=e183]
                - generic [ref=e184]:
                  - generic [ref=e185]:
                    - list "filter by items" [ref=e186]:
                      - listitem [ref=e187]:
                        - button "Economic" [ref=e188] [cursor=pointer]
                    - generic [ref=e190]:
                      - generic [ref=e192]: Apr 30, 2026
                      - generic [ref=e193]: "|"
                      - generic [ref=e194]: 11:30 AM
                    - paragraph [ref=e197]: L'viv, Halytska Street, 1
                    - generic [ref=e198]: Open
                    - paragraph [ref=e202]: Clean test event
                  - generic [ref=e203]:
                    - button "More" [ref=e204] [cursor=pointer]
                    - button "Rate Organizer" [ref=e205] [cursor=pointer]
                  - generic [ref=e206]:
                    - generic [ref=e207]:
                      - img "date" [ref=e208]
                      - paragraph [ref=e209]: Apr 20, 2026
                    - generic [ref=e210]:
                      - img "author" [ref=e211]
                      - paragraph [ref=e212]: WIMP QA
                    - generic [ref=e213]:
                      - img "frame" [ref=e214]
                      - paragraph [ref=e215]: "3"
                    - generic [ref=e216]:
                      - button "Like this event" [ref=e217] [cursor=pointer]:
                        - img "Like" [ref=e218]
                        - text: "0"
                      - button "Dislike this event" [ref=e219] [cursor=pointer]:
                        - img "Dislike" [ref=e220]
                        - text: "0"
          - contentinfo [ref=e222]:
            - generic [ref=e223]:
              - generic [ref=e224]:
                - link [ref=e226] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e227]
                - navigation [ref=e228]:
                  - menu [ref=e229]:
                    - listitem [ref=e230]:
                      - link "Eco news" [ref=e231] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e232]:
                      - link "Events" [ref=e233] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e234]:
                      - link "Places" [ref=e235] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e236]:
                      - link "About Us" [ref=e237] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e238]:
                      - link "My Space" [ref=e239] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e240]:
                      - link "UBS Courier" [ref=e241] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e242]:
                    - listitem [ref=e243]:
                      - paragraph [ref=e244]: Follow us
                    - listitem [ref=e245]:
                      - link [ref=e246] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e247]
                      - link [ref=e248] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e249]
                      - link [ref=e250] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e251]
                      - link [ref=e252] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e253]
                      - link [ref=e254] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e255]
              - generic [ref=e256]: © Copyright 2026. Green City.
    - button [ref=e257] [cursor=pointer]:
      - img "chat" [ref=e258]
  - generic [ref=e259]: Welcome to the search window
```

# Test source

```ts
  1   | import { test, expect } from '@/fixtures';
  2   | 
  3   | test.describe('TC-31 Verify adding an event to the bookmarks', () => {
  4   |   test('should add and remove an event from bookmarks and persist the removal after refresh', async ({
  5   |     authenticatedPage,
  6   |     eventsPage,
  7   |   }) => {
  8   |     await test.step('Open the Events page as an authenticated user', async () => {
  9   |       await eventsPage.navigateToEventsPage();
  10  |       await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
  11  |       await eventsPage.waitForEventsPage();
  12  | 
  13  |       await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
  14  |     });
  15  | 
  16  |     const waitForEventCountToMatchCards = async () => {
  17  |       await eventsPage.scrollUntilAllEventCardsLoad();
  18  | 
  19  |       await expect
  20  |         .poll(async () => {
  21  |           const itemsCount = await eventsPage.getItemsFoundCount();
  22  |           const cardsCount = await eventsPage.getGridEventCardsCount();
  23  |           return itemsCount === 0 || itemsCount === cardsCount;
  24  |         })
  25  |         .toBe(true);
  26  |     };
  27  | 
  28  |     const toggleBookmarkFilterAndWaitForResults = async () => {
  29  |       await eventsPage.clickBookmarkButton();
  30  |       await eventsPage.waitForEventsPage();
  31  |       await waitForEventCountToMatchCards();
  32  |     };
  33  | 
  34  |     await expect.poll(() => eventsPage.getGridEventCardsCount()).toBeGreaterThan(0);
  35  |     await waitForEventCountToMatchCards();
  36  |     const allEventCards = await eventsPage.getAllGridEventCards();
  37  |     const allEventTitles = await Promise.all(allEventCards.map((card) => card.getTitle()));
  38  | 
  39  |     const bookmarkableCards = await Promise.all(
  40  |       allEventCards.map((card) => card.hasBookmarkButton())
  41  |     );
  42  | 
  43  |     await test.step('Open the bookmarked events and find an event not yet bookmarked', async () => {
  44  |       await toggleBookmarkFilterAndWaitForResults();
  45  |     });
  46  | 
  47  |     const bookmarkedCards = await eventsPage.getAllGridEventCards();
  48  |     const initialBookmarkedCount = await eventsPage.getItemsFoundCount();
  49  |     const bookmarkedTitles = await Promise.all(
  50  |       bookmarkedCards.slice(0, initialBookmarkedCount).map((card) => card.getTitle())
  51  |     );
  52  |     const eventTitle = allEventTitles.find(
  53  |       (title, index) => bookmarkableCards[index] && !bookmarkedTitles.includes(title)
  54  |     );
  55  |     expect(eventTitle, 'An event that is not already bookmarked should be available').toBeTruthy();
  56  | 
  57  |     await toggleBookmarkFilterAndWaitForResults();
  58  |     const eventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
  59  |     await eventCard.waitForVisible();
  60  |     await eventCard.hoverBookmarkButton();
  61  |     const defaultBookmarkState = await eventCard.getBookmarkButtonState();
  62  | 
  63  |     await test.step('Add the event to bookmarks and verify the selected icon state', async () => {
  64  |       await eventCard.clickBookmarkButton();
  65  |       await eventCard.hoverBookmarkButton();
  66  |       await expect.poll(() => eventCard.getBookmarkButtonState()).not.toBe(defaultBookmarkState);
  67  |       await eventsPage.waitForBookmarkUpdate();
  68  |     });
  69  | 
  70  |     await test.step('Verify the event appears in the bookmarked events list', async () => {
  71  |       await toggleBookmarkFilterAndWaitForResults();
> 72  |       await expect.poll(() => eventCard.isVisible()).toBe(true);
      |                                                      ^ Error: expect(received).toBe(expected) // Object.is equality
  73  |     });
  74  | 
  75  |     const bookmarkedCount = await eventsPage.getItemsFoundCount();
  76  |     const displayedBookmarkedCount = await eventsPage.getGridEventCardsCount();
  77  |     expect(bookmarkedCount).toBe(displayedBookmarkedCount);
  78  |     expect(bookmarkedTitles).not.toContain(eventTitle);
  79  | 
  80  |     const bookmarkedEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
  81  |     await bookmarkedEventCard.hoverBookmarkButton();
  82  |     const selectedBookmarkState = await bookmarkedEventCard.getBookmarkButtonState();
  83  | 
  84  |     await test.step('Remove the event from bookmarks and verify the default icon state', async () => {
  85  |       await bookmarkedEventCard.clickBookmarkButton();
  86  |       await bookmarkedEventCard.hoverBookmarkButton();
  87  |       await expect
  88  |         .poll(() => bookmarkedEventCard.getBookmarkButtonState())
  89  |         .toBe(defaultBookmarkState);
  90  |       await eventsPage.waitForBookmarkUpdate();
  91  |     });
  92  | 
  93  |     await toggleBookmarkFilterAndWaitForResults();
  94  |     const restoredEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
  95  |     await expect.poll(() => restoredEventCard.isVisible()).toBe(true);
  96  |     await restoredEventCard.hoverBookmarkButton();
  97  |     await expect.poll(() => restoredEventCard.getBookmarkButtonState()).toBe(defaultBookmarkState);
  98  |     expect(selectedBookmarkState).not.toBe(defaultBookmarkState);
  99  | 
  100 |     await test.step('Refresh and verify the event remains absent from bookmarks', async () => {
  101 |       await authenticatedPage.reload();
  102 |       await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
  103 |       await toggleBookmarkFilterAndWaitForResults();
  104 | 
  105 |       await expect
  106 |         .poll(async () => {
  107 |           const itemsCount = await eventsPage.getItemsFoundCount();
  108 |           const eventIsVisible = await eventsPage.getGridEventCardByTitle(eventTitle!).isVisible();
  109 |           return itemsCount === 0 || !eventIsVisible;
  110 |         })
  111 |         .toBe(true);
  112 |     });
  113 |   });
  114 | });
  115 | 
```