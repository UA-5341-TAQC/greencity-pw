import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class EcoNewsDetailsRelatedNewsComponent extends BaseComponent {
  readonly heading: Locator;
  readonly items: Locator;
  private readonly itemTitles: Locator;
  private readonly itemSummaries: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);

    this.heading = this.root.locator('.wrapper > p');
    this.items = this.root.locator('app-news-list-gallery-view.recommended-item');
    this.itemTitles = this.items.locator('.title-list h3');
    this.itemSummaries = this.items.locator('.list-text');
  }

  async scrollIntoView(): Promise<void> {
    await test.step('Scroll to related news section', async () => {
      await this.heading.scrollIntoViewIfNeeded();
    });
  }

  async getItemTitle(index: number): Promise<string> {
    return await test.step(`Get title of related news item at index ${index}`, async () => {
      return (await this.itemTitles.nth(index).innerText()).trim();
    });
  }

  async getItemSummary(index: number): Promise<string> {
    return await test.step(`Get summary of related news item at index ${index}`, async () => {
      return (await this.itemSummaries.nth(index).innerText()).trim();
    });
  }

  async openItem(index: number): Promise<void> {
    await test.step(`Open related news item at index ${index}`, async () => {
      await this.items.nth(index).click();
    });
  }
}
