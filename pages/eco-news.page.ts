import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class EcoNewsPage extends BasePage {
  private readonly newsCards: Locator;

  constructor(page: Page) {
    super(page);
    this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
  }

  async navigateToEcoNewsPage(): Promise<void> {
    await test.step('Navigate to Eco News Page', async () => {
      await this.navigateTo('/#/greenCity/news');
    }, { box: true });
  }

  async waitForEcoNewsPage(): Promise<void> {
    await test.step('Wait for Eco News Page to load', async () => {
      await this.waitForPageLoad();
      await this.newsCards.first().waitFor({ state: 'visible' });
    }, { box: true });
  }

  async getNewsCardsCount(): Promise<number> {
    return await test.step('Get news cards count', async () => {
      return this.newsCards.count();
    }, { box: true });
  }

  getNewsCardLocator(index: number): Locator {
    return this.newsCards.nth(index);
  }
}
