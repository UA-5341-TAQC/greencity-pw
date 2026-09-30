# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tc-18-create-event-title-empty.spec.ts >> TC-18 Create event: title field (negative) >> shows title validation and character count when the title is empty
- Location: tests/tc-18-create-event-title-empty.spec.ts:4:3

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('input[formcontrolname="title"]')
    - locator resolved to <input matinput="" required="" maxlength="70" id="mat-input-0" aria-required="true" formcontrolname="title" _ngcontent-ng-c3273596860="" class="mat-mdc-input-element ng-tns-c1205077789-4 ng-untouched ng-pristine ng-invalid mat-mdc-form-field-input-control mdc-text-field__input cdk-text-field-autofill-monitored"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span aria-hidden="true" class="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c1205077789-4 ng-star-inserted"></span> from <div matformfieldnotchedoutline="" class="mdc-notched-outline ng-tns-c1205077789-4 mdc-notched-outline--upgraded ng-star-inserted">…</div> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <span aria-hidden="true" class="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c1205077789-4 ng-star-inserted"></span> from <div matformfieldnotchedoutline="" class="mdc-notched-outline ng-tns-c1205077789-4 mdc-notched-outline--upgraded ng-star-inserted">…</div> subtree intercepts pointer events
  2 × retrying click action
      - waiting 100ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ng-c3629200733="" class="header_navigation-menu">…</div> from <app-header class="ng-star-inserted" _nghost-ng-c3629200733="" _ngcontent-ng-c1194932921="">…</app-header> subtree intercepts pointer events
  4 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span aria-hidden="true" class="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c1205077789-4 ng-star-inserted"></span> from <div matformfieldnotchedoutline="" class="mdc-notched-outline ng-tns-c1205077789-4 mdc-notched-outline--upgraded ng-star-inserted">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span aria-hidden="true" class="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c1205077789-4 ng-star-inserted"></span> from <div matformfieldnotchedoutline="" class="mdc-notched-outline ng-tns-c1205077789-4 mdc-notched-outline--upgraded ng-star-inserted">…</div> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ng-c3629200733="" class="header_navigation-menu">…</div> from <app-header class="ng-star-inserted" _nghost-ng-c3629200733="" _ngcontent-ng-c1194932921="">…</app-header> subtree intercepts pointer events
    - retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div _ngcontent-ng-c3629200733="" class="header_navigation-menu">…</div> from <app-header class="ng-star-inserted" _nghost-ng-c3629200733="" _ngcontent-ng-c1194932921="">…</app-header> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
      - waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <span aria-hidden="true" class="mat-mdc-form-field-required-marker mdc-floating-label--required ng-tns-c1205077789-4 ng-star-inserted"></span> from <div matformfieldnotchedoutline="" class="mdc-notched-outline ng-tns-c1205077789-4 mdc-notched-outline--upgraded ng-star-inserted">…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

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
              - listitem "site notification" [ref=e31] [cursor=pointer]
              - search "site search" [ref=e33] [cursor=pointer]
              - menu "language switcher" [ref=e35]:
                - option "english" [ref=e36] [cursor=pointer]:
                  - generic [aria-hidden] [ref=e37]: En
              - menu "profile options collapsed" [ref=e39]:
                - listitem [ref=e40] [cursor=pointer]: Володимир
      - generic [ref=e41]:
        - generic "Tab To Main"
        - generic [ref=e42]:
          - generic [ref=e47]:
            - generic [ref=e49]:
              - link "Back to Events" [ref=e51] [cursor=pointer]:
                - /url: "#/greenCity/events"
              - heading "Create event" [level=3] [ref=e54]
              - paragraph [ref=e55]: Please provide as much details as you can - place and time of event, the goal of gathering etc. You can come back and update event anytime after publishing
            - generic [ref=e56]:
              - generic [ref=e59]:
                - generic [ref=e60]:
                  - generic [ref=e61]:
                    - generic [ref=e62]:
                      - paragraph [ref=e63]: Title
                      - paragraph
                    - generic [ref=e66]:
                      - generic [ref=e67]:
                        - text: Enter a name for the event
                        - generic [aria-hidden] [ref=e68]: "*"
                      - textbox "Enter a name for the event" [ref=e70]
                  - generic [ref=e71]:
                    - paragraph [ref=e72]: Duration
                    - combobox "1 day" [ref=e77] [cursor=pointer]
                - generic [ref=e86]:
                  - paragraph [ref=e87]: Initiative type
                  - listbox [ref=e88]:
                    - option "Economic" [ref=e90] [cursor=pointer]
                    - option "Social" [ref=e94] [cursor=pointer]
                    - option "Environmental" [ref=e98] [cursor=pointer]
                - generic [ref=e101]:
                  - paragraph [ref=e102]: Event type
                  - combobox "Open" [ref=e107] [cursor=pointer]
                  - generic [ref=e118] [cursor=pointer]:
                    - generic [ref=e119]:
                      - text: Invite
                      - generic [aria-hidden] [ref=e120]: "*"
                    - combobox "Invite" [ref=e122]
                - generic [ref=e130]:
                  - generic [ref=e131]:
                    - paragraph [ref=e132]: Events Description
                    - paragraph [ref=e133]: Must be minimum 10 and maximum 63 206 symbols
                  - generic [ref=e134]:
                    - generic [ref=e135]:
                      - generic [ref=e136]:
                        - button [ref=e137] [cursor=pointer]
                        - button [ref=e141] [cursor=pointer]
                        - button [ref=e146] [cursor=pointer]
                        - button [ref=e150] [cursor=pointer]
                      - generic [ref=e155]:
                        - button [ref=e156] [cursor=pointer]
                        - button [ref=e162] [cursor=pointer]
                      - generic [ref=e167]:
                        - button [ref=e168] [cursor=pointer]
                        - button [ref=e171] [cursor=pointer]
                      - generic [ref=e174]:
                        - button [ref=e175] [cursor=pointer]
                        - button [ref=e184] [cursor=pointer]
                      - generic [ref=e192]:
                        - button [ref=e193] [cursor=pointer]
                        - button [ref=e197] [cursor=pointer]
                      - generic [ref=e201]:
                        - button [ref=e202] [cursor=pointer]
                        - button [ref=e208] [cursor=pointer]
                      - button [ref=e215] [cursor=pointer]
                      - generic [ref=e223]:
                        - button "Normal" [ref=e224] [cursor=pointer]
                        - text: Small Normal Large Huge
                      - generic [ref=e229]:
                        - button "Normal" [ref=e230] [cursor=pointer]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e234]:
                        - button [ref=e236] [cursor=pointer]
                        - button [ref=e242] [cursor=pointer]
                      - generic [ref=e294]:
                        - button "Sans Serif" [ref=e295] [cursor=pointer]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e301] [cursor=pointer]
                      - button [ref=e307] [cursor=pointer]
                      - generic [ref=e314]:
                        - button [ref=e315] [cursor=pointer]
                        - button [ref=e320] [cursor=pointer]
                        - button [ref=e325] [cursor=pointer]
                      - button [ref=e340] [cursor=pointer]
                    - generic [ref=e346]:
                      - generic [ref=e347]:
                        - text: e.g. Short description of event, agenda for event
                        - paragraph [ref=e348]
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e351]:
                  - generic [ref=e352]:
                    - generic [ref=e353]:
                      - generic [ref=e354]:
                        - generic [ref=e355]: Picture
                        - generic [ref=e356]: 1/5
                      - generic [ref=e357]: Upload only PNG or JPG. File size must be less than 10MB
                    - generic [ref=e358]:
                      - generic [ref=e359]: +
                      - generic [ref=e361]:
                        - img "image-of-event" [ref=e362]
                        - generic [ref=e363]: Main
                        - img [aria-hidden] [ref=e365]: close
                        - img [aria-hidden] [ref=e367]: edit
                  - generic [ref=e368]:
                    - paragraph [ref=e369]: Use Greencity pictures
                    - generic [ref=e370]:
                      - img "image-of-event" [ref=e372]
                      - img "image-of-event" [ref=e374]
                      - img "image-of-event" [ref=e376]
                      - img "image-of-event" [ref=e378]
                      - img "image-of-event" [ref=e380]
              - generic [ref=e382]:
                - generic [ref=e384]:
                  - generic [ref=e385]: 1 day
                  - generic [ref=e388]:
                    - generic: Choose a date
                    - textbox "Choose a date" [ref=e391]: September 30, 2026
                    - button "Open calendar" [ref=e394] [cursor=pointer]
                  - generic [ref=e397]:
                    - generic [ref=e400]:
                      - generic [ref=e401]:
                        - text: Start Time
                        - generic [aria-hidden] [ref=e402]: "*"
                      - combobox "Start Time" [ref=e404]
                    - heading "—" [level=5] [ref=e405]
                    - generic [ref=e408]:
                      - generic [ref=e409]:
                        - text: End Time
                        - generic [aria-hidden] [ref=e410]: "*"
                      - combobox "End Time" [ref=e412]
                  - generic [ref=e414]:
                    - checkbox "All day" [ref=e416] [cursor=pointer]
                    - generic [ref=e417] [cursor=pointer]: All day
                - generic [ref=e420]:
                  - generic [ref=e422]:
                    - checkbox "Place" [ref=e424] [cursor=pointer]
                    - generic [ref=e425] [cursor=pointer]: Place
                  - generic [ref=e427]:
                    - checkbox "Online" [ref=e429] [cursor=pointer]
                    - generic [ref=e430] [cursor=pointer]: Online
            - generic [ref=e431]:
              - button "Preview" [disabled] [ref=e432]
              - button "Publish" [disabled] [ref=e433]
              - button "Cancel" [ref=e434] [cursor=pointer]
          - contentinfo [ref=e436]:
            - generic [ref=e437]:
              - generic [ref=e438]:
                - link [ref=e440] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e441]
                - navigation [ref=e442]:
                  - menu [ref=e443]:
                    - listitem [ref=e444]:
                      - link "Eco news" [ref=e445] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e446]:
                      - link "Events" [ref=e447] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e448]:
                      - link "Places" [ref=e449] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e450]:
                      - link "About Us" [ref=e451] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e452]:
                      - link "My Space" [ref=e453] [cursor=pointer]:
                        - /url: "#/greenCity/profile/2317"
                    - listitem [ref=e454]:
                      - link "UBS Courier" [ref=e455] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e456]:
                    - listitem [ref=e457]:
                      - paragraph [ref=e458]: Follow us
                    - listitem [ref=e459]:
                      - link [ref=e460] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e461]
                      - link [ref=e462] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e463]
                      - link [ref=e464] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e465]
                      - link [ref=e466] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e467]
                      - link [ref=e468] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e469]
              - generic [ref=e470]: © Copyright 2026. Green City.
    - button [ref=e471] [cursor=pointer]:
      - img "chat" [ref=e472]
  - generic [ref=e473]: Welcome to the search window
