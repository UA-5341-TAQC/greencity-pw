import type { Page, Locator } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { GridEventCardComponent } from '@/components/grid-event-card-component';
import { ListEventCardComponent } from '@/components/list-event-card-component';

export class EventsPage extends BasePage {
  protected readonly pageTitle: Locator;
  protected readonly filterLabel: Locator;
  protected readonly searchButton: Locator;
  protected readonly bookmarkButton: Locator;
  protected readonly createEventButton: Locator;

  // Filter
  protected readonly eventTimeCombobox: Locator;
  protected readonly locationCombobox: Locator;
  protected readonly statusCombobox: Locator;
  protected readonly typeCombobox: Locator;
  protected readonly dateRangeCombobox: Locator;
  protected readonly filterOptions: Locator;
  protected readonly locationFilterCitiesButton: Locator;

  protected readonly resetAllButton: Locator;
  protected readonly itemsFoundText: Locator;
  protected readonly gridViewButton: Locator;
  protected readonly listViewButton: Locator;
  protected readonly myEventsButton: Locator;

  // Date range calendar
  protected readonly calendarPeriodButton: Locator;
  protected readonly calendarNextMonthButton: Locator;
  protected readonly calendarPreviousMonthButton: Locator;
  protected readonly calendarTable: Locator;
  protected readonly calendarDayButtons: Locator;

  // Event cards
  protected readonly gridEventCardRoots: Locator;
  protected readonly listEventCardRoots: Locator;

  constructor(page: Page) {
    super(page);

    this.pageTitle = page.locator('p.main-header');
    this.filterLabel = page.locator('p.filter-by');
    this.searchButton = page.locator('span.search-img');
    this.bookmarkButton = page.locator('span.bookmark-img');
    this.createEventButton = page
      .locator('div.create')
      .getByRole('button', { name: 'Create event' });
    this.eventTimeCombobox = page
      .locator('div.dropdown')
      .filter({ has: page.locator('mat-label', { hasText: 'Event time' }) })
      .getByRole('combobox');
    this.locationCombobox = page
      .locator('div.dropdown')
      .filter({ has: page.locator('mat-label', { hasText: 'Location' }) })
      .getByRole('combobox');
    this.statusCombobox = page
      .locator('div.dropdown')
      .filter({ has: page.locator('mat-label', { hasText: 'Status' }) })
      .getByRole('combobox');
    this.typeCombobox = page
      .locator('div.dropdown')
      .filter({ has: page.locator('mat-label', { hasText: 'Type' }) })
      .getByRole('combobox');
    this.dateRangeCombobox = page
      .locator('div.dropdown')
      .filter({ has: page.locator('mat-label', { hasText: 'Date range' }) })
      .getByRole('combobox');
    this.filterOptions = page.getByRole('listbox').getByRole('option');
    this.locationFilterCitiesButton = page.locator('div.add-location-option');
    this.resetAllButton = page
      .locator('div.filter-container')
      .getByRole('button', { name: 'Reset all' });
    this.itemsFoundText = page.locator('div.active-filter-container > p');
    this.gridViewButton = page
      .locator('div.change-view')
      .getByRole('button', { name: 'table view' });
    this.listViewButton = page
      .locator('div.change-view')
      .getByRole('button', { name: 'list view' });
    this.myEventsButton = page.getByAltText('my-event');
    this.calendarPeriodButton = page.getByRole('button', { name: 'Choose month and year' });
    this.calendarNextMonthButton = page.getByRole('button', {
      name: 'Next month',
    });
    this.calendarPreviousMonthButton = page.getByRole('button', {
      name: 'Previous month',
    });
    this.calendarTable = page.locator('table.mat-calendar-table');
    this.calendarDayButtons = this.calendarTable.locator('button.mat-calendar-body-cell');
    this.gridEventCardRoots = page.locator(
      'div.event-list:not(.list-view) mat-card.event-list-item'
    );
    this.listEventCardRoots = page.locator('div.event-list.list-view mat-card.event-list-item');
  }
  /** Navigates to the Events page directly by URL */
  async navigateToEventsPage(): Promise<void> {
    await this.navigateTo('/#/greenCity/events');
  }

  /** Waits for the page to fully load */
  async waitForEventsPage(): Promise<void> {
    await this.waitForPageLoad();
  }

  /** Returns the browser tab title */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /** Checks whether the "Events" page title is visible */
  async isPageTitleVisible(): Promise<boolean> {
    return await this.pageTitle.isVisible();
  }

  /** Clicks the search icon */
  async clickSearchButton(): Promise<void> {
    await this.searchButton.click();
  }

  /** Clicks the bookmarks icon */
  async clickBookmarkButton(): Promise<void> {
    await this.bookmarkButton.click();
  }

  /** Clicks the "My events" (calendar) icon */
  async clickMyEventsButton(): Promise<void> {
    await this.myEventsButton.click();
  }

  /** Clicks the "Create event" button */
  async clickCreateEvent(): Promise<void> {
    await this.createEventButton.click();
  }

