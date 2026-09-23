import { test, type Locator, type Page } from '@playwright/test';
import { BaseComponent } from './base-component';
import { HabitTodoItemComponent } from './habit-todo-item-component';
import { HABIT_FORM_I18N } from '@/types/habit-form.i18n';
import { Language } from '@/types/header.types';

export class HabitTodoListComponent extends BaseComponent {
  public readonly editTodoListLink: Locator;
  public readonly todoItems: Locator;
  public readonly todoItemInput: Locator;
  public readonly todoAddItemButton: Locator;
  public readonly todoCancelButton: Locator;
  public readonly todoSaveButton: Locator;

  constructor(rootLocator: Locator, page?: Page, lang: Language = Language.En) {
    super(rootLocator, page);

    const i18n = HABIT_FORM_I18N[lang];

    this.editTodoListLink = this.root.getByLabel('Edit Todo List');
    this.todoItems = this.root.locator('li.list-item');
    this.todoItemInput = this.root.getByPlaceholder(i18n.todoAddItemPlaceholder);
    this.todoAddItemButton = this.root.getByRole('button', { name: '+' });
    this.todoCancelButton = this.root.getByRole('button', {
      name: i18n.todoCancelButton,
      exact: true,
    });
    this.todoSaveButton = this.root.getByRole('button', { name: i18n.todoSaveButton, exact: true });
  }

  async openEditor(): Promise<void> {
    await test.step(
      'Open Editor',
      async () => {
        await this.editTodoListLink.click();
      },
      { box: true }
    );
  }

  getTodoItemByIndex(index: number): HabitTodoItemComponent {
    return new HabitTodoItemComponent(this.todoItems.nth(index), this.page);
  }

  getTodoItemByText(text: string): HabitTodoItemComponent {
    return new HabitTodoItemComponent(this.todoItems.filter({ hasText: text }).first(), this.page);
  }

  async addTodoItem(text: string): Promise<void> {
    await test.step(
      'Add Todo Item',
      async () => {
        await this.todoItemInput.fill(text);
        await this.todoAddItemButton.click();
      },
      { box: true }
    );
  }

  async save(): Promise<void> {
    await test.step(
      'Save',
      async () => {
        await this.todoSaveButton.click();
      },
      { box: true }
    );
  }

  async cancelEditing(): Promise<void> {
    await test.step(
      'Cancel Editing',
      async () => {
        await this.todoCancelButton.click();
      },
      { box: true }
    );
  }

  async getItemsCount(): Promise<number> {
    return await test.step(
      'Get Items Count',
      async () => {
        return this.todoItems.count();
      },
      { box: true }
    );
  }
}
