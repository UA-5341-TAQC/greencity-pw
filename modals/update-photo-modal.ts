import { test, type Locator, type Page } from '@playwright/test';
import { BaseModal } from '@/modals/base-modal';
import { UploadPhotoComponent } from '@/components/image-upload-component';

export class UpdatePhotoModal extends BaseModal {
  private static readonly ROOT_LOCATOR = 'app-edit-photo-pop-up';

  readonly cancelButton: Locator;
  readonly deletePhotoButton: Locator;
  readonly uploadPhotoButton: Locator;
  readonly profileAvatar: Locator;
  readonly questionText: Locator;
  readonly uploadPhotoComponent: UploadPhotoComponent;

  // Cropper state buttons on app-edit-photo-pop-up
  readonly changePhotoButton: Locator;
  readonly savePhotoButton: Locator;

  constructor(page: Page) {
    super(page, page.locator(UpdatePhotoModal.ROOT_LOCATOR).first());

    this.cancelButton = this.root.locator('button.tertiary-global-button').first();
    this.deletePhotoButton = this.root.getByRole('button', {
      name: /(?:Видалити фото|Delete photo)/i,
    });
    this.uploadPhotoButton = this.root.getByRole('button', {
      name: /(?:Завантажити нове фото|Upload new photo)/i,
    });
    this.closeButton = this.root.locator('button.cancel:has(img[alt="cancel"]), button.cancel');
    this.profileAvatar = this.root.locator('div.profile-avatar');
    this.questionText = this.root.getByText(
      /Do you want to change your profile picture\?|Ви хочете змінити свою фотографію профілю\?/i
    );

    this.uploadPhotoComponent = new UploadPhotoComponent(
      this.root.locator('app-drag-and-drop').first(),
      page
    );

    this.changePhotoButton = this.root.getByRole('button', {
      name: /(?:Change photo|Змінити фото)/i,
    });
    this.savePhotoButton = this.root.getByRole('button', {
      name: /(?:Save photo|Зберегти фото)/i,
    });
  }

  /**
   * Clicks the Upload photo button.
   */
  async clickUploadPhoto(): Promise<void> {
    await test.step('Update photo modal: click Upload photo', async () => {
      await this.uploadPhotoButton.click();
    });
  }

  /**
   * Clicks the Delete photo button.
   */
  async clickDeletePhotoButton(): Promise<void> {
    await test.step('Update photo modal: click Delete photo', async () => {
      await this.deletePhotoButton.click();
    });
  }

  /**
   * Clicks the Cancel button.
   */
  async clickCancelButton(): Promise<void> {
    await test.step('Update photo modal: click Cancel', async () => {
      await this.cancelButton.click();
    });
  }

  /**
   * Clicks the Close button. Will close modal.
   */
  async clickCloseButton(): Promise<void> {
    await test.step('Update photo modal: click Close', async () => {
      await this.closeButton.click();
    });
  }

  /**
   * Clicks the Change photo button on the cropper view.
   */
  async clickChangePhoto(): Promise<void> {
    await test.step('Update photo modal: click Change photo', async () => {
      await this.changePhotoButton.click();
    });
  }

  /**
   * Clicks the Save photo button to finalize profile photo update.
   */
  async clickSavePhoto(): Promise<void> {
    await test.step('Update photo modal: click Save photo', async () => {
      await this.savePhotoButton.click();
    });
  }

  /**
   * @returns string of question on update photo modal
   */
  async getQuestionText(): Promise<string> {
    return await test.step('Update photo modal: read question text', async () => {
      return (await this.questionText.textContent())?.trim() ?? '';
    });
  }

  /**
   *  @returns boolean whether delete button is enabled.
   */
  async isDeletePhotoButtonEnabled(): Promise<boolean> {
    return await test.step('Update photo modal: check delete photo button enabled', async () => {
      return await this.deletePhotoButton.isEnabled();
    });
  }

  /**
   *  @returns boolean whether cancel button is enabled.
   */
  async isCancelButtonEnabled(): Promise<boolean> {
    return await test.step('Update photo modal: check cancel button enabled', async () => {
      return await this.cancelButton.isEnabled();
    });
  }

  /**
   *  @returns boolean whether upload new photo button is enabled.
   */
  async isUploadPhotoButtonEnabled(): Promise<boolean> {
    return await test.step('Update photo modal: check upload photo button enabled', async () => {
      return await this.uploadPhotoButton.isEnabled();
    });
  }

  /**
   *  @returns boolean whether profile photo is visible.
   */
  async isProfileAvatarVisible(): Promise<boolean> {
    return await test.step('Update photo modal: check profile avatar visible', async () => {
      return await this.profileAvatar.isVisible();
    });
  }
}
