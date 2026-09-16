import type { Page, Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class EventCardComponent extends BaseComponent {
  protected readonly bookmarkButtonContainer: Locator;
  protected readonly participantsContainer: Locator;
  protected readonly image: Locator;
  protected readonly typeTag: Locator;
  protected readonly eventDate: Locator;
  protected readonly eventTime: Locator;
  protected readonly eventLocation: Locator;
  protected readonly eventStatus: Locator;
  protected readonly eventTitle: Locator;
  protected readonly moreButton: Locator;
  protected readonly joinEventButton: Locator;
  protected readonly publishDate: Locator;
  protected readonly authorName: Locator;
  protected readonly commentsCount: Locator;
  protected readonly likeButton: Locator;
  protected readonly likeCount: Locator;
  protected readonly dislikeButton: Locator;
  protected readonly dislikeCount: Locator;

  constructor(root: Locator, page?: Page) {
    super(root, page);

    this.bookmarkButtonContainer = this.root.locator('div.event-flags.favourite-button');
    this.participantsContainer = this.root.locator('div.event-participants');
    this.image = this.root.locator('img.event-image');
    this.typeTag = this.root.locator('ul.ul-eco-buttons a.tag');

    this.eventDate = this.root.locator('div.date-container div.date');
    this.eventTime = this.root.locator('div.date-container div.time');
    this.eventLocation = this.root.locator('div.date-container p');
    this.eventStatus = this.root.locator('div.event-status');

    this.eventTitle = this.root.locator('p.event-name');
    this.moreButton = this.root.getByRole('button', { name: 'More' });
    this.joinEventButton = this.root.getByRole('button', { name: 'Join event' });

    this.publishDate = this.root.locator('div.additional-info div.date p');
    this.authorName = this.root.locator('div.additional-info div.author p');
    this.commentsCount = this.root.locator('div.additional-info div.frame p');
    this.likeButton = this.root
      .locator('div.additional-info')
      .getByRole('button', { name: 'Like this event' });
    this.likeCount = this.likeButton.locator('span');
    this.dislikeButton = this.root
      .locator('div.additional-info')
      .getByRole('button', { name: 'Dislike this event' });
    this.dislikeCount = this.dislikeButton.locator('span');
  }

  /** Clicks the bookmark button on the card */
  async clickBookmarkButton(): Promise<void> {
    await this.bookmarkButtonContainer.click();
  }

  /** Checks whether the event image is visible */
  async isImageVisible(): Promise<boolean> {
    return await this.image.isVisible();
  }

  /** Returns the event type text  */
  async getType(): Promise<string> {
    return (await this.typeTag.textContent()) ?? '';
  }

  /** Returns the event date text  */
  async getDate(): Promise<string> {
    return (await this.eventDate.textContent()) ?? '';
  }

  /** Returns the event time text  */
  async getTime(): Promise<string> {
    return (await this.eventTime.textContent()) ?? '';
  }

  /** Returns the event location text */
  async getLocation(): Promise<string> {
    return (await this.eventLocation.textContent()) ?? '';
  }

  /** Returns the event status text  */
  async getStatus(): Promise<string> {
    return (await this.eventStatus.textContent()) ?? '';
  }

  /** Returns the event title text */
  async getTitle(): Promise<string> {
    return (await this.eventTitle.textContent()) ?? '';
  }

  /** Clicks the "More" button */
  async clickMore(): Promise<void> {
    await this.moreButton.click();
  }

  /** Clicks the "Join event" button */
  async clickJoinEvent(): Promise<void> {
    await this.joinEventButton.click();
  }

  /** Checks whether the "Join event" button is enabled */
  async isJoinEventEnabled(): Promise<boolean> {
    return await this.joinEventButton.isEnabled();
  }

  /** Returns the event publish date text  */
  async getPublishDate(): Promise<string> {
    return (await this.publishDate.textContent()) ?? '';
  }

  /** Returns the event author's name */
  async getAuthorName(): Promise<string> {
    return (await this.authorName.textContent()) ?? '';
  }

  /** Returns the comments count as a number  */
  async getCommentsCount(): Promise<number> {
    const text = (await this.commentsCount.textContent()) ?? '0';
    return Number(text.trim());
  }

  /** Clicks the "Like" button */
  async clickLike(): Promise<void> {
    await this.likeButton.click();
  }

  /** Returns the like count as a number */
  async getLikeCount(): Promise<number> {
    const text = (await this.likeCount.textContent()) ?? '0';
    return Number(text.trim());
  }

  /** Clicks the "Dislike" button */
  async clickDislike(): Promise<void> {
    await this.dislikeButton.click();
  }

  /** Returns the dislike count as a number */
  async getDislikeCount(): Promise<number> {
    const text = (await this.dislikeCount.textContent()) ?? '0';
    return Number(text.trim());
  }
}
