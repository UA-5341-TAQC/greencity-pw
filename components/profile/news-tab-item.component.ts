import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

/**
 * COM for a single news card on the profile dashboard news tab.
 * Live root: app-profile-dashboard news body → app-one-news (5 cards rendered)
 *
 * Verified live structure:
 *   .news > img.news-image[alt="news image"]
 *   .news-content > .title h3 / .tag-btn (1-2 per card)
 *   .user-info-date p / .user-info-icon p
 */
export class NewsTabItem extends BaseComponent {
  readonly card: Locator;
  readonly image: Locator;
  readonly title: Locator;
  readonly tags: Locator;
  readonly dateText: Locator;
  readonly authorText: Locator;

  constructor(root: Locator, page?: Page) {
    super(root, page);

    this.card = this.root.locator('.news').first();
    this.image = this.root.locator('img.news-image').first();
    this.title = this.root.locator('.news-content .title h3').first();
    this.tags = this.root.locator('.news-content .tag-btn');
    this.dateText = this.root.locator('.user-info-date p').first();
    this.authorText = this.root.locator('.user-info-icon p').first();
  }

  async getTitle(): Promise<string> {
    return test.step('NewsTabItem: title', async () => (await this.title.innerText()).trim());
  }

  async getDate(): Promise<string> {
    return test.step('NewsTabItem: date', async () => (await this.dateText.innerText()).trim());
  }

  async getAuthor(): Promise<string> {
    return test.step('NewsTabItem: author', async () => (await this.authorText.innerText()).trim());
  }

  async getTagCount(): Promise<number> {
    return this.tags.count();
  }

  /** Opens the news detail (card / li is focusable on live build). */
  async open(): Promise<void> {
    await test.step('NewsTabItem: open', async () => {
      await this.root.click();
    });
  }
}
