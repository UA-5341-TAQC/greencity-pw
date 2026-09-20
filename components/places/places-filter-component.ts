import type { Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export type PlaceFilter = 'Shops' | 'Restaurants' | 'Recycling points' | 'Events' | 'Saved places';

export class PlacesFilterComponent extends BaseComponent {
  constructor(root: Locator) {
    super(root);
  }

  async selectFilter(filterName: PlaceFilter): Promise<void> {
    await this.root.getByRole('button', { name: filterName, exact: true }).click();
  }
}
