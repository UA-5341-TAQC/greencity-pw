import { NewsType } from '@/types/news.types';
import { Language } from '@/types/header.types';

export interface NewsI18n {
  types: Record<NewsType, string>;
  date: string;
  author: string;
}

export const NEWS_I18N: Record<Language, NewsI18n> = {
  [Language.En]: {
    types: {
      [NewsType.News]: 'News',
      [NewsType.Event]: 'Event',
      [NewsType.Education]: 'Education',
      [NewsType.Initiatives]: 'Initiatives',
      [NewsType.Ads]: 'Ads',
    },
    date: 'Date:',
    author: 'Author:',
  },

  [Language.Uk]: {
    types: {
      [NewsType.News]: 'Новини',
      [NewsType.Event]: 'Події',
      [NewsType.Education]: 'Освіта',
      [NewsType.Initiatives]: 'Ініціативи',
      [NewsType.Ads]: 'Реклама',
    },
    date: 'Дата:',
    author: 'Автор:',
  },
};
