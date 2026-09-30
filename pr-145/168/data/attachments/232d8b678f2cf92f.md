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
                - heading "4741 items found" [level=2] [ref=e81]
                - generic [ref=e83]:
                  - button "table view" [pressed] [ref=e84]:
                    - emphasis [ref=e85]: 
                  - button "list view" [ref=e86] [cursor=pointer]:
                    - emphasis [ref=e87]: 
              - list "news list" [ref=e89]:
                - listitem [ref=e90]:
                  - link "user added image News TestTest edit 1790752471825 TestTest content for the edit news test, TestTest content for the edit news test. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e91] [cursor=pointer]:
                    - /url: "#/greenCity/news/13420"
                    - generic [ref=e93]:
                      - img "user added image" [ref=e94]
                      - generic [ref=e95]:
                        - list [ref=e96]:
                          - generic [ref=e97]: News
                        - generic [ref=e98]:
                          - heading "TestTest edit 1790752471825" [level=3] [ref=e100]
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
                  - link "user added image News TestTest edit 1790752405582 TestTest content for the edit news test, TestTest content for the edit news test. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e121] [cursor=pointer]:
                    - /url: "#/greenCity/news/13419"
                    - generic [ref=e123]:
                      - img "user added image" [ref=e124]
                      - generic [ref=e125]:
                        - list [ref=e126]:
                          - generic [ref=e127]: News
                        - generic [ref=e128]:
                          - heading "TestTest edit 1790752405582" [level=3] [ref=e130]
                          - paragraph [ref=e133]: TestTest content for the edit news test, TestTest content for the edit news test.
                        - generic [ref=e134]:
                          - paragraph [ref=e135]:
                            - img "date of creation" [ref=e136]
                            - generic [ref=e137]: Sep 30, 2026
                          - paragraph [ref=e138]:
                            - img "created by" [ref=e139]
                            - generic [ref=e140]: Green
                          - generic [ref=e141]:
                            - paragraph [ref=e142]:
                              - img "comments" [ref=e143]
                              - generic [ref=e144]: "0"
                            - paragraph [ref=e145]:
                              - img "likes" [ref=e146]
                              - generic [ref=e147]: "0"
                - listitem [ref=e150]:
                  - link "user added image News Empty title validation 1731098223373708 A news article created for the empty title validation test. Its title must stay unchanged. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e151] [cursor=pointer]:
                    - /url: "#/greenCity/news/13416"
                    - generic [ref=e153]:
                      - img "user added image" [ref=e154]
                      - generic [ref=e155]:
                        - list [ref=e156]:
                          - generic [ref=e157]: News
                        - generic [ref=e158]:
                          - heading "Empty title validation 1731098223373708" [level=3] [ref=e160]
                          - paragraph [ref=e163]: A news article created for the empty title validation test. Its title must stay unchanged.
                        - generic [ref=e164]:
                          - paragraph [ref=e165]:
                            - img "date of creation" [ref=e166]
                            - generic [ref=e167]: Sep 30, 2026
                          - paragraph [ref=e168]:
                            - img "created by" [ref=e169]
                            - generic [ref=e170]: Green
                          - generic [ref=e171]:
                            - paragraph [ref=e172]:
                              - img "comments" [ref=e173]
                              - generic [ref=e174]: "0"
                            - paragraph [ref=e175]:
                              - img "likes" [ref=e176]
                              - generic [ref=e177]: "0"
                - listitem [ref=e180]:
                  - link "user added image News Empty title validation 1730975748768625 A news article created for the empty title validation test. Its title must stay unchanged. date of creation Sep 30, 2026 created by Green comments 0 likes 0" [ref=e181] [cursor=pointer]:
                    - /url: "#/greenCity/news/13415"
                    - generic [ref=e183]:
                      - img "user added image" [ref=e184]
                      - generic [ref=e185]:
                        - list [ref=e186]:
                          - generic [ref=e187]: News
                        - generic [ref=e188]:
                          - heading "Empty title validation 1730975748768625" [level=3] [ref=e190]
                          - paragraph [ref=e193]: A news article created for the empty title validation test. Its title must stay unchanged.
                        - generic [ref=e194]:
                          - paragraph [ref=e195]:
                            - img "date of creation" [ref=e196]
                            - generic [ref=e197]: Sep 30, 2026
                          - paragraph [ref=e198]:
                            - img "created by" [ref=e199]
                            - generic [ref=e200]: Green
                          - generic [ref=e201]:
                            - paragraph [ref=e202]:
                              - img "comments" [ref=e203]
                              - generic [ref=e204]: "0"
                            - paragraph [ref=e205]:
                              - img "likes" [ref=e206]
                              - generic [ref=e207]: "0"
                - listitem [ref=e210]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790742473780 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e211] [cursor=pointer]:
                    - /url: "#/greenCity/news/13414"
                    - generic [ref=e213]:
                      - img "user added image" [ref=e214]
                      - generic [ref=e215]:
                        - list [ref=e216]:
                          - generic [ref=e217]: News|
                          - generic [ref=e218]: Education|
                          - generic [ref=e219]: Initiatives
                        - generic [ref=e220]:
                          - heading "New environmental initiative launched in Lviv 1790742473780" [level=3] [ref=e222]
                          - paragraph [ref=e225]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e226]:
                          - paragraph [ref=e227]:
                            - img "date of creation" [ref=e228]
                            - generic [ref=e229]: Sep 30, 2026
                          - paragraph [ref=e230]:
                            - img "created by" [ref=e231]
                            - generic [ref=e232]: Володимир
                          - generic [ref=e233]:
                            - paragraph [ref=e234]:
                              - img "comments" [ref=e235]
                              - generic [ref=e236]: "0"
                            - paragraph [ref=e237]:
                              - img "likes" [ref=e238]
                              - generic [ref=e239]: "0"
                - listitem [ref=e242]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790742464449 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e243] [cursor=pointer]:
                    - /url: "#/greenCity/news/13413"
                    - generic [ref=e245]:
                      - img "user added image" [ref=e246]
                      - generic [ref=e247]:
                        - list [ref=e248]:
                          - generic [ref=e249]: News|
                          - generic [ref=e250]: Education|
                          - generic [ref=e251]: Initiatives
                        - generic [ref=e252]:
                          - heading "New environmental initiative launched in Lviv 1790742464449" [level=3] [ref=e254]
                          - paragraph [ref=e257]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e258]:
                          - paragraph [ref=e259]:
                            - img "date of creation" [ref=e260]
                            - generic [ref=e261]: Sep 30, 2026
                          - paragraph [ref=e262]:
                            - img "created by" [ref=e263]
                            - generic [ref=e264]: Володимир
                          - generic [ref=e265]:
                            - paragraph [ref=e266]:
                              - img "comments" [ref=e267]
                              - generic [ref=e268]: "0"
                            - paragraph [ref=e269]:
                              - img "likes" [ref=e270]
                              - generic [ref=e271]: "0"
                - listitem [ref=e274]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790742459129 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e275] [cursor=pointer]:
                    - /url: "#/greenCity/news/13412"
                    - generic [ref=e277]:
                      - img "user added image" [ref=e278]
                      - generic [ref=e279]:
                        - list [ref=e280]:
                          - generic [ref=e281]: News|
                          - generic [ref=e282]: Education|
                          - generic [ref=e283]: Initiatives
                        - generic [ref=e284]:
                          - heading "New environmental initiative launched in Lviv 1790742459129" [level=3] [ref=e286]
                          - paragraph [ref=e289]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e290]:
                          - paragraph [ref=e291]:
                            - img "date of creation" [ref=e292]
                            - generic [ref=e293]: Sep 30, 2026
                          - paragraph [ref=e294]:
                            - img "created by" [ref=e295]
                            - generic [ref=e296]: Володимир
                          - generic [ref=e297]:
                            - paragraph [ref=e298]:
                              - img "comments" [ref=e299]
                              - generic [ref=e300]: "0"
                            - paragraph [ref=e301]:
                              - img "likes" [ref=e302]
                              - generic [ref=e303]: "0"
                - listitem [ref=e306]:
                  - link "user added image News Empty title validation 1728369389442500 A news article created for the empty title validation test. Its title must stay unchanged. date of creation Sep 29, 2026 created by Green comments 0 likes 0" [ref=e307] [cursor=pointer]:
                    - /url: "#/greenCity/news/13409"
                    - generic [ref=e309]:
                      - img "user added image" [ref=e310]
                      - generic [ref=e311]:
                        - list [ref=e312]:
                          - generic [ref=e313]: News
                        - generic [ref=e314]:
                          - heading "Empty title validation 1728369389442500" [level=3] [ref=e316]
                          - paragraph [ref=e319]: A news article created for the empty title validation test. Its title must stay unchanged.
                        - generic [ref=e320]:
                          - paragraph [ref=e321]:
                            - img "date of creation" [ref=e322]
                            - generic [ref=e323]: Sep 29, 2026
                          - paragraph [ref=e324]:
                            - img "created by" [ref=e325]
                            - generic [ref=e326]: Green
                          - generic [ref=e327]:
                            - paragraph [ref=e328]:
                              - img "comments" [ref=e329]
                              - generic [ref=e330]: "0"
                            - paragraph [ref=e331]:
                              - img "likes" [ref=e332]
                              - generic [ref=e333]: "0"
                - listitem [ref=e336]:
                  - link "user added image News Empty title validation 1726940346456916 A news article created for the empty title validation test. Its title must stay unchanged. date of creation Sep 29, 2026 created by Green comments 0 likes 0" [ref=e337] [cursor=pointer]:
                    - /url: "#/greenCity/news/13404"
                    - generic [ref=e339]:
                      - img "user added image" [ref=e340]
                      - generic [ref=e341]:
                        - list [ref=e342]:
                          - generic [ref=e343]: News
                        - generic [ref=e344]:
                          - heading "Empty title validation 1726940346456916" [level=3] [ref=e346]
                          - paragraph [ref=e349]: A news article created for the empty title validation test. Its title must stay unchanged.
                        - generic [ref=e350]:
                          - paragraph [ref=e351]:
                            - img "date of creation" [ref=e352]
                            - generic [ref=e353]: Sep 29, 2026
                          - paragraph [ref=e354]:
                            - img "created by" [ref=e355]
                            - generic [ref=e356]: Green
                          - generic [ref=e357]:
                            - paragraph [ref=e358]:
                              - img "comments" [ref=e359]
                              - generic [ref=e360]: "0"
                            - paragraph [ref=e361]:
                              - img "likes" [ref=e362]
                              - generic [ref=e363]: "0"
                - listitem [ref=e366]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790712721338 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 29, 2026 created by Володимир comments 0 likes 0" [ref=e367] [cursor=pointer]:
                    - /url: "#/greenCity/news/13396"
                    - generic [ref=e369]:
                      - img "user added image" [ref=e370]
                      - generic [ref=e371]:
                        - list [ref=e372]:
                          - generic [ref=e373]: News|
                          - generic [ref=e374]: Education|
                          - generic [ref=e375]: Initiatives
                        - generic [ref=e376]:
                          - heading "New environmental initiative launched in Lviv 1790712721338" [level=3] [ref=e378]
                          - paragraph [ref=e381]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e382]:
                          - paragraph [ref=e383]:
                            - img "date of creation" [ref=e384]
                            - generic [ref=e385]: Sep 29, 2026
                          - paragraph [ref=e386]:
                            - img "created by" [ref=e387]
                            - generic [ref=e388]: Володимир
                          - generic [ref=e389]:
                            - paragraph [ref=e390]:
                              - img "comments" [ref=e391]
                              - generic [ref=e392]: "0"
                            - paragraph [ref=e393]:
                              - img "likes" [ref=e394]
                              - generic [ref=e395]: "0"
                - listitem [ref=e398]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790712716267 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 29, 2026 created by Володимир comments 0 likes 0" [ref=e399] [cursor=pointer]:
                    - /url: "#/greenCity/news/13395"
                    - generic [ref=e401]:
                      - img "user added image" [ref=e402]
                      - generic [ref=e403]:
                        - list [ref=e404]:
                          - generic [ref=e405]: News|
                          - generic [ref=e406]: Education|
                          - generic [ref=e407]: Initiatives
                        - generic [ref=e408]:
                          - heading "New environmental initiative launched in Lviv 1790712716267" [level=3] [ref=e410]
                          - paragraph [ref=e413]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e414]:
                          - paragraph [ref=e415]:
                            - img "date of creation" [ref=e416]
                            - generic [ref=e417]: Sep 29, 2026
                          - paragraph [ref=e418]:
                            - img "created by" [ref=e419]
                            - generic [ref=e420]: Володимир
                          - generic [ref=e421]:
                            - paragraph [ref=e422]:
                              - img "comments" [ref=e423]
                              - generic [ref=e424]: "0"
                            - paragraph [ref=e425]:
                              - img "likes" [ref=e426]
                              - generic [ref=e427]: "0"
                - listitem [ref=e430]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790712705151 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 29, 2026 created by Володимир comments 0 likes 0" [ref=e431] [cursor=pointer]:
                    - /url: "#/greenCity/news/13394"
                    - generic [ref=e433]:
                      - img "user added image" [ref=e434]
                      - generic [ref=e435]:
                        - list [ref=e436]:
                          - generic [ref=e437]: News|
                          - generic [ref=e438]: Education|
                          - generic [ref=e439]: Initiatives
                        - generic [ref=e440]:
                          - heading "New environmental initiative launched in Lviv 1790712705151" [level=3] [ref=e442]
                          - paragraph [ref=e445]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e446]:
                          - paragraph [ref=e447]:
                            - img "date of creation" [ref=e448]
                            - generic [ref=e449]: Sep 29, 2026
                          - paragraph [ref=e450]:
                            - img "created by" [ref=e451]
                            - generic [ref=e452]: Володимир
                          - generic [ref=e453]:
                            - paragraph [ref=e454]:
                              - img "comments" [ref=e455]
                              - generic [ref=e456]: "0"
                            - paragraph [ref=e457]:
                              - img "likes" [ref=e458]
                              - generic [ref=e459]: "0"
              - progressbar [ref=e463]
          - contentinfo [ref=e479]:
            - generic [ref=e480]:
              - generic [ref=e481]:
                - link [ref=e483] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e484]
                - navigation [ref=e485]:
                  - menu [ref=e486]:
                    - listitem [ref=e487]:
                      - link "Eco news" [ref=e488] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e489]:
                      - link "Events" [ref=e490] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e491]:
                      - link "Places" [ref=e492] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e493]:
                      - link "About Us" [ref=e494] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e495]:
                      - link "My Space" [ref=e496] [cursor=pointer]:
                        - /url: "#/greenCity/profile/not_signed-in"
                    - listitem [ref=e497]:
                      - link "UBS Courier" [ref=e498] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e499]:
                    - listitem [ref=e500]:
                      - paragraph [ref=e501]: Follow us
                    - listitem [ref=e502]:
                      - link [ref=e503] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e504]
                      - link [ref=e505] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e506]
                      - link [ref=e507] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e508]
                      - link [ref=e509] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e510]
                      - link [ref=e511] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e512]
              - generic [ref=e513]: © Copyright 2026. Green City.
    - button [ref=e514] [cursor=pointer]:
      - img "chat" [ref=e515]
  - generic [ref=e516]: Welcome to the search window
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