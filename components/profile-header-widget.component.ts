import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from './base-component';

/**
 * COM for the My Space profile header widget (app-profile-header).
 * Structural class/href locators only.
 */
export class ProfileHeaderWidgetComponent extends BaseComponent {
  readonly avatar: Locator;
  readonly name: Locator;
  readonly location: Locator;
  readonly rate: Locator;
  readonly editIcon: Locator;
  readonly socialLinks: Locator;
  readonly progressChains: Locator;

  constructor(page: Page) {
    super(page.locator('app-profile-header').first(), page);

    this.avatar = this.root
      .locator('app-user-profile-image .profile-avatar-wrapper, app-user-profile-image')
      .first();
    this.name = this.root.locator('p.name').first();
    this.location = this.root.locator('p.location').first();
    this.rate = this.root.locator('.rate p, .rate').first();
    this.editIcon = this.root.locator('a.edit-icon[href*="/edit"]').first();
    this.socialLinks = this.root.locator('.social a');
    this.progressChains = this.root.locator('app-profile-progress .chain');
  }

  async waitForVisible(timeout = 15000): Promise<void> {
    await test.step('ProfileHeaderWidget: wait visible', async () => {
      await this.root.waitFor({ state: 'visible', timeout });
      await this.name.waitFor({ state: 'visible', timeout });
    });
  }

  async getName(): Promise<string> {
    return test.step('ProfileHeaderWidget: name', async () => (await this.name.innerText()).trim());
  }

  async getRateText(): Promise<string> {
    return test.step('ProfileHeaderWidget: rate', async () => (await this.rate.innerText()).trim());
  }

  async clickEdit(): Promise<void> {
    await test.step('ProfileHeaderWidget: open edit', async () => {
      await this.editIcon.click();
    });
  }

  async isEditVisible(): Promise<boolean> {
    return this.editIcon.isVisible();
  }
}
