import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

/**
 * Create News page POM.
 * Contains fields and controls for creating a new news article.
 */
export class CreateNewsPage extends BasePage {
  protected readonly titleInput: Locator;
  protected readonly titleInfo: Locator;

  protected readonly tagsBox: Locator;
  protected readonly tagButtons: Locator;
  protected readonly newsTag: Locator;
  protected readonly eventTag: Locator;
  protected readonly educationTag: Locator;
  protected readonly initiativesTag: Locator;
  protected readonly adsTag: Locator;

  protected readonly pictureBox: Locator;
  protected readonly pictureInput: Locator;
  protected readonly pictureInputCancel: Locator;
  protected readonly pictureInputSubmit: Locator;
  protected readonly picturePreview: Locator;

  protected readonly sourceInput: Locator;

  protected readonly contentEditor: Locator;
  protected readonly contentEditorCounter: Locator;

  protected readonly date: Locator;
  protected readonly author: Locator;

  protected readonly cancelButton: Locator;
  protected readonly previewButton: Locator;
  protected readonly submitButton: Locator;

  constructor(page: Page) {
    super(page);

    this.titleInput = page.locator('textarea[formcontrolname="title"]');
    this.titleInfo = page.locator(
      'div.title-wrapper span.field-info, div.title-block span.field-info'
    );

    this.tagsBox = page.locator('div.tags-box, app-tag-filter');
    this.tagButtons = page.locator('button.tag-button');
    this.newsTag = page.locator("button.tag-button:has-text('News')");
    this.eventTag = page.locator(
      "button.tag-button:has-text('Events'), button.tag-button:has-text('Event')"
    );
    this.educationTag = page.locator("button.tag-button:has-text('Education')");
    this.initiativesTag = page.locator("button.tag-button:has-text('Initiatives')");
    this.adsTag = page.locator("button.tag-button:has-text('Ads')");

    this.pictureBox = page.locator('div.dropzone');
    this.pictureInput = page.locator("input#upload, input[type='file']");
    this.pictureInputCancel = page.getByRole('button', { name: 'Cancel' });
    this.pictureInputSubmit = page.getByRole('button', { name: 'Submit' });
    this.picturePreview = page.locator(
      'div.image-preview, img.preview-image, [class*="picture"] img, app-drag-and-drop img'
    );

    this.sourceInput = page.locator(
      "input[formcontrolname='source'], div.source-block input[type='text'], input[placeholder*='Link to external source' i]"
    );

    this.contentEditor = page.locator('div.ql-editor');
    this.contentEditorCounter = page.locator('p.quill-counter.warning, p.quill-counter');

    this.date = page.locator('div.date p').filter({ hasText: 'Date:' }).locator('span').nth(1);
    this.author = page.locator('div.date p').filter({ hasText: 'Author:' }).locator('span').nth(1);

    this.cancelButton = page.locator(
      'div.submit-buttons button.tertiary-global-button, button:has-text("Cancel")'
    );
    this.previewButton = page.locator(
      'div.submit-buttons button.secondary-global-button, button:has-text("Preview")'
    );
    this.submitButton = page.locator(
      'div.submit-buttons button.primary-global-button, button:has-text("Publish")'
    );
  }

  /** Opens the Create News page directly. */
  async navigateToCreateNewsPage(): Promise<void> {
    await test.step('CreateNews: navigate to create news page', async () => {
      await this.navigateTo('/#/greenCity/news/create-news');
    });
  }

  /** Waits until the Create News page is loaded. */
  async waitForCreateNewsPage(): Promise<void> {
    await test.step('CreateNews: wait for create news page to load', async () => {
      await this.waitForPageLoad();
      await this.titleInput.waitFor({ state: 'visible' });
    });
  }

  /** Returns the browser page title. */
  async getTitle(): Promise<string> {
    return await test.step('CreateNews: get page title', async () => {
      return await this.page.title();
    });
  }

  /** Enters a title for the news article. */
  async enterTitle(title: string): Promise<void> {
    await test.step(`CreateNews: enter title "${title}"`, async () => {
      await this.titleInput.fill(title);
    });
  }

  /** Returns title validation information / counter text. */
  async getTitleInfo(): Promise<string> {
    return await test.step('CreateNews: get title character counter', async () => {
      return (await this.titleInfo.first().textContent()) ?? '';
    });
  }

  /** Checks whether the tags box is visible. */
  async isTagsBoxVisible(): Promise<boolean> {
    return await test.step('CreateNews: check if tags box is visible', async () => {
      return await this.tagsBox.isVisible();
    });
  }

  /** Selects a tag by its displayed text name. */
  async selectTag(tagName: string): Promise<void> {
    await test.step(`CreateNews: select tag "${tagName}"`, async () => {
      await this.tagButtons.filter({ hasText: tagName }).first().click();
    });
  }

  /** Selects the News tag. */
  async selectNewsTag(): Promise<void> {
    await test.step('CreateNews: select News tag', async () => {
      await this.newsTag.click();
    });
  }

  /** Selects the Event tag. */
  async selectEventTag(): Promise<void> {
    await test.step('CreateNews: select Event tag', async () => {
      await this.eventTag.click();
    });
  }

