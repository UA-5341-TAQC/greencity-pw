import type { Locator, Page } from '@playwright/test';
import BasePage from '@/pages/base-page';

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
  private readonly previewButton: Locator;
  private readonly publishButton: Locator;
  private readonly cancelButton: Locator;

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
    this.onlineCheckbox = page.locator('mat-checkbox', { hasText: 'Online' });
    const submitContainer = page.locator('.submit-container');
    this.previewButton = submitContainer.getByRole('button', { name: 'Preview' });
    this.publishButton = submitContainer.getByRole('button', { name: 'Publish' });
    this.cancelButton = submitContainer.getByRole('button', { name: 'Cancel' });
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
}
