import { test, type Locator, type Page } from '@playwright/test';
import { BaseModal } from '@/modals/base-modal';

/**
 * Sign-up / registration modal (app-auth-modal > app-sign-up).
 * Opened from the header "Зареєструватися" control or the sign-in footer link.
 */
export class SignUpModal extends BaseModal {
  readonly emailInput: Locator;
  readonly firstNameInput: Locator;
  readonly passwordInput: Locator;
  readonly confirmPasswordInput: Locator;
  readonly signUpButton: Locator;
  readonly googleSignUpButton: Locator;
  readonly signInLink: Locator;
  readonly passwordHint: Locator;

  constructor(page: Page) {
    super(page, page.locator('app-auth-modal').first());

    this.emailInput = this.root.locator('app-sign-up input#email');
    this.firstNameInput = this.root.locator('app-sign-up input#firstName');
    this.passwordInput = this.root.locator('app-sign-up input#password');
    this.confirmPasswordInput = this.root.locator('app-sign-up input#repeatPassword');
    this.signUpButton = this.root.locator('app-sign-up button[type="submit"]');
    this.googleSignUpButton = this.root.locator('app-sign-up button.google-sign-in');
    this.signInLink = this.root.locator('app-sign-up a.green-link');
    this.passwordHint = this.root.locator('app-sign-up .container p');
  }

  /** Types an email into the email field. */
  async fillEmail(email: string): Promise<void> {
    await test.step(`Sign-up: fill email "${email}"`, async () => {
      await this.emailInput.fill(email);
    });
  }

  /** Types the user name (single first-name field in the live UI). */
  async fillFirstName(firstName: string): Promise<void> {
    await test.step(`Sign-up: fill first name "${firstName}"`, async () => {
      await this.firstNameInput.fill(firstName);
    });
  }

  /** Types a password into the password field. */
  async fillPassword(password: string): Promise<void> {
    await test.step('Sign-up: fill password', async () => {
      await this.passwordInput.fill(password);
    });
  }

  /** Types the same password into the confirm field. */
  async fillConfirmPassword(password: string): Promise<void> {
    await test.step('Sign-up: fill confirm password', async () => {
      await this.confirmPasswordInput.fill(password);
    });
  }

  /** Submits the registration form. */
  async clickSignUp(): Promise<void> {
    await test.step('Sign-up: click Зареєструватися', async () => {
      await this.signUpButton.click();
    });
  }

  /**
   * Fills all registration fields and submits.
   * @param data - Registration payload matching the live form.
   */
  async signUp(data: {
    email: string;
    firstName: string;
    password: string;
    confirmPassword: string;
  }): Promise<void> {
    await test.step(`Sign-up as ${data.email}`, async () => {
      await this.fillEmail(data.email);
      await this.fillFirstName(data.firstName);
      await this.fillPassword(data.password);
      await this.fillConfirmPassword(data.confirmPassword);
      await this.clickSignUp();
    });
  }

  /** Switches the form to the sign-in flow. */
  async clickSignIn(): Promise<void> {
    await test.step('Sign-up: click Увійти', async () => {
      await this.signInLink.click();
    });
  }

  /** Continues with Google OAuth. */
  async clickGoogleSignUp(): Promise<void> {
    await test.step('Sign-up: click Зареєструватися через Google', async () => {
      await this.googleSignUpButton.click();
    });
  }

  /** Whether the primary submit control is enabled. */
  async isSignUpButtonEnabled(): Promise<boolean> {
    return await this.signUpButton.isEnabled();
  }
}
