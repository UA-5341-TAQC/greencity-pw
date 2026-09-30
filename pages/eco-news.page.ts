import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { EcoNewsTableCardComponent } from '@/components';

export class EcoNewsPage extends BasePage {
  public readonly tableViewButton: Locator;
  public readonly listViewButton: Locator;
  public readonly newsList: Locator;
  public readonly galleryViewCards: Locator;
  public readonly listViewCards: Locator;
  private readonly newsCards: Locator;
  private readonly favouritesToggle: Locator;
  private readonly createNewsButton: Locator;
  private readonly tagFilterButtons: Locator;

  constructor(page: Page) {
    super(page);
    this.tableViewButton = page.getByRole('button', { name: 'table view' });
    this.listViewButton = page.getByRole('button', { name: 'list view' });
    this.newsList = page.locator('ul[aria-label="news list"]');
    this.galleryViewCards = page.locator('li.gallery-view-li-active');
    this.listViewCards = page.locator('li.list-view-li-active');
    this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
    this.favouritesToggle = page
      .locator('.create-container .container-img')
      .filter({ has: page.locator('.bookmark-img') });
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

  async clickListView(): Promise<void> {
    await test.step('EcoNews: switch Eco News display mode to list view', async () => {
      await this.listViewButton.click();
    });
  }

  async clickTableView(): Promise<void> {
    await test.step('EcoNews: switch Eco News display mode to table view', async () => {
      await this.tableViewButton.click();
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
  }

  getNewsCardByHref(href: string): EcoNewsTableCardComponent {
    const card = this.newsCards.filter({
      has: this.page.locator(`a.link[href="${href}"]`),
    });
    return new EcoNewsTableCardComponent(card, this.page);
  }
}
export default EcoNewsPage;
