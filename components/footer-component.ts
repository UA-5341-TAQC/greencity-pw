import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base-component';

/**
 * Component representing the global footer.
 * Contains navigation links, social media links, logo, and copyright information.
 */
export class FooterComponent extends BaseComponent {
  protected readonly logo: Locator;

  protected readonly ecoNewsLink: Locator;
  protected readonly eventsLink: Locator;
  protected readonly placesLink: Locator;
  protected readonly aboutUsLink: Locator;
  protected readonly mySpaceLink: Locator;
  protected readonly ubsCourierLink: Locator;

  protected readonly followUsText: Locator;
  protected readonly twitterLink: Locator;
  protected readonly linkedInLink: Locator;
  protected readonly facebookLink: Locator;
  protected readonly instagramLink: Locator;
  protected readonly youtubeLink: Locator;

  protected readonly copyrightLabel: Locator;

  constructor(page: Page) {
    super(page.locator('footer'), page);

    this.logo = this.root.locator('a[href="#/greenCity"]');

    this.ecoNewsLink = this.root.locator('a[href="#/greenCity/news"]');

    this.eventsLink = this.root.locator('a[href="#/greenCity/events"]');

    this.placesLink = this.root.locator('a[href="#/greenCity/places"]');

    this.aboutUsLink = this.root.locator('a[href="#/greenCity/about"]');

    this.mySpaceLink = this.root.locator('a[href^="#/greenCity/profile/"]');

    this.ubsCourierLink = this.root.locator('a[href="#/ubs"]');

    this.followUsText = this.root.locator('.footer_follow-us');

    this.twitterLink = this.root.locator('.footer_social-link:has(img[src$="twitter-icon.svg"])');

    this.linkedInLink = this.root.locator('.footer_social-link:has(img[src$="linkedin-icon.svg"])');

    this.facebookLink = this.root.locator('.footer_social-link:has(img[src$="facebook-icon.svg"])');

    this.instagramLink = this.root.locator(
      '.footer_social-link:has(img[src$="instagram-icon.svg"])'
    );

    this.youtubeLink = this.root.locator('.footer_social-link:has(img[src$="youtube-icon.svg"])');

    this.copyrightLabel = this.root.locator('#copyright-label');
  }

  /** Checks whether the footer is visible. */
  async isFooterVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }

  /** Clicks the GreenCity logo. */
  async clickLogo(): Promise<void> {
    await this.logo.click();
  }

  /** Clicks the Eco news link. */
  async clickEcoNews(): Promise<void> {
    await this.ecoNewsLink.click();
  }

  /** Clicks the Events link. */
  async clickEvents(): Promise<void> {
    await this.eventsLink.click();
  }

  /** Clicks the Places link. */
  async clickPlaces(): Promise<void> {
    await this.placesLink.click();
  }

  /** Clicks the About Us link. */
  async clickAboutUs(): Promise<void> {
    await this.aboutUsLink.click();
  }

  /** Clicks the My Space link. */
  async clickMySpace(): Promise<void> {
    await this.mySpaceLink.click();
  }

  /** Clicks the UBS Courier link. */
  async clickUbsCourier(): Promise<void> {
    await this.ubsCourierLink.click();
  }

  /** Checks whether the Follow us text is visible. */
  async isFollowUsVisible(): Promise<boolean> {
    return await this.followUsText.isVisible();
  }

  /** Clicks the Twitter link. */
  async clickTwitter(): Promise<void> {
    await this.twitterLink.click();
  }

  /** Clicks the LinkedIn link. */
  async clickLinkedIn(): Promise<void> {
    await this.linkedInLink.click();
  }

  /** Clicks the Facebook link. */
  async clickFacebook(): Promise<void> {
    await this.facebookLink.click();
  }

  /** Clicks the Instagram link. */
  async clickInstagram(): Promise<void> {
    await this.instagramLink.click();
  }

  /** Clicks the YouTube link. */
  async clickYouTube(): Promise<void> {
    await this.youtubeLink.click();
  }

  /** Returns the copyright text. */
  async getCopyrightText(): Promise<string> {
    return (await this.copyrightLabel.textContent()) ?? '';
  }
}
