import { test, expect, type APIResponse } from '@playwright/test';
import type { HabitAssignment } from '@/types';

/** Validates an existing HTTP 200 response, attaches its JSON to the report and returns the parsed assignment. */
export async function readAssignment(response: APIResponse): Promise<HabitAssignment> {
  return test.step('Verify assignment contract and progress invariants', async () => {
    expect(response.status(), 'Assignment request should succeed').toBe(200);
    const body = (await response.json()) as HabitAssignment;
    expect(body, 'Assignment should expose typed identity, state and progress').toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        userId: expect.any(Number),
        status: expect.stringMatching(/^(INPROGRESS|ACQUIRED|CANCELLED|EXPIRED|REQUESTED)$/),
        duration: expect.any(Number),
        workingDays: expect.any(Number),
        createDateTime: expect.any(String),
        habitStatusCalendarDtoList: expect.any(Array),
      })
    );
    expect(Number.isInteger(body.id), 'Assignment ID should be an integer').toBe(true);
    expect(body.id, 'Assignment ID should be positive').toBeGreaterThan(0);
    expect(body.duration, 'Duration should respect the minimum').toBeGreaterThanOrEqual(7);
    expect(body.duration, 'Duration should respect the maximum').toBeLessThanOrEqual(56);
    expect(body.workingDays, 'Working days should not be negative').toBeGreaterThanOrEqual(0);
    expect(
      Number.isNaN(Date.parse(body.createDateTime)),
      'Creation timestamp should be valid'
    ).toBe(false);
    expect(Number.isInteger(body.duration), 'Duration should be an integer').toBe(true);
    expect(Number.isInteger(body.workingDays), 'Working days should be an integer').toBe(true);
    expect(Number.isInteger(body.habitStreak), 'Streak should be an integer').toBe(true);
    expect(body.habitStreak, 'Streak should not be negative').toBeGreaterThanOrEqual(0);
    expect([null, true, false], 'Notification flag should be boolean or null').toContain(
      body.progressNotificationHasDisplayed
    );
    for (const entry of body.habitStatusCalendarDtoList) {
      expect(entry, 'Calendar entry should expose a positive ID and ISO date').toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          enrollDate: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
        })
      );
      expect(entry.id, 'Calendar ID should be positive').toBeGreaterThan(0);
    }
    if (body.habit !== null) {
      expect(body.habit, 'Assigned habit should expose typed identity and translation').toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          defaultDuration: expect.any(Number),
          habitTranslation: expect.objectContaining({ name: expect.any(String) }),
        })
      );
      expect(body.habit.id, 'Habit ID should be positive').toBeGreaterThan(0);
    }
    if (body.lastEnrollmentDate !== null) {
      expect(
        Number.isNaN(Date.parse(body.lastEnrollmentDate)),
        'Last enrollment timestamp should be valid'
      ).toBe(false);
    }
    if (body.friendsIdsTrackingHabit !== null) {
      expect(
        Array.isArray(body.friendsIdsTrackingHabit),
        'Tracking friends should be an array'
      ).toBe(true);
      for (const id of body.friendsIdsTrackingHabit) {
        expect(
          Number.isInteger(id) && id > 0,
          'Tracking friend ID should be a positive integer'
        ).toBe(true);
      }
    }
    await test.info().attach('Assignment response', {
      body: JSON.stringify(body, null, 2),
      contentType: 'application/json',
    });
    return body;
  });
}

export async function expectError(response: APIResponse, status: number): Promise<void> {
  await test.step(`Verify HTTP ${status} domain error`, async () => {
    expect(response.status(), 'API should reject the invalid request').toBe(status);
    expect(await response.json(), 'Error should contain a nonempty message').toEqual(
      expect.objectContaining({ message: expect.stringMatching(/\S/) })
    );
  });
}

/** Accepts HTTP 400 diagnostics as a field-error array or an object with a message/detail field. */
export async function expectBadRequest(response: APIResponse): Promise<void> {
  await test.step('Verify HTTP 400 validation error and diagnostic body', async () => {
    expect(response.status(), 'Invalid input should be rejected before mutation').toBe(400);
    const body = await response.json();
    expect(body, 'Validation response should be an object or field-error array').toBeTruthy();
    if (Array.isArray(body)) {
      expect(body.length, 'Field errors should not be empty').toBeGreaterThan(0);
      for (const error of body) {
        expect(error, 'Field error should identify the field and reason').toEqual(
          expect.objectContaining({
            name: expect.any(String),
            message: expect.stringMatching(/\S/),
          })
        );
      }
    } else {
      expect(body.message ?? body.detail, 'Error should contain a diagnostic message').toEqual(
        expect.stringMatching(/\S/)
      );
    }
  });
}
