import { test, type Locator, type Page } from '@playwright/test';

/**
 * Shared base for GreenCity modal / overlay COMs.
 * Common chrome (title, close) lives here; subclasses add form-specific locators.
 */
export abstract class BaseModal {
  protected readonly page: Page;
  protected readonly root: Locator;

  /** Primary heading inside the modal. */
  readonly title: Locator;
  /** Secondary heading under the title, when present. */
  readonly subtitle: Locator;
  /** Close control (`.close-modal-window` / cross button). */
  readonly closeButton: Locator;

  constructor(page: Page, root: Locator) {
    this.page = page;
    this.root = root;
    this.title = this.root.locator('h1').first();
    this.subtitle = this.root.locator('h2').first();
    this.closeButton = this.root.locator('a.close-modal-window, .close-modal-window').first();
  }

  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }

  async isHidden(): Promise<boolean> {
    return this.root.isHidden();
  }

  async isEnabled(): Promise<boolean> {
    return this.root.isEnabled();
  }

  async isDisabled(): Promise<boolean> {
    return this.root.isDisabled();
  }

  async waitForVisible(timeout = 5000): Promise<void> {
    await this.root.waitFor({ state: 'visible', timeout });
  }

  async waitForHidden(timeout = 5000): Promise<void> {
    await this.root.waitFor({ state: 'hidden', timeout });
  }

  async click(): Promise<void> {
    await this.root.click();
  }

  /** Reads the modal title text. */
  async getTitle(): Promise<string> {
    return await test.step('Modal: read title', async () => (await this.title.innerText()).trim());
  }

  /** Reads the modal subtitle text, or empty string when absent. */
  async getSubtitle(): Promise<string> {
    return await test.step('Modal: read subtitle', async () => {
      if ((await this.subtitle.count()) === 0) {
        return '';
      }
      return (await this.subtitle.innerText()).trim();
    });
  }

  /** Closes the modal via the close control. */
  async close(): Promise<void> {
    await test.step('Modal: close', async () => {
      await this.closeButton.click();
    });
  }
}