  /** Selects the Education tag. */
  async selectEducationTag(): Promise<void> {
    await test.step('CreateNews: select Education tag', async () => {
      await this.educationTag.click();
    });
  }

  /** Selects the Initiatives tag. */
  async selectInitiativesTag(): Promise<void> {
    await test.step('CreateNews: select Initiatives tag', async () => {
      await this.initiativesTag.click();
    });
  }

  /** Selects the Ads tag. */
  async selectAdsTag(): Promise<void> {
    await test.step('CreateNews: select Ads tag', async () => {
      await this.adsTag.click();
    });
  }

  /** Returns all active / selected tag names. */
  async getSelectedTags(): Promise<string[]> {
    return await test.step('CreateNews: get selected tags', async () => {
      const selectedButtons = this.tagButtons.filter({
        has: this.page.locator('.global-tag-clicked, [class*="clicked"], [class*="active"]'),
      });
      if ((await selectedButtons.count()) > 0) {
        return (await selectedButtons.allInnerTexts()).map((t) => t.trim());
      }
      // If styled on the button itself:
      const allBtns = await this.tagButtons.all();
      const tags: string[] = [];
      for (const btn of allBtns) {
        const cls = (await btn.getAttribute('class')) ?? '';
        if (cls.includes('clicked') || cls.includes('active') || cls.includes('selected')) {
          tags.push((await btn.innerText()).trim());
        }
      }
      return tags;
    });
  }

  /** Checks whether the picture dropzone or uploaded picture preview is visible. */
  async isPictureBoxVisible(): Promise<boolean> {
    return await test.step('CreateNews: check if picture box or preview is visible', async () => {
      const dropzoneVisible = await this.pictureBox.isVisible();
      const previewVisible = await this.picturePreview.first().isVisible();
      return dropzoneVisible || previewVisible;
    });
  }

  /** Checks whether the uploaded picture preview is visible. */
  async isPicturePreviewVisible(): Promise<boolean> {
    return await test.step('CreateNews: check if picture preview is visible', async () => {
      return await this.picturePreview.first().isVisible();
    });
  }

  /** Uploads a picture for the news article. */
  async uploadPicture(filePath: string): Promise<void> {
    await test.step(`CreateNews: upload picture from "${filePath}"`, async () => {
      await this.pictureInput.setInputFiles(filePath);
    });
  }

  /** Cancels the picture input modal/crop. */
  async cancelPictureInput(): Promise<void> {
    await test.step('CreateNews: cancel picture cropping', async () => {
      await this.pictureInputCancel.click();
    });
  }

  /** Submits the picture cropping. */
  async submitPictureInput(): Promise<void> {
    await test.step('CreateNews: submit picture cropping', async () => {
      try {
        await this.pictureInputSubmit.waitFor({ state: 'visible', timeout: 5000 });
        await this.page.waitForTimeout(1000);
        await this.pictureInputSubmit.click();
      } catch {
        // Modal might not require submit or was auto-applied
      }
    });
  }

  /** Enters the source for the news article. */
  async enterSource(source: string): Promise<void> {
    await test.step(`CreateNews: enter source "${source}"`, async () => {
      await this.sourceInput.fill(source);
    });
  }

  /** Returns the source value for the news article. */
  async getSource(): Promise<string> {
    return await test.step('CreateNews: get source input value', async () => {
      return await this.sourceInput.inputValue();
    });
  }

  /** Enters the content for the news article. */
  async enterContent(content: string): Promise<void> {
    await test.step(`CreateNews: enter content`, async () => {
      await this.contentEditor.fill(content);
    });
  }

  /** Returns the content text for the news article. */
  async getContent(): Promise<string> {
    return await test.step('CreateNews: get content text', async () => {
      return (await this.contentEditor.textContent()) ?? '';
    });
  }

  /** Returns the content editor character counter value. */
  async getContentEditorCounter(): Promise<string> {
    return await test.step('CreateNews: get content editor counter', async () => {
      return (await this.contentEditorCounter.textContent()) ?? '';
    });
  }

  /** Returns the pre-filled date of the news article. */
  async getDate(): Promise<string> {
    return await test.step('CreateNews: get date', async () => {
      return (await this.date.textContent())?.trim() ?? '';
    });
  }

  /** Returns the pre-filled author of the news article. */
  async getAuthor(): Promise<string> {
    return await test.step('CreateNews: get author', async () => {
      return (await this.author.textContent())?.trim() ?? '';
    });
  }

  /** Clicks the Cancel button. */
  async cancel(): Promise<void> {
    await test.step('CreateNews: click cancel', async () => {
      await this.cancelButton.click();
    });
  }

  /** Clicks the Preview button. */
  async preview(): Promise<void> {
    await test.step('CreateNews: click preview', async () => {
      await this.previewButton.click();
    });
  }

  /** Clicks the Submit/Publish button. */
  async submit(): Promise<void> {
    await test.step('CreateNews: click publish', async () => {
      await this.submitButton.click();
    });
  }
}
export default CreateNewsPage;
