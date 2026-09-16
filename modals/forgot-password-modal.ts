import { test, type Locator, type Page } from '@playwright/test';
import { BaseModal } from './base-modal';

/**
 * Forgot-password modal (app-auth-modal > app-restore-password).
 * Opened from the sign-in modal via "Забули пароль?".
 */
export class ForgotPasswordModal extends BaseModal {
  readonly emailInput: Locator;
  readonly submitButton: Locator;
  readonly googleSignInButton: Locator;
  readonly backToSignInLink: Locator;

  constructor(page: Page) {
    super(page, page.locator('app-auth-modal').first());

    this.emailInput = this.root.locator('app-restore-password input#email');
    this.submitButton = this.root.locator('app-restore-password button[type="submit"]');
    this.googleSignInButton = this.root.locator('app-restore-password button.google-sign-in');
    this.backToSignInLink = this.root.locator('app-restore-password a.green-link');
  }

  /** Types the account email that should receive the restore link. */
  async fillEmail(email: string): Promise<void> {
    await test.step(`Forgot-password: fill email "${email}"`, async () => {
      await this.emailInput.fill(email);
    });
  }

  /** Sends the password-restore email. */
  async clickSubmit(): Promise<void> {
    await test.step('Forgot-password: click Надіслати посилання для входу', async () => {
      await this.submitButton.click();
    });
  }

  /** Fills email and submits in one action. */
  async sendRestoreLink(email: string): Promise<void> {
    await test.step(`Forgot-password: send restore link to ${email}`, async () => {
      await this.fillEmail(email);
      await this.clickSubmit();
    });
  }

  /** Returns to the sign-in form. */
  async clickBackToSignIn(): Promise<void> {
    await test.step('Forgot-password: click Назад до входу', async () => {
      await this.backToSignInLink.click();
    });
  }

  /** Continues with Google OAuth. */
  async clickGoogleSignIn(): Promise<void> {
    await test.step('Forgot-password: click Увійти через Google', async () => {
      await this.googleSignInButton.click();
    });
  }

  /** Whether the submit control is enabled. */
  async isSubmitButtonEnabled(): Promise<boolean> {
    return await this.submitButton.isEnabled();
  }
}
