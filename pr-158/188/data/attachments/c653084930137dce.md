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
                - heading "4807 items found" [level=2] [ref=e81]
                - generic [ref=e83]:
                  - button "table view" [pressed] [ref=e84]:
                    - emphasis [ref=e85]: 
                  - button "list view" [ref=e86] [cursor=pointer]:
                    - emphasis [ref=e87]: 
              - list "news list" [ref=e89]:
                - listitem [ref=e90]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790772504562 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e91] [cursor=pointer]:
                    - /url: "#/greenCity/news/13507"
                    - generic [ref=e93]:
                      - img "user added image" [ref=e94]
                      - generic [ref=e95]:
                        - list [ref=e96]:
                          - generic [ref=e97]: News|
                          - generic [ref=e98]: Education|
                          - generic [ref=e99]: Initiatives
                        - generic [ref=e100]:
                          - heading "New environmental initiative launched in Lviv 1790772504562" [level=3] [ref=e102]
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
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790772487364 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e123] [cursor=pointer]:
                    - /url: "#/greenCity/news/13506"
                    - generic [ref=e125]:
                      - img "user added image" [ref=e126]
                      - generic [ref=e127]:
                        - list [ref=e128]:
                          - generic [ref=e129]: News|
                          - generic [ref=e130]: Education|
                          - generic [ref=e131]: Initiatives
                        - generic [ref=e132]:
                          - heading "New environmental initiative launched in Lviv 1790772487364" [level=3] [ref=e134]
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
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790771448423 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e155] [cursor=pointer]:
                    - /url: "#/greenCity/news/13505"
                    - generic [ref=e157]:
                      - img "user added image" [ref=e158]
                      - generic [ref=e159]:
                        - list [ref=e160]:
                          - generic [ref=e161]: News|
                          - generic [ref=e162]: Education|
                          - generic [ref=e163]: Initiatives
                        - generic [ref=e164]:
                          - heading "New environmental initiative launched in Lviv 1790771448423" [level=3] [ref=e166]
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
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790771429727 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e187] [cursor=pointer]:
                    - /url: "#/greenCity/news/13504"
                    - generic [ref=e189]:
                      - img "user added image" [ref=e190]
                      - generic [ref=e191]:
                        - list [ref=e192]:
                          - generic [ref=e193]: News|
                          - generic [ref=e194]: Education|
                          - generic [ref=e195]: Initiatives
                        - generic [ref=e196]:
                          - heading "New environmental initiative launched in Lviv 1790771429727" [level=3] [ref=e198]
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
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790771424370 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e219] [cursor=pointer]:
                    - /url: "#/greenCity/news/13503"
                    - generic [ref=e221]:
                      - img "user added image" [ref=e222]
                      - generic [ref=e223]:
                        - list [ref=e224]:
                          - generic [ref=e225]: News|
                          - generic [ref=e226]: Education|
                          - generic [ref=e227]: Initiatives
                        - generic [ref=e228]:
                          - heading "New environmental initiative launched in Lviv 1790771424370" [level=3] [ref=e230]
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
                  - link "user added image Education Title ContentContentContent date of creation Sep 30, 2026 created by dfs comments 0 likes 0" [ref=e251] [cursor=pointer]:
                    - /url: "#/greenCity/news/13502"
                    - generic [ref=e253]:
                      - img "user added image" [ref=e254]
                      - generic [ref=e255]:
                        - list [ref=e256]:
                          - generic [ref=e257]: Education
                        - generic [ref=e258]:
                          - heading "Title" [level=3] [ref=e260]
                          - generic [ref=e261]: ContentContentContent
                        - generic [ref=e263]:
                          - paragraph [ref=e264]:
                            - img "date of creation" [ref=e265]
                            - generic [ref=e266]: Sep 30, 2026
                          - paragraph [ref=e267]:
                            - img "created by" [ref=e268]
                            - generic [ref=e269]: dfs
                          - generic [ref=e270]:
                            - paragraph [ref=e271]:
                              - img "comments" [ref=e272]
                              - generic [ref=e273]: "0"
                            - paragraph [ref=e274]:
                              - img "likes" [ref=e275]
                              - generic [ref=e276]: "0"
                - listitem [ref=e279]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790770912238 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e280] [cursor=pointer]:
                    - /url: "#/greenCity/news/13501"
                    - generic [ref=e282]:
                      - img "user added image" [ref=e283]
                      - generic [ref=e284]:
                        - list [ref=e285]:
                          - generic [ref=e286]: News|
                          - generic [ref=e287]: Education|
                          - generic [ref=e288]: Initiatives
                        - generic [ref=e289]:
                          - heading "New environmental initiative launched in Lviv 1790770912238" [level=3] [ref=e291]
                          - paragraph [ref=e294]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e295]:
                          - paragraph [ref=e296]:
                            - img "date of creation" [ref=e297]
                            - generic [ref=e298]: Sep 30, 2026
                          - paragraph [ref=e299]:
                            - img "created by" [ref=e300]
                            - generic [ref=e301]: Володимир
                          - generic [ref=e302]:
                            - paragraph [ref=e303]:
                              - img "comments" [ref=e304]
                              - generic [ref=e305]: "0"
                            - paragraph [ref=e306]:
                              - img "likes" [ref=e307]
                              - generic [ref=e308]: "0"
                - listitem [ref=e311]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790770900191 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e312] [cursor=pointer]:
                    - /url: "#/greenCity/news/13500"
                    - generic [ref=e314]:
                      - img "user added image" [ref=e315]
                      - generic [ref=e316]:
                        - list [ref=e317]:
                          - generic [ref=e318]: News|
                          - generic [ref=e319]: Education|
                          - generic [ref=e320]: Initiatives
                        - generic [ref=e321]:
                          - heading "New environmental initiative launched in Lviv 1790770900191" [level=3] [ref=e323]
                          - paragraph [ref=e326]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e327]:
                          - paragraph [ref=e328]:
                            - img "date of creation" [ref=e329]
                            - generic [ref=e330]: Sep 30, 2026
                          - paragraph [ref=e331]:
                            - img "created by" [ref=e332]
                            - generic [ref=e333]: Володимир
                          - generic [ref=e334]:
                            - paragraph [ref=e335]:
                              - img "comments" [ref=e336]
                              - generic [ref=e337]: "0"
                            - paragraph [ref=e338]:
                              - img "likes" [ref=e339]
                              - generic [ref=e340]: "0"
                - listitem [ref=e343]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790770892041 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e344] [cursor=pointer]:
                    - /url: "#/greenCity/news/13499"
                    - generic [ref=e346]:
                      - img "user added image" [ref=e347]
                      - generic [ref=e348]:
                        - list [ref=e349]:
                          - generic [ref=e350]: News|
                          - generic [ref=e351]: Education|
                          - generic [ref=e352]: Initiatives
                        - generic [ref=e353]:
                          - heading "New environmental initiative launched in Lviv 1790770892041" [level=3] [ref=e355]
                          - paragraph [ref=e358]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e359]:
                          - paragraph [ref=e360]:
                            - img "date of creation" [ref=e361]
                            - generic [ref=e362]: Sep 30, 2026
                          - paragraph [ref=e363]:
                            - img "created by" [ref=e364]
                            - generic [ref=e365]: Володимир
                          - generic [ref=e366]:
                            - paragraph [ref=e367]:
                              - img "comments" [ref=e368]
                              - generic [ref=e369]: "0"
                            - paragraph [ref=e370]:
                              - img "likes" [ref=e371]
                              - generic [ref=e372]: "0"
                - listitem [ref=e375]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790770026349 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e376] [cursor=pointer]:
                    - /url: "#/greenCity/news/13498"
                    - generic [ref=e378]:
                      - img "user added image" [ref=e379]
                      - generic [ref=e380]:
                        - list [ref=e381]:
                          - generic [ref=e382]: News|
                          - generic [ref=e383]: Education|
                          - generic [ref=e384]: Initiatives
                        - generic [ref=e385]:
                          - heading "New environmental initiative launched in Lviv 1790770026349" [level=3] [ref=e387]
                          - paragraph [ref=e390]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e391]:
                          - paragraph [ref=e392]:
                            - img "date of creation" [ref=e393]
                            - generic [ref=e394]: Sep 30, 2026
                          - paragraph [ref=e395]:
                            - img "created by" [ref=e396]
                            - generic [ref=e397]: Володимир
                          - generic [ref=e398]:
                            - paragraph [ref=e399]:
                              - img "comments" [ref=e400]
                              - generic [ref=e401]: "0"
                            - paragraph [ref=e402]:
                              - img "likes" [ref=e403]
                              - generic [ref=e404]: "0"
                - listitem [ref=e407]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790770005879 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e408] [cursor=pointer]:
                    - /url: "#/greenCity/news/13497"
                    - generic [ref=e410]:
                      - img "user added image" [ref=e411]
                      - generic [ref=e412]:
                        - list [ref=e413]:
                          - generic [ref=e414]: News|
                          - generic [ref=e415]: Education|
                          - generic [ref=e416]: Initiatives
                        - generic [ref=e417]:
                          - heading "New environmental initiative launched in Lviv 1790770005879" [level=3] [ref=e419]
                          - paragraph [ref=e422]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e423]:
                          - paragraph [ref=e424]:
                            - img "date of creation" [ref=e425]
                            - generic [ref=e426]: Sep 30, 2026
                          - paragraph [ref=e427]:
                            - img "created by" [ref=e428]
                            - generic [ref=e429]: Володимир
                          - generic [ref=e430]:
                            - paragraph [ref=e431]:
                              - img "comments" [ref=e432]
                              - generic [ref=e433]: "0"
                            - paragraph [ref=e434]:
                              - img "likes" [ref=e435]
                              - generic [ref=e436]: "0"
                - listitem [ref=e439]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790769984290 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e440] [cursor=pointer]:
                    - /url: "#/greenCity/news/13496"
                    - generic [ref=e442]:
                      - img "user added image" [ref=e443]
                      - generic [ref=e444]:
                        - list [ref=e445]:
                          - generic [ref=e446]: News|
                          - generic [ref=e447]: Education|
                          - generic [ref=e448]: Initiatives
                        - generic [ref=e449]:
                          - heading "New environmental initiative launched in Lviv 1790769984290" [level=3] [ref=e451]
                          - paragraph [ref=e454]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e455]:
                          - paragraph [ref=e456]:
                            - img "date of creation" [ref=e457]
                            - generic [ref=e458]: Sep 30, 2026
                          - paragraph [ref=e459]:
                            - img "created by" [ref=e460]
                            - generic [ref=e461]: Володимир
                          - generic [ref=e462]:
                            - paragraph [ref=e463]:
                              - img "comments" [ref=e464]
                              - generic [ref=e465]: "0"
                            - paragraph [ref=e466]:
                              - img "likes" [ref=e467]
                              - generic [ref=e468]: "0"
              - progressbar [ref=e472]
          - contentinfo [ref=e488]:
            - generic [ref=e489]:
              - generic [ref=e490]:
                - link [ref=e492] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e493]
                - navigation [ref=e494]:
                  - menu [ref=e495]:
                    - listitem [ref=e496]:
                      - link "Eco news" [ref=e497] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e498]:
                      - link "Events" [ref=e499] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e500]:
                      - link "Places" [ref=e501] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e502]:
                      - link "About Us" [ref=e503] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e504]:
                      - link "My Space" [ref=e505] [cursor=pointer]:
                        - /url: "#/greenCity/profile/not_signed-in"
                    - listitem [ref=e506]:
                      - link "UBS Courier" [ref=e507] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e508]:
                    - listitem [ref=e509]:
                      - paragraph [ref=e510]: Follow us
                    - listitem [ref=e511]:
                      - link [ref=e512] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e513]
                      - link [ref=e514] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e515]
                      - link [ref=e516] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e517]
                      - link [ref=e518] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e519]
                      - link [ref=e520] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e521]
              - generic [ref=e522]: © Copyright 2026. Green City.
    - button [ref=e523] [cursor=pointer]:
      - img "chat" [ref=e524]
  - generic [ref=e525]: Welcome to the search window
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