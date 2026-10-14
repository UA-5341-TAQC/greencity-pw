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
                  - paragraph [ref=e138]: 71 comments
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
                        - generic [ref=e167]: Oct 14, 2026
                      - generic [ref=e168]: "0"
                  - generic [ref=e172]: Great environmental event! 1791967948247
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
                          - text: Oct 14, 2026
                      - generic [ref=e202]: "0"
                  - generic [ref=e206]: Great environmental event! 1791967943766 Updated.
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
                        - generic [ref=e238]: Oct 14, 2026
                      - generic [ref=e239]: "0"
                  - generic [ref=e243]: Great environmental event! 1791967938122
                  - generic [ref=e245]:
                    - generic [ref=e246]:
                      - button "Edit" [ref=e249] [cursor=pointer]
                      - button "Delete" [ref=e254] [cursor=pointer]
                    - button "Reply" [ref=e259] [cursor=pointer]
                - generic [ref=e263]:
                  - paragraph [ref=e265]: T
                  - generic [ref=e266]:
                    - generic [ref=e267]: TestATestA
                    - generic [ref=e268]:
                      - generic [ref=e269]:
                        - generic [ref=e270]: "|"
                        - generic [ref=e271]:
                          - generic [ref=e272]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e273]: "0"
                  - generic [ref=e277]: Great environmental event! 1791963886614 Updated.
                  - generic [ref=e279]:
                    - generic [ref=e280]:
                      - button "Edit" [ref=e283] [cursor=pointer]
                      - button "Delete" [ref=e288] [cursor=pointer]
                    - button "Reply" [ref=e293] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e298] [cursor=pointer]:
                      - generic [ref=e299]: View 1 reply
                      - img "arrow" [ref=e300]
                - generic [ref=e301]:
                  - paragraph [ref=e303]: T
                  - generic [ref=e304]:
                    - generic [ref=e305]: TestATestA
                    - generic [ref=e306]:
                      - generic [ref=e307]:
                        - generic [ref=e308]: "|"
                        - generic [ref=e309]:
                          - generic [ref=e310]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e311]: "0"
                  - generic [ref=e315]: Great environmental event! 1791963868858 Updated.
                  - generic [ref=e317]:
                    - generic [ref=e318]:
                      - button "Edit" [ref=e321] [cursor=pointer]
                      - button "Delete" [ref=e326] [cursor=pointer]
                    - button "Reply" [ref=e331] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e336] [cursor=pointer]:
                      - generic [ref=e337]: View 1 reply
                      - img "arrow" [ref=e338]
                - generic [ref=e339]:
                  - paragraph [ref=e341]: T
                  - generic [ref=e342]:
                    - generic [ref=e343]: TestATestA
                    - generic [ref=e344]:
                      - generic [ref=e345]:
                        - generic [ref=e346]: "|"
                        - generic [ref=e347]:
                          - generic [ref=e348]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e349]: "0"
                  - generic [ref=e353]: Great environmental event! 1791963855822 Updated.
                  - generic [ref=e355]:
                    - generic [ref=e356]:
                      - button "Edit" [ref=e359] [cursor=pointer]
                      - button "Delete" [ref=e364] [cursor=pointer]
                    - button "Reply" [ref=e369] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e374] [cursor=pointer]:
                      - generic [ref=e375]: View 1 reply
                      - img "arrow" [ref=e376]
                - generic [ref=e377]:
                  - paragraph [ref=e379]: T
                  - generic [ref=e380]:
                    - generic [ref=e381]: TestATestA
                    - generic [ref=e382]:
                      - generic [ref=e383]:
                        - generic [ref=e384]: "|"
                        - generic [ref=e385]:
                          - generic [ref=e386]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e387]: "0"
                  - generic [ref=e391]: Great environmental event! 1791962656278 Updated.
                  - generic [ref=e393]:
                    - generic [ref=e394]:
                      - button "Edit" [ref=e397] [cursor=pointer]
                      - button "Delete" [ref=e402] [cursor=pointer]
                    - button "Reply" [ref=e407] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e412] [cursor=pointer]:
                      - generic [ref=e413]: View 1 reply
                      - img "arrow" [ref=e414]
                - generic [ref=e415]:
                  - paragraph [ref=e417]: T
                  - generic [ref=e418]:
                    - generic [ref=e419]: TestATestA
                    - generic [ref=e420]:
                      - generic [ref=e421]:
                        - generic [ref=e422]: "|"
                        - generic [ref=e423]:
                          - generic [ref=e424]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e425]: "0"
                  - generic [ref=e429]: Great environmental event! 1791962637586 Updated.
                  - generic [ref=e431]:
                    - generic [ref=e432]:
                      - button "Edit" [ref=e435] [cursor=pointer]
                      - button "Delete" [ref=e440] [cursor=pointer]
                    - button "Reply" [ref=e445] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e450] [cursor=pointer]:
                      - generic [ref=e451]: View 1 reply
                      - img "arrow" [ref=e452]
                - generic [ref=e453]:
                  - paragraph [ref=e455]: T
                  - generic [ref=e456]:
                    - generic [ref=e457]: TestATestA
                    - generic [ref=e458]:
                      - generic [ref=e459]:
                        - generic [ref=e460]: "|"
                        - generic [ref=e461]:
                          - generic [ref=e462]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e463]: "0"
                  - generic [ref=e467]: Great environmental event! 1791962615767 Updated.
                  - generic [ref=e469]:
                    - generic [ref=e470]:
                      - button "Edit" [ref=e473] [cursor=pointer]
                      - button "Delete" [ref=e478] [cursor=pointer]
                    - button "Reply" [ref=e483] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e488] [cursor=pointer]:
                      - generic [ref=e489]: View 1 reply
                      - img "arrow" [ref=e490]
                - generic [ref=e491]:
                  - paragraph [ref=e493]: A
                  - generic [ref=e494]:
                    - generic [ref=e495]: AnanasTest
                    - generic [ref=e496]:
                      - generic [ref=e497]:
                        - generic [ref=e498]: "|"
                        - generic [ref=e499]:
                          - generic [ref=e500]: Edited
                          - text: Oct 14, 2026
                      - generic [ref=e501]: "0"
                  - generic [ref=e505]: Great environmental event! 1791962307517 Updated.
                  - generic [ref=e507]:
                    - button "Like" [ref=e510] [cursor=pointer]
                    - button "Reply" [ref=e515] [cursor=pointer]
                    - button "View 1 reply arrow" [ref=e520] [cursor=pointer]:
                      - generic [ref=e521]: View 1 reply
                      - img "arrow" [ref=e522]
              - generic [ref=e526]:
                - generic [ref=e527] [cursor=pointer]
                - generic [ref=e531]: "1"
                - generic [ref=e533]: "2"
                - generic [ref=e535]: "3"
                - generic [ref=e537]: "4"
                - generic [ref=e539] [cursor=pointer]
          - contentinfo [ref=e543]:
            - generic [ref=e544]:
              - generic [ref=e545]:
                - link [ref=e547] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e548]
                - navigation [ref=e549]:
                  - menu [ref=e550]:
                    - listitem [ref=e551]:
                      - link "Eco news" [ref=e552] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e553]:
                      - link "Events" [ref=e554] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e555]:
                      - link "Places" [ref=e556] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e557]:
                      - link "About Us" [ref=e558] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e559]:
                      - link "My Space" [ref=e560] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e561]:
                      - link "UBS Courier" [ref=e562] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e563]:
                    - listitem [ref=e564]:
                      - paragraph [ref=e565]: Follow us
                    - listitem [ref=e566]:
                      - link [ref=e567] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e568]
                      - link [ref=e569] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e570]
                      - link [ref=e571] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e572]
                      - link [ref=e573] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e574]
                      - link [ref=e575] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e576]
              - generic [ref=e577]: © Copyright 2026. Green City.
    - button [ref=e578] [cursor=pointer]:
      - img "chat" [ref=e579]
  - generic [ref=e580]: Welcome to the search window
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