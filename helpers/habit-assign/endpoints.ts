import type { APIResponse } from '@playwright/test';
import type { HabitAssignClient } from '@/api';
import { MISSING_ID, language, today, customProperties } from './test-data';

type EndpointCase = {
  id: string;
  name: string;
  call: (client: HabitAssignClient) => Promise<APIResponse>;
};
// Use nonexistent resources even in authorization tests: a regression must not mutate real data.
export const protectedEndpoints: EndpointCase[] = [
  { id: '01', name: 'POST /habit/assign/{habitId}', call: (c) => c.assignDefault(MISSING_ID) },
  {
    id: '02',
    name: 'POST /habit/assign/{habitId}/custom',
    call: (c) => c.assignCustom(MISSING_ID, customProperties),
  },
  {
    id: '03',
    name: 'GET /habit/assign/{habitAssignId}',
    call: (c) => c.getAssignment(MISSING_ID, language),
  },
  {
    id: '04',
    name: 'GET /habit/assign/{habitId}/active',
    call: (c) => c.getActiveAssignment(MISSING_ID, language),
  },
  {
    id: '05',
    name: 'GET /habit/assign/{habitId}/all',
    call: (c) => c.getAssignmentsByHabit(MISSING_ID, language),
  },
  {
    id: '06',
    name: 'GET /habit/assign/{habitAssignId}/more',
    call: (c) => c.getHabitDetails(MISSING_ID, language),
  },
  {
    id: '07',
    name: 'GET /habit/assign/allForCurrentUser',
    call: (c) => c.getCurrentUserAssignments(language),
  },
  {
    id: '08',
    name: 'GET /habit/assign/allUser/{userId}',
    call: (c) => c.getUserAssignments(MISSING_ID, language),
  },
  { id: '09', name: 'GET /habit/assign/myHabits/{userId}', call: (c) => c.getMyHabits(MISSING_ID) },
  {
    id: '10',
    name: 'GET /habit/assign/allMutualHabits/{userId}',
    call: (c) => c.getMutualHabits(MISSING_ID),
  },
  {
    id: '11',
    name: 'GET /habit/assign/active/{date}',
    call: (c) => c.getActiveOnDate(today, language),
  },
  {
    id: '12',
    name: 'GET /habit/assign/activity/{from}/to/{to}',
    call: (c) => c.getActivity(today, today, language),
  },
  {
    id: '13',
    name: 'GET /habit/assign/{habitAssignId}/allUserAndCustomList',
    call: (c) => c.getToDoLists(MISSING_ID, language),
  },
  {
    id: '14',
    name: 'PUT /habit/assign/{habitAssignId}/allUserAndCustomList',
    call: (c) =>
      c.updateToDoLists(
        MISSING_ID,
        { userToDoListItemDto: [], customToDoListItemDto: [] },
        language
      ),
  },
  {
    id: '15',
    name: 'GET /habit/assign/allUserAndCustomToDoListsInprogress',
    call: (c) => c.getInprogressToDoLists(language),
  },
  {
    id: '16',
    name: 'GET /habit/assign/{habitAssignId}/friends/habit-duration-info',
    call: (c) => c.getFriendsDuration(MISSING_ID),
  },
  {
    id: '17',
    name: 'PUT /habit/assign/{habitAssignId}/update-habit-duration',
    call: (c) => c.updateDuration(MISSING_ID, 7),
  },
  {
    id: '18',
    name: 'PUT /habit/assign/{habitAssignId}/update-status-and-duration',
    call: (c) => c.updateStatusAndDuration(MISSING_ID, 7, language),
  },
  {
    id: '19',
    name: 'PATCH /habit/assign/{habitAssignId}',
    call: (c) => c.updateStatus(MISSING_ID, 'CANCELLED'),
  },
  {
    id: '20',
    name: 'PUT /habit/assign/{habitAssignId}/updateProgressNotificationHasDisplayed',
    call: (c) => c.markProgressNotificationDisplayed(MISSING_ID),
  },
  {
    id: '21',
    name: 'POST /habit/assign/{habitAssignId}/enroll/{date}',
    call: (c) => c.enroll(MISSING_ID, today, language),
  },
  {
    id: '22',
    name: 'POST /habit/assign/{habitAssignId}/unenroll/{date}',
    call: (c) => c.unenroll(MISSING_ID, today),
  },
  {
    id: '23',
    name: 'POST /habit/assign/{habitId}/invite',
    call: (c) => c.inviteFriends(MISSING_ID, [MISSING_ID]),
  },
  {
    id: '24',
    name: 'DELETE /habit/assign/delete/{habitAssignId}',
    call: (c) => c.deleteAssignment(MISSING_ID),
  },
];
