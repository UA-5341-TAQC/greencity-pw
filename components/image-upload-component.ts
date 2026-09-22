import { Locator, Page } from '@playwright/test';
import { BaseComponent } from './base-component';

export class UploadPhotoComponent extends BaseComponent {
  private readonly rootElement: Locator; // Контейнер компонента (для локалізації пошуку)
  private readonly dropZone: Locator;
  private readonly fileInput: Locator;
  private readonly uploadText: Locator;


  constructor(root: Locator, page: Page) {
    super(root, page);

    this.rootElement = page.locator('app-drag-and-drop');
    this.fileInput = this.rootElement.locator('input[type="file"]');
    this.dropZone = this.rootElement.locator('div.dropzone');
    this.uploadText = this.rootElement.getByText('/огляд|browse/i');

  };


}

