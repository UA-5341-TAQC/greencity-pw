import { test, type Locator, type Page } from '@playwright/test';
import BasePage from '@/pages/base-page';
import { Language } from '@/types/header.types';
import { HabitDifficulty } from '@/types/habit.types';
import { HABIT_FORM_I18N } from '@/types/habit-form.i18n';
import { HabitTodoListComponent } from '@/components/habit-todo-list-component';

export { HabitDifficulty };

export abstract class HabitFormPage extends BasePage {
  public readonly i18n: (typeof HABIT_FORM_I18N)[Language];

  public readonly form: Locator;

  public readonly pageTitle: Locator;
  public readonly pageSubtitle: Locator;

  public readonly habitTitleInput: Locator;
  public readonly habitTitleCounter: Locator;
  public readonly difficultyOptions: Locator;
  public readonly difficultyButtons: Locator;

  public readonly tagsSelect: Locator;
  public readonly tagButtons: Locator;

  public readonly habitDescriptionEditor: Locator;
  public readonly habitDescriptionValidationError: Locator;

  public readonly imageDropzone: Locator;
  public readonly imageUploadFileInput: Locator;
  public readonly imageBrowseLink: Locator;
  public readonly imageSubmitButton: Locator;
  public readonly imageCancelButton: Locator;
  public readonly suggestedImages: Locator;

  public readonly habitDuration: Locator;
  public readonly calendar: Locator;
  public readonly previousMonthButton: Locator;
  public readonly monthAndYearButton: Locator;
  public readonly nextMonthButton: Locator;
  public readonly weekdays: Locator;
  public readonly calendarDays: Locator;
  public readonly currentDay: Locator;
  public readonly durationSlider: Locator;

  public readonly inviteFriends: Locator;
  public readonly inviteFriendsButton: Locator;

  public readonly todoListComponent: HabitTodoListComponent;

  public readonly cancelButton: Locator;

  protected constructor(page: Page, lang: Language = Language.En) {
    super(page);

    this.i18n = HABIT_FORM_I18N[lang];

    this.form = page.locator('form.habit-form');

    this.pageTitle = page.locator('div.create-habit-header').getByRole('heading', { level: 1 });
    this.pageSubtitle = page.locator('div.create-habit-header p');

    this.habitTitleInput = this.form.getByLabel(this.i18n.habitTitleLabel, { exact: true });
    this.habitTitleCounter = this.form.locator('div.title-labels span.habit-tooltip');

    this.difficultyOptions = this.form.getByRole('radio');
    this.difficultyButtons = this.form.locator('ul.difficulty-input li.star-button');

    this.tagsSelect = this.form.locator('app-tags-select');
    this.tagButtons = this.tagsSelect.getByRole('button');

    this.habitDescriptionEditor = this.form.locator(
      'quill-editor .ql-editor[contenteditable="true"]'
    );
    this.habitDescriptionValidationError = this.form.locator(
      '.textarea-wrapper .habit-tooltip.warning'
    );

    const dragAndDrop = this.form.locator('app-drag-and-drop');
    this.imageDropzone = dragAndDrop.locator('div.dropzone');
    this.imageUploadFileInput = dragAndDrop.locator('input[type="file"]#upload');
    this.imageBrowseLink = dragAndDrop.getByText(this.i18n.dropzoneBrowseLink, { exact: true });
    this.imageSubmitButton = dragAndDrop.getByRole('button', {
      name: this.i18n.imageSubmitButton,
      exact: true,
    });
    this.imageCancelButton = dragAndDrop.getByRole('button', {
      name: this.i18n.imageCancelButton,
      exact: true,
    });
    this.suggestedImages = this.form.locator('app-select-images button.images-container');

    this.habitDuration = page.locator('app-habit-duration');
    this.calendar = page.locator('app-calendar');
    this.previousMonthButton = this.calendar.getByRole('button', {
      name: 'arrow previous',
      exact: true,
    });
    this.monthAndYearButton = this.calendar.locator('button.monthAndYear');
    this.nextMonthButton = this.calendar.getByRole('button', {
      name: 'arrow next',
      exact: true,
    });
    this.weekdays = this.calendar.locator('button.days-name');
    this.calendarDays = this.calendar.locator('button.calendar-grid-day');
    this.currentDay = this.calendar.locator('button.calendar-grid-day.current-day');
    this.durationSlider = this.habitDuration.getByRole('slider');

    this.inviteFriends = page.locator('app-habit-invite-friends');
    this.inviteFriendsButton = this.inviteFriends.locator('.plus-circle');

    this.todoListComponent = new HabitTodoListComponent(
      this.form.locator('app-habit-edit-to-do-list'),
      page,
      lang
    );

    this.cancelButton = this.form.locator('button.tertiary-global-button').filter({
      hasText: this.i18n.cancelButton,
    });
  }

