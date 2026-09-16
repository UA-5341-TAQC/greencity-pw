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

    this.logo = this.root.getByRole('link', {
      name: 'GreenCity home',
    });

    this.ecoNewsLink = this.root.getByRole('link', {
      name: 'Eco news',
    });

    this.eventsLink = this.root.getByRole('link', {
      name: 'Events',
    });

    this.placesLink = this.root.getByRole('link', {
      name: 'Places',
    });

    this.aboutUsLink = this.root.getByRole('link', {
      name: 'About Us',
    });

    this.mySpaceLink = this.root.getByRole('link', {
      name: 'My Space',
    });

    this.ubsCourierLink = this.root.getByRole('link', {
      name: 'UBS Courier',
    });

    this.followUsText = this.root.getByText('Follow us');

    this.twitterLink = this.root.getByRole('link', {
      name: 'Twitter link',
    });

    this.linkedInLink = this.root.getByRole('link', {
      name: 'LinkedIn link',
    });

    this.facebookLink = this.root.getByRole('link', {
      name: 'Facebook link',
    });

    this.instagramLink = this.root.getByRole('link', {
      name: 'Instagram link',
    });

    this.youtubeLink = this.root.getByRole('link', {
      name: 'YouTube link',
    });

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
