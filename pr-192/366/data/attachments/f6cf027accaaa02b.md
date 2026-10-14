# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-20-edit-event-button.spec.ts >> TC-20 Edit event entry points >> Verify author can edit an event from the card and details page
- Location: tests/ui/tc-20-edit-event-button.spec.ts:5:3

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
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
              - listitem "site notification" [ref=e31] [cursor=pointer]
              - search "site search" [ref=e33] [cursor=pointer]
              - menu "language switcher" [ref=e35]:
                - option "english" [ref=e36] [cursor=pointer]:
                  - generic [aria-hidden] [ref=e37]: En
              - menu "profile options collapsed" [ref=e39]:
                - listitem [ref=e40] [cursor=pointer]: TestATestA
      - generic [ref=e41]:
        - generic "Tab To Main"
        - generic [ref=e42]:
          - generic [ref=e47]:
            - generic [ref=e48]:
              - generic [ref=e49]:
                - paragraph [ref=e50]: Events
                - generic [ref=e51]:
                  - generic [ref=e52] [cursor=pointer]
                  - generic [ref=e54] [cursor=pointer]
                  - img "my-event" [ref=e57] [cursor=pointer]
              - button "Create event" [ref=e59] [cursor=pointer]
            - generic [ref=e60]:
              - paragraph [ref=e61]: Filter
              - generic [ref=e62]:
                - generic [ref=e63] [cursor=pointer]:
                  - generic [ref=e64]: Event time
                  - combobox [ref=e65]
                - generic [ref=e71] [cursor=pointer]:
                  - generic [ref=e72]: Location
                  - combobox [ref=e73]
                - generic [ref=e79] [cursor=pointer]:
                  - generic [ref=e80]: Status
                  - combobox [ref=e81]
                - generic [ref=e87] [cursor=pointer]:
                  - generic [ref=e88]: Type
                  - combobox [ref=e89]
                - generic [ref=e95] [cursor=pointer]: Date range
                - button "Reset all" [disabled] [ref=e102]
            - separator [ref=e103]
            - generic [ref=e104]:
              - paragraph [ref=e105]: 191 Items found
              - generic [ref=e107]:
                - button "table view" [pressed] [ref=e108] [cursor=pointer]:
                  - emphasis [ref=e109]: 
                - button "list view" [ref=e110] [cursor=pointer]:
                  - emphasis [ref=e111]: 
            - generic [ref=e112]:
              - generic [ref=e115]:
                - generic [ref=e118]:
                  - generic [ref=e119]:
                    - img "*" [ref=e120]
                    - img "*" [ref=e121]
                    - img "*" [ref=e122]
                  - generic:
                    - img "*" [ref=e123]
                    - img "*" [ref=e124]
                    - img "*" [ref=e125]
                - img "event" [ref=e127]
                - generic [ref=e128]:
                  - generic [ref=e129]:
                    - list "filter by items" [ref=e130]:
                      - listitem [ref=e131]:
                        - button "Social" [ref=e132] [cursor=pointer]
                    - generic [ref=e134]:
                      - generic [ref=e136]: Apr 7, 2026
                      - generic [ref=e137]: "|"
                      - generic [ref=e138]: 3:30 PM
                    - paragraph [ref=e141]: L'viv, Tyutyunnykiv Street, 23
                    - generic [ref=e142]: Open
                    - paragraph [ref=e146]: TESTEVENT
                  - button "More" [ref=e148] [cursor=pointer]
                  - generic [ref=e149]:
                    - generic [ref=e150]:
                      - img "date" [ref=e151]
                      - paragraph [ref=e152]: Apr 07, 2026
                    - generic [ref=e153]:
                      - img "author" [ref=e154]
                      - paragraph [ref=e155]: TestATestA
                    - generic [ref=e156]:
                      - img "frame" [ref=e157]
                      - paragraph [ref=e158]: "0"
                    - generic [ref=e159]:
                      - button "Like this event" [ref=e160] [cursor=pointer]:
                        - img "Like" [ref=e161]
                        - text: "0"
                      - button "Dislike this event" [ref=e162] [cursor=pointer]:
                        - img "Dislike" [ref=e163]
                        - text: "0"
              - generic [ref=e166]:
                - generic [ref=e167] [cursor=pointer]
                - img "event" [ref=e170]
                - generic [ref=e171]:
                  - generic [ref=e172]:
                    - list "filter by items" [ref=e173]:
                      - listitem [ref=e174]:
                        - button "Economic" [ref=e175] [cursor=pointer]
                    - generic [ref=e177]:
                      - generic [ref=e179]: Oct 15, 2026
                      - generic [ref=e180]: "|"
                      - generic [ref=e181]: 6:00 PM
                    - paragraph [ref=e184]:
                      - link "Online" [ref=e185] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e186]: Open
                    - paragraph [ref=e190]: Test Title Positive 62697293
                  - generic [ref=e191]:
                    - button "More" [ref=e192] [cursor=pointer]
                    - button "Edit event" [ref=e193] [cursor=pointer]
                  - generic [ref=e194]:
                    - generic [ref=e195]:
                      - img "date" [ref=e196]
                      - paragraph [ref=e197]: Oct 14, 2026
                    - generic [ref=e198]:
                      - img "author" [ref=e199]
                      - paragraph [ref=e200]: TestATestA
                    - generic [ref=e201]:
                      - img "frame" [ref=e202]
                      - paragraph [ref=e203]: "0"
                    - generic [ref=e204]:
                      - button "Like this event" [ref=e205] [cursor=pointer]:
                        - img "Like" [ref=e206]
                        - text: "0"
                      - button "Dislike this event" [ref=e207] [cursor=pointer]:
                        - img "Dislike" [ref=e208]
                        - text: "0"
              - generic [ref=e211]:
                - generic [ref=e212] [cursor=pointer]
                - generic [ref=e214]: "+1"
                - img "event" [ref=e219]
                - generic [ref=e220]:
                  - generic [ref=e221]:
                    - list "filter by items" [ref=e222]:
                      - listitem [ref=e223]:
                        - button "Economic" [ref=e224] [cursor=pointer]
                    - generic [ref=e226]:
                      - generic [ref=e228]: Oct 15, 2026
                      - generic [ref=e229]: "|"
                      - generic [ref=e230]: 6:00 PM
                    - paragraph [ref=e233]:
                      - link "Online" [ref=e234] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e235]: Open
                    - paragraph [ref=e239]: Test Title Positive 58589473
                  - generic [ref=e240]:
                    - button "More" [ref=e241] [cursor=pointer]
                    - button "Edit event" [ref=e242] [cursor=pointer]
                  - generic [ref=e243]:
                    - generic [ref=e244]:
                      - img "date" [ref=e245]
                      - paragraph [ref=e246]: Oct 14, 2026
                    - generic [ref=e247]:
                      - img "author" [ref=e248]
                      - paragraph [ref=e249]: TestATestA
                    - generic [ref=e250]:
                      - img "frame" [ref=e251]
                      - paragraph [ref=e252]: "0"
                    - generic [ref=e253]:
                      - button "Like this event" [ref=e254] [cursor=pointer]:
                        - img "Like" [ref=e255]
                        - text: "0"
                      - button "Dislike this event" [ref=e256] [cursor=pointer]:
                        - img "Dislike" [ref=e257]
                        - text: "1"
              - generic [ref=e260]:
                - generic [ref=e261] [cursor=pointer]
                - img "event" [ref=e264]
                - generic [ref=e265]:
                  - generic [ref=e266]:
                    - list "filter by items" [ref=e267]:
                      - listitem [ref=e268]:
                        - button "Economic" [ref=e269] [cursor=pointer]
                    - generic [ref=e271]:
                      - generic [ref=e273]: Oct 15, 2026
                      - generic [ref=e274]: "|"
                      - generic [ref=e275]: 6:00 PM
                    - paragraph [ref=e278]:
                      - link "Online" [ref=e279] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e280]: Open
                    - paragraph [ref=e284]: Test Title Positive 68004548
                  - generic [ref=e285]:
                    - button "More" [ref=e286] [cursor=pointer]
                    - button "Edit event" [ref=e287] [cursor=pointer]
                  - generic [ref=e288]:
                    - generic [ref=e289]:
                      - img "date" [ref=e290]
                      - paragraph [ref=e291]: Oct 14, 2026
                    - generic [ref=e292]:
                      - img "author" [ref=e293]
                      - paragraph [ref=e294]: TestATestA
                    - generic [ref=e295]:
                      - img "frame" [ref=e296]
                      - paragraph [ref=e297]: "0"
                    - generic [ref=e298]:
                      - button "Like this event" [ref=e299] [cursor=pointer]:
                        - img "Like" [ref=e300]
                        - text: "0"
                      - button "Dislike this event" [ref=e301] [cursor=pointer]:
                        - img "Dislike" [ref=e302]
                        - text: "0"
              - generic [ref=e305]:
                - generic [ref=e306] [cursor=pointer]
                - generic [ref=e308]: "+1"
                - img "event" [ref=e313]
                - generic [ref=e314]:
                  - generic [ref=e315]:
                    - list "filter by items" [ref=e316]:
                      - listitem [ref=e317]:
                        - button "Economic" [ref=e318] [cursor=pointer]
                    - generic [ref=e320]:
                      - generic [ref=e322]: Oct 15, 2026
                      - generic [ref=e323]: "|"
                      - generic [ref=e324]: 6:00 PM
                    - paragraph [ref=e327]:
                      - link "Online" [ref=e328] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e329]: Open
                    - paragraph [ref=e333]: Test Title Positive 67999963
                  - generic [ref=e334]:
                    - button "More" [ref=e335] [cursor=pointer]
                    - button "Edit event" [ref=e336] [cursor=pointer]
                  - generic [ref=e337]:
                    - generic [ref=e338]:
                      - img "date" [ref=e339]
                      - paragraph [ref=e340]: Oct 14, 2026
                    - generic [ref=e341]:
                      - img "author" [ref=e342]
                      - paragraph [ref=e343]: TestATestA
                    - generic [ref=e344]:
                      - img "frame" [ref=e345]
                      - paragraph [ref=e346]: "0"
                    - generic [ref=e347]:
                      - button "Like this event" [ref=e348] [cursor=pointer]:
                        - img "Like" [ref=e349]
                        - text: "0"
                      - button "Dislike this event" [ref=e350] [cursor=pointer]:
                        - img "Dislike" [ref=e351]
                        - text: "0"
              - generic [ref=e354]:
                - generic [ref=e355] [cursor=pointer]
                - img "event" [ref=e358]
                - generic [ref=e359]:
                  - generic [ref=e360]:
                    - list "filter by items" [ref=e361]:
                      - listitem [ref=e362]:
                        - button "Economic" [ref=e363] [cursor=pointer]
                    - generic [ref=e365]:
                      - generic [ref=e367]: Oct 15, 2026
                      - generic [ref=e368]: "|"
                      - generic [ref=e369]: 6:00 PM
                    - paragraph [ref=e372]:
                      - link "Online" [ref=e373] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e374]: Open
                    - paragraph [ref=e378]: Test Title Positive 63921357
                  - generic [ref=e379]:
                    - button "More" [ref=e380] [cursor=pointer]
                    - button "Edit event" [ref=e381] [cursor=pointer]
                  - generic [ref=e382]:
                    - generic [ref=e383]:
                      - img "date" [ref=e384]
                      - paragraph [ref=e385]: Oct 14, 2026
                    - generic [ref=e386]:
                      - img "author" [ref=e387]
                      - paragraph [ref=e388]: TestATestA
                    - generic [ref=e389]:
                      - img "frame" [ref=e390]
                      - paragraph [ref=e391]: "0"
                    - generic [ref=e392]:
                      - button "Like this event" [ref=e393] [cursor=pointer]:
                        - img "Like" [ref=e394]
                        - text: "0"
                      - button "Dislike this event" [ref=e395] [cursor=pointer]:
                        - img "Dislike" [ref=e396]
                        - text: "0"
            - progressbar [ref=e398]
          - contentinfo [ref=e414]:
            - generic [ref=e415]:
              - generic [ref=e416]:
                - link [ref=e418] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e419]
                - navigation [ref=e420]:
                  - menu [ref=e421]:
                    - listitem [ref=e422]:
                      - link "Eco news" [ref=e423] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e424]:
                      - link "Events" [ref=e425] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e426]:
                      - link "Places" [ref=e427] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e428]:
                      - link "About Us" [ref=e429] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e430]:
                      - link "My Space" [ref=e431] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e432]:
                      - link "UBS Courier" [ref=e433] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e434]:
                    - listitem [ref=e435]:
                      - paragraph [ref=e436]: Follow us
                    - listitem [ref=e437]:
                      - link [ref=e438] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e439]
                      - link [ref=e440] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e441]
                      - link [ref=e442] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e443]
                      - link [ref=e444] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e445]
                      - link [ref=e446] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e447]
              - generic [ref=e448]: © Copyright 2026. Green City.
    - button [ref=e449] [cursor=pointer]:
      - img "chat" [ref=e450]
  - generic [ref=e451]: Welcome to the search window
