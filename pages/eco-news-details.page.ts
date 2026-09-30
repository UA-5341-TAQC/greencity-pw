import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import env from '@/config/env';

export class EcoNewsDetailsPage extends BasePage {
  private readonly title: Locator;
  private readonly content: Locator;
  private readonly coverImage: Locator;
  private readonly authorName: Locator;
  private readonly authorAvatar: Locator;
  private readonly publicationDate: Locator;
  private readonly tags: Locator;
  private readonly backButton: Locator;
  private readonly relatedNewsHeading: Locator;
  private readonly relatedNewsItems: Locator;
  private readonly likeButton: Locator;
  private readonly likesCount: Locator;
  private readonly commentInput: Locator;
  private readonly submitCommentButton: Locator;
  private readonly commentsCounter: Locator;

  constructor(page: Page) {
    super(page);

    // verified via DevTools against the live site
    this.title = page.locator('.news-title');
    this.content = page.locator('.news-text .ql-editor');
    this.coverImage = page.locator('.news-image-img').first();
    this.authorName = page.locator('.news-info-author').first();
    this.authorAvatar = page.locator('[class*="author"] img');
    this.publicationDate = page.locator('.news-info-date').first();
    this.tags = page.locator('.tags div.tags-item');
    this.backButton = page.locator('div.back-button, a[class*="back"]');
    this.relatedNewsHeading = page.locator('app-eco-news-widget p');
    this.relatedNewsItems = page.locator('app-eco-news-widget .gallery-view-active li');
    this.likeButton = page.locator('img.news_like');
    this.likesCount = page.locator('.numerosity_likes');
    this.commentInput = page.locator('app-comment-textarea');
    this.submitCommentButton = page.locator('button.primary-global-button');
    this.commentsCounter = page.locator('app-comments-container .counter');
  }

  async navigateToNewsDetails(newsId: string | number): Promise<void> {
    await test.step(`Navigate to Eco News Details for newsId: ${newsId}`, async () => {
      await this.navigateTo(`/#/greenCity/news/${newsId}`);
    });
  }

  async waitForDetailsPage(): Promise<void> {
    await test.step('Wait for details page to load', async () => {
      await this.waitForPageLoad();
      await this.title.waitFor({ state: 'visible' });
    });
  }

  async getTitleText(): Promise<string> {
    return await test.step('Get title text', async () => {
      return (await this.title.innerText()).trim();
    });
  }

  async getContentText(): Promise<string> {
    return await test.step('Get content text', async () => {
      return (await this.content.innerText()).trim();
    });
  }

  async isCoverImageVisible(): Promise<boolean> {
    return await test.step('Check if cover image is visible', async () => {
      try {
        await this.coverImage.waitFor({ state: 'visible', timeout: env.SHORT_TIMEOUT });
        return true;
      } catch {
        return false;
      }
    });
  }

  async getAuthorName(): Promise<string> {
    return await test.step('Get author name', async () => {
      const text = (await this.authorName.innerText()).trim();
      return text.replace(/^автор\s*/i, '');
    });
  }

  async clickAuthor(): Promise<void> {
    await test.step('Click on author name', async () => {
      await this.authorName.click();
    });
  }

  async getPublicationDate(): Promise<string> {
    return await test.step('Get publication date', async () => {
      return (await this.publicationDate.innerText()).trim();
    });
  }

  async getTagTexts(): Promise<string[]> {
    return await test.step('Get tag texts', async () => {
      return this.tags.allInnerTexts();
    });
  }

  async clickTag(tagName: string): Promise<void> {
    await test.step(`Click tag: ${tagName}`, async () => {
      await this.tags.filter({ hasText: tagName }).first().click();
    });
  }

  async clickBack(): Promise<void> {
    await test.step('Click back button', async () => {
      await this.backButton.click();
    });
  }

  async isRelatedNewsWidgetVisible(): Promise<boolean> {
    return this.relatedNewsHeading.isVisible();
  }

  async getRelatedNewsCount(): Promise<number> {
    return await test.step('Get related news count', async () => {
      return this.relatedNewsItems.count();
    });
  }

  async openRelatedNewsItem(index: number): Promise<void> {
    await test.step(`Open related news item at index ${index}`, async () => {
      await this.relatedNewsItems.nth(index).click();
    });
  }

  async clickLike(): Promise<void> {
    await this.likeButton.click();
  }

  async getLikesCount(): Promise<number> {
    const text = (await this.likesCount.innerText()).trim();
    return Number(text) || 0;
  }

  async typeComment(text: string): Promise<void> {
    await this.commentInput.click();
    await this.commentInput.fill(text);
  }

  async submitComment(): Promise<void> {
    await this.submitCommentButton.click();
  }

  async getCommentsCountText(): Promise<string> {
    return (await this.commentsCounter.innerText()).trim();
  }
}