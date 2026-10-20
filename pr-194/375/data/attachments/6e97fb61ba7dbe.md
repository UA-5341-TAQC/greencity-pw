# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-10-open-event-details-by-id.spec.ts >> Event Details — open by ID >> TC-10 Open event details by ID
- Location: tests/ui/tc-10-open-event-details-by-id.spec.ts:26:3

# Error details

```
Error: expect(received).toContain(expected) // indexOf

Expected substring: "7:30 PM"
Received string:    "Sep 15, 2026
|
4:30 PM·
https://www.greencity.cx.ua/#/greenCity/events/create-update-event
Closed
|
Anyone registered
Abc123"
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
          - generic [ref=e49]:
            - link "Back to Events" [ref=e52] [cursor=pointer]:
              - /url: "#/profile;tabId=2"
            - generic [ref=e56]:
              - generic [ref=e57]:
                - generic [ref=e58]: Updated Automation Event 2026
                - generic [ref=e59]:
                  - generic [ref=e60]: Sep 15, 2026
                  - generic [ref=e61]: "|"
                  - generic [ref=e62]: by Abc123
                  - generic [ref=e63]:
                    - img "like" [ref=e64] [cursor=pointer]
                    - text: "1"
              - generic [ref=e66]:
                - img "Share" [ref=e67]
                - img "Share on Twitter" [ref=e68]
                - img "Share on LinkedIn" [ref=e69]
                - img "Share on Facebook" [ref=e70]
            - generic [ref=e71]:
              - generic [ref=e72]:
                - generic [ref=e75]:
                  - img "event" [ref=e76]
                  - generic [ref=e80] [cursor=pointer]
                  - generic [ref=e84] [cursor=pointer]
                - generic [ref=e87]:
                  - generic [ref=e88]: ECONOMIC
                  - generic [ref=e90]:
                    - generic [ref=e93]:
                      - generic [ref=e94]:
                        - img "*" [ref=e95]
                        - img "*" [ref=e96]
                        - img "*" [ref=e97]
                      - generic [ref=e98]:
                        - img "*" [ref=e99]
                        - img "*" [ref=e100]
                        - img "*" [ref=e101]
                    - generic [ref=e102]: (1)
                    - img "avatar" [ref=e105]
                - generic [ref=e107]:
                  - generic [ref=e110]:
                    - generic [ref=e111]: Sep 15, 2026
                    - generic [ref=e112]: "|"
                    - generic [ref=e113]: 4:30 PM
                  - link [ref=e116] [cursor=pointer]:
                    - /url: https://www.google.com/maps/search/?api=1&query=50.28854099853329,23.638435107027107
                  - link "https://www.greencity.cx.ua/#/greenCity/events/create-update-event" [ref=e119] [cursor=pointer]:
                    - /url: https://www.greencity.cx.ua/#/greenCity/events/create-update-event
                  - generic [ref=e122]:
                    - generic [ref=e123]: Closed
                    - generic [ref=e124]: "|"
                    - generic [ref=e125]: Anyone registered
                  - generic [ref=e126]: Abc123
                - button "Save event" [ref=e130] [cursor=pointer]
              - generic [ref=e131]:
                - generic [ref=e132]: Description
                - generic [ref=e133]: This is a new detailed description generated by automated script. Validating edit functionality.
            - generic [ref=e134]:
              - generic [ref=e135]:
                - generic [ref=e136]:
                  - paragraph [ref=e137]: Comments
                  - paragraph [ref=e138]: 166 comments
                - separator [ref=e139]
              - generic [ref=e141]:
                - paragraph [ref=e146]: T
                - generic [ref=e147]:
                  - generic [ref=e149]:
                    - generic [ref=e150]: Add a comment
                    - button [ref=e151] [cursor=pointer]:
                      - img [aria-hidden] [ref=e152]: image
                    - button [ref=e154] [cursor=pointer]:
                      - img [aria-hidden] [ref=e155]: sentiment_satisfied_alt
                  - button "Comment" [disabled] [ref=e157]
              - generic [ref=e158]:
                - generic [ref=e159]:
                  - paragraph [ref=e161]: T
                  - generic [ref=e162]:
                    - generic [ref=e163]: TestATestA
                    - generic [ref=e164]:
                      - generic [ref=e165]:
                        - generic [ref=e166]: "|"
                        - generic [ref=e167]:
                          - generic [ref=e168]: Edited
                          - text: Oct 20, 2026
                      - generic [ref=e169]: "0"
                  - generic [ref=e173]: Great environmental event! 1792497487053 Updated.
                  - generic [ref=e175]:
                    - generic [ref=e176]:
                      - button "Edit" [ref=e179] [cursor=pointer]
                      - button "Delete" [ref=e184] [cursor=pointer]
                    - button "Reply" [ref=e189] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e194] [cursor=pointer]:
                      - generic [ref=e195]: View 1 reply
                      - img "arrow" [ref=e196]
                - generic [ref=e197]:
                  - paragraph [ref=e199]: T
                  - generic [ref=e200]:
                    - generic [ref=e201]: TestATestA
                    - generic [ref=e202]:
                      - generic [ref=e203]:
                        - generic [ref=e204]: "|"
                        - generic [ref=e205]:
                          - generic [ref=e206]: Edited
                          - text: Oct 20, 2026
                      - generic [ref=e207]: "0"
                  - generic [ref=e211]: Great environmental event! 1792497476623 Updated.
                  - generic [ref=e213]:
                    - generic [ref=e214]:
                      - button "Edit" [ref=e217] [cursor=pointer]
                      - button "Delete" [ref=e222] [cursor=pointer]
                    - button "Reply" [ref=e227] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e232] [cursor=pointer]:
                      - generic [ref=e233]: View 1 reply
                      - img "arrow" [ref=e234]
                - generic [ref=e235]:
                  - paragraph [ref=e237]: T
                  - generic [ref=e238]:
                    - generic [ref=e239]: TestATestA
                    - generic [ref=e240]:
                      - generic [ref=e241]:
                        - generic [ref=e242]: "|"
                        - generic [ref=e243]:
                          - generic [ref=e244]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e245]: "0"
                  - generic [ref=e249]: Great environmental event! 1792156685603 Updated.
                  - generic [ref=e251]:
                    - generic [ref=e252]:
                      - button "Edit" [ref=e255] [cursor=pointer]
                      - button "Delete" [ref=e260] [cursor=pointer]
                    - button "Reply" [ref=e265] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e270] [cursor=pointer]:
                      - generic [ref=e271]: View 1 reply
                      - img "arrow" [ref=e272]
                - generic [ref=e273]:
                  - paragraph [ref=e275]: T
                  - generic [ref=e276]:
                    - generic [ref=e277]: TestATestA
                    - generic [ref=e278]:
                      - generic [ref=e279]:
                        - generic [ref=e280]: "|"
                        - generic [ref=e281]:
                          - generic [ref=e282]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e283]: "0"
                  - generic [ref=e287]: Great environmental event! 1792156671880 Updated.
                  - generic [ref=e289]:
                    - generic [ref=e290]:
                      - button "Edit" [ref=e293] [cursor=pointer]
                      - button "Delete" [ref=e298] [cursor=pointer]
                    - button "Reply" [ref=e303] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e308] [cursor=pointer]:
                      - generic [ref=e309]: View 1 reply
                      - img "arrow" [ref=e310]
                - generic [ref=e311]:
                  - paragraph [ref=e313]: T
                  - generic [ref=e314]:
                    - generic [ref=e315]: TestATestA
                    - generic [ref=e316]:
                      - generic [ref=e317]:
                        - generic [ref=e318]: "|"
                        - generic [ref=e319]:
                          - generic [ref=e320]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e321]: "0"
                  - generic [ref=e325]: Great environmental event! 1792156650037 Updated.
                  - generic [ref=e327]:
                    - generic [ref=e328]:
                      - button "Edit" [ref=e331] [cursor=pointer]
                      - button "Delete" [ref=e336] [cursor=pointer]
                    - button "Reply" [ref=e341] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e346] [cursor=pointer]:
                      - generic [ref=e347]: View 1 reply
                      - img "arrow" [ref=e348]
                - generic [ref=e349]:
                  - paragraph [ref=e351]: T
                  - generic [ref=e352]:
                    - generic [ref=e353]: TestATestA
                    - generic [ref=e354]:
                      - generic [ref=e355]:
                        - generic [ref=e356]: "|"
                        - generic [ref=e357]:
                          - generic [ref=e358]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e359]: "0"
                  - generic [ref=e363]: Great environmental event! 1792141492302 Updated.
                  - generic [ref=e365]:
                    - generic [ref=e366]:
                      - button "Edit" [ref=e369] [cursor=pointer]
                      - button "Delete" [ref=e374] [cursor=pointer]
                    - button "Reply" [ref=e379] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e384] [cursor=pointer]:
                      - generic [ref=e385]: View 1 reply
                      - img "arrow" [ref=e386]
                - generic [ref=e387]:
                  - paragraph [ref=e389]: T
                  - generic [ref=e390]:
                    - generic [ref=e391]: TestATestA
                    - generic [ref=e392]:
                      - generic [ref=e393]:
                        - generic [ref=e394]: "|"
                        - generic [ref=e395]:
                          - generic [ref=e396]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e397]: "0"
                  - generic [ref=e401]: Great environmental event! 1792141472786 Updated.
                  - generic [ref=e403]:
                    - generic [ref=e404]:
                      - button "Edit" [ref=e407] [cursor=pointer]
                      - button "Delete" [ref=e412] [cursor=pointer]
                    - button "Reply" [ref=e417] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e422] [cursor=pointer]:
                      - generic [ref=e423]: View 1 reply
                      - img "arrow" [ref=e424]
                - generic [ref=e425]:
                  - paragraph [ref=e427]: T
                  - generic [ref=e428]:
                    - generic [ref=e429]: TestATestA
                    - generic [ref=e430]:
                      - generic [ref=e431]:
                        - generic [ref=e432]: "|"
                        - generic [ref=e433]:
                          - generic [ref=e434]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e435]: "0"
                  - generic [ref=e439]: Great environmental event! 1792141458592 Updated.
                  - generic [ref=e441]:
                    - generic [ref=e442]:
                      - button "Edit" [ref=e445] [cursor=pointer]
                      - button "Delete" [ref=e450] [cursor=pointer]
                    - button "Reply" [ref=e455] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e460] [cursor=pointer]:
                      - generic [ref=e461]: View 1 reply
                      - img "arrow" [ref=e462]
                - generic [ref=e463]:
                  - paragraph [ref=e465]: T
                  - generic [ref=e466]:
                    - generic [ref=e467]: TestATestA
                    - generic [ref=e468]:
                      - generic [ref=e469]:
                        - generic [ref=e470]: "|"
                        - generic [ref=e471]:
                          - generic [ref=e472]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e473]: "0"
                  - generic [ref=e477]: Great environmental event! 1792140238536 Updated.
                  - generic [ref=e479]:
                    - generic [ref=e480]:
                      - button "Edit" [ref=e483] [cursor=pointer]
                      - button "Delete" [ref=e488] [cursor=pointer]
                    - button "Reply" [ref=e493] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e498] [cursor=pointer]:
                      - generic [ref=e499]: View 1 reply
                      - img "arrow" [ref=e500]
                - generic [ref=e501]:
                  - paragraph [ref=e503]: T
                  - generic [ref=e504]:
                    - generic [ref=e505]: TestATestA
                    - generic [ref=e506]:
                      - generic [ref=e507]:
                        - generic [ref=e508]: "|"
                        - generic [ref=e509]: Oct 16, 2026
                      - generic [ref=e510]: "0"
                  - generic [ref=e514]: Great environmental event! 1792140216945
                  - generic [ref=e516]:
                    - generic [ref=e517]:
                      - button "Edit" [ref=e520] [cursor=pointer]
                      - button "Delete" [ref=e525] [cursor=pointer]
                    - button "Reply" [ref=e530] [cursor=pointer]
              - generic [ref=e537]:
                - generic [ref=e538] [cursor=pointer]
                - generic [ref=e542]: "1"
                - generic [ref=e544]: "2"
                - generic [ref=e546]: "3"
                - generic [ref=e548]: ...
                - generic [ref=e550]: "10"
                - generic [ref=e552] [cursor=pointer]
          - contentinfo [ref=e556]:
            - generic [ref=e557]:
              - generic [ref=e558]:
                - link [ref=e560] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e561]
                - navigation [ref=e562]:
                  - menu [ref=e563]:
                    - listitem [ref=e564]:
                      - link "Eco news" [ref=e565] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e566]:
                      - link "Events" [ref=e567] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e568]:
                      - link "Places" [ref=e569] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e570]:
                      - link "About Us" [ref=e571] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e572]:
                      - link "My Space" [ref=e573] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e574]:
                      - link "UBS Courier" [ref=e575] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e576]:
                    - listitem [ref=e577]:
                      - paragraph [ref=e578]: Follow us
                    - listitem [ref=e579]:
                      - link [ref=e580] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e581]
                      - link [ref=e582] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e583]
                      - link [ref=e584] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e585]
                      - link [ref=e586] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e587]
                      - link [ref=e588] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e589]
              - generic [ref=e590]: © Copyright 2026. Green City.
    - button [ref=e591] [cursor=pointer]:
      - img "chat" [ref=e592]
  - generic [ref=e593]: Welcome to the search window
```

