import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { Language } from '@/types/header.types';
import { NEWS_I18N } from '@/types/news.i18n';
import { NewsType } from '@/types/news.types';
import { TagSelectorComponent } from '@/components/tag-selector-component';

/**
 * Edit News page.
 * Contains fields and controls for editing an existing news article.
 */
export class EditNewsPage extends BasePage {
  protected readonly pageTitle: Locator;

  readonly titleBlock: Locator;
  readonly titleInput: Locator;
  readonly titleInfo: Locator;

  readonly tagSelector: TagSelectorComponent;

  protected readonly pictureBox: Locator;
  protected readonly pictureInput: Locator;
  protected readonly picturePreview: Locator;
  protected readonly pictureInputCancel: Locator;
  protected readonly pictureInputSubmit: Locator;

  protected readonly sourceInput: Locator;

  protected readonly contentEditor: Locator;
  protected readonly contentEditorCounter: Locator;

  protected readonly date: Locator;
  protected readonly author: Locator;

  protected readonly cancelButton: Locator;
  protected readonly previewButton: Locator;
  readonly editButton: Locator;

  constructor(page: Page, language: Language = Language.En) {
    super(page);

    const info = NEWS_I18N[language];

    this.pageTitle = page.locator('h2.title-header', { hasText: 'Edit news' });

    this.titleBlock = page.locator('div.title-block');
    this.titleInput = page.locator('textarea[formcontrolname="title"]');
    this.titleInfo = page.locator('div.title-block span.field-info');

    this.tagSelector = new TagSelectorComponent(page.locator('div.tags-box'), page, language);

    this.pictureBox = page.locator('div.dropzone, div.picture-block, .image-preview');
    this.pictureInput = page.locator('div.dropzone input[type="file"], input[type="file"]');
    this.picturePreview = page.locator('div.dropzone img, .image-preview img, .picture-preview');
    this.pictureInputCancel = page.locator(
      'app-crop-image button.secondary-global-button, button:has-text("Cancel")'
    );
    this.pictureInputSubmit = page.locator(
      'app-crop-image button.primary-global-button, button:has-text("Edit"), button:has-text("Save")'
    );

    this.sourceInput = page.locator(
      "div.source-block input[type='text'], input[formcontrolname='source']"
    );

    this.contentEditor = page.locator('div.ql-editor').first();
    this.contentEditorCounter = page.locator(
      'p.quill-counter.warning, p.quill-counter, div.content-counter, p:has-text("Number of characters:"), p:has-text("Кількість знаків:")'
    );

    this.date = page
      .locator('div.date p')
      .filter({ hasText: new RegExp(`${info?.date ?? 'Date:'}|Date:|Дата:`, 'i') });
    this.author = page
      .locator('div.date p')
      .filter({ hasText: new RegExp(`${info?.author ?? 'Author:'}|Author:|Автор:`, 'i') });

    this.cancelButton = page.locator(
      'div.submit-buttons button.tertiary-global-button, button:has-text("Cancel")'
    );
    this.previewButton = page.locator(
      'div.submit-buttons button.secondary-global-button, button:has-text("Preview")'
    );
    this.editButton = page.locator(
      'div.submit-buttons button.primary-global-button, button:has-text("Publish")'
    );
  }

  /** Opens the Edit News page directly. */
  async navigateToEditNewsPage(newsId: string | number): Promise<void> {
    await test.step(`Edit News: navigate to edit news ${newsId}`, async () => {
      await this.navigateTo(
        `/#/greenCity/news/create-news?id=${encodeURIComponent(String(newsId))}`
      );
    });
  }

  /** Waits until the Edit News page is loaded. */
  async waitForEditNewsPage(): Promise<void> {
    await test.step('Edit News: wait for edit news page to load', async () => {
      await this.waitForPageLoad();
      await this.pageTitle.waitFor({ state: 'visible' });
    });
  }

  /** Returns the browser page title. */
  async getTitle(): Promise<string> {
    return await test.step('Edit News: get page title', async () => {
      return await this.page.title();
    });
  }

  /** Enters a title for the news article. */
  async enterTitle(title: string): Promise<void> {
    await test.step(`Edit News: enter title "${title}"`, async () => {
      await this.titleInput.fill(title);
    });
  }

  /** Returns the current value of the title field. */
  async getTitleValue(): Promise<string> {
    return await test.step('Edit News: get title input value', async () => {
      return await this.titleInput.inputValue();
    });
  }

  /** Returns title validation information / counter text. */
  async getTitleInfo(): Promise<string> {
    return await test.step('Edit News: get title character counter', async () => {
      return (await this.titleInfo.first().textContent()) ?? '';
    });
  }

  /** Checks whether the tags selector is visible. */
  async isTagsBoxVisible(): Promise<boolean> {
    return await test.step('Edit News: check if tags box is visible', async () => {
      return await this.tagSelector.isVisible();
    });
  }

  /**
   * Selects the specified news tag.
   *
   * @param tag - Tag to select (NewsType enum value or string name).
   */
  async selectTag(tag: NewsType | string): Promise<void> {
    await test.step(`Edit News: select tag "${tag}"`, async () => {
      await this.tagSelector.selectTag(tag);
    });
  }

  /** Selects the News tag. */
  async selectNewsTag(): Promise<void> {
    await test.step('Edit News: select News tag', async () => {
      await this.tagSelector.selectNewsTag();
    });
  }

