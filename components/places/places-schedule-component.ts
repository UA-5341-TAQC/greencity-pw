import type { Locator } from '@playwright/test';
import { BaseComponent } from '@/components/base-component';
import { WeekDay } from '@/types/places.types';

export class PlacesScheduleComponent extends BaseComponent {
  constructor(root: Locator) {
    super(root);
  }

  private getDay(day: WeekDay): Locator {
    return this.root.locator('mat-checkbox').filter({ hasText: day });
  }

  async selectDay(day: WeekDay): Promise<void> {
    await this.getDay(day).getByRole('checkbox').check();
  }

  async selectTimeFrom(day: WeekDay, time: string): Promise<void> {
    await this.getDay(day).locator('select#timeFrom').selectOption(time);
  }

  async selectTimeTo(day: WeekDay, time: string): Promise<void> {
    await this.getDay(day).locator('select#timeTo').selectOption(time);
  }

  async setSchedule(day: WeekDay, from: string, to: string): Promise<void> {
    const dayBlock = this.getDay(day);

    await dayBlock.getByRole('checkbox').check();
    await dayBlock.locator('select#timeFrom').selectOption(from);
    await dayBlock.locator('select#timeTo').selectOption(to);
  }
}
