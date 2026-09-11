import { type Locator, type Page } from '@playwright/test';

export class ModalComponent {
  readonly root: Locator;

  constructor(page: Page) {
    this.root = page.locator('[role="dialog"]');
  }

  async isVisible(): Promise<boolean> {
    return this.root.isVisible();
  }
}
