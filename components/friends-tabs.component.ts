import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from './base-component';

export type FriendsTabKey = 'myFriends' | 'findFriend' | 'requests';

/**
 * COM for friends route tabs (app-friend-dashboard > .friend-tabs).
 * Structural locators via href / routerLinkActive class — no visible-text matching.
 *
 * Routes:
 *  - myFriends  → .../friends
 *  - findFriend → .../friends/recommended
 *  - requests   → .../friends/requests
 */
export class FriendsTabsComponent extends BaseComponent {
  readonly myFriendsTab: Locator;
  readonly findFriendTab: Locator;
  readonly requestsTab: Locator;
  readonly activeTab: Locator;
  readonly tabLinks: Locator;

  constructor(page: Page) {
    super(page.locator('app-friend-dashboard .friend-tabs').first(), page);

    this.tabLinks = this.root.locator('a');
    // Hash hrefs: #/greenCity/profile/:id/friends[/recommended|/requests]
    this.myFriendsTab = this.root.locator('a[href$="/friends"]').first();
    this.findFriendTab = this.root.locator('a[href*="/friends/recommended"]').first();
    this.requestsTab = this.root.locator('a[href*="/friends/requests"]').first();
    this.activeTab = this.root.locator('a.active, a[aria-current="page"]').first();
  }

  private tabByKey(key: FriendsTabKey): Locator {
    const map: Record<FriendsTabKey, Locator> = {
      myFriends: this.myFriendsTab,
      findFriend: this.findFriendTab,
      requests: this.requestsTab,
    };
    return map[key];
  }

  async waitForVisible(timeout = 15000): Promise<void> {
    await test.step('FriendsTabs: wait visible', async () => {
      await this.root.waitFor({ state: 'visible', timeout });
      await this.myFriendsTab.waitFor({ state: 'visible', timeout });
    });
  }

  async openTab(key: FriendsTabKey): Promise<void> {
    await test.step(`FriendsTabs: open ${key}`, async () => {
      await this.tabByKey(key).click();
    });
  }

  /** routerLinkActive puts class "active" on the current tab anchor. */
  async isTabActive(key: FriendsTabKey): Promise<boolean> {
    return test.step(`FriendsTabs: is ${key} active`, async () => {
      return this.tabByKey(key).evaluate(
        (el) => el.classList.contains('active') || el.getAttribute('aria-current') === 'page'
      );
    });
  }

  async getActiveTabHref(): Promise<string> {
    return test.step('FriendsTabs: active href', async () =>
      (await this.activeTab.getAttribute('href')) ?? '');
  }

  async getTabCount(): Promise<number> {
    return this.tabLinks.count();
  }
}
