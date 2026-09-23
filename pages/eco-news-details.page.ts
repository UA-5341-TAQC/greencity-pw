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
  private readonly relatedNewsItems: Locator;

  constructor(page: Page) {
    super(page);

    this.title = page.locator('h1, [class*="title"]').first();
    this.content = page.locator('[class*="content"], [class*="text"]').first();
    this.coverImage = page.locator('.news-image-img').first();
    this.authorName = page.locator('.news-info-author').first();
    this.authorAvatar = page.locator('[class*="author"] img');
    this.publicationDate = page.locator('.news-info-date').first();
    this.tags = page.locator('.tags div.tags-item');
    this.backButton = page.locator('div.back-button, a[class*="back"]');
    this.relatedNewsItems = page.locator(
      '[class*="related"] [class*="news-item"], [class*="related"] [class*="news-card"]'
    );
  }

  async navigateToNewsDetails(newsId: string | number): Promise<void> {
    await test.step(`Navigate to Eco News Details for newsId: ${newsId}`, async () => {
      await this.navigateTo(`/#/greenCity/news/${newsId}`);
    }, { box: true });
  }

  async waitForDetailsPage(): Promise<void> {
    await test.step('Wait for details page to load', async () => {
      await this.waitForPageLoad();
      await this.title.waitFor({ state: 'visible' });
    }, { box: true });
  }

  async getTitleText(): Promise<string> {
    return await test.step('Get title text', async () => {
      return (await this.title.innerText()).trim();
    }, { box: true });
  }

  async getContentText(): Promise<string> {
    return await test.step('Get content text', async () => {
      return (await this.content.innerText()).trim();
    }, { box: true });
  }

  async isCoverImageVisible(): Promise<boolean> {
    return await test.step('Check if cover image is visible', async () => {
      try {
        await this.coverImage.waitFor({ state: 'visible', timeout: env.SHORT_TIMEOUT });
        return true;
      } catch {
        return false;
      }
    }, { box: true });
  }

  async getAuthorName(): Promise<string> {
    return await test.step('Get author name', async () => {
      return (await this.authorName.innerText()).trim();
    }, { box: true });
  }

  async clickAuthor(): Promise<void> {
    await test.step('Click on author name', async () => {
      await this.authorName.click();
    }, { box: true });
  }

  async getPublicationDate(): Promise<string> {
    return await test.step('Get publication date', async () => {
      return (await this.publicationDate.innerText()).trim();
    }, { box: true });
  }

  async getTagTexts(): Promise<string[]> {
    return await test.step('Get tag texts', async () => {
      return this.tags.allInnerTexts();
    }, { box: true });
  }

  async clickTag(tagName: string): Promise<void> {
    await test.step(`Click tag: ${tagName}`, async () => {
      await this.tags.filter({ hasText: tagName }).first().click();
    }, { box: true });
  }

  async clickBack(): Promise<void> {
    await test.step('Click back button', async () => {
      await this.backButton.click();
    }, { box: true });
  }

  async getRelatedNewsCount(): Promise<number> {
    return await test.step('Get related news count', async () => {
      return this.relatedNewsItems.count();
    }, { box: true });
  }

  async openRelatedNewsItem(index: number): Promise<void> {
    await test.step(`Open related news item at index ${index}`, async () => {
      await this.relatedNewsItems.nth(index).click();
    }, { box: true });
  }
}
