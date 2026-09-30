import {
  EventTimeFilter,
  EventLocationFilter,
  EventStatusFilter,
  EventTypeFilter,
} from '@/types/events.types';
import { Language } from '@/types/header.types';

export interface EventsFilterLabelsI18n {
  eventTime: string;
  location: string;
  status: string;
  type: string;
  dateRange: string;
  filterBy: string;
  resetAll: string;
}

export interface EventsI18n {
  filters: EventsFilterLabelsI18n;
  timeOptions: Record<EventTimeFilter, string>;
  locationOptions: Record<EventLocationFilter, string>;
  statusOptions: Record<EventStatusFilter, string>;
  typeOptions: Record<EventTypeFilter, string>;
}

export const EVENTS_I18N: Record<Language, EventsI18n> = {
  [Language.En]: {
    filters: {
      eventTime: 'Event time',
      location: 'Location',
      status: 'Status',
      type: 'Type',
      dateRange: 'Date range',
      filterBy: 'Filter',
      resetAll: 'Reset all',
    },
    timeOptions: {
      [EventTimeFilter.Any]: 'Any time',
      [EventTimeFilter.Upcoming]: 'Upcoming',
      [EventTimeFilter.Past]: 'Past',
    },
    locationOptions: {
      [EventLocationFilter.All]: 'Select All',
      [EventLocationFilter.Online]: 'Online',
      [EventLocationFilter.Offline]: 'Offline',
    },
    statusOptions: {
      [EventStatusFilter.Any]: 'Any status',
      [EventStatusFilter.Open]: 'Open',
      [EventStatusFilter.Closed]: 'Closed',
    },
    typeOptions: {
      [EventTypeFilter.All]: 'All types',
      [EventTypeFilter.Economic]: 'Economic',
      [EventTypeFilter.Social]: 'Social',
      [EventTypeFilter.Environmental]: 'Environmental',
    },
  },

  [Language.Uk]: {
    filters: {
      eventTime: 'Час події',
      location: 'Де?',
      status: 'Статус',
      type: 'Тип події',
      dateRange: 'Дати',
      filterBy: 'Фільтрувати',
      resetAll: 'Очистити',
    },
    timeOptions: {
      [EventTimeFilter.Any]: 'Будь-який',
      [EventTimeFilter.Upcoming]: 'Майбутні',
      [EventTimeFilter.Past]: 'Завершені',
    },
    locationOptions: {
      [EventLocationFilter.All]: 'Обрати всі',
      [EventLocationFilter.Online]: 'Онлайн',
      [EventLocationFilter.Offline]: 'Офлайн',
    },
    statusOptions: {
      [EventStatusFilter.Any]: 'Будь-який статус',
      [EventStatusFilter.Open]: 'Відкритa',
      [EventStatusFilter.Closed]: 'Закритa',
    },
    typeOptions: {
      [EventTypeFilter.All]: 'Всі типи',
      [EventTypeFilter.Economic]: 'Економічний',
      [EventTypeFilter.Social]: 'Соціальний',
      [EventTypeFilter.Environmental]: 'Екологічний',
    },
  },
};
