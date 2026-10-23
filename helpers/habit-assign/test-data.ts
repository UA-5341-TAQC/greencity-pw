import type { HabitAssignCustomProperties } from '@/types';

export const MISSING_ID = 2147483647;
export const language = { params: { lang: 'en' } };
// Keep test dates in Kyiv time when the runner uses another timezone.
export const today = new Intl.DateTimeFormat('en-CA', { timeZone: 'Europe/Kyiv' }).format(
  new Date()
);
export const customProperties: HabitAssignCustomProperties = {
  habitAssignPropertiesDto: { duration: 7, isPrivate: true, defaultToDoListItems: [] },
  friendsIdsList: [],
  customToDoListItemList: [],
};

/** Returns YYYY-MM-DD relative to the Kyiv date captured when this module was loaded. */
export function calendarDate(offsetDays = 0): string {
  const date = new Date(`${today}T12:00:00Z`);
  date.setUTCDate(date.getUTCDate() + offsetDays);
  return date.toISOString().slice(0, 10);
}
