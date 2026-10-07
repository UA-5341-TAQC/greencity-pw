import { expect, type Page, type Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { EventImageUploadComponent, type EventImageItemComponent } from '@/components';

export class EditEventPage extends BasePage {
  readonly titleInput: Locator;
  readonly eventDaysSelect: Locator;
  readonly durationSelect: Locator;
  readonly openSelect: Locator;
  readonly inviteSelect: Locator;
  readonly tagEconomic: Locator;
  readonly tagSocial: Locator;
  readonly tagEnvironmental: Locator;
  readonly descriptionEditor: Locator;
  readonly imageCounter: Locator;
  public readonly pictures: EventImageUploadComponent;

  get fileInput(): Locator {
    return this.pictures.fileInput;
  }

  get defaultImages(): Locator {
    return this.pictures.defaultImages;
  }

  get mainImage(): Locator {
    return this.pictures.getImage(0).image;
  }

  get deleteImageBtn(): Locator {
    return this.pictures.getImage(0).deleteButton;
  }

  get editImageBtn(): Locator {
    return this.pictures.getImage(0).editButton;
  }
  readonly dateInput: Locator;
  readonly datePickerToggleBtn: Locator;
  readonly startTimeInput: Locator;
  readonly endTimeInput: Locator;
  readonly allDayCheckbox: Locator;
  readonly placeCheckbox: Locator;
  readonly placeInput: Locator;
  readonly onlineCheckbox: Locator;
  readonly onlineLinkInput: Locator;
  readonly applyToAllDaysCheckbox: Locator;
  readonly previewButton: Locator;
  readonly saveEventButton: Locator;
  readonly cancelButton: Locator;
  readonly toastNotification: Locator;
  readonly attachedImages: Locator;

  constructor(page: Page) {
    super(page);

    this.titleInput = page.locator('input[formcontrolname="title"]');
    this.eventDaysSelect = page.locator('mat-select[formcontrolname="eventDuration"]');
    this.durationSelect = page.locator('mat-select[formcontrolname="duration"]');
    this.openSelect = page.locator('mat-select[formcontrolname="open"]');
    this.inviteSelect = page.locator('mat-select[formcontrolname="invite"]');

    this.tagEconomic = page.locator('mat-chip-option', { hasText: 'Economic' });
    this.tagSocial = page.locator('mat-chip-option', { hasText: 'Social' });
    this.tagEnvironmental = page.locator('mat-chip-option', { hasText: 'Environmental' });

    this.descriptionEditor = page.locator('quill-editor .ql-editor');

    this.pictures = new EventImageUploadComponent(page.locator('app-images-container'), page);
    this.imageCounter = page.locator(
      'div.d-flex.flex-row.justify-content-between mat-label.xs-text'
    );
    this.dateInput = page.locator('input[formcontrolname="day"]');
    this.datePickerToggleBtn = page.locator('mat-datepicker-toggle button');
    this.startTimeInput = page.locator('input[formcontrolname="startTime"]');
    this.endTimeInput = page.locator('input[formcontrolname="finishTime"]');
    this.allDayCheckbox = page.locator(
      'mat-checkbox[formcontrolname="allDay"] input[type="checkbox"]'
    );

    this.placeCheckbox = page.locator('mat-checkbox', { hasText: 'Place' });
    this.placeInput = page.locator('input[formcontrolname="place"]');
    this.onlineCheckbox = page.locator('mat-checkbox', { hasText: 'Online' });
    this.onlineLinkInput = page.locator('input[formcontrolname="onlineLink"]');
    this.applyToAllDaysCheckbox = page.locator('mat-checkbox.apply-location-checkbox');

    this.previewButton = page.locator('.submit-container button.secondary-global-button', {
      hasText: 'Preview',
    });
    this.saveEventButton = page.locator('.submit-container button.primary-global-button', {
      hasText: 'Save event',
    });
    this.cancelButton = page.locator('.submit-container button.tertiary-global-button', {
      hasText: 'Cancel',
    });

    this.toastNotification = page.locator('mat-snack-bar-container.error-snackbar').last();
    this.attachedImages = page.locator('.input-image-wrapper img[alt="image-of-event"]');
  }

  async waitForEditEventPage(): Promise<void> {
    await this.titleInput.waitFor({ state: 'visible' });
  }

  async getEventTitle(): Promise<string> {
    return await this.titleInput.inputValue();
  }

  async getEventId(): Promise<string> {
    const eventId = this.page.url().match(/create-update-event\/(\d+)$/)?.[1];

    if (!eventId) {
      throw new Error('The current URL does not contain an event ID.');
    }

    return eventId;
  }

  async enterTitle(title: string) {
    await this.titleInput.fill(title);
  }

  async enterDescription(description: string) {
    await this.descriptionEditor.fill(description);
  }

  async selectEventDurationDays(daysText: string) {
    await this.eventDaysSelect.click();
    await this.page.locator('mat-option', { hasText: daysText }).click();
  }

  async selectDuration(durationText: string) {
    await this.durationSelect.click();
    await this.page.locator('mat-option', { hasText: durationText }).click();
  }

  async selectOpenStatus(openOption: string) {
    await this.openSelect.click();
    await this.page.locator('mat-option', { hasText: openOption }).click();
  }

  async selectInviteOption(inviteOption: string) {
    await this.inviteSelect.click();
    await this.page.locator('mat-option', { hasText: inviteOption }).click();
  }

  async toggleEconomicTag() {
    await this.tagEconomic.click();
  }

  async toggleSocialTag() {
    await this.tagSocial.click();
  }

  async toggleEnvironmentalTag() {
    await this.tagEnvironmental.click();
  }

  /**
   * Returns the attached image component at the given index.
   */
  getImage(index: number = 0): EventImageItemComponent {
    return this.pictures.getImage(index);
  }

  /**
   * Returns the main attached image component (marked as "Main").
   */
  getMainImage(): EventImageItemComponent {
    return this.pictures.getMainImage();
  }

  /**
   * Returns the count of currently attached images.
   */
  async getAttachedImagesCount(): Promise<number> {
    return await this.pictures.getImagesCount();
  }

  async uploadImage(filePath: string): Promise<void> {
    await this.pictures.uploadImage(filePath);
  }

  async deleteUploadedImage(index: number = 0): Promise<void> {
    await this.pictures.getImage(index).clickDelete();
  }

  async clickEditImage(index: number = 0): Promise<void> {
    await this.pictures.getImage(index).clickEdit();
  }

  async selectDefaultImageByIndex(index: number): Promise<void> {
    await this.pictures.selectDefaultImage(index);
  }

  async setEventDate(dateString: string) {
    await this.dateInput.fill(dateString);
  }

  async setTimeRange(startTime: string, endTime: string) {
    await this.startTimeInput.fill(startTime);
    await this.endTimeInput.fill(endTime);
  }

  async toggleAllDay(check: boolean) {
    const isChecked = await this.allDayCheckbox.locator('input').isChecked();
    if (isChecked !== check) {
      await this.allDayCheckbox.click();
    }
  }

  async setPlaceLocation(address: string) {
    const isChecked = await this.placeCheckbox.locator('input').isChecked();
    if (!isChecked) {
      await this.placeCheckbox.click();
    }
    await this.placeInput.fill(address);
  }

  async setOnlineLink(link: string) {
    const isChecked = await this.onlineCheckbox.locator('input').isChecked();
    if (!isChecked) {
      await this.onlineCheckbox.click();
    }
    await this.onlineLinkInput.fill(link);
  }

  async toggleApplyToAllDays(check: boolean) {
    const isChecked = await this.applyToAllDaysCheckbox.locator('input').isChecked();
    if (isChecked !== check) {
      await this.applyToAllDaysCheckbox.click();
    }
  }

  async clickPreview() {
    await this.previewButton.click();
  }

  async clickSaveEvent() {
    await this.saveEventButton.click();
  }

  async clickCancel() {
    await this.cancelButton.click();
  }

  /**
   * Get the image counter text (e.g., "2/5")
   */
  async getImageCounter(): Promise<string> {
    return await this.imageCounter.innerText();
  }

  /**
   * Get toast notification message
   */
  async getToastMessage(): Promise<string> {
    await this.toastNotification.waitFor({ state: 'visible' });
    return await this.toastNotification.innerText();
  }

  /**
   * Wait for image upload to complete
   */
  async waitForImageUpload(expectedCount: number): Promise<void> {
    await expect(this.attachedImages).toHaveCount(expectedCount);
    await expect(this.imageCounter).toHaveText(`${expectedCount}/5`);
  }
}
