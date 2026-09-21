import type { Locator, Page } from '@playwright/test';
import { HabitFormPage } from '@/pages/habit-form-page';
import { Language } from '@/types/header.types';

export class CreateHabitPage extends HabitFormPage {
  public readonly addHabitButton: Locator;

  constructor(page: Page, lang: Language = Language.En) {
    super(page, lang);
    this.addHabitButton = this.form.getByRole('button', {
      name: this.i18n.addHabitButton,
      exact: true,
    });
  }

  async navigateToCreateHabit(profileId: number): Promise<void> {
    await this.navigateTo(`/#/greenCity/profile/${profileId}/create-habit`);
  }

  async isAddHabitEnabled(): Promise<boolean> {
    return this.addHabitButton.isEnabled();
  }

  async addHabit(): Promise<void> {
    await this.addHabitButton.click();
  }
}
