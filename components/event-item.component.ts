import { Locator, Page, test } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';

/**
 * COM for a single event card on the profile dashboard events tab.
 * The events body is identified by its create-event control / #my-events marker.
 *
 * UNVERIFIED against live data: this account has an empty events list
 * (`app-one-event` and `ul.news-list li` both count 0), so the per-card locators
 * below are best-effort mirrors of the news card shell, minus the `img` / bare
 * `h3` catch-alls that could match unrelated nodes.
 */
export class EventItemComponent extends BaseComponent {
  readonly title: Locator;
  readonly image: Locator;
  readonly dateText: Locator;

  constructor(root: Locator, page?: Page) {
    super(root, page);

    this.title = this.root.locator('.title h3, .event-title').first();
    this.image = this.root.locator('img.news-image, img.event-image').first();
    this.dateText = this.root.locator('.user-info-date p, .event-date').first();
  }

  async getTitle(): Promise<string> {
    return test.step('EventItem: title', async () => (await this.title.innerText()).trim());
  }

  async getDate(): Promise<string> {
    return test.step('EventItem: date', async () => (await this.dateText.innerText()).trim());
  }

  async open(): Promise<void> {
    await test.step('EventItem: open', async () => {
      await this.root.click();
    });
  }
}
