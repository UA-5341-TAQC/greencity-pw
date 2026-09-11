import { type Locator, type Page } from '@playwright/test';

export class FooterComponent {
  readonly root: Locator;

  constructor(page: Page) {
    this.root = page.locator('footer').first();
  }
}
