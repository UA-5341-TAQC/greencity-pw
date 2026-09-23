import { test, type Locator, type Page } from '@playwright/test';
import { HabitFormPage } from '@/pages/habit/habit-form-page';
import { Language } from '@/types/header.types';

export class EditHabitPage extends HabitFormPage {
  public readonly saveChangesButton: Locator;
  public readonly deleteHabitButton: Locator;

  constructor(page: Page, lang: Language = Language.En) {
    super(page, lang);
    this.saveChangesButton = this.form.getByRole('button', {
      name: this.i18n.saveChangesButton,
      exact: true,
    });
    this.deleteHabitButton = this.form.getByRole('button', {
      name: this.i18n.deleteButton,
      exact: true,
    });
  }

  async navigateToEditHabit(profileId: number, habitId: number): Promise<void> {
    await test.step(
      'Navigate To Edit Habit',
      async () => {
        await this.navigateTo(
          `/#/greenCity/profile/${profileId}/allhabits/addhabit/${habitId}/edit-habit`
        );
      },
      { box: true }
    );
  }

  async isSaveChangesEnabled(): Promise<boolean> {
    return await test.step(
      'Is Save Changes Enabled',
      async () => {
        return this.saveChangesButton.isEnabled();
      },
      { box: true }
    );
  }

  async saveChanges(): Promise<void> {
    await test.step(
      'Save Changes',
      async () => {
        await this.saveChangesButton.click();
      },
      { box: true }
    );
  }

  async deleteHabit(): Promise<void> {
    await test.step(
      'Delete Habit',
      async () => {
        await this.deleteHabitButton.click();
      },
      { box: true }
    );
  }
}
