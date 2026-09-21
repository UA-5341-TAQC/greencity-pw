import type { Locator, Page } from '@playwright/test';
import { HabitFormPage } from '@/pages/habit-form-page';
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
    await this.navigateTo(
      `/#/greenCity/profile/${profileId}/allhabits/addhabit/${habitId}/edit-habit`
    );
  }

  async isSaveChangesEnabled(): Promise<boolean> {
    return this.saveChangesButton.isEnabled();
  }

  async saveChanges(): Promise<void> {
    await this.saveChangesButton.click();
  }

  async deleteHabit(): Promise<void> {
    await this.deleteHabitButton.click();
  }
}
