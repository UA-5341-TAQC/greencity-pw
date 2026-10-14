# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-11-event-details-save.spec.ts >> Event Details Save >> TC-11: verify a registered user can save an event from Event Details
- Location: tests/ui/tc-11-event-details-save.spec.ts:6:3

# Error details

```
Error: response.text: Protocol error (Network.getResponseBody): Missing content of resource for given requestId
Response body is not available for a response that was navigated away from. Read response.body() before triggering any navigation.
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
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
              - /url: "#/greenCity/events/210/null"
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
                - button "Unsave event" [ref=e130] [cursor=pointer]
              - generic [ref=e131]:
                - generic [ref=e132]: Description
                - generic [ref=e133]: This is a new detailed description generated by automated script. Validating edit functionality.
            - generic [ref=e134]:
              - generic [ref=e135]:
                - generic [ref=e136]:
                  - paragraph [ref=e137]: Comments
                  - paragraph [ref=e138]: 65 comments
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
                          - text: Oct 14, 2026
                      - generic [ref=e169]: "0"
                  - generic [ref=e173]: Great environmental event! 1791963868858 Updated.
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
                          - text: Oct 14, 2026
                      - generic [ref=e207]: "0"
                  - generic [ref=e211]: Great environmental event! 1791963855822 Updated.
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
                          - text: Oct 14, 2026
                      - generic [ref=e245]: "0"
                  - generic [ref=e249]: Great environmental event! 1791962656278 Updated.
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
                          - text: Oct 14, 2026
                      - generic [ref=e283]: "0"
                  - generic [ref=e287]: Great environmental event! 1791962637586 Updated.
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
                          - text: Oct 14, 2026
                      - generic [ref=e321]: "0"
                  - generic [ref=e325]: Great environmental event! 1791962615767 Updated.
                  - generic [ref=e327]:
                    - generic [ref=e328]:
                      - button "Edit" [ref=e331] [cursor=pointer]
                      - button "Delete" [ref=e336] [cursor=pointer]
                    - button "Reply" [ref=e341] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e346] [cursor=pointer]:
                      - generic [ref=e347]: View 1 reply
                      - img "arrow" [ref=e348]
                - generic [ref=e349]:
                  - paragraph [ref=e351]: A
                  - generic [ref=e352]:
                    - generic [ref=e353]: AnanasTest
                    - generic [ref=e354]:
                      - generic [ref=e355]:
                        - generic [ref=e356]: "|"
                        - generic [ref=e357]:
                          - generic [ref=e358]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e359]: "0"
                  - generic [ref=e363]: Great environmental event! 1791962307517 Updated.
                  - generic [ref=e365]:
                    - button "Like" [ref=e368] [cursor=pointer]
                    - button "Reply" [ref=e373] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e378] [cursor=pointer]:
                      - generic [ref=e379]: View 1 reply
                      - img "arrow" [ref=e380]
                - generic [ref=e381]:
                  - paragraph [ref=e383]: A
                  - generic [ref=e384]:
                    - generic [ref=e385]: AnanasTest
                    - generic [ref=e386]:
                      - generic [ref=e387]:
                        - generic [ref=e388]: "|"
                        - generic [ref=e389]:
                          - generic [ref=e390]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e391]: "0"
                  - generic [ref=e395]: Great environmental event! 1791962266084 Updated.
                  - generic [ref=e397]:
                    - button "Like" [ref=e400] [cursor=pointer]
                    - button "Reply" [ref=e405] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e410] [cursor=pointer]:
                      - generic [ref=e411]: View 1 reply
                      - img "arrow" [ref=e412]
                - generic [ref=e413]:
                  - paragraph [ref=e415]: A
                  - generic [ref=e416]:
                    - generic [ref=e417]: AnanasTest
                    - generic [ref=e418]:
                      - generic [ref=e419]:
                        - generic [ref=e420]: "|"
                        - generic [ref=e421]:
                          - generic [ref=e422]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e423]: "0"
                  - generic [ref=e427]: Great environmental event! 1791962229445 Updated.
                  - generic [ref=e429]:
                    - button "Like" [ref=e432] [cursor=pointer]
                    - button "Reply" [ref=e437] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e442] [cursor=pointer]:
                      - generic [ref=e443]: View 1 reply
                      - img "arrow" [ref=e444]
                - generic [ref=e445]:
                  - paragraph [ref=e447]: A
                  - generic [ref=e448]:
                    - generic [ref=e449]: AnanasTest
                    - generic [ref=e450]:
                      - generic [ref=e451]:
                        - generic [ref=e452]: "|"
                        - generic [ref=e453]:
                          - generic [ref=e454]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e455]: "0"
                  - generic [ref=e459]: Great environmental event! 1791960577359 Updated.
                  - generic [ref=e461]:
                    - button "Like" [ref=e464] [cursor=pointer]
                    - button "Reply" [ref=e469] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e474] [cursor=pointer]:
                      - generic [ref=e475]: View 1 reply
                      - img "arrow" [ref=e476]
                - generic [ref=e477]:
                  - paragraph [ref=e479]: A
                  - generic [ref=e480]:
                    - generic [ref=e481]: AnanasTest
                    - generic [ref=e482]:
                      - generic [ref=e483]:
                        - generic [ref=e484]: "|"
                        - generic [ref=e485]:
                          - generic [ref=e486]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e487]: "0"
                  - generic [ref=e491]: Great environmental event! 1791960511692 Updated.
                  - generic [ref=e493]:
                    - button "Like" [ref=e496] [cursor=pointer]
                    - button "Reply" [ref=e501] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e506] [cursor=pointer]:
                      - generic [ref=e507]: View 1 reply
                      - img "arrow" [ref=e508]
              - generic [ref=e512]:
                - generic [ref=e513] [cursor=pointer]
                - generic [ref=e517]: "1"
                - generic [ref=e519]: "2"
                - generic [ref=e521]: "3"
                - generic [ref=e523]: "4"
                - generic [ref=e525] [cursor=pointer]
          - contentinfo [ref=e529]:
            - generic [ref=e530]:
              - generic [ref=e531]:
                - link [ref=e533] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e534]
                - navigation [ref=e535]:
                  - menu [ref=e536]:
                    - listitem [ref=e537]:
                      - link "Eco news" [ref=e538] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e539]:
                      - link "Events" [ref=e540] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e541]:
                      - link "Places" [ref=e542] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e543]:
                      - link "About Us" [ref=e544] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e545]:
                      - link "My Space" [ref=e546] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e547]:
                      - link "UBS Courier" [ref=e548] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e549]:
                    - listitem [ref=e550]:
                      - paragraph [ref=e551]: Follow us
                    - listitem [ref=e552]:
                      - link [ref=e553] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e554]
                      - link [ref=e555] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e556]
                      - link [ref=e557] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e558]
                      - link [ref=e559] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e560]
                      - link [ref=e561] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e562]
              - generic [ref=e563]: © Copyright 2026. Green City.
    - button [ref=e564] [cursor=pointer]:
      - img "chat" [ref=e565]
  - generic [ref=e566]: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | import { EventDetailsPage } from '@/pages/event-details-page';
  3  | import env from '@/config/env';
  4  | 
  5  | test.describe('Event Details Save', () => {
  6  |   test('TC-11: verify a registered user can save an event from Event Details', async ({
  7  |     authenticatedPage,
  8  |   }) => {
  9  |     test.setTimeout(60000);
  10 |     const eventDetailsPage = new EventDetailsPage(authenticatedPage);
  11 |     const eventId = 210;
  12 |     const targetTitle = 'Updated Automation Event 2026';
  13 | 
  14 |     // Reset persisted favorite state because the Details button can be stale.
  15 |     const accessToken = await authenticatedPage.evaluate(() =>
  16 |       window.localStorage.getItem('accessToken')
  17 |     );
  18 |     expect(accessToken, 'Authenticated access token is missing').toBeTruthy();
  19 |     const resetFavoriteResponse = await authenticatedPage.request.delete(
  20 |       `${env.API_GREENCITY_BASE_URL}/events/${eventId}/favorites`,
  21 |       { headers: { Authorization: `Bearer ${accessToken}` } }
  22 |     );
  23 |     const resetStatus = resetFavoriteResponse.status();
  24 |     expect(
  25 |       [200, 204, 404],
  26 |       `Could not reset favorite state: ${resetStatus} ${await resetFavoriteResponse.text()}`
  27 |     ).toContain(resetStatus);
  28 | 
  29 |     await eventDetailsPage.navigateToEventDetails(eventId);
  30 |     await eventDetailsPage.waitForDetailsPage();
  31 |     await expect.poll(() => eventDetailsPage.getEventTitle()).toBe(targetTitle);
  32 | 
  33 |     const saveButton = authenticatedPage.getByRole('button', {
  34 |       name: 'Save event',
  35 |       exact: true,
  36 |     });
  37 |     await expect(saveButton).toBeVisible();
  38 |     await expect(saveButton).toBeEnabled();
  39 | 
  40 |     const saveResponsePromise = authenticatedPage.waitForResponse(
  41 |       (response) =>
  42 |         response.request().method() === 'POST' &&
  43 |         response.url().includes(`/events/${eventId}/favorites`),
  44 |       { timeout: 15000 }
  45 |     );
  46 |     await eventDetailsPage.clickSaveEvent();
  47 |     const saveResponse = await saveResponsePromise;
> 48 |     const saveResponseBody = await saveResponse.text();
     |                                                 ^ Error: response.text: Protocol error (Network.getResponseBody): Missing content of resource for given requestId
  49 |     expect(
  50 |       saveResponse.ok(),
  51 |       `Save API returned ${saveResponse.status()}: ${saveResponseBody}`
  52 |     ).toBe(true);
  53 | 
  54 |     await expect
  55 |       .poll(() => eventDetailsPage.isEventSaved(), {
  56 |         timeout: 10000,
  57 |         message: 'Save event did not change to Unsave event',
  58 |       })
  59 |       .toBe(true);
  60 |   });
  61 | });
  62 | 
```