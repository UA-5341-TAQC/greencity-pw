import type { Locator, Page } from '@playwright/test';
import BasePage from '@/pages/base-page';

export class EventDetailsPage extends BasePage {
  private readonly backButton: Locator;
  private readonly eventTitle: Locator;
  private readonly dateAuthor: Locator;
  private readonly descriptionBlockTitle: Locator;
  private readonly description: Locator;
  private readonly eventInfoBlock: Locator;
  private readonly saveEventButton: Locator;
  private readonly joinEventButton: Locator;

  constructor(page: Page) {
    super(page);

    this.backButton = page.locator('.event-nav .button-content');
    this.eventTitle = page.locator('.event-title');
    this.dateAuthor = page.locator('.date-author');
    this.descriptionBlockTitle = page.locator('.description-block-title');
    this.description = page.locator('.ql-editor');
    this.eventInfoBlock = page.locator('.event-info-block');
    this.saveEventButton = page.locator('.save-join-event-block .secondary-global-button');
    this.joinEventButton = page.locator('.save-join-event-block .primary-global-button');
  }

  async navigateToEventDetails(eventId: string | number): Promise<void> {
    await this.navigateTo(`/#/greenCity/events/${eventId}`);
  }

  async waitForDetailsPage(): Promise<void> {
    await this.waitForPageLoad();
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

  async getEventInfo(): Promise<string> {
    return (await this.eventInfoBlock.innerText()).trim();
  }

  async clickBackToEvents(): Promise<void> {
    await this.backButton.click();
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
