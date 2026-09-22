import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

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
    this.coverImage = page.locator('[class*="cover"] img, main img').first();
    this.authorName = page.locator('[class*="author-name"], [class*="author"] [class*="name"]');
    this.authorAvatar = page.locator('[class*="author"] img');
    this.publicationDate = page.locator('[class*="date"]').first();
    this.tags = page.locator('[class*="tag"]');
    this.backButton = page.locator('button:has-text("Back"), a[class*="back"]');
    this.relatedNewsItems = page.locator(
      '[class*="related"] [class*="news-item"], [class*="related"] [class*="news-card"]'
    );
  }

  async navigateToNewsDetails(newsId: string | number): Promise<void> {
    await this.navigateTo(`/#/greenCity/news/${newsId}`);
  }

  async waitForDetailsPage(): Promise<void> {
    await this.waitForPageLoad();
    await this.title.waitFor({ state: 'visible' });
  }

  async getTitleText(): Promise<string> {
    return (await this.title.innerText()).trim();
  }

  async getContentText(): Promise<string> {
    return (await this.content.innerText()).trim();
  }

  async isCoverImageVisible(): Promise<boolean> {
    return this.coverImage.isVisible();
  }

  async getAuthorName(): Promise<string> {
    return (await this.authorName.innerText()).trim();
  }

  async clickAuthor(): Promise<void> {
    await this.authorName.click();
  }

  async getPublicationDate(): Promise<string> {
    return (await this.publicationDate.innerText()).trim();
  }

  async getTagTexts(): Promise<string[]> {
    return this.tags.allInnerTexts();
  }

  async clickTag(tagName: string): Promise<void> {
    await this.tags.filter({ hasText: tagName }).first().click();
  }

  async clickBack(): Promise<void> {
    await this.backButton.click();
  }

  async getRelatedNewsCount(): Promise<number> {
    return this.relatedNewsItems.count();
  }

  async openRelatedNewsItem(index: number): Promise<void> {
    await this.relatedNewsItems.nth(index).click();
  }
}
