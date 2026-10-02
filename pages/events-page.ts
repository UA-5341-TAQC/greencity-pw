import { expect, test, type Page, type Locator } from '@playwright/test';
import BasePage from './base-page';
import {
  ActiveFilterChipComponent,
  EventFilterComponent,
  GridEventCardComponent,
  ListEventCardComponent,
} from '@/components';
import {
  type EventTypeFilter,
  type EventTimeFilter,
  type EventLocationFilter,
  type EventStatusFilter,
  type EventsI18n,
  EVENTS_I18N,
  Language,
} from '@/types';

export class EventsPage extends BasePage {
  public readonly i18n: EventsI18n;
  public readonly filters: EventFilterComponent;

  protected readonly activeFilterChipsRoots: Locator;
  protected readonly itemsFoundElement: Locator;

  protected readonly pageTitle: Locator;
  protected readonly searchButton: Locator;
  protected readonly bookmarkButton: Locator;
  protected readonly createEventButton: Locator;

  protected readonly gridViewButton: Locator;
  protected readonly listViewButton: Locator;
  protected readonly myEventsButton: Locator;

  // Event cards
  protected readonly gridEventCardRoots: Locator;
  protected readonly listEventCardRoots: Locator;

  protected readonly endOfListMessage: Locator;

  constructor(page: Page, lang: Language = Language.En) {
    super(page);
    this.i18n = EVENTS_I18N[lang];

    this.filters = new EventFilterComponent(page.locator('div.filter-container'), page, lang);
    this.activeFilterChipsRoots = page.locator('div.active-filter');
    this.itemsFoundElement = page.locator('div.active-filter-container > p');

    this.pageTitle = page.locator('p.main-header');
    this.searchButton = page.locator('span.search-img');
    this.bookmarkButton = page.locator('span.bookmark-img');
    this.createEventButton = page
      .locator('div.create')
      .getByRole('button', { name: 'Create event' });

    this.gridViewButton = page
      .locator('div.change-view')
      .getByRole('button', { name: 'table view' });
    this.listViewButton = page
      .locator('div.change-view')
      .getByRole('button', { name: 'list view' });
    this.myEventsButton = page.getByAltText('my-event');

    this.gridEventCardRoots = page.locator(
      'div.event-list:not(.list-view) mat-card.event-list-item'
    );
    this.listEventCardRoots = page.locator('div.event-list.list-view mat-card.event-list-item');
    this.endOfListMessage = page.locator('p.end-page-txt');
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
    return await test.step('Get items found text', async () => {
      return (await this.itemsFoundElement.textContent()) ?? '';
    });
  }

  /** Returns the numeric items found count */
  async getItemsFoundCount(): Promise<number> {
    return await test.step('Get items found count', async () => {
      const text = await this.getItemsFoundText();
      const match = text.match(/\d+/);
      return match ? parseInt(match[0], 10) : 0;
    });
  }

  /** Returns the items found element for Playwright assertions */
  get itemsFound(): Locator {
    return this.itemsFoundElement;
  }

  /** Returns the active filter indicator locator (all chips or first chip) */
  get activeFilterIndicator(): Locator {
    return this.activeFilterChipsRoots;
  }

  /** Returns the count of currently displayed active filter chips */
  async getActiveFilterChipsCount(): Promise<number> {
    return await test.step('Get active filter chips count', async () => {
      return await this.activeFilterChipsRoots.count();
    });
  }

  /** Returns an ActiveFilterChipComponent by its index */
  getActiveFilterChipByIndex(index: number): ActiveFilterChipComponent {
    return new ActiveFilterChipComponent(this.activeFilterChipsRoots.nth(index), this.page);
  }

  /** Returns an ActiveFilterChipComponent matching the provided text or pattern */
  getActiveFilterChipByText(text: string | RegExp): ActiveFilterChipComponent {
    const root = this.activeFilterChipsRoots.filter({ hasText: text }).first();
    return new ActiveFilterChipComponent(root, this.page);
  }

  /** Returns the active filter chip for a Type filter enum */
  getActiveFilterChipByType(type: EventTypeFilter): ActiveFilterChipComponent {
    return this.getActiveFilterChipByText(this.i18n.typeOptions[type]);
  }

  /** Returns the active filter chip for a Location filter enum */
  getActiveFilterChipByLocation(location: EventLocationFilter): ActiveFilterChipComponent {
    return this.getActiveFilterChipByText(this.i18n.locationOptions[location]);
  }

