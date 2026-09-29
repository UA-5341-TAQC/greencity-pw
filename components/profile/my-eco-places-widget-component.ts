import { Locator, Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class EcoPlacesWidgetComponent extends BaseComponent {
  readonly title: Locator;
  readonly quantity: Locator;
  readonly ecoPlaceList: Locator;

  constructor(page: Page) {
    super(page.locator('.eco-places-content').first(), page);

    this.title = this.root.locator('.header .title').first();
    this.quantity = this.root.locator('.favourites-quantity span').first();
    this.ecoPlaceList = this.root.locator('.eco-place-list');
  }

  async getFavouritesCount(): Promise<number> {
    const text = await this.quantity.innerText();
    const count = parseInt(text, 10);
    return isNaN(count) ? 0 : count;
  }
}
