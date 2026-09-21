import { test, type Locator, type Page } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { resolveUserId } from '@/helpers';
import { FriendsTabsComponent, type FriendsTabKey } from '@/components';

export type FriendsTab = FriendsTabKey;

/**
 * Friends page with route tabs.
 * Live route: /#/greenCity/profile/:id/friends
 * Tab switching is owned by FriendsTabsComponent (href-based COM).
 */
export class FriendsPage extends BasePage {
  readonly root: Locator;
  readonly heading: Locator;
  readonly backToProfileLink: Locator;
  readonly tabs: FriendsTabsComponent;
  readonly searchForm: Locator;
  readonly searchInput: Locator;
  readonly friendCards: Locator;
  readonly emptyStateMessage: Locator;
  readonly emptyStateImage: Locator;

  constructor(page: Page) {
    super(page);

    this.root = page.locator('app-friend-dashboard').first();
    this.heading = this.root.locator('h1').first();
    this.backToProfileLink = this.root.locator('a.button-link').first();
    this.tabs = new FriendsTabsComponent(page);

    this.searchForm = this.root.locator('form.searchForm').first();
    this.searchInput = this.root.locator('form.searchForm input.search').first();

    // Verified: app-friend-item IS the .user-card node (10 on the recommended tab);
    // the app-all-friends / app-friend-requests / app-friend-recommended wrappers
    // never contain it, so those prefixes matched nothing.
    this.friendCards = this.root.locator('app-friend-item');
    this.emptyStateMessage = this.root.locator('p.noFriends, p.noRequests').first();
    this.emptyStateImage = this.root.locator('.img-absent img').first();
  }

  async navigateToFriends(userId?: string | number): Promise<void> {
    const id = await resolveUserId(this.page, userId, 'Friends');
    await test.step(`Friends: open /greenCity/profile/${id || ':id'}/friends`, async () => {
      if (!id) {
        throw new Error('FriendsPage.navigateToFriends: userId missing (pass id or log in first)');
      }
      await this.navigateTo(`/#/greenCity/profile/${id}/friends`);
    });
  }

  async waitForFriends(): Promise<void> {
    await test.step('Friends: wait for page load', async () => {
      await this.waitForPageLoad();
      await this.root.waitFor({ state: 'visible', timeout: 20000 });
      await this.heading.waitFor({ state: 'visible', timeout: 15000 });
      await this.tabs.waitForVisible(15000);
    });
  }

  async getHeading(): Promise<string> {
    return test.step('Friends: read heading', async () => (await this.heading.innerText()).trim());
  }

  async openTab(tab: FriendsTab): Promise<void> {
    return this.tabs.openTab(tab);
  }

  async isTabActive(tab: FriendsTab): Promise<boolean> {
    return this.tabs.isTabActive(tab);
  }

  async getActiveTabHref(): Promise<string> {
    return this.tabs.getActiveTabHref();
  }

  async isSearchInputVisible(): Promise<boolean> {
    return this.searchInput.isVisible();
  }

  async searchFriends(query: string): Promise<void> {
    await test.step(`Friends: search "${query}"`, async () => {
      await this.searchInput.fill(query);
    });
  }

  async clearSearch(): Promise<void> {
    await test.step('Friends: clear search', async () => {
      await this.searchInput.fill('');
    });
  }

  async getFriendCardCount(): Promise<number> {
    return this.friendCards.count();
  }

  async getEmptyStateMessage(): Promise<string> {
    return test.step('Friends: read empty state', async () => {
      if ((await this.emptyStateMessage.count()) === 0) {
        return '';
      }
      return (await this.emptyStateMessage.first().innerText()).trim();
    });
  }

  async clickFriendCardAt(index = 0): Promise<void> {
    await test.step(`Friends: open friend card #${index}`, async () => {
      await this.friendCards.nth(index).click();
    });
  }

  async clickBackToProfile(): Promise<void> {
    await test.step('Friends: back to profile', async () => {
      await this.backToProfileLink.click();
    });
  }
}
