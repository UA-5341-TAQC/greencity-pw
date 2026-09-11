import { test, expect, type APIRequestContext, type APIResponse } from '@playwright/test';

import { AuthApi } from '../../src/api/auth.api';

test.describe('Auth API sample tests', () => {
  test('builds request to sign-in endpoint', async () => {
    const mockedResponse = {
      ok: () => true,
      status: () => 200
    } as unknown as APIResponse;

    let requestPayload: { email: string; password: string } | undefined;

    const mockedRequest = {
      post: async (_url: string, options: { data: { email: string; password: string } }) => {
        requestPayload = options.data;
        return mockedResponse;
      }
    } as unknown as APIRequestContext;

    const authApi = new AuthApi(mockedRequest, 'https://www.greencity.cx.ua');
    const response = await authApi.login('student@example.com', 'password123');

    expect(requestPayload).toEqual({
      email: 'student@example.com',
      password: 'password123'
    });
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});
