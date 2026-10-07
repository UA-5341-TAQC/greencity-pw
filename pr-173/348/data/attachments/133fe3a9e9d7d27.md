# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/tc-12-like-event.spec.ts >> Event Details >> TC-12] [Event Details] Like event
- Location: tests/ui/tc-12-like-event.spec.ts:33:3

# Error details

```
Error: apiRequestContext.post: getaddrinfo EAI_AGAIN greencity-user.greencity.cx.ua
Call log:
  - → POST https://greencity-user.greencity.cx.ua/ownSecurity/signIn
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:155.0) Gecko/20100101 Firefox/155.0
    - accept: */*
    - accept-encoding: gzip,deflate,br
    - content-type: application/json
    - content-length: 91

```

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: "unliked"
Received: "unknown"

Call Log:
- Timeout 10000ms exceeded while waiting on the predicate
```

# Test source

```ts
  1  | import { test, expect } from '@/fixtures';
  2  | 
  3  | test.describe('Event Details', () => {
  4  |   const EVENT_ID = 222;
  5  |   const LIKE_DEF = 0;
  6  | 
  7  |   test.beforeEach(async ({ authenticatedPage, eventDetailsPage }) => {
  8  |     await authenticatedPage.waitForLoadState('domcontentloaded');
  9  |     await expect(eventDetailsPage.header.userMenuDropdown).toBeVisible();
  10 |     await expect(authenticatedPage).toHaveURL(/.*greenCity.*/);
  11 | 
  12 |     await eventDetailsPage.navigateToEventDetails(EVENT_ID);
  13 |     await eventDetailsPage.waitForDetailsPage();
  14 | 
  15 |     if ((await eventDetailsPage.getLikeState()) === 'liked') {
  16 |       await eventDetailsPage.clickLike();
  17 |     }
  18 | 
  19 |     await expect.poll(async () => await eventDetailsPage.getLikeState()).toBe('unliked');
  20 | 
  21 |     await expect.poll(async () => await eventDetailsPage.getLikeCount()).toBe(LIKE_DEF);
  22 |   });
  23 | 
  24 |   test.afterEach(async ({ eventDetailsPage }) => {
  25 |     if ((await eventDetailsPage.getLikeState()) === 'liked') {
  26 |       await eventDetailsPage.clickLike();
  27 |     }
  28 | 
> 29 |     await expect.poll(async () => await eventDetailsPage.getLikeState()).toBe('unliked');
     |                                                                          ^ Error: expect(received).toBe(expected) // Object.is equality
  30 |     await expect.poll(async () => await eventDetailsPage.getLikeCount()).toBe(LIKE_DEF);
  31 |   });
  32 | 
  33 |   test('TC-12] [Event Details] Like event', async ({ eventDetailsPage }) => {
  34 |     await test.step('1.Verify the Like icon.', async () => {
  35 |       expect(await eventDetailsPage.isLikeEnabled()).toBe(true);
  36 |       expect(await eventDetailsPage.isLikeVisible()).toBe(true);
  37 |     });
  38 | 
  39 |     await test.step('2.Note the current number of likes.', async () => {
  40 |       expect(await eventDetailsPage.isCountLikeVisible()).toBe(true);
  41 |     });
  42 | 
  43 |     await test.step('3.Click the Like icon.', async () => {
  44 |       await eventDetailsPage.clickLike();
  45 |     });
  46 | 
  47 |     await test.step('4.Verify the Like icon state.', async () => {
  48 |       const likeState = await eventDetailsPage.getLikeState();
  49 |       const expLikeState = 'liked';
  50 |       expect(likeState).toBe(expLikeState);
  51 |       expect(await eventDetailsPage.isLiked()).toBe(true);
  52 |     });
  53 | 
  54 |     await test.step('5.	Verify the number of likes.', async () => {
  55 |       await expect.poll(async () => await eventDetailsPage.getLikeCount()).toBe(LIKE_DEF + 1);
  56 |     });
  57 |   });
  58 | });
  59 | 
```