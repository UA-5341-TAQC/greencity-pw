import type { Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class PlacesSearchComponent extends BaseComponent {
  private readonly searchInput: Locator;
  private readonly locationInput: Locator;

  constructor(root: Locator) {
    super(root);

    this.searchInput = this.root.getByPlaceholder('Searching for a place');
    this.locationInput = this.root.getByPlaceholder('Choose location');
  }

  async fillSearch(value: string): Promise<void> {
    await this.searchInput.fill(value);
  }

  async fillLocation(value: string): Promise<void> {
    await this.locationInput.fill(value);
  }
}
