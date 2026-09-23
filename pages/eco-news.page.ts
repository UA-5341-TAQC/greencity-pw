import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class EcoNewsPage extends BasePage {
  private readonly newsCards: Locator;
  private readonly createNewsButton: Locator;
  private readonly tagFilterButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
    this.createNewsButton = page.locator('#create-button, a[href*="create-news"]');
    this.tagFilterButtons = page.locator(
      '.custom-chip, ul.ul-eco-buttons button, button.tag-button'
    );
  }

  async navigateToEcoNewsPage(): Promise<void> {
    await test.step('EcoNews: navigate to Eco News page', async () => {
      await this.navigateTo('/#/greenCity/news');
    });
  }

  async waitForEcoNewsPage(): Promise<void> {
    await test.step('EcoNews: wait for Eco News page to load', async () => {
      await this.waitForPageLoad();
      await this.createNewsButton.first().waitFor({ state: 'visible' });
    });
  }

  async clickCreateNews(): Promise<void> {
    await test.step('EcoNews: click Create news button', async () => {
      await this.createNewsButton.first().click();
    });
  }

  async getNewsCardsCount(): Promise<number> {
    return await test.step('EcoNews: get news cards count', async () => {
      return await this.newsCards.count();
    });
  }

  getNewsCardLocator(index: number): Locator {
    return this.newsCards.nth(index);
  }

  async getFirstNewsCardTitle(): Promise<string> {
    return await test.step('EcoNews: get first news card title', async () => {
      const titleElem = this.page
        .locator('.eco-news_list-content-title h3, .title-list h3, h3')
        .first();
      await titleElem.waitFor({ state: 'visible' });
      return (await titleElem.innerText()).trim();
    });
  }

  async filterByTag(tagName: string): Promise<void> {
    await test.step(`EcoNews: filter by tag "${tagName}"`, async () => {
      const tagBtn = this.tagFilterButtons.filter({ hasText: tagName }).first();
      await tagBtn.click();
    });
  }
}
export default EcoNewsPage;
