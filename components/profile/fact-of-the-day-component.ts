import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class FactOfTheDayComponent extends BaseComponent {
  readonly title: Locator;
  readonly description: Locator;

  constructor(page: Page) {
    super(page.locator('.app-profile-cards').first(), page);

    const card = this.root.locator('.card:has(.cart-title)');

    this.title = card.locator('.cart-title');
    this.description = card.locator('.card-description');
  }

  async getFactText(): Promise<string> {
    return await this.description.innerText();
  }

  async getFactTitle(): Promise<string> {
    return await this.title.innerText();
  }
}
