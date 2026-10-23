import { test, expect } from '@/fixtures/habit-assign-fixture';
import { readAssignment, expectError } from '@/helpers/habit-assign/assertions';
import { calendarDate, customProperties, language, today } from '@/helpers/habit-assign/test-data';

export function registerEnrollmentTests(): void {
  test.describe('Enrollment boundaries and acquisition', () => {
    for (const { name, offset } of [
      { name: 'tomorrow', offset: 1 },
      { name: 'eight days ago', offset: -8 },
    ]) {
      test(`TC-API-HA-ENROLLMENT-01-${name.replaceAll(' ', '-')} POST /habit/assign/{habitAssignId}/enroll/{date} - should return 400 for ${name} and preserve progress`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment();
        await expectError(
          await habitClient.enroll(created.id, calendarDate(offset), language),
          400
        );
        const persisted = await readAssignment(
          await habitClient.getAssignment(created.id, language)
        );
        expect(persisted.workingDays, 'Rejected date should preserve working days').toBe(0);
        expect(
          persisted.habitStatusCalendarDtoList,
          'Rejected date should not create a calendar entry'
        ).toEqual([]);
      });
    }

    test('TC-API-HA-ENROLLMENT-02 POST /habit/assign/{habitAssignId}/enroll/{date} - should accept today minus 7 days and allow undo', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      const date = calendarDate(-7);
      const enrolled = await readAssignment(await habitClient.enroll(created.id, date, language));
      expect(enrolled.workingDays, 'Oldest valid date should increment progress').toBe(1);
      expect(
        enrolled.habitStatusCalendarDtoList,
        'Calendar should include the boundary date'
      ).toEqual([expect.objectContaining({ enrollDate: date })]);
      const undone = await readAssignment(await habitClient.unenroll(created.id, date));
      expect(undone.workingDays, 'Undo should restore progress').toBe(0);
      expect(undone.habitStatusCalendarDtoList, 'Undo should remove the boundary date').toEqual([]);
    });

    test('TC-API-HA-ENROLLMENT-03 POST /habit/assign/{habitAssignId}/unenroll/{date} - should return 404 for a date without enrollment', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      await expectError(await habitClient.unenroll(created.id, today), 404);
      const persisted = await readAssignment(await habitClient.getAssignment(created.id, language));
      expect(persisted.workingDays, 'Working days must not become negative').toBe(0);
      expect(persisted.habitStatusCalendarDtoList, 'Calendar should remain empty').toEqual([]);
    });

    test('TC-API-HA-ENROLLMENT-04 POST /habit/assign/{habitAssignId}/enroll/{date} - should acquire a 7-day habit and reject progress beyond its duration', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment(customProperties);
      for (let index = 0; index < 7; index++) {
        const date = calendarDate(index - 6);

        await test.step(`Enroll day ${index + 1} of 7 (${date})`, async () => {
          const enrolled = await readAssignment(
            await habitClient.enroll(created.id, date, language)
          );
          expect(enrolled.workingDays, 'Each unique date should increment progress once').toBe(
            index + 1
          );
          expect(enrolled.status, 'Acquisition should happen only at the duration boundary').toBe(
            index === 6 ? 'ACQUIRED' : 'INPROGRESS'
          );
        });
      }
      const persisted = await readAssignment(await habitClient.getAssignment(created.id, language));
      expect(persisted.status, 'Completed habit should remain acquired').toBe('ACQUIRED');
      expect(persisted.workingDays, 'Completed habit should have exactly seven working days').toBe(
        7
      );
      expect(
        persisted.habitStatusCalendarDtoList,
        'Every enrollment should be persisted'
      ).toHaveLength(7);
      expect(
        new Set(persisted.habitStatusCalendarDtoList.map((entry) => entry.enrollDate)).size,
        'Calendar should not contain duplicate dates'
      ).toBe(7);
      expect(
        persisted.habitStreak,
        'Consecutive days through today should produce a seven-day streak'
      ).toBe(7);
      // An unused eighth date is still inside the allowed date window.
      await expectError(await habitClient.enroll(created.id, calendarDate(-7), language), 400);
      const afterRejected = await readAssignment(
        await habitClient.getAssignment(created.id, language)
      );
      expect(afterRejected.workingDays, 'Progress must not exceed duration').toBe(7);
    });
  });
}
