import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { EventImageItemComponent } from '@/components/event-image-item-component';

/**
 * Component representing the entire Picture upload section (<app-images-container>).
 * Encapsulates the title, counter, uploaded image list, default images, and upload input.
 */
export class EventImageUploadComponent extends BaseComponent {
  public readonly title: Locator;
  public readonly counter: Locator;
  public readonly fileInput: Locator;
  public readonly defaultImages: Locator;
  protected readonly attachedImageRoots: Locator;

  constructor(rootLocator: Locator, page?: Page) {
    super(rootLocator, page);
    this.title = this.root.locator('mat-label', { hasText: 'Picture' });
    this.counter = this.root.locator(
      'div.d-flex.flex-row.justify-content-between mat-label.xs-text'
    );
    this.fileInput = this.root.locator('input#file-upload');
    this.defaultImages = this.root.locator('.images-def-wrapper .img-container img');
    this.attachedImageRoots = this.root.locator('.input-image-wrapper.selected');
  }

  /**
   * Scrolls the picture section into view.
   */
  async scrollTo(): Promise<void> {
    await test.step('Scroll to Picture section', async () => {
      await this.title.scrollIntoViewIfNeeded();
    });
  }

  /**
   * Returns the attached image item component at the given index.
   */
  getImage(index: number = 0): EventImageItemComponent {
    return new EventImageItemComponent(this.attachedImageRoots.nth(index), this.page);
  }

  /**
   * Returns the main attached image item component (marked as "Main").
   */
  getMainImage(): EventImageItemComponent {
    const root = this.attachedImageRoots.filter({ hasText: 'Main' }).first();
    return new EventImageItemComponent(root, this.page);
  }

  /**
   * Returns the count of currently attached images.
   */
  async getImagesCount(): Promise<number> {
    return await test.step('Get attached images count', async () => {
      return await this.attachedImageRoots.count();
    });
  }

  /**
   * Returns the image counter text (e.g. "1/5").
   */
  async getCounterText(): Promise<string> {
    return await test.step('Get image counter text', async () => {
      return (await this.counter.innerText()).trim();
    });
  }

  /**
   * Selects one of the Greencity default pictures by index (0 to 4).
   */
  async selectDefaultImage(index: number): Promise<void> {
    await test.step(`Select default picture at index ${index}`, async () => {
      await this.defaultImages.nth(index).click();
    });
  }

  /**
   * Uploads an image from the local file path.
   */
  async uploadImage(filePath: string): Promise<void> {
    await test.step(`Upload event image from ${filePath}`, async () => {
      await this.fileInput.setInputFiles(filePath);
    });
  }
}
