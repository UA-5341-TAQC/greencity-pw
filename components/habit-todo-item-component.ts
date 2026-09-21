import type { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base-component';

export class HabitTodoItemComponent extends BaseComponent {
  public readonly text: Locator;
  public readonly checkButton: Locator;
  public readonly deleteButton: Locator;

  constructor(root: Locator, page?: Page) {
    super(root, page);

    this.text = this.root.locator('span.item-text');
    this.checkButton = this.root.locator('button.check-btn');
    this.deleteButton = this.root.locator('button.del-btn');
  }

  async toggle(): Promise<void> {
    await this.checkButton.click();
  }

  async delete(): Promise<void> {
    await this.deleteButton.click();
  }

  async getText(): Promise<string> {
    return ((await this.text.textContent()) ?? '').trim();
  }
}
