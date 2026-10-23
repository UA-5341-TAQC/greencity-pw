import { test, expect } from '@/fixtures/habit-assign-fixture';
import { HabitAssignClient } from '@/api';
import env from '@/config/env';
import { protectedEndpoints } from '@/helpers/habit-assign/endpoints';
import { language } from '@/helpers/habit-assign/test-data';

export function registerAuthorizationTests(): void {
  test.describe('Authorization', () => {
    for (const endpoint of protectedEndpoints) {
      test(`TC-API-HA-AUTHORIZATION-01-${endpoint.id} ${endpoint.name} - should return 401 without authentication`, async ({
        request,
      }) => {
        const anonymous = new HabitAssignClient(env.API_GREENCITY_BASE_URL, null, request);
        const response = await endpoint.call(anonymous);
        expect(response.status(), 'Anonymous request should require authentication').toBe(401);
      });
    }

    test('TC-API-HA-AUTHORIZATION-02 GET /habit/assign/allForCurrentUser - should return 401 for an invalid bearer token', async ({
      request,
    }) => {
      const invalid = new HabitAssignClient(env.API_GREENCITY_BASE_URL, 'invalid-token', request);
      const response = await invalid.getCurrentUserAssignments(language);
      expect(response.status(), 'Invalid token should be rejected').toBe(401);
    });
  });
}
