import { test, expect } from '@/fixtures/habit-assign-fixture';
import { HabitAssignClient } from '@/api';
import { protectedEndpoints } from '@/helpers/habit-assign/endpoints';
import { readAssignment, expectError } from '@/helpers/habit-assign/assertions';
import { MISSING_ID, language, today } from '@/helpers/habit-assign/test-data';

export function registerValidationTests(): void {
  test.describe('Missing resources and input validation', () => {
    const missingResourceCases = protectedEndpoints.filter((endpoint) =>
      [
        'POST /habit/assign/{habitId}',
        'POST /habit/assign/{habitId}/custom',
        'GET /habit/assign/{habitAssignId}',
        'GET /habit/assign/{habitId}/active',
        'GET /habit/assign/{habitAssignId}/more',
        'GET /habit/assign/{habitAssignId}/allUserAndCustomList',
        'PUT /habit/assign/{habitAssignId}/allUserAndCustomList',
        'GET /habit/assign/{habitAssignId}/friends/habit-duration-info',
        'PUT /habit/assign/{habitAssignId}/update-habit-duration',
        'PUT /habit/assign/{habitAssignId}/update-status-and-duration',
        'PATCH /habit/assign/{habitAssignId}',
        'PUT /habit/assign/{habitAssignId}/updateProgressNotificationHasDisplayed',
        'POST /habit/assign/{habitAssignId}/enroll/{date}',
        'POST /habit/assign/{habitAssignId}/unenroll/{date}',
        'POST /habit/assign/{habitId}/invite',
        'DELETE /habit/assign/delete/{habitAssignId}',
      ].includes(endpoint.name)
    );
    for (const endpoint of missingResourceCases) {
      test(`TC-API-HA-VALIDATION-01-${endpoint.id} ${endpoint.name} - should return 404 for a missing resource`, async ({
        habitClient,
      }) => {
        await expectError(await endpoint.call(habitClient), 404);
      });
    }

    test('TC-API-HA-VALIDATION-02 GET /habit/assign/confirm/{habitAssignId} - should return 404 for a missing invitation without redirects', async ({
      habitClient,
    }) => {
      await expectError(await habitClient.confirmInvitation(MISSING_ID), 404);
    });

    const durationUpdates = [
      {
        caseId: '1',
        operation: 'PUT /habit/assign/{habitAssignId}/update-habit-duration',
        updateDuration: (client: HabitAssignClient, id: number, duration: number) =>
          client.updateDuration(id, duration),
      },
      {
        caseId: '2',
        operation: 'PUT /habit/assign/{habitAssignId}/update-status-and-duration',
        updateDuration: (client: HabitAssignClient, id: number, duration: number) =>
          client.updateStatusAndDuration(id, duration, language),
      },
    ];
    for (const duration of [6, 57]) {
      for (const { caseId, operation, updateDuration } of durationUpdates) {
        test(`TC-API-HA-VALIDATION-03-${caseId}-${duration} ${operation} - should return 400 for duration=${duration} and preserve state`, async ({
          habitClient,
          createAssignment,
        }) => {
          const created = await createAssignment();
          const response = await updateDuration(habitClient, created.id, duration);
          await expectError(response, 400);
          const body = await readAssignment(await habitClient.getAssignment(created.id, language));
          expect(body.duration, 'Invalid duration must not change persisted value').toBe(
            created.duration
          );
          expect(body.status, 'Invalid duration must not change persisted state').toBe(
            'INPROGRESS'
          );
        });
      }
    }

    for (const { caseId, operation } of [
      { caseId: '1', operation: 'GET /habit/assign/active/{date}' },
      { caseId: '2', operation: 'GET /habit/assign/activity/{from}/to/{to}' },
      { caseId: '3', operation: 'POST /habit/assign/{habitAssignId}/enroll/{date}' },
      { caseId: '4', operation: 'POST /habit/assign/{habitAssignId}/unenroll/{date}' },
    ] as const) {
      test(`TC-API-HA-VALIDATION-04-${caseId} ${operation} - should return 400 for a malformed date`, async ({
        habitClient,
      }) => {
        const calls = {
          'GET /habit/assign/active/{date}': () =>
            habitClient.getActiveOnDate('not-a-date', language),
          'GET /habit/assign/activity/{from}/to/{to}': () =>
            habitClient.getActivity('not-a-date', today, language),
          'POST /habit/assign/{habitAssignId}/enroll/{date}': () =>
            habitClient.enroll(MISSING_ID, 'not-a-date', language),
          'POST /habit/assign/{habitAssignId}/unenroll/{date}': () =>
            habitClient.unenroll(MISSING_ID, 'not-a-date'),
        };
        await expectError(await calls[operation](), 400);
      });
    }

    test('TC-API-HA-VALIDATION-05 PUT /habit/assign/{habitAssignId}/update-habit-duration - should return 400 for an empty duration parameter', async ({
      habitClient,
    }) => {
      const response = await habitClient.updateDuration(MISSING_ID, 7, {
        params: { duration: '' },
      });
      expect(response.status(), 'Empty duration should be rejected before resource lookup').toBe(
        400
      );
      expect(await response.json(), 'Binding error should describe the required parameter').toEqual(
        expect.objectContaining({
          status: 400,
          title: 'Bad Request',
          detail: "Required parameter 'duration' is not present.",
        })
      );
    });
  });
}
