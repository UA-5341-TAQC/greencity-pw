import { Locator, Page } from '@playwright/test';
import { BaseModal } from './base-modal';

/**
 * Modal for confirming cancellation of comment editing.
 */
export class CommentEditWarningModal extends BaseModal {
  protected readonly warningTitle: Locator;
  protected readonly closeButton: Locator;
  protected readonly noButton: Locator;
  protected readonly yesButton: Locator;

  constructor(page: Page) {
    const root = page.locator('app-warning-pop-up');

    super(page, root);

    this.warningTitle = this.root.locator('.warning-title');

    this.closeButton = this.root.locator('button.close');

    this.noButton = this.root.getByRole('button', {
      name: 'No',
    });

    this.yesButton = this.root.getByRole('button', {
      name: 'Yes',
    });
  }

  /** Checks whether the comment edit warning modal is visible. */
  async isVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }

  /** Returns the comment edit warning message. */
  async getWarningTitle(): Promise<string> {
    return (await this.warningTitle.textContent())?.trim() ?? '';
  }

  /** Checks whether the Close button is visible. */
  async isCloseButtonVisible(): Promise<boolean> {
    return await this.closeButton.isVisible();
  }

  /** Clicks the Close button. */
  async clickClose(): Promise<void> {
    await this.closeButton.click();
  }

  /** Checks whether the No button is visible. */
  async isNoButtonVisible(): Promise<boolean> {
    return await this.noButton.isVisible();
  }

  /** Clicks No and keeps the comment in edit mode. */
  async clickNo(): Promise<void> {
    await this.noButton.click();
  }

  /** Checks whether the Yes button is visible. */
  async isYesButtonVisible(): Promise<boolean> {
    return await this.yesButton.isVisible();
  }

  /** Clicks Yes and confirms cancellation of comment editing. */
  async clickYes(): Promise<void> {
    await this.yesButton.click();
  }
}
