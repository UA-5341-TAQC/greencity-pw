import type { Locator, Page } from '@playwright/test';
import { BaseModal } from '@/modals/base-modal';

export class CityFilterModal extends BaseModal {
  protected readonly closeButton: Locator;
  protected readonly title: Locator;
  protected readonly citySearchInput: Locator;
  protected readonly citySuggestions: Locator;
  protected readonly cityList: Locator;
  protected readonly cityTags: Locator;
  protected readonly saveCitiesButton: Locator;

  constructor(page: Page, root: Locator) {
    super(page, root);

    this.closeButton = this.root.locator('button.close-btn');
    this.title = this.root.locator('div.city-modal-header h2');
    this.citySearchInput = this.root.getByRole('combobox');
    this.citySuggestions = this.page.getByRole('listbox').getByRole('option');
    this.cityList = this.root.locator('div.city-list');
    this.cityTags = this.cityList.locator('div.city-tag');
    this.saveCitiesButton = this.root.getByRole('button', { name: 'Add selected cities' });
  }

  /** Clicks the close button */
  async close(): Promise<void> {
    await this.closeButton.click();
  }

  /** Returns the modal title text */
  async getTitle(): Promise<string> {
    return (await this.title.textContent()) ?? '';
  }

  /** Types text into the city search input */
  async fillCitySearch(text: string): Promise<void> {
    await this.citySearchInput.fill(text);
  }

  /** Selects a first city suggestion from the autocomplete dropdown by its text. */
  async selectFirstCitySuggestion(cityName: string): Promise<void> {
    await this.citySuggestions.filter({ hasText: cityName }).first().click();
  }

  /** Returns the number of currently selected city tags */
  async getSelectedCitiesCount(): Promise<number> {
    return await this.cityTags.count();
  }

  /** Checks whether a city tag with the given name is currently selected */
  async isCitySelected(cityName: string): Promise<boolean> {
    return (await this.cityTags.filter({ hasText: new RegExp(`^${cityName}$`) }).count()) > 0;
  }

  /** Removes a selected city tag by its name  */
  async removeCity(cityName: string): Promise<void> {
    await this.cityTags
      .filter({ hasText: new RegExp(`^${cityName}$`) })
      .getByRole('button')
      .click();
  }

  /** Clicks "Add selected cities" to confirm the selection */
  async clickAddSelectedCities(): Promise<void> {
    await this.saveCitiesButton.click();
  }
}
