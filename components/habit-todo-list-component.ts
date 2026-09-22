import type { Locator, Page } from '@playwright/test';
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
    await this.editTodoListLink.click();
  }

  getTodoItemByIndex(index: number): HabitTodoItemComponent {
    return new HabitTodoItemComponent(this.todoItems.nth(index), this.page);
  }

  getTodoItemByText(text: string): HabitTodoItemComponent {
    return new HabitTodoItemComponent(this.todoItems.filter({ hasText: text }).first(), this.page);
  }

  async addTodoItem(text: string): Promise<void> {
    await this.todoItemInput.fill(text);
    await this.todoAddItemButton.click();
  }

  async save(): Promise<void> {
    await this.todoSaveButton.click();
  }

  async cancelEditing(): Promise<void> {
    await this.todoCancelButton.click();
  }

  async getItemsCount(): Promise<number> {
    return this.todoItems.count();
  }
}
