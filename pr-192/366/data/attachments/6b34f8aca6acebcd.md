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
- Timeout 10000ms exceeded while waiting on the predicate
```

# Page snapshot

```yaml
- generic [ref=e1]:
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
              - paragraph [ref=e106]: 196 Items found
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
                - generic [ref=e168] [cursor=pointer]
                - img "event" [ref=e171]
                - generic [ref=e172]:
                  - generic [ref=e173]:
                    - list "filter by items" [ref=e174]:
                      - listitem [ref=e175]:
                        - button "Economic" [ref=e176] [cursor=pointer]
                    - generic [ref=e178]:
                      - generic [ref=e180]: Oct 15, 2026
                      - generic [ref=e181]: "|"
                      - generic [ref=e182]: 6:00 PM
                    - paragraph [ref=e185]:
                      - link "Online" [ref=e186] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e187]: Open
                    - paragraph [ref=e191]: Test Title Positive 62697293
                  - generic [ref=e192]:
                    - button "More" [ref=e193] [cursor=pointer]
                    - button "Edit event" [ref=e194] [cursor=pointer]
                  - generic [ref=e195]:
                    - generic [ref=e196]:
                      - img "date" [ref=e197]
                      - paragraph [ref=e198]: Oct 14, 2026
                    - generic [ref=e199]:
                      - img "author" [ref=e200]
                      - paragraph [ref=e201]: TestATestA
                    - generic [ref=e202]:
                      - img "frame" [ref=e203]
                      - paragraph [ref=e204]: "0"
                    - generic [ref=e205]:
                      - button "Like this event" [ref=e206] [cursor=pointer]:
                        - img "Like" [ref=e207]
                        - text: "0"
                      - button "Dislike this event" [ref=e208] [cursor=pointer]:
                        - img "Dislike" [ref=e209]
                        - text: "0"
              - generic [ref=e212]:
                - generic [ref=e213] [cursor=pointer]
                - generic [ref=e215]: "+1"
                - img "event" [ref=e220]
                - generic [ref=e221]:
                  - generic [ref=e222]:
                    - list "filter by items" [ref=e223]:
                      - listitem [ref=e224]:
                        - button "Economic" [ref=e225] [cursor=pointer]
                    - generic [ref=e227]:
                      - generic [ref=e229]: Oct 15, 2026
                      - generic [ref=e230]: "|"
                      - generic [ref=e231]: 6:00 PM
                    - paragraph [ref=e234]:
                      - link "Online" [ref=e235] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e236]: Open
                    - paragraph [ref=e240]: Test Title Positive 58589473
                  - generic [ref=e241]:
                    - button "More" [ref=e242] [cursor=pointer]
                    - button "Edit event" [ref=e243] [cursor=pointer]
                  - generic [ref=e244]:
                    - generic [ref=e245]:
                      - img "date" [ref=e246]
                      - paragraph [ref=e247]: Oct 14, 2026
                    - generic [ref=e248]:
                      - img "author" [ref=e249]
                      - paragraph [ref=e250]: TestATestA
                    - generic [ref=e251]:
                      - img "frame" [ref=e252]
                      - paragraph [ref=e253]: "0"
                    - generic [ref=e254]:
                      - button "Like this event" [ref=e255] [cursor=pointer]:
                        - img "Like" [ref=e256]
                        - text: "0"
                      - button "Dislike this event" [ref=e257] [cursor=pointer]:
                        - img "Dislike" [ref=e258]
                        - text: "1"
              - generic [ref=e261]:
                - generic [ref=e262] [cursor=pointer]
                - img "event" [ref=e265]
                - generic [ref=e266]:
                  - generic [ref=e267]:
                    - list "filter by items" [ref=e268]:
                      - listitem [ref=e269]:
                        - button "Economic" [ref=e270] [cursor=pointer]
                    - generic [ref=e272]:
                      - generic [ref=e274]: Oct 15, 2026
                      - generic [ref=e275]: "|"
                      - generic [ref=e276]: 6:00 PM
                    - paragraph [ref=e279]:
                      - link "Online" [ref=e280] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e281]: Open
                    - paragraph [ref=e285]: Test Title Positive 68004548
                  - generic [ref=e286]:
                    - button "More" [ref=e287] [cursor=pointer]
                    - button "Edit event" [ref=e288] [cursor=pointer]
                  - generic [ref=e289]:
                    - generic [ref=e290]:
                      - img "date" [ref=e291]
                      - paragraph [ref=e292]: Oct 14, 2026
                    - generic [ref=e293]:
                      - img "author" [ref=e294]
                      - paragraph [ref=e295]: TestATestA
                    - generic [ref=e296]:
                      - img "frame" [ref=e297]
                      - paragraph [ref=e298]: "0"
                    - generic [ref=e299]:
                      - button "Like this event" [ref=e300] [cursor=pointer]:
                        - img "Like" [ref=e301]
                        - text: "0"
                      - button "Dislike this event" [ref=e302] [cursor=pointer]:
                        - img "Dislike" [ref=e303]
                        - text: "0"
              - generic [ref=e306]:
                - generic [ref=e307] [cursor=pointer]
                - generic [ref=e309]: "+1"
                - img "event" [ref=e314]
                - generic [ref=e315]:
                  - generic [ref=e316]:
                    - list "filter by items" [ref=e317]:
                      - listitem [ref=e318]:
                        - button "Economic" [ref=e319] [cursor=pointer]
                    - generic [ref=e321]:
                      - generic [ref=e323]: Oct 15, 2026
                      - generic [ref=e324]: "|"
                      - generic [ref=e325]: 6:00 PM
                    - paragraph [ref=e328]:
                      - link "Online" [ref=e329] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e330]: Open
                    - paragraph [ref=e334]: Test Title Positive 67999963
                  - generic [ref=e335]:
                    - button "More" [ref=e336] [cursor=pointer]
                    - button "Edit event" [ref=e337] [cursor=pointer]
                  - generic [ref=e338]:
                    - generic [ref=e339]:
                      - img "date" [ref=e340]
                      - paragraph [ref=e341]: Oct 14, 2026
                    - generic [ref=e342]:
                      - img "author" [ref=e343]
                      - paragraph [ref=e344]: TestATestA
                    - generic [ref=e345]:
                      - img "frame" [ref=e346]
                      - paragraph [ref=e347]: "0"
                    - generic [ref=e348]:
                      - button "Like this event" [ref=e349] [cursor=pointer]:
                        - img "Like" [ref=e350]
                        - text: "0"
                      - button "Dislike this event" [ref=e351] [cursor=pointer]:
                        - img "Dislike" [ref=e352]
                        - text: "0"
              - generic [ref=e355]:
                - generic [ref=e356] [cursor=pointer]
                - img "event" [ref=e359]
                - generic [ref=e360]:
                  - generic [ref=e361]:
                    - list "filter by items" [ref=e362]:
                      - listitem [ref=e363]:
                        - button "Economic" [ref=e364] [cursor=pointer]
                    - generic [ref=e366]:
                      - generic [ref=e368]: Oct 15, 2026
                      - generic [ref=e369]: "|"
                      - generic [ref=e370]: 6:00 PM
                    - paragraph [ref=e373]:
                      - link "Online" [ref=e374] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e375]: Open
                    - paragraph [ref=e379]: Test Title Positive 63921357
                  - generic [ref=e380]:
                    - button "More" [ref=e381] [cursor=pointer]
                    - button "Edit event" [ref=e382] [cursor=pointer]
                  - generic [ref=e383]:
                    - generic [ref=e384]:
                      - img "date" [ref=e385]
                      - paragraph [ref=e386]: Oct 14, 2026
                    - generic [ref=e387]:
                      - img "author" [ref=e388]
                      - paragraph [ref=e389]: TestATestA
                    - generic [ref=e390]:
                      - img "frame" [ref=e391]
                      - paragraph [ref=e392]: "0"
                    - generic [ref=e393]:
                      - button "Like this event" [ref=e394] [cursor=pointer]:
                        - img "Like" [ref=e395]
                        - text: "0"
                      - button "Dislike this event" [ref=e396] [cursor=pointer]:
                        - img "Dislike" [ref=e397]
                        - text: "0"
            - progressbar [ref=e399]
          - contentinfo [ref=e415]:
            - generic [ref=e416]:
              - generic [ref=e417]:
                - link [ref=e419] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e420]
                - navigation [ref=e421]:
                  - menu [ref=e422]:
                    - listitem [ref=e423]:
                      - link "Eco news" [ref=e424] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e425]:
                      - link "Events" [ref=e426] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e427]:
                      - link "Places" [ref=e428] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e429]:
                      - link "About Us" [ref=e430] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e431]:
                      - link "My Space" [ref=e432] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e433]:
                      - link "UBS Courier" [ref=e434] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e435]:
                    - listitem [ref=e436]:
                      - paragraph [ref=e437]: Follow us
                    - listitem [ref=e438]:
                      - link [ref=e439] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e440]
                      - link [ref=e441] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e442]
                      - link [ref=e443] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e444]
                      - link [ref=e445] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e446]
                      - link [ref=e447] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e448]
              - generic [ref=e449]: © Copyright 2026. Green City.
    - button [ref=e450] [cursor=pointer]:
      - img "chat" [ref=e451]
  - generic [ref=e452]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | 
  3  | test.describe('TC-31 Verify adding an event to the bookmarks', () => {
  4  |   test('should add and remove an event from bookmarks and persist the removal after refresh', async ({
  5  |     authenticatedPage,
  6  |     eventsPage,
  7  |   }) => {
  8  |     await test.step('Open the Events page as an authenticated user', async () => {
  9  |       await eventsPage.navigateToEventsPage();
  10 |       await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
  11 | 
  12 |       await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
  13 |     });
  14 | 
  15 |     const waitForEventCountToMatchCards = async () => {
  16 |       await expect
  17 |         .poll(async () => {
  18 |           const itemsCount = await eventsPage.getItemsFoundCount();
  19 |           return itemsCount === (await eventsPage.getGridEventCardsCount());
  20 |         })
> 21 |         .toBe(true);
     |          ^ Error: expect(received).toBe(expected) // Object.is equality
  22 |     };
  23 | 
  24 |     await expect.poll(() => eventsPage.getGridEventCardsCount()).toBeGreaterThan(0);
  25 |     await waitForEventCountToMatchCards();
  26 |     const allEventCards = await eventsPage.getAllGridEventCards();
  27 |     const allEventTitles = await Promise.all(allEventCards.map((card) => card.getTitle()));
  28 | 
  29 |     await test.step('Open the bookmarked events and find an event not yet bookmarked', async () => {
  30 |       await eventsPage.clickBookmarkButton();
  31 |       await waitForEventCountToMatchCards();
  32 |     });
  33 | 
  34 |     const bookmarkedCards = await eventsPage.getAllGridEventCards();
  35 |     const bookmarkedTitles = await Promise.all(bookmarkedCards.map((card) => card.getTitle()));
  36 |     const eventTitle = allEventTitles.find((title) => !bookmarkedTitles.includes(title));
  37 |     expect(eventTitle, 'An event that is not already bookmarked should be available').toBeTruthy();
  38 | 
  39 |     await eventsPage.clickBookmarkButton();
  40 |     await waitForEventCountToMatchCards();
  41 |     const eventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
  42 |     await eventCard.waitForVisible();
  43 |     const defaultBookmarkState = await eventCard.getBookmarkButtonState();
  44 | 
  45 |     await test.step('Add the event to bookmarks and verify the selected icon state', async () => {
  46 |       await eventCard.clickBookmarkButton();
  47 |       await authenticatedPage.mouse.move(1, 1);
  48 |       await expect.poll(() => eventCard.getBookmarkButtonState()).not.toBe(defaultBookmarkState);
  49 |       await eventsPage.waitForBookmarkUpdate();
  50 |     });
  51 | 
  52 |     await test.step('Verify the event appears in the bookmarked events list', async () => {
  53 |       await eventsPage.clickBookmarkButton();
  54 |       await waitForEventCountToMatchCards();
  55 |       await expect.poll(() => eventCard.isVisible()).toBe(true);
  56 |     });
  57 | 
  58 |     const bookmarkedCount = await eventsPage.getItemsFoundCount();
  59 |     const displayedBookmarkedCount = await eventsPage.getGridEventCardsCount();
  60 |     expect(bookmarkedCount).toBe(displayedBookmarkedCount);
  61 |     expect(bookmarkedTitles).not.toContain(eventTitle);
  62 | 
  63 |     const bookmarkedEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
  64 |     const selectedBookmarkState = await bookmarkedEventCard.getBookmarkButtonState();
  65 | 
  66 |     await test.step('Remove the event from bookmarks and verify the default icon state', async () => {
  67 |       await bookmarkedEventCard.clickBookmarkButton();
  68 |       await expect
  69 |         .poll(() => eventsPage.getGridEventCardsCount())
  70 |         .toBe(displayedBookmarkedCount - 1);
  71 |       await expect.poll(() => bookmarkedEventCard.isVisible()).toBe(false);
  72 |     });
  73 | 
  74 |     const remainingBookmarkCount = await eventsPage.getItemsFoundCount();
  75 |     expect(remainingBookmarkCount).toBe(await eventsPage.getGridEventCardsCount());
  76 | 
  77 |     await eventsPage.clickBookmarkButton();
  78 |     await waitForEventCountToMatchCards();
  79 |     const restoredEventCard = eventsPage.getGridEventCardByTitle(eventTitle!);
  80 |     await expect.poll(() => restoredEventCard.isVisible()).toBe(true);
  81 |     await authenticatedPage.mouse.move(1, 1);
  82 |     await expect.poll(() => restoredEventCard.getBookmarkButtonState()).toBe(defaultBookmarkState);
  83 |     expect(selectedBookmarkState).not.toBe(defaultBookmarkState);
  84 | 
  85 |     await test.step('Refresh and verify the event remains absent from bookmarks', async () => {
  86 |       await authenticatedPage.reload();
  87 |       await expect.poll(() => eventsPage.isPageTitleVisible()).toBe(true);
  88 |       await eventsPage.clickBookmarkButton();
  89 |       await waitForEventCountToMatchCards();
  90 | 
  91 |       await expect
  92 |         .poll(() => eventsPage.getGridEventCardByTitle(eventTitle!).isVisible())
  93 |         .toBe(false);
  94 |       expect(await eventsPage.getItemsFoundCount()).toBe(await eventsPage.getGridEventCardsCount());
  95 |     });
  96 |   });
  97 | });
  98 | 
```