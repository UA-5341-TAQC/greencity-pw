import { Locator, Page, test } from '@playwright/test';
import env from '@/config/env';
import { BaseComponent } from '@/components/base-component';

export type ProfileDashboardTabKey = 'habits' | 'news' | 'events';

const TAB_POSITION: Record<ProfileDashboardTabKey, number> = { habits: 1, news: 2, events: 3 };

/**
 * COM for the profile dashboard tab strip (`app-profile-dashboard > mat-tab-header`).
 * Structural locators only: aria-posinset — no visible-text matching (the app is bilingual).
 *
 * This COM owns the tab strip and its scroll pagination. Clicking a tab only reveals the
 * tab; waiting for the corresponding tab body belongs to the caller that owns both
 * (`ProfilePage.openTab`).
 */
export class ProfileTabHeaderComponent extends BaseComponent {
  readonly tabList: Locator;
  readonly habitsTab: Locator;
  readonly newsTab: Locator;
  readonly eventsTab: Locator;
  readonly activeTab: Locator;
  readonly paginationBefore: Locator;
  readonly paginationAfter: Locator;

  constructor(page: Page) {
    super(page.locator('app-profile-dashboard mat-tab-header').first(), page);

    this.tabList = this.root.locator('.mat-mdc-tab-labels').first();
    this.habitsTab = this.root.locator('.mdc-tab[aria-posinset="1"]').first();
    this.newsTab = this.root.locator('.mdc-tab[aria-posinset="2"]').first();
    this.eventsTab = this.root.locator('.mdc-tab[aria-posinset="3"]').first();
    this.activeTab = this.root.locator('.mdc-tab--active, .mdc-tab[aria-selected="true"]').first();
    this.paginationBefore = this.root
      .locator('button.mat-mdc-tab-header-pagination-before')
      .first();
    this.paginationAfter = this.root.locator('button.mat-mdc-tab-header-pagination-after').first();
  }

  tab(key: ProfileDashboardTabKey): Locator {
    return { habits: this.habitsTab, news: this.newsTab, events: this.eventsTab }[key];
  }

  async waitForVisible(timeout = env.LONG_TIMEOUT): Promise<void> {
    await test.step('ProfileTabHeader: wait visible', async () => {
      await this.tabList.waitFor({ state: 'visible', timeout });
    });
  }

  /** Selects a tab, scrolling the strip first when the tab is off-screen. */
  async open(key: ProfileDashboardTabKey): Promise<void> {
    await test.step(`ProfileTabHeader: open ${key}`, async () => {
      const tab = this.tab(key);
      if (!(await tab.isVisible())) {
        await this.clickPaginationAfter();
      }
      await tab.click();
    });
  }

  async getActiveIndex(): Promise<number> {
    return test.step('ProfileTabHeader: active index', async () => {
      return Number((await this.activeTab.getAttribute('aria-posinset')) ?? 0);
    });
  }

  async isActive(key: ProfileDashboardTabKey): Promise<boolean> {
    return test.step(`ProfileTabHeader: is ${key} active`, async () => {
      return (await this.getActiveIndex()) === TAB_POSITION[key];
    });
  }

  async getCount(): Promise<number> {
    return this.root.locator('.mdc-tab').count();
  }

  async isPaginationAfterEnabled(): Promise<boolean> {
    return test.step('ProfileTabHeader: pagination after enabled', async () => {
      return (await this.paginationAfter.isEnabled()) && (await this.paginationAfter.isVisible());
    });
  }

  async clickPaginationAfter(): Promise<void> {
    await test.step('ProfileTabHeader: pagination after (show more tabs)', async () => {
      await this.paginationAfter.click();
    });
  }

  async clickPaginationBefore(): Promise<void> {
    await test.step('ProfileTabHeader: pagination before', async () => {
      await this.paginationBefore.click();
    });
  }
}
