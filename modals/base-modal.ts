import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

/**
 * Shared base for GreenCity modal / overlay COMs.
 * Common chrome (title, close) lives here; subclasses add form-specific locators.
 * Extends BaseComponent so visibility/enabled/click semantics stay in one place.
 * A single root is enough: `app-auth-modal` mounts one sub-form at a time, and that
 * sub-form holds the only `<h1>` (verified live for sign-in / sign-up / restore).
 */
export abstract class BaseModal extends BaseComponent {
  /** Primary heading inside the modal. */
  readonly title: Locator;
  /** Secondary heading under the title, when present. */
  readonly subtitle: Locator;
  /** Close control (`.close-modal-window` / cross button). */
  readonly closeButton: Locator;

  constructor(page: Page, root: Locator) {
    super(root, page);

    this.title = this.root.locator('h1').first();
    this.subtitle = this.root.locator('h2').first();
    this.closeButton = this.root.locator('a.close-modal-window, .close-modal-window').first();
  }

  /** Reads the modal title text. */
  async getTitle(): Promise<string> {
    return await test.step('Modal: read title', async () => (await this.title.innerText()).trim());
  }

  /** Reads the modal subtitle text, or empty string when absent. */
  async getSubtitle(): Promise<string> {
    return await test.step('Modal: read subtitle', async () => {
      if ((await this.subtitle.count()) === 0) {
        return '';
      }
      return (await this.subtitle.innerText()).trim();
    });
  }

  /** Closes the modal via the close control. */
  async close(): Promise<void> {
    await test.step('Modal: close', async () => {
      await this.closeButton.click();
    });
  }
}
