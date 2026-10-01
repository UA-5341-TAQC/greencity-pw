import { test, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { EcoNewsListCardComponent } from '@/components/eco-news-card/eco-news-list-card-component';
import { EcoNewsTableCardComponent } from '@/components';

export class EcoNewsPage extends BasePage {
  public readonly tableViewButton: Locator;
  public readonly listViewButton: Locator;
  public readonly newsList: Locator;
  public readonly galleryViewCards: Locator;
  public readonly listViewCards: Locator;
  private readonly newsCards: Locator;
  private readonly createNewsButton: Locator;
  private readonly tagFilterButtons: Locator;
  private readonly itemsFoundText: Locator;
  private readonly searchButton: Locator;
  private readonly searchInput: Locator;
  private readonly bookmarkButton: Locator;

  constructor(page: Page) {
    super(page);
    // NOTE: real aria-label on the live site is Ukrainian ("перегляд таблиці" /
    // "подання списку"), not English "table view"/"list view" — using the
    // verified CSS classes we found via DevTools instead of getByRole(name).
    this.tableViewButton = page.locator('span.btn-tiles');
    this.listViewButton = page.locator('span.btn-bars');
    this.newsList = page.locator('ul[aria-label="news list"]');
    this.galleryViewCards = page.locator('li.gallery-view-li-active');
    this.listViewCards = page.locator('li.list-view-li-active');
    this.newsCards = page.locator('li').filter({ has: page.locator('a.link') });
    this.createNewsButton = page.locator('#create-button, a[href*="create-news"]');
    this.tagFilterButtons = page.locator('.ul-eco-buttons button.tag-button');
    this.itemsFoundText = page.locator('app-remaining-count h2');
    this.searchButton = page.locator('span.search-img');
    this.searchInput = page.locator('input.place-input');
    this.bookmarkButton = page.locator('span.bookmark-img');
  }

  async navigateToEcoNewsPage(): Promise<void> {
    await test.step('EcoNews: navigate to Eco News page', async () => {
      await this.navigateTo('/#/greenCity/news');
    });
  }

  async waitForEcoNewsPage(): Promise<void> {
    await test.step('EcoNews: wait for Eco News page to load', async () => {
      await this.waitForPageLoad();
      await this.newsCards.first().waitFor({ state: 'visible' });
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

  async isTableViewActive(): Promise<boolean> {
    return (await this.tableViewButton.getAttribute('aria-pressed')) === 'true';
  }

  async isListViewActive(): Promise<boolean> {
    return (await this.listViewButton.getAttribute('aria-pressed')) === 'true';
  }

  async getNewsCardsCount(): Promise<number> {
    return await test.step('EcoNews: get news cards count', async () => {
      return await this.newsCards.count();
    });
  }

  getNewsCardLocator(index: number): Locator {
    return this.newsCards.nth(index);
  }

  getNewsCard(index: number): EcoNewsListCardComponent {
    return new EcoNewsListCardComponent(this.newsCards.nth(index), this.page);
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
      await this.tagFilterButtons.filter({ hasText: tagName }).first().click();
    });
  }

  async getTagNames(): Promise<string[]> {
    return this.tagFilterButtons.locator('.text').allInnerTexts();
  }

  async getItemsFoundCount(): Promise<number> {
    const text = (await this.itemsFoundText.innerText()).trim();
    const match = text.match(/\d+/);
    return match ? Number(match[0]) : 0;
  }

  async openSearch(): Promise<void> {
    await this.searchButton.click();
  }

  async searchNews(query: string): Promise<void> {
    await this.searchInput.fill(query);
  }

  async clearSearch(): Promise<void> {
    await this.searchInput.clear();
  }

  async clickBookmark(): Promise<void> {
    await this.bookmarkButton.click();
  }

  getTableNewsCard(index: number): EcoNewsTableCardComponent {
    return new EcoNewsTableCardComponent(this.newsCards.nth(index), this.page);
  }

  getNewsCardByTitle(title: string): EcoNewsTableCardComponent {
    const card = this.newsCards.filter({
      has: this.page.getByRole('heading', { name: title, exact: true }),
    });
    return new EcoNewsTableCardComponent(card, this.page);
  }

  getNewsCardByHref(href: string): EcoNewsTableCardComponent {
    const card = this.newsCards.filter({
      has: this.page.locator(`a.link[href="${href}"]`),
    });
    return new EcoNewsTableCardComponent(card, this.page);
  }
}
export default EcoNewsPage;
