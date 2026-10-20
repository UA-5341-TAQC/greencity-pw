# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-33-filter-events-by-date-range.spec.ts >> TC-33 Verify that a user can filter events by date range >> should filter events by selected date range and restore list when filter is removed
- Location: tests/ui/tc-33-filter-events-by-date-range.spec.ts:4:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 124
Received: 6
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
              - search "site search" [ref=e29] [cursor=pointer]
              - menu "language switcher" [ref=e31]:
                - option "english" [ref=e32] [cursor=pointer]:
                  - generic [aria-hidden] [ref=e33]: En
              - link "Sign in" [ref=e35] [cursor=pointer]
              - link "Sign up" [ref=e36] [cursor=pointer]
      - generic [ref=e39]:
        - generic "Tab To Main"
        - generic [ref=e40]:
          - generic [ref=e45]:
            - generic [ref=e46]:
              - generic [ref=e47]:
                - paragraph [ref=e48]: Events
                - generic [ref=e49]:
                  - generic [ref=e50] [cursor=pointer]
                  - generic [ref=e52] [cursor=pointer]
                  - img "my-event" [ref=e55] [cursor=pointer]
              - button "Create event" [ref=e57] [cursor=pointer]
            - generic [ref=e58]:
              - paragraph [ref=e59]: Filter
              - generic [ref=e60]:
                - generic [ref=e61] [cursor=pointer]:
                  - generic [ref=e62]: Event time
                  - combobox [ref=e63]
                - generic [ref=e69] [cursor=pointer]:
                  - generic [ref=e70]: Location
                  - combobox [ref=e71]
                - generic [ref=e77] [cursor=pointer]:
                  - generic [ref=e78]: Status
                  - combobox [ref=e79]
                - generic [ref=e85] [cursor=pointer]:
                  - generic [ref=e86]: Type
                  - combobox [ref=e87]
                - generic [active] [ref=e93] [cursor=pointer]: Date range
                - button "Reset all" [ref=e100] [cursor=pointer]
            - separator [ref=e101]
            - generic [ref=e102]:
              - paragraph [ref=e103]: 124 Items found
              - generic [ref=e104]:
                - generic [ref=e106]:
                  - generic [ref=e107]: 10/15/2026 - 10/16/2026
                  - img "cross" [ref=e109] [cursor=pointer]
                - generic [ref=e110]:
                  - button "table view" [pressed] [ref=e111] [cursor=pointer]:
                    - emphasis [ref=e112]: 
                  - button "list view" [ref=e113] [cursor=pointer]:
                    - emphasis [ref=e114]: 
            - generic [ref=e115]:
              - generic [ref=e118]:
                - generic [ref=e121]:
                  - generic [ref=e122]:
                    - img "*" [ref=e123]
                    - img "*" [ref=e124]
                    - img "*" [ref=e125]
                  - generic:
                    - img "*" [ref=e126]
                    - img "*" [ref=e127]
                    - img "*" [ref=e128]
                - img "event" [ref=e130]
                - generic [ref=e131]:
                  - generic [ref=e132]:
                    - list "filter by items" [ref=e133]:
                      - listitem [ref=e134]:
                        - button "Economic" [ref=e135] [cursor=pointer]
                    - generic [ref=e137]:
                      - generic [ref=e139]: Oct 15, 2026
                      - generic [ref=e140]: "|"
                      - generic [ref=e141]: 6:00 PM
                    - paragraph [ref=e144]:
                      - link "Online" [ref=e145] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e146]: Open
                    - paragraph [ref=e150]: Test Title Positive 51954428
                  - button "More" [ref=e152] [cursor=pointer]
                  - generic [ref=e153]:
                    - generic [ref=e154]:
                      - img "date" [ref=e155]
                      - paragraph [ref=e156]: Oct 14, 2026
                    - generic [ref=e157]:
                      - img "author" [ref=e158]
                      - paragraph [ref=e159]: TestATestA
                    - generic [ref=e160]:
                      - img "frame" [ref=e161]
                      - paragraph [ref=e162]: "0"
                    - generic [ref=e163]:
                      - button "Like this event" [ref=e164] [cursor=pointer]:
                        - img "Like" [ref=e165]
                        - text: "0"
                      - button "Dislike this event" [ref=e166] [cursor=pointer]:
                        - img "Dislike" [ref=e167]
                        - text: "0"
              - generic [ref=e170]:
                - generic [ref=e173]:
                  - generic [ref=e174]:
                    - img "*" [ref=e175]
                    - img "*" [ref=e176]
                    - img "*" [ref=e177]
                  - generic:
                    - img "*" [ref=e178]
                    - img "*" [ref=e179]
                    - img "*" [ref=e180]
                - img "event" [ref=e182]
                - generic [ref=e183]:
                  - generic [ref=e184]:
                    - list "filter by items" [ref=e185]:
                      - listitem [ref=e186]:
                        - button "Economic" [ref=e187] [cursor=pointer]
                    - generic [ref=e189]:
                      - generic [ref=e191]: Oct 15, 2026
                      - generic [ref=e192]: "|"
                      - generic [ref=e193]: 6:00 PM
                    - paragraph [ref=e196]:
                      - link "Online" [ref=e197] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e198]: Open
                    - paragraph [ref=e202]: Test Title Positive 51875006
                  - button "More" [ref=e204] [cursor=pointer]
                  - generic [ref=e205]:
                    - generic [ref=e206]:
                      - img "date" [ref=e207]
                      - paragraph [ref=e208]: Oct 14, 2026
                    - generic [ref=e209]:
                      - img "author" [ref=e210]
                      - paragraph [ref=e211]: TestATestA
                    - generic [ref=e212]:
                      - img "frame" [ref=e213]
                      - paragraph [ref=e214]: "0"
                    - generic [ref=e215]:
                      - button "Like this event" [ref=e216] [cursor=pointer]:
                        - img "Like" [ref=e217]
                        - text: "0"
                      - button "Dislike this event" [ref=e218] [cursor=pointer]:
                        - img "Dislike" [ref=e219]
                        - text: "0"
              - generic [ref=e222]:
                - generic [ref=e225]:
                  - generic [ref=e226]:
                    - img "*" [ref=e227]
                    - img "*" [ref=e228]
                    - img "*" [ref=e229]
                  - generic:
                    - img "*" [ref=e230]
                    - img "*" [ref=e231]
                    - img "*" [ref=e232]
                - img "event" [ref=e234]
                - generic [ref=e235]:
                  - generic [ref=e236]:
                    - list "filter by items" [ref=e237]:
                      - listitem [ref=e238]:
                        - button "Economic" [ref=e239] [cursor=pointer]
                    - generic [ref=e241]:
                      - generic [ref=e243]: Oct 15, 2026
                      - generic [ref=e244]: "|"
                      - generic [ref=e245]: 6:00 PM
                    - paragraph [ref=e248]:
                      - link "Online" [ref=e249] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e250]: Open
                    - paragraph [ref=e254]: Test Title Positive 58599526
                  - button "More" [ref=e256] [cursor=pointer]
                  - generic [ref=e257]:
                    - generic [ref=e258]:
                      - img "date" [ref=e259]
                      - paragraph [ref=e260]: Oct 14, 2026
                    - generic [ref=e261]:
                      - img "author" [ref=e262]
                      - paragraph [ref=e263]: TestATestA
                    - generic [ref=e264]:
                      - img "frame" [ref=e265]
                      - paragraph [ref=e266]: "0"
                    - generic [ref=e267]:
                      - button "Like this event" [ref=e268] [cursor=pointer]:
                        - img "Like" [ref=e269]
                        - text: "0"
                      - button "Dislike this event" [ref=e270] [cursor=pointer]:
                        - img "Dislike" [ref=e271]
                        - text: "0"
              - generic [ref=e274]:
                - generic [ref=e277]:
                  - generic [ref=e278]:
                    - img "*" [ref=e279]
                    - img "*" [ref=e280]
                    - img "*" [ref=e281]
                  - generic:
                    - img "*" [ref=e282]
                    - img "*" [ref=e283]
                    - img "*" [ref=e284]
                - img "event" [ref=e286]
                - generic [ref=e287]:
                  - generic [ref=e288]:
                    - list "filter by items" [ref=e289]:
                      - listitem [ref=e290]:
                        - button "Economic" [ref=e291] [cursor=pointer]
                    - generic [ref=e293]:
                      - generic [ref=e295]: Oct 15, 2026
                      - generic [ref=e296]: "|"
                      - generic [ref=e297]: 6:00 PM
                    - paragraph [ref=e300]:
                      - link "Online" [ref=e301] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e302]: Open
                    - paragraph [ref=e306]: Test Title Positive 58692905
                  - button "More" [ref=e308] [cursor=pointer]
                  - generic [ref=e309]:
                    - generic [ref=e310]:
                      - img "date" [ref=e311]
                      - paragraph [ref=e312]: Oct 14, 2026
                    - generic [ref=e313]:
                      - img "author" [ref=e314]
                      - paragraph [ref=e315]: TestATestA
                    - generic [ref=e316]:
                      - img "frame" [ref=e317]
                      - paragraph [ref=e318]: "0"
                    - generic [ref=e319]:
                      - button "Like this event" [ref=e320] [cursor=pointer]:
                        - img "Like" [ref=e321]
                        - text: "0"
                      - button "Dislike this event" [ref=e322] [cursor=pointer]:
                        - img "Dislike" [ref=e323]
                        - text: "0"
              - generic [ref=e326]:
                - generic [ref=e329]:
                  - generic [ref=e330]:
                    - img "*" [ref=e331]
                    - img "*" [ref=e332]
                    - img "*" [ref=e333]
                  - generic:
                    - img "*" [ref=e334]
                    - img "*" [ref=e335]
                    - img "*" [ref=e336]
                - generic [ref=e337]: "+1"
                - img "event" [ref=e342]
                - generic [ref=e343]:
                  - generic [ref=e344]:
                    - list "filter by items" [ref=e345]:
                      - listitem [ref=e346]:
                        - button "Economic" [ref=e347] [cursor=pointer]
                    - generic [ref=e349]:
                      - generic [ref=e351]: Oct 15, 2026
                      - generic [ref=e352]: "|"
                      - generic [ref=e353]: 6:00 PM
                    - paragraph [ref=e356]:
                      - link "Online" [ref=e357] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e358]: Open
                    - paragraph [ref=e362]: Test Title Positive 58589473
                  - button "More" [ref=e364] [cursor=pointer]
                  - generic [ref=e365]:
                    - generic [ref=e366]:
                      - img "date" [ref=e367]
                      - paragraph [ref=e368]: Oct 14, 2026
                    - generic [ref=e369]:
                      - img "author" [ref=e370]
                      - paragraph [ref=e371]: TestATestA
                    - generic [ref=e372]:
                      - img "frame" [ref=e373]
                      - paragraph [ref=e374]: "0"
                    - generic [ref=e375]:
                      - button "Like this event" [ref=e376] [cursor=pointer]:
                        - img "Like" [ref=e377]
                        - text: "0"
                      - button "Dislike this event" [ref=e378] [cursor=pointer]:
                        - img "Dislike" [ref=e379]
                        - text: "1"
              - generic [ref=e382]:
                - generic [ref=e385]:
                  - generic [ref=e386]:
                    - img "*" [ref=e387]
                    - img "*" [ref=e388]
                    - img "*" [ref=e389]
                  - generic:
                    - img "*" [ref=e390]
                    - img "*" [ref=e391]
                    - img "*" [ref=e392]
                - img "event" [ref=e394]
                - generic [ref=e395]:
                  - generic [ref=e396]:
                    - list "filter by items" [ref=e397]:
                      - listitem [ref=e398]:
                        - button "Economic" [ref=e399] [cursor=pointer]
                    - generic [ref=e401]:
                      - generic [ref=e403]: Oct 15, 2026
                      - generic [ref=e404]: "|"
                      - generic [ref=e405]: 6:00 PM
                    - paragraph [ref=e408]:
                      - link "Online" [ref=e409] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e410]: Open
                    - paragraph [ref=e414]: Test Title Positive 62627116
                  - button "More" [ref=e416] [cursor=pointer]
                  - generic [ref=e417]:
                    - generic [ref=e418]:
                      - img "date" [ref=e419]
                      - paragraph [ref=e420]: Oct 14, 2026
                    - generic [ref=e421]:
                      - img "author" [ref=e422]
                      - paragraph [ref=e423]: TestATestA
                    - generic [ref=e424]:
                      - img "frame" [ref=e425]
                      - paragraph [ref=e426]: "0"
                    - generic [ref=e427]:
                      - button "Like this event" [ref=e428] [cursor=pointer]:
                        - img "Like" [ref=e429]
                        - text: "0"
                      - button "Dislike this event" [ref=e430] [cursor=pointer]:
                        - img "Dislike" [ref=e431]
                        - text: "0"
            - progressbar [ref=e433]
          - contentinfo [ref=e449]:
            - generic [ref=e450]:
              - generic [ref=e451]:
                - link [ref=e453] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e454]
                - navigation [ref=e455]:
                  - menu [ref=e456]:
                    - listitem [ref=e457]:
                      - link "Eco news" [ref=e458] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e459]:
                      - link "Events" [ref=e460] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e461]:
                      - link "Places" [ref=e462] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e463]:
                      - link "About Us" [ref=e464] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e465]:
                      - link "My Space" [ref=e466] [cursor=pointer]:
                        - /url: "#/greenCity/profile/not_signed-in"
                    - listitem [ref=e467]:
                      - link "UBS Courier" [ref=e468] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e469]:
                    - listitem [ref=e470]:
                      - paragraph [ref=e471]: Follow us
                    - listitem [ref=e472]:
                      - link [ref=e473] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e474]
                      - link [ref=e475] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e476]
                      - link [ref=e477] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e478]
                      - link [ref=e479] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e480]
                      - link [ref=e481] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e482]
              - generic [ref=e483]: © Copyright 2026. Green City.
    - button [ref=e484] [cursor=pointer]:
      - img "chat" [ref=e485]
  - generic [ref=e486]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | 
  3  | test.describe('TC-33 Verify that a user can filter events by date range', () => {
  4  |   test('should filter events by selected date range and restore list when filter is removed', async ({
  5  |     eventsPage,
  6  |   }) => {
  7  |     // Preconditions:
  8  |     // 1. At least one event exists in the system.
  9  |     // 2. Open the "GreenCity" site and navigate to the "Events" page.
  10 |     await eventsPage.navigateToEventsPage();
  11 |     await eventsPage.waitForEventsPage();
  12 | 
  13 |     // 3. Record the "Items found" count before applying any filter.
  14 |     const initialItemsCount = await eventsPage.getItemsFoundCount();
  15 |     expect(initialItemsCount).toBeGreaterThan(0);
  16 | 
  17 |     // Step 1: Click the "Date range" filter.
  18 |     await eventsPage.filters.openDateRangeFilter();
  19 |     await expect(eventsPage.filters.calendarDropdown.calendar).toBeVisible();
  20 | 
  21 |     // Steps 2 & 3: Select date range (15 to 16).
  22 |     const startDate = 15;
  23 |     const endDate = 16;
  24 |     await eventsPage.filters.calendarDropdown.selectDateRange(startDate, endDate);
  25 | 
  26 |     // Step 4: Verify that the filter indicator for the selected date range is displayed above the events list.
  27 |     const dateChip = eventsPage.getActiveDateRangeChip();
  28 |     await expect(dateChip.chip).toBeVisible();
  29 |     const activeFilterText = await dateChip.getText();
  30 |     expect(activeFilterText).toContain(String(startDate));
  31 |     expect(activeFilterText).toContain(String(endDate));
  32 | 
  33 |     // Step 5: Verify that all displayed events fall within the selected date range.
  34 |     const filteredItemsCount = await eventsPage.getItemsFoundCount();
  35 |     const displayedCardsCount = await eventsPage.getGridEventCardsCount();
> 36 |     expect(displayedCardsCount).toBe(filteredItemsCount);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  37 | 
  38 |     // Step 6: Verify that the "Items found" count is updated according to the number of events matching the selected date range.
  39 |     expect(filteredItemsCount).toBeLessThanOrEqual(initialItemsCount);
  40 | 
  41 |     // Step 7: Click the "x" icon on the date range filter indicator.
  42 |     await dateChip.remove();
  43 |     await expect(dateChip.chip).toBeHidden();
  44 | 
  45 |     // Step 8: Verify that the "Items found" count is restored to the value recorded before applying the filter.
  46 |     await expect(eventsPage.itemsFound).toHaveText(new RegExp(`\\b${initialItemsCount}\\b`));
  47 |     const restoredItemsCount = await eventsPage.getItemsFoundCount();
  48 |     expect(restoredItemsCount).toBe(initialItemsCount);
  49 |   });
  50 | });
  51 | 
```