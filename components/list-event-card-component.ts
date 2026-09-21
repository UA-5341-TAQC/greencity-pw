import { BaseEventCardComponent } from '@/components/base-event-card-component';

export class ListEventCardComponent extends BaseEventCardComponent {
  /** Checks whether this card's root element is actually rendered in list mode */
  override async isCorrectViewMode(): Promise<boolean> {
    return await this.root.evaluate((el) => el.classList.contains('list-item-view'));
  }
}