import { BaseEventCardComponent } from './base-event-card-component';
import env from '@/config/env';

export class ListEventCardComponent extends BaseEventCardComponent {
  /** Checks whether this card's root element is actually rendered in list mode */
  override async isCorrectViewMode(): Promise<boolean> {
    return await this.root.evaluate((el) => el.classList.contains('list-item-view'));
  }

  async hasActiveTags(tagNames: string[]): Promise<boolean> {
    for (const tagName of tagNames) {
      if (!tagName) continue;

      const activeTag = this.root
        .locator('span.text.tag-active')
        .filter({ hasText: new RegExp(tagName.trim(), 'i') });

      try {
        await activeTag.waitFor({ state: 'visible', timeout: env.MEDIUM_TIMEOUT });
      } catch {
        return false;
      }
    }
    return true;
  }
}
