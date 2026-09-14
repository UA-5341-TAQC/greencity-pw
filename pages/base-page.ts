import type { Page, BrowserContext } from '@playwright/test';

export default class BasePage {
  protected page: Page;
  protected context: BrowserContext;
  protected constructor(page: Page) {
    this.page = page;
    this.context = page.context();
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
