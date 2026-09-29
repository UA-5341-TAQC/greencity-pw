import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class ProfileToDoListCardComponent extends BaseComponent {
  readonly header: Locator;
  readonly itemsCount: Locator;

  constructor(page: Page) {
    super(page.locator('app-to-do-list:visible').first(), page);
    this.header = this.root.locator('.header:visible');
    this.itemsCount = this.root.locator('.items-count:visible').first();
  }

  async getHeaderText(): Promise<string> {
    return this.header.innerText();
  }

  async getItemsCountText(): Promise<string> {
    return this.itemsCount.innerText();
  }
}
