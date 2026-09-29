import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { Language } from '@/types/header.types';
import { NewsType } from '@/types/news.types';
import { NEWS_I18N } from '@/types/news.i18n';

/**
 * Create News Preview page.
 * Displays the news article before publishing.
 */
export class CreateNewsPreviewPage extends BasePage {
  protected readonly pageTitle: Locator;

  protected readonly tagsBox: Locator;
  readonly newsTag: Locator;
  protected readonly eventTag: Locator;
  protected readonly educationTag: Locator;
  protected readonly initiativesTag: Locator;
  protected readonly adsTag: Locator;

  protected readonly newsTitle: Locator;
  protected readonly date: Locator;
  protected readonly author: Locator;

  protected readonly newsPicture: Locator;

  protected readonly newsContent: Locator;
  protected readonly newsSourceLink: Locator;

  protected readonly newsLinkImages: Locator;
  protected readonly newsLinkTwitter: Locator;
  protected readonly newsLinkLinkedin: Locator;
  protected readonly newsLinkFacebook: Locator;

  readonly backButton: Locator;
  readonly publishButton: Locator;

  constructor(page: Page, language: Language = Language.En) {
    super(page);
    const newsTypes = NEWS_I18N[language].types;

    this.pageTitle = page.locator('div.create-news-text');

    this.tagsBox = page.locator('div.tags');
    this.newsTag = page.locator(`div.tags-item:has-text('${newsTypes[NewsType.News]}')`);
    this.eventTag = page.locator(`div.tags-item:has-text('${newsTypes[NewsType.Event]}')`);
    this.educationTag = page.locator(`div.tags-item:has-text('${newsTypes[NewsType.Education]}')`);
    this.initiativesTag = page.locator(
      `div.tags-item:has-text('${newsTypes[NewsType.Initiatives]}')`
    );
    this.adsTag = page.locator(`div.tags-item:has-text('${newsTypes[NewsType.Ads]}')`);

    this.newsTitle = page.locator('div.news-title');
    this.date = page.locator('div.news-info-date');
    this.author = page.locator('div.news-info-author');

    this.newsPicture = page.locator('img.news-image-img');

    this.newsContent = page.locator('div.news-text-content');
    this.newsSourceLink = page.locator('div.source-text');

    this.newsLinkImages = page.locator('div.news-links-images');
    this.newsLinkTwitter = page.locator("img[alt='twitter']");
    this.newsLinkLinkedin = page.locator("img[alt='linkedin']");
    this.newsLinkFacebook = page.locator("img[alt='facebook']");

    this.backButton = page
      .locator(
        'a.button-link:has-text("Back to editing"), a.button-link, a[href*="create-news"], div.button-content'
      )
      .first();
    this.publishButton = page
      .locator(
        'button.primary-global-button, button:has-text("Publish"), button:has-text("Опублікувати")'
      )
      .first();
  }

  /** Waits until the Create News Preview page is loaded. */
  async waitForPreviewPage(): Promise<void> {
    await test.step('CreateNewsPreview: wait for preview page to load', async () => {
      await this.newsTitle.waitFor({ state: 'visible' });
    });
  }

  /** Returns the preview page title. */
  async getPageTitle(): Promise<string> {
    return await test.step('CreateNewsPreview: get page title', async () => {
      return (await this.pageTitle.textContent()) ?? '';
    });
  }

  /** Checks whether the tags section is visible. */
  async isTagsBoxVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if tags box is visible', async () => {
      return await this.tagsBox.isVisible();
    });
  }

  /** Returns all displayed preview tag texts. */
  async getTags(): Promise<string[]> {
    return await test.step('CreateNewsPreview: get all tag names', async () => {
      return (await this.tagsBox.locator('div.tags-item').allInnerTexts()).map((t) => t.trim());
    });
  }

  /** Checks whether the Event tag is visible. */
  async isEventTagVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if Event tag is visible', async () => {
      return await this.eventTag.isVisible();
    });
  }

  /** Checks whether the Education tag is visible. */
  async isEducationTagVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if Education tag is visible', async () => {
      return await this.educationTag.isVisible();
    });
  }

  /** Checks whether the Initiatives tag is visible. */
  async isInitiativesTagVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if Initiatives tag is visible', async () => {
      return await this.initiativesTag.isVisible();
    });
  }

  /** Checks whether the Ads tag is visible. */
  async isAdsTagVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if Ads tag is visible', async () => {
      return await this.adsTag.isVisible();
    });
  }

  /** Returns the news title. */
  async getNewsTitle(): Promise<string> {
    return await test.step('CreateNewsPreview: get news title', async () => {
      return (await this.newsTitle.textContent())?.trim() ?? '';
    });
  }

  /** Returns the news date. */
  async getDate(): Promise<string> {
    return await test.step('CreateNewsPreview: get date', async () => {
      const text = (await this.date.textContent())?.trim() ?? '';
      return text.replace(/^(Date:|Дата:)\s*/i, '').trim();
    });
  }

  /** Returns the news author. */
  async getAuthor(): Promise<string> {
    return await test.step('CreateNewsPreview: get author', async () => {
      const text = (await this.author.textContent())?.trim() ?? '';
      return text.replace(/^(Author:|Автор:)\s*/i, '').trim();
    });
  }

  /** Checks whether the news picture is visible. */
  async isNewsPictureVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if picture is visible', async () => {
      return await this.newsPicture.isVisible();
    });
  }

  /** Returns the news content. */
  async getNewsContent(): Promise<string> {
    return await test.step('CreateNewsPreview: get news content', async () => {
      return (await this.newsContent.textContent())?.trim() ?? '';
    });
  }

  /** Returns the news source link text. */
  async getNewsSourceLink(): Promise<string> {
    return await test.step('CreateNewsPreview: get news source link', async () => {
      return (await this.newsSourceLink.textContent())?.trim() ?? '';
    });
  }

  /** Checks whether social media links are visible. */
  async areNewsLinkImagesVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if social links are visible', async () => {
      return await this.newsLinkImages.isVisible();
    });
  }

  /** Checks whether the Twitter link is visible. */
  async isTwitterLinkVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if Twitter link is visible', async () => {
      return await this.newsLinkTwitter.isVisible();
    });
  }

  /** Checks whether the LinkedIn link is visible. */
  async isLinkedinLinkVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if LinkedIn link is visible', async () => {
      return await this.newsLinkLinkedin.isVisible();
    });
  }

  /** Checks whether the Facebook link is visible. */
  async isFacebookLinkVisible(): Promise<boolean> {
    return await test.step('CreateNewsPreview: check if Facebook link is visible', async () => {
      return await this.newsLinkFacebook.isVisible();
    });
  }

  /** Navigates back from the preview page to edit mode. */
  async goBack(): Promise<void> {
    await test.step('CreateNewsPreview: go back to editing', async () => {
      await this.backButton.first().click();
    });
  }

  /** Publishes the news article. */
  async publish(): Promise<void> {
    await test.step('CreateNewsPreview: publish news', async () => {
      await this.publishButton.first().click();
    });
  }
}
export default CreateNewsPreviewPage;
