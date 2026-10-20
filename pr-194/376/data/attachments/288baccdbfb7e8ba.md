# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-13-event-details-add-comment.spec.ts >> Event Details — comments >> TC-13 Verify adding, editing and replying to a comment on Event Details
- Location: tests/ui/tc-13-event-details-add-comment.spec.ts:15:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 170
Received: 171

Call Log:
- Timeout 10000ms exceeded while waiting on the predicate
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
                  - generic [ref=e79] [cursor=pointer]
                  - generic [ref=e83] [cursor=pointer]
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
                  - paragraph [ref=e138]: 171 comments
                - separator [ref=e139]
              - generic [ref=e141]:
                - paragraph [ref=e146]: T
                - generic [ref=e147]:
                  - generic [ref=e149]:
                    - button [ref=e151] [cursor=pointer]:
                      - img [aria-hidden] [ref=e152]: image
                    - button [ref=e154] [cursor=pointer]:
                      - img [aria-hidden] [ref=e155]: sentiment_satisfied_alt
                  - button "Comment" [active] [ref=e157] [cursor=pointer]
              - generic [ref=e158]:
                - generic [ref=e159]:
                  - paragraph [ref=e161]: T
                  - generic [ref=e162]:
                    - generic [ref=e163]: TestATestA
                    - generic [ref=e164]:
                      - generic [ref=e165]:
                        - generic [ref=e166]: "|"
                        - generic [ref=e167]: Oct 20, 2026
                      - generic [ref=e168]: "0"
                  - generic [ref=e172]: Great environmental event! 1792498379334
                  - generic [ref=e174]:
                    - generic [ref=e175]:
                      - button "Edit" [ref=e178] [cursor=pointer]
                      - button "Delete" [ref=e183] [cursor=pointer]
                    - button "Reply" [ref=e188] [cursor=pointer]
                - generic [ref=e192]:
                  - paragraph [ref=e194]: T
                  - generic [ref=e195]:
                    - generic [ref=e196]: TestATestA
                    - generic [ref=e197]:
                      - generic [ref=e198]:
                        - generic [ref=e199]: "|"
                        - generic [ref=e200]:
                          - generic [ref=e201]: Edited
                          - text: Oct 20, 2026
                      - generic [ref=e202]: "0"
                  - generic [ref=e206]: Great environmental event! 1792498375461 Updated.
                  - generic [ref=e208]:
                    - generic [ref=e209]:
                      - button "Edit" [ref=e212] [cursor=pointer]
                      - button "Delete" [ref=e217] [cursor=pointer]
                    - button "Reply" [ref=e222] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e227] [cursor=pointer]:
                      - generic [ref=e228]: View 1 reply
                      - img "arrow" [ref=e229]
                - generic [ref=e230]:
                  - paragraph [ref=e232]: T
                  - generic [ref=e233]:
                    - generic [ref=e234]: TestATestA
                    - generic [ref=e235]:
                      - generic [ref=e236]:
                        - generic [ref=e237]: "|"
                        - generic [ref=e238]:
                          - generic [ref=e239]: Edited
                          - text: Oct 20, 2026
                      - generic [ref=e240]: "0"
                  - generic [ref=e244]: Great environmental event! 1792497543172 Updated.
                  - generic [ref=e246]:
                    - generic [ref=e247]:
                      - button "Edit" [ref=e250] [cursor=pointer]
                      - button "Delete" [ref=e255] [cursor=pointer]
                    - button "Reply" [ref=e260] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e265] [cursor=pointer]:
                      - generic [ref=e266]: View 1 reply
                      - img "arrow" [ref=e267]
                - generic [ref=e268]:
                  - paragraph [ref=e270]: T
                  - generic [ref=e271]:
                    - generic [ref=e272]: TestATestA
                    - generic [ref=e273]:
                      - generic [ref=e274]:
                        - generic [ref=e275]: "|"
                        - generic [ref=e276]:
                          - generic [ref=e277]: Edited
                          - text: Oct 20, 2026
                      - generic [ref=e278]: "0"
                  - generic [ref=e282]: Great environmental event! 1792497487053 Updated.
                  - generic [ref=e284]:
                    - generic [ref=e285]:
                      - button "Edit" [ref=e288] [cursor=pointer]
                      - button "Delete" [ref=e293] [cursor=pointer]
                    - button "Reply" [ref=e298] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e303] [cursor=pointer]:
                      - generic [ref=e304]: View 1 reply
                      - img "arrow" [ref=e305]
                - generic [ref=e306]:
                  - paragraph [ref=e308]: T
                  - generic [ref=e309]:
                    - generic [ref=e310]: TestATestA
                    - generic [ref=e311]:
                      - generic [ref=e312]:
                        - generic [ref=e313]: "|"
                        - generic [ref=e314]:
                          - generic [ref=e315]: Edited
                          - text: Oct 20, 2026
                      - generic [ref=e316]: "0"
                  - generic [ref=e320]: Great environmental event! 1792497476623 Updated.
                  - generic [ref=e322]:
                    - generic [ref=e323]:
                      - button "Edit" [ref=e326] [cursor=pointer]
                      - button "Delete" [ref=e331] [cursor=pointer]
                    - button "Reply" [ref=e336] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e341] [cursor=pointer]:
                      - generic [ref=e342]: View 1 reply
                      - img "arrow" [ref=e343]
                - generic [ref=e344]:
                  - paragraph [ref=e346]: T
                  - generic [ref=e347]:
                    - generic [ref=e348]: TestATestA
                    - generic [ref=e349]:
                      - generic [ref=e350]:
                        - generic [ref=e351]: "|"
                        - generic [ref=e352]:
                          - generic [ref=e353]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e354]: "0"
                  - generic [ref=e358]: Great environmental event! 1792156685603 Updated.
                  - generic [ref=e360]:
                    - generic [ref=e361]:
                      - button "Edit" [ref=e364] [cursor=pointer]
                      - button "Delete" [ref=e369] [cursor=pointer]
                    - button "Reply" [ref=e374] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e379] [cursor=pointer]:
                      - generic [ref=e380]: View 1 reply
                      - img "arrow" [ref=e381]
                - generic [ref=e382]:
                  - paragraph [ref=e384]: T
                  - generic [ref=e385]:
                    - generic [ref=e386]: TestATestA
                    - generic [ref=e387]:
                      - generic [ref=e388]:
                        - generic [ref=e389]: "|"
                        - generic [ref=e390]:
                          - generic [ref=e391]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e392]: "0"
                  - generic [ref=e396]: Great environmental event! 1792156671880 Updated.
                  - generic [ref=e398]:
                    - generic [ref=e399]:
                      - button "Edit" [ref=e402] [cursor=pointer]
                      - button "Delete" [ref=e407] [cursor=pointer]
                    - button "Reply" [ref=e412] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e417] [cursor=pointer]:
                      - generic [ref=e418]: View 1 reply
                      - img "arrow" [ref=e419]
                - generic [ref=e420]:
                  - paragraph [ref=e422]: T
                  - generic [ref=e423]:
                    - generic [ref=e424]: TestATestA
                    - generic [ref=e425]:
                      - generic [ref=e426]:
                        - generic [ref=e427]: "|"
                        - generic [ref=e428]:
                          - generic [ref=e429]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e430]: "0"
                  - generic [ref=e434]: Great environmental event! 1792156650037 Updated.
                  - generic [ref=e436]:
                    - generic [ref=e437]:
                      - button "Edit" [ref=e440] [cursor=pointer]
                      - button "Delete" [ref=e445] [cursor=pointer]
                    - button "Reply" [ref=e450] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e455] [cursor=pointer]:
                      - generic [ref=e456]: View 1 reply
                      - img "arrow" [ref=e457]
                - generic [ref=e458]:
                  - paragraph [ref=e460]: T
                  - generic [ref=e461]:
                    - generic [ref=e462]: TestATestA
                    - generic [ref=e463]:
                      - generic [ref=e464]:
                        - generic [ref=e465]: "|"
                        - generic [ref=e466]:
                          - generic [ref=e467]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e468]: "0"
                  - generic [ref=e472]: Great environmental event! 1792141492302 Updated.
                  - generic [ref=e474]:
                    - generic [ref=e475]:
                      - button "Edit" [ref=e478] [cursor=pointer]
                      - button "Delete" [ref=e483] [cursor=pointer]
                    - button "Reply" [ref=e488] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e493] [cursor=pointer]:
                      - generic [ref=e494]: View 1 reply
                      - img "arrow" [ref=e495]
                - generic [ref=e496]:
                  - paragraph [ref=e498]: T
                  - generic [ref=e499]:
                    - generic [ref=e500]: TestATestA
                    - generic [ref=e501]:
                      - generic [ref=e502]:
                        - generic [ref=e503]: "|"
                        - generic [ref=e504]:
                          - generic [ref=e505]: Edited
                          - text: Oct 16, 2026
                      - generic [ref=e506]: "0"
                  - generic [ref=e510]: Great environmental event! 1792141472786 Updated.
                  - generic [ref=e512]:
                    - generic [ref=e513]:
                      - button "Edit" [ref=e516] [cursor=pointer]
                      - button "Delete" [ref=e521] [cursor=pointer]
                    - button "Reply" [ref=e526] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e531] [cursor=pointer]:
                      - generic [ref=e532]: View 1 reply
                      - img "arrow" [ref=e533]
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
  5   | 
  6   | test.describe('Event Details — comments', () => {
  7   |   test.beforeEach(async ({ authenticatedUser, eventDetailsPage }) => {
  8   |     void authenticatedUser;
  9   | 
  10  |     await eventDetailsPage.navigateToEventDetails(EVENT_ID);
  11  |     await eventDetailsPage.waitForDetailsPage();
  12  |     await eventDetailsPage.header.switchLanguage(Language.En);
  13  |   });
  14  | 
  15  |   test('TC-13 Verify adding, editing and replying to a comment on Event Details', async ({
  16  |     eventDetailsPage,
  17  |   }) => {
  18  |     const { comments, header } = eventDetailsPage;
  19  | 
  20  |     const runId = Date.now();
  21  |     const commentText = `Great environmental event! ${runId}`;
  22  |     const updatedCommentText = `${commentText} Updated.`;
  23  |     const replyText = `Thank you for the event! ${runId}`;
  24  | 
  25  |     const currentUserName = (await header.userMenuDropdown.innerText()).trim();
  26  |     const today = new Date().toLocaleDateString('en-US', {
  27  |       month: 'short',
  28  |       day: 'numeric',
  29  |       year: 'numeric',
  30  |     });
  31  | 
  32  |     let commentsCountBefore = 0;
  33  | 
  34  |     await test.step('1: Scroll to the Comments section', async () => {
  35  |       await eventDetailsPage.scrollToComments();
  36  | 
  37  |       expect(await comments.isCommentsSectionVisible()).toBe(true);
  38  |     });
  39  | 
  40  |     await test.step('2: Verify the comment input field and "Comment" button', async () => {
  41  |       expect(await comments.isCommentInputVisible()).toBe(true);
  42  |       expect(await comments.isSubmitCommentButtonVisible()).toBe(true);
  43  |     });
  44  | 
  45  |     await test.step('3: Note the current number of comments', async () => {
  46  |       commentsCountBefore = await comments.getTotalCommentsCount();
  47  |     });
  48  | 
  49  |     await test.step('4: Enter a valid comment', async () => {
  50  |       await comments.fillComment(commentText);
  51  | 
  52  |       expect(await comments.getCommentInputText()).toBe(commentText);
  53  |       await expect.poll(() => comments.isSubmitCommentButtonEnabled()).toBe(true);
  54  |     });
  55  | 
  56  |     await test.step('5: Click the "Comment" button', async () => {
  57  |       await comments.clickSubmitComment();
  58  | 
> 59  |       await expect.poll(() => comments.getTotalCommentsCount()).toBe(commentsCountBefore + 1);
      |                                                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  60  |     });
  61  | 
  62  |     const comment = await comments.getCommentByText(commentText);
  63  | 
  64  |     await test.step('6: Verify the added comment', async () => {
  65  |       expect(await comment.isCommentVisible()).toBe(true);
  66  |       expect(await comment.getCommentText()).toBe(commentText);
  67  |     });
  68  | 
  69  |     await test.step('7: Verify the comment author and date', async () => {
  70  |       expect(await comment.getCommentAuthorName()).toBe(currentUserName);
  71  |       expect(await comment.isCommentAvatarVisible()).toBe(true);
  72  |       expect(await comment.getCommentDate()).toBe(today);
  73  |     });
  74  | 
  75  |     await test.step('8: Verify the comment action controls', async () => {
  76  |       expect(await comment.isEditCommentButtonVisible()).toBe(true);
  77  |       expect(await comment.isDeleteCommentButtonVisible()).toBe(true);
  78  |       expect(await comment.isReplyToCommentButtonVisible()).toBe(true);
  79  |     });
  80  | 
  81  |     await test.step('9: Verify Like and Dislike controls', async () => {
  82  |       expect(await comment.isCommentLikeIconVisible()).toBe(true);
  83  |       expect(await comment.isCommentDislikeIconVisible()).toBe(true);
  84  |     });
  85  | 
  86  |     await test.step('10: Verify the comment count', async () => {
  87  |       expect(await comments.getTotalCommentsCount()).toBe(commentsCountBefore + 1);
  88  |     });
  89  | 
  90  |     await test.step('11: Click the "Edit" control for the added comment', async () => {
  91  |       await comment.clickEditComment();
  92  | 
  93  |       await expect.poll(() => comment.isEditCommentInputVisible()).toBe(true);
  94  |       expect(await comment.getEditCommentInputText()).toBe(commentText);
  95  |       expect(await comment.isSaveCommentChangesButtonVisible()).toBe(true);
  96  |       expect(await comment.isCancelCommentEditButtonVisible()).toBe(true);
  97  |     });
  98  | 
  99  |     await test.step('12: Modify the comment text', async () => {
  100 |       await comment.fillEditComment(updatedCommentText);
  101 | 
  102 |       expect(await comment.getEditCommentInputText()).toBe(updatedCommentText);
  103 |     });
  104 | 
  105 |     await test.step('13: Click "Save changes"', async () => {
  106 |       await comment.clickSaveCommentChanges();
  107 | 
  108 |       await expect.poll(() => comment.isEditCommentInputVisible()).toBe(false);
  109 |       await expect.poll(() => comment.getCommentText()).toBe(updatedCommentText);
  110 |     });
  111 | 
  112 |     await test.step('14: Click "Reply"', async () => {
  113 |       await comment.clickReplyToComment();
  114 | 
  115 |       await expect.poll(() => comment.isReplyInputVisible()).toBe(true);
  116 |       expect(await comment.isSubmitReplyButtonVisible()).toBe(true);
  117 |     });
  118 | 
  119 |     await test.step('15: Enter and submit a reply', async () => {
  120 |       await comment.fillReply(replyText);
  121 |       await expect.poll(() => comment.isSubmitReplyButtonEnabled()).toBe(true);
  122 |       await comment.clickSubmitReply();
  123 | 
  124 |       await expect.poll(() => comment.getDisplayedRepliesCount()).toBe(1);
  125 |     });
  126 | 
  127 |     await test.step('16: Verify the added reply', async () => {
  128 |       const reply = comment.getReply(0);
  129 | 
  130 |       expect(await reply.getCommentText()).toBe(replyText);
  131 |       expect(await reply.getCommentAuthorName()).toBe(currentUserName);
  132 |       expect(await reply.isCommentAvatarVisible()).toBe(true);
  133 |     });
  134 |   });
  135 | });
  136 | 
```