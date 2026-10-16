# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-22-validation-title-description-events.spec.ts >> Events - Edit Event validation >> TC-22: Verify title and description validation and Save event state
- Location: tests/ui/tc-22-validation-title-description-events.spec.ts:8:3

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText(/required/i).last()
Expected: visible
Timeout: 10000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByText(/required/i).last() with timeout 10000ms
  - waiting for getByText(/required/i).last()

```

```yaml
- link "skip to the main content":
  - /url: .main-content
- banner "Welcome to header":
  - link "Image green city logo":
    - /url: "#/greenCity"
    - link "Image green city logo"
  - navigation:
    - tablist:
      - listitem:
        - link "Eco news":
          - /url: "#/greenCity/news"
      - listitem:
        - link "Events":
          - /url: "#/greenCity/events"
      - listitem:
        - link "Places":
          - /url: "#/greenCity/places"
      - listitem:
        - link "About us":
          - /url: "#/greenCity/about"
      - listitem:
        - link "My space":
          - /url: "#/greenCity/profile"
      - listitem:
        - link "UBS courier":
          - /url: "#/ubs"
  - menu:
    - listitem "site bookmark"
    - listitem "site notification": 99+
    - search "site search"
    - menu "language switcher":
      - option "english"
    - menu "profile options collapsed":
      - listitem: TestATestA
- link "Back to Events":
  - /url: "#/greenCity/events"
- heading "Edit Event" [level=3]
- paragraph: Please provide as much details as you can - place and time of event, the goal of gathering etc. You can come back and update event anytime after publishing
- paragraph: Title
- paragraph: 15 / 70
- text: Enter a name for the event
- textbox "Enter a name for the event": Valid Title 123
- paragraph: Duration
- combobox "1 day"
- paragraph: Initiative type
- listbox:
  - option "Economic" [selected]
  - option "Social"
  - option "Environmental"
- paragraph: Event type
- combobox "Open"
- text: Invite
- combobox "Invite"
- paragraph: Events Description
- paragraph: Must be minimum 10 and maximum 63 206 symbols
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button "Normal":
  - text: Normal
  - img
- button "Normal":
  - text: Normal
  - img
- button:
  - img
- button:
  - img
- button "Sans Serif":
  - text: Sans Serif
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- button:
  - img
- text: e.g. Short description of event, agenda for event
- paragraph
- paragraph
- text: Picture 1/5 Upload only PNG or JPG. File size must be less than 10MB +
- img "image-of-event"
- text: Main
- paragraph: Use Greencity pictures
- img "image-of-event"
- img "image-of-event"
- img "image-of-event"
- img "image-of-event"
- img "image-of-event"
- text: 1 day Choose a date
- textbox "Choose a date": October 17, 2026
- button "Open calendar"
- text: Start Time
- combobox "Start Time": 18:00
- heading "—" [level=5]
- text: End Time
- combobox "End Time": 20:00
- checkbox "All day"
- text: All day
- checkbox "Place"
- text: Place
- checkbox "Online" [checked]
- text: Online
- paragraph: Online Link
- text: Please add a link to the event. The link must start with http(s)://
- textbox "Please add a link to the event. The link must start with http(s)://":
  - /placeholder: Enter link
  - text: https://example.com/test-link
- checkbox "Apply to all days of the event"
- text: Apply to all days of the event
- button "Preview" [disabled]
- button "Save event" [disabled]
- button "Cancel"
- contentinfo:
  - link "GreenCity home":
    - /url: "#/greenCity"
    - img "GreenCity home"
  - navigation:
    - menu:
      - listitem:
        - link "Eco news":
          - /url: "#/greenCity/news"
      - listitem:
        - link "Events":
          - /url: "#/greenCity/events"
      - listitem:
        - link "Places":
          - /url: "#/greenCity/places"
      - listitem:
        - link "About Us":
          - /url: "#/greenCity/about"
      - listitem:
        - link "My Space":
          - /url: "#/greenCity/profile/1205"
      - listitem:
        - link "UBS Courier":
          - /url: "#/ubs"
    - menu:
      - listitem:
        - paragraph: Follow us
      - listitem:
        - link "Twitter link":
          - /url: "#"
          - img "Twitter link"
        - link "LinkedIn link":
          - /url: "#"
          - img "LinkedIn link"
        - link "Facebook link":
          - /url: "#"
          - img "Facebook link"
        - link "Instagram link":
          - /url: "#"
          - img "Instagram link"
        - link "YouTube link":
          - /url: "#"
          - img "YouTube link"
  - text: © Copyright 2026. Green City.
- button "chat":
  - img "chat"
