import { test, expect } from '@/fixtures/habit-assign-fixture';
import { expectError } from '@/helpers/habit-assign/assertions';
import { language } from '@/helpers/habit-assign/test-data';

export function registerLimitsTests(): void {
  test.describe('Active assignment limit', () => {
    test('TC-API-HA-LIMITS-01 POST /habit/assign/{habitId} - should allow 6 active assignments and reject the 7th with 400', async ({
      habitClient,
      assignmentFactory,
    }) => {
      const maximumActive = 6;
      const response = await habitClient.getCurrentUserAssignments(language);
      expect(response.status(), 'Existing assignments should be available').toBe(200);
      const existing = (await response.json()) as { id: number; status: string }[];
      const active = existing.filter((item) => item.status === 'INPROGRESS');
      for (let count = active.length; count < maximumActive; count++) {
        await assignmentFactory.create();
      }
      const atLimit = await habitClient.getCurrentUserAssignments(language);
      expect(atLimit.status(), 'Assignments at the limit should be readable').toBe(200);
      const limitBody = (await atLimit.json()) as { id: number; status: string }[];
      expect(
        limitBody.filter((item) => item.status === 'INPROGRESS'),
        'Six active habits should be allowed'
      ).toHaveLength(maximumActive);
      await expectError(await assignmentFactory.attemptCreate(), 400);
      const after = await habitClient.getCurrentUserAssignments(language);
      expect(after.status(), 'Assignments should remain available after limit rejection').toBe(200);
      expect(
        (await after.json()).map((item: { id: number }) => item.id).sort(),
        'Rejected seventh assignment should not change the list'
      ).toEqual(limitBody.map((item) => item.id).sort());
    });
  });
}
