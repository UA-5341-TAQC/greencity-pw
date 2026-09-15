import type { Page, BrowserContext, Locator } from '@playwright/test';
import { HeaderComponent } from '../components/header.component';

export default class BasePage {
  protected page: Page;
  protected context: BrowserContext;

  public readonly header: HeaderComponent;
  public readonly toastMessage: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.context = page.context();
    this.header = new HeaderComponent(page);
    // Angular Material SnackBar
    this.toastMessage = page
      .locator('snack-bar-container .mat-mdc-snack-bar-label, snack-bar-container')
      .first();
  }

  async waitForToastToDisappear(): Promise<void> {
    await this.toastMessage.waitFor({ state: 'hidden' });
  }

  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
