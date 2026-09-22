import type { Locator, Page } from '@playwright/test';
import { EcoNewsCardComponent } from '@/components/eco-news-card-component';

export class EcoNewsListCardComponent extends EcoNewsCardComponent {
  protected readonly link: Locator;
  protected readonly image: Locator;
  protected readonly tags: Locator;
  protected readonly title: Locator;
  protected readonly description: Locator;
  protected readonly favouriteButton: Locator;

  protected readonly moreButton: Locator;
  protected readonly creationDate: Locator;
  protected readonly author: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);

    this.link = this.root.locator('a.link');
    this.image = this.root.locator('img.eco-news_list-img');
    this.tags = this.root.locator('.filter-tag .eco-news_list-tag span:not(.tag-divider)');
    this.title = this.root.locator('.eco-news_list-content-title h3');
    this.description = this.root.locator('.eco-news_list-content-text');
    this.favouriteButton = this.root.locator('.favourite-button');

    this.moreButton = this.root.locator('.button-news-card button');
    this.creationDate = this.root.locator('.eco-news_data-text-date .text');
    this.author = this.root.locator('.eco-news_person');
  }

  async clickMoreButton(): Promise<void> {
    await this.moreButton.click();
  }

  async getCreationDate(): Promise<string> {
    return (await this.creationDate.textContent())?.trim() ?? '';
  }

  async getAuthor(): Promise<string> {
    return (await this.author.textContent())?.trim() ?? '';
  }

  async isMoreButtonVisible(): Promise<boolean> {
    return await this.moreButton.isVisible();
  }
}
