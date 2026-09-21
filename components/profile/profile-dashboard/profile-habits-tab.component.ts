import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { HabitItemComponent } from '@/components/habit-item.component';

/**
 * COM for the habits tab of the profile dashboard.
 *
 * Root is the dashboard shell (`app-profile-dashboard`), not the tab body: item hosts
 * (`app-one-habit`) are resolved from there on the live build, so scoping them to
 * `mat-tab-body` would change the match set. `body` is kept separately for "is this
 * tab attached yet" waits.
 */
export class ProfileHabitsTabComponent extends BaseComponent {
  readonly body: Locator;
  /** Item hosts — use the item accessors below to get COMs. */
  readonly itemHosts: Locator;
  readonly createLink: Locator;

  constructor(page: Page) {
    super(page.locator('app-profile-dashboard').first(), page);

    this.body = this.root
      .locator('mat-tab-body:has(app-one-habit), mat-tab-body.mat-mdc-tab-body-active')
      .first();
    this.itemHosts = this.root.locator('app-one-habit');
    this.createLink = this.root.locator('a[href*="allhabits"], #create-button-new-habit').first();
  }

  /** All habit COMs currently rendered in this tab. */
  async getItems(): Promise<HabitItemComponent[]> {
    return test.step('HabitsTab: habit items[]', async () => {
      const count = await this.itemHosts.count();
      return Array.from(
        { length: count },
        (_, i) => new HabitItemComponent(this.itemHosts.nth(i), this.page)
      );
    });
  }

  /** Single habit COM by 0-based index (selection helper). */
  getItem(index: number): HabitItemComponent {
    return new HabitItemComponent(this.itemHosts.nth(index), this.page);
  }

  async getCount(): Promise<number> {
    return this.itemHosts.count();
  }
}
