import { test, expect } from '@playwright/test';
import { signInViaApi } from '@/helpers/auth-api';

test.describe('API - Authentication', () => {
  test('Verify API authentication returns valid session data', async ({ request }) => {
    const session = await signInViaApi(request);

    expect(session.userId, 'User ID should be a positive number').toBeGreaterThan(0);
    expect(session.accessToken, 'Access token should not be empty').toBeTruthy();
    expect(session.refreshToken, 'Refresh token should not be empty').toBeTruthy();
    expect(session.name, 'User name should not be empty').toBeTruthy();
  });
});
