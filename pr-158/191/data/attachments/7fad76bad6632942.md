# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc-16-join-event.spec.ts >> Event Details - Join Event >> TC-16: Verify joining an Event from Event Details
- Location: tests/tc-16-join-event.spec.ts:5:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.event-participants-avatar').first() to be visible

```

# Page snapshot

```yaml
- generic [ref=f1e1]:
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
                - generic [ref=f1e33]: "1"
              - search "site search" [ref=f1e34] [cursor=pointer]
              - menu "language switcher" [ref=f1e36]:
                - option "english" [ref=f1e37] [cursor=pointer]:
                  - generic [aria-hidden] [ref=f1e38]: En
              - menu "profile options collapsed" [ref=f1e40]:
                - listitem [ref=f1e41] [cursor=pointer]: Володимир
      - generic [ref=f1e42]:
        - generic "Tab To Main"
        - generic [ref=f1e43]:
          - generic [ref=f1e49]:
            - link "Back to Events" [ref=f1e52] [cursor=pointer]:
              - /url: "#/greenCity/events"
            - generic [ref=f1e56]:
              - generic [ref=f1e57]:
                - generic [ref=f1e58]: Community Cleanup Saturday
                - generic [ref=f1e59]:
                  - generic [ref=f1e60]: May 10, 2030
                  - generic [ref=f1e61]: "|"
                  - generic [ref=f1e62]: by Olha Shutylieva
                  - generic [ref=f1e63]:
                    - img "like" [ref=f1e64] [cursor=pointer]
                    - text: "0"
              - generic [ref=f1e66]:
                - img "Share" [ref=f1e67]
                - img "Share on Twitter" [ref=f1e68]
                - img "Share on LinkedIn" [ref=f1e69]
                - img "Share on Facebook" [ref=f1e70]
            - generic [ref=f1e71]:
              - generic [ref=f1e72]:
                - generic [ref=f1e75]:
                  - img "event" [ref=f1e76]
                  - generic [ref=f1e80] [cursor=pointer]
                  - generic [ref=f1e84] [cursor=pointer]
                - generic [ref=f1e87]:
                  - generic [ref=f1e88]: SOCIAL
                  - generic [ref=f1e90]: (0)
                - generic [ref=f1e93]:
                  - generic [ref=f1e96]:
                    - generic [ref=f1e97]: May 10, 2030
                    - generic [ref=f1e98]: "|"
                    - generic [ref=f1e99]: 10:00 AM
                  - link [ref=f1e102] [cursor=pointer]:
                    - /url: https://www.google.com/maps/search/?api=1&query=50.4501,30.5234
                  - generic [ref=f1e105]:
                    - generic [ref=f1e106]: Closed
                    - generic [ref=f1e107]: "|"
                    - generic [ref=f1e108]: Anyone registered
                  - generic [ref=f1e109]: Olha Shutylieva
                - generic [ref=f1e112]:
                  - button "Save event" [ref=f1e113] [cursor=pointer]
                  - button "Join event" [ref=f1e114] [cursor=pointer]
              - generic [ref=f1e115]:
                - generic [ref=f1e116]: Description
                - generic [ref=f1e117]: Join us to clean the riverside park and sort collected waste properly.
            - generic [ref=f1e118]:
              - generic [ref=f1e119]:
                - generic [ref=f1e120]:
                  - paragraph [ref=f1e121]: Comments
                  - paragraph [ref=f1e122]: 1 comment
                - separator [ref=f1e123]
              - generic [ref=f1e125]:
                - paragraph [ref=f1e130]: В
                - generic [ref=f1e131]:
                  - generic [ref=f1e133]:
                    - generic [ref=f1e134]: Add a comment
                    - button [ref=f1e135] [cursor=pointer]:
                      - img [aria-hidden] [ref=f1e136]: image
                    - button [ref=f1e138] [cursor=pointer]:
                      - img [aria-hidden] [ref=f1e139]: sentiment_satisfied_alt
                  - button "Comment" [disabled] [ref=f1e141]
              - generic [ref=f1e143]:
                - paragraph [ref=f1e145]: A
                - generic [ref=f1e146]:
                  - generic [ref=f1e147]: AnanasTest
                  - generic [ref=f1e148]:
                    - generic [ref=f1e149]:
                      - generic [ref=f1e150]: "|"
                      - generic [ref=f1e151]: Sep 30, 2026
                    - generic [ref=f1e152]: "0"
                - generic [ref=f1e156]: Test
                - generic [ref=f1e158]:
                  - button "Like" [ref=f1e161] [cursor=pointer]
                  - button "Reply" [ref=f1e166] [cursor=pointer]
          - contentinfo [ref=f1e173]:
            - generic [ref=f1e174]:
              - generic [ref=f1e175]:
                - link [ref=f1e177] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=f1e178]
                - navigation [ref=f1e179]:
                  - menu [ref=f1e180]:
                    - listitem [ref=f1e181]:
                      - link "Eco news" [ref=f1e182] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=f1e183]:
                      - link "Events" [ref=f1e184] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=f1e185]:
                      - link "Places" [ref=f1e186] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=f1e187]:
                      - link "About Us" [ref=f1e188] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=f1e189]:
                      - link "My Space" [ref=f1e190] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2317"
                    - listitem [ref=f1e191]:
                      - link "UBS Courier" [ref=f1e192] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=f1e193]:
                    - listitem [ref=f1e194]:
                      - paragraph [ref=f1e195]: Follow us
                    - listitem [ref=f1e196]:
                      - link [ref=f1e197] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=f1e198]
                      - link [ref=f1e199] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=f1e200]
                      - link [ref=f1e201] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=f1e202]
                      - link [ref=f1e203] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=f1e204]
                      - link [ref=f1e205] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=f1e206]
              - generic [ref=f1e207]: © Copyright 2026. Green City.
    - button [ref=f1e208] [cursor=pointer]:
      - img "chat" [ref=f1e209]
  - generic [ref=f1e210]: Welcome to the search window
