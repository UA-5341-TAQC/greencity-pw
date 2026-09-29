import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { NewsTabItem } from '@/components/profile/news-tab-item.component';

/**
 * COM for the news tab of the profile dashboard.
 * See `ProfileHabitsTabComponent` for why the root is the dashboard shell, not the tab body.
 */
export class ProfileNewsTabComponent extends BaseComponent {
  readonly body: Locator;
  /** Item hosts — use the item accessors below to get COMs. */
  readonly itemHosts: Locator;
  readonly createLink: Locator;
  readonly tagFilters: Locator;
  readonly tabHeader: Locator;

  constructor(page: Page) {
    super(page.locator('app-profile-dashboard').first(), page);

    this.body = this.root
      .locator('mat-tab-body:has(app-one-news), mat-tab-body:has(app-tag-filter)')
      .first();
    this.itemHosts = this.root.locator('app-one-news');
    this.createLink = this.root.locator('a[href*="create-news"], #create-button-news').first();
    this.tagFilters = this.root.locator(
      'app-tag-filter button.tag-button, app-tag-filter a.custom-chip'
    );
    this.tabHeader = this.root.getByRole('tab').nth(1);
  }

  /** All news COMs currently rendered in this tab. */
  async getItems(): Promise<NewsTabItem[]> {
    return test.step('NewsTab: news items[]', async () => {
      const count = await this.itemHosts.count();
      return Array.from(
        { length: count },
        (_, i) => new NewsTabItem(this.itemHosts.nth(i), this.page)
      );
    });
  }

  /** Single news COM by 0-based index (selection helper). */
  getItem(index: number): NewsTabItem {
    return new NewsTabItem(this.itemHosts.nth(index), this.page);
  }

  async getCount(): Promise<number> {
    return this.itemHosts.count();
  }
}
