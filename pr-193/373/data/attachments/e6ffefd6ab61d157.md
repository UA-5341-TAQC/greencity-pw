# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-31-adding-event-to-bookmarks.spec.ts >> TC-31 Verify adding an event to the bookmarks >> should add and remove an event from bookmarks and persist the removal after refresh
- Location: tests/ui/tc-31-adding-event-to-bookmarks.spec.ts:4:3

# Error details

```
Error: Test timeout of 30000ms exceeded
```

# Page snapshot

```yaml
- generic [active] [ref=f1e1]:
  - generic [ref=f1e2]:
    - generic [ref=f1e4]:
      - link "skip to the main content" [ref=f1e6] [cursor=pointer]:
        - /url: .main-content
      - banner "Welcome to header" [ref=f1e7]:
        - generic [ref=f1e9]:
          - link [ref=f1e10] [cursor=pointer]:
            - /url: "#/greenCity"
            - link "Image green city logo" [ref=f1e11]
          - generic [ref=f1e12]:
            - navigation [ref=f1e13]:
              - tablist [ref=f1e14]:
                - listitem [ref=f1e15]:
                  - link "Eco news" [ref=f1e16] [cursor=pointer]:
                    - /url: "#/greenCity/news"
                - listitem [ref=f1e17]:
                  - link "Events" [ref=f1e18] [cursor=pointer]:
                    - /url: "#/greenCity/events"
                - listitem [ref=f1e19]:
                  - link "Places" [ref=f1e20] [cursor=pointer]:
                    - /url: "#/greenCity/places"
                - listitem [ref=f1e21]:
                  - link "About us" [ref=f1e22] [cursor=pointer]:
                    - /url: "#/greenCity/about"
                - listitem [ref=f1e23]:
                  - link "My space" [ref=f1e24] [cursor=pointer]:
                    - /url: "#/greenCity/profile"
                - listitem [ref=f1e25]:
                  - link "UBS courier" [ref=f1e26] [cursor=pointer]:
                    - /url: "#/ubs"
            - menu [ref=f1e28]:
              - listitem "site bookmark" [ref=f1e29] [cursor=pointer]
              - listitem "site notification" [ref=f1e31] [cursor=pointer]:
                - generic [ref=f1e33]: 99+
              - search "site search" [ref=f1e34] [cursor=pointer]
              - menu "language switcher" [ref=f1e36]:
                - option "english" [ref=f1e37] [cursor=pointer]:
                  - generic [aria-hidden] [ref=f1e38]: En
              - menu "profile options collapsed" [ref=f1e40]:
                - listitem [ref=f1e41] [cursor=pointer]: TestATestA
      - generic [ref=f1e42]:
        - generic "Tab To Main"
        - generic [ref=f1e43]:
          - generic [ref=f1e48]:
            - generic [ref=f1e49]:
              - generic [ref=f1e50]:
                - paragraph [ref=f1e51]: Events
                - generic [ref=f1e52]:
                  - generic [ref=f1e53] [cursor=pointer]
                  - generic [ref=f1e55] [cursor=pointer]
                  - img "my-event" [ref=f1e58] [cursor=pointer]
              - button "Create event" [ref=f1e60] [cursor=pointer]
            - generic [ref=f1e61]:
              - paragraph [ref=f1e62]: Filter
              - generic [ref=f1e63]:
                - generic [ref=f1e64] [cursor=pointer]:
                  - generic [ref=f1e65]: Event time
                  - combobox [ref=f1e66]
                - generic [ref=f1e72] [cursor=pointer]:
                  - generic [ref=f1e73]: Location
                  - combobox [ref=f1e74]
                - generic [ref=f1e80] [cursor=pointer]:
                  - generic [ref=f1e81]: Status
                  - combobox [ref=f1e82]
                - generic [ref=f1e88] [cursor=pointer]:
                  - generic [ref=f1e89]: Type
                  - combobox [ref=f1e90]
                - generic [ref=f1e96] [cursor=pointer]: Date range
                - button "Reset all" [disabled] [ref=f1e103]
            - separator [ref=f1e104]
            - generic [ref=f1e105]:
              - paragraph [ref=f1e106]: 2 Items found
              - generic [ref=f1e108]:
                - button "table view" [pressed] [ref=f1e109] [cursor=pointer]:
                  - emphasis [ref=f1e110]: 
                - button "list view" [ref=f1e111] [cursor=pointer]:
                  - emphasis [ref=f1e112]: 
            - generic [ref=f1e113]:
              - generic [ref=f1e116]:
                - generic [ref=f1e119]:
                  - generic [ref=f1e120]:
                    - img "*" [ref=f1e121]
                    - img "*" [ref=f1e122]
                    - img "*" [ref=f1e123]
                  - generic:
                    - img "*" [ref=f1e124]
                    - img "*" [ref=f1e125]
                    - img "*" [ref=f1e126]
                - img "event" [ref=f1e128]
                - generic [ref=f1e129]:
                  - generic [ref=f1e130]:
                    - list "filter by items" [ref=f1e131]:
                      - listitem [ref=f1e132]:
                        - button "Social" [ref=f1e133] [cursor=pointer]
                    - generic [ref=f1e135]:
                      - generic [ref=f1e137]: Apr 7, 2026
                      - generic [ref=f1e138]: "|"
                      - generic [ref=f1e139]: 3:30 PM
                    - paragraph [ref=f1e142]: L'viv, Tyutyunnykiv Street, 23
                    - generic [ref=f1e143]: Open
                    - paragraph [ref=f1e147]: TESTEVENT
                  - button "More" [ref=f1e149] [cursor=pointer]
                  - generic [ref=f1e150]:
                    - generic [ref=f1e151]:
                      - img "date" [ref=f1e152]
                      - paragraph [ref=f1e153]: Apr 07, 2026
                    - generic [ref=f1e154]:
                      - img "author" [ref=f1e155]
                      - paragraph [ref=f1e156]: TestATestA
                    - generic [ref=f1e157]:
                      - img "frame" [ref=f1e158]
                      - paragraph [ref=f1e159]: "0"
                    - generic [ref=f1e160]:
                      - button "Like this event" [ref=f1e161] [cursor=pointer]:
                        - img "Like" [ref=f1e162]
                        - text: "0"
                      - button "Dislike this event" [ref=f1e163] [cursor=pointer]:
                        - img "Dislike" [ref=f1e164]
                        - text: "0"
              - generic [ref=f1e167]:
                - generic [ref=f1e170]:
                  - generic [ref=f1e171]:
                    - img "*" [ref=f1e172]
                    - img "*" [ref=f1e173]
                    - img "*" [ref=f1e174]
                  - generic:
                    - img "*" [ref=f1e175]
                    - img "*" [ref=f1e176]
                    - img "*" [ref=f1e177]
                - generic [ref=f1e178]: "+2"
                - img "event" [ref=f1e183]
                - generic [ref=f1e184]:
                  - generic [ref=f1e185]:
                    - list "filter by items" [ref=f1e186]:
                      - listitem [ref=f1e187]:
                        - button "Economic" [ref=f1e188] [cursor=pointer]
                    - generic [ref=f1e190]:
                      - generic [ref=f1e192]: Apr 30, 2026
                      - generic [ref=f1e193]: "|"
                      - generic [ref=f1e194]: 11:30 AM
                    - paragraph [ref=f1e197]: L'viv, Halytska Street, 1
                    - generic [ref=f1e198]: Open
                    - paragraph [ref=f1e202]: Clean test event
                  - generic [ref=f1e203]:
                    - button "More" [ref=f1e204] [cursor=pointer]
                    - button "Rate Organizer" [ref=f1e205] [cursor=pointer]
                  - generic [ref=f1e206]:
                    - generic [ref=f1e207]:
                      - img "date" [ref=f1e208]
                      - paragraph [ref=f1e209]: Apr 20, 2026
                    - generic [ref=f1e210]:
                      - img "author" [ref=f1e211]
                      - paragraph [ref=f1e212]: WIMP QA
                    - generic [ref=f1e213]:
                      - img "frame" [ref=f1e214]
                      - paragraph [ref=f1e215]: "3"
                    - generic [ref=f1e216]:
                      - button "Like this event" [ref=f1e217] [cursor=pointer]:
                        - img "Like" [ref=f1e218]
                        - text: "0"
                      - button "Dislike this event" [ref=f1e219] [cursor=pointer]:
                        - img "Dislike" [ref=f1e220]
                        - text: "0"
          - contentinfo [ref=f1e222]:
            - generic [ref=f1e223]:
              - generic [ref=f1e224]:
                - link [ref=f1e226] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=f1e227]
                - navigation [ref=f1e228]:
                  - menu [ref=f1e229]:
                    - listitem [ref=f1e230]:
                      - link "Eco news" [ref=f1e231] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=f1e232]:
                      - link "Events" [ref=f1e233] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=f1e234]:
                      - link "Places" [ref=f1e235] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=f1e236]:
                      - link "About Us" [ref=f1e237] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=f1e238]:
                      - link "My Space" [ref=f1e239] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=f1e240]:
                      - link "UBS Courier" [ref=f1e241] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=f1e242]:
                    - listitem [ref=f1e243]:
                      - paragraph [ref=f1e244]: Follow us
                    - listitem [ref=f1e245]:
                      - link [ref=f1e246] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=f1e247]
                      - link [ref=f1e248] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=f1e249]
                      - link [ref=f1e250] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=f1e251]
                      - link [ref=f1e252] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=f1e253]
                      - link [ref=f1e254] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=f1e255]
              - generic [ref=f1e256]: © Copyright 2026. Green City.
    - button [ref=f1e257] [cursor=pointer]:
      - img "chat" [ref=f1e258]
  - generic [ref=f1e259]: Welcome to the search window
```

