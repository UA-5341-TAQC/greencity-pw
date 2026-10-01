import { test, type Page, type Locator } from '@playwright/test';
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
    return await test.step('CancelWarningModal: get warning text', async () => {
      return (await this.warningText.innerText()).replace(/\s+/g, ' ').trim();
    });
  }

  /** Continues editing the news. */
  async continueEditing(): Promise<void> {
    await test.step('CancelWarningModal: click continue editing', async () => {
      await this.continueEditingButton.click();
    });
  }

  /** Confirms cancelling news creation. */
  async cancelEditing(): Promise<void> {
    await test.step('CancelWarningModal: click cancel editing', async () => {
      await this.cancelEditingButton.click();
    });
  }

  /** Closes the warning modal using the close button. */
  async close(): Promise<void> {
    await test.step('CancelWarningModal: close modal', async () => {
      await this.closeButton.click();
    });
  }
}
export default CancelWarningModal;
