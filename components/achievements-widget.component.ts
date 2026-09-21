import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from './base-component';

/**
 * COM for the achievements strip on My Space (app-users-achievements).
 * Includes slider overflow arrows and the structural "see all" link.
 *
 * Verified live structure:
 *   .title-achievements > p.my-achievements + a   (the "see all" anchor)
 *   .achieved-quantity                            ("8 досягнуто")
 *   .slider-wrapper > img.achievements-previous[.hidden] / img.achievements-next[.hidden]
 *   .achievements-images > img                    (3 badges)
 * Arrows stay `hidden` while the strip does not overflow, so clicking them is a
 * no-op/failure until the account has enough badges.
 */
export class AchievementsWidgetComponent extends BaseComponent {
  readonly title: Locator;
  readonly seeAllLink: Locator;
  readonly quantity: Locator;
  readonly previousArrow: Locator;
  readonly nextArrow: Locator;
  readonly images: Locator;

  constructor(page: Page) {
    super(page.locator('app-users-achievements').first(), page);

    this.title = this.root.locator('.title-achievements p').first();
    // Structural: the only anchor inside the title block (no text matcher).
    this.seeAllLink = this.root.locator('.title-achievements a').first();
    this.quantity = this.root.locator('.achieved-quantity').first();
    this.previousArrow = this.root.locator('img.achievements-previous').first();
    this.nextArrow = this.root.locator('img.achievements-next').first();
    this.images = this.root.locator('.achievements-images img');
  }

  async clickSeeAll(): Promise<void> {
    await test.step('AchievementsWidget: see all', async () => {
      await this.seeAllLink.click();
    });
  }

  async getImageCount(): Promise<number> {
    return this.images.count();
  }

  /** Slider next — used when many achievement badges overflow the strip. */
  async clickNext(): Promise<void> {
    await test.step('AchievementsWidget: next', async () => {
      await this.nextArrow.click();
    });
  }

  async clickPrevious(): Promise<void> {
    await test.step('AchievementsWidget: previous', async () => {
      await this.previousArrow.click();
    });
  }
}
