import { type Locator, type Page } from '@playwright/test';

export class HeaderComponent {
  readonly root: Locator;
  readonly logoLink: Locator;

  constructor(page: Page) {
    this.root = page.locator('header').first();
    this.logoLink = this.root.locator('a').first();
  }
}
