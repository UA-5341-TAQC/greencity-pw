import type { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export abstract class EcoNewsCardComponent extends BaseComponent {
  protected abstract readonly link: Locator;
  protected abstract readonly image: Locator;
  protected abstract readonly tags: Locator;
  protected abstract readonly title: Locator;
  protected abstract readonly description: Locator;
  protected abstract readonly favouriteButton: Locator;

  protected constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);
  }

  async click(): Promise<void> {
    await this.link.click();
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

  async getImageAlt(): Promise<string> {
    return (await this.image.getAttribute('alt')) ?? '';
  }

  async getImageSrc(): Promise<string> {
    return (await this.image.getAttribute('src')) ?? '';
  }

  async getHref(): Promise<string> {
    return (await this.link.getAttribute('href')) ?? '';
  }

  async isFavouriteButtonVisible(): Promise<boolean> {
    return await this.favouriteButton.isVisible();
  }
}
