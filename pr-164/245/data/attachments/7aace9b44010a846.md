# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-19-update-event.spec.ts >> Events - Edit Event >> TC-19 Verify successful updating of an existing event with valid data
- Location: tests/ui/tc-19-update-event.spec.ts:13:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('div.event-list:not(.list-view) mat-card.event-list-item').filter({ hasText: 'Updated Automation Event 2026' }).first().getByRole('button', { name: 'Edit event' })

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
              - paragraph [ref=e106]: 109 Items found
              - generic [ref=e108]:
                - button "table view" [pressed] [ref=e109] [cursor=pointer]:
                  - emphasis [ref=e110]: 
                - button "list view" [ref=e111] [cursor=pointer]:
                  - emphasis [ref=e112]: 
            - generic [ref=e113]:
              - generic [ref=e116]:
                - generic [ref=e119]:
                  - generic [ref=e120]:
                    - img "*" [ref=e121]
                    - img "*" [ref=e122]
                    - img "*" [ref=e123]
                  - generic:
                    - img "*" [ref=e124]
                    - img "*" [ref=e125]
                    - img "*" [ref=e126]
                - img "event" [ref=e128]
                - generic [ref=e129]:
                  - generic [ref=e130]:
                    - list "filter by items" [ref=e131]:
                      - listitem [ref=e132]:
                        - button "Social" [ref=e133] [cursor=pointer]
                    - generic [ref=e135]:
                      - generic [ref=e137]: Apr 7, 2026
                      - generic [ref=e138]: "|"
                      - generic [ref=e139]: 3:30 PM
                    - paragraph [ref=e142]: L'viv, Tyutyunnykiv Street, 23
                    - generic [ref=e143]: Open
                    - paragraph [ref=e147]: TESTEVENT
                  - button "More" [ref=e149] [cursor=pointer]
                  - generic [ref=e150]:
                    - generic [ref=e151]:
                      - img "date" [ref=e152]
                      - paragraph [ref=e153]: Apr 07, 2026
                    - generic [ref=e154]:
                      - img "author" [ref=e155]
                      - paragraph [ref=e156]: TestATestA
                    - generic [ref=e157]:
                      - img "frame" [ref=e158]
                      - paragraph [ref=e159]: "0"
                    - generic [ref=e160]:
                      - button "Like this event" [ref=e161] [cursor=pointer]:
                        - img "Like" [ref=e162]
                        - text: "0"
                      - button "Dislike this event" [ref=e163] [cursor=pointer]:
                        - img "Dislike" [ref=e164]
                        - text: "0"
              - generic [ref=e167]:
                - generic [ref=e168] [cursor=pointer]
                - img "event" [ref=e171]
                - generic [ref=e172]:
                  - generic [ref=e173]:
                    - list "filter by items" [ref=e174]:
                      - listitem [ref=e175]:
                        - button "Economic" [ref=e176] [cursor=pointer]
                    - generic [ref=e178]:
                      - generic [ref=e180]: Oct 2, 2026
                      - generic [ref=e181]: "|"
                      - generic [ref=e182]: 6:00 PM
                    - paragraph [ref=e185]:
                      - link "Online" [ref=e186] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e187]: Open
                    - paragraph [ref=e191]: Test Title Positive 61716508
                  - generic [ref=e192]:
                    - button "More" [ref=e193] [cursor=pointer]
                    - button "Edit event" [ref=e194] [cursor=pointer]
                  - generic [ref=e195]:
                    - generic [ref=e196]:
                      - img "date" [ref=e197]
                      - paragraph [ref=e198]: Oct 01, 2026
                    - generic [ref=e199]:
                      - img "author" [ref=e200]
                      - paragraph [ref=e201]: TestATestA
                    - generic [ref=e202]:
                      - img "frame" [ref=e203]
                      - paragraph [ref=e204]: "0"
                    - generic [ref=e205]:
                      - button "Like this event" [ref=e206] [cursor=pointer]:
                        - img "Like" [ref=e207]
                        - text: "0"
                      - button "Dislike this event" [ref=e208] [cursor=pointer]:
                        - img "Dislike" [ref=e209]
                        - text: "0"
              - generic [ref=e212]:
                - generic [ref=e213] [cursor=pointer]
                - img "event" [ref=e216]
                - generic [ref=e217]:
                  - generic [ref=e218]:
                    - list "filter by items" [ref=e219]:
                      - listitem [ref=e220]:
                        - button "Economic" [ref=e221] [cursor=pointer]
                    - generic [ref=e223]:
                      - generic [ref=e225]: Oct 2, 2026
                      - generic [ref=e226]: "|"
                      - generic [ref=e227]: 6:00 PM
                    - paragraph [ref=e230]:
                      - link "Online" [ref=e231] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e232]: Open
                    - paragraph [ref=e236]: Test Title Positive 65568945
                  - generic [ref=e237]:
                    - button "More" [ref=e238] [cursor=pointer]
                    - button "Edit event" [ref=e239] [cursor=pointer]
                  - generic [ref=e240]:
                    - generic [ref=e241]:
                      - img "date" [ref=e242]
                      - paragraph [ref=e243]: Oct 01, 2026
                    - generic [ref=e244]:
                      - img "author" [ref=e245]
                      - paragraph [ref=e246]: TestATestA
                    - generic [ref=e247]:
                      - img "frame" [ref=e248]
                      - paragraph [ref=e249]: "0"
                    - generic [ref=e250]:
                      - button "Like this event" [ref=e251] [cursor=pointer]:
                        - img "Like" [ref=e252]
                        - text: "0"
                      - button "Dislike this event" [ref=e253] [cursor=pointer]:
                        - img "Dislike" [ref=e254]
                        - text: "0"
              - generic [ref=e257]:
                - generic [ref=e258] [cursor=pointer]
                - img "event" [ref=e261]
                - generic [ref=e262]:
                  - generic [ref=e263]:
                    - list "filter by items" [ref=e264]:
                      - listitem [ref=e265]:
                        - button "Economic" [ref=e266] [cursor=pointer]
                    - generic [ref=e268]:
                      - generic [ref=e270]: Oct 2, 2026
                      - generic [ref=e271]: "|"
                      - generic [ref=e272]: 6:00 PM
                    - paragraph [ref=e275]:
                      - link "Online" [ref=e276] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e277]: Open
                    - paragraph [ref=e281]: Test Title Positive 65607903
                  - generic [ref=e282]:
                    - button "More" [ref=e283] [cursor=pointer]
                    - button "Edit event" [ref=e284] [cursor=pointer]
                  - generic [ref=e285]:
                    - generic [ref=e286]:
                      - img "date" [ref=e287]
                      - paragraph [ref=e288]: Oct 01, 2026
                    - generic [ref=e289]:
                      - img "author" [ref=e290]
                      - paragraph [ref=e291]: TestATestA
                    - generic [ref=e292]:
                      - img "frame" [ref=e293]
                      - paragraph [ref=e294]: "0"
                    - generic [ref=e295]:
                      - button "Like this event" [ref=e296] [cursor=pointer]:
                        - img "Like" [ref=e297]
                        - text: "0"
                      - button "Dislike this event" [ref=e298] [cursor=pointer]:
                        - img "Dislike" [ref=e299]
                        - text: "0"
              - generic [ref=e302]:
                - generic [ref=e303] [cursor=pointer]
                - img "event" [ref=e306]
                - generic [ref=e307]:
                  - generic [ref=e308]:
                    - list "filter by items" [ref=e309]:
                      - listitem [ref=e310]:
                        - button "Economic" [ref=e311] [cursor=pointer]
                    - generic [ref=e313]:
                      - generic [ref=e315]: Oct 2, 2026
                      - generic [ref=e316]: "|"
                      - generic [ref=e317]: 6:00 PM
                    - paragraph [ref=e320]:
                      - link "Online" [ref=e321] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e322]: Open
                    - paragraph [ref=e326]: Test Title Positive 61789124
                  - generic [ref=e327]:
                    - button "More" [ref=e328] [cursor=pointer]
                    - button "Edit event" [ref=e329] [cursor=pointer]
                  - generic [ref=e330]:
                    - generic [ref=e331]:
                      - img "date" [ref=e332]
                      - paragraph [ref=e333]: Oct 01, 2026
                    - generic [ref=e334]:
                      - img "author" [ref=e335]
                      - paragraph [ref=e336]: TestATestA
                    - generic [ref=e337]:
                      - img "frame" [ref=e338]
                      - paragraph [ref=e339]: "0"
                    - generic [ref=e340]:
                      - button "Like this event" [ref=e341] [cursor=pointer]:
                        - img "Like" [ref=e342]
                        - text: "0"
                      - button "Dislike this event" [ref=e343] [cursor=pointer]:
                        - img "Dislike" [ref=e344]
                        - text: "0"
              - generic [ref=e347]:
                - generic [ref=e348] [cursor=pointer]
                - img "event" [ref=e351]
                - generic [ref=e352]:
                  - generic [ref=e353]:
                    - list "filter by items" [ref=e354]:
                      - listitem [ref=e355]:
                        - button "Economic" [ref=e356] [cursor=pointer]
                    - generic [ref=e358]:
                      - generic [ref=e360]: Oct 2, 2026
                      - generic [ref=e361]: "|"
                      - generic [ref=e362]: 6:00 PM
                    - paragraph [ref=e365]:
                      - link "Online" [ref=e366] [cursor=pointer]:
                        - /url: https://example.com/test-link
                    - generic [ref=e367]: Open
                    - paragraph [ref=e371]: Test Title Positive 61736651
                  - generic [ref=e372]:
                    - button "More" [ref=e373] [cursor=pointer]
                    - button "Edit event" [ref=e374] [cursor=pointer]
                  - generic [ref=e375]:
                    - generic [ref=e376]:
                      - img "date" [ref=e377]
                      - paragraph [ref=e378]: Oct 01, 2026
                    - generic [ref=e379]:
                      - img "author" [ref=e380]
                      - paragraph [ref=e381]: TestATestA
                    - generic [ref=e382]:
                      - img "frame" [ref=e383]
                      - paragraph [ref=e384]: "0"
                    - generic [ref=e385]:
                      - button "Like this event" [ref=e386] [cursor=pointer]:
                        - img "Like" [ref=e387]
                        - text: "1"
                      - button "Dislike this event" [ref=e388] [cursor=pointer]:
                        - img "Dislike" [ref=e389]
                        - text: "0"
            - progressbar [ref=e391]
          - contentinfo [ref=e407]:
            - generic [ref=e408]:
              - generic [ref=e409]:
                - link [ref=e411] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e412]
                - navigation [ref=e413]:
                  - menu [ref=e414]:
                    - listitem [ref=e415]:
                      - link "Eco news" [ref=e416] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e417]:
                      - link "Events" [ref=e418] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e419]:
                      - link "Places" [ref=e420] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e421]:
                      - link "About Us" [ref=e422] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e423]:
                      - link "My Space" [ref=e424] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e425]:
                      - link "UBS Courier" [ref=e426] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e427]:
                    - listitem [ref=e428]:
                      - paragraph [ref=e429]: Follow us
                    - listitem [ref=e430]:
                      - link [ref=e431] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e432]
                      - link [ref=e433] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e434]
                      - link [ref=e435] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e436]
                      - link [ref=e437] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e438]
                      - link [ref=e439] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e440]
              - generic [ref=e441]: © Copyright 2026. Green City.
    - button [ref=e442] [cursor=pointer]:
      - img "chat" [ref=e443]
  - generic [ref=e444]: Welcome to the search window
