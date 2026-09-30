# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc-20-edit-event-button.spec.ts >> TC-20 Edit event entry points >> Verify author can edit an event from the card and details page
- Location: tests/tc-20-edit-event-button.spec.ts:4:3

# Error details

```
Error: No event card with an Edit event action was found.
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
                - generic [ref=e33]: "1"
              - search "site search" [ref=e34] [cursor=pointer]
              - menu "language switcher" [ref=e36]:
                - option "english" [ref=e37] [cursor=pointer]:
                  - generic [aria-hidden] [ref=e38]: En
              - menu "profile options collapsed" [ref=e40]:
                - listitem [ref=e41] [cursor=pointer]: Володимир
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
              - paragraph [ref=e106]: 5 Items found
              - generic [ref=e108]:
                - button "table view" [pressed] [ref=e109] [cursor=pointer]:
                  - emphasis [ref=e110]: 
                - button "list view" [ref=e111] [cursor=pointer]:
                  - emphasis [ref=e112]: 
            - generic [ref=e113]:
              - generic [ref=e116]:
                - generic [ref=e117] [cursor=pointer]
                - img "event" [ref=e120]
                - generic [ref=e121]:
                  - generic [ref=e122]:
                    - list "filter by items" [ref=e123]:
                      - listitem [ref=e124]:
                        - button "Social" [ref=e125] [cursor=pointer]
                    - generic [ref=e127]:
                      - generic [ref=e129]: May 10, 2030
                      - generic [ref=e130]: "|"
                      - generic [ref=e131]: 10:00 AM
                    - paragraph [ref=e134]: office 113, st. Svetlitsky 35
                    - generic [ref=e135]: Closed
                    - paragraph [ref=e139]: Community Cleanup Saturday
                  - generic [ref=e140]:
                    - button "More" [ref=e141] [cursor=pointer]
                    - button "Join event" [ref=e142] [cursor=pointer]
                  - generic [ref=e143]:
                    - generic [ref=e144]:
                      - img "date" [ref=e145]
                      - paragraph [ref=e146]: Apr 09, 2026
                    - generic [ref=e147]:
                      - img "author" [ref=e148]
                      - paragraph [ref=e149]: Olha Shutylieva
                    - generic [ref=e150]:
                      - img "frame" [ref=e151]
                      - paragraph [ref=e152]: "1"
                    - generic [ref=e153]:
                      - button "Like this event" [ref=e154] [cursor=pointer]:
                        - img "Like" [ref=e155]
                        - text: "0"
                      - button "Dislike this event" [ref=e156] [cursor=pointer]:
                        - img "Dislike" [ref=e157]
                        - text: "0"
              - generic [ref=e160]:
                - generic [ref=e161] [cursor=pointer]
                - img "event" [ref=e164]
                - generic [ref=e165]:
                  - generic [ref=e166]:
                    - list "filter by items" [ref=e167]:
                      - listitem [ref=e168]:
                        - button "Economic" [ref=e169] [cursor=pointer]
                    - generic [ref=e171]:
                      - generic [ref=e173]: Sep 30, 2026
                      - generic [ref=e174]: "|"
                      - generic [ref=e175]: 12:00 PM
                    - paragraph [ref=e178]: Lviv Oblast, V8GF+FH Novyi Yarychiv
                    - generic [ref=e179]: Open
                    - paragraph [ref=e183]: dfssdfs
                  - generic [ref=e184]:
                    - button "More" [ref=e185] [cursor=pointer]
                    - button "Join event" [disabled] [ref=e186]
                  - generic [ref=e187]:
                    - generic [ref=e188]:
                      - img "date" [ref=e189]
                      - paragraph [ref=e190]: Sep 30, 2026
                    - generic [ref=e191]:
                      - img "author" [ref=e192]
                      - paragraph [ref=e193]: dfs
                    - generic [ref=e194]:
                      - img "frame" [ref=e195]
                      - paragraph [ref=e196]: "0"
                    - generic [ref=e197]:
                      - button "Like this event" [ref=e198] [cursor=pointer]:
                        - img "Like" [ref=e199]
                        - text: "0"
                      - button "Dislike this event" [ref=e200] [cursor=pointer]:
                        - img "Dislike" [ref=e201]
                        - text: "0"
              - generic [ref=e204]:
                - generic [ref=e205] [cursor=pointer]
                - generic [ref=e207]: "+1"
                - img "event" [ref=e212]
                - generic [ref=e213]:
                  - generic [ref=e214]:
                    - list "filter by items" [ref=e215]:
                      - listitem [ref=e216]:
                        - button "Social" [ref=e217] [cursor=pointer]
                    - generic [ref=e219]:
                      - generic [ref=e221]: May 10, 2030
                      - generic [ref=e222]: "|"
                      - generic [ref=e223]: 10:00 AM
                    - paragraph [ref=e226]: office 113, st. Svetlitsky 35
                    - generic [ref=e227]: Open
                    - paragraph [ref=e231]: Community Cleanup Saturday
                  - generic [ref=e232]:
                    - button "More" [ref=e233] [cursor=pointer]
                    - button "Join event" [ref=e234] [cursor=pointer]
                  - generic [ref=e235]:
                    - generic [ref=e236]:
                      - img "date" [ref=e237]
                      - paragraph [ref=e238]: Apr 16, 2026
                    - generic [ref=e239]:
                      - img "author" [ref=e240]
                      - paragraph [ref=e241]: Olha Shutylieva
                    - generic [ref=e242]:
                      - img "frame" [ref=e243]
                      - paragraph [ref=e244]: "0"
                    - generic [ref=e245]:
                      - button "Like this event" [ref=e246] [cursor=pointer]:
                        - img "Like" [ref=e247]
                        - text: "0"
                      - button "Dislike this event" [ref=e248] [cursor=pointer]:
                        - img "Dislike" [ref=e249]
                        - text: "0"
              - generic [ref=e252]:
                - generic [ref=e253] [cursor=pointer]
                - generic [ref=e255]: "+3"
                - img "event" [ref=e261]
                - generic [ref=e262]:
                  - generic [ref=e263]:
                    - list "filter by items" [ref=e264]:
                      - listitem [ref=e265]:
                        - button "Social" [ref=e266] [cursor=pointer]
                    - generic [ref=e268]:
                      - generic [ref=e270]: May 10, 2030
                      - generic [ref=e271]: "|"
                      - generic [ref=e272]: 10:00 AM
                    - paragraph [ref=e275]: office 113, st. Svetlitsky 35
                    - generic [ref=e276]: Open
                    - paragraph [ref=e280]: Community Cleanup Saturday
                  - generic [ref=e281]:
                    - button "More" [ref=e282] [cursor=pointer]
                    - button "Join event" [ref=e283] [cursor=pointer]
                  - generic [ref=e284]:
                    - generic [ref=e285]:
                      - img "date" [ref=e286]
                      - paragraph [ref=e287]: Apr 16, 2026
                    - generic [ref=e288]:
                      - img "author" [ref=e289]
                      - paragraph [ref=e290]: Olha Shutylieva
                    - generic [ref=e291]:
                      - img "frame" [ref=e292]
                      - paragraph [ref=e293]: "0"
                    - generic [ref=e294]:
                      - button "Like this event" [ref=e295] [cursor=pointer]:
                        - img "Like" [ref=e296]
                        - text: "0"
                      - button "Dislike this event" [ref=e297] [cursor=pointer]:
                        - img "Dislike" [ref=e298]
                        - text: "0"
              - generic [ref=e301]:
                - generic [ref=e302] [cursor=pointer]
                - generic [ref=e304]: "+1"
                - img "event" [ref=e309]
                - generic [ref=e310]:
                  - generic [ref=e311]:
                    - list "filter by items" [ref=e312]:
                      - listitem [ref=e313]:
                        - button "Social" [ref=e314] [cursor=pointer]
                    - generic [ref=e316]:
                      - generic [ref=e318]: May 10, 2030
                      - generic [ref=e319]: "|"
                      - generic [ref=e320]: 10:00 AM
                    - paragraph [ref=e323]: office 113, st. Svetlitsky 35
                    - generic [ref=e324]: Open
                    - paragraph [ref=e328]: Community Cleanup Saturday
                  - generic [ref=e329]:
                    - button "More" [ref=e330] [cursor=pointer]
                    - button "Join event" [ref=e331] [cursor=pointer]
                  - generic [ref=e332]:
                    - generic [ref=e333]:
                      - img "date" [ref=e334]
                      - paragraph [ref=e335]: Apr 16, 2026
                    - generic [ref=e336]:
                      - img "author" [ref=e337]
                      - paragraph [ref=e338]: Olha Shutylieva
                    - generic [ref=e339]:
                      - img "frame" [ref=e340]
                      - paragraph [ref=e341]: "14"
                    - generic [ref=e342]:
                      - button "Like this event" [ref=e343] [cursor=pointer]:
                        - img "Like" [ref=e344]
                        - text: "0"
                      - button "Dislike this event" [ref=e345] [cursor=pointer]:
                        - img "Dislike" [ref=e346]
                        - text: "0"
            - paragraph [ref=e347]: There are no more events for now
          - contentinfo [ref=e349]:
            - generic [ref=e350]:
              - generic [ref=e351]:
                - link [ref=e353] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e354]
                - navigation [ref=e355]:
                  - menu [ref=e356]:
                    - listitem [ref=e357]:
                      - link "Eco news" [ref=e358] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e359]:
                      - link "Events" [ref=e360] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e361]:
                      - link "Places" [ref=e362] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e363]:
                      - link "About Us" [ref=e364] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e365]:
                      - link "My Space" [ref=e366] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2317"
                    - listitem [ref=e367]:
                      - link "UBS Courier" [ref=e368] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e369]:
                    - listitem [ref=e370]:
                      - paragraph [ref=e371]: Follow us
                    - listitem [ref=e372]:
                      - link [ref=e373] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e374]
                      - link [ref=e375] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e376]
                      - link [ref=e377] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e378]
                      - link [ref=e379] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e380]
                      - link [ref=e381] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e382]
              - generic [ref=e383]: © Copyright 2026. Green City.
    - button [ref=e384] [cursor=pointer]:
      - img "chat" [ref=e385]
  - generic [ref=e386]: Welcome to the search window
```

