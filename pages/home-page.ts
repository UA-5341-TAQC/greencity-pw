import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class HomePage extends BasePage {
  /**
   * Home hero CTA ("Start forming a habit!").
   * Structural + locale-independent: the live build renders the same CTA in the
   * app-stat-row blocks, while `button:has-text("Start forming")` only matched
   * when the browser locale was pinned to en-US.
   */
  protected readonly startFormingButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.startFormingButtons = page.locator('app-stat-row button.primary-global-button');
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
    await this.startFormingButtons.first().click();
  }
}
