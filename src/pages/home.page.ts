import { type Locator, type Page } from '@playwright/test';

import { BasePage } from './base.page';

export class HomePage extends BasePage {
  readonly mainHeading: Locator;

  constructor(page: Page) {
    super(page);
    this.mainHeading = page.locator('h1').first();
  }

  async expectMainHeadingVisible(): Promise<void> {
    await this.expectVisible(this.mainHeading);
  }
}
