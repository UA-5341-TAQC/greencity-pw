# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: eco-news-details.spec.ts >> Eco News Details Page >> TC-44: Verify Eco News details page content displays correctly
- Location: tests/eco-news-details.spec.ts:5:3

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
                - heading "4757 items found" [level=2] [ref=e81]
                - generic [ref=e83]:
                  - button "table view" [pressed] [ref=e84]:
                    - emphasis [ref=e85]: 
                  - button "list view" [ref=e86] [cursor=pointer]:
                    - emphasis [ref=e87]: 
              - list "news list" [ref=e89]:
                - listitem [ref=e90]:
                  - link "user added image News TestTest edit 1790759671989 TestTest content for the edit news test, TestTest content for the edit news test. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e91] [cursor=pointer]:
                    - /url: "#/greenCity/news/13446"
                    - generic [ref=e93]:
                      - img "user added image" [ref=e94]
                      - generic [ref=e95]:
                        - list [ref=e96]:
                          - generic [ref=e97]: News
                        - generic [ref=e98]:
                          - heading "TestTest edit 1790759671989" [level=3] [ref=e100]
                          - paragraph [ref=e103]: TestTest content for the edit news test, TestTest content for the edit news test.
                        - generic [ref=e104]:
                          - paragraph [ref=e105]:
                            - img "date of creation" [ref=e106]
                            - generic [ref=e107]: Sep 30, 2026
                          - paragraph [ref=e108]:
                            - img "created by" [ref=e109]
                            - generic [ref=e110]: Green
                          - generic [ref=e111]:
                            - paragraph [ref=e112]:
                              - img "comments" [ref=e113]
                              - generic [ref=e114]: "0"
                            - paragraph [ref=e115]:
                              - img "likes" [ref=e116]
                              - generic [ref=e117]: "0"
                - listitem [ref=e120]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790758879112 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e121] [cursor=pointer]:
                    - /url: "#/greenCity/news/13444"
                    - generic [ref=e123]:
                      - img "user added image" [ref=e124]
                      - generic [ref=e125]:
                        - list [ref=e126]:
                          - generic [ref=e127]: News|
                          - generic [ref=e128]: Education|
                          - generic [ref=e129]: Initiatives
                        - generic [ref=e130]:
                          - heading "New environmental initiative launched in Lviv 1790758879112" [level=3] [ref=e132]
                          - paragraph [ref=e135]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e136]:
                          - paragraph [ref=e137]:
                            - img "date of creation" [ref=e138]
                            - generic [ref=e139]: Sep 30, 2026
                          - paragraph [ref=e140]:
                            - img "created by" [ref=e141]
                            - generic [ref=e142]: Володимир
                          - generic [ref=e143]:
                            - paragraph [ref=e144]:
                              - img "comments" [ref=e145]
                              - generic [ref=e146]: "0"
                            - paragraph [ref=e147]:
                              - img "likes" [ref=e148]
                              - generic [ref=e149]: "0"
                - listitem [ref=e152]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790758839959 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e153] [cursor=pointer]:
                    - /url: "#/greenCity/news/13443"
                    - generic [ref=e155]:
                      - img "user added image" [ref=e156]
                      - generic [ref=e157]:
                        - list [ref=e158]:
                          - generic [ref=e159]: News|
                          - generic [ref=e160]: Education|
                          - generic [ref=e161]: Initiatives
                        - generic [ref=e162]:
                          - heading "New environmental initiative launched in Lviv 1790758839959" [level=3] [ref=e164]
                          - paragraph [ref=e167]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e168]:
                          - paragraph [ref=e169]:
                            - img "date of creation" [ref=e170]
                            - generic [ref=e171]: Sep 30, 2026
                          - paragraph [ref=e172]:
                            - img "created by" [ref=e173]
                            - generic [ref=e174]: Володимир
                          - generic [ref=e175]:
                            - paragraph [ref=e176]:
                              - img "comments" [ref=e177]
                              - generic [ref=e178]: "0"
                            - paragraph [ref=e179]:
                              - img "likes" [ref=e180]
                              - generic [ref=e181]: "0"
                - listitem [ref=e184]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790758832516 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e185] [cursor=pointer]:
                    - /url: "#/greenCity/news/13442"
                    - generic [ref=e187]:
                      - img "user added image" [ref=e188]
                      - generic [ref=e189]:
                        - list [ref=e190]:
                          - generic [ref=e191]: News|
                          - generic [ref=e192]: Education|
                          - generic [ref=e193]: Initiatives
                        - generic [ref=e194]:
                          - heading "New environmental initiative launched in Lviv 1790758832516" [level=3] [ref=e196]
                          - paragraph [ref=e199]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e200]:
                          - paragraph [ref=e201]:
                            - img "date of creation" [ref=e202]
                            - generic [ref=e203]: Sep 30, 2026
                          - paragraph [ref=e204]:
                            - img "created by" [ref=e205]
                            - generic [ref=e206]: Володимир
                          - generic [ref=e207]:
                            - paragraph [ref=e208]:
                              - img "comments" [ref=e209]
                              - generic [ref=e210]: "0"
                            - paragraph [ref=e211]:
                              - img "likes" [ref=e212]
                              - generic [ref=e213]: "0"
                - listitem [ref=e216]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790758610432 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e217] [cursor=pointer]:
                    - /url: "#/greenCity/news/13441"
                    - generic [ref=e219]:
                      - img "user added image" [ref=e220]
                      - generic [ref=e221]:
                        - list [ref=e222]:
                          - generic [ref=e223]: News|
                          - generic [ref=e224]: Education|
                          - generic [ref=e225]: Initiatives
                        - generic [ref=e226]:
                          - heading "New environmental initiative launched in Lviv 1790758610432" [level=3] [ref=e228]
                          - paragraph [ref=e231]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e232]:
                          - paragraph [ref=e233]:
                            - img "date of creation" [ref=e234]
                            - generic [ref=e235]: Sep 30, 2026
                          - paragraph [ref=e236]:
                            - img "created by" [ref=e237]
                            - generic [ref=e238]: Володимир
                          - generic [ref=e239]:
                            - paragraph [ref=e240]:
                              - img "comments" [ref=e241]
                              - generic [ref=e242]: "0"
                            - paragraph [ref=e243]:
                              - img "likes" [ref=e244]
                              - generic [ref=e245]: "0"
                - listitem [ref=e248]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790758578736 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e249] [cursor=pointer]:
                    - /url: "#/greenCity/news/13440"
                    - generic [ref=e251]:
                      - img "user added image" [ref=e252]
                      - generic [ref=e253]:
                        - list [ref=e254]:
                          - generic [ref=e255]: News|
                          - generic [ref=e256]: Education|
                          - generic [ref=e257]: Initiatives
                        - generic [ref=e258]:
                          - heading "New environmental initiative launched in Lviv 1790758578736" [level=3] [ref=e260]
                          - paragraph [ref=e263]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e264]:
                          - paragraph [ref=e265]:
                            - img "date of creation" [ref=e266]
                            - generic [ref=e267]: Sep 30, 2026
                          - paragraph [ref=e268]:
                            - img "created by" [ref=e269]
                            - generic [ref=e270]: Володимир
                          - generic [ref=e271]:
                            - paragraph [ref=e272]:
                              - img "comments" [ref=e273]
                              - generic [ref=e274]: "0"
                            - paragraph [ref=e275]:
                              - img "likes" [ref=e276]
                              - generic [ref=e277]: "0"
                - listitem [ref=e280]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790758566404 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e281] [cursor=pointer]:
                    - /url: "#/greenCity/news/13439"
                    - generic [ref=e283]:
                      - img "user added image" [ref=e284]
                      - generic [ref=e285]:
                        - list [ref=e286]:
                          - generic [ref=e287]: News|
                          - generic [ref=e288]: Education|
                          - generic [ref=e289]: Initiatives
                        - generic [ref=e290]:
                          - heading "New environmental initiative launched in Lviv 1790758566404" [level=3] [ref=e292]
                          - paragraph [ref=e295]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e296]:
                          - paragraph [ref=e297]:
                            - img "date of creation" [ref=e298]
                            - generic [ref=e299]: Sep 30, 2026
                          - paragraph [ref=e300]:
                            - img "created by" [ref=e301]
                            - generic [ref=e302]: Володимир
                          - generic [ref=e303]:
                            - paragraph [ref=e304]:
                              - img "comments" [ref=e305]
                              - generic [ref=e306]: "0"
                            - paragraph [ref=e307]:
                              - img "likes" [ref=e308]
                              - generic [ref=e309]: "0"
                - listitem [ref=e312]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790757261850 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e313] [cursor=pointer]:
                    - /url: "#/greenCity/news/13438"
                    - generic [ref=e315]:
                      - img "user added image" [ref=e316]
                      - generic [ref=e317]:
                        - list [ref=e318]:
                          - generic [ref=e319]: News|
                          - generic [ref=e320]: Education|
                          - generic [ref=e321]: Initiatives
                        - generic [ref=e322]:
                          - heading "New environmental initiative launched in Lviv 1790757261850" [level=3] [ref=e324]
                          - paragraph [ref=e327]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e328]:
                          - paragraph [ref=e329]:
                            - img "date of creation" [ref=e330]
                            - generic [ref=e331]: Sep 30, 2026
                          - paragraph [ref=e332]:
                            - img "created by" [ref=e333]
                            - generic [ref=e334]: Володимир
                          - generic [ref=e335]:
                            - paragraph [ref=e336]:
                              - img "comments" [ref=e337]
                              - generic [ref=e338]: "0"
                            - paragraph [ref=e339]:
                              - img "likes" [ref=e340]
                              - generic [ref=e341]: "0"
                - listitem [ref=e344]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790757238853 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e345] [cursor=pointer]:
                    - /url: "#/greenCity/news/13437"
                    - generic [ref=e347]:
                      - img "user added image" [ref=e348]
                      - generic [ref=e349]:
                        - list [ref=e350]:
                          - generic [ref=e351]: News|
                          - generic [ref=e352]: Education|
                          - generic [ref=e353]: Initiatives
                        - generic [ref=e354]:
                          - heading "New environmental initiative launched in Lviv 1790757238853" [level=3] [ref=e356]
                          - paragraph [ref=e359]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e360]:
                          - paragraph [ref=e361]:
                            - img "date of creation" [ref=e362]
                            - generic [ref=e363]: Sep 30, 2026
                          - paragraph [ref=e364]:
                            - img "created by" [ref=e365]
                            - generic [ref=e366]: Володимир
                          - generic [ref=e367]:
                            - paragraph [ref=e368]:
                              - img "comments" [ref=e369]
                              - generic [ref=e370]: "0"
                            - paragraph [ref=e371]:
                              - img "likes" [ref=e372]
                              - generic [ref=e373]: "0"
                - listitem [ref=e376]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790757232445 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e377] [cursor=pointer]:
                    - /url: "#/greenCity/news/13436"
                    - generic [ref=e379]:
                      - img "user added image" [ref=e380]
                      - generic [ref=e381]:
                        - list [ref=e382]:
                          - generic [ref=e383]: News|
                          - generic [ref=e384]: Education|
                          - generic [ref=e385]: Initiatives
                        - generic [ref=e386]:
                          - heading "New environmental initiative launched in Lviv 1790757232445" [level=3] [ref=e388]
                          - paragraph [ref=e391]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e392]:
                          - paragraph [ref=e393]:
                            - img "date of creation" [ref=e394]
                            - generic [ref=e395]: Sep 30, 2026
                          - paragraph [ref=e396]:
                            - img "created by" [ref=e397]
                            - generic [ref=e398]: Володимир
                          - generic [ref=e399]:
                            - paragraph [ref=e400]:
                              - img "comments" [ref=e401]
                              - generic [ref=e402]: "0"
                            - paragraph [ref=e403]:
                              - img "likes" [ref=e404]
                              - generic [ref=e405]: "0"
                - listitem [ref=e408]:
                  - link "user added image News| Education| Initiatives Updated Eco News Title Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e409] [cursor=pointer]:
                    - /url: "#/greenCity/news/13435"
                    - generic [ref=e411]:
                      - img "user added image" [ref=e412]
                      - generic [ref=e413]:
                        - list [ref=e414]:
                          - generic [ref=e415]: News|
                          - generic [ref=e416]: Education|
                          - generic [ref=e417]: Initiatives
                        - generic [ref=e418]:
                          - heading "Updated Eco News Title" [level=3] [ref=e420]
                          - paragraph [ref=e423]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e424]:
                          - paragraph [ref=e425]:
                            - img "date of creation" [ref=e426]
                            - generic [ref=e427]: Sep 30, 2026
                          - paragraph [ref=e428]:
                            - img "created by" [ref=e429]
                            - generic [ref=e430]: Володимир
                          - generic [ref=e431]:
                            - paragraph [ref=e432]:
                              - img "comments" [ref=e433]
                              - generic [ref=e434]: "0"
                            - paragraph [ref=e435]:
                              - img "likes" [ref=e436]
                              - generic [ref=e437]: "0"
                - listitem [ref=e440]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790755843051 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e441] [cursor=pointer]:
                    - /url: "#/greenCity/news/13434"
                    - generic [ref=e443]:
                      - img "user added image" [ref=e444]
                      - generic [ref=e445]:
                        - list [ref=e446]:
                          - generic [ref=e447]: News|
                          - generic [ref=e448]: Education|
                          - generic [ref=e449]: Initiatives
                        - generic [ref=e450]:
                          - heading "New environmental initiative launched in Lviv 1790755843051" [level=3] [ref=e452]
                          - paragraph [ref=e455]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e456]:
                          - paragraph [ref=e457]:
                            - img "date of creation" [ref=e458]
                            - generic [ref=e459]: Sep 30, 2026
                          - paragraph [ref=e460]:
                            - img "created by" [ref=e461]
                            - generic [ref=e462]: Володимир
                          - generic [ref=e463]:
                            - paragraph [ref=e464]:
                              - img "comments" [ref=e465]
                              - generic [ref=e466]: "0"
                            - paragraph [ref=e467]:
                              - img "likes" [ref=e468]
                              - generic [ref=e469]: "0"
              - progressbar [ref=e473]
          - contentinfo [ref=e489]:
            - generic [ref=e490]:
              - generic [ref=e491]:
                - link [ref=e493] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e494]
                - navigation [ref=e495]:
                  - menu [ref=e496]:
                    - listitem [ref=e497]:
                      - link "Eco news" [ref=e498] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e499]:
                      - link "Events" [ref=e500] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e501]:
                      - link "Places" [ref=e502] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e503]:
                      - link "About Us" [ref=e504] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e505]:
                      - link "My Space" [ref=e506] [cursor=pointer]:
                        - /url: "#/greenCity/profile/not_signed-in"
                    - listitem [ref=e507]:
                      - link "UBS Courier" [ref=e508] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e509]:
                    - listitem [ref=e510]:
                      - paragraph [ref=e511]: Follow us
                    - listitem [ref=e512]:
                      - link [ref=e513] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e514]
                      - link [ref=e515] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e516]
                      - link [ref=e517] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e518]
                      - link [ref=e519] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e520]
                      - link [ref=e521] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e522]
              - generic [ref=e523]: © Copyright 2026. Green City.
    - button [ref=e524] [cursor=pointer]:
      - img "chat" [ref=e525]
  - generic [ref=e526]: Welcome to the search window
