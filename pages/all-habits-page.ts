import type { Locator, Page } from '@playwright/test';
import BasePage from './base-page';
import { HabitFilterComponent } from '@/components/habit-filter-component';
import { Language } from '@/types/header.types';

export class AllHabitsPage extends BasePage {
  public readonly filters: HabitFilterComponent;

  protected readonly backToMyHabitsLink: Locator;
  protected readonly pageTitle: Locator;
  protected readonly createHabitButton: Locator;
  protected readonly itemsFound: Locator;
  protected readonly tilesViewButton: Locator;
  protected readonly listViewButton: Locator;
  protected readonly habitCards: Locator;

  constructor(page: Page, lang: Language = Language.En) {
    super(page);

    this.filters = new HabitFilterComponent(
      this.page.locator('.filters-container'),
      this.page,
      lang
    );

    this.backToMyHabitsLink = this.page.locator('.habits_header-wrapper > a');

    this.pageTitle = this.page.locator('.main-header');

    this.createHabitButton = this.page.locator('.habit-header .secondary-global-button');

    this.itemsFound = this.page.locator('.habits_header-items-found');

    this.tilesViewButton = this.page.locator('.btn-tiles');

    this.listViewButton = this.page.locator('.btn-bars');

    this.habitCards = this.page.locator('.galleryContainer > app-habits-gallery-view');
  }

  async isPageVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  async getPageTitle(): Promise<string> {
    return (await this.pageTitle.textContent())?.trim() ?? '';
  }

  async clickBackToMyHabits(): Promise<void> {
    await this.backToMyHabitsLink.click();
  }

  async clickCreateHabit(): Promise<void> {
    await this.createHabitButton.click();
  }

  async getItemsFoundCount(): Promise<number> {
    const text = (await this.itemsFound.textContent())?.trim() ?? '';
    const match = text.match(/\d+/);

    if (!match) {
      throw new Error(`Invalid items found text: '${text}'`);
    }

    return Number(match[0]);
  }

  async switchToTilesView(): Promise<void> {
    await this.tilesViewButton.click();
  }

  async switchToListView(): Promise<void> {
    await this.listViewButton.click();
  }

  async getDisplayedHabitsCount(): Promise<number> {
    return await this.habitCards.count();
  }
}
