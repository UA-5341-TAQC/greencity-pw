# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-6-7-succesful-editing-news.spec.ts >> TC-007 Verify successful editing of Eco News content and tags >> updates content and tags on an existing Eco News item
- Location: tests/ui/tc-6-7-succesful-editing-news.spec.ts:65:3

# Error details

```
TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('h2.title-header').filter({ hasText: 'Create news' }) to be visible

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
          - main [ref=e47]:
            - generic [ref=e48]:
              - generic [ref=e49]:
                - heading "Edit news" [level=2] [ref=e50]
                - paragraph [ref=e52]: Please provide as many details as you can - place and time of the event, the goal of gathering, etc. You can come back and update news anytime after publishing.
              - generic [ref=e54]:
                - generic [ref=e55]:
                  - generic [ref=e56]:
                    - generic [ref=e57]:
                      - heading "Title" [level=3] [ref=e58]
                      - generic [ref=e59]: 31/170
                    - textbox [ref=e61]:
                      - /placeholder: e.g. Coffee takeaway with 20% discount
                      - text: TC-008 validation 1791969443199
                  - generic [ref=e62]:
                    - heading "Pick tags for news" [level=3] [ref=e63]
                    - paragraph [ref=e64]: Only 3 tags can be added
                    - generic [ref=e66]:
                      - button "News" [ref=e67] [cursor=pointer]
                      - button "Events" [ref=e71] [cursor=pointer]
                      - button "Education" [ref=e74] [cursor=pointer]
                      - button "Initiatives" [ref=e77] [cursor=pointer]
                      - button "Ads" [ref=e80] [cursor=pointer]
                  - generic [ref=e83]:
                    - generic [ref=e84]:
                      - heading "Source (optional)" [level=3] [ref=e85]
                      - generic [ref=e86]: Please add the link of original article/news/post. Link must start with http(s)://
                    - textbox [ref=e88]:
                      - /placeholder: Link to external source
                  - generic [ref=e89]:
                    - heading "Picture (optional)" [level=3] [ref=e90]
                    - generic [ref=e91]:
                      - generic [ref=e94]:
                        - text: Drop your image here or
                        - generic [ref=e95]: browse
                        - button "browse" [ref=e96]
                      - generic [ref=e97]:
                        - generic "Crop photo" [ref=e101]
                        - generic [ref=e114]:
                          - button "Cancel" [ref=e115] [cursor=pointer]
                          - button "Submit" [ref=e116] [cursor=pointer]
                      - paragraph [ref=e117]: Upload only PNG or JPG. File size must be less than 10MB
                - generic [ref=e118]:
                  - generic [ref=e119]:
                    - heading "Content" [level=3] [ref=e120]
                    - paragraph [ref=e121]: Must be minimum 20 and maximum 63 206 symbols
                  - generic [ref=e122]:
                    - generic [ref=e123]:
                      - generic [ref=e124]:
                        - button [ref=e125] [cursor=pointer]
                        - button [ref=e129] [cursor=pointer]
                        - button [ref=e134] [cursor=pointer]
                        - button [ref=e138] [cursor=pointer]
                      - generic [ref=e143]:
                        - button [ref=e144] [cursor=pointer]
                        - button [ref=e150] [cursor=pointer]
                      - generic [ref=e155]:
                        - button [ref=e156] [cursor=pointer]
                        - button [ref=e159] [cursor=pointer]
                      - generic [ref=e162]:
                        - button [ref=e163] [cursor=pointer]
                        - button [ref=e172] [cursor=pointer]
                      - generic [ref=e180]:
                        - button [ref=e181] [cursor=pointer]
                        - button [ref=e185] [cursor=pointer]
                      - generic [ref=e189]:
                        - button [ref=e190] [cursor=pointer]
                        - button [ref=e196] [cursor=pointer]
                      - button [ref=e203] [cursor=pointer]
                      - generic [ref=e211]:
                        - button "Normal" [ref=e212] [cursor=pointer]
                        - text: Small Normal Large Huge
                      - generic [ref=e217]:
                        - button "Normal" [ref=e218] [cursor=pointer]
                        - text: Heading 1 Heading 2 Heading 3 Heading 4 Heading 5 Heading 6 Normal
                      - generic [ref=e222]:
                        - button [ref=e224] [cursor=pointer]
                        - button [ref=e230] [cursor=pointer]
                      - generic [ref=e282]:
                        - button "Sans Serif" [ref=e283] [cursor=pointer]
                        - text: Sans Serif Serif Monospace
                      - button [ref=e289] [cursor=pointer]
                      - button [ref=e295] [cursor=pointer]
                      - generic [ref=e302]:
                        - button [ref=e303] [cursor=pointer]
                        - button [ref=e308] [cursor=pointer]
                        - button [ref=e313] [cursor=pointer]
                      - button [ref=e328] [cursor=pointer]
                    - generic [ref=e334]:
                      - paragraph [ref=e336]: Temporary article created for TC-008 validation.
                      - text: "Visit URL: EditRemove"
                  - paragraph
                - generic [ref=e337]:
                  - paragraph [ref=e338]: "Date: Oct 14, 2026"
                  - paragraph [ref=e339]: "Author: TestATestA"
                - generic [ref=e340]:
                  - button "Cancel" [ref=e341] [cursor=pointer]
                  - button "Preview" [ref=e342] [cursor=pointer]
                  - button "Edit" [ref=e343] [cursor=pointer]
          - contentinfo [ref=e345]:
            - generic [ref=e346]:
              - generic [ref=e347]:
                - link [ref=e349] [cursor=pointer]:
                  - /url: "#/greenCity"
                  - img "GreenCity home" [ref=e350]
                - navigation [ref=e351]:
                  - menu [ref=e352]:
                    - listitem [ref=e353]:
                      - link "Eco news" [ref=e354] [cursor=pointer]:
                        - /url: "#/greenCity/news"
                    - listitem [ref=e355]:
                      - link "Events" [ref=e356] [cursor=pointer]:
                        - /url: "#/greenCity/events"
                    - listitem [ref=e357]:
                      - link "Places" [ref=e358] [cursor=pointer]:
                        - /url: "#/greenCity/places"
                    - listitem [ref=e359]:
                      - link "About Us" [ref=e360] [cursor=pointer]:
                        - /url: "#/greenCity/about"
                    - listitem [ref=e361]:
                      - link "My Space" [ref=e362] [cursor=pointer]:
                        - /url: "#/greenCity/profile/1205"
                    - listitem [ref=e363]:
                      - link "UBS Courier" [ref=e364] [cursor=pointer]:
                        - /url: "#/ubs"
                  - menu [ref=e365]:
                    - listitem [ref=e366]:
                      - paragraph [ref=e367]: Follow us
                    - listitem [ref=e368]:
                      - link [ref=e369] [cursor=pointer]:
                        - /url: "#"
                        - img "Twitter link" [ref=e370]
                      - link [ref=e371] [cursor=pointer]:
                        - /url: "#"
                        - img "LinkedIn link" [ref=e372]
                      - link [ref=e373] [cursor=pointer]:
                        - /url: "#"
                        - img "Facebook link" [ref=e374]
                      - link [ref=e375] [cursor=pointer]:
                        - /url: "#"
                        - img "Instagram link" [ref=e376]
                      - link [ref=e377] [cursor=pointer]:
                        - /url: "#"
                        - img "YouTube link" [ref=e378]
              - generic [ref=e379]: © Copyright 2026. Green City.
    - button [ref=e380] [cursor=pointer]:
      - img "chat" [ref=e381]
  - generic [ref=e382]: Welcome to the search window
```