- text: Welcome to the search window
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | 
  3  | const TITLE_VALIDATION_MESSAGE = 'Enter a title up to and including 70 characters';
  4  | const DESCRIPTION_TOO_SHORT_MESSAGE = 'Not enough characters. Left: 1';
  5  | const DESCRIPTION_TOO_LONG_MESSAGE = 'The maximum character length is greater than 1';
  6  | 
  7  | test.describe('Events - Edit Event validation', () => {
  8  |   test('TC-22: Verify title and description validation and Save event state', async ({
  9  |     authenticatedPage,
  10 |     eventsPage,
  11 |     editEventPage,
  12 |   }) => {
  13 |     await eventsPage.navigateToEventsPage();
  14 |     await eventsPage.waitForEventsPage();
  15 | 
  16 |     const eventCard = await eventsPage.getFirstEditableEventCard();
  17 |     await eventCard.clickEditEvent();
  18 |     await editEventPage.waitForEditEventPage();
  19 | 
  20 |     const saveEventButton = editEventPage.saveEventButton;
  21 |     const titleValidationMessage = authenticatedPage.getByText(TITLE_VALIDATION_MESSAGE, {
  22 |       exact: true,
  23 |     });
  24 |     const titleCounter = authenticatedPage.getByText(/^70\s*\/\s*70$/, { exact: false });
  25 |     const descriptionRequiredMessage = authenticatedPage.getByText(/required/i).last();
  26 |     const descriptionTooShortMessage = authenticatedPage.getByText(DESCRIPTION_TOO_SHORT_MESSAGE, {
  27 |       exact: true,
  28 |     });
  29 |     const descriptionTooLongMessage = authenticatedPage.getByText(DESCRIPTION_TOO_LONG_MESSAGE, {
  30 |       exact: true,
  31 |     });
  32 | 
  33 |     await test.step('Verify the form starts with Save event enabled', async () => {
  34 |       await expect(saveEventButton).toBeEnabled();
  35 |     });
  36 | 
  37 |     await test.step('Clear the title and verify required length validation', async () => {
  38 |       await editEventPage.titleInput.fill('');
  39 |       await editEventPage.titleInput.press('Tab');
  40 | 
  41 |       await expect(saveEventButton).toBeDisabled();
  42 |       await expect(titleValidationMessage).toBeVisible();
  43 |     });
  44 | 
  45 |     await test.step('Enter 71 title characters and verify the 70-character limit', async () => {
  46 |       await editEventPage.titleInput.fill('');
  47 |       await editEventPage.titleInput.pressSequentially('A'.repeat(71));
  48 | 
  49 |       await expect(editEventPage.titleInput).toHaveValue('A'.repeat(70));
  50 |       await expect(titleCounter).toBeVisible();
  51 |       await expect(saveEventButton).toBeEnabled();
  52 |     });
  53 | 
  54 |     await test.step('Enter a valid title', async () => {
  55 |       await editEventPage.enterTitle('Valid Title 123');
  56 |       await editEventPage.titleInput.press('Tab');
  57 | 
  58 |       await expect(editEventPage.titleInput).toHaveValue('Valid Title 123');
  59 |       await expect(saveEventButton).toBeEnabled();
  60 |     });
  61 | 
  62 |     await test.step('Clear the description and verify its required validation', async () => {
  63 |       await editEventPage.enterDescription('');
  64 |       await editEventPage.descriptionEditor.press('Tab');
  65 | 
  66 |       await expect(saveEventButton).toBeDisabled();
> 67 |       await expect(descriptionRequiredMessage).toBeVisible();
     |                                                ^ Error: expect(locator).toBeVisible() failed
  68 |     });
  69 | 
  70 |     await test.step('Enter 9 description characters and verify the minimum length message', async () => {
  71 |       await editEventPage.enterDescription('123456789');
  72 |       await editEventPage.descriptionEditor.press('Tab');
  73 | 
  74 |       await expect(descriptionTooShortMessage).toBeVisible();
  75 |       await expect(saveEventButton).toBeDisabled();
  76 |     });
  77 | 
  78 |     await test.step('Enter 63,207 description characters and verify the maximum length message', async () => {
  79 |       await editEventPage.enterDescription('A'.repeat(63207));
  80 |       await editEventPage.descriptionEditor.press('Tab');
  81 | 
  82 |       await expect(descriptionTooLongMessage).toBeVisible();
  83 |       await expect(saveEventButton).toBeDisabled();
  84 |     });
  85 | 
  86 |     await test.step('Enter a valid 10-character description', async () => {
  87 |       await editEventPage.enterDescription('1234567890');
  88 |       await editEventPage.descriptionEditor.press('Tab');
  89 | 
  90 |       await expect(descriptionTooShortMessage).toBeHidden();
  91 |       await expect(descriptionTooLongMessage).toBeHidden();
  92 |       await expect(descriptionRequiredMessage).toBeHidden();
  93 |       await expect(saveEventButton).toBeEnabled();
  94 |     });
  95 |   });
  96 | });
  97 | 
```