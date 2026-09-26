import type { Page, Locator } from '@playwright/test';
import { BaseModal } from '@/modals/base-modal';

export class CancelWarningModal extends BaseModal {
  protected readonly closeButton: Locator;
  protected readonly warningText: Locator;
  protected readonly continueEditingButton: Locator;
  protected readonly cancelEditingButton: Locator;

  constructor(page: Page) {
    super(page, page.locator('app-warning-pop-up').first());

    this.closeButton = this.root.locator('button.close');
    this.warningText = this.root.locator('div.warning-text');
    this.continueEditingButton = this.root.locator('button.secondary-global-button');
    this.cancelEditingButton = this.root.locator('button.primary-global-button');
  }

  /** Returns the warning text displayed in the modal. */
  async getWarningText(): Promise<string> {
    return (await this.warningText.innerText()).trim();
  }

  /** * Continues editing the news. */
  async continueEditing(): Promise<void> {
    await this.continueEditingButton.click();
  }

  /** * Confirms cancelling news creation. */
  async cancelEditing(): Promise<void> {
    await this.cancelEditingButton.click();
  }

  /** * Closes the warning modal using the close button. */
  async close(): Promise<void> {
    await this.closeButton.click();
  }
}
