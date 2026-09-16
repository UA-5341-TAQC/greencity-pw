import { test, type Locator, type Page } from '@playwright/test';
import { BaseModal } from './base-modal';

/**
 * Sign-in modal (app-auth-modal > app-sign-in).
 * Opened from the header "Увійти" / "Sign in" control.
 */
export class SignInModal extends BaseModal {
  readonly emailInput: Locator;
  readonly passwordInput: Locator;
  readonly showPasswordButton: Locator;
  readonly forgotPasswordLink: Locator;
  readonly signInButton: Locator;
  readonly googleSignInButton: Locator;
  readonly signUpLink: Locator;
  readonly errorMessage: Locator;

  constructor(page: Page) {
    super(page, page.locator('app-auth-modal').first());

    this.emailInput = this.root.locator('app-sign-in input#email');
    this.passwordInput = this.root.locator('app-sign-in input#password');
    this.showPasswordButton = this.root.locator('app-sign-in .show-hide-btn');
    this.forgotPasswordLink = this.root.locator('app-sign-in a.forgot-password');
    this.signInButton = this.root.locator('app-sign-in button[type="submit"]');
    this.googleSignInButton = this.root.locator('app-sign-in button.google-sign-in');
    this.signUpLink = this.root.locator('app-sign-in a.green-link');
    this.errorMessage = this.root.locator(
      'app-sign-in app-error, app-sign-in .validation-email-error, app-sign-in .validation-password-error'
    );
  }

  /** Types an email into the email field. */
  async fillEmail(email: string): Promise<void> {
    await test.step(`Sign-in: fill email "${email}"`, async () => {
      await this.emailInput.fill(email);
    });
  }

  /** Types a password into the password field. */
  async fillPassword(password: string): Promise<void> {
    await test.step('Sign-in: fill password', async () => {
      await this.passwordInput.fill(password);
    });
  }

  /** Submits the sign-in form. */
  async clickSignIn(): Promise<void> {
    await test.step('Sign-in: click Увійти', async () => {
      await this.signInButton.click();
    });
  }

  /** Fills credentials and submits in one action. */
  async signIn(email: string, password: string): Promise<void> {
    await test.step(`Sign-in as ${email}`, async () => {
      await this.fillEmail(email);
      await this.fillPassword(password);
      await this.clickSignIn();
    });
  }

  /** Switches the form to the forgot-password flow. */
  async clickForgotPassword(): Promise<void> {
    await test.step('Sign-in: click Забули пароль?', async () => {
      await this.forgotPasswordLink.click();
    });
  }

  /** Switches the form to the sign-up / registration flow. */
  async clickSignUp(): Promise<void> {
    await test.step('Sign-in: click Зареєструватися', async () => {
      await this.signUpLink.click();
    });
  }

  /** Continues with Google OAuth. */
  async clickGoogleSignIn(): Promise<void> {
    await test.step('Sign-in: click Увійти через Google', async () => {
      await this.googleSignInButton.click();
    });
  }

  /** Toggles password visibility via the eye control. */
  async togglePasswordVisibility(): Promise<void> {
    await test.step('Sign-in: toggle password visibility', async () => {
      await this.showPasswordButton.click();
    });
  }

  /** Whether the primary submit control is enabled. */
  async isSignInButtonEnabled(): Promise<boolean> {
    return await this.signInButton.isEnabled();
  }

  /** Visible validation / auth error text, or empty string. */
  async getErrorMessage(): Promise<string> {
    return await test.step('Sign-in: read error message', async () => {
      if ((await this.errorMessage.count()) === 0) {
        return '';
      }
      return (await this.errorMessage.first().innerText()).trim();
    });
  }
}