  /** Returns the results counter text */
  async getItemsFoundText(): Promise<string> {
    return (await this.itemsFoundText.textContent()) ?? '';
  }

  /** Switches the event cards view to "grid" */
  async clickGridView(): Promise<void> {
    await this.gridViewButton.click();
  }

  /** Switches the event cards view to "list" */
  async clickListView(): Promise<void> {
    await this.listViewButton.click();
  }

  /** Checks whether the "Filter" label next to the filters block is visible */
  async isFilterLabelVisible(): Promise<boolean> {
    return await this.filterLabel.isVisible();
  }

  /**  Opens the "Event time" filter dropdown */
  async openEventTimeFilter(): Promise<void> {
    await this.eventTimeCombobox.click();
  }

  /** Opens the "Location" filter dropdown */
  async openLocationFilter(): Promise<void> {
    await this.locationCombobox.click();
  }

  /** Opens the "Status" filter dropdown */
  async openStatusFilter(): Promise<void> {
    await this.statusCombobox.click();
  }

  /** Opens the "Type" filter dropdown */
  async openTypeFilter(): Promise<void> {
    await this.typeCombobox.click();
  }

  /** Opens the "Date range" filter */
  async openDateRangeFilter(): Promise<void> {
    await this.dateRangeCombobox.click();
  }

  /** Checks whether the "Reset all" button is enabled */
  async isResetAllEnabled(): Promise<boolean> {
    return await this.resetAllButton.isEnabled();
  }

  /** Clicks "Reset all" button */
  async clickResetAll(): Promise<void> {
    await this.resetAllButton.click();
  }

  /** Selects an option from the currently open filter dropdown by its text */
  async selectFilterOption(optionText: string): Promise<void> {
    await this.filterOptions.filter({ hasText: optionText }).click();
  }

  /** Clicks "Filter cities" button (Location filter) */
  async clickFilterCities(): Promise<void> {
    await this.locationFilterCitiesButton.click();
  }

  /** Returns the calendar's current period label */
  async getCalendarPeriodLabel(): Promise<string> {
    return (await this.calendarPeriodButton.innerText()).trim();
  }

  /** Opens the quick month/year picker in the calendar */
  async openCalendarMonthYearPicker(): Promise<void> {
    await this.calendarPeriodButton.click();
  }

  /** Moves the calendar to the next month */
  async goToNextMonth(): Promise<void> {
    await this.calendarNextMonthButton.click();
  }

  /** Moves the calendar to the previous month */
  async goToPreviousMonth(): Promise<void> {
    await this.calendarPreviousMonthButton.click();
  }

  /** Returns the locator for a specific day cell in the calendar */
  getCalendarDayCell(day: number): Locator {
    return this.calendarDayButtons.filter({ hasText: new RegExp(`^${day}$`) });
  }

  /** Clicks a specific day in the calendar (within the currently displayed month) */
  async selectCalendarDay(day: number): Promise<void> {
    await this.getCalendarDayCell(day).click();
  }

  /** Checks whether the calendar is open and visible */
  async isCalendarVisible(): Promise<boolean> {
    return await this.calendarTable.isVisible();
  }

  /** Returns the number of event cards currently rendered in grid mode */
  async getGridEventCardsCount(): Promise<number> {
    return await this.gridEventCardRoots.count();
  }

  /** Returns the number of event cards currently rendered in list mode */
  async getListEventCardsCount(): Promise<number> {
    return await this.listEventCardRoots.count();
  }

  /** Returns a GridEventCardComponent for the card at the given position */
  getGridEventCardByIndex(index: number): GridEventCardComponent {
    return new GridEventCardComponent(this.gridEventCardRoots.nth(index), this.page);
  }
  /** Returns a ListEventCardComponent for the card at the given position */
  getListEventCardByIndex(index: number): ListEventCardComponent {
    return new ListEventCardComponent(this.listEventCardRoots.nth(index), this.page);
  }

  /** Returns a GridEventCard component for the first card whose title matches the given text */
  getGridEventCardByTitle(title: string): GridEventCardComponent {
    const root = this.gridEventCardRoots.filter({ hasText: title }).first();

    return new GridEventCardComponent(root, this.page);
  }

  /** Returns a ListEventCard component for the first card whose title matches the given text */
  getListEventCardByTitle(title: string): ListEventCardComponent {
    const root = this.listEventCardRoots.filter({ hasText: title }).first();

    return new ListEventCardComponent(root, this.page);
  }

  /** Returns GridEventCard components for every card on the page */
  async getAllGridEventCards(): Promise<GridEventCardComponent[]> {
    const count = await this.getGridEventCardsCount();
    const cards: GridEventCardComponent[] = [];
    for (let i = 0; i < count; i++) {
      cards.push(this.getGridEventCardByIndex(i));
    }
    return cards;
  }

  /** Returns ListEventCard components for every card on the page */
  async getAllListEventCards(): Promise<ListEventCardComponent[]> {
    const count = await this.getListEventCardsCount();
    const cards: ListEventCardComponent[] = [];
    for (let i = 0; i < count; i++) {
      cards.push(this.getListEventCardByIndex(i));
    }
    return cards;
  }
}
