import { Language } from '@/types/header.types';

export interface AllHabitsI18n {
  filterBy: string;
  tagsFilter: string;
  difficultyFilter: string;
  typesFilter: string;
  resetFiltersButton: string;
}

export const ALL_HABITS_I18N: Record<Language, AllHabitsI18n> = {
  [Language.En]: {
    filterBy: 'Filter by',
    tagsFilter: 'Tags',
    difficultyFilter: 'Difficulty',
    typesFilter: 'Types',
    resetFiltersButton: 'Reset all',
  },

  [Language.Uk]: {
    filterBy: 'Фільтрувати за',
    tagsFilter: 'Теги',
    difficultyFilter: 'Складність',
    typesFilter: 'Типи',
    resetFiltersButton: 'Очистити',
  },
};
