import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class HomePage extends BasePage {
  protected readonly buttons: Locator;

  constructor(page: Page) {
    super(page);
    this.buttons = page.locator('button:has-text("Start forming")');
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

  async clickStartFormingButton(): Promise<void> {
    await this.buttons.first().click();
  }
}
