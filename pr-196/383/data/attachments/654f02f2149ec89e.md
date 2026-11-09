# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/user.spec.ts >> User Controller API >> GET /users/{id}/location - should return user location
- Location: tests/api/user.spec.ts:7:3

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: 200
Received: 403
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | import { UserClient } from '@/api';
  3  | import { UserStatus } from '@/types';
  4  | import env from '@/config/env';
  5  | 
  6  | test.describe('User Controller API', () => {
  7  |   test('GET /users/{id}/location - should return user location', async ({
  8  |     authorizedClient,
  9  |     authSession,
  10 |   }) => {
  11 |     const userClient = await authorizedClient(UserClient, 'user', env.API_GREENCITY_BASE_URL);
  12 | 
  13 |     const response = await userClient.getUserLocation(authSession.userId);
  14 | 
> 15 |     expect(response.status()).toBe(200);
     |                               ^ Error: expect(received).toBe(expected) // Object.is equality
  16 | 
  17 |     const body = await response.json();
  18 | 
  19 |     expect(body).toEqual(
  20 |       expect.objectContaining({
  21 |         id: expect.any(Number),
  22 |         cityEn: expect.any(String),
  23 |         cityUk: expect.any(String),
  24 |         regionEn: expect.any(String),
  25 |         regionUk: expect.any(String),
  26 |         countryEn: expect.any(String),
  27 |         countryUk: expect.any(String),
  28 |         latitude: expect.any(Number),
  29 |         longitude: expect.any(Number),
  30 |       })
  31 |     );
  32 |   });
  33 | 
  34 |   test('PUT /users/status/{userId} - should change user status', async ({
  35 |     authorizedClient,
  36 |     authSession,
  37 |   }) => {
  38 |     const userClient = await authorizedClient(UserClient, 'user', env.API_GREENCITY_BASE_URL);
  39 | 
  40 |     const response = await userClient.changeUserStatus(authSession.userId, UserStatus.Activated);
  41 | 
  42 |     expect(response.status()).toBe(200);
  43 |   });
  44 | });
  45 | 
```