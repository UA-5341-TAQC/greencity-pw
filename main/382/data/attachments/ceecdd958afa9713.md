# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-29-news-tags-filters.spec.ts >> TC-29 Eco News tags and filters >> Verify available tags and filtering functionality
- Location: tests/ui/tc-29-news-tags-filters.spec.ts:6:3

# Error details

```
Error: expect(received).toEqual(expected) // deep equality

- Expected  - 1
+ Received  + 1

@@ -1,6 +1,7 @@
  Array [
+   "New environmental initiative launched in Lviv 1794211111730",
    "New environmental initiative launched in Lviv 1794211089598",
    "New environmental initiative launched in Lviv 1794211000798",
    "New environmental initiative launched in Lviv 1794210980724",
    "New environmental initiative launched in Lviv 1794210956991",
    "New environmental initiative launched in Lviv 1794210944931",
@@ -8,7 +9,6 @@
    "Updated Eco News Title 1794144931540",
    "Updated Eco News Title 1794144905528",
    "Updated Eco News Title 1794144868271",
    "New environmental initiative launched in Lviv 1794144664811",
    "New environmental initiative launched in Lviv 1794144629019",
-   "TC-008 validation 1794073429900",
  ]
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
          - main "news list" [ref=e47]:
            - generic [ref=e48]:
              - generic [ref=e50]:
                - heading "Eco news" [level=1] [ref=e51]
                - generic [ref=e52]:
                  - generic [ref=e53] [cursor=pointer]
                  - generic [ref=e55] [cursor=pointer]
                  - img "my-event" [ref=e58] [cursor=pointer]
                - link "Create news" [ref=e59] [cursor=pointer]:
                  - /url: "#/greenCity/news/create-news"
              - generic [ref=e62]:
                - generic [ref=e65]:
                  - generic [ref=e66]: Filter by
                  - generic "filter by items" [ref=e67]:
                    - button "News" [ref=e68] [cursor=pointer]
                    - button "Events" [active] [ref=e71] [cursor=pointer]
                    - button "Education" [ref=e74] [cursor=pointer]
                    - button "Initiatives" [ref=e77] [cursor=pointer]
                    - button "Ads" [ref=e80] [cursor=pointer]
                - separator [ref=e83]
              - generic [ref=e84]:
                - heading "5141 items found" [level=2] [ref=e87]
                - generic [ref=e89]:
                  - button "table view" [ref=e90] [cursor=pointer]:
                    - emphasis [ref=e91]: 
                  - button "list view" [pressed] [ref=e92]:
                    - emphasis [ref=e93]: 
              - list "news list" [ref=e95]:
                - listitem [ref=e96]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794211111730 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 09, 2026 user icon TestATestA" [ref=e97] [cursor=pointer]:
                    - /url: "#/greenCity/news/14052"
                    - generic [ref=e99]:
                      - img "Eco news image" [ref=e100]
                      - generic [ref=e101]:
                        - generic [ref=e102]:
                          - generic [ref=e103]:
                            - paragraph [ref=e104]: News|
                            - paragraph [ref=e105]: Education|
                            - paragraph [ref=e106]: Initiatives
                          - generic [ref=e107]:
                            - heading "New environmental initiative launched in Lviv 1794211111730" [level=3] [ref=e109]
                            - paragraph [ref=e112]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e113]
                        - generic [ref=e114]:
                          - paragraph [ref=e115]:
                            - img "calendar icon" [ref=e116]
                            - generic [ref=e117]: Nov 09, 2026
                          - paragraph [ref=e118]:
                            - img "user icon" [ref=e119]
                            - text: TestATestA
                - listitem [ref=e122]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794211089598 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 09, 2026 user icon TestATestA" [ref=e123] [cursor=pointer]:
                    - /url: "#/greenCity/news/14051"
                    - generic [ref=e125]:
                      - img "Eco news image" [ref=e126]
                      - generic [ref=e127]:
                        - generic [ref=e128]:
                          - generic [ref=e129]:
                            - paragraph [ref=e130]: News|
                            - paragraph [ref=e131]: Education|
                            - paragraph [ref=e132]: Initiatives
                          - generic [ref=e133]:
                            - heading "New environmental initiative launched in Lviv 1794211089598" [level=3] [ref=e135]
                            - paragraph [ref=e138]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e139]
                        - generic [ref=e140]:
                          - paragraph [ref=e141]:
                            - img "calendar icon" [ref=e142]
                            - generic [ref=e143]: Nov 09, 2026
                          - paragraph [ref=e144]:
                            - img "user icon" [ref=e145]
                            - text: TestATestA
                - listitem [ref=e148]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794211000798 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 09, 2026 user icon TestATestA" [ref=e149] [cursor=pointer]:
                    - /url: "#/greenCity/news/14050"
                    - generic [ref=e151]:
                      - img "Eco news image" [ref=e152]
                      - generic [ref=e153]:
                        - generic [ref=e154]:
                          - generic [ref=e155]:
                            - paragraph [ref=e156]: News|
                            - paragraph [ref=e157]: Education|
                            - paragraph [ref=e158]: Initiatives
                          - generic [ref=e159]:
                            - heading "New environmental initiative launched in Lviv 1794211000798" [level=3] [ref=e161]
                            - paragraph [ref=e164]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e165]
                        - generic [ref=e166]:
                          - paragraph [ref=e167]:
                            - img "calendar icon" [ref=e168]
                            - generic [ref=e169]: Nov 09, 2026
                          - paragraph [ref=e170]:
                            - img "user icon" [ref=e171]
                            - text: TestATestA
                - listitem [ref=e174]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794210980724 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 09, 2026 user icon TestATestA" [ref=e175] [cursor=pointer]:
                    - /url: "#/greenCity/news/14049"
                    - generic [ref=e177]:
                      - img "Eco news image" [ref=e178]
                      - generic [ref=e179]:
                        - generic [ref=e180]:
                          - generic [ref=e181]:
                            - paragraph [ref=e182]: News|
                            - paragraph [ref=e183]: Education|
                            - paragraph [ref=e184]: Initiatives
                          - generic [ref=e185]:
                            - heading "New environmental initiative launched in Lviv 1794210980724" [level=3] [ref=e187]
                            - paragraph [ref=e190]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e191]
                        - generic [ref=e192]:
                          - paragraph [ref=e193]:
                            - img "calendar icon" [ref=e194]
                            - generic [ref=e195]: Nov 09, 2026
                          - paragraph [ref=e196]:
                            - img "user icon" [ref=e197]
                            - text: TestATestA
                - listitem [ref=e200]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794210956991 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 09, 2026 user icon TestATestA" [ref=e201] [cursor=pointer]:
                    - /url: "#/greenCity/news/14048"
                    - generic [ref=e203]:
                      - img "Eco news image" [ref=e204]
                      - generic [ref=e205]:
                        - generic [ref=e206]:
                          - generic [ref=e207]:
                            - paragraph [ref=e208]: News|
                            - paragraph [ref=e209]: Education|
                            - paragraph [ref=e210]: Initiatives
                          - generic [ref=e211]:
                            - heading "New environmental initiative launched in Lviv 1794210956991" [level=3] [ref=e213]
                            - paragraph [ref=e216]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e217]
                        - generic [ref=e218]:
                          - paragraph [ref=e219]:
                            - img "calendar icon" [ref=e220]
                            - generic [ref=e221]: Nov 09, 2026
                          - paragraph [ref=e222]:
                            - img "user icon" [ref=e223]
                            - text: TestATestA
                - listitem [ref=e226]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794210944931 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 09, 2026 user icon TestATestA" [ref=e227] [cursor=pointer]:
                    - /url: "#/greenCity/news/14047"
                    - generic [ref=e229]:
                      - img "Eco news image" [ref=e230]
                      - generic [ref=e231]:
                        - generic [ref=e232]:
                          - generic [ref=e233]:
                            - paragraph [ref=e234]: News|
                            - paragraph [ref=e235]: Education|
                            - paragraph [ref=e236]: Initiatives
                          - generic [ref=e237]:
                            - heading "New environmental initiative launched in Lviv 1794210944931" [level=3] [ref=e239]
                            - paragraph [ref=e242]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e243]
                        - generic [ref=e244]:
                          - paragraph [ref=e245]:
                            - img "calendar icon" [ref=e246]
                            - generic [ref=e247]: Nov 09, 2026
                          - paragraph [ref=e248]:
                            - img "user icon" [ref=e249]
                            - text: TestATestA
                - listitem [ref=e252]:
                  - link "Eco news image News TC-008 validation 1794144942269 Temporary article created for TC-008 validation. More calendar icon Nov 08, 2026 user icon TestATestA" [ref=e253] [cursor=pointer]:
                    - /url: "#/greenCity/news/14042"
                    - generic [ref=e255]:
                      - img "Eco news image" [ref=e256]
                      - generic [ref=e257]:
                        - generic [ref=e258]:
                          - paragraph [ref=e260]: News
                          - generic [ref=e261]:
                            - heading "TC-008 validation 1794144942269" [level=3] [ref=e263]
                            - paragraph [ref=e266]: Temporary article created for TC-008 validation.
                          - button "More" [ref=e267]
                        - generic [ref=e268]:
                          - paragraph [ref=e269]:
                            - img "calendar icon" [ref=e270]
                            - generic [ref=e271]: Nov 08, 2026
                          - paragraph [ref=e272]:
                            - img "user icon" [ref=e273]
                            - text: TestATestA
                - listitem [ref=e276]:
                  - link "Eco news image News| Education| Initiatives Updated Eco News Title 1794144931540 Updated Eco News content for testing. More calendar icon Nov 08, 2026 user icon TestATestA" [ref=e277] [cursor=pointer]:
                    - /url: "#/greenCity/news/14041"
                    - generic [ref=e279]:
                      - img "Eco news image" [ref=e280]
                      - generic [ref=e281]:
                        - generic [ref=e282]:
                          - generic [ref=e283]:
                            - paragraph [ref=e284]: News|
                            - paragraph [ref=e285]: Education|
                            - paragraph [ref=e286]: Initiatives
                          - generic [ref=e287]:
                            - heading "Updated Eco News Title 1794144931540" [level=3] [ref=e289]
                            - paragraph [ref=e292]: Updated Eco News content for testing.
                          - button "More" [ref=e293]
                        - generic [ref=e294]:
                          - paragraph [ref=e295]:
                            - img "calendar icon" [ref=e296]
                            - generic [ref=e297]: Nov 08, 2026
                          - paragraph [ref=e298]:
                            - img "user icon" [ref=e299]
                            - text: TestATestA
                - listitem [ref=e302]:
                  - link "Eco news image News| Education| Initiatives Updated Eco News Title 1794144905528 Updated Eco News content for testing. More calendar icon Nov 08, 2026 user icon TestATestA" [ref=e303] [cursor=pointer]:
                    - /url: "#/greenCity/news/14040"
                    - generic [ref=e305]:
                      - img "Eco news image" [ref=e306]
                      - generic [ref=e307]:
                        - generic [ref=e308]:
                          - generic [ref=e309]:
                            - paragraph [ref=e310]: News|
                            - paragraph [ref=e311]: Education|
                            - paragraph [ref=e312]: Initiatives
                          - generic [ref=e313]:
                            - heading "Updated Eco News Title 1794144905528" [level=3] [ref=e315]
                            - paragraph [ref=e318]: Updated Eco News content for testing.
                          - button "More" [ref=e319]
                        - generic [ref=e320]:
                          - paragraph [ref=e321]:
                            - img "calendar icon" [ref=e322]
                            - generic [ref=e323]: Nov 08, 2026
                          - paragraph [ref=e324]:
                            - img "user icon" [ref=e325]
                            - text: TestATestA
                - listitem [ref=e328]:
                  - link "Eco news image News| Education| Initiatives Updated Eco News Title 1794144868271 Updated Eco News content for testing. More calendar icon Nov 08, 2026 user icon TestATestA" [ref=e329] [cursor=pointer]:
                    - /url: "#/greenCity/news/14039"
                    - generic [ref=e331]:
                      - img "Eco news image" [ref=e332]
                      - generic [ref=e333]:
                        - generic [ref=e334]:
                          - generic [ref=e335]:
                            - paragraph [ref=e336]: News|
                            - paragraph [ref=e337]: Education|
                            - paragraph [ref=e338]: Initiatives
                          - generic [ref=e339]:
                            - heading "Updated Eco News Title 1794144868271" [level=3] [ref=e341]
                            - paragraph [ref=e344]: Updated Eco News content for testing.
                          - button "More" [ref=e345]
                        - generic [ref=e346]:
                          - paragraph [ref=e347]:
                            - img "calendar icon" [ref=e348]
                            - generic [ref=e349]: Nov 08, 2026
                          - paragraph [ref=e350]:
                            - img "user icon" [ref=e351]
                            - text: TestATestA
                - listitem [ref=e354]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794144664811 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 08, 2026 user icon TestATestA" [ref=e355] [cursor=pointer]:
                    - /url: "#/greenCity/news/14038"
                    - generic [ref=e357]:
                      - img "Eco news image" [ref=e358]
                      - generic [ref=e359]:
                        - generic [ref=e360]:
                          - generic [ref=e361]:
                            - paragraph [ref=e362]: News|
                            - paragraph [ref=e363]: Education|
                            - paragraph [ref=e364]: Initiatives
                          - generic [ref=e365]:
                            - heading "New environmental initiative launched in Lviv 1794144664811" [level=3] [ref=e367]
                            - paragraph [ref=e370]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e371]
                        - generic [ref=e372]:
                          - paragraph [ref=e373]:
                            - img "calendar icon" [ref=e374]
                            - generic [ref=e375]: Nov 08, 2026
                          - paragraph [ref=e376]:
                            - img "user icon" [ref=e377]
                            - text: TestATestA
                - listitem [ref=e380]:
                  - link "Eco news image News| Education| Initiatives New environmental initiative launched in Lviv 1794144629019 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. More calendar icon Nov 08, 2026 user icon TestATestA" [ref=e381] [cursor=pointer]:
                    - /url: "#/greenCity/news/14037"
                    - generic [ref=e383]:
                      - img "Eco news image" [ref=e384]
                      - generic [ref=e385]:
                        - generic [ref=e386]:
                          - generic [ref=e387]:
                            - paragraph [ref=e388]: News|
                            - paragraph [ref=e389]: Education|
                            - paragraph [ref=e390]: Initiatives
                          - generic [ref=e391]:
                            - heading "New environmental initiative launched in Lviv 1794144629019" [level=3] [ref=e393]
                            - paragraph [ref=e396]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                          - button "More" [ref=e397]
                        - generic [ref=e398]:
                          - paragraph [ref=e399]:
                            - img "calendar icon" [ref=e400]
                            - generic [ref=e401]: Nov 08, 2026
                          - paragraph [ref=e402]:
                            - img "user icon" [ref=e403]
                            - text: TestATestA
              - progressbar [ref=e407]
          - contentinfo [ref=e423]:
            - generic [ref=e424]:
              - generic [ref=e425]:
                - link [ref=e427] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e428]
                - navigation [ref=e429]:
                  - menu [ref=e430]:
                    - listitem [ref=e431]:
                      - link "Eco news" [ref=e432] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e433]:
                      - link "Events" [ref=e434] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e435]:
                      - link "Places" [ref=e436] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e437]:
                      - link "About Us" [ref=e438] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e439]:
                      - link "My Space" [ref=e440] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e441]:
                      - link "UBS Courier" [ref=e442] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e443]:
                    - listitem [ref=e444]:
                      - paragraph [ref=e445]: Follow us
                    - listitem [ref=e446]:
                      - link [ref=e447] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e448]
                      - link [ref=e449] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e450]
                      - link [ref=e451] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e452]
                      - link [ref=e453] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e454]
                      - link [ref=e455] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e456]
              - generic [ref=e457]: © Copyright 2026. Green City.
    - button [ref=e458] [cursor=pointer]:
      - img "chat" [ref=e459]
  - generic [ref=e460]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | 
  3  | const NEWS_TAGS = ['News', 'Events', 'Education', 'Initiatives', 'Ads'];
  4  | 
  5  | test.describe('TC-29 Eco News tags and filters', () => {
  6  |   test('Verify available tags and filtering functionality', async ({
  7  |     authenticatedPage,
  8  |     ecoNewsPage,
  9  |   }) => {
  10 |     await test.step('Open Eco News as an authenticated user', async () => {
  11 |       await authenticatedPage.waitForLoadState('domcontentloaded');
  12 |       await expect(ecoNewsPage.header.userMenuDropdown).toBeVisible();
  13 |       await ecoNewsPage.navigateToEcoNewsPage();
  14 |       await ecoNewsPage.waitForEcoNewsPage();
  15 |       await ecoNewsPage.clickListView();
  16 |       await ecoNewsPage.listViewCards.first().waitFor({ state: 'visible' });
  17 |     });
  18 | 
  19 |     await test.step('Verify the five available tag filters', async () => {
  20 |       expect(await ecoNewsPage.getTagNames()).toEqual(NEWS_TAGS);
  21 |     });
  22 | 
  23 |     const defaultCardCount = await ecoNewsPage.getNewsCardsCount();
  24 |     expect(defaultCardCount).toBeGreaterThan(0);
  25 | 
  26 |     const defaultTitles = await Promise.all(
  27 |       Array.from({ length: defaultCardCount }, async (_, index) =>
  28 |         ecoNewsPage.getNewsCard(index).getTitle()
  29 |       )
  30 |     );
  31 | 
  32 |     for (const tag of NEWS_TAGS) {
  33 |       await test.step(`Filter Eco News by ${tag} and clear the filter`, async () => {
  34 |         await ecoNewsPage.filterByTag(tag);
  35 | 
  36 |         await expect
  37 |           .poll(async () => {
  38 |             const cardCount = await ecoNewsPage.getNewsCardsCount();
  39 |             const cardTags = await Promise.all(
  40 |               Array.from({ length: cardCount }, async (_, index) =>
  41 |                 ecoNewsPage.getNewsCard(index).getTags()
  42 |               )
  43 |             );
  44 | 
  45 |             return (
  46 |               cardCount > 0 &&
  47 |               cardTags.every((tags) => tags.map((cardTag) => cardTag.trim()).includes(tag))
  48 |             );
  49 |           })
  50 |           .toBe(true);
  51 | 
  52 |         const filteredCardCount = await ecoNewsPage.getNewsCardsCount();
  53 |         for (let index = 0; index < filteredCardCount; index++) {
  54 |           const cardTags = (await ecoNewsPage.getNewsCard(index).getTags()).map((cardTag) =>
  55 |             cardTag.trim()
  56 |           );
  57 |           expect(cardTags).toContain(tag);
  58 |         }
  59 | 
  60 |         await ecoNewsPage.filterByTag(tag);
  61 |         await expect(ecoNewsPage.listViewCards).toHaveCount(defaultCardCount);
  62 | 
  63 |         const restoredTitles = await Promise.all(
  64 |           Array.from({ length: defaultCardCount }, async (_, index) =>
  65 |             ecoNewsPage.getNewsCard(index).getTitle()
  66 |           )
  67 |         );
> 68 |         expect(restoredTitles).toEqual(defaultTitles);
     |                                ^ Error: expect(received).toEqual(expected) // deep equality
  69 |       });
  70 |     }
  71 |   });
  72 | });
  73 | 
```