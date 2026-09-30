# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc-79-verify-eco-news-display-modes.spec.ts >> TC-79: Verify Eco News display modes >> should verify switching between table view and list view display modes
- Location: tests/tc-79-verify-eco-news-display-modes.spec.ts:4:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#create-button, a[href*="create-news"]').first() to be visible

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
          - main "news list" [ref=e44]:
            - generic [ref=e45]:
              - generic [ref=e47]:
                - heading "Eco news" [level=1] [ref=e48]
                - generic [ref=e49]:
                  - generic [ref=e50] [cursor=pointer]
                  - generic [ref=e52] [cursor=pointer]
                  - img "my-event" [ref=e55] [cursor=pointer]
              - generic [ref=e56]:
                - generic [ref=e59]:
                  - generic [ref=e60]: Filter by
                  - generic "filter by items" [ref=e61]:
                    - button "News" [ref=e62] [cursor=pointer]
                    - button "Events" [ref=e65] [cursor=pointer]
                    - button "Education" [ref=e68] [cursor=pointer]
                    - button "Initiatives" [ref=e71] [cursor=pointer]
                    - button "Ads" [ref=e74] [cursor=pointer]
                - separator [ref=e77]
              - generic [ref=e78]:
                - heading "4750 items found" [level=2] [ref=e81]
                - generic [ref=e83]:
                  - button "table view" [pressed] [ref=e84]:
                    - emphasis [ref=e85]: 
                  - button "list view" [ref=e86] [cursor=pointer]:
                    - emphasis [ref=e87]: 
              - list "news list" [ref=e89]:
                - listitem [ref=e90]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790757261850 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e91] [cursor=pointer]:
                    - /url: "#/greenCity/news/13438"
                    - generic [ref=e93]:
                      - img "user added image" [ref=e94]
                      - generic [ref=e95]:
                        - list [ref=e96]:
                          - generic [ref=e97]: News|
                          - generic [ref=e98]: Education|
                          - generic [ref=e99]: Initiatives
                        - generic [ref=e100]:
                          - heading "New environmental initiative launched in Lviv 1790757261850" [level=3] [ref=e102]
                          - paragraph [ref=e105]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e106]:
                          - paragraph [ref=e107]:
                            - img "date of creation" [ref=e108]
                            - generic [ref=e109]: Sep 30, 2026
                          - paragraph [ref=e110]:
                            - img "created by" [ref=e111]
                            - generic [ref=e112]: Володимир
                          - generic [ref=e113]:
                            - paragraph [ref=e114]:
                              - img "comments" [ref=e115]
                              - generic [ref=e116]: "0"
                            - paragraph [ref=e117]:
                              - img "likes" [ref=e118]
                              - generic [ref=e119]: "0"
                - listitem [ref=e122]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790757238853 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e123] [cursor=pointer]:
                    - /url: "#/greenCity/news/13437"
                    - generic [ref=e125]:
                      - img "user added image" [ref=e126]
                      - generic [ref=e127]:
                        - list [ref=e128]:
                          - generic [ref=e129]: News|
                          - generic [ref=e130]: Education|
                          - generic [ref=e131]: Initiatives
                        - generic [ref=e132]:
                          - heading "New environmental initiative launched in Lviv 1790757238853" [level=3] [ref=e134]
                          - paragraph [ref=e137]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e138]:
                          - paragraph [ref=e139]:
                            - img "date of creation" [ref=e140]
                            - generic [ref=e141]: Sep 30, 2026
                          - paragraph [ref=e142]:
                            - img "created by" [ref=e143]
                            - generic [ref=e144]: Володимир
                          - generic [ref=e145]:
                            - paragraph [ref=e146]:
                              - img "comments" [ref=e147]
                              - generic [ref=e148]: "0"
                            - paragraph [ref=e149]:
                              - img "likes" [ref=e150]
                              - generic [ref=e151]: "0"
                - listitem [ref=e154]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790757232445 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e155] [cursor=pointer]:
                    - /url: "#/greenCity/news/13436"
                    - generic [ref=e157]:
                      - img "user added image" [ref=e158]
                      - generic [ref=e159]:
                        - list [ref=e160]:
                          - generic [ref=e161]: News|
                          - generic [ref=e162]: Education|
                          - generic [ref=e163]: Initiatives
                        - generic [ref=e164]:
                          - heading "New environmental initiative launched in Lviv 1790757232445" [level=3] [ref=e166]
                          - paragraph [ref=e169]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e170]:
                          - paragraph [ref=e171]:
                            - img "date of creation" [ref=e172]
                            - generic [ref=e173]: Sep 30, 2026
                          - paragraph [ref=e174]:
                            - img "created by" [ref=e175]
                            - generic [ref=e176]: Володимир
                          - generic [ref=e177]:
                            - paragraph [ref=e178]:
                              - img "comments" [ref=e179]
                              - generic [ref=e180]: "0"
                            - paragraph [ref=e181]:
                              - img "likes" [ref=e182]
                              - generic [ref=e183]: "0"
                - listitem [ref=e186]:
                  - link "user added image News| Education| Initiatives Updated Eco News Title Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e187] [cursor=pointer]:
                    - /url: "#/greenCity/news/13435"
                    - generic [ref=e189]:
                      - img "user added image" [ref=e190]
                      - generic [ref=e191]:
                        - list [ref=e192]:
                          - generic [ref=e193]: News|
                          - generic [ref=e194]: Education|
                          - generic [ref=e195]: Initiatives
                        - generic [ref=e196]:
                          - heading "Updated Eco News Title" [level=3] [ref=e198]
                          - paragraph [ref=e201]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e202]:
                          - paragraph [ref=e203]:
                            - img "date of creation" [ref=e204]
                            - generic [ref=e205]: Sep 30, 2026
                          - paragraph [ref=e206]:
                            - img "created by" [ref=e207]
                            - generic [ref=e208]: Володимир
                          - generic [ref=e209]:
                            - paragraph [ref=e210]:
                              - img "comments" [ref=e211]
                              - generic [ref=e212]: "0"
                            - paragraph [ref=e213]:
                              - img "likes" [ref=e214]
                              - generic [ref=e215]: "0"
                - listitem [ref=e218]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790755843051 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e219] [cursor=pointer]:
                    - /url: "#/greenCity/news/13434"
                    - generic [ref=e221]:
                      - img "user added image" [ref=e222]
                      - generic [ref=e223]:
                        - list [ref=e224]:
                          - generic [ref=e225]: News|
                          - generic [ref=e226]: Education|
                          - generic [ref=e227]: Initiatives
                        - generic [ref=e228]:
                          - heading "New environmental initiative launched in Lviv 1790755843051" [level=3] [ref=e230]
                          - paragraph [ref=e233]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e234]:
                          - paragraph [ref=e235]:
                            - img "date of creation" [ref=e236]
                            - generic [ref=e237]: Sep 30, 2026
                          - paragraph [ref=e238]:
                            - img "created by" [ref=e239]
                            - generic [ref=e240]: Володимир
                          - generic [ref=e241]:
                            - paragraph [ref=e242]:
                              - img "comments" [ref=e243]
                              - generic [ref=e244]: "0"
                            - paragraph [ref=e245]:
                              - img "likes" [ref=e246]
                              - generic [ref=e247]: "0"
                - listitem [ref=e250]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790755838192 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e251] [cursor=pointer]:
                    - /url: "#/greenCity/news/13433"
                    - generic [ref=e253]:
                      - img "user added image" [ref=e254]
                      - generic [ref=e255]:
                        - list [ref=e256]:
                          - generic [ref=e257]: News|
                          - generic [ref=e258]: Education|
                          - generic [ref=e259]: Initiatives
                        - generic [ref=e260]:
                          - heading "New environmental initiative launched in Lviv 1790755838192" [level=3] [ref=e262]
                          - paragraph [ref=e265]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e266]:
                          - paragraph [ref=e267]:
                            - img "date of creation" [ref=e268]
                            - generic [ref=e269]: Sep 30, 2026
                          - paragraph [ref=e270]:
                            - img "created by" [ref=e271]
                            - generic [ref=e272]: Володимир
                          - generic [ref=e273]:
                            - paragraph [ref=e274]:
                              - img "comments" [ref=e275]
                              - generic [ref=e276]: "0"
                            - paragraph [ref=e277]:
                              - img "likes" [ref=e278]
                              - generic [ref=e279]: "0"
                - listitem [ref=e282]:
                  - link "user added image News| Education| Initiatives Updated Eco News Title Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e283] [cursor=pointer]:
                    - /url: "#/greenCity/news/13432"
                    - generic [ref=e285]:
                      - img "user added image" [ref=e286]
                      - generic [ref=e287]:
                        - list [ref=e288]:
                          - generic [ref=e289]: News|
                          - generic [ref=e290]: Education|
                          - generic [ref=e291]: Initiatives
                        - generic [ref=e292]:
                          - heading "Updated Eco News Title" [level=3] [ref=e294]
                          - paragraph [ref=e297]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e298]:
                          - paragraph [ref=e299]:
                            - img "date of creation" [ref=e300]
                            - generic [ref=e301]: Sep 30, 2026
                          - paragraph [ref=e302]:
                            - img "created by" [ref=e303]
                            - generic [ref=e304]: Володимир
                          - generic [ref=e305]:
                            - paragraph [ref=e306]:
                              - img "comments" [ref=e307]
                              - generic [ref=e308]: "0"
                            - paragraph [ref=e309]:
                              - img "likes" [ref=e310]
                              - generic [ref=e311]: "0"
                - listitem [ref=e314]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790755367099 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e315] [cursor=pointer]:
                    - /url: "#/greenCity/news/13431"
                    - generic [ref=e317]:
                      - img "user added image" [ref=e318]
                      - generic [ref=e319]:
                        - list [ref=e320]:
                          - generic [ref=e321]: News|
                          - generic [ref=e322]: Education|
                          - generic [ref=e323]: Initiatives
                        - generic [ref=e324]:
                          - heading "New environmental initiative launched in Lviv 1790755367099" [level=3] [ref=e326]
                          - paragraph [ref=e329]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e330]:
                          - paragraph [ref=e331]:
                            - img "date of creation" [ref=e332]
                            - generic [ref=e333]: Sep 30, 2026
                          - paragraph [ref=e334]:
                            - img "created by" [ref=e335]
                            - generic [ref=e336]: Володимир
                          - generic [ref=e337]:
                            - paragraph [ref=e338]:
                              - img "comments" [ref=e339]
                              - generic [ref=e340]: "0"
                            - paragraph [ref=e341]:
                              - img "likes" [ref=e342]
                              - generic [ref=e343]: "0"
                - listitem [ref=e346]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790755357669 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e347] [cursor=pointer]:
                    - /url: "#/greenCity/news/13430"
                    - generic [ref=e349]:
                      - img "user added image" [ref=e350]
                      - generic [ref=e351]:
                        - list [ref=e352]:
                          - generic [ref=e353]: News|
                          - generic [ref=e354]: Education|
                          - generic [ref=e355]: Initiatives
                        - generic [ref=e356]:
                          - heading "New environmental initiative launched in Lviv 1790755357669" [level=3] [ref=e358]
                          - paragraph [ref=e361]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e362]:
                          - paragraph [ref=e363]:
                            - img "date of creation" [ref=e364]
                            - generic [ref=e365]: Sep 30, 2026
                          - paragraph [ref=e366]:
                            - img "created by" [ref=e367]
                            - generic [ref=e368]: Володимир
                          - generic [ref=e369]:
                            - paragraph [ref=e370]:
                              - img "comments" [ref=e371]
                              - generic [ref=e372]: "0"
                            - paragraph [ref=e373]:
                              - img "likes" [ref=e374]
                              - generic [ref=e375]: "0"
                - listitem [ref=e378]:
                  - link "user added image News TestTest edit 1790752471825 TestTest content for the edit news test, TestTest content for the edit news test. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e379] [cursor=pointer]:
                    - /url: "#/greenCity/news/13420"
                    - generic [ref=e381]:
                      - img "user added image" [ref=e382]
                      - generic [ref=e383]:
                        - list [ref=e384]:
                          - generic [ref=e385]: News
                        - generic [ref=e386]:
                          - heading "TestTest edit 1790752471825" [level=3] [ref=e388]
                          - paragraph [ref=e391]: TestTest content for the edit news test, TestTest content for the edit news test.
                        - generic [ref=e392]:
                          - paragraph [ref=e393]:
                            - img "date of creation" [ref=e394]
                            - generic [ref=e395]: Sep 30, 2026
                          - paragraph [ref=e396]:
                            - img "created by" [ref=e397]
                            - generic [ref=e398]: Green
                          - generic [ref=e399]:
                            - paragraph [ref=e400]:
                              - img "comments" [ref=e401]
                              - generic [ref=e402]: "0"
                            - paragraph [ref=e403]:
                              - img "likes" [ref=e404]
                              - generic [ref=e405]: "0"
                - listitem [ref=e408]:
                  - link "user added image News TestTest edit 1790752405582 TestTest content for the edit news test, TestTest content for the edit news test. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e409] [cursor=pointer]:
                    - /url: "#/greenCity/news/13419"
                    - generic [ref=e411]:
                      - img "user added image" [ref=e412]
                      - generic [ref=e413]:
                        - list [ref=e414]:
                          - generic [ref=e415]: News
                        - generic [ref=e416]:
                          - heading "TestTest edit 1790752405582" [level=3] [ref=e418]
                          - paragraph [ref=e421]: TestTest content for the edit news test, TestTest content for the edit news test.
                        - generic [ref=e422]:
                          - paragraph [ref=e423]:
                            - img "date of creation" [ref=e424]
                            - generic [ref=e425]: Sep 30, 2026
                          - paragraph [ref=e426]:
                            - img "created by" [ref=e427]
                            - generic [ref=e428]: Green
                          - generic [ref=e429]:
                            - paragraph [ref=e430]:
                              - img "comments" [ref=e431]
                              - generic [ref=e432]: "0"
                            - paragraph [ref=e433]:
                              - img "likes" [ref=e434]
                              - generic [ref=e435]: "0"
                - listitem [ref=e438]:
                  - link "user added image News Empty title validation 1731098223373708 A news article created for the empty title validation test. Its title must stay unchanged. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e439] [cursor=pointer]:
                    - /url: "#/greenCity/news/13416"
                    - generic [ref=e441]:
                      - img "user added image" [ref=e442]
                      - generic [ref=e443]:
                        - list [ref=e444]:
                          - generic [ref=e445]: News
                        - generic [ref=e446]:
                          - heading "Empty title validation 1731098223373708" [level=3] [ref=e448]
                          - paragraph [ref=e451]: A news article created for the empty title validation test. Its title must stay unchanged.
                        - generic [ref=e452]:
                          - paragraph [ref=e453]:
                            - img "date of creation" [ref=e454]
                            - generic [ref=e455]: Sep 30, 2026
                          - paragraph [ref=e456]:
                            - img "created by" [ref=e457]
                            - generic [ref=e458]: Green
                          - generic [ref=e459]:
                            - paragraph [ref=e460]:
                              - img "comments" [ref=e461]
                              - generic [ref=e462]: "0"
                            - paragraph [ref=e463]:
                              - img "likes" [ref=e464]
                              - generic [ref=e465]: "0"
              - progressbar [ref=e469]
          - contentinfo [ref=e485]:
            - generic [ref=e486]:
              - generic [ref=e487]:
                - link [ref=e489] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e490]
                - navigation [ref=e491]:
                  - menu [ref=e492]:
                    - listitem [ref=e493]:
                      - link "Eco news" [ref=e494] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e495]:
                      - link "Events" [ref=e496] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e497]:
                      - link "Places" [ref=e498] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e499]:
                      - link "About Us" [ref=e500] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e501]:
                      - link "My Space" [ref=e502] [cursor=pointer]:
                        - /url: "#/greenCity/profile/not_signed-in"
                    - listitem [ref=e503]:
                      - link "UBS Courier" [ref=e504] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e505]:
                    - listitem [ref=e506]:
                      - paragraph [ref=e507]: Follow us
                    - listitem [ref=e508]:
                      - link [ref=e509] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e510]
                      - link [ref=e511] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e512]
                      - link [ref=e513] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e514]
                      - link [ref=e515] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e516]
                      - link [ref=e517] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e518]
              - generic [ref=e519]: © Copyright 2026. Green City.
    - button [ref=e520] [cursor=pointer]:
      - img "chat" [ref=e521]
  - generic [ref=e522]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, type Page, type Locator } from '@playwright/test';
  2  | import BasePage from '@/pages/base-page';
  3  | 
  4  | export class EcoNewsPage extends BasePage {
  5  |   public readonly tableViewButton: Locator;
  6  |   public readonly listViewButton: Locator;
  7  |   public readonly newsList: Locator;
  8  |   public readonly galleryViewCards: Locator;
  9  |   public readonly listViewCards: Locator;
  10 |   private readonly newsCards: Locator;
  11 |   private readonly createNewsButton: Locator;
  12 |   private readonly tagFilterButtons: Locator;
  13 | 
  14 |   constructor(page: Page) {
  15 |     super(page);
  16 |     this.tableViewButton = page.getByRole('button', { name: 'table view' });
  17 |     this.listViewButton = page.getByRole('button', { name: 'list view' });
  18 |     this.newsList = page.locator('ul[aria-label="news list"]');
  19 |     this.galleryViewCards = page.locator('li.gallery-view-li-active');
  20 |     this.listViewCards = page.locator('li.list-view-li-active');
  21 |     this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
  22 |     this.createNewsButton = page.locator('#create-button, a[href*="create-news"]');
  23 |     this.tagFilterButtons = page.locator(
  24 |       '.custom-chip, ul.ul-eco-buttons button, button.tag-button'
  25 |     );
  26 |   }
  27 | 
  28 |   async navigateToEcoNewsPage(): Promise<void> {
  29 |     await test.step('EcoNews: navigate to Eco News page', async () => {
  30 |       await this.navigateTo('/#/greenCity/news');
  31 |     });
  32 |   }
  33 | 
  34 |   async waitForEcoNewsPage(): Promise<void> {
  35 |     await test.step('EcoNews: wait for Eco News page to load', async () => {
  36 |       await this.waitForPageLoad();
> 37 |       await this.createNewsButton.first().waitFor({ state: 'visible' });
     |                                           ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  38 |     });
  39 |   }
  40 | 
  41 |   async clickCreateNews(): Promise<void> {
  42 |     await test.step('EcoNews: click Create news button', async () => {
  43 |       await this.createNewsButton.first().click();
  44 |     });
  45 |   }
  46 | 
  47 |   async clickListView(): Promise<void> {
  48 |     await test.step('EcoNews: switch Eco News display mode to list view', async () => {
  49 |       await this.listViewButton.click();
  50 |     });
  51 |   }
  52 | 
  53 |   async clickTableView(): Promise<void> {
  54 |     await test.step('EcoNews: switch Eco News display mode to table view', async () => {
  55 |       await this.tableViewButton.click();
  56 |     });
  57 |   }
  58 | 
  59 |   async getNewsCardsCount(): Promise<number> {
  60 |     return await test.step('EcoNews: get news cards count', async () => {
  61 |       return await this.newsCards.count();
  62 |     });
  63 |   }
  64 | 
  65 |   getNewsCardLocator(index: number): Locator {
  66 |     return this.newsCards.nth(index);
  67 |   }
  68 | 
  69 |   async getFirstNewsCardTitle(): Promise<string> {
  70 |     return await test.step('EcoNews: get first news card title', async () => {
  71 |       const titleElem = this.page
  72 |         .locator('.eco-news_list-content-title h3, .title-list h3, h3')
  73 |         .first();
  74 |       await titleElem.waitFor({ state: 'visible' });
  75 |       return (await titleElem.innerText()).trim();
  76 |     });
  77 |   }
  78 | 
  79 |   async filterByTag(tagName: string): Promise<void> {
  80 |     await test.step(`EcoNews: filter by tag "${tagName}"`, async () => {
  81 |       const tagBtn = this.tagFilterButtons.filter({ hasText: tagName }).first();
  82 |       await tagBtn.click();
  83 |     });
  84 |   }
  85 | }
  86 | export default EcoNewsPage;
  87 | 
```