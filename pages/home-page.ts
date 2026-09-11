import type { Page } from '@playwright/test';
import BasePage from '@/pages/base-page';

export default class HomePage extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  async navigateToHomePage(): Promise<void> {
    await this.navigateTo('/#/greenCity');
  }
  async waitForHomePage(): Promise<void> {
    await this.waitForPageLoad();
  }

  async getTitle(): Promise<string> {
    return await this.page.title();
  }
}