# Test source

```ts
  183 |   }
  184 | 
  185 |   /** Clicks "Reset all" button */
  186 |   async clickResetAll(): Promise<void> {
  187 |     await this.resetAllButton.click();
  188 |   }
  189 | 
  190 |   /** Selects an option from the currently open filter dropdown by its text */
  191 |   async selectFilterOption(optionText: string): Promise<void> {
  192 |     await this.filterOptions.filter({ hasText: optionText }).click();
  193 |   }
  194 | 
  195 |   /** Clicks "Filter cities" button (Location filter) */
  196 |   async clickFilterCities(): Promise<void> {
  197 |     await this.locationFilterCitiesButton.click();
  198 |   }
  199 | 
  200 |   /** Returns the calendar's current period label */
  201 |   async getCalendarPeriodLabel(): Promise<string> {
  202 |     return (await this.calendarPeriodButton.innerText()).trim();
  203 |   }
  204 | 
  205 |   /** Opens the quick month/year picker in the calendar */
  206 |   async openCalendarMonthYearPicker(): Promise<void> {
  207 |     await this.calendarPeriodButton.click();
  208 |   }
  209 | 
  210 |   /** Moves the calendar to the next month */
  211 |   async goToNextMonth(): Promise<void> {
  212 |     await this.calendarNextMonthButton.click();
  213 |   }
  214 | 
  215 |   /** Moves the calendar to the previous month */
  216 |   async goToPreviousMonth(): Promise<void> {
  217 |     await this.calendarPreviousMonthButton.click();
  218 |   }
  219 | 
  220 |   /** Returns the locator for a specific day cell in the calendar */
  221 |   getCalendarDayCell(day: number): Locator {
  222 |     return this.calendarDayButtons.filter({ hasText: new RegExp(`^${day}$`) });
  223 |   }
  224 | 
  225 |   /** Clicks a specific day in the calendar (within the currently displayed month) */
  226 |   async selectCalendarDay(day: number): Promise<void> {
  227 |     await this.getCalendarDayCell(day).click();
  228 |   }
  229 | 
  230 |   /** Checks whether the calendar is open and visible */
  231 |   async isCalendarVisible(): Promise<boolean> {
  232 |     return await this.calendarTable.isVisible();
  233 |   }
  234 | 
  235 |   /** Returns the number of event cards currently rendered in grid mode */
  236 |   async getGridEventCardsCount(): Promise<number> {
  237 |     return await this.gridEventCardRoots.count();
  238 |   }
  239 | 
  240 |   /** Returns the number of event cards currently rendered in list mode */
  241 |   async getListEventCardsCount(): Promise<number> {
  242 |     return await this.listEventCardRoots.count();
  243 |   }
  244 | 
  245 |   /** Returns a GridEventCardComponent for the card at the given position */
  246 |   getGridEventCardByIndex(index: number): GridEventCardComponent {
  247 |     return new GridEventCardComponent(this.gridEventCardRoots.nth(index), this.page);
  248 |   }
  249 |   /** Returns a ListEventCardComponent for the card at the given position */
  250 |   getListEventCardByIndex(index: number): ListEventCardComponent {
  251 |     return new ListEventCardComponent(this.listEventCardRoots.nth(index), this.page);
  252 |   }
  253 | 
  254 |   /** Returns a GridEventCard component for the first card whose title matches the given text */
  255 |   getGridEventCardByTitle(title: string): GridEventCardComponent {
  256 |     const root = this.gridEventCardRoots.filter({ hasText: title }).first();
  257 | 
  258 |     return new GridEventCardComponent(root, this.page);
  259 |   }
  260 | 
  261 |   /** Returns a ListEventCard component for the first card whose title matches the given text */
  262 |   getListEventCardByTitle(title: string): ListEventCardComponent {
  263 |     const root = this.listEventCardRoots.filter({ hasText: title }).first();
  264 | 
  265 |     return new ListEventCardComponent(root, this.page);
  266 |   }
  267 | 
  268 |   /** Returns the first event card that offers the author-only edit action */
  269 |   async getFirstEditableEventCard(): Promise<GridEventCardComponent | ListEventCardComponent> {
  270 |     const editButton = this.page.getByRole('button', { name: 'Edit event' });
  271 |     const gridCard = this.gridEventCardRoots.filter({ has: editButton }).first();
  272 | 
  273 |     if ((await gridCard.count()) > 0) {
  274 |       return new GridEventCardComponent(gridCard, this.page);
  275 |     }
  276 | 
  277 |     const listCard = this.listEventCardRoots.filter({ has: editButton }).first();
  278 | 
  279 |     if ((await listCard.count()) > 0) {
  280 |       return new ListEventCardComponent(listCard, this.page);
  281 |     }
  282 | 
> 283 |     throw new Error('No event card with an Edit event action was found.');
      |           ^ Error: No event card with an Edit event action was found.
  284 |   }
  285 | 
  286 |   /** Returns the event card matching a title in the current view mode */
  287 |   async getEventCardByTitle(
  288 |     title: string
  289 |   ): Promise<GridEventCardComponent | ListEventCardComponent> {
  290 |     const gridCard = this.gridEventCardRoots.filter({ hasText: title }).first();
  291 | 
  292 |     if ((await gridCard.count()) > 0) {
  293 |       return new GridEventCardComponent(gridCard, this.page);
  294 |     }
  295 | 
  296 |     const listCard = this.listEventCardRoots.filter({ hasText: title }).first();
  297 | 
  298 |     if ((await listCard.count()) > 0) {
  299 |       return new ListEventCardComponent(listCard, this.page);
  300 |     }
  301 | 
  302 |     throw new Error(`No event card with title "${title}" was found.`);
  303 |   }
  304 | 
  305 |   /** Returns GridEventCard components for every card on the page */
  306 |   async getAllGridEventCards(): Promise<GridEventCardComponent[]> {
  307 |     const count = await this.getGridEventCardsCount();
  308 |     const cards: GridEventCardComponent[] = [];
  309 |     for (let i = 0; i < count; i++) {
  310 |       cards.push(this.getGridEventCardByIndex(i));
  311 |     }
  312 |     return cards;
  313 |   }
  314 | 
  315 |   /** Returns ListEventCard components for every card on the page */
  316 |   async getAllListEventCards(): Promise<ListEventCardComponent[]> {
  317 |     const count = await this.getListEventCardsCount();
  318 |     const cards: ListEventCardComponent[] = [];
  319 |     for (let i = 0; i < count; i++) {
  320 |       cards.push(this.getListEventCardByIndex(i));
  321 |     }
  322 |     return cards;
  323 |   }
  324 | }
  325 | 
```