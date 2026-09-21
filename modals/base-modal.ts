import type { Locator, Page } from '@playwright/test';
import env from '../config/env';

export abstract class BaseModal {
  protected readonly page: Page;
  protected readonly root: Locator;

  constructor(page: Page, root: Locator) {
    this.page = page;
    this.root = root;
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

  async waitForVisible(timeout = env.SHORT_TIMEOUT): Promise<void> {
    await this.root.waitFor({ state: 'visible', timeout });
  }

  async waitForHidden(timeout = env.SHORT_TIMEOUT): Promise<void> {
    await this.root.waitFor({ state: 'hidden', timeout });
  }

  async click(): Promise<void> {
    await this.root.click();
  }
}
