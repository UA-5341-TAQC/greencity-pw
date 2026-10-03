import { expect } from '@playwright/test';
import { test } from '@/fixtures/auth-fixture';
import { UserClient } from '@/api/user-client';
import { UserStatus } from '@/types';
import env from '@/config/env';

test.describe('User Controller API', () => {
  let userClient: UserClient;

  test.beforeEach(async ({ request, authSession }) => {
    userClient = new UserClient(
      env.API_GREENCITY_BASE_URL,
      authSession.accessToken,
      request
    );
  });

  test('GET /users/{id}/location - should return user location', async ({
    authSession,
  }) => {
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

  test('PATCH /users/{userId}/name - should update user name', async ({
    authSession,
  }) => {
    const originalName = authSession.name;
    const newName = `API Test ${Date.now()}`;

    try {
      const response = await userClient.updateUserName(
        authSession.userId,
        newName
      );

      expect(response.status()).toBe(200);
    } finally {
      await userClient.updateUserName(authSession.userId, originalName);
    }
  });

  test('PUT /users/user/picturePath - should update user picture path', async () => {
    const profilePicturePath =
      'https://example.com/test-profile-picture.jpg';

    const response = await userClient.updateUserPicturePath(
      env.USER_EMAIL,
      profilePicturePath
    );

    expect(response.status()).toBe(200);
  });

  test('PUT /users/status/{userId} - should change user status', async ({
    authSession,
  }) => {
    const response = await userClient.changeUserStatus(
      authSession.userId,
      UserStatus.Activated
    );

    expect(response.status()).toBe(200);
  });

  test('POST /users/create - should create user', async () => {
    const timestamp = Date.now();

    const response = await userClient.createUser({
      id: timestamp,
      email: `api.test.${timestamp}@example.com`,
      name: 'API Test User',
      profilePicturePath: '',
    });

    expect(response.status()).toBe(201);

    const body = await response.json();

    expect(body).toBe(true);
  });
});