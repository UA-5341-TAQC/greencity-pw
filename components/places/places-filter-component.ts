import type { Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export enum PlaceFilter {
  Shops = 'Shops',
  Restaurants = 'Restaurants',
  RecyclingPoints = 'Recycling points',
  Events = 'Events',
  SavedPlaces = 'Saved places',
}

export class PlacesFilterComponent extends BaseComponent {
  constructor(root: Locator) {
    super(root);
  }

  async selectFilter(filterName: PlaceFilter): Promise<void> {
    await this.root.getByRole('button', { name: filterName, exact: true }).click();
  }
}