# Test source

```ts
  133 |   /** Returns the active filter indicator locator (all chips or first chip) */
  134 |   get activeFilterIndicator(): Locator {
  135 |     return this.activeFilterChipsRoots;
  136 |   }
  137 | 
  138 |   /** Returns the count of currently displayed active filter chips */
  139 |   async getActiveFilterChipsCount(): Promise<number> {
  140 |     return await test.step('Get active filter chips count', async () => {
  141 |       return await this.activeFilterChipsRoots.count();
  142 |     });
  143 |   }
  144 | 
  145 |   /** Returns an ActiveFilterChipComponent by its index */
  146 |   getActiveFilterChipByIndex(index: number): ActiveFilterChipComponent {
  147 |     return new ActiveFilterChipComponent(this.activeFilterChipsRoots.nth(index), this.page);
  148 |   }
  149 | 
  150 |   /** Returns an ActiveFilterChipComponent matching the provided text or pattern */
  151 |   getActiveFilterChipByText(text: string | RegExp): ActiveFilterChipComponent {
  152 |     const root = this.activeFilterChipsRoots.filter({ hasText: text }).first();
  153 |     return new ActiveFilterChipComponent(root, this.page);
  154 |   }
  155 | 
  156 |   /** Returns the active filter chip for a Type filter enum */
  157 |   getActiveFilterChipByType(type: EventTypeFilter): ActiveFilterChipComponent {
  158 |     return this.getActiveFilterChipByText(this.i18n.typeOptions[type]);
  159 |   }
  160 | 
  161 |   /** Returns the active filter chip for a Location filter enum */
  162 |   getActiveFilterChipByLocation(location: EventLocationFilter): ActiveFilterChipComponent {
  163 |     return this.getActiveFilterChipByText(this.i18n.locationOptions[location]);
  164 |   }
  165 | 
  166 |   /** Returns the active filter chip for a Status filter enum */
  167 |   getActiveFilterChipByStatus(status: EventStatusFilter): ActiveFilterChipComponent {
  168 |     return this.getActiveFilterChipByText(this.i18n.statusOptions[status]);
  169 |   }
  170 | 
  171 |   /** Returns the active filter chip for a Time filter enum */
  172 |   getActiveFilterChipByTime(time: EventTimeFilter): ActiveFilterChipComponent {
  173 |     return this.getActiveFilterChipByText(this.i18n.timeOptions[time]);
  174 |   }
  175 | 
  176 |   /** Returns the date range active filter chip */
  177 |   getActiveDateRangeChip(): ActiveFilterChipComponent {
  178 |     return this.getActiveFilterChipByText(/\d+[./]\d+[./]\d{4}/);
  179 |   }
  180 | 
  181 |   /** Returns all active filter chips as components */
  182 |   async getAllActiveFilterChips(): Promise<ActiveFilterChipComponent[]> {
  183 |     const count = await this.getActiveFilterChipsCount();
  184 |     const chips: ActiveFilterChipComponent[] = [];
  185 |     for (let i = 0; i < count; i++) {
  186 |       chips.push(this.getActiveFilterChipByIndex(i));
  187 |     }
  188 |     return chips;
  189 |   }
  190 | 
  191 |   /** Returns texts of all active filter chips */
  192 |   async getAllActiveFilterTexts(): Promise<string[]> {
  193 |     return await test.step('Get all active filter texts', async () => {
  194 |       const chips = await this.getAllActiveFilterChips();
  195 |       const texts: string[] = [];
  196 |       for (const chip of chips) {
  197 |         texts.push(await chip.getText());
  198 |       }
  199 |       return texts;
  200 |     });
  201 |   }
  202 | 
  203 |   /** Switches the event cards view to "grid" */
  204 |   async clickGridView(): Promise<void> {
  205 |     await test.step('Switch to grid view', async () => {
  206 |       await this.gridViewButton.click();
  207 |     });
  208 |   }
  209 | 
  210 |   /** Switches the event cards view to "list" */
  211 |   async clickListView(): Promise<void> {
  212 |     await test.step('Switch to list view', async () => {
  213 |       await this.listViewButton.click();
  214 |     });
  215 |   }
  216 | 
  217 |   /** Returns the number of event cards currently rendered in grid mode */
  218 |   async getGridEventCardsCount(): Promise<number> {
  219 |     return await this.gridEventCardRoots.count();
  220 |   }
  221 | 
  222 |   /** Scrolls through the grid until the end-of-list indicator is visible. */
  223 |   async scrollUntilAllEventCardsLoad(): Promise<void> {
  224 |     if ((await this.getItemsFoundCount()) === 0) {
  225 |       return;
  226 |     }
  227 | 
  228 |     while (!(await this.isEndOfEventsListVisible())) {
  229 |       const loadedCount = await this.getGridEventCardsCount();
  230 | 
  231 |       await this.scrollPage('down');
  232 | 
> 233 |       await expect.poll(() => this.getGridEventCardsCount()).toBeGreaterThanOrEqual(loadedCount);
      |                                                              ^ Error: Test timeout of 30000ms exceeded
  234 |     }
  235 |   }
  236 | 
  237 |   /** Returns the number of event cards currently rendered in list mode */
  238 |   async getListEventCardsCount(): Promise<number> {
  239 |     return await this.listEventCardRoots.count();
  240 |   }
  241 | 
  242 |   /** Returns a GridEventCardComponent for the card at the given position */
  243 |   getGridEventCardByIndex(index: number): GridEventCardComponent {
  244 |     return new GridEventCardComponent(this.gridEventCardRoots.nth(index), this.page);
  245 |   }
  246 | 
  247 |   /** Returns the first event card that is available for joining. */
  248 |   getFirstJoinableGridEventCard(): GridEventCardComponent {
  249 |     const root = this.gridEventCardRoots
  250 |       .filter({
  251 |         has: this.page.getByRole('button', { name: 'Join event', exact: true }),
  252 |       })
  253 |       .first();
  254 | 
  255 |     return new GridEventCardComponent(root, this.page);
  256 |   }
  257 |   /** Returns a ListEventCardComponent for the card at the given position */
  258 |   getListEventCardByIndex(index: number): ListEventCardComponent {
  259 |     return new ListEventCardComponent(this.listEventCardRoots.nth(index), this.page);
  260 |   }
  261 | 
  262 |   /** Returns a GridEventCard component for the first card whose title matches the given text */
  263 |   getGridEventCardByTitle(title: string): GridEventCardComponent {
  264 |     const root = this.gridEventCardRoots.filter({ hasText: title }).first();
  265 | 
  266 |     return new GridEventCardComponent(root, this.page);
  267 |   }
  268 | 
  269 |   /** Returns a ListEventCard component for the first card whose title matches the given text */
  270 |   getListEventCardByTitle(title: string): ListEventCardComponent {
  271 |     const root = this.listEventCardRoots.filter({ hasText: title }).first();
  272 | 
  273 |     return new ListEventCardComponent(root, this.page);
  274 |   }
  275 | 
  276 |   /** Returns whether an event with an enabled edit action is available */
  277 |   async hasEditableEventCard(): Promise<boolean> {
  278 |     const editButtons = this.page.getByRole('button', { name: 'Edit event' });
  279 |     const count = await editButtons.count();
  280 | 
  281 |     for (let index = 0; index < count; index++) {
  282 |       const editButton = editButtons.nth(index);
  283 |       if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
  284 |         return true;
  285 |       }
  286 |     }
  287 | 
  288 |     return false;
  289 |   }
  290 | 
  291 |   /** Returns the first event card that offers the author-only edit action */
  292 |   async getFirstEditableEventCard(
  293 |     createEventIfMissing?: () => Promise<unknown>
  294 |   ): Promise<GridEventCardComponent | ListEventCardComponent> {
  295 |     if (!(await this.hasEditableEventCard()) && createEventIfMissing) {
  296 |       await createEventIfMissing();
  297 |     }
  298 | 
  299 |     const gridCardCount = await this.gridEventCardRoots.count();
  300 |     for (let index = 0; index < gridCardCount; index++) {
  301 |       const gridCard = this.gridEventCardRoots.nth(index);
  302 |       const editButton = gridCard.getByRole('button', { name: 'Edit event' });
  303 | 
  304 |       if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
  305 |         return new GridEventCardComponent(gridCard, this.page);
  306 |       }
  307 |     }
  308 | 
  309 |     const listCardCount = await this.listEventCardRoots.count();
  310 |     for (let index = 0; index < listCardCount; index++) {
  311 |       const listCard = this.listEventCardRoots.nth(index);
  312 |       const editButton = listCard.getByRole('button', { name: 'Edit event' });
  313 | 
  314 |       if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
  315 |         return new ListEventCardComponent(listCard, this.page);
  316 |       }
  317 |     }
  318 | 
  319 |     throw new Error('No event card with an Edit event action was found.');
  320 |   }
  321 | 
  322 |   /** Returns the event card matching a title in the current view mode */
  323 |   async getEventCardByTitle(
  324 |     title: string
  325 |   ): Promise<GridEventCardComponent | ListEventCardComponent> {
  326 |     const gridCard = this.gridEventCardRoots.filter({ hasText: title }).first();
  327 | 
  328 |     try {
  329 |       await gridCard.waitFor({ state: 'visible' });
  330 |       return new GridEventCardComponent(gridCard, this.page);
  331 |     } catch {
  332 |       const listCard = this.listEventCardRoots.filter({ hasText: title }).first();
  333 | 
```