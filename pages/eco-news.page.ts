import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class EcoNewsPage extends BasePage {
  private readonly newsCards: Locator;

  constructor(page: Page) {
    super(page);
    this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
  }

  async navigateToEcoNewsPage(): Promise<void> {
    await this.navigateTo('/#/greenCity/news');
  }

  async waitForEcoNewsPage(): Promise<void> {
    await this.waitForPageLoad();
    await this.newsCards.first().waitFor({ state: 'visible' });
  }

  async getNewsCardsCount(): Promise<number> {
    return this.newsCards.count();
  }

  getNewsCardLocator(index: number): Locator {
    return this.newsCards.nth(index);
  }
}