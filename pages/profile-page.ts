import { test, type Locator, type Page } from '@playwright/test';
import env from '@/config/env';
import BasePage from '@/pages/base-page';
import { resolveUserId } from '@/helpers';
import {
  ProfileTabHeaderComponent,
  ProfileHabitsTabComponent,
  ProfileNewsTabComponent,
  ProfileEventsTabComponent,
  ProfileHeaderWidgetComponent,
  AchievementsWidgetComponent,
  FriendsWidgetComponent,
  type ProfileDashboardTabKey,
} from '@/components';

/**
 * User profile / My Space page.
 * Live route: /#/greenCity/profile/:id
 *
 * The page exposes its COMs directly — there is no delegating facade layer, so tests
 * call `profilePage.habitsTab.getItems()` / `profilePage.profileHeader.getName()`.
 * Only page-level sequencing lives here (route, readiness, tab activation).
 */
export class ProfilePage extends BasePage {
  readonly root: Locator;
  readonly dashboardRoot: Locator;
  readonly profileHeader: ProfileHeaderWidgetComponent;
  readonly tabHeader: ProfileTabHeaderComponent;
  readonly habitsTab: ProfileHabitsTabComponent;
  readonly newsTab: ProfileNewsTabComponent;
  readonly eventsTab: ProfileEventsTabComponent;
  readonly achievements: AchievementsWidgetComponent;
  readonly friendsWidget: FriendsWidgetComponent;
  readonly calendar: Locator;
  readonly viewMoreButton: Locator;
  readonly activeTabBody: Locator;

  constructor(page: Page) {
    super(page);

    this.root = page.locator('app-profile .profile-container').first();
    this.dashboardRoot = page.locator('app-profile-dashboard').first();

    this.profileHeader = new ProfileHeaderWidgetComponent(page);
    this.tabHeader = new ProfileTabHeaderComponent(page);
    this.habitsTab = new ProfileHabitsTabComponent(page);
    this.newsTab = new ProfileNewsTabComponent(page);
    this.eventsTab = new ProfileEventsTabComponent(page);
    this.achievements = new AchievementsWidgetComponent(page);
    this.friendsWidget = new FriendsWidgetComponent(page);

    // Verified on the live build: app-calendar renders inside .profile-container.
    this.calendar = this.root.locator('app-calendar').first();
    this.viewMoreButton = this.dashboardRoot.locator('button.btn-view-more').first();
    this.activeTabBody = this.dashboardRoot.locator('mat-tab-body.mat-mdc-tab-body-active').first();
  }

  async navigateToProfile(userId?: string | number): Promise<void> {
    const id = await resolveUserId(this.page, userId, 'Profile');
    await test.step(`Profile: open /greenCity/profile/${id || ':id'}`, async () => {
      if (!id) {
        throw new Error('ProfilePage.navigateToProfile: userId missing (pass id or log in first)');
      }
      await this.navigateTo(`/#/greenCity/profile/${id}`);
    });
  }

  async waitForProfile(): Promise<void> {
    await test.step('Profile: wait for page load', async () => {
      await this.waitForPageLoad();
      await this.profileHeader.waitForVisible();
      await this.tabHeader.waitForVisible();
    });
  }

  /** Material tab-body host of a dashboard tab. */
  tabBody(tab: ProfileDashboardTabKey): Locator {
    if (tab === 'habits') return this.habitsTab.body;
    if (tab === 'news') return this.newsTab.body;
    return this.eventsTab.body;
  }

  /**
   * Activates a dashboard tab and waits for its body to attach.
   * Lives on the page because it is the only place that sees both the tab strip and the bodies.
   */
  async openTab(tab: ProfileDashboardTabKey): Promise<void> {
    await test.step(`Profile: open ${tab} tab`, async () => {
      await this.tabHeader.open(tab);
      // Fail loudly if the tab body never attaches — a swallowed error here
      // hides a broken dashboard behind a green test.
      await this.tabBody(tab).waitFor({ state: 'attached', timeout: env.MEDIUM_TIMEOUT });
    });
  }
}
