# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-23-edit-event-images.spec.ts >> TC-23 Edit event image upload validations >> Verify image upload validations (minimum limit, invalid format, maximum limit)
- Location: tests/ui/tc-23-edit-event-images.spec.ts:6:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 2
Received: 1
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
          - generic [ref=e48]:
            - generic [ref=e50]:
              - link "Back to Events" [ref=e52] [cursor=pointer]:
                - /url: "#/greenCity/events"
              - heading "Edit Event" [level=3] [ref=e55]
              - paragraph [ref=e56]: Please provide as much details as you can - place and time of event, the goal of gathering etc. You can come back and update event anytime after publishing
            - generic [ref=e57]:
              - generic [ref=e60]:
                - generic [ref=e61]:
                  - generic [ref=e62]:
                    - generic [ref=e63]:
                      - paragraph [ref=e64]: Title
                      - paragraph
                    - generic [ref=e67]:
                      - generic [ref=e68]:
                        - text: Enter a name for the event
                        - generic [aria-hidden] [ref=e69]: "*"
                      - textbox "Enter a name for the event" [ref=e71]: Test Title Positive 63921357
                  - generic [ref=e72]:
                    - paragraph [ref=e73]: Duration
                    - combobox "1 day" [ref=e78] [cursor=pointer]
                - generic [ref=e87]:
                  - paragraph [ref=e88]: Initiative type
                  - listbox [ref=e89]:
                    - option "Economic" [selected] [ref=e91] [cursor=pointer]
                    - option "Social" [ref=e95] [cursor=pointer]
                    - option "Environmental" [ref=e99] [cursor=pointer]
                - generic [ref=e102]:
                  - paragraph [ref=e103]: Event type
                  - combobox "Open" [ref=e108] [cursor=pointer]
                  - generic [ref=e119] [cursor=pointer]:
                    - generic [ref=e120]:
                      - text: Invite
                      - generic [aria-hidden] [ref=e121]: "*"
                    - combobox "Invite" [ref=e123]
                - generic [ref=e131]:
                  - generic [ref=e132]:
                    - paragraph [ref=e133]: Events Description
                    - paragraph [ref=e134]: Must be minimum 10 and maximum 63 206 symbols
                  - generic [ref=e135]:
                    - generic [ref=e136]:
                      - generic [ref=e137]:
                        - button [ref=e138] [cursor=pointer]
                        - button [ref=e142] [cursor=pointer]
                        - button [ref=e145] [cursor=pointer]
                        - button [ref=e149] [cursor=pointer]
                      - generic [ref=e154]:
                        - button [ref=e155] [cursor=pointer]
                        - button [ref=e161] [cursor=pointer]
                      - generic [ref=e166]:
                        - button [ref=e167] [cursor=pointer]
                        - button [ref=e170] [cursor=pointer]
                      - generic [ref=e173]:
                        - button [ref=e174] [cursor=pointer]
                        - button [ref=e179] [cursor=pointer]
                      - generic [ref=e181]:
                        - button [ref=e182] [cursor=pointer]
                        - button [ref=e186] [cursor=pointer]
                      - generic [ref=e190]:
                        - button [ref=e191] [cursor=pointer]
                        - button [ref=e194] [cursor=pointer]
                      - button [ref=e198] [cursor=pointer]
                      - generic [ref=e205]:
                        - button "Normal" [ref=e206] [cursor=pointer]
                        - text: Small Normal Large Huge
                      - generic [ref=e211]:
                        - button "Normal" [ref=e212] [cursor=pointer]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e216]:
                        - button [ref=e218] [cursor=pointer]
                        - button [ref=e222] [cursor=pointer]
                      - generic [ref=e273]:
                        - button "Sans Serif" [ref=e274] [cursor=pointer]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e280] [cursor=pointer]
                      - button [ref=e283] [cursor=pointer]
                      - generic [ref=e289]:
                        - button [ref=e290] [cursor=pointer]
                        - button [ref=e295] [cursor=pointer]
                        - button [ref=e300] [cursor=pointer]
                      - button [ref=e315] [cursor=pointer]
                    - generic [ref=e321]:
                      - paragraph [ref=e323]: "This is the story of a man named Stanley. Stanley worked for a company in a big building where he was employee # 427."
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e326]:
                  - generic [ref=e327]:
                    - generic [ref=e328]:
                      - generic [ref=e329]:
                        - generic [ref=e330]: Picture
                        - generic [ref=e331]: 2/5
                      - generic [ref=e332]: Upload only PNG or JPG. File size must be less than 10MB
                    - generic [ref=e333]:
                      - generic [ref=e334]: +
                      - generic [ref=e336]:
                        - img "image-of-event" [ref=e337]
                        - generic [ref=e338]: Main
                        - img [aria-hidden] [ref=e340]: close
                        - img [aria-hidden] [ref=e342]: edit
                      - generic [ref=e343]:
                        - img "image-of-event" [ref=e344]
                        - img [aria-hidden] [ref=e346]: close
                        - img [aria-hidden] [ref=e348]: edit
                  - generic [ref=e349]:
                    - paragraph [ref=e350]: Use Greencity pictures
                    - generic [ref=e351]:
                      - img "image-of-event" [ref=e353]
                      - img "image-of-event" [ref=e355]
                      - img "image-of-event" [ref=e357]
                      - img "image-of-event" [ref=e359]
                      - img "image-of-event" [ref=e361]
              - generic [ref=e363]:
                - generic [ref=e365]:
                  - generic [ref=e366]: 1 day
                  - generic [ref=e369]:
                    - generic: Choose a date
                    - textbox "Choose a date" [ref=e372]: October 15, 2026
                    - button "Open calendar" [ref=e375] [cursor=pointer]
                  - generic [ref=e378]:
                    - generic [ref=e381]:
                      - generic [ref=e382]:
                        - text: Start Time
                        - generic [aria-hidden] [ref=e383]: "*"
                      - combobox "Start Time" [ref=e385]: 18:00
                    - heading "—" [level=5] [ref=e386]
                    - generic [ref=e389]:
                      - generic [ref=e390]:
                        - text: End Time
                        - generic [aria-hidden] [ref=e391]: "*"
                      - combobox "End Time" [ref=e393]: 20:00
                  - generic [ref=e395]:
                    - checkbox "All day" [ref=e397] [cursor=pointer]
                    - generic [ref=e398] [cursor=pointer]: All day
                - generic [ref=e400]:
                  - generic [ref=e401]:
                    - generic [ref=e403]:
                      - checkbox "Place" [ref=e405] [cursor=pointer]
                      - generic [ref=e406] [cursor=pointer]: Place
                    - generic [ref=e408]:
                      - checkbox "Online" [checked] [ref=e410] [cursor=pointer]
                      - generic [ref=e411] [cursor=pointer]: Online
                  - generic [ref=e412]:
                    - paragraph [ref=e413]: Online Link
                    - generic [ref=e416]:
                      - generic: Please add a link to the event. The link must start with http(s)://
                      - textbox "Please add a link to the event. The link must start with http(s)://" [ref=e419]:
                        - /placeholder: Enter link
                        - text: https://example.com/test-link
                    - generic [ref=e421]:
                      - checkbox "Apply to all days of the event" [ref=e423] [cursor=pointer]
                      - generic [ref=e424] [cursor=pointer]: Apply to all days of the event
            - generic [ref=e425]:
              - button "Preview" [ref=e426] [cursor=pointer]
              - button "Save event" [ref=e427] [cursor=pointer]
              - button "Cancel" [ref=e428] [cursor=pointer]
          - contentinfo [ref=e430]:
            - generic [ref=e431]:
              - generic [ref=e432]:
                - link [ref=e434] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e435]
                - navigation [ref=e436]:
                  - menu [ref=e437]:
                    - listitem [ref=e438]:
                      - link "Eco news" [ref=e439] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e440]:
                      - link "Events" [ref=e441] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e442]:
                      - link "Places" [ref=e443] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e444]:
                      - link "About Us" [ref=e445] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e446]:
                      - link "My Space" [ref=e447] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e448]:
                      - link "UBS Courier" [ref=e449] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e450]:
                    - listitem [ref=e451]:
                      - paragraph [ref=e452]: Follow us
                    - listitem [ref=e453]:
                      - link [ref=e454] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e455]
                      - link [ref=e456] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e457]
                      - link [ref=e458] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e459]
                      - link [ref=e460] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e461]
                      - link [ref=e462] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e463]
              - generic [ref=e464]: © Copyright 2026. Green City.
    - button [ref=e465] [cursor=pointer]:
      - img "chat" [ref=e466]
  - generic [ref=e467]: Welcome to the search window
  - generic [ref=e473]:
    - generic [ref=e474]: Incorrect image type. Use files in JPG or PNG format instead
    - button [ref=e476] [cursor=pointer]
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | import { TEST_VALID_IMAGE_PATH, TEST_NOT_VALID_IMAGE_PATH } from '@/assets';
  3  | import { createSimpleEvent } from '@/helpers/';
  4  | 
  5  | test.describe('TC-23 Edit event image upload validations', () => {
  6  |   test('Verify image upload validations (minimum limit, invalid format, maximum limit)', async ({
  7  |     authenticatedPage,
  8  |     eventsPage,
  9  |     editEventPage,
  10 |     createEventPage,
  11 |   }) => {
  12 |     await test.step('Open the Events list as an authenticated user', async () => {
  13 |       expect(await eventsPage.header.isLoggedIn()).toBe(true);
  14 |       await eventsPage.navigateToEventsPage();
  15 |       await eventsPage.waitForEventsPage();
  16 | 
  17 |       await expect(authenticatedPage).toHaveURL(/#\/greenCity\/events\/?$/);
  18 |     });
  19 | 
  20 |     await test.step('Open the edit form for an author event', async () => {
  21 |       const ownedEventCard = await eventsPage.getFirstEditableEventCard(() =>
  22 |         createSimpleEvent(authenticatedPage, eventsPage, createEventPage)
  23 |       );
  24 |       await ownedEventCard.waitForVisible();
  25 |       expect(await ownedEventCard.isEditEventButtonVisible()).toBe(true);
  26 |       expect(await ownedEventCard.isEditEventButtonEnabled()).toBe(true);
  27 | 
  28 |       await ownedEventCard.clickEditEvent();
  29 | 
  30 |       await expect(authenticatedPage).toHaveURL(/create-update-event\/\d+$/);
  31 |       await editEventPage.waitForEditEventPage();
  32 |     });
  33 | 
  34 |     await test.step('1: Verify minimum limit - attempt to delete the only image', async () => {
  35 |       const initialImageCount = await editEventPage.getAttachedImagesCount();
  36 |       expect(initialImageCount).toBe(1);
  37 | 
  38 |       await editEventPage.deleteUploadedImage();
  39 | 
  40 |       const toastMessage = await editEventPage.getToastMessage();
  41 |       expect(toastMessage).toBe('1 image minimum');
  42 | 
  43 |       const imageCountAfterDelete = await editEventPage.getAttachedImagesCount();
  44 |       expect(imageCountAfterDelete).toBe(1);
  45 |     });
  46 | 
  47 |     await test.step('2: Verify invalid format rejection', async () => {
  48 |       await editEventPage.uploadImage(TEST_NOT_VALID_IMAGE_PATH);
  49 | 
  50 |       const toastMessage = await editEventPage.getToastMessage();
  51 |       expect(toastMessage).toBe('Incorrect image type. Use files in JPG or PNG format instead');
  52 | 
  53 |       const imageCountAfterInvalidUpload = await editEventPage.getAttachedImagesCount();
  54 |       expect(imageCountAfterInvalidUpload).toBe(1);
  55 |     });
  56 | 
  57 |     await test.step('3: Upload valid custom image', async () => {
  58 |       await editEventPage.uploadImage(TEST_VALID_IMAGE_PATH);
  59 | 
  60 |       await editEventPage.waitForImageUpload(2);
  61 | 
  62 |       const imageCounter = await editEventPage.getImageCounter();
  63 |       expect(imageCounter).toBe('2/5');
  64 | 
  65 |       const currentImageCount = await editEventPage.getAttachedImagesCount();
> 66 |       expect(currentImageCount).toBe(2);
     |                                 ^ Error: expect(received).toBe(expected) // Object.is equality
  67 |     });
  68 | 
  69 |     await test.step('4: Add default Greencity images until maximum limit', async () => {
  70 |       for (let i = 0; i < 3; i++) {
  71 |         await editEventPage.selectDefaultImageByIndex(i);
  72 |         await editEventPage.waitForImageUpload(i + 3);
  73 |       }
  74 | 
  75 |       const imageCounter = await editEventPage.getImageCounter();
  76 |       expect(imageCounter).toBe('5/5');
  77 | 
  78 |       const finalImageCount = await editEventPage.getAttachedImagesCount();
  79 |       expect(finalImageCount).toBe(5);
  80 |     });
  81 | 
  82 |     await test.step('5: Verify maximum limit - attempt to add 6th image', async () => {
  83 |       await editEventPage.selectDefaultImageByIndex(0);
  84 | 
  85 |       const toastMessage = await editEventPage.getToastMessage();
  86 |       expect(toastMessage).toBe('You can upload max 5 photos');
  87 | 
  88 |       const imageCountAfterMaxAttempt = await editEventPage.getAttachedImagesCount();
  89 |       expect(imageCountAfterMaxAttempt).toBe(5);
  90 | 
  91 |       const imageCounter = await editEventPage.getImageCounter();
  92 |       expect(imageCounter).toBe('5/5');
  93 |     });
  94 |   });
  95 | });
  96 | 
```