# Test source

```ts
  1   | import { test, type Page, type Locator } from '@playwright/test';
  2   | import BasePage from '@/pages/base-page';
  3   | import { Language } from '@/types/header.types';
  4   | import { NEWS_I18N } from '@/types/news.i18n';
  5   | import { NewsType } from '@/types/news.types';
  6   | import { TagSelectorComponent } from '@/components/tag-selector-component';
  7   | 
  8   | /**
  9   |  * Create News page.
  10  |  * Contains fields and controls for creating a new news article.
  11  |  */
  12  | export class CreateNewsPage extends BasePage {
  13  |   protected readonly pageTitle: Locator;
  14  | 
  15  |   protected readonly titleInput: Locator;
  16  |   protected readonly titleInfo: Locator;
  17  | 
  18  |   readonly tagSelector: TagSelectorComponent;
  19  | 
  20  |   protected readonly pictureBox: Locator;
  21  |   protected readonly pictureInput: Locator;
  22  |   protected readonly picturePreview: Locator;
  23  |   protected readonly pictureInputCancel: Locator;
  24  |   protected readonly pictureInputSubmit: Locator;
  25  | 
  26  |   protected readonly sourceInput: Locator;
  27  | 
  28  |   protected readonly contentEditor: Locator;
  29  |   protected readonly contentEditorCounter: Locator;
  30  | 
  31  |   protected readonly date: Locator;
  32  |   protected readonly author: Locator;
  33  | 
  34  |   protected readonly cancelButton: Locator;
  35  |   protected readonly previewButton: Locator;
  36  |   protected readonly submitButton: Locator;
  37  | 
  38  |   constructor(page: Page, language: Language = Language.En) {
  39  |     super(page);
  40  | 
  41  |     const info = NEWS_I18N[language];
  42  | 
  43  |     this.pageTitle = page.locator('h2.title-header', { hasText: 'Create news' });
  44  | 
  45  |     this.titleInput = page.locator('textarea[formcontrolname="title"]');
  46  |     this.titleInfo = page.locator('div.title-block span.field-info');
  47  | 
  48  |     this.tagSelector = new TagSelectorComponent(page.locator('div.tags-box'), page, language);
  49  | 
  50  |     this.pictureBox = page.locator('div.dropzone, div.picture-block, .image-preview');
  51  |     this.pictureInput = page.locator('div.dropzone input[type="file"], input[type="file"]');
  52  |     this.picturePreview = page.locator('div.dropzone img, .image-preview img, .picture-preview');
  53  |     this.pictureInputCancel = page.locator(
  54  |       'app-crop-image button.secondary-global-button, button:has-text("Cancel")'
  55  |     );
  56  |     this.pictureInputSubmit = page.locator(
  57  |       'app-crop-image button.primary-global-button, button:has-text("Submit"), button:has-text("Save")'
  58  |     );
  59  | 
  60  |     this.sourceInput = page.locator(
  61  |       "div.source-block input[type='text'], input[formcontrolname='source']"
  62  |     );
  63  | 
  64  |     this.contentEditor = page.locator('div.ql-editor').first();
  65  |     this.contentEditorCounter = page.locator(
  66  |       'p.quill-counter.warning, p.quill-counter, div.content-counter, p:has-text("Number of characters:"), p:has-text("Кількість знаків:")'
  67  |     );
  68  | 
  69  |     this.date = page
  70  |       .locator('div.date p')
  71  |       .filter({ hasText: new RegExp(`${info?.date ?? 'Date:'}|Date:|Дата:`, 'i') });
  72  |     this.author = page
  73  |       .locator('div.date p')
  74  |       .filter({ hasText: new RegExp(`${info?.author ?? 'Author:'}|Author:|Автор:`, 'i') });
  75  | 
  76  |     this.cancelButton = page.locator('div.submit-buttons button.tertiary-global-button');
  77  |     this.previewButton = page.locator(
  78  |       'div.submit-buttons button.secondary-global-button, button:has-text("Preview")'
  79  |     );
  80  |     this.submitButton = page.locator(
  81  |       'div.submit-buttons button.primary-global-button, button:has-text("Publish")'
  82  |     );
  83  |   }
  84  | 
  85  |   /** Opens the Create News page directly. */
  86  |   async navigateToCreateNewsPage(): Promise<void> {
  87  |     await test.step('CreateNews: navigate to create news page', async () => {
  88  |       await this.navigateTo('/#/greenCity/news/create-news');
  89  |     });
  90  |   }
  91  | 
  92  |   /** Waits until the Create News page is loaded. */
  93  |   async waitForCreateNewsPage(): Promise<void> {
  94  |     await test.step('CreateNews: wait for create news page to load', async () => {
  95  |       await this.waitForPageLoad();
> 96  |       await this.pageTitle.waitFor({ state: 'visible' });
      |                            ^ TimeoutError: locator.waitFor: Timeout 10000ms exceeded.
  97  |     });
  98  |   }
  99  | 
  100 |   /** Returns the browser page title. */
  101 |   async getTitle(): Promise<string> {
  102 |     return await test.step('CreateNews: get page title', async () => {
  103 |       return await this.page.title();
  104 |     });
  105 |   }
  106 | 
  107 |   /** Enters a title for the news article. */
  108 |   async enterTitle(title: string): Promise<void> {
  109 |     await test.step(`CreateNews: enter title "${title}"`, async () => {
  110 |       await this.titleInput.fill(title);
  111 |     });
  112 |   }
  113 | 
  114 |   /** Returns the current value of the title field. */
  115 |   async getTitleValue(): Promise<string> {
  116 |     return await test.step('CreateNews: get title input value', async () => {
  117 |       return await this.titleInput.inputValue();
  118 |     });
  119 |   }
  120 | 
  121 |   /** Returns title validation information / counter text. */
  122 |   async getTitleInfo(): Promise<string> {
  123 |     return await test.step('CreateNews: get title character counter', async () => {
  124 |       return (await this.titleInfo.first().textContent()) ?? '';
  125 |     });
  126 |   }
  127 | 
  128 |   /** Checks whether the tags selector is visible. */
  129 |   async isTagsBoxVisible(): Promise<boolean> {
  130 |     return await test.step('CreateNews: check if tags box is visible', async () => {
  131 |       return await this.tagSelector.isVisible();
  132 |     });
  133 |   }
  134 | 
  135 |   /**
  136 |    * Selects the specified news tag.
  137 |    *
  138 |    * @param tag - Tag to select (NewsType enum value or string name).
  139 |    */
  140 |   async selectTag(tag: NewsType | string): Promise<void> {
  141 |     await test.step(`CreateNews: select tag "${tag}"`, async () => {
  142 |       await this.tagSelector.selectTag(tag);
  143 |     });
  144 |   }
  145 | 
  146 |   /** Selects the News tag. */
  147 |   async selectNewsTag(): Promise<void> {
  148 |     await test.step('CreateNews: select News tag', async () => {
  149 |       await this.tagSelector.selectNewsTag();
  150 |     });
  151 |   }
  152 | 
  153 |   /** Selects the Event tag. */
  154 |   async selectEventTag(): Promise<void> {
  155 |     await test.step('CreateNews: select Event tag', async () => {
  156 |       await this.tagSelector.selectEventTag();
  157 |     });
  158 |   }
  159 | 
  160 |   /** Selects the Education tag. */
  161 |   async selectEducationTag(): Promise<void> {
  162 |     await test.step('CreateNews: select Education tag', async () => {
  163 |       await this.tagSelector.selectEducationTag();
  164 |     });
  165 |   }
  166 | 
  167 |   /** Selects the Initiatives tag. */
  168 |   async selectInitiativesTag(): Promise<void> {
  169 |     await test.step('CreateNews: select Initiatives tag', async () => {
  170 |       await this.tagSelector.selectInitiativesTag();
  171 |     });
  172 |   }
  173 | 
  174 |   /** Selects the Ads tag. */
  175 |   async selectAdsTag(): Promise<void> {
  176 |     await test.step('CreateNews: select Ads tag', async () => {
  177 |       await this.tagSelector.selectAdsTag();
  178 |     });
  179 |   }
  180 | 
  181 |   /** Returns all active / selected tag names. */
  182 |   async getSelectedTags(): Promise<string[]> {
  183 |     return await test.step('CreateNews: get selected tags', async () => {
  184 |       return await this.tagSelector.getSelectedTags();
  185 |     });
  186 |   }
  187 | 
  188 |   /** Checks whether the specified tag is selected. */
  189 |   async isTagSelected(tagName: string): Promise<boolean> {
  190 |     return await test.step(`CreateNews: check if tag "${tagName}" is selected`, async () => {
  191 |       const selected = await this.getSelectedTags();
  192 |       return selected.some((t) => t.toLowerCase() === tagName.toLowerCase());
  193 |     });
  194 |   }
  195 | 
  196 |   /** Checks whether the picture box or preview is visible. */
```