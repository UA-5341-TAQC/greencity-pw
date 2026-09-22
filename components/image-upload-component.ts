import { Locator, Page, expect } from '@playwright/test';
import { BaseComponent } from './base-component';
import * as fs from 'fs';
import * as path from 'path';

export class UploadPhotoComponent extends BaseComponent {
  private readonly rootElement: Locator;
  private readonly dropZone: Locator;
  private readonly fileInput: Locator;
  private readonly browseButton: Locator;
  private readonly cropperBlock: Locator;
  private readonly cropperImage: Locator;

  // Comment: Need path for picture

  constructor(root: Locator, page: Page) {
    super(root, page);

    this.rootElement = page.locator('app-drag-and-drop');
    this.fileInput = this.rootElement.locator('input#upload');
    this.dropZone = this.rootElement.locator('.dropzone');
    this.browseButton = this.rootElement.getByText('label[for="upload"]');
    this.cropperBlock = this.rootElement.locator('.cropper-block');
    this.cropperImage = this.rootElement.locator('image-cropper img.ngx-ic-source-image');
  }

  /**
   * Get browse text
   */
  async getBrowseText(): Promise<string> {
    return (await this.browseButton.innerText()).trim();
  }

  /**
   * Upload file with hidden fileInput
   * @param filePath - path to file (photo)
   */
  async uploadPhotoDirect(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
  }

  /**
   * Upload file with hidden fileInput by click on linked text
   * @param filePath - path to file (photo)
   */
  async uploadPhotoByClickingBrowse(filePath: string) {
    const fileChooserPromise = this.page.waitForEvent('filechooser');

    await this.browseButton.click();

    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles(filePath);
  }

  /**
   * Temporary implemenation, needed help or double check
   * Please use uploadPhotoByClickingBrowse or uploadPhotoDirect till then.
   */
  async dropPhoto(filePath: string) {
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
  }

  /**
   * check wheter cropper element is visible
   */
  async expectCropperToBeVisible() {
    await expect(this.cropperBlock).toBeVisible();
    await expect(this.cropperImage).toBeVisible();
  }

  /**
   * get base64 or src image in cropper
   */
  async getCropperImageSrc(): Promise<string | null> {
    return await this.cropperImage.getAttribute('src');
  }
}
