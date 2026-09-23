import { test, type Locator, type Page } from '@playwright/test';
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
    await test.step(
      'Toggle',
      async () => {
        await this.checkButton.click();
      },
      { box: true }
    );
  }

  async delete(): Promise<void> {
    await test.step(
      'Delete',
      async () => {
        await this.deleteButton.click();
      },
      { box: true }
    );
  }

  async getText(): Promise<string> {
    return await test.step(
      'Get Text',
      async () => {
        return ((await this.text.textContent()) ?? '').trim();
      },
      { box: true }
    );
  }
}
