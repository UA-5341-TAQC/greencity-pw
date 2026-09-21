import { Language } from '@/types/header.types';

export interface HabitFormI18n {
  createHabitTitle: string;
  editHabitTitle: string;

  habitTitleLabel: string;
  habitTitlePlaceholder: string;

  pickTagsLabel: string;

  descriptionLabel: string;
  descriptionPlaceholder: string;

  dropzoneBrowseLink: string;
  imageSubmitButton: string;
  imageCancelButton: string;

  todoAddItemPlaceholder: string;
  todoCancelButton: string;
  todoSaveButton: string;

  cancelButton: string;
  addHabitButton: string;
  saveChangesButton: string;
  deleteButton: string;
}

export const HABIT_FORM_I18N: Record<Language, HabitFormI18n> = {
  [Language.En]: {
    createHabitTitle: 'Create habit',
    editHabitTitle: 'Edit habit',

    habitTitleLabel: 'Habit title',
    habitTitlePlaceholder: 'Enter name for the habit',

    pickTagsLabel: 'Pick tags',

    descriptionLabel: 'Habit description',
    descriptionPlaceholder: 'Describe the habit',

    dropzoneBrowseLink: 'browse',
    imageSubmitButton: 'Submit',
    imageCancelButton: 'Cancel',

    todoAddItemPlaceholder: 'Add custom item',
    todoCancelButton: 'Cancel',
    todoSaveButton: 'Save',

    cancelButton: 'Cancel',
    addHabitButton: 'Add Habit',
    saveChangesButton: 'Save Changes',
    deleteButton: 'Delete',
  },

  [Language.Uk]: {
    createHabitTitle: 'Створити звичку',
    editHabitTitle: 'Редагувати звичку',

    habitTitleLabel: 'Назва звички',
    habitTitlePlaceholder: 'Введіть назву звички',

    pickTagsLabel: 'Оберіть теги для звички',

    descriptionLabel: 'Опис звички',
    descriptionPlaceholder: 'Опишіть звичку',

    dropzoneBrowseLink: 'огляд',
    imageSubmitButton: 'Застосувати',
    imageCancelButton: 'Скасувати',

    todoAddItemPlaceholder: 'Додати власну річ',
    todoCancelButton: 'Відмінити',
    todoSaveButton: 'Зберегти',

    cancelButton: 'Відмінити',
    addHabitButton: 'Додати звичку',
    saveChangesButton: 'Зберегти',
    deleteButton: 'Видалити',
  },
};
