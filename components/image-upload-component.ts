import { Locator, Page, expect, test } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import * as fs from 'fs';
import * as path from 'path';

export class UploadPhotoComponent extends BaseComponent {
  readonly dropZone: Locator;
  readonly fileInput: Locator;
  readonly browseButton: Locator;
  readonly cropperBlock: Locator;
  readonly cropperImage: Locator;

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.fileInput = this.root.locator('input#upload');
    this.dropZone = this.root.locator('.dropzone');
    this.browseButton = this.root.locator('label[for="upload"]');
    this.cropperBlock = this.root.locator('.cropper-block');
    this.cropperImage = this.root.locator('image-cropper img.ngx-ic-source-image');
  }

  /**
   * Get browse text
   */
  async getBrowseText(): Promise<string> {
    return await test.step('Upload photo component: get browse text', async () => {
      return (await this.browseButton.innerText()).trim();
    });
  }

  /**
   * Upload file with hidden fileInput
   * @param file - path to file (photo) or buffer payload
   */
  async uploadPhotoDirect(
    file: string | { name: string; mimeType: string; buffer: Buffer }
  ): Promise<void> {
    await test.step('Upload photo component: upload photo direct', async () => {
      await this.fileInput.setInputFiles(file);
    });
  }

  /**
   * Upload file with hidden fileInput by click on linked text
   * @param filePath - path to file (photo)
   */
  async uploadPhotoByClickingBrowse(filePath: string): Promise<void> {
    await test.step('Upload photo component: upload photo by clicking browse', async () => {
      const fileChooserPromise = this.page.waitForEvent('filechooser');
      await this.browseButton.click();
      const fileChooser = await fileChooserPromise;
      await fileChooser.setFiles(filePath);
    });
  }

  /**
   * Drag and drop simulation to dropzone.
   */
  async dropPhoto(filePath: string): Promise<void> {
    await test.step('Upload photo component: drop photo', async () => {
      const resolvedPath = path.resolve(filePath);
      const buffer = fs.readFileSync(resolvedPath);
      const fileName = path.basename(resolvedPath);

      await this.dropZone.evaluate(
        (element, { fileHex, fileName }) => {
          const bufferArray = new Uint8Array(
            fileHex.match(/.{1,2}/g)?.map((byte: string) => parseInt(byte, 16)) || []
          );

          const file = new File([bufferArray], fileName, { type: 'image/png' });
          const dataTransfer = new DataTransfer();
          dataTransfer.items.add(file);

          element.dispatchEvent(new DragEvent('dragenter', { dataTransfer, bubbles: true }));
          element.dispatchEvent(new DragEvent('dragover', { dataTransfer, bubbles: true }));
          element.dispatchEvent(new DragEvent('drop', { dataTransfer, bubbles: true }));
        },
        {
          fileHex: buffer.toString('hex'),
          fileName: fileName,
        }
      );
    });
  }

  /**
   * Check whether cropper element is visible
   */
  async expectCropperToBeVisible(): Promise<void> {
    await test.step('Upload photo component: expect cropper to be visible', async () => {
      await expect(this.cropperBlock).toBeVisible();
      await expect(this.cropperImage).toBeVisible();
    });
  }

  /**
   * Get base64 or src image in cropper
   */
  async getCropperImageSrc(): Promise<string | null> {
    return await test.step('Upload photo component: get cropper image src', async () => {
      return await this.cropperImage.getAttribute('src');
    });
  }
}
