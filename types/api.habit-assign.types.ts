export type HabitAssignStatus = 'INPROGRESS' | 'ACQUIRED' | 'CANCELLED' | 'EXPIRED' | 'REQUESTED';

export interface HabitAssignCustomProperties {
  habitAssignPropertiesDto: {
    duration: number;
    isPrivate: boolean;
    defaultToDoListItems?: number[];
  };
  friendsIdsList?: number[];
  customToDoListItemList?: { text: string }[];
}

export interface HabitAssignManagement {
  id: number;
  habitId: number;
  userId: number;
  status: HabitAssignStatus;
  duration: number;
  workingDays: number;
  habitStreak: number;
  createDateTime: string;
  lastEnrollment: string | null;
  progressNotificationHasDisplayed: boolean | null;
}

export interface AssignedHabitDetails {
  id: number;
  defaultDuration: number;
  habitTranslation: { name: string; languageCode: string | null };
}

export interface HabitCatalogItem extends AssignedHabitDetails {
  isAssigned: boolean;
  isCustomHabit: boolean;
}

export interface HabitAssignment {
  id: number;
  userId: number;
  status: HabitAssignStatus;
  duration: number;
  workingDays: number;
  habitStreak: number;
  createDateTime: string;
  lastEnrollmentDate: string | null;
  habit: AssignedHabitDetails | null;
  habitStatusCalendarDtoList: { id: number; enrollDate: string }[];
  progressNotificationHasDisplayed: boolean | null;
  friendsIdsTrackingHabit: number[] | null;
}

export interface HabitToDoItem {
  id?: number;
  text: string;
  status: 'ACTIVE' | 'DONE' | 'DISABLED' | 'INPROGRESS';
}

export interface HabitToDoLists {
  userToDoListItemDto: HabitToDoItem[];
  customToDoListItemDto: HabitToDoItem[];
}
