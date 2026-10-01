import type { Locator, Page } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { CalendarDropdownComponent } from '@/components';

export class CreateEventPage extends BasePage {
  private readonly titleInput: Locator;
  private readonly durationSelect: Locator;
  private readonly economicTag: Locator;
  private readonly socialTag: Locator;
  private readonly environmentalTag: Locator;
  private readonly eventTypeSelect: Locator;
  private readonly inviteSelect: Locator;
  private readonly description: Locator;
  private readonly dayInput: Locator;
  private readonly startTimeInput: Locator;
  private readonly finishTimeInput: Locator;
  private readonly allDayCheckbox: Locator;
  private readonly placeCheckbox: Locator;
  private readonly onlineCheckbox: Locator;
  private readonly placeInput: Locator;
  private readonly onlineLinkInput: Locator;
  private readonly previewButton: Locator;
  private readonly publishButton: Locator;
  private readonly cancelButton: Locator;
  readonly descriptionValidationMessage: Locator;
  private readonly datePicker: CalendarDropdownComponent;
  private readonly datePickerToggle: Locator;

  constructor(page: Page) {
    super(page);

    this.titleInput = page.locator('input[formcontrolname="title"]');
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
    this.descriptionValidationMessage = page.getByText(/Not enough characters\. Left:/i).first();
    this.datePicker = new CalendarDropdownComponent(page.locator('mat-datepicker-content'), page);
    this.datePickerToggle = page.getByRole('button', { name: 'Open calendar' });
  }

  async waitForCreateEventPage(): Promise<void> {
    await this.titleInput.waitFor({ state: 'visible' });
    await this.description.waitFor({ state: 'visible' });
  }

  async fillTitle(title: string): Promise<void> {
    await this.titleInput.fill(title);
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

  private getTimeOption(field: 'Start Time' | 'End Time', time: string): Locator {
    return this.page
      .getByRole('listbox', { name: field })
      .getByRole('option', { name: time, exact: true });
  }

  async selectStartTime(time: string): Promise<void> {
    await this.startTimeInput.click();
    await this.getTimeOption('Start Time', time).click();
  }

  async selectFinishTime(time: string): Promise<void> {
    await this.finishTimeInput.click();
    await this.getTimeOption('End Time', time).click();
  }
}
