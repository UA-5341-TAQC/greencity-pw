import type { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base-component';

export class NewsPagination extends BaseComponent {
  private readonly loadMoreButton: Locator;
  private readonly pageButtons: Locator;
  private readonly activePage: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);

    this.loadMoreButton = this.root.locator(
      'button:has-text("Show more"), button:has-text("Load more")'
    );
    this.pageButtons = this.root.locator('[class*="page-number"], li[class*="page"]');
    this.activePage = this.root.locator('[class*="active"]');
  }

  async isLoadMoreVisible(): Promise<boolean> {
    return this.loadMoreButton.isVisible();
  }

  async clickLoadMore(): Promise<void> {
    await this.loadMoreButton.click();
  }

  async getPageCount(): Promise<number> {
    return this.pageButtons.count();
  }

  async goToPage(pageNumber: number): Promise<void> {
    await this.pageButtons.filter({ hasText: String(pageNumber) }).click();
  }

  async getActivePageNumber(): Promise<string> {
    return (await this.activePage.innerText()).trim();
  }
}
