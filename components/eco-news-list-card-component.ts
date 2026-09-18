import type { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class EcoNewsListCardComponent extends BaseComponent {
  protected readonly link: Locator;
  protected readonly image: Locator;
  protected readonly tags: Locator;
  protected readonly title: Locator;
  protected readonly description: Locator;
  protected readonly moreButton: Locator;
  protected readonly creationDate: Locator;
  protected readonly author: Locator;
  protected readonly favouriteButton: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);

    this.link = this.root.locator('a.link');
    this.image = this.root.locator('img.eco-news_list-img');
    this.tags = this.root.locator('.filter-tag .eco-news_list-tag span:not(.tag-divider)');
    this.title = this.root.locator('.eco-news_list-content-title h3');
    this.description = this.root.locator('.eco-news_list-content-text');
    this.moreButton = this.root.locator('.button-news-card button');
    this.creationDate = this.root.locator('.eco-news_data-text-date .text');
    this.author = this.root.locator('.eco-news_person');
    this.favouriteButton = this.root.locator('.favourite-button');
  }

  async click(): Promise<void> {
    await this.link.click();
  }

  async clickMoreButton(): Promise<void> {
    await this.moreButton.click();
  }

  async getTitle(): Promise<string> {
    return (await this.title.textContent())?.trim() ?? '';
  }

  async getDescription(): Promise<string> {
    return (await this.description.textContent())?.trim() ?? '';
  }

  async getTags(): Promise<string[]> {
    return await this.tags.allTextContents();
  }

  async getCreationDate(): Promise<string> {
    return (await this.creationDate.textContent())?.trim() ?? '';
  }

  async getAuthor(): Promise<string> {
    return (await this.author.textContent())?.trim() ?? '';
  }

  async getImageAlt(): Promise<string> {
    return (await this.image.getAttribute('alt')) ?? '';
  }

  async getImageSrc(): Promise<string> {
    return (await this.image.getAttribute('src')) ?? '';
  }

  async getHref(): Promise<string> {
    return (await this.link.getAttribute('href')) ?? '';
  }

  async isMoreButtonVisible(): Promise<boolean> {
    return await this.moreButton.isVisible();
  }

  async isFavouriteButtonVisible(): Promise<boolean> {
    return await this.favouriteButton.isVisible();
  }
}
