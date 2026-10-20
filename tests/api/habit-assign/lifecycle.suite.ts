import { test, expect } from '@/fixtures/habit-assign-fixture';
import type { HabitToDoLists } from '@/types';
import { readAssignment, expectError } from '@/helpers/habit-assign/assertions';
import { customProperties, language, today } from '@/helpers/habit-assign/test-data';

export function registerLifecycleTests(): void {
  test.describe('Progress, status and to-do lists', () => {
    for (const duration of [7, 56]) {
      test(`TC-API-HA-LIFECYCLE-01-${duration} PUT /habit/assign/{habitAssignId}/update-habit-duration - should persist duration=${duration}`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment();
        const response = await habitClient.updateDuration(created.id, duration);
        expect(response.status(), 'Duration update should succeed').toBe(200);
        expect(
          await response.json(),
          'Duration response should identify the updated assignment'
        ).toEqual(
          expect.objectContaining({
            habitAssignId: created.id,
            habitId: created.habitId,
            userId: created.userId,
            duration,
            status: 'INPROGRESS',
            workingDays: 0,
          })
        );
        const body = await readAssignment(await habitClient.getAssignment(created.id, language));
        expect(body.duration, 'GET should return the updated duration').toBe(duration);
      });
    }

    test('TC-API-HA-LIFECYCLE-02 PATCH /habit/assign/{habitAssignId} - should cancel an assignment and exclude it from active results', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      const response = await habitClient.updateStatus(created.id, 'CANCELLED');
      expect(response.status(), 'Status update should succeed').toBe(200);
      expect(
        await response.json(),
        'Status response should identify the cancelled assignment'
      ).toEqual(expect.objectContaining({ id: created.id, status: 'CANCELLED' }));
      const body = await readAssignment(await habitClient.getAssignment(created.id, language));
      expect(body.status, 'Cancelled state should be persisted').toBe('CANCELLED');
      const active = await habitClient.getCurrentUserAssignments(language);
      expect(active.status(), 'Active assignments should remain available').toBe(200);
      expect(
        await active.json(),
        'Cancelled assignment should be absent from the active list'
      ).not.toEqual(expect.arrayContaining([expect.objectContaining({ id: created.id })]));
    });

    test('TC-API-HA-LIFECYCLE-03 PUT /habit/assign/{habitAssignId}/update-status-and-duration - should return 409 for an INPROGRESS assignment', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      await expectError(await habitClient.updateStatusAndDuration(created.id, 7, language), 409);
      const body = await readAssignment(await habitClient.getAssignment(created.id, language));
      expect(body.status, 'Invalid acceptance should preserve status').toBe('INPROGRESS');
      expect(body.duration, 'Invalid acceptance should preserve duration').toBe(created.duration);
    });

    test('TC-API-HA-LIFECYCLE-04 PUT /habit/assign/{habitAssignId}/updateProgressNotificationHasDisplayed - should persist the flag on repeated calls', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      for (const attempt of [1, 2]) {
        const response = await habitClient.markProgressNotificationDisplayed(created.id);
        expect(response.status(), `Notification acknowledgement ${attempt} should succeed`).toBe(
          200
        );
        const body = await readAssignment(await habitClient.getAssignment(created.id, language));
        expect(body.progressNotificationHasDisplayed, 'Notification flag should be persisted').toBe(
          true
        );
      }
    });

    test('TC-API-HA-LIFECYCLE-05 POST /habit/assign/{habitAssignId}/enroll/{date} - should update daily activity, reject duplicate enrollment and allow undo', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      const enrolled = await readAssignment(await habitClient.enroll(created.id, today, language));
      expect(enrolled.workingDays, 'Enrollment should add one working day').toBe(1);
      expect(enrolled.habitStatusCalendarDtoList, 'Calendar should include today').toEqual(
        expect.arrayContaining([expect.objectContaining({ enrollDate: today })])
      );
      await expectError(await habitClient.enroll(created.id, today, language), 400);
      const activity = await habitClient.getActivity(today, today, language);
      expect(activity.status(), 'Daily activity should be available').toBe(200);
      expect(await activity.json(), 'Activity should show this assignment as enrolled').toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            enrollDate: today,
            habitAssigns: expect.arrayContaining([
              expect.objectContaining({ habitAssignId: created.id, enrolled: true }),
            ]),
          }),
        ])
      );
      const unenrolled = await readAssignment(await habitClient.unenroll(created.id, today));
      expect(unenrolled.workingDays, 'Unenrollment should restore zero working days').toBe(0);
      const persisted = await readAssignment(await habitClient.getAssignment(created.id, language));
      expect(persisted.workingDays, 'Zero working days should be persisted').toBe(0);
      expect(
        persisted.habitStatusCalendarDtoList,
        'Calendar should no longer include today'
      ).not.toEqual(expect.arrayContaining([expect.objectContaining({ enrollDate: today })]));
    });

    test('TC-API-HA-LIFECYCLE-06 PUT /habit/assign/{habitAssignId}/allUserAndCustomList - should create, complete and remove a custom task', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment(customProperties);
      const response = await habitClient.getToDoLists(created.id, language);
      expect(response.status(), 'To-do lists should be available').toBe(200);
      const lists = (await response.json()) as HabitToDoLists;
      expect(lists, 'To-do groups should be arrays').toEqual({
        userToDoListItemDto: expect.any(Array),
        customToDoListItemDto: expect.any(Array),
      });
      const text = `API task ${created.id}`;
      const added = await habitClient.updateToDoLists(
        created.id,
        {
          ...lists,
          customToDoListItemDto: [{ text, status: 'INPROGRESS' }],
        },
        language
      );
      expect(added.status(), 'Adding custom task should succeed').toBe(200);
      const getAdded = await habitClient.getToDoLists(created.id, language);
      expect(getAdded.status(), 'Updated to-do lists should be available').toBe(200);
      const updated = (await getAdded.json()) as HabitToDoLists;
      expect(
        updated.customToDoListItemDto,
        'New item should have a generated ID and requested state'
      ).toEqual([{ id: expect.any(Number), text, status: 'INPROGRESS' }]);
      const inprogress = await habitClient.getInprogressToDoLists(language);
      expect(inprogress.status(), 'Inprogress to-do lists should be available').toBe(200);
      expect(await inprogress.json(), 'Inprogress lists should include the test task').toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            customToDoListItemDto: expect.arrayContaining([
              expect.objectContaining({ text, status: 'INPROGRESS' }),
            ]),
          }),
        ])
      );
      const completed = await habitClient.updateToDoLists(
        created.id,
        {
          ...updated,
          customToDoListItemDto: updated.customToDoListItemDto.map((item) => ({
            ...item,
            status: 'DONE',
          })),
        },
        language
      );
      expect(completed.status(), 'Completing custom task should succeed').toBe(200);
      const getCompleted = await habitClient.getToDoLists(created.id, language);
      expect(getCompleted.status(), 'Completed to-do list should be available').toBe(200);
      expect(
        (await getCompleted.json()).customToDoListItemDto,
        'DONE status should be persisted'
      ).toEqual([{ ...updated.customToDoListItemDto[0], status: 'DONE' }]);
      const removed = await habitClient.updateToDoLists(
        created.id,
        { ...lists, customToDoListItemDto: [] },
        language
      );
      expect(removed.status(), 'Removing custom task should succeed').toBe(200);
      const getRemoved = await habitClient.getToDoLists(created.id, language);
      expect(getRemoved.status(), 'To-do list after removal should be available').toBe(200);
      expect(
        (await getRemoved.json()).customToDoListItemDto,
        'Omitted custom task should be removed'
      ).toEqual([]);
    });

    test('TC-API-HA-LIFECYCLE-07 GET /habit/assign/{habitAssignId}/friends/habit-duration-info - should return 404 when no friends track the assignment', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment(customProperties);
      await expectError(await habitClient.getFriendsDuration(created.id), 404);
    });

    test('TC-API-HA-LIFECYCLE-08 DELETE /habit/assign/delete/{habitAssignId} - should remove the assignment from detail and active lookups', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      const response = await habitClient.deleteAssignment(created.id);
      expect(response.status(), 'Deleting the test assignment should succeed').toBe(200);
      await expectError(await habitClient.getAssignment(created.id, language), 404);
      await expectError(await habitClient.getActiveAssignment(created.habitId, language), 404);
    });
  });
}
