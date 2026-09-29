import { Locator, Page, test } from '@playwright/test';
import env from '@/config/env';
import { BaseComponent } from '@/components/base-component';

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
  readonly progress: Locator;
  readonly status: Locator;
  readonly acquiredHabits: Locator;
  readonly habitsInProgress: Locator;
  readonly publishedNews: Locator;
  readonly eventsCount: Locator;

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
    this.progress = this.root.locator('app-profile-progress');
    this.status = this.root.locator('.status-indicator');
    this.acquiredHabits = this.progressChains.nth(0).locator('p').nth(1);
    this.habitsInProgress = this.progressChains.nth(1).locator('p').nth(1);
    this.publishedNews = this.progressChains.nth(2).locator('p').nth(1);
    this.eventsCount = this.progressChains.nth(3).locator('p').nth(1);
  }

  async waitForVisible(timeout = env.LONG_TIMEOUT): Promise<void> {
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

  async getProgressStats(): Promise<{
    acquiredHabits: number;
    habitsInProgress: number;
    publishedNews: number;
    events: number;
  }> {
    return test.step('ProfileHeaderWidget: get progress stats', async () => {
      const texts = await this.progressChains.locator('p:first-child').allInnerTexts();
      return {
        acquiredHabits: Number(texts[0]?.trim() ?? 0),
        habitsInProgress: Number(texts[1]?.trim() ?? 0),
        publishedNews: Number(texts[2]?.trim() ?? 0),
        events: Number(texts[3]?.trim() ?? 0),
      };
    });
  }

  async getProgressLabels(): Promise<{
    acquiredHabits: string;
    habitsInProgress: string;
    publishedNews: string;
    events: string;
  }> {
    return test.step('ProfileHeaderWidget: get progress labels', async () => {
      const texts = await this.progressChains.locator('p:nth-child(2)').allInnerTexts();
      return {
        acquiredHabits: texts[0]?.trim() ?? 0,
        habitsInProgress: texts[1]?.trim() ?? 0,
        publishedNews: texts[2]?.trim() ?? 0,
        events: texts[3]?.trim() ?? 0,
      };
    });
  }
}
