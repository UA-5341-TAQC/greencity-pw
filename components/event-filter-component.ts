import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { CalendarDropdownComponent } from '@/components/calendar-dropdown-component';
import {
  type EventTypeFilter,
  type EventTimeFilter,
  type EventLocationFilter,
  type EventStatusFilter,
  type EventsI18n,
  EVENTS_I18N,
  Language,
} from '@/types';

/**
 * Component representing the filters block on the Events page.
 * Manages Event Time, Location, Status, Type, Date range filters, and the Reset button.
 */
export class EventFilterComponent extends BaseComponent {
  public readonly i18n: EventsI18n;
  public readonly calendarDropdown: CalendarDropdownComponent;

  protected readonly filterLabel: Locator;
  protected readonly timeDropdown: Locator;
  protected readonly locationDropdown: Locator;
  protected readonly statusDropdown: Locator;
  protected readonly typeDropdown: Locator;
  protected readonly dateRangeDropdown: Locator;
  protected readonly resetButton: Locator;
  protected readonly filterOptions: Locator;

  constructor(root: Locator, page?: Page, lang: Language = Language.En) {
    super(root, page);
    this.i18n = EVENTS_I18N[lang];

    this.calendarDropdown = new CalendarDropdownComponent(
      this.page.locator('.cdk-overlay-container'),
      this.page
    );

    this.filterLabel = this.root.locator('p.filter-by');

    const getDropdownByLabel = (label: string) =>
      this.root.locator('div.dropdown').filter({
        has: this.page.locator('mat-label', { hasText: label }),
      });

    this.timeDropdown = getDropdownByLabel(this.i18n.filters.eventTime);
    this.locationDropdown = getDropdownByLabel(this.i18n.filters.location);
    this.statusDropdown = getDropdownByLabel(this.i18n.filters.status);
    this.typeDropdown = getDropdownByLabel(this.i18n.filters.type);
    this.dateRangeDropdown = this.root.locator('div.dropdown:has(mat-date-range-input)');

    this.resetButton = this.root.locator('button.reset');
    this.filterOptions = this.page.locator(
      '.mat-mdc-select-panel:visible mat-option, mat-option:visible'
    );
  }

  /** Checks whether the filter label ("Filter by") is visible */
  async isFilterLabelVisible(): Promise<boolean> {
    return await test.step('Check if filter label is visible', async () => {
      return await this.filterLabel.isVisible();
    });
  }

  /** Opens the "Event time" filter dropdown */
  async openTimeFilter(): Promise<void> {
    await test.step('Open event time filter', async () => {
      await this.timeDropdown.click();
    });
  }

  /** Opens the "Location" filter dropdown */
  async openLocationFilter(): Promise<void> {
    await test.step('Open location filter', async () => {
      await this.locationDropdown.click();
    });
  }

  /** Opens the "Status" filter dropdown */
  async openStatusFilter(): Promise<void> {
    await test.step('Open status filter', async () => {
      await this.statusDropdown.click();
    });
  }

  /** Opens the "Type" filter dropdown */
  async openTypeFilter(): Promise<void> {
    await test.step('Open type filter', async () => {
      await this.typeDropdown.click();
    });
  }

  /** Opens the "Date range" filter */
  async openDateRangeFilter(): Promise<void> {
    await test.step('Open date range filter', async () => {
      await this.dateRangeDropdown.click();
    });
  }

  /** Selects an option from the currently open dropdown by text or pattern */
  async selectOption(optionText: string | RegExp): Promise<void> {
    await test.step(`Select filter option "${optionText}"`, async () => {
      await this.filterOptions.filter({ hasText: optionText }).first().click();
    });
  }

  /** Selects multiple options in the currently open dropdown and closes the panel */
  async selectOptions(...options: (string | RegExp)[]): Promise<void> {
    await test.step(`Select filter options: ${options.join(', ')}`, async () => {
      for (const opt of options) {
        await this.selectOption(opt);
      }
      await this.closeDropdown();
    });
  }

  /** Closes the currently open mat-select dropdown panel */
  async closeDropdown(): Promise<void> {
    await test.step('Close dropdown panel', async () => {
      await this.page.keyboard.press('Escape');
    });
  }

  /** Selects one or multiple Type filter options by enum value */
  async selectTypeFilter(...types: EventTypeFilter[]): Promise<void> {
    await test.step(`Select type filter(s): ${types.join(', ')}`, async () => {
      await this.openTypeFilter();
      const names = types.map((t) => this.i18n.typeOptions[t]);
      await this.selectOptions(...names);
    });
  }

  /** Selects one or multiple Event Time filter options by enum value */
  async selectTimeFilter(...times: EventTimeFilter[]): Promise<void> {
    await test.step(`Select time filter(s): ${times.join(', ')}`, async () => {
      await this.openTimeFilter();
      const names = times.map((t) => this.i18n.timeOptions[t]);
      await this.selectOptions(...names);
    });
  }

  /** Selects one or multiple Location filter options by enum value */
  async selectLocationFilter(...locations: EventLocationFilter[]): Promise<void> {
    await test.step(`Select location filter(s): ${locations.join(', ')}`, async () => {
      await this.openLocationFilter();
      const names = locations.map((loc) => this.i18n.locationOptions[loc]);
      await this.selectOptions(...names);
    });
  }

  /** Selects one or multiple Event Status filter options by enum value */
  async selectStatusFilter(...statuses: EventStatusFilter[]): Promise<void> {
    await test.step(`Select status filter(s): ${statuses.join(', ')}`, async () => {
      await this.openStatusFilter();
      const names = statuses.map((s) => this.i18n.statusOptions[s]);
      await this.selectOptions(...names);
    });
  }

  /** Selects a start and end date in the date range calendar */
  async selectDateRange(startDate: number | string, endDate: number | string): Promise<void> {
    await test.step(`Select date range: ${startDate} - ${endDate}`, async () => {
      await this.openDateRangeFilter();
      await this.calendarDropdown.selectDateRange(startDate, endDate);
    });
  }

  /** Clicks the "Reset all" button */
  async resetAll(): Promise<void> {
    await test.step('Click reset all filters button', async () => {
      await this.resetButton.click();
    });
  }

  /** Checks whether the "Reset all" button is enabled */
  async isResetButtonEnabled(): Promise<boolean> {
    return await test.step('Check if reset button is enabled', async () => {
      return await this.resetButton.isEnabled();
    });
  }

  /** Checks whether the filter label ("Filter by") is visible */
  async isTypeDropdownVisible(): Promise<boolean> {
    return await test.step('Check if type dropwdown is visible', async () => {
      return await this.typeDropdown.isVisible();
    });
  }

  /** Return boolean wheter specific option/-s by enum value is selected */
  async isSpecificOptionsSelected(...types: EventTypeFilter[]): Promise<boolean> {
    return await test.step(`Check type filter(s): ${types.join(', ')}`, async () => {
      const names = types.map((t) => this.i18n.typeOptions[t]);

      for (const name of names) {
        const option = this.page.locator('mat-option', { hasText: name });
        const isSelected = (await option.getAttribute('aria-selected')) === 'true';

        if (!isSelected) {
          return false;
        }
      }
      return true;
    });
  }
}