  async waitForHabitForm(): Promise<void> {
    await test.step(
      'Wait For Habit Form',
      async () => {
        await this.form.waitFor({ state: 'visible' });
      },
      { box: true }
    );
  }

  async fillHabitTitle(title: string): Promise<void> {
    await test.step(
      'Fill Habit Title',
      async () => {
        await this.habitTitleInput.fill(title);
      },
      { box: true }
    );
  }

  async getHabitTitle(): Promise<string> {
    return await test.step(
      'Get Habit Title',
      async () => {
        return this.habitTitleInput.inputValue();
      },
      { box: true }
    );
  }

  async getTitleCounterText(): Promise<string> {
    return await test.step(
      'Get Title Counter Text',
      async () => {
        return ((await this.habitTitleCounter.textContent()) ?? '').trim();
      },
      { box: true }
    );
  }

  async selectDifficulty(difficulty: HabitDifficulty): Promise<void> {
    await test.step(
      'Select Difficulty',
      async () => {
        await this.difficultyButtons.nth(difficulty - 1).click();
      },
      { box: true }
    );
  }

  async selectTag(tagName: string): Promise<void> {
    await test.step(
      'Select Tag',
      async () => {
        await this.tagsSelect.getByRole('button', { name: tagName, exact: true }).click();
      },
      { box: true }
    );
  }

  async fillHabitDescription(description: string): Promise<void> {
    await test.step(
      'Fill Habit Description',
      async () => {
        await this.habitDescriptionEditor.fill(description);
      },
      { box: true }
    );
  }

  async getHabitDescription(): Promise<string> {
    return await test.step(
      'Get Habit Description',
      async () => {
        return ((await this.habitDescriptionEditor.textContent()) ?? '').trim();
      },
      { box: true }
    );
  }

  async getHabitDescriptionValidationError(): Promise<string> {
    return await test.step(
      'Get Habit Description Validation Error',
      async () => {
        return ((await this.habitDescriptionValidationError.textContent()) ?? '').trim();
      },
      { box: true }
    );
  }

  async uploadImage(filePath: string): Promise<void> {
    await test.step(
      'Upload Image',
      async () => {
        await this.imageUploadFileInput.setInputFiles(filePath);
      },
      { box: true }
    );
  }

  async dragSuggestedImageToDropzone(index: number): Promise<void> {
    await test.step(
      'Drag Suggested Image To Dropzone',
      async () => {
        await this.suggestedImages.nth(index).dragTo(this.imageDropzone);
      },
      { box: true }
    );
  }

  async submitImage(): Promise<void> {
    await test.step(
      'Submit Image',
      async () => {
        await this.imageSubmitButton.click();
      },
      { box: true }
    );
  }

  async cancelImageCrop(): Promise<void> {
    await test.step(
      'Cancel Image Crop',
      async () => {
        await this.imageCancelButton.click();
      },
      { box: true }
    );
  }

  async setDuration(days: number): Promise<void> {
    await test.step(
      'Set Duration',
      async () => {
        const min = Number(await this.durationSlider.getAttribute('min'));
        const max = Number(await this.durationSlider.getAttribute('max'));

        if (!Number.isInteger(days) || days < min || days > max) {
          throw new RangeError(`Duration must be an integer between ${min} and ${max}.`);
        }

        await this.durationSlider.press('Home');

        for (let day = min; day < days; day += 1) {
          await this.durationSlider.press('ArrowRight');
        }
      },
      { box: true }
    );
  }

  async getDisplayedMonth(): Promise<string> {
    return await test.step(
      'Get Displayed Month',
      async () => {
        return (await this.monthAndYearButton.innerText()).trim();
      },
      { box: true }
    );
  }

  async goToPreviousMonth(): Promise<void> {
    await test.step(
      'Go To Previous Month',
      async () => {
        await this.previousMonthButton.click();
      },
      { box: true }
    );
  }

  async goToNextMonth(): Promise<void> {
    await test.step(
      'Go To Next Month',
      async () => {
        await this.nextMonthButton.click();
      },
      { box: true }
    );
  }

  async selectCalendarDay(day: number): Promise<void> {
    await test.step(
      'Select Calendar Day',
      async () => {
        await this.calendarDays.getByText(String(day), { exact: true }).click();
      },
      { box: true }
    );
  }

  async clickInviteFriends(): Promise<void> {
    await test.step(
      'Click Invite Friends',
      async () => {
        await this.inviteFriendsButton.click();
      },
      { box: true }
    );
  }

  async cancel(): Promise<void> {
    await test.step(
      'Cancel',
      async () => {
        await this.cancelButton.click();
      },
      { box: true }
    );
  }
}
