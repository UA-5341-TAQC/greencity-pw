import { test, type Page, type Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export class CalendarDropdownComponent extends BaseComponent {
  protected readonly calendarRoot: Locator;
  protected readonly periodButton: Locator;
  protected readonly previousMonthButton: Locator;
  protected readonly nextMonthButton: Locator;
  protected readonly calendarBody: Locator;

  constructor(root: Locator, page?: Page) {
    super(root, page);
    this.calendarRoot = this.root.locator('mat-calendar');
    this.periodButton = this.calendarRoot.locator('.mat-calendar-period-button');
    this.previousMonthButton = this.calendarRoot.locator('.mat-calendar-previous-button');
    this.nextMonthButton = this.calendarRoot.locator('.mat-calendar-next-button');
    this.calendarBody = this.calendarRoot.locator('.mat-calendar-body');
  }

  /**
   * Returns the mat-calendar locator for visibility assertions.
   */
  get calendar(): Locator {
    return this.calendarRoot;
  }

  /**
   * Get the locator for the date cell using the `aria-label` (e.g., "September 26, 2026")
   * or using the exact day number (e.g., "26" or 26).
   */
  getDayCell(targetDate: string | number): Locator {
    const targetStr = String(targetDate);
    const isFullDate = targetStr.includes(',');

    return isFullDate
      ? this.calendarRoot.locator(`button.mat-calendar-body-cell[aria-label="${targetStr}"]`)
      : this.calendarRoot.locator(`button.mat-calendar-body-cell`, {
          hasText: new RegExp(`^\\s*${targetStr}\\s*$`),
        });
  }

  /**
   * Checks whether the calendar is visible.
   */
  async isCalendarVisible(): Promise<boolean> {
    return await test.step('Check if calendar is visible', async () => {
      return await this.calendarRoot.isVisible();
    });
  }

  /**
   * Get the currently selected period (e.g., "SEP 2026").
   */
  async getCurrentPeriod(): Promise<string> {
    return await test.step('Get calendar period label', async () => {
      return (await this.periodButton.textContent())?.trim() ?? '';
    });
  }

  /**
   * Opens the month/year selection view by clicking the period button.
   */
  async openMonthYearPicker(): Promise<void> {
    await test.step('Open month/year picker in calendar', async () => {
      await this.periodButton.click();
    });
  }

  /**
   * Click on the next month.
   */
  async clickNextMonth(): Promise<void> {
    await test.step('Click next month in calendar', async () => {
      await this.nextMonthButton.click();
    });
  }

  /**
   * Click on the previous month.
   */
  async clickPreviousMonth(): Promise<void> {
    await test.step('Click previous month in calendar', async () => {
      await this.previousMonthButton.click();
    });
  }

  /**
   * Select a specific day by its exact `aria-label` or day number.
   * @param targetDate A string in the format "Month Day, Year" (e.g., "September 24, 2026") or day number (e.g., "24" or 24).
   */
  async selectDate(targetDate: string | number): Promise<void> {
    await test.step(`Select date "${targetDate}" in calendar`, async () => {
      const dayCell = this.getDayCell(targetDate);
      await dayCell.click();
    });
  }

  /**
   * Check if the selected date is highlighted (has the class mat-calendar-body-selected)
   * @param targetDate Format "September 26, 2026" or day number "26" / 26
   */
  async isDateSelected(targetDate: string | number): Promise<boolean> {
    return await test.step(`Check if date "${targetDate}" is selected`, async () => {
      const dayCell = this.getDayCell(targetDate);
      const selectedContent = dayCell.locator('.mat-calendar-body-selected');

      return await selectedContent.isVisible();
    });
  }

  /**
   * Check if a specific date is active (clickable).
   */
  async isDateEnabled(targetDate: string | number): Promise<boolean> {
    return await test.step(`Check if date "${targetDate}" is enabled`, async () => {
      const dayCell = this.getDayCell(targetDate);
      return await dayCell.isEnabled();
    });
  }
}
