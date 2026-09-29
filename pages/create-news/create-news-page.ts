import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { Language } from '@/types/header.types';
import { NEWS_I18N } from '@/types/news.i18n';
import { NewsType } from '@/types';
import { TagSelectorComponent } from '@/components/tag-selector-component';

/**
 * Create News page.
 * Contains fields and controls for creating a new news article.
 * */
export class CreateNewsPage extends BasePage {
  protected readonly titleInput: Locator;
  protected readonly titleInfo: Locator;

  protected readonly tagSelector: TagSelectorComponent;

  protected readonly pictureBox: Locator;
  protected readonly pictureInput: Locator;
  protected readonly pictureInputCancel: Locator;
  protected readonly pictureInputSubmit: Locator;

  protected readonly sourceInput: Locator;

  protected readonly contentEditor: Locator;
  protected readonly contentEditorCounter: Locator;

  protected readonly date: Locator;
  protected readonly author: Locator;

  protected readonly cancelButton: Locator;
  protected readonly previewButton: Locator;
  protected readonly submitButton: Locator;

  constructor(page: Page, language: Language = Language.En) {
    super(page);

    const info = NEWS_I18N[language];

    this.titleInput = page.locator('textarea[formcontrolname="title"]');
    this.titleInfo = page.locator('div.title-block span.field-info');

    this.tagSelector = new TagSelectorComponent(page.locator('div.tags-box'), page, language);

    this.pictureBox = page.locator('div.dropzone');
    this.pictureInput = page.locator("div.dropzone input[type='file']");
    this.pictureInputCancel = page.locator('div.Initiatives button.secondary-global-button');
    this.pictureInputSubmit = page.locator('div.Initiatives button.primary-global-button');

    this.sourceInput = page.locator("div.source-block input[type='text']");

    this.contentEditor = page.locator("div.ql-editor[contenteditable='true']");
    this.contentEditorCounter = page.locator('p.quill-counter.warning');

    this.date = page.locator('div.date p').filter({ hasText: info.date }).locator('span').nth(1);
    this.author = page
      .locator('div.date p')
      .filter({ hasText: info.author })
      .locator('span')
      .nth(1);

    this.cancelButton = page.locator('div.submit-buttons button.tertiary-global-button');
    this.previewButton = page.locator('div.submit-buttons button.secondary-global-button');
    this.submitButton = page.locator('div.submit-buttons button.primary-global-button');
  }

  /** Opens the Create News page. */
  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('#/greenCity/news/create-news#/greenCity');
  }

  /** Waits until the Create News page is loaded. */
  async waitForCreateNewsPage(): Promise<void> {
    await this.waitForPageLoad();
  }

  /** Returns the browser page title. */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /** Enters a title for the news article. */
  async enterTitle(title: string): Promise<void> {
    await this.titleInput.fill(title);
  }

  /** Returns title validation information. */
  async getTitleInfo(): Promise<string> {
    return (await this.titleInfo.textContent()) ?? '';
  }

  /** Checks whether the tags selector is visible. */
  async isTagsBoxVisible(): Promise<boolean> {
    return await this.tagSelector.isVisible();
  }

  /**
   * Selects the specified news tag.
   *
   * @param tag - Tag to select.
   */
  async selectTag(tag: NewsType): Promise<void> {
    await this.tagSelector.selectTag(tag);
  }

  /** Checks whether the picture box is visible. */
  async isPictureBoxVisible(): Promise<boolean> {
    return await this.pictureBox.isVisible();
  }

  /** Uploads a picture for the news article. */
  async uploadPicture(filePath: string): Promise<void> {
    await this.pictureInput.setInputFiles(filePath);
  }

  /** Cancels the picture input. */
  async cancelPictureInput(): Promise<void> {
    await this.pictureInputCancel.click();
  }

  /** Submits the picture input. */
  async submitPictureInput(): Promise<void> {
    await this.pictureInputSubmit.click();
  }

  /** Enters the source for the news article. */
  async enterSource(source: string): Promise<void> {
    await this.sourceInput.fill(source);
  }

  /** Returns the source value for the news article. */
  async getSource(): Promise<string> {
    return await this.sourceInput.inputValue();
  }

  /** Enters the content for the news article. */
  async enterContent(content: string): Promise<void> {
    await this.contentEditor.fill(content);
  }

  /** Returns the content value for the news article. */
  async getContent(): Promise<string> {
    return (await this.contentEditor.textContent()) ?? '';
  }

  /** Returns the content editor character counter value. */
  async getContentEditorCounter(): Promise<string> {
    return (await this.contentEditorCounter.textContent()) ?? '';
  }

  /** Returns the date of the news article. */
  async getDate(): Promise<string> {
    return (await this.date.textContent()) ?? '';
  }

  /** Returns the author of the news article. */
  async getAuthor(): Promise<string> {
    return (await this.author.textContent()) ?? '';
  }

  /** Clicks the Cancel button to cancel the news creation. */
  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  /** Clicks the Preview button to preview the news article. */
  async preview(): Promise<void> {
    await this.previewButton.click();
  }

  /** Clicks the Submit button to submit the news article. */
  async submit(): Promise<void> {
    await this.submitButton.click();
  }
}
