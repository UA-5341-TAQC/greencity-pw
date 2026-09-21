import type { Locator, Page } from '@playwright/test';
import { BaseModal } from '@/modals/base-modal';

export class UpdatePhotoModal extends BaseModal {
  private static readonly ROOT_LOCATOR = 'app-edit-photo-pop-up';

  private readonly cancelButton: Locator;
  private readonly deletePhotoButton: Locator;
  private readonly uploadPhotoButton: Locator;
  private readonly profileAvatar: Locator;
  private readonly questionText: Locator;

  constructor(page: Page) {
    super(page, page.locator(UpdatePhotoModal.ROOT_LOCATOR).first());

    this.cancelButton = this.root.getByRole('button', { name: /( Скасувати | Cancel )/i });
    this.deletePhotoButton = this.root.getByRole('button', {
      name: /( Видалити фото | Delete photo )/i,
    });
    this.uploadPhotoButton = this.root.getByRole('button', {
      name: /( Завантажити нове фото | Upload new photo )/i,
    });
    this.closeButton = this.root.locator('button.cancel:has(img[alt="cancel"])');
    this.profileAvatar = this.root.locator('div.profile-avatar');
    this.questionText = this.root.getByText(
      /Do you want to change your profile picture\?|Ви хочете змінити свою фотографію профілю?\?/i
    );
  }

  /**
   * Clicks the Upload photo button.
   */
  async clickUploadPhoto(): Promise<void> {
    await this.uploadPhotoButton.click();
  }

  /**
   * Clicks the Delete photo button.
   */
  async clickDeletePhotoButton(): Promise<void> {
    await this.deletePhotoButton.click();
  }

  /**
   * Clicks the Cancel button.
   */
  async clickCancelButton(): Promise<void> {
    await this.cancelButton.click();
  }

  /**
   * Clicks the Close button. Will close modal.
   */
  async clickCloseButton(): Promise<void> {
    await this.closeButton.click();
  }

  /**
   * @returns string of question on update photo modal
   */
  async getQuestionText(): Promise<string> {
    return (await this.questionText.textContent()) ?? '';
  }

  /**
   *  @returns boolean whether delete button is enabled.
   */
  async isDeletePhotoButtonEnabled(): Promise<boolean> {
    return this.deletePhotoButton.isEnabled();
  }

  /**
   *  @returns boolean whether cancel button is enabled.
   */
  async isCancelButtonEnabled(): Promise<boolean> {
    return this.cancelButton.isEnabled();
  }

  /**
   *  @returns boolean whether upload new photo button is enabled.
   */
  async isUpdloadPhotoButtonEnabled(): Promise<boolean> {
    return this.uploadPhotoButton.isEnabled();
  }

  /**
   *  @returns boolean whether profile photo is visible.
   */
  async isProfileAvatarVisible(): Promise<boolean> {
    return this.profileAvatar.isVisible();
  }
}