```

# Test source

```ts
  1  | import type { Page, BrowserContext, Locator } from '@playwright/test';
  2  | import { HeaderComponent } from '@/components';
  3  | 
  4  | /**
  5  |  * Base page class containing common elements like header, footer, and toasts.
  6  |  * All other page objects should inherit from this class.
  7  |  */
  8  | export default class BasePage {
  9  |   protected page: Page;
  10 |   protected context: BrowserContext;
  11 | 
  12 |   public readonly header: HeaderComponent;
  13 |   public readonly toastMessage: Locator;
  14 | 
  15 |   protected constructor(page: Page) {
  16 |     this.page = page;
  17 |     this.context = page.context();
  18 |     this.header = new HeaderComponent(page);
  19 |     this.toastMessage = page
  20 |       .locator('snack-bar-container .mat-mdc-snack-bar-label, mat-snack-bar-container')
  21 |       .last();
  22 |   }
  23 | 
  24 |   /**
  25 |    * Waits for the global toast message (snack-bar) to disappear from the screen.
  26 |    * Useful to call if the toast is blocking an element you need to click.
  27 |    */
  28 |   async waitForToastToDisappear(): Promise<void> {
  29 |     await this.toastMessage.waitFor({ state: 'hidden' });
  30 |   }
  31 | 
  32 |   /**
  33 |    * Navigates to the specified URL.
  34 |    * @param url - The URL to navigate to.
  35 |    */
  36 |   async navigateTo(url: string): Promise<void> {
  37 |     await this.page.goto(url);
  38 |   }
  39 | 
  40 |   /**
  41 |    * Scrolls the page to the top or bottom based on the specified direction.
  42 |    * @param direction
  43 |    */
  44 |   async scrollPage(direction: 'up' | 'down'): Promise<void> {
  45 |     await this.page.evaluate((scrollDirection) => {
  46 |       const top = scrollDirection === 'down' ? document.documentElement.scrollHeight : 0;
  47 |       window.scrollTo(0, top);
  48 |     }, direction);
  49 |   }
  50 | 
  51 |   /**
  52 |    * Waits for the page load state to be "networkidle".
  53 |    * This ensures all background network requests are finished.
  54 |    */
  55 |   async waitForPageLoad(): Promise<void> {
> 56 |     await this.page.waitForLoadState('networkidle');
     |                     ^ Error: page.waitForLoadState: Test timeout of 30000ms exceeded.
  57 |   }
  58 |   url(): string {
  59 |     return this.page.url();
  60 |   }
  61 | }
  62 | 
```