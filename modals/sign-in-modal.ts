import type { Locator, Page } from '@playwright/test';
import { BaseModal } from './base-modal';

export class SignInModal extends BaseModal {
  private static readonly ROOT_LOCATOR = 'app-auth-modal';

  private readonly emailInput: Locator;
  private readonly passwordInput: Locator;
  private readonly signInButton: Locator;

  constructor(page: Page) {
    super(page, page.locator(SignInModal.ROOT_LOCATOR));

    this.emailInput = this.root.locator('#email');
    this.passwordInput = this.root.locator('#password');
    this.signInButton = this.root.locator('button[type="submit"]');
  }

  async fillEmail(email: string): Promise<void> {
    await this.emailInput.fill(email);
  }

  async fillPassword(password: string): Promise<void> {
    await this.passwordInput.fill(password);
  }

  async clickSignIn(): Promise<void> {
    await this.signInButton.click();
  }

  async isSignInButtonEnabled(): Promise<boolean> {
    return this.signInButton.isEnabled();
  }
}
