import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class EcoNewsPage extends BasePage {
  public readonly tableViewButton: Locator;
  public readonly listViewButton: Locator;
  public readonly newsList: Locator;
  public readonly galleryViewCards: Locator;
  public readonly listViewCards: Locator;
  private readonly newsCards: Locator;

  constructor(page: Page) {
    super(page);
    this.tableViewButton = page.getByRole('button', { name: 'table view' });
    this.listViewButton = page.getByRole('button', { name: 'list view' });
    this.newsList = page.locator('ul[aria-label="news list"]');
    this.galleryViewCards = page.locator('li.gallery-view-li-active');
    this.listViewCards = page.locator('li.list-view-li-active');
    this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
  }

  async navigateToEcoNewsPage(): Promise<void> {
    await test.step('Navigate to Eco News page', async () => {
      await this.navigateTo('/#/greenCity/news');
    });
  }

  async waitForEcoNewsPage(): Promise<void> {
    await test.step('Wait for Eco News page to load', async () => {
      await this.waitForPageLoad();
      await this.newsCards.first().waitFor({ state: 'visible' });
    });
  }

  async clickListView(): Promise<void> {
    await test.step('Switch Eco News display mode to list view', async () => {
      await this.listViewButton.click();
    });
  }

  async clickTableView(): Promise<void> {
    await test.step('Switch Eco News display mode to table view', async () => {
      await this.tableViewButton.click();
    });
  }

  async getNewsCardsCount(): Promise<number> {
    return await test.step('Get news cards count', async () => {
      return this.newsCards.count();
    });
  }

  getNewsCardLocator(index: number): Locator {
    return this.newsCards.nth(index);
  }
}
