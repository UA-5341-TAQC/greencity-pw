import { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';

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
  readonly fileInput: Locator;
  readonly mainImage: Locator;
  readonly deleteImageBtn: Locator;
  readonly editImageBtn: Locator;
  readonly defaultImages: Locator;
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

    this.fileInput = page.locator('input#file-upload');
    this.mainImage = page.locator('.input-image-wrapper img');
    this.deleteImageBtn = page.locator('.selected-delete');
    this.editImageBtn = page.locator('.selected-edit');
    this.defaultImages = page.locator('.images-def-wrapper .img-container img');

    this.dateInput = page.locator('input[formcontrolname="day"]');
    this.datePickerToggleBtn = page.locator('mat-datepicker-toggle button');
    this.startTimeInput = page.locator('input[formcontrolname="startTime"]');
    this.endTimeInput = page.locator('input[formcontrolname="finishTime"]');
    this.allDayCheckbox = page.locator('mat-checkbox[formcontrolname="allDay"]');

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

  async uploadImage(filePath: string) {
    await this.fileInput.setInputFiles(filePath);
  }

  async deleteUploadedImage() {
    await this.deleteImageBtn.click();
  }

  async clickEditImage() {
    await this.editImageBtn.click();
  }

  async selectDefaultImageByIndex(index: number) {
    await this.defaultImages.nth(index).click();
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
}
