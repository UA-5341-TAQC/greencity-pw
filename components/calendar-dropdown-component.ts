import type { Page, Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

export abstract class CalendarDropdownComponent extends BaseComponent {
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
   * Get the locator for the date cell using the `aria-label` (e.g., "September 26, 2026")
   * or using the exact day number (e.g., "26").
   */
  private getDayCellLocator(targetDate: string): Locator {
    const isFullDate = targetDate.includes(',');

    return isFullDate
      ? this.root.locator(`button.mat-calendar-body-cell[aria-label="${targetDate}"]`)
      : this.root.locator(`button.mat-calendar-body-cell`, {
          hasText: new RegExp(`^\\s*${targetDate}\\s*$`),
        });
  }

  /**
   * Get the currently selected period (e.g., "SEP 2026").
   */
  async getCurrentPeriod(): Promise<string> {
    return (await this.periodButton.textContent())?.trim() ?? '';
  }

  /**
   * Click on the next month.
   */
  async clickNextMonth(): Promise<void> {
    await this.nextMonthButton.click();
  }

  /**
   * Click on the previous month
   */
  async clickPreviousMonth(): Promise<void> {
    await this.previousMonthButton.click();
  }

  /**
   * Select a specific day by its exact `aria-label` or day number.
   * @param targetDate A string in the format "Month Day, Year" (e.g., "September 24, 2026") or simply the day number (e.g., "24").
   */
  async selectDate(targetDate: string): Promise<void> {
    const dayCell = this.getDayCellLocator(targetDate);
    await dayCell.click();
  }

  /**
   * Check if the selected date is highlighted (has the class mat-calendar-body-selected)
   * @param targetDate Format "September 26, 2026" or simply "26"
   */
  async isDateSelected(targetDate: string): Promise<boolean> {
    const dayCell = this.getDayCellLocator(targetDate);
    const selectedContent = dayCell.locator('.mat-calendar-body-selected');

    return await selectedContent.isVisible();
  }

  /**
   * Check if a specific date is active (clickable).
   */
  async isDateEnabled(targetDate: string): Promise<boolean> {
    const dayCell = this.getDayCellLocator(targetDate);
    return await dayCell.isEnabled();
  }
}
