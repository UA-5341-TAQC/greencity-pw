import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

/**
 * Component representing a single attached image in the event picture upload section.
 */
export class EventImageItemComponent extends BaseComponent {
  public readonly image: Locator;
  public readonly badge: Locator;
  public readonly deleteButton: Locator;
  public readonly editButton: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);
    this.image = this.root.locator('img');
    this.badge = this.root.locator('.selected-text');
    this.deleteButton = this.root.locator('.selected-delete');
    this.editButton = this.root.locator('.selected-edit');
  }

  /**
   * Clicks the delete (close cross) button on this image.
   */
  async clickDelete(): Promise<void> {
    await test.step('Event image: click delete button', async () => {
      await this.deleteButton.click();
    });
  }

  /**
   * Clicks the edit button on this image.
   */
  async clickEdit(): Promise<void> {
    await test.step('Event image: click edit button', async () => {
      await this.editButton.click();
    });
  }

  /**
   * Returns the badge text of this image (e.g. "Main").
   */
  async getBadgeText(): Promise<string> {
    return await test.step('Event image: get badge text', async () => {
      return (await this.badge.innerText()).trim();
    });
  }

  /**
   * Checks whether this image is marked as "Main".
   */
  async isMain(): Promise<boolean> {
    return await test.step('Event image: check if image is Main', async () => {
      return (await this.badge.isVisible()) && (await this.getBadgeText()) === 'Main';
    });
  }
}
