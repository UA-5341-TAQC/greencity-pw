import { test, type Locator, type Page } from '@playwright/test';
import { HabitFormPage } from '@/pages/habit/habit-form-page';
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
    await test.step(
      'Navigate To Create Habit',
      async () => {
        await this.navigateTo(`/#/greenCity/profile/${profileId}/create-habit`);
      },
      { box: true }
    );
  }

  async isAddHabitEnabled(): Promise<boolean> {
    return await test.step(
      'Is Add Habit Enabled',
      async () => {
        return this.addHabitButton.isEnabled();
      },
      { box: true }
    );
  }

  async addHabit(): Promise<void> {
    await test.step(
      'Add Habit',
      async () => {
        await this.addHabitButton.click();
      },
      { box: true }
    );
  }
}
