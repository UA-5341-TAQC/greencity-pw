import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

/**
 * Component representing an individual active filter chip/badge (e.g., date range, tags).
 */
export class ActiveFilterChipComponent extends BaseComponent {
  protected readonly crossButton: Locator;

  constructor(root: Locator, page?: Page) {
    super(root, page);
    this.crossButton = this.root.locator('.cross-container');
  }

  /** Returns the root locator of the chip for assertions */
  get chip(): Locator {
    return this.root;
  }

  /** Returns the text content of the active filter chip */
  async getText(): Promise<string> {
    return await test.step('Get active filter chip text', async () => {
      return (await this.root.innerText()).trim();
    });
  }

  /** Removes this filter by clicking its cross button */
  async remove(): Promise<void> {
    await test.step('Remove active filter chip', async () => {
      await this.crossButton.click();
    });
  }
}