# Test source

```ts
  1   | import { test, expect } from '@/fixtures';
  2   | import { Language } from '@/types/header.types';
  3   | 
  4   | const EVENT_ID = 210;
  5   | const EVENT = {
  6   |   title: 'Updated Automation Event 2026',
  7   |   date: 'Sep 15, 2026',
  8   |   time: '7:30 PM',
  9   |   author: 'Abc123',
  10  |   category: 'ECONOMIC',
  11  |   status: 'Closed',
  12  |   accessType: 'Anyone registered',
  13  |   description:
  14  |     'This is a new detailed description generated by automated script. Validating edit functionality.',
  15  | };
  16  | 
  17  | test.describe('Event Details — open by ID', () => {
  18  |   test.beforeEach(async ({ authenticatedUser, eventDetailsPage }) => {
  19  |     void authenticatedUser;
  20  | 
  21  |     await eventDetailsPage.navigateToEventDetails(EVENT_ID);
  22  |     await eventDetailsPage.waitForDetailsPage();
  23  |     await eventDetailsPage.header.switchLanguage(Language.En);
  24  |   });
  25  | 
  26  |   test('TC-10 Open event details by ID', async ({ page, eventDetailsPage }) => {
  27  |     const { comments } = eventDetailsPage;
  28  | 
  29  |     test.info().annotations.push({
  30  |       type: 'issue',
  31  |       description:
  32  |         'Steps 1–2 skipped: event not found in Events list for logged-in user — <посилання на баг>',
  33  |     });
  34  | 
  35  |     await test.step('3: Verify the opened URL', async () => {
  36  |       await expect(page).toHaveURL(new RegExp(`/events/${EVENT_ID}$`));
  37  |     });
  38  | 
  39  |     await test.step('4: Verify the Event title', async () => {
  40  |       expect(await eventDetailsPage.getEventTitle()).toBe(EVENT.title);
  41  |     });
  42  | 
  43  |     await test.step('5: Verify the Event date and author', async () => {
  44  |       const dateAuthor = await eventDetailsPage.getDateAuthor();
  45  | 
  46  |       expect(dateAuthor).toContain(EVENT.date);
  47  |       expect(dateAuthor).toContain(EVENT.author);
  48  |     });
  49  | 
  50  |     await test.step('6: Verify the Event image', async () => {
  51  |       expect(await eventDetailsPage.isEventImageVisible()).toBe(true);
  52  |       await expect.poll(() => eventDetailsPage.isEventImageLoaded()).toBe(true);
  53  |     });
  54  | 
  55  |     await test.step('7: Verify the Event category', async () => {
  56  |       expect(await eventDetailsPage.getEventTag()).toBe(EVENT.category);
  57  |     });
  58  | 
  59  |     await test.step('8: Verify the Event date and time in the information block', async () => {
  60  |       const info = await eventDetailsPage.getEventInfo();
  61  | 
  62  |       expect(info).toContain(EVENT.date);
> 63  |       expect(info).toContain(EVENT.time);
      |                    ^ Error: expect(received).toContain(expected) // indexOf
  64  |     });
  65  | 
  66  |     await test.step('9: Verify the Event status and access type', async () => {
  67  |       const info = await eventDetailsPage.getEventInfo();
  68  | 
  69  |       expect(info).toContain(EVENT.status);
  70  |       expect(info).toContain(EVENT.accessType);
  71  |     });
  72  | 
  73  |     await test.step('10: Verify the Event author in the information block', async () => {
  74  |       expect(await eventDetailsPage.getEventInfo()).toContain(EVENT.author);
  75  |     });
  76  | 
  77  |     await test.step('11: Verify the Event description', async () => {
  78  |       expect(await eventDetailsPage.getDescription()).toBe(EVENT.description);
  79  |     });
  80  | 
  81  |     await test.step('12: Verify the Event action controls', async () => {
  82  |       expect(await eventDetailsPage.isLikeButtonVisible()).toBe(true);
  83  |       expect(await eventDetailsPage.isLikesCountVisible()).toBe(true);
  84  | 
  85  |       expect(await eventDetailsPage.isShareButtonVisible('Share')).toBe(true);
  86  |       expect(await eventDetailsPage.isShareButtonVisible('Share on Twitter')).toBe(true);
  87  |       expect(await eventDetailsPage.isShareButtonVisible('Share on LinkedIn')).toBe(true);
  88  |       expect(await eventDetailsPage.isShareButtonVisible('Share on Facebook')).toBe(true);
  89  | 
  90  |       expect(await eventDetailsPage.isSaveEventButtonVisible()).toBe(true);
  91  |       expect(await eventDetailsPage.isJoinEventButtonVisible()).toBe(false);
  92  |       expect(await eventDetailsPage.isBackButtonVisible()).toBe(true);
  93  |     });
  94  | 
  95  |     await test.step('13: Verify the Comments section', async () => {
  96  |       await eventDetailsPage.scrollToComments();
  97  | 
  98  |       expect(await comments.isCommentsSectionVisible()).toBe(true);
  99  |       expect(await comments.isCommentInputVisible()).toBe(true);
  100 |       expect(await comments.isSubmitCommentButtonVisible()).toBe(true);
  101 |     });
  102 |   });
  103 | });
  104 | 
```