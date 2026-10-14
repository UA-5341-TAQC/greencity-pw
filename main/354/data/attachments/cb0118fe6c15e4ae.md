# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-14-event-details-back-navigation.spec.ts >> TC-14: Verify navigation from Event Details back to Events >> returns the authenticated user to the Events list
- Location: tests/ui/tc-14-event-details-back-navigation.spec.ts:5:3

# Error details

```
Error: apiRequestContext.post: getaddrinfo EAI_AGAIN greencity-user.greencity.cx.ua
Call log:
  - → POST https://greencity-user.greencity.cx.ua/ownSecurity/signIn
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/153.0.8010.12 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 91

```

# Test source

```ts
  1  | import { test, type APIRequestContext } from '@playwright/test';
  2  | import env from '@/config/env';
  3  | 
  4  | import type { AuthSessionData, SignInCredentials } from '@/types';
  5  | 
  6  | export type { AuthSessionData, SignInCredentials };
  7  | 
  8  | /**
  9  |  * Performs authentication via the GreenCity User REST API.
  10 |  * Returns auth tokens and user information without UI interaction.
  11 |  */
  12 | export async function signInViaApi(
  13 |   request: APIRequestContext,
  14 |   credentials?: SignInCredentials
  15 | ): Promise<AuthSessionData> {
  16 |   return await test.step('API: Sign in via user service', async () => {
  17 |     const email = credentials?.email || env.USER_EMAIL;
  18 |     const password = credentials?.password || env.USER_PASSWORD;
  19 | 
> 20 |     const response = await request.post(`${env.API_USER_BASE_URL}/ownSecurity/signIn`, {
     |                                    ^ Error: apiRequestContext.post: getaddrinfo EAI_AGAIN greencity-user.greencity.cx.ua
  21 |       data: {
  22 |         email,
  23 |         password,
  24 |         projectName: 'GREENCITY',
  25 |       },
  26 |     });
  27 | 
  28 |     if (!response.ok()) {
  29 |       throw new Error(
  30 |         `API sign in failed with status ${response.status()}: ${await response.text()}`
  31 |       );
  32 |     }
  33 | 
  34 |     return (await response.json()) as AuthSessionData;
  35 |   });
  36 | }
  37 | 
```