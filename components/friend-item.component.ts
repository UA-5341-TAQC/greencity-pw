import { type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class FriendItemComponent extends BaseComponent {
  readonly avatar: Locator;
  readonly name: Locator;
  readonly rate: Locator;
  readonly mutualFriends: Locator;
  readonly city: Locator;
  readonly actionButton: Locator;

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.avatar = this.root.locator('app-user-profile-image');
    this.name = this.root.locator('.friend-name');
    this.rate = this.root.locator('.friend-rate');
    this.mutualFriends = this.root.locator('.friend-mutual');
    this.city = this.root.locator('.friend-city');
    this.actionButton = this.root.getByRole('button');
  }

  async getName(): Promise<string> {
    return (await this.name.innerText()).trim();
  }

  async getRate(): Promise<string> {
    return (await this.rate.innerText()).trim();
  }

  async getActionButtonText(): Promise<string> {
    return (await this.actionButton.innerText()).trim();
  }

  async clickActionButton(): Promise<void> {
    await this.actionButton.click();
  }
}