```

# Test source

```ts
  13  |   protected readonly eventTitle: Locator;
  14  |   protected readonly moreButton: Locator;
  15  |   protected readonly editEventButton: Locator;
  16  |   protected readonly joinEventButton: Locator;
  17  |   protected readonly publishDate: Locator;
  18  |   protected readonly authorName: Locator;
  19  |   protected readonly commentsCount: Locator;
  20  |   protected readonly likeButton: Locator;
  21  |   protected readonly likeCount: Locator;
  22  |   protected readonly dislikeButton: Locator;
  23  |   protected readonly dislikeCount: Locator;
  24  | 
  25  |   constructor(root: Locator, page?: Page) {
  26  |     super(root, page);
  27  | 
  28  |     this.bookmarkButton = this.root.locator('div.event-flags.favourite-button');
  29  |     this.image = this.root.locator('img.event-image');
  30  |     this.typeTag = this.root.locator('ul.ul-eco-buttons a.tag');
  31  |     this.participantsCountText = this.root.locator('span.event-participants-count');
  32  | 
  33  |     this.eventDate = this.root.locator('div.date-container div.date');
  34  |     this.eventTime = this.root.locator('div.date-container div.time');
  35  |     this.eventLocation = this.root.locator('div.date-container p');
  36  |     this.eventStatus = this.root.locator('div.event-status');
  37  | 
  38  |     this.eventTitle = this.root.locator('p.event-name');
  39  |     this.moreButton = this.root.getByRole('button', { name: 'More' });
  40  |     this.editEventButton = this.root.getByRole('button', { name: 'Edit event' });
  41  |     this.editEventButton = this.root.getByRole('button', { name: 'Edit event' });
  42  |     this.joinEventButton = this.root.getByRole('button', { name: 'Join event' });
  43  | 
  44  |     this.publishDate = this.root.locator('div.additional-info div.date p');
  45  |     this.authorName = this.root.locator('div.additional-info div.author p');
  46  |     this.commentsCount = this.root.locator('div.additional-info div.frame p');
  47  |     this.likeButton = this.root
  48  |       .locator('div.additional-info')
  49  |       .getByRole('button', { name: 'Like this event' });
  50  |     this.likeCount = this.likeButton.locator('span');
  51  |     this.dislikeButton = this.root
  52  |       .locator('div.additional-info')
  53  |       .getByRole('button', { name: 'Dislike this event' });
  54  |     this.dislikeCount = this.dislikeButton.locator('span');
  55  |   }
  56  |   /** Clicks the bookmark button on the card */
  57  |   async clickBookmarkButton(): Promise<void> {
  58  |     await this.bookmarkButton.click();
  59  |   }
  60  | 
  61  |   /** Checks whether the event image is visible */
  62  |   async isImageVisible(): Promise<boolean> {
  63  |     return await this.image.isVisible();
  64  |   }
  65  | 
  66  |   /** Returns the event type text  */
  67  |   async getType(): Promise<string> {
  68  |     return (await this.typeTag.textContent()) ?? '';
  69  |   }
  70  | 
  71  |   /** Returns the event date text  */
  72  |   async getDate(): Promise<string> {
  73  |     return (await this.eventDate.textContent()) ?? '';
  74  |   }
  75  | 
  76  |   /** Returns the event time text  */
  77  |   async getTime(): Promise<string> {
  78  |     return (await this.eventTime.textContent()) ?? '';
  79  |   }
  80  | 
  81  |   /** Returns the event location text */
  82  |   async getLocation(): Promise<string> {
  83  |     return (await this.eventLocation.textContent()) ?? '';
  84  |   }
  85  | 
  86  |   /** Returns the event status text  */
  87  |   async getStatus(): Promise<string> {
  88  |     return (await this.eventStatus.textContent()) ?? '';
  89  |   }
  90  | 
  91  |   /** Returns the event title text */
  92  |   async getTitle(): Promise<string> {
  93  |     return (await this.eventTitle.innerText()).trim();
  94  |   }
  95  | 
  96  |   /** Clicks the "More" button */
  97  |   async clickMore(): Promise<void> {
  98  |     await this.moreButton.click();
  99  |   }
  100 | 
  101 |   /** Checks whether the "Edit event" button is visible */
  102 |   async isEditEventButtonVisible(): Promise<boolean> {
  103 |     return await this.editEventButton.isVisible();
  104 |   }
  105 | 
  106 |   /** Checks whether the "Edit event" button is enabled */
  107 |   async isEditEventButtonEnabled(): Promise<boolean> {
  108 |     return await this.editEventButton.isEnabled();
  109 |   }
  110 | 
  111 |   /** Clicks the "Edit event" button */
  112 |   async clickEditEvent(): Promise<void> {
> 113 |     await this.editEventButton.click();
      |                                ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  114 |   }
  115 | 
  116 |   /** Clicks the "Join event" button */
  117 |   async clickJoinEvent(): Promise<void> {
  118 |     await this.joinEventButton.click();
  119 |   }
  120 | 
  121 |   /** Checks whether the "Join event" button is enabled */
  122 |   async isJoinEventEnabled(): Promise<boolean> {
  123 |     return await this.joinEventButton.isEnabled();
  124 |   }
  125 | 
  126 |   /** Returns the event publish date text  */
  127 |   async getPublishDate(): Promise<string> {
  128 |     return (await this.publishDate.textContent()) ?? '';
  129 |   }
  130 | 
  131 |   /** Returns the event author's name */
  132 |   async getAuthorName(): Promise<string> {
  133 |     return (await this.authorName.textContent()) ?? '';
  134 |   }
  135 | 
  136 |   /** Returns the comments count as a number  */
  137 |   async getCommentsCount(): Promise<number> {
  138 |     const text = (await this.commentsCount.textContent()) ?? '0';
  139 |     return Number(text.trim());
  140 |   }
  141 | 
  142 |   /** Clicks the "Like" button */
  143 |   async clickLike(): Promise<void> {
  144 |     await this.likeButton.click();
  145 |   }
  146 | 
  147 |   /** Returns the like count as a number */
  148 |   async getLikeCount(): Promise<number> {
  149 |     const text = (await this.likeCount.textContent()) ?? '0';
  150 |     return Number(text.trim());
  151 |   }
  152 | 
  153 |   /** Clicks the "Dislike" button */
  154 |   async clickDislike(): Promise<void> {
  155 |     await this.dislikeButton.click();
  156 |   }
  157 | 
  158 |   /** Returns the dislike count as a number */
  159 |   async getDislikeCount(): Promise<number> {
  160 |     const text = (await this.dislikeCount.textContent()) ?? '0';
  161 |     return Number(text.trim());
  162 |   }
  163 | 
  164 |   /** Returns the extra-participants count text (e.g. "1") */
  165 |   async getParticipantsCountText(): Promise<string> {
  166 |     return (await this.participantsCountText.textContent()) ?? '';
  167 |   }
  168 |   /** Checks whether this card's root element matches the expected view mode */
  169 |   abstract isCorrectViewMode(): Promise<boolean>;
  170 | }
  171 | 
```