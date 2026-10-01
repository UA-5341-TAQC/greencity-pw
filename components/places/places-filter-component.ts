import type { Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { PlaceFilter } from '@/types/places.types';

export class PlacesFilterComponent extends BaseComponent {
  constructor(root: Locator) {
    super(root);
  }

  async selectFilter(filterName: PlaceFilter): Promise<void> {
    await this.root.getByRole('button', { name: filterName, exact: true }).click();
  }

  async areFiltersVisible(): Promise<boolean> {
    return await this.root.isVisible();
  }

  async isFilterSelected(filterName: PlaceFilter): Promise<boolean> {
    const filter = this.root.getByRole('button', { name: filterName, exact: true }).locator('a');

    return await filter.evaluate((element) => element.classList.contains('global-tag-clicked'));
  }
}
