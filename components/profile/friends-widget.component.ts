import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

/**
 * COM for the friends strip on My Space (app-users-friends).
 *
 * Empty state (verified live, 0 connections):
 *   .friends-error > .text-title > p / .text-number / .error-message > .add-friends > a
 * Populated state swaps `.add-friends` for `a.text-more`.
 *
 * Note: `a[href*="/friends"]` was removed from `seeAllLink` — on the empty state it
 * resolved to the SAME node as `addFriendLink` ("+" → /friends/recommended), which made
 * `clickSeeAll()` unable to tell "see all" from "add friend".
 */
export class FriendsWidgetComponent extends BaseComponent {
  readonly title: Locator;
  readonly quantity: Locator;
  readonly seeAllLink: Locator;
  readonly addFriendLink: Locator;
  readonly previousArrow: Locator;
  readonly nextArrow: Locator;
  readonly friendCards: Locator;

  constructor(page: Page) {
    super(page.locator('app-users-friends').first(), page);

    this.title = this.root.locator('.text-title p').first();
    this.quantity = this.root.locator('.text-number').first();
    // Populated state only: "see all" link to .../friends.
    this.seeAllLink = this.root.locator('a.text-more').first();
    // Empty state only: "+" link to .../friends/recommended.
    this.addFriendLink = this.root.locator('.add-friends a').first();
    this.previousArrow = this.root.locator('img.friends-previous').first();
    this.nextArrow = this.root.locator('img.friends-next').first();
    // .friend-img is the class app-user-profile-image carries inside a friend card.
    this.friendCards = this.root.locator('.friend-img');
  }

  /** "See all" when the strip is populated, otherwise the empty-state "+" link. */
  async clickSeeAll(): Promise<void> {
    await test.step('FriendsWidget: see all', async () => {
      if (await this.seeAllLink.isVisible().catch(() => false)) {
        await this.seeAllLink.click();
        return;
      }
      await this.addFriendLink.click();
    });
  }

  async clickAddFriend(): Promise<void> {
    await test.step('FriendsWidget: add friend', async () => {
      await this.addFriendLink.click();
    });
  }

  /** Slider next when many friends overflow the strip. */
  async clickNext(): Promise<void> {
    await test.step('FriendsWidget: next', async () => {
      await this.nextArrow.click();
    });
  }

  async getFriendCardCount(): Promise<number> {
    return this.friendCards.count();
  }
}