```

# Test source

```ts
  1   | import { test, type Page, type Locator } from '@playwright/test';
  2   | import BasePage from '@/pages/base-page';
  3   | import { EcoNewsTableCardComponent } from '@/components';
  4   | 
  5   | export class EcoNewsPage extends BasePage {
  6   |   public readonly tableViewButton: Locator;
  7   |   public readonly listViewButton: Locator;
  8   |   public readonly newsList: Locator;
  9   |   public readonly galleryViewCards: Locator;
  10  |   public readonly listViewCards: Locator;
  11  |   private readonly newsCards: Locator;
  12  |   private readonly favouritesToggle: Locator;
  13  |   private readonly createNewsButton: Locator;
  14  |   private readonly tagFilterButtons: Locator;
  15  | 
  16  |   constructor(page: Page) {
  17  |     super(page);
  18  |     this.tableViewButton = page.getByRole('button', { name: 'table view' });
  19  |     this.listViewButton = page.getByRole('button', { name: 'list view' });
  20  |     this.newsList = page.locator('ul[aria-label="news list"]');
  21  |     this.galleryViewCards = page.locator('li.gallery-view-li-active');
  22  |     this.listViewCards = page.locator('li.list-view-li-active');
  23  |     this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
  24  |     this.favouritesToggle = page
  25  |       .locator('.create-container .container-img')
  26  |       .filter({ has: page.locator('.bookmark-img') });
  27  |     this.createNewsButton = page.locator('#create-button, a[href*="create-news"]');
  28  |     this.tagFilterButtons = page.locator(
  29  |       '.custom-chip, ul.ul-eco-buttons button, button.tag-button'
  30  |     );
  31  |   }
  32  | 
  33  |   async navigateToEcoNewsPage(): Promise<void> {
  34  |     await test.step('EcoNews: navigate to Eco News page', async () => {
  35  |       await this.navigateTo('/#/greenCity/news');
  36  |     });
  37  |   }
  38  | 
  39  |   async waitForEcoNewsPage(): Promise<void> {
  40  |     await test.step('EcoNews: wait for Eco News page to load', async () => {
  41  |       await this.waitForPageLoad();
> 42  |       await this.createNewsButton.first().waitFor({ state: 'visible' });
      |                                           ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  43  |     });
  44  |   }
  45  | 
  46  |   async clickCreateNews(): Promise<void> {
  47  |     await test.step('EcoNews: click Create news button', async () => {
  48  |       await this.createNewsButton.first().click();
  49  |     });
  50  |   }
  51  | 
  52  |   async clickListView(): Promise<void> {
  53  |     await test.step('EcoNews: switch Eco News display mode to list view', async () => {
  54  |       await this.listViewButton.click();
  55  |     });
  56  |   }
  57  | 
  58  |   async clickTableView(): Promise<void> {
  59  |     await test.step('EcoNews: switch Eco News display mode to table view', async () => {
  60  |       await this.tableViewButton.click();
  61  |     });
  62  |   }
  63  | 
  64  |   async getNewsCardsCount(): Promise<number> {
  65  |     return await test.step('EcoNews: get news cards count', async () => {
  66  |       return await this.newsCards.count();
  67  |     });
  68  |   }
  69  | 
  70  |   getNewsCardLocator(index: number): Locator {
  71  |     return this.newsCards.nth(index);
  72  |   }
  73  | 
  74  |   async getFirstNewsCardTitle(): Promise<string> {
  75  |     return await test.step('EcoNews: get first news card title', async () => {
  76  |       const titleElem = this.page
  77  |         .locator('.eco-news_list-content-title h3, .title-list h3, h3')
  78  |         .first();
  79  |       await titleElem.waitFor({ state: 'visible' });
  80  |       return (await titleElem.innerText()).trim();
  81  |     });
  82  |   }
  83  | 
  84  |   async filterByTag(tagName: string): Promise<void> {
  85  |     await test.step(`EcoNews: filter by tag "${tagName}"`, async () => {
  86  |       const tagBtn = this.tagFilterButtons.filter({ hasText: tagName }).first();
  87  |       await tagBtn.click();
  88  |     });
  89  |   }
  90  | 
  91  |   getNewsCard(index: number): EcoNewsTableCardComponent {
  92  |     return new EcoNewsTableCardComponent(this.newsCards.nth(index), this.page);
  93  |   }
  94  | 
  95  |   getNewsCardByTitle(title: string): EcoNewsTableCardComponent {
  96  |     const card = this.newsCards.filter({
  97  |       has: this.page.getByRole('heading', { name: title, exact: true }),
  98  |     });
  99  |     return new EcoNewsTableCardComponent(card, this.page);
  100 |   }
  101 | 
  102 |   async openFavourites(): Promise<void> {
  103 |     await this.favouritesToggle.click();
  104 |   }
  105 | 
  106 |   getNewsCardByHref(href: string): EcoNewsTableCardComponent {
  107 |     const card = this.newsCards.filter({
  108 |       has: this.page.locator(`a.link[href="${href}"]`),
  109 |     });
  110 |     return new EcoNewsTableCardComponent(card, this.page);
  111 |   }
  112 | }
  113 | export default EcoNewsPage;
  114 | 
```