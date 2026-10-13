import { test, expect } from '@/fixtures';
import { UserClient } from '@/api';
import { UserStatus } from '@/types';
import env from '@/config/env';

test.describe('User Controller API', () => {
  test('GET /users/{id}/location - should return user location', async ({
    authorizedClient,
    authSession,
  }) => {
    const userClient = await authorizedClient(UserClient, 'user', env.API_GREENCITY_BASE_URL);

    const response = await userClient.getUserLocation(authSession.userId);

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        cityEn: expect.any(String),
        cityUk: expect.any(String),
        regionEn: expect.any(String),
        regionUk: expect.any(String),
        countryEn: expect.any(String),
        countryUk: expect.any(String),
        latitude: expect.any(Number),
        longitude: expect.any(Number),
      })
    );
  });

  test('PUT /users/status/{userId} - should change user status', async ({
    authorizedClient,
    authSession,
  }) => {
    const userClient = await authorizedClient(UserClient, 'user', env.API_GREENCITY_BASE_URL);

    const response = await userClient.changeUserStatus(authSession.userId, UserStatus.Activated);

    expect(response.status()).toBe(200);
  });
});