```

# Test source

```ts
  1   | import type { Locator, Page } from '@playwright/test';
  2   | import BasePage from '@/pages/base-page';
  3   | 
  4   | export class CreateEventPage extends BasePage {
  5   |   private readonly titleCounter: Locator;
  6   |   private readonly titleValidationError: Locator;
  7   |   private readonly titleInput: Locator;
  8   |   private readonly durationSelect: Locator;
  9   |   private readonly economicTag: Locator;
  10  |   private readonly socialTag: Locator;
  11  |   private readonly environmentalTag: Locator;
  12  |   private readonly eventTypeSelect: Locator;
  13  |   private readonly inviteSelect: Locator;
  14  |   private readonly description: Locator;
  15  |   private readonly dayInput: Locator;
  16  |   private readonly startTimeInput: Locator;
  17  |   private readonly finishTimeInput: Locator;
  18  |   private readonly allDayCheckbox: Locator;
  19  |   private readonly placeCheckbox: Locator;
  20  |   private readonly onlineCheckbox: Locator;
  21  |   private readonly placeInput: Locator;
  22  |   private readonly onlineLinkInput: Locator;
  23  |   private readonly previewButton: Locator;
  24  |   private readonly publishButton: Locator;
  25  |   private readonly cancelButton: Locator;
  26  | 
  27  |   constructor(page: Page) {
  28  |     super(page);
  29  | 
  30  |     this.titleInput = page.locator('input[formcontrolname="title"]');
  31  |     this.titleCounter = page.getByText(/^\s*\d+\s*\/\s*70\s*$/);
  32  |     this.titleValidationError = page.getByText('Enter a title up to and including 70 characters', {
  33  |       exact: true,
  34  |     });
  35  |     this.durationSelect = page.locator('.duration-wrapper mat-select[formcontrolname="duration"]');
  36  |     this.economicTag = page.getByRole('option', { name: 'Economic' });
  37  |     this.socialTag = page.getByRole('option', { name: 'Social' });
  38  |     this.environmentalTag = page.getByRole('option', { name: 'Environmental' });
  39  |     this.eventTypeSelect = page.locator('.event-type-wrapper mat-select[formcontrolname="open"]');
  40  |     this.inviteSelect = page
  41  |       .locator('.event-type-wrapper mat-form-field:has(mat-label)')
  42  |       .locator('mat-select');
  43  |     this.description = page.locator('.ql-editor');
  44  |     this.dayInput = page.locator('input[formcontrolname="day"]');
  45  |     this.startTimeInput = page.locator('input[formcontrolname="startTime"]');
  46  |     this.finishTimeInput = page.locator('input[formcontrolname="finishTime"]');
  47  |     this.allDayCheckbox = page.locator('mat-checkbox[formcontrolname="allDay"]');
  48  |     this.placeCheckbox = page.locator('mat-checkbox', { hasText: 'Place' });
  49  |     this.onlineCheckbox = page.locator('mat-checkbox', { hasText: 'Online' });
  50  |     this.placeInput = page.locator('input[formcontrolname="place"]');
  51  |     this.onlineLinkInput = page.locator('input[formcontrolname="onlineLink"]');
  52  |     const submitContainer = page.locator('.submit-container');
  53  |     this.previewButton = submitContainer.getByRole('button', { name: 'Preview' });
  54  |     this.publishButton = submitContainer.getByRole('button', { name: 'Publish' });
  55  |     this.cancelButton = submitContainer.getByRole('button', { name: 'Cancel' });
  56  |   }
  57  | 
  58  |   async waitForCreateEventPage(): Promise<void> {
  59  |     await this.titleInput.waitFor({ state: 'visible' });
  60  |   }
  61  | 
  62  |   async focusTitle(): Promise<void> {
> 63  |     await this.titleInput.click();
      |                           ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  64  |   }
  65  | 
  66  |   async focusDescription(): Promise<void> {
  67  |     await this.description.click();
  68  |   }
  69  | 
  70  |   async isTitleFocused(): Promise<boolean> {
  71  |     return this.titleInput.evaluate((element) => element === document.activeElement);
  72  |   }
  73  | 
  74  |   async isDescriptionFocused(): Promise<boolean> {
  75  |     return this.description.evaluate((element) => element === document.activeElement);
  76  |   }
  77  | 
  78  |   async fillTitle(title: string): Promise<void> {
  79  |     await this.titleInput.fill(title);
  80  |   }
  81  | 
  82  |   async getTitle(): Promise<string> {
  83  |     return this.titleInput.inputValue();
  84  |   }
  85  | 
  86  |   async getTitleCounter(): Promise<string> {
  87  |     const text = await this.titleCounter.innerText();
  88  |     return text.replace(/\s*\/\s*/, ' / ').trim();
  89  |   }
  90  | 
  91  |   async isTitleValidationErrorVisible(): Promise<boolean> {
  92  |     return this.titleValidationError.isVisible();
  93  |   }
  94  | 
  95  |   async isTitleInvalid(): Promise<boolean> {
  96  |     const classes = (await this.titleInput.getAttribute('class'))?.split(/\s+/) ?? [];
  97  |     return classes.includes('ng-invalid');
  98  |   }
  99  | 
  100 |   async selectDuration(duration: string): Promise<void> {
  101 |     await this.durationSelect.click();
  102 |     await this.page.getByRole('option', { name: duration }).click();
  103 |   }
  104 | 
  105 |   async selectOneDay(): Promise<void> {
  106 |     await this.selectDuration('1 day');
  107 |   }
  108 | 
  109 |   async selectTwoDays(): Promise<void> {
  110 |     await this.selectDuration('2 days');
  111 |   }
  112 | 
  113 |   async selectThreeDays(): Promise<void> {
  114 |     await this.selectDuration('3 days');
  115 |   }
  116 | 
  117 |   async selectFourDays(): Promise<void> {
  118 |     await this.selectDuration('4 days');
  119 |   }
  120 | 
  121 |   async selectFiveDays(): Promise<void> {
  122 |     await this.selectDuration('5 days');
  123 |   }
  124 | 
  125 |   async selectSixDays(): Promise<void> {
  126 |     await this.selectDuration('6 days');
  127 |   }
  128 | 
  129 |   async selectSevenDays(): Promise<void> {
  130 |     await this.selectDuration('7 days');
  131 |   }
  132 | 
  133 |   async clickEconomicTag(): Promise<void> {
  134 |     await this.economicTag.click();
  135 |   }
  136 | 
  137 |   async clickSocialTag(): Promise<void> {
  138 |     await this.socialTag.click();
  139 |   }
  140 | 
  141 |   async clickEnvironmentalTag(): Promise<void> {
  142 |     await this.environmentalTag.click();
  143 |   }
  144 | 
  145 |   async selectEventType(eventType: 'Open' | 'Closed'): Promise<void> {
  146 |     await this.eventTypeSelect.click();
  147 |     await this.page.getByRole('option', { name: eventType }).click();
  148 |   }
  149 | 
  150 |   async selectInviteType(inviteType: 'All' | 'Friends'): Promise<void> {
  151 |     await this.inviteSelect.click();
  152 |     await this.page.getByRole('option', { name: inviteType }).click();
  153 |   }
  154 | 
  155 |   async fillDescription(description: string): Promise<void> {
  156 |     await this.description.fill(description);
  157 |   }
  158 | 
  159 |   async getDescription(): Promise<string> {
  160 |     return (await this.description.innerText()).trim();
  161 |   }
  162 | 
  163 |   async fillDay(date: string): Promise<void> {
```