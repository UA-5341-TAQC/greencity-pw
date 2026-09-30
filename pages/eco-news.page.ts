import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { EcoNewsTableCardComponent } from '@/components';
import env from '@/config/env';

export class EcoNewsPage extends BasePage {
  private readonly newsCards: Locator;
  private readonly favouritesToggle: Locator;

  constructor(page: Page) {
    super(page);
    this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
    this.favouritesToggle = page
      .locator('.create-container .container-img')
      .filter({ has: page.locator('.bookmark-img') });
  }

  async navigateToEcoNewsPage(): Promise<void> {
    await this.navigateTo('/#/greenCity/news');
  }

  async waitForEcoNewsPage(): Promise<void> {
    await this.waitForDomContentLoaded();
    await this.newsCards.first().waitFor({ state: 'visible', timeout: env.LONG_TIMEOUT });
  }

  async getNewsCardsCount(): Promise<number> {
    return this.newsCards.count();
  }

  getNewsCardLocator(index: number): Locator {
    return this.newsCards.nth(index);
  }

  getNewsCard(index: number): EcoNewsTableCardComponent {
    return new EcoNewsTableCardComponent(this.newsCards.nth(index), this.page);
  }

  getNewsCardByTitle(title: string): EcoNewsTableCardComponent {
    const card = this.newsCards.filter({
      has: this.page.getByRole('heading', { name: title, exact: true }),
    });
    return new EcoNewsTableCardComponent(card, this.page);
  }

  async openFavourites(): Promise<void> {
    await this.favouritesToggle.click();
    await this.waitForDomContentLoaded();
  }
}