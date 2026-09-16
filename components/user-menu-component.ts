import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base-component';

/**
 * Component representing the logged-in user menu.
 */
export class UserMenuComponent extends BaseComponent {
  protected readonly userName: Locator;
  protected readonly dropdownMenu: Locator;
  protected readonly notificationsItem: Locator;
  protected readonly personalAccountLink: Locator;
  protected readonly signOutButton: Locator;

  constructor(page: Page) {
    super(page.locator('#header_user-wrp'), page);

    this.userName = this.root.locator('.user-name');

    this.dropdownMenu = this.root.locator('.dropdown-list');

    this.notificationsItem = this.root.getByRole('listitem', {
      name: 'notifications',
    });

    this.personalAccountLink = this.root.getByRole('link', {
      name: 'Personal account',
    });

    this.signOutButton = this.root.getByRole('button', {
      name: 'sign-out',
    });
  }

  /** Opens the user menu. */
  async open(): Promise<void> {
    await this.root.click();
  }

  /** Checks whether the user menu is visible. */
  async isVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }

  /** Checks whether the dropdown menu is visible. */
  async isDropdownVisible(): Promise<boolean> {
    return await this.dropdownMenu.isVisible();
  }

  /** Returns the logged-in user's name. */
  async getUserName(): Promise<string> {
    return (await this.userName.textContent())?.trim() ?? '';
  }

  /** Opens Notifications. */
  async clickNotifications(): Promise<void> {
    await this.notificationsItem.click();
  }

  /** Opens the Personal account. */
  async clickPersonalAccount(): Promise<void> {
    await this.personalAccountLink.click();
  }

  /** Signs out the current user. */
  async signOut(): Promise<void> {
    await this.signOutButton.click();
  }
}
