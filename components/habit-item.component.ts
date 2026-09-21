import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from './base-component';

/**
 * COM for a single habit card on the profile dashboard habits tab.
 * Live root: app-profile-dashboard → app-one-habit
 *
 * Verified live structure (3 cards rendered for this account):
 *   img.image[alt="habit picture"]         — class and alt resolve to the same node
 *   img.calendar
 *   .description .first-row p              — "0 / 14" progress
 *   .description .second-row               — habit title
 *   button.edit.undone                     — note: also carries `undone`
 *   .third-row button.undone               — completion toggle (scoped to third-row
 *                                            so it cannot collide with button.edit)
 *   .third-row .grey
 */
export class HabitItemComponent extends BaseComponent {
  readonly image: Locator;
  readonly progressText: Locator;
  readonly calendarIcon: Locator;
  readonly title: Locator;
  readonly editButton: Locator;
  readonly markDoneButton: Locator;
  readonly markDoneLabel: Locator;

  constructor(root: Locator, page?: Page) {
    super(root, page);

    this.image = this.root.locator('img.image').first();
    this.calendarIcon = this.root.locator('img.calendar').first();
    this.progressText = this.root.locator('.description .first-row p').first();
    this.title = this.root.locator('.description .second-row').first();
    this.editButton = this.root.locator('button.edit').first();
    this.markDoneButton = this.root.locator('.third-row button.undone').first();
    this.markDoneLabel = this.root.locator('.third-row .grey').first();
  }

  async getTitle(): Promise<string> {
    return test.step('HabitItem: title', async () => (await this.title.innerText()).trim());
  }

  /** Progress string like "0 / 14". */
  async getProgress(): Promise<string> {
    return test.step('HabitItem: progress', async () =>
      (await this.progressText.innerText()).replace(/\s+/g, ' ').trim());
  }

  async clickEdit(): Promise<void> {
    await test.step('HabitItem: edit', async () => {
      await this.editButton.click();
    });
  }

  /** Toggle habit completion (button.undone / done). */
  async clickMarkDone(): Promise<void> {
    await test.step('HabitItem: mark done', async () => {
      await this.markDoneButton.click();
    });
  }

  async isMarkDoneEnabled(): Promise<boolean> {
    return this.markDoneButton.isEnabled();
  }
}
