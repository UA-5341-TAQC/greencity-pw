import { test, expect } from '@/fixtures/habit-assign-fixture';
import { readAssignment, expectError, expectBadRequest } from '@/helpers/habit-assign/assertions';
import { language } from '@/helpers/habit-assign/test-data';
import type { HabitAssignStatus } from '@/types';

export function registerStatusTests(): void {
  test.describe('Status transitions', () => {
    const statuses: HabitAssignStatus[] = [
      'INPROGRESS',
      'ACQUIRED',
      'CANCELLED',
      'EXPIRED',
      'REQUESTED',
    ];
    for (const status of statuses) {
      test(`TC-API-HA-STATUS-01-${status} PATCH /habit/assign/{habitAssignId} - should persist status=${status}`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment();

        await test.step(`Change status to ${status} through the public PATCH endpoint`, async () => {
          const response = await habitClient.updateStatus(created.id, status);
          expect(response.status(), 'Declared enum value should be accepted').toBe(200);
          expect(
            await response.json(),
            'Response should identify the changed record and state'
          ).toEqual(
            expect.objectContaining({
              id: created.id,
              habitId: created.habitId,
              userId: created.userId,
              status,
            })
          );
        });

        const persisted = await readAssignment(
          await habitClient.getAssignment(created.id, language)
        );
        expect(persisted.status, 'Requested enum value should be persisted').toBe(status);
        expect(persisted.workingDays, 'Status-only update should preserve progress').toBe(0);
        expect(persisted.duration, 'Status-only update should preserve duration').toBe(
          created.duration
        );
      });
    }

    for (const status of ['ACQUIRED', 'CANCELLED', 'EXPIRED', 'REQUESTED'] as const) {
      test(`TC-API-HA-STATUS-02-${status} PUT /habit/assign/{habitAssignId}/update-habit-duration - should return 409 for status=${status}`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment();
        const setup = await habitClient.updateStatus(created.id, status);
        expect(setup.status(), 'Precondition status update should succeed').toBe(200);
        await expectError(await habitClient.updateDuration(created.id, 7), 409);
        const persisted = await readAssignment(
          await habitClient.getAssignment(created.id, language)
        );
        expect(persisted.status, 'Rejected update should preserve status').toBe(status);
        expect(persisted.duration, 'Rejected update should preserve duration').toBe(
          created.duration
        );
      });
    }

    for (const duration of [7, 56]) {
      test(`TC-API-HA-STATUS-03-${duration} PUT /habit/assign/{habitAssignId}/update-status-and-duration - should accept an owned REQUESTED assignment with duration=${duration}`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment();
        // Prepare REQUESTED through PATCH to isolate acceptance from invitations.
        const setup = await habitClient.updateStatus(created.id, 'REQUESTED');
        expect(setup.status(), 'Own assignment should enter REQUESTED through PATCH').toBe(200);

        const response = await test.step('Accept REQUESTED assignment with selected duration', () =>
          habitClient.updateStatusAndDuration(created.id, duration, language));

        expect(response.status(), 'Acceptance should succeed').toBe(200);
        expect(
          await response.json(),
          'Acceptance should change state and duration together'
        ).toEqual(
          expect.objectContaining({
            habitAssignId: created.id,
            userId: created.userId,
            habitId: created.habitId,
            status: 'INPROGRESS',
            duration,
            workingDays: 0,
          })
        );
        const persisted = await readAssignment(
          await habitClient.getAssignment(created.id, language)
        );
        expect(persisted.status, 'Accepted state should be persisted').toBe('INPROGRESS');
        expect(persisted.duration, 'Accepted duration should be persisted').toBe(duration);
      });
    }

    for (const { name, data } of [
      { name: 'missing status', data: {} },
      { name: 'null status', data: { status: null } },
      { name: 'unknown status', data: { status: 'NOT_A_STATUS' } },
      { name: 'wrong status type', data: { status: 42 } },
    ]) {
      test(`TC-API-HA-STATUS-04-${name.replaceAll(' ', '-')} PATCH /habit/assign/{habitAssignId} - should return 400 for ${name} and preserve state`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment();
        await expectBadRequest(await habitClient.rawUpdateStatus(created.id, data));
        const persisted = await readAssignment(
          await habitClient.getAssignment(created.id, language)
        );
        expect(persisted.status, 'Invalid payload should preserve state').toBe('INPROGRESS');
        expect(persisted.duration, 'Invalid payload should preserve duration').toBe(
          created.duration
        );
      });
    }
  });
}
