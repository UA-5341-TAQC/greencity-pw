import type { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base-component';
import { Language } from '@/types/header.types';
import { ALL_HABITS_I18N } from '@/types/all-habits.i18n';

export class HabitFilterComponent extends BaseComponent {
  public readonly i18n: (typeof ALL_HABITS_I18N)[Language];

  public readonly tagsFilter: Locator;
  public readonly difficultyFilter: Locator;
  public readonly typesFilter: Locator;
  public readonly resetButton: Locator;
  public readonly filterOptions: Locator;

  constructor(root: Locator, page: Page, lang: Language = Language.En) {
    super(root, page);

    this.i18n = ALL_HABITS_I18N[lang];

    this.tagsFilter = this.root
      .locator('.filters-dropdown')
      .filter({
        has: this.root.locator('.filter-label', {
          hasText: this.i18n.tagsFilter,
        }),
      })
      .locator('mat-select');

    this.difficultyFilter = this.root
      .locator('.filters-dropdown')
      .filter({
        has: this.root.locator('.filter-label', {
          hasText: this.i18n.difficultyFilter,
        }),
      })
      .locator('mat-select');

    this.typesFilter = this.root
      .locator('.filters-dropdown')
      .filter({
        has: this.root.locator('.filter-label', {
          hasText: this.i18n.typesFilter,
        }),
      })
      .locator('mat-select');

    this.resetButton = this.root.locator('.reset-btn');

    this.filterOptions = this.page.locator('.mat-mdc-select-panel:visible mat-option');
  }

  async openTagsFilter(): Promise<void> {
    await this.tagsFilter.click();
  }

  async openDifficultyFilter(): Promise<void> {
    await this.difficultyFilter.click();
  }

  async openTypesFilter(): Promise<void> {
    await this.typesFilter.click();
  }

  async selectOption(optionName: string): Promise<void> {
    await this.filterOptions.getByText(optionName, { exact: true }).click();
  }

  async resetFilters(): Promise<void> {
    await this.resetButton.click();
  }
}
