import type { Page, Locator } from '@playwright/test';

export abstract class BaseComponent {
  protected page: Page;
  protected root: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    this.page = page ?? rootLocator.page();
    this.root = rootLocator;
  }

  async isVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }
  async isHidden(): Promise<boolean> {
    return await this.root.isHidden();
  }
  async isEnabled(): Promise<boolean> {
    return await this.root.isEnabled();
  }
  async isDisabled(): Promise<boolean> {
    return !(await this.root.isEnabled());
  }
  async waitForVisible(timeout: number = 5000): Promise<void> {
    await this.root.waitFor({ state: 'visible', timeout });
  }

  async waitForHidden(timeout: number = 5000): Promise<void> {
    await this.root.waitFor({ state: 'hidden', timeout });
  }

  async click(): Promise<void> {
    await this.root.click();
  }
}
