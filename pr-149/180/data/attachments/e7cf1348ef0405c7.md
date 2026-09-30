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
                - heading "4772 items found" [level=2] [ref=e81]
                - generic [ref=e83]:
                  - button "table view" [pressed] [ref=e84]:
                    - emphasis [ref=e85]: 
                  - button "list view" [ref=e86] [cursor=pointer]:
                    - emphasis [ref=e87]: 
              - list "news list" [ref=e89]:
                - listitem [ref=e90]:
                  - link "user added image News| Events News delete Testing delete news date of creation Sep 30, 2026 created by ViraTest comments 0 likes 0" [ref=e91] [cursor=pointer]:
                    - /url: "#/greenCity/news/13469"
                    - generic [ref=e93]:
                      - img "user added image" [ref=e94]
                      - generic [ref=e95]:
                        - list [ref=e96]:
                          - generic [ref=e97]: News|
                          - generic [ref=e98]: Events
                        - generic [ref=e99]:
                          - heading "News delete" [level=3] [ref=e101]
                          - paragraph [ref=e104]: Testing delete news
                        - generic [ref=e105]:
                          - paragraph [ref=e106]:
                            - img "date of creation" [ref=e107]
                            - generic [ref=e108]: Sep 30, 2026
                          - paragraph [ref=e109]:
                            - img "created by" [ref=e110]
                            - generic [ref=e111]: ViraTest
                          - generic [ref=e112]:
                            - paragraph [ref=e113]:
                              - img "comments" [ref=e114]
                              - generic [ref=e115]: "0"
                            - paragraph [ref=e116]:
                              - img "likes" [ref=e117]
                              - generic [ref=e118]: "0"
                - listitem [ref=e121]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790764015601 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e122] [cursor=pointer]:
                    - /url: "#/greenCity/news/13468"
                    - generic [ref=e124]:
                      - img "user added image" [ref=e125]
                      - generic [ref=e126]:
                        - list [ref=e127]:
                          - generic [ref=e128]: News|
                          - generic [ref=e129]: Education|
                          - generic [ref=e130]: Initiatives
                        - generic [ref=e131]:
                          - heading "New environmental initiative launched in Lviv 1790764015601" [level=3] [ref=e133]
                          - paragraph [ref=e136]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e137]:
                          - paragraph [ref=e138]:
                            - img "date of creation" [ref=e139]
                            - generic [ref=e140]: Sep 30, 2026
                          - paragraph [ref=e141]:
                            - img "created by" [ref=e142]
                            - generic [ref=e143]: Володимир
                          - generic [ref=e144]:
                            - paragraph [ref=e145]:
                              - img "comments" [ref=e146]
                              - generic [ref=e147]: "0"
                            - paragraph [ref=e148]:
                              - img "likes" [ref=e149]
                              - generic [ref=e150]: "0"
                - listitem [ref=e153]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790764003322 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e154] [cursor=pointer]:
                    - /url: "#/greenCity/news/13467"
                    - generic [ref=e156]:
                      - img "user added image" [ref=e157]
                      - generic [ref=e158]:
                        - list [ref=e159]:
                          - generic [ref=e160]: News|
                          - generic [ref=e161]: Education|
                          - generic [ref=e162]: Initiatives
                        - generic [ref=e163]:
                          - heading "New environmental initiative launched in Lviv 1790764003322" [level=3] [ref=e165]
                          - paragraph [ref=e168]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e169]:
                          - paragraph [ref=e170]:
                            - img "date of creation" [ref=e171]
                            - generic [ref=e172]: Sep 30, 2026
                          - paragraph [ref=e173]:
                            - img "created by" [ref=e174]
                            - generic [ref=e175]: Володимир
                          - generic [ref=e176]:
                            - paragraph [ref=e177]:
                              - img "comments" [ref=e178]
                              - generic [ref=e179]: "0"
                            - paragraph [ref=e180]:
                              - img "likes" [ref=e181]
                              - generic [ref=e182]: "0"
                - listitem [ref=e185]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790763990358 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e186] [cursor=pointer]:
                    - /url: "#/greenCity/news/13466"
                    - generic [ref=e188]:
                      - img "user added image" [ref=e189]
                      - generic [ref=e190]:
                        - list [ref=e191]:
                          - generic [ref=e192]: News|
                          - generic [ref=e193]: Education|
                          - generic [ref=e194]: Initiatives
                        - generic [ref=e195]:
                          - heading "New environmental initiative launched in Lviv 1790763990358" [level=3] [ref=e197]
                          - paragraph [ref=e200]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e201]:
                          - paragraph [ref=e202]:
                            - img "date of creation" [ref=e203]
                            - generic [ref=e204]: Sep 30, 2026
                          - paragraph [ref=e205]:
                            - img "created by" [ref=e206]
                            - generic [ref=e207]: Володимир
                          - generic [ref=e208]:
                            - paragraph [ref=e209]:
                              - img "comments" [ref=e210]
                              - generic [ref=e211]: "0"
                            - paragraph [ref=e212]:
                              - img "likes" [ref=e213]
                              - generic [ref=e214]: "0"
                - listitem [ref=e217]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790763539909 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e218] [cursor=pointer]:
                    - /url: "#/greenCity/news/13465"
                    - generic [ref=e220]:
                      - img "user added image" [ref=e221]
                      - generic [ref=e222]:
                        - list [ref=e223]:
                          - generic [ref=e224]: News|
                          - generic [ref=e225]: Education|
                          - generic [ref=e226]: Initiatives
                        - generic [ref=e227]:
                          - heading "New environmental initiative launched in Lviv 1790763539909" [level=3] [ref=e229]
                          - paragraph [ref=e232]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e233]:
                          - paragraph [ref=e234]:
                            - img "date of creation" [ref=e235]
                            - generic [ref=e236]: Sep 30, 2026
                          - paragraph [ref=e237]:
                            - img "created by" [ref=e238]
                            - generic [ref=e239]: Володимир
                          - generic [ref=e240]:
                            - paragraph [ref=e241]:
                              - img "comments" [ref=e242]
                              - generic [ref=e243]: "0"
                            - paragraph [ref=e244]:
                              - img "likes" [ref=e245]
                              - generic [ref=e246]: "0"
                - listitem [ref=e249]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790763539655 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e250] [cursor=pointer]:
                    - /url: "#/greenCity/news/13464"
                    - generic [ref=e252]:
                      - img "user added image" [ref=e253]
                      - generic [ref=e254]:
                        - list [ref=e255]:
                          - generic [ref=e256]: News|
                          - generic [ref=e257]: Education|
                          - generic [ref=e258]: Initiatives
                        - generic [ref=e259]:
                          - heading "New environmental initiative launched in Lviv 1790763539655" [level=3] [ref=e261]
                          - paragraph [ref=e264]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e265]:
                          - paragraph [ref=e266]:
                            - img "date of creation" [ref=e267]
                            - generic [ref=e268]: Sep 30, 2026
                          - paragraph [ref=e269]:
                            - img "created by" [ref=e270]
                            - generic [ref=e271]: Володимир
                          - generic [ref=e272]:
                            - paragraph [ref=e273]:
                              - img "comments" [ref=e274]
                              - generic [ref=e275]: "0"
                            - paragraph [ref=e276]:
                              - img "likes" [ref=e277]
                              - generic [ref=e278]: "0"
                - listitem [ref=e281]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790763533626 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e282] [cursor=pointer]:
                    - /url: "#/greenCity/news/13463"
                    - generic [ref=e284]:
                      - img "user added image" [ref=e285]
                      - generic [ref=e286]:
                        - list [ref=e287]:
                          - generic [ref=e288]: News|
                          - generic [ref=e289]: Education|
                          - generic [ref=e290]: Initiatives
                        - generic [ref=e291]:
                          - heading "New environmental initiative launched in Lviv 1790763533626" [level=3] [ref=e293]
                          - paragraph [ref=e296]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e297]:
                          - paragraph [ref=e298]:
                            - img "date of creation" [ref=e299]
                            - generic [ref=e300]: Sep 30, 2026
                          - paragraph [ref=e301]:
                            - img "created by" [ref=e302]
                            - generic [ref=e303]: Володимир
                          - generic [ref=e304]:
                            - paragraph [ref=e305]:
                              - img "comments" [ref=e306]
                              - generic [ref=e307]: "0"
                            - paragraph [ref=e308]:
                              - img "likes" [ref=e309]
                              - generic [ref=e310]: "0"
                - listitem [ref=e313]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790762983334 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e314] [cursor=pointer]:
                    - /url: "#/greenCity/news/13462"
                    - generic [ref=e316]:
                      - img "user added image" [ref=e317]
                      - generic [ref=e318]:
                        - list [ref=e319]:
                          - generic [ref=e320]: News|
                          - generic [ref=e321]: Education|
                          - generic [ref=e322]: Initiatives
                        - generic [ref=e323]:
                          - heading "New environmental initiative launched in Lviv 1790762983334" [level=3] [ref=e325]
                          - paragraph [ref=e328]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e329]:
                          - paragraph [ref=e330]:
                            - img "date of creation" [ref=e331]
                            - generic [ref=e332]: Sep 30, 2026
                          - paragraph [ref=e333]:
                            - img "created by" [ref=e334]
                            - generic [ref=e335]: Володимир
                          - generic [ref=e336]:
                            - paragraph [ref=e337]:
                              - img "comments" [ref=e338]
                              - generic [ref=e339]: "0"
                            - paragraph [ref=e340]:
                              - img "likes" [ref=e341]
                              - generic [ref=e342]: "0"
                - listitem [ref=e345]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790762960960 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e346] [cursor=pointer]:
                    - /url: "#/greenCity/news/13461"
                    - generic [ref=e348]:
                      - img "user added image" [ref=e349]
                      - generic [ref=e350]:
                        - list [ref=e351]:
                          - generic [ref=e352]: News|
                          - generic [ref=e353]: Education|
                          - generic [ref=e354]: Initiatives
                        - generic [ref=e355]:
                          - heading "New environmental initiative launched in Lviv 1790762960960" [level=3] [ref=e357]
                          - paragraph [ref=e360]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e361]:
                          - paragraph [ref=e362]:
                            - img "date of creation" [ref=e363]
                            - generic [ref=e364]: Sep 30, 2026
                          - paragraph [ref=e365]:
                            - img "created by" [ref=e366]
                            - generic [ref=e367]: Володимир
                          - generic [ref=e368]:
                            - paragraph [ref=e369]:
                              - img "comments" [ref=e370]
                              - generic [ref=e371]: "0"
                            - paragraph [ref=e372]:
                              - img "likes" [ref=e373]
                              - generic [ref=e374]: "0"
                - listitem [ref=e377]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790762953240 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e378] [cursor=pointer]:
                    - /url: "#/greenCity/news/13460"
                    - generic [ref=e380]:
                      - img "user added image" [ref=e381]
                      - generic [ref=e382]:
                        - list [ref=e383]:
                          - generic [ref=e384]: News|
                          - generic [ref=e385]: Education|
                          - generic [ref=e386]: Initiatives
                        - generic [ref=e387]:
                          - heading "New environmental initiative launched in Lviv 1790762953240" [level=3] [ref=e389]
                          - paragraph [ref=e392]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e393]:
                          - paragraph [ref=e394]:
                            - img "date of creation" [ref=e395]
                            - generic [ref=e396]: Sep 30, 2026
                          - paragraph [ref=e397]:
                            - img "created by" [ref=e398]
                            - generic [ref=e399]: Володимир
                          - generic [ref=e400]:
                            - paragraph [ref=e401]:
                              - img "comments" [ref=e402]
                              - generic [ref=e403]: "0"
                            - paragraph [ref=e404]:
                              - img "likes" [ref=e405]
                              - generic [ref=e406]: "0"
                - listitem [ref=e409]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790760095025 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e410] [cursor=pointer]:
                    - /url: "#/greenCity/news/13454"
                    - generic [ref=e412]:
                      - img "user added image" [ref=e413]
                      - generic [ref=e414]:
                        - list [ref=e415]:
                          - generic [ref=e416]: News|
                          - generic [ref=e417]: Education|
                          - generic [ref=e418]: Initiatives
                        - generic [ref=e419]:
                          - heading "New environmental initiative launched in Lviv 1790760095025" [level=3] [ref=e421]
                          - paragraph [ref=e424]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e425]:
                          - paragraph [ref=e426]:
                            - img "date of creation" [ref=e427]
                            - generic [ref=e428]: Sep 30, 2026
                          - paragraph [ref=e429]:
                            - img "created by" [ref=e430]
                            - generic [ref=e431]: Володимир
                          - generic [ref=e432]:
                            - paragraph [ref=e433]:
                              - img "comments" [ref=e434]
                              - generic [ref=e435]: "0"
                            - paragraph [ref=e436]:
                              - img "likes" [ref=e437]
                              - generic [ref=e438]: "0"
                - listitem [ref=e441]:
                  - link "user added image News| Education| Initiatives New environmental initiative launched in Lviv 1790760062933 Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment. date of creation Sep 30, 2026 created by Володимир comments 0 likes 0" [ref=e442] [cursor=pointer]:
                    - /url: "#/greenCity/news/13453"
                    - generic [ref=e444]:
                      - img "user added image" [ref=e445]
                      - generic [ref=e446]:
                        - list [ref=e447]:
                          - generic [ref=e448]: News|
                          - generic [ref=e449]: Education|
                          - generic [ref=e450]: Initiatives
                        - generic [ref=e451]:
                          - heading "New environmental initiative launched in Lviv 1790760062933" [level=3] [ref=e453]
                          - paragraph [ref=e456]: Today we launched a new environmental initiative aimed at reducing plastic waste in our community. Let us work together for a cleaner and greener environment.
                        - generic [ref=e457]:
                          - paragraph [ref=e458]:
                            - img "date of creation" [ref=e459]
                            - generic [ref=e460]: Sep 30, 2026
                          - paragraph [ref=e461]:
                            - img "created by" [ref=e462]
                            - generic [ref=e463]: Володимир
                          - generic [ref=e464]:
                            - paragraph [ref=e465]:
                              - img "comments" [ref=e466]
                              - generic [ref=e467]: "0"
                            - paragraph [ref=e468]:
                              - img "likes" [ref=e469]
                              - generic [ref=e470]: "0"
              - progressbar [ref=e474]
          - contentinfo [ref=e490]:
            - generic [ref=e491]:
              - generic [ref=e492]:
                - link [ref=e494] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e495]
                - navigation [ref=e496]:
                  - menu [ref=e497]:
                    - listitem [ref=e498]:
                      - link "Eco news" [ref=e499] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e500]:
                      - link "Events" [ref=e501] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e502]:
                      - link "Places" [ref=e503] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e504]:
                      - link "About Us" [ref=e505] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e506]:
                      - link "My Space" [ref=e507] [cursor=pointer]:
                        - /url: "#/greenCity/profile/not_signed-in"
                    - listitem [ref=e508]:
                      - link "UBS Courier" [ref=e509] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e510]:
                    - listitem [ref=e511]:
                      - paragraph [ref=e512]: Follow us
                    - listitem [ref=e513]:
                      - link [ref=e514] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e515]
                      - link [ref=e516] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e517]
                      - link [ref=e518] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e519]
                      - link [ref=e520] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e521]
                      - link [ref=e522] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e523]
              - generic [ref=e524]: © Copyright 2026. Green City.
    - button [ref=e525] [cursor=pointer]:
      - img "chat" [ref=e526]
  - generic [ref=e527]: Welcome to the search window
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