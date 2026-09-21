import { BaseEventCardComponent } from '@/components/base-event-card-component';

export class GridEventCardComponent extends BaseEventCardComponent {
  /** Checks whether this card's root element is actually rendered in grid mode */
  override async isCorrectViewMode(): Promise<boolean> {
    const hasListClass = await this.root.evaluate((el) => el.classList.contains('list-item-view'));
    return !hasListClass;
  }
}
