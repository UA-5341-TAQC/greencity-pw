import type { Locator, Page } from '@playwright/test';
import { EcoNewsCardComponent } from '@/components/eco-news-card-component';

export class EcoNewsTableCardComponent extends EcoNewsCardComponent {
  protected readonly link: Locator;
  protected readonly image: Locator;
  protected readonly tags: Locator;
  protected readonly title: Locator;
  protected readonly description: Locator;
  protected readonly favouriteButton: Locator;

  protected readonly creationDate: Locator;
  protected readonly author: Locator;
  protected readonly commentsCount: Locator;
  protected readonly likesCount: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);

    this.link = this.root.locator('a.link');
    this.image = this.root.locator('img.list-image-content');
    this.tags = this.root.locator('.filter-tag .ul-eco-buttons span:not(.tag-divider)');
    this.title = this.root.locator('.title-list h3');
    this.description = this.root.locator('.list-text');
    this.favouriteButton = this.root.locator('.favourite-button');

    this.creationDate = this.root.locator('.user-data-text-date').first();
    this.author = this.root.locator('.user-data-text-date .mw');
    this.commentsCount = this.root.locator('.user-data-like').nth(0).locator('.numerosity');
    this.likesCount = this.root.locator('.user-data-like').nth(1).locator('.numerosity');
  }

  async getCreationDate(): Promise<string> {
    return (await this.creationDate.textContent())?.trim() ?? '';
  }

  async getAuthor(): Promise<string> {
    return (await this.author.textContent())?.trim() ?? '';
  }

  async getCommentsCount(): Promise<number> {
    return Number(await this.commentsCount.textContent());
  }

  async getLikesCount(): Promise<number> {
    return Number(await this.likesCount.textContent());
  }
}
