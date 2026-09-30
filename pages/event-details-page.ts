import type { Locator, Page } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class EventDetailsPage extends BasePage {
  protected readonly backButton: Locator;
  private readonly editEventButton: Locator;
  private readonly deleteEventButton: Locator;
  protected readonly eventTitle: Locator;
  protected readonly dateAuthor: Locator;
  protected readonly descriptionBlockTitle: Locator;
  protected readonly description: Locator;
  private readonly eventTag: Locator;
  protected readonly eventInfoBlock: Locator;
  protected readonly editButton: Locator;
  protected readonly saveEventButton: Locator;
  protected readonly joinEventButton: Locator;

  constructor(page: Page) {
    super(page);

    this.backButton = page.locator('.event-nav .button-content');
    this.editEventButton = page.locator('.edit-buttons .secondary-global-button');
    this.deleteEventButton = page.locator('.edit-buttons .tertiary-global-button');
    this.eventTitle = page.locator('.event-title');
    this.dateAuthor = page.locator('.date-author');
    this.descriptionBlockTitle = page.locator('.description-block-title');
    this.description = page.locator('.ql-editor');
    this.eventTag = page.locator('.event-tag');
    this.eventInfoBlock = page.locator('.event-info-block');
    this.editButton = page.getByRole('button', { name: 'Edit' });
    this.saveEventButton = page.locator('.save-join-event-block .secondary-global-button');
    this.joinEventButton = page.locator('.save-join-event-block .primary-global-button');
  }

  async navigateToEventDetails(eventId: string | number): Promise<void> {
    await this.navigateTo(`/#/greenCity/events/${eventId}`);
  }

  async waitForDetailsPage(): Promise<void> {
    await this.eventTitle.waitFor({ state: 'visible' });
  }

  async getEventTitle(): Promise<string> {
    return (await this.eventTitle.innerText()).trim();
  }

  async getDateAuthor(): Promise<string> {
    return (await this.dateAuthor.innerText()).trim();
  }

  async getDescriptionBlockTitle(): Promise<string> {
    return (await this.descriptionBlockTitle.innerText()).trim();
  }

  async getDescription(): Promise<string> {
    return (await this.description.innerText()).trim();
  }

  async getEventTag(): Promise<string> {
    return (await this.eventTag.innerText()).trim();
  }

  async getEventInfo(): Promise<string> {
    return (await this.eventInfoBlock.innerText()).trim();
  }

  async clickBackToEvents(): Promise<void> {
    await this.backButton.click();
  }

  async clickEdit(): Promise<void> {
    await this.editButton.click();
  }

  async isEditButtonEnabled(): Promise<boolean> {
    return await this.editButton.isEnabled();
  }

  async isEditEventButtonVisible(): Promise<boolean> {
    return await this.editEventButton.isVisible();
  }

  async isDeleteEventButtonVisible(): Promise<boolean> {
    return await this.deleteEventButton.isVisible();
  }

  async clickSaveEvent(): Promise<void> {
    await this.saveEventButton.click();
  }

  async clickJoinEvent(): Promise<void> {
    await this.joinEventButton.click();
  }

  async isSaveEventButtonVisible(): Promise<boolean> {
    return await this.saveEventButton.isVisible();
  }

  async isJoinEventButtonVisible(): Promise<boolean> {
    return await this.joinEventButton.isVisible();
  }
}
