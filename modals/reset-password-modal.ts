import { test, type Locator, type Page } from '@playwright/test';
import { BaseModal } from '@/modals/base-modal';

/**
 * Reset-password (confirm restore) surface (app-confirm-restore-password).
 * Opened from the emailed link: /#/auth/restore?token=...&user_id=...
 * Lives outside app-auth-modal on its own route.
 */
export class ResetPasswordModal extends BaseModal {
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly submitButton: Locator;
  readonly showPasswordButtons: Locator;

  constructor(page: Page) {
    super(page, page.locator('app-confirm-restore-password').first());

    this.passwordInput = this.root.locator('input[formcontrolname="password"]');
    this.confirmPasswordInput = this.root.locator('input[formcontrolname="confirmPassword"]');
    this.submitButton = this.root.locator('form.restore-password-form button[type="submit"]');
    this.showPasswordButtons = this.root.locator('.show-password-img');
  }

  /**
   * Navigates to the restore URL from a password-reset email.
   * @param token - Restore token from the email link.
   * @param userId - User id query param from the email link.
   */
  async open(token: string, userId: string | number): Promise<void> {
    await test.step('Reset-password: open restore URL', async () => {
      await this.page.goto(`/#/auth/restore?token=${encodeURIComponent(token)}&user_id=${userId}`);
      await this.waitForVisible();
    });
  }

  /** Types the new password. */
  async fillPassword(password: string): Promise<void> {
    await test.step('Reset-password: fill password', async () => {
      await this.passwordInput.fill(password);
    });
  }

  /** Types the new password confirmation. */
  async fillConfirmPassword(password: string): Promise<void> {
    await test.step('Reset-password: fill confirm password', async () => {
      await this.confirmPasswordInput.fill(password);
    });
  }

  /** Submits the new password. */
  async clickSubmit(): Promise<void> {
    await test.step('Reset-password: click Змінити пароль', async () => {
      await this.submitButton.click();
    });
  }

  /**
   * Fills both password fields and submits.
   * @param password - New password (must match confirm).
   * @param confirmPassword - Confirmation of the new password.
   */
  async changePassword(password: string, confirmPassword: string = password): Promise<void> {
    await test.step('Reset-password: change password', async () => {
      await this.fillPassword(password);
      await this.fillConfirmPassword(confirmPassword);
      await this.clickSubmit();
    });
  }

  /** Toggles visibility of the new-password field. */
  async togglePasswordVisibility(
    field: 'password' | 'confirmPassword' = 'password'
  ): Promise<void> {
    await test.step(`Reset-password: toggle ${field} visibility`, async () => {
      const index = field === 'password' ? 0 : 1;
      await this.showPasswordButtons.nth(index).click();
    });
  }

  /** Whether the submit control is enabled (passwords match and pass validators). */
  async isSubmitButtonEnabled(): Promise<boolean> {
    return await this.submitButton.isEnabled();
  }
}
