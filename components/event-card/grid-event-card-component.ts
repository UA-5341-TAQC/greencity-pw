import { BaseEventCardComponent } from './base-event-card-component';

export class GridEventCardComponent extends BaseEventCardComponent {
  /** Checks whether this card's root element is actually rendered in grid mode */
  override async isCorrectViewMode(): Promise<boolean> {
    const hasListClass = await this.root.evaluate((el) => el.classList.contains('list-item-view'));
    return !hasListClass;
  }

  async hasActiveTags(tagNames: string[]): Promise<boolean> {
    const validTags = tagNames.map((t) => t?.trim()).filter(Boolean);

    if (validTags.length === 0) {
      return false;
    }

    const pattern = new RegExp(validTags.join('|'), 'i');

    const activeTag = this.root.locator('span.text.tag-active').filter({ hasText: pattern });

    return (await activeTag.count()) > 0;
  }
}
