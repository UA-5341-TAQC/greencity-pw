import type { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base-component';

export class HabitCardComponent extends BaseComponent {
  protected readonly days: Locator;
  protected readonly filledDifficultyStars: Locator;
  protected readonly image: Locator;
  protected readonly tags: Locator;
  protected readonly title: Locator;
  protected readonly acquiredUsers: Locator;
  protected readonly moreButton: Locator;
  protected readonly addHabitButton: Locator;

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.days = this.root.locator('.days');

    this.filledDifficultyStars = this.root.locator('.stars img[src$="star-filled.svg"]');

    this.image = this.root.locator('.habit-picture img');
    this.tags = this.root.locator('.tags span');
    this.title = this.root.locator('.title h2');
    this.acquiredUsers = this.root.locator('.acquired p');

    this.moreButton = this.root.locator('.habit-action-wrp .secondary-global-button');

    this.addHabitButton = this.root.locator('.habit-action-wrp .primary-global-button');
  }

  async getTitle(): Promise<string> {
    return (await this.title.textContent())?.trim() ?? '';
  }

  async getDays(): Promise<string> {
    return (await this.days.textContent())?.trim() ?? '';
  }

  async getTags(): Promise<string[]> {
    const tags = await this.tags.allTextContents();

    return tags.map((tag) => tag.trim());
  }

  async getDifficulty(): Promise<number> {
    return await this.filledDifficultyStars.count();
  }

  async getAcquiredUsersText(): Promise<string> {
    return (await this.acquiredUsers.textContent())?.trim() ?? '';
  }

  async clickMore(): Promise<void> {
    await this.moreButton.click();
  }

  async clickAddHabit(): Promise<void> {
    await this.addHabitButton.click();
  }
}
