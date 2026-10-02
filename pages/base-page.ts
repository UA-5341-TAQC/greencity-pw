import type { Page, BrowserContext, Locator } from '@playwright/test';
import { HeaderComponent } from '@/components';

/**
 * Base page class containing common elements like header, footer, and toasts.
 * All other page objects should inherit from this class.
 */
export default class BasePage {
  protected page: Page;
  protected context: BrowserContext;

  public readonly header: HeaderComponent;
  public readonly toastMessage: Locator;

  protected constructor(page: Page) {
    this.page = page;
    this.context = page.context();
    this.header = new HeaderComponent(page);
    this.toastMessage = page
      .locator('snack-bar-container .mat-mdc-snack-bar-label, mat-snack-bar-container')
      .last();
  }

  /**
   * Waits for the global toast message (snack-bar) to disappear from the screen.
   * Useful to call if the toast is blocking an element you need to click.
   */
  async waitForToastToDisappear(): Promise<void> {
    await this.toastMessage.waitFor({ state: 'hidden' });
  }

  /**
   * Navigates to the specified URL.
   * @param url - The URL to navigate to.
   */
  async navigateTo(url: string): Promise<void> {
    await this.page.goto(url);
  }

  /**
   * Scrolls the page to the top or bottom based on the specified direction.
   * @param direction 
   */
  async scrollPage(direction: 'up' | 'down'): Promise<void> {
    await this.page.evaluate((scrollDirection) => {
      const top = scrollDirection === 'down' ? document.documentElement.scrollHeight : 0;
      window.scrollTo(0, top);
    }, direction);
  }

  /**
   * Waits for the page load state to be "networkidle".
   * This ensures all background network requests are finished.
   */
  async waitForPageLoad(): Promise<void> {
    await this.page.waitForLoadState('networkidle');
  }
}
