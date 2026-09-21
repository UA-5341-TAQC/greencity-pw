import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from '../base-component';
import { EventItemComponent } from '../event-item.component';

/**
 * COM for the events tab of the profile dashboard.
 *
 * The events tab body has no dedicated Angular host tag, so it is identified by the
 * markers it does carry (`#my-events` / the create-event link). The same expression is
 * reused for the body, the item hosts and the attached-wait — one definition, not three.
 */
export class ProfileEventsTabComponent extends BaseComponent {
  readonly body: Locator;
  /** Item hosts — use the item accessors below to get COMs. */
  readonly itemHosts: Locator;
  readonly createLink: Locator;
  readonly typeFilters: Locator;

  constructor(page: Page) {
    super(page.locator('app-profile-dashboard').first(), page);

    this.body = this.root
      .locator('mat-tab-body')
      .filter({ has: page.locator('#my-events, a[href*="create-update-event"]') })
      .first();
    this.itemHosts = this.body.locator('ul.news-list li, app-one-event');
    this.createLink = this.root
      .locator('a[href*="create-update-event"], #create-button-event')
      .first();
    this.typeFilters = this.root.locator('.events-types mat-checkbox');
  }

  /** All event COMs currently rendered in this tab (may be empty). */
  async getItems(): Promise<EventItemComponent[]> {
    return test.step('EventsTab: event items[]', async () => {
      const count = await this.itemHosts.count();
      return Array.from(
        { length: count },
        (_, i) => new EventItemComponent(this.itemHosts.nth(i), this.page)
      );
    });
  }

  /** Single event COM by 0-based index (selection helper). */
  getItem(index: number): EventItemComponent {
    return new EventItemComponent(this.itemHosts.nth(index), this.page);
  }

  async getCount(): Promise<number> {
    return this.itemHosts.count();
  }
}
