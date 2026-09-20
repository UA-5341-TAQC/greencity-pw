import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { PlacesSearchComponent, PlacesFilterComponent } from '@/components';

export class PlacesPage extends BasePage {
  protected readonly addPlaceButton: Locator;

  readonly search: PlacesSearchComponent;
  readonly filters: PlacesFilterComponent;

  constructor(page: Page) {
    super(page);

    this.addPlaceButton = page.getByRole('button', {
      name: 'Add place',
      exact: true,
    });

    this.search = new PlacesSearchComponent(page.locator('.search-elements'));
    this.filters = new PlacesFilterComponent(page.locator('app-tag-filter'));
  }

  async navigateToPlacesPage(): Promise<void> {
    await this.navigateTo('/#/greenCity/places');
  }

  async waitForPlacesPage(): Promise<void> {
    await this.waitForPageLoad();
  }

  async clickAddPlaceButton(): Promise<void> {
    await this.addPlaceButton.click();
  }
}