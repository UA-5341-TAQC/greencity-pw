import type { Locator, Page } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { CalendarDropdownComponent } from '@/components';
import { EventImageUploadComponent } from '@/components';

export class CreateEventPage extends BasePage {
  readonly titleCounter: Locator;
  readonly titleValidationError: Locator;
  readonly titleInput: Locator;
  readonly titleField: Locator;
  readonly durationSelect: Locator;
  readonly economicTag: Locator;
  readonly socialTag: Locator;
  readonly environmentalTag: Locator;
  readonly eventTypeSelect: Locator;
  readonly inviteSelect: Locator;
  readonly description: Locator;
  readonly dayInput: Locator;
  readonly startTimeInput: Locator;
  readonly finishTimeInput: Locator;
  readonly allDayCheckbox: Locator;
  readonly placeCheckbox: Locator;
  readonly onlineCheckbox: Locator;
  readonly placeInput: Locator;
  readonly onlineLinkInput: Locator;
  readonly previewButton: Locator;
  readonly publishButton: Locator;
  readonly cancelButton: Locator;
  readonly descriptionReminder: Locator;
  readonly pictureSection: Locator;
  readonly pictureUploadHint: Locator;
  readonly initiativeTypeLabels: Locator;
  readonly descriptionValidationMessage: Locator;
  private readonly datePicker: CalendarDropdownComponent;
  private readonly datePickerToggle: Locator;
  public readonly startTimeError: Locator;
  public readonly finishTimeError: Locator;
  public readonly pictures: EventImageUploadComponent;

  constructor(page: Page) {
    super(page);

    this.titleInput = page.locator('input[formcontrolname="title"]');
    this.titleCounter = page.getByText(/^\s*\d+\s*\/\s*70\s*$/);
    this.titleValidationError = page.getByText('Enter a title up to and including 70 characters', {
      exact: true,
    });
    this.titleField = page.locator('mat-form-field').filter({ has: this.titleInput }).first();
    this.durationSelect = page.locator('.duration-wrapper mat-select[formcontrolname="duration"]');
    this.economicTag = page.getByRole('option', { name: 'Economic' });
    this.socialTag = page.getByRole('option', { name: 'Social' });
    this.environmentalTag = page.getByRole('option', { name: 'Environmental' });
    this.eventTypeSelect = page.locator('.event-type-wrapper mat-select[formcontrolname="open"]');
    this.inviteSelect = page
      .locator('.event-type-wrapper mat-form-field:has(mat-label)')
      .locator('mat-select');
    this.description = page.locator('.ql-editor');
    this.dayInput = page.locator('input[formcontrolname="day"]');
    this.startTimeInput = page.locator('input[formcontrolname="startTime"]');
    this.finishTimeInput = page.locator('input[formcontrolname="finishTime"]');
    this.allDayCheckbox = page.locator('mat-checkbox[formcontrolname="allDay"]');
    this.placeCheckbox = page.locator('mat-checkbox', { hasText: 'Place' });
    this.onlineCheckbox = page
      .locator('mat-checkbox', { hasText: 'Online' })
      .locator('input[type="checkbox"]');
    this.placeInput = page.locator('input[formcontrolname="place"]');
    this.onlineLinkInput = page.locator('input[formcontrolname="onlineLink"]');
    const submitContainer = page.locator('.submit-container');
    this.previewButton = submitContainer.getByRole('button', { name: 'Preview' });
    this.publishButton = submitContainer.getByRole('button', { name: 'Publish' });
    this.cancelButton = submitContainer.getByRole('button', { name: 'Cancel' });
    this.descriptionReminder = page.getByText('Must be minimum 10 and maximum 63 206 symbols', {
      exact: true,
    });
    this.pictureSection = page.getByText('Picture', { exact: true });
    this.pictureUploadHint = page.getByText(
      'Upload only PNG or JPG. File size must be less than 10MB',
      { exact: true }
    );
    this.initiativeTypeLabels = page.locator('mat-chip:visible, mat-chip-option:visible');
    this.descriptionValidationMessage = page.getByText(/Not enough characters\. Left:/i).first();
    this.datePicker = new CalendarDropdownComponent(page.locator('mat-datepicker-content'), page);
    this.datePickerToggle = page.getByRole('button', { name: 'Open calendar' });
    this.startTimeError = page
      .locator('mat-form-field', { has: this.startTimeInput })
      .locator('mat-error');
    this.finishTimeError = page
      .locator('mat-form-field', { has: this.finishTimeInput })
      .locator('mat-error');
    this.pictures = new EventImageUploadComponent(page.locator('app-images-container'), page);
  }

  async waitForCreateEventPage(): Promise<void> {
    await this.titleInput.waitFor({ state: 'visible' });
    await this.description.waitFor({ state: 'visible' });
  }

  async focusTitle(): Promise<void> {
    await this.page
      .locator('mat-form-field')
      .filter({ has: this.titleInput })
      .locator('mat-label')
      .click();
  }

  async focusDescription(): Promise<void> {
    await this.description.click();
  }

  async isTitleFocused(): Promise<boolean> {
    return this.titleInput.evaluate((element) => element === document.activeElement);
  }

  async isDescriptionFocused(): Promise<boolean> {
    return this.description.evaluate((element) => element === document.activeElement);
  }

  async fillTitle(title: string): Promise<void> {
    await this.titleInput.fill(title);
  }

  async getTitle(): Promise<string> {
    return this.titleInput.inputValue();
  }

  async getTitleCounter(): Promise<string> {
    const text = await this.titleCounter.innerText();
    return text.replace(/\s*\/\s*/, ' / ').trim();
  }

  async isTitleValidationErrorVisible(): Promise<boolean> {
    return this.titleValidationError.isVisible();
  }

  async isTitleInvalid(): Promise<boolean> {
    const classes = (await this.titleInput.getAttribute('class'))?.split(/\s+/) ?? [];
    return classes.includes('ng-invalid');
  }

  async selectDuration(duration: string): Promise<void> {
    await this.durationSelect.click();
    await this.page.getByRole('option', { name: duration }).click();
  }

  async selectOneDay(): Promise<void> {
    await this.selectDuration('1 day');
  }

  async selectTwoDays(): Promise<void> {
    await this.selectDuration('2 days');
  }

  async selectThreeDays(): Promise<void> {
    await this.selectDuration('3 days');
  }

  async selectFourDays(): Promise<void> {
    await this.selectDuration('4 days');
  }

  async selectFiveDays(): Promise<void> {
    await this.selectDuration('5 days');
  }

  async selectSixDays(): Promise<void> {
    await this.selectDuration('6 days');
  }

  async selectSevenDays(): Promise<void> {
    await this.selectDuration('7 days');
  }

  async clickEconomicTag(): Promise<void> {
    await this.economicTag.click();
  }

  async clickSocialTag(): Promise<void> {
    await this.socialTag.click();
  }

  async clickEnvironmentalTag(): Promise<void> {
    await this.environmentalTag.click();
  }

  async selectEventType(eventType: 'Open' | 'Closed'): Promise<void> {
    await this.eventTypeSelect.click();
    await this.page.getByRole('option', { name: eventType }).click();
  }

  async selectInviteType(inviteType: 'All' | 'Friends'): Promise<void> {
    await this.inviteSelect.click();
    await this.page.getByRole('option', { name: inviteType }).click();
  }

  async fillDescription(description: string): Promise<void> {
    await this.description.fill(description);
  }

  async getDescription(): Promise<string> {
    return (await this.description.innerText()).trim();
  }

  async fillDay(date: string): Promise<void> {
    await this.dayInput.fill(date);
  }

  async fillStartTime(time: string): Promise<void> {
    await this.startTimeInput.fill(time);
  }

  async fillFinishTime(time: string): Promise<void> {
    await this.finishTimeInput.fill(time);
  }

  async toggleAllDay(check: boolean = true): Promise<void> {
    await this.allDayCheckbox.setChecked(check);
  }

  async togglePlace(check: boolean = true): Promise<void> {
    await this.placeCheckbox.setChecked(check);
  }

  async toggleOnline(check: boolean = true): Promise<void> {
    await this.onlineCheckbox.setChecked(check);
  }

  async fillPlace(location: string): Promise<void> {
    await this.placeInput.fill(location);
  }

  async fillOnlineLink(link: string): Promise<void> {
    await this.onlineLinkInput.fill(link);
  }

  async clickPreview(): Promise<void> {
    await this.previewButton.click();
  }

  async clickPublish(): Promise<void> {
    await this.publishButton.click();
  }

  async clickCancel(): Promise<void> {
    await this.cancelButton.click();
  }

  async isPublishEnabled(): Promise<boolean> {
    return await this.publishButton.isEnabled();
  }

  async isPreviewEnabled(): Promise<boolean> {
    return await this.previewButton.isEnabled();
  }

  async getTitleValue(): Promise<string> {
    return await this.titleInput.inputValue();
  }

  async getDurationText(): Promise<string> {
    return (await this.durationSelect.innerText()).trim();
  }

  async getDayValue(): Promise<string> {
    return await this.dayInput.inputValue();
  }

  async selectDate(date: Date): Promise<void> {
    await this.datePickerToggle.click();
    await this.datePicker.waitForVisible();

    if (date.getMonth() !== new Date().getMonth()) {
      await this.datePicker.clickNextMonth();
    }

    const label = date.toLocaleDateString('en-US', {
      month: 'long',
      day: 'numeric',
      year: 'numeric',
    });
    await this.datePicker.selectDate(label);
  }

  async getStartTimeValue(): Promise<string> {
    return await this.startTimeInput.inputValue();
  }

  async getFinishTimeValue(): Promise<string> {
    return await this.finishTimeInput.inputValue();
  }

  async isOnlineChecked(): Promise<boolean> {
    return await this.onlineCheckbox.isChecked();
  }

  async isOnlineLinkInputVisible(): Promise<boolean> {
    return await this.onlineLinkInput.isVisible();
  }

  async getOnlineLinkValue(): Promise<string> {
    return await this.onlineLinkInput.inputValue();
  }

  async isEconomicTagSelected(): Promise<boolean> {
    return (await this.economicTag.getAttribute('aria-selected')) === 'true';
  }

  async getEventTypeText(): Promise<string> {
    return (await this.eventTypeSelect.innerText()).trim();
  }

  async getInviteTypeText(): Promise<string> {
    return (await this.inviteSelect.innerText()).trim();
  }

  async isPreviewVisible(): Promise<boolean> {
    return await this.previewButton.isVisible();
  }

  async isPublishVisible(): Promise<boolean> {
    return await this.publishButton.isVisible();
  }

  getTimeListbox(field: 'Start Time' | 'End Time'): Locator {
    return this.page.getByRole('listbox', { name: field });
  }

  private getTimeOption(field: 'Start Time' | 'End Time', time: string): Locator {
    return this.getTimeListbox(field).getByRole('option', { name: time, exact: true });
  }

  async selectStartTime(time: string): Promise<void> {
    await this.startTimeInput.click();
    await this.getTimeOption('Start Time', time).click();
  }

  async selectFinishTime(time: string): Promise<void> {
    await this.finishTimeInput.click();
    await this.getTimeOption('End Time', time).click();
  }

  async clickStartTime(): Promise<void> {
    await this.startTimeInput.click();
  }

  async clickFinishTime(): Promise<void> {
    await this.finishTimeInput.click();
  }

  async blurStartTime(): Promise<void> {
    await this.startTimeInput.press('Escape');
    await this.startTimeInput.blur();
  }

  async blurFinishTime(): Promise<void> {
    await this.finishTimeInput.press('Escape');
    await this.finishTimeInput.blur();
  }
}