  /** Selects the Event tag. */
  async selectEventTag(): Promise<void> {
    await test.step('Edit News: select Event tag', async () => {
      await this.tagSelector.selectEventTag();
    });
  }

  /** Selects the Education tag. */
  async selectEducationTag(): Promise<void> {
    await test.step('Edit News: select Education tag', async () => {
      await this.tagSelector.selectEducationTag();
    });
  }

  /** Selects the Initiatives tag. */
  async selectInitiativesTag(): Promise<void> {
    await test.step('Edit News: select Initiatives tag', async () => {
      await this.tagSelector.selectInitiativesTag();
    });
  }

  /** Selects the Ads tag. */
  async selectAdsTag(): Promise<void> {
    await test.step('Edit News: select Ads tag', async () => {
      await this.tagSelector.selectAdsTag();
    });
  }

  /** Returns all active / selected tag names. */
  async getSelectedTags(): Promise<string[]> {
    return await test.step('Edit News: get selected tags', async () => {
      return await this.tagSelector.getSelectedTags();
    });
  }

  /** Checks whether the specified tag is selected. */
  async isTagSelected(tagName: string): Promise<boolean> {
    return await test.step(`Edit News: check if tag "${tagName}" is selected`, async () => {
      const selected = await this.getSelectedTags();
      return selected.some((t) => t.toLowerCase() === tagName.toLowerCase());
    });
  }

  /** Checks whether the picture box or preview is visible. */
  async isPictureBoxVisible(): Promise<boolean> {
    return await test.step('Edit News: check if picture box or preview is visible', async () => {
      const dropzoneVisible = await this.pictureBox.isVisible();
      const previewVisible = await this.picturePreview.first().isVisible();
      return dropzoneVisible || previewVisible;
    });
  }

  /** Checks whether the uploaded picture preview is visible. */
  async isPicturePreviewVisible(): Promise<boolean> {
    return await test.step('Edit News: check if picture preview is visible', async () => {
      return await this.picturePreview.first().isVisible();
    });
  }

  /** Uploads a picture for the news article. */
  async uploadPicture(filePath: string): Promise<void> {
    await test.step(`Edit News: upload picture from "${filePath}"`, async () => {
      await this.pictureInput.setInputFiles(filePath);
    });
  }

  /** Cancels the picture input modal/crop. */
  async cancelPictureInput(): Promise<void> {
    await test.step('Edit News: cancel picture cropping', async () => {
      await this.pictureInputCancel.click();
    });
  }

  /** Submits the picture cropping. */
  async submitPictureInput(): Promise<void> {
    await test.step('Edit News: submit picture cropping', async () => {
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
    await test.step(`Edit News: enter source "${source}"`, async () => {
      await this.sourceInput.fill(source);
    });
  }

  /** Returns the source value for the news article. */
  async getSource(): Promise<string> {
    return await test.step('Edit News: get source input value', async () => {
      return await this.sourceInput.inputValue();
    });
  }

  /** Enters the content for the news article. */
  async enterContent(content: string): Promise<void> {
    await test.step('Edit News: enter content', async () => {
      await this.contentEditor.fill(content);
    });
  }

  /** Returns the content value for the news article. */
  async getContent(): Promise<string> {
    return await test.step('Edit News: get content text', async () => {
      return (await this.contentEditor.textContent()) ?? '';
    });
  }

  /** Checks whether the content editor is visible. */
  async isContentEditorVisible(): Promise<boolean> {
    return await test.step('Edit News: check if content editor is visible', async () => {
      try {
        await this.contentEditor.scrollIntoViewIfNeeded({ timeout: 2000 });
      } catch {
        // ignore
      }
      const visible = await this.contentEditor.isVisible();
      if (visible) return true;
      return await this.page
        .locator('quill-editor, .ql-container, div.textarea-wrapper')
        .first()
        .isVisible();
    });
  }

  /** Returns the content editor character counter value. */
  async getContentEditorCounter(): Promise<string> {
    return await test.step('Edit News: get content editor counter', async () => {
      return (await this.contentEditorCounter.textContent()) ?? '';
    });
  }

  /** Returns the date of the news article. */
  async getDate(): Promise<string> {
    return await test.step('Edit News: get date', async () => {
      const text = (await this.date.first().textContent())?.trim() ?? '';
      return text.replace(/^(Date:|Дата:)\s*/i, '').trim();
    });
  }

  /** Returns the author of the news article. */
  async getAuthor(): Promise<string> {
    return await test.step('Edit News: get author', async () => {
      const text = (await this.author.first().textContent())?.trim() ?? '';
      return text.replace(/^(Author:|Автор:)\s*/i, '').trim();
    });
  }

  /** Clicks the Cancel button to cancel the news creation. */
  async cancel(): Promise<void> {
    await test.step('Edit News: click cancel', async () => {
      await this.cancelButton.click();
    });
  }

  /** Clicks the Preview button to preview the news article. */
  async preview(): Promise<void> {
    await test.step('Edit News: click preview', async () => {
      await this.previewButton.click();
    });
  }

  /** Clicks the Edit button to edit the news article. */
  async edit(): Promise<void> {
    await test.step('Edit News: click edit', async () => {
      await this.editButton.click();
    });
  }
}
export default EditNewsPage;