  /** Returns the active filter chip for a Status filter enum */
  getActiveFilterChipByStatus(status: EventStatusFilter): ActiveFilterChipComponent {
    return this.getActiveFilterChipByText(this.i18n.statusOptions[status]);
  }

  /** Returns the active filter chip for a Time filter enum */
  getActiveFilterChipByTime(time: EventTimeFilter): ActiveFilterChipComponent {
    return this.getActiveFilterChipByText(this.i18n.timeOptions[time]);
  }

  /** Returns the date range active filter chip */
  getActiveDateRangeChip(): ActiveFilterChipComponent {
    return this.getActiveFilterChipByText(/\d+[./]\d+[./]\d{4}/);
  }

  /** Returns all active filter chips as components */
  async getAllActiveFilterChips(): Promise<ActiveFilterChipComponent[]> {
    const count = await this.getActiveFilterChipsCount();
    const chips: ActiveFilterChipComponent[] = [];
    for (let i = 0; i < count; i++) {
      chips.push(this.getActiveFilterChipByIndex(i));
    }
    return chips;
  }

  /** Returns texts of all active filter chips */
  async getAllActiveFilterTexts(): Promise<string[]> {
    return await test.step('Get all active filter texts', async () => {
      const chips = await this.getAllActiveFilterChips();
      const texts: string[] = [];
      for (const chip of chips) {
        texts.push(await chip.getText());
      }
      return texts;
    });
  }

  /** Switches the event cards view to "grid" */
  async clickGridView(): Promise<void> {
    await test.step('Switch to grid view', async () => {
      await this.gridViewButton.click();
    });
  }

  /** Switches the event cards view to "list" */
  async clickListView(): Promise<void> {
    await test.step('Switch to list view', async () => {
      await this.listViewButton.click();
    });
  }

  /** Returns the number of event cards currently rendered in grid mode */
  async getGridEventCardsCount(): Promise<number> {
    return await this.gridEventCardRoots.count();
  }

  /** Scrolls through the grid until the end-of-list indicator is visible. */
  async scrollUntilAllEventCardsLoad(): Promise<void> {
    while (!(await this.isEndOfEventsListVisible())) {
      const loadedCount = await this.getGridEventCardsCount();

      await this.scrollPage('down');

      await expect.poll(() => this.getGridEventCardsCount()).toBeGreaterThanOrEqual(loadedCount);
    }
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

  /** Returns whether an event with an enabled edit action is available */
  async hasEditableEventCard(): Promise<boolean> {
    const editButtons = this.page.getByRole('button', { name: 'Edit event' });
    const count = await editButtons.count();

    for (let index = 0; index < count; index++) {
      const editButton = editButtons.nth(index);
      if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
        return true;
      }
    }

    return false;
  }

  /** Returns the first event card that offers the author-only edit action */
  async getFirstEditableEventCard(
    createEventIfMissing?: () => Promise<unknown>
  ): Promise<GridEventCardComponent | ListEventCardComponent> {
    if (!(await this.hasEditableEventCard()) && createEventIfMissing) {
      await createEventIfMissing();
    }

    const gridCardCount = await this.gridEventCardRoots.count();
    for (let index = 0; index < gridCardCount; index++) {
      const gridCard = this.gridEventCardRoots.nth(index);
      const editButton = gridCard.getByRole('button', { name: 'Edit event' });

      if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
        return new GridEventCardComponent(gridCard, this.page);
      }
    }

    const listCardCount = await this.listEventCardRoots.count();
    for (let index = 0; index < listCardCount; index++) {
      const listCard = this.listEventCardRoots.nth(index);
      const editButton = listCard.getByRole('button', { name: 'Edit event' });

      if ((await editButton.isVisible()) && (await editButton.isEnabled())) {
        return new ListEventCardComponent(listCard, this.page);
      }
    }

    throw new Error('No event card with an Edit event action was found.');
  }

  /** Returns the event card matching a title in the current view mode */
  async getEventCardByTitle(
    title: string
  ): Promise<GridEventCardComponent | ListEventCardComponent> {
    const gridCard = this.gridEventCardRoots.filter({ hasText: title }).first();

    try {
      await gridCard.waitFor({ state: 'visible' });
      return new GridEventCardComponent(gridCard, this.page);
    } catch {
      const listCard = this.listEventCardRoots.filter({ hasText: title }).first();

      await listCard.waitFor({ state: 'visible' });
      return new ListEventCardComponent(listCard, this.page);
    }
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

  /** Checks whether the "End of events list" message is visible */
  async isEndOfEventsListVisible(): Promise<boolean> {
    return this.endOfListMessage.isVisible();
  }
}