```

# Test source

```ts
  2   | import BasePage from '@/pages/base-page';
  3   | 
  4   | export class EventDetailsPage extends BasePage {
  5   |   private readonly backButton: Locator;
  6   |   private readonly eventTitle: Locator;
  7   |   private readonly dateAuthor: Locator;
  8   |   private readonly descriptionBlockTitle: Locator;
  9   |   private readonly description: Locator;
  10  |   private readonly eventInfoBlock: Locator;
  11  |   private readonly saveEventButton: Locator;
  12  |   private readonly joinEventButton: Locator;
  13  |   private readonly cancelRequestButton: Locator;
  14  |   private readonly participantsCount: Locator;
  15  |   private readonly participantAvatars: Locator;
  16  | 
  17  |   constructor(page: Page) {
  18  |     super(page);
  19  | 
  20  |     this.backButton = page.locator('.event-nav .button-content');
  21  |     this.eventTitle = page.locator('.event-title');
  22  |     this.dateAuthor = page.locator('.date-author');
  23  |     this.descriptionBlockTitle = page.locator('.description-block-title');
  24  |     this.description = page.locator('.ql-editor');
  25  |     this.eventInfoBlock = page.locator('.event-info-block');
  26  |     this.saveEventButton = page.locator('.save-join-event-block .secondary-global-button');
  27  |     this.joinEventButton = page.getByRole('button', { name: 'Join event', exact: true });
  28  |     this.cancelRequestButton = page.getByRole('button', {
  29  |       name: 'Cancel Request',
  30  |       exact: true,
  31  |     });
  32  |     this.participantsCount = page.locator('.event-participants-count');
  33  |     this.participantAvatars = page.locator('.event-participants-avatar');
  34  |   }
  35  | 
  36  |   async navigateToEventDetails(eventId: string | number): Promise<void> {
  37  |     await this.navigateTo(`/#/greenCity/events/${eventId}`);
  38  |   }
  39  | 
  40  |   async waitForDetailsPage(): Promise<void> {
  41  |     await this.waitForPageLoad();
  42  |     await this.eventTitle.waitFor({ state: 'visible' });
  43  |   }
  44  | 
  45  |   async getEventTitle(): Promise<string> {
  46  |     return (await this.eventTitle.innerText()).trim();
  47  |   }
  48  | 
  49  |   async getDateAuthor(): Promise<string> {
  50  |     return (await this.dateAuthor.innerText()).trim();
  51  |   }
  52  | 
  53  |   async getDescriptionBlockTitle(): Promise<string> {
  54  |     return (await this.descriptionBlockTitle.innerText()).trim();
  55  |   }
  56  | 
  57  |   async getDescription(): Promise<string> {
  58  |     return (await this.description.innerText()).trim();
  59  |   }
  60  | 
  61  |   async getEventInfo(): Promise<string> {
  62  |     return (await this.eventInfoBlock.innerText()).trim();
  63  |   }
  64  | 
  65  |   async clickBackToEvents(): Promise<void> {
  66  |     await this.backButton.click();
  67  |   }
  68  | 
  69  |   async clickSaveEvent(): Promise<void> {
  70  |     await this.saveEventButton.click();
  71  |   }
  72  | 
  73  |   async clickJoinEvent(): Promise<void> {
  74  |     await this.joinEventButton.click();
  75  |   }
  76  | 
  77  |   async isSaveEventButtonVisible(): Promise<boolean> {
  78  |     return await this.saveEventButton.isVisible();
  79  |   }
  80  | 
  81  |   async waitForJoinEventButton(): Promise<void> {
  82  |     await this.joinEventButton.waitFor({ state: 'visible' });
  83  |   }
  84  | 
  85  |   async waitForCancelRequestButton(): Promise<void> {
  86  |     await this.cancelRequestButton.waitFor({ state: 'visible' });
  87  |   }
  88  | 
  89  |   async getParticipantsCountText(): Promise<string> {
  90  |     return (await this.participantsCount.innerText()).trim();
  91  |   }
  92  | 
  93  |   async waitForParticipantsCount(): Promise<void> {
  94  |     await this.participantsCount.waitFor({ state: 'visible' });
  95  |   }
  96  | 
  97  |   async getParticipantAvatarsCount(): Promise<number> {
  98  |     return await this.participantAvatars.count();
  99  |   }
  100 | 
  101 |   async waitForParticipantAvatars(): Promise<void> {
> 102 |     await this.participantAvatars.first().waitFor({ state: 'visible' });
      |                                           ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  103 |   }
  104 | }
  105 | 
```