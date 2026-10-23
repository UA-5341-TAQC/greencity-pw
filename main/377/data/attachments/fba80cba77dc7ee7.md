# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/habit-assign.spec.ts >> Habit Assign Controller API >> Request body validation >> TC-API-HA-PAYLOAD-01-null-duration POST /habit/assign/{habitId}/custom - should return 400 for null duration without creating an assignment
- Location: tests/api/habit-assign/payload.suite.ts:18:7

# Error details

```
Error: Invalid input should be rejected before mutation

expect(received).toBe(expected) // Object.is equality

Expected: 400
Received: 500
```

# Test source

```ts
  1   | import { test, expect, type APIResponse } from '@playwright/test';
  2   | import type { HabitAssignment } from '@/types';
  3   | 
  4   | /** Validates an existing HTTP 200 response, attaches its JSON to the report and returns the parsed assignment. */
  5   | export async function readAssignment(response: APIResponse): Promise<HabitAssignment> {
  6   |   return test.step('Verify assignment contract and progress invariants', async () => {
  7   |     expect(response.status(), 'Assignment request should succeed').toBe(200);
  8   |     const body = (await response.json()) as HabitAssignment;
  9   |     expect(body, 'Assignment should expose typed identity, state and progress').toEqual(
  10  |       expect.objectContaining({
  11  |         id: expect.any(Number),
  12  |         userId: expect.any(Number),
  13  |         status: expect.stringMatching(/^(INPROGRESS|ACQUIRED|CANCELLED|EXPIRED|REQUESTED)$/),
  14  |         duration: expect.any(Number),
  15  |         workingDays: expect.any(Number),
  16  |         createDateTime: expect.any(String),
  17  |         habitStatusCalendarDtoList: expect.any(Array),
  18  |       })
  19  |     );
  20  |     expect(Number.isInteger(body.id), 'Assignment ID should be an integer').toBe(true);
  21  |     expect(body.id, 'Assignment ID should be positive').toBeGreaterThan(0);
  22  |     expect(body.duration, 'Duration should respect the minimum').toBeGreaterThanOrEqual(7);
  23  |     expect(body.duration, 'Duration should respect the maximum').toBeLessThanOrEqual(56);
  24  |     expect(body.workingDays, 'Working days should not be negative').toBeGreaterThanOrEqual(0);
  25  |     expect(
  26  |       Number.isNaN(Date.parse(body.createDateTime)),
  27  |       'Creation timestamp should be valid'
  28  |     ).toBe(false);
  29  |     expect(Number.isInteger(body.duration), 'Duration should be an integer').toBe(true);
  30  |     expect(Number.isInteger(body.workingDays), 'Working days should be an integer').toBe(true);
  31  |     expect(Number.isInteger(body.habitStreak), 'Streak should be an integer').toBe(true);
  32  |     expect(body.habitStreak, 'Streak should not be negative').toBeGreaterThanOrEqual(0);
  33  |     expect([null, true, false], 'Notification flag should be boolean or null').toContain(
  34  |       body.progressNotificationHasDisplayed
  35  |     );
  36  |     for (const entry of body.habitStatusCalendarDtoList) {
  37  |       expect(entry, 'Calendar entry should expose a positive ID and ISO date').toEqual(
  38  |         expect.objectContaining({
  39  |           id: expect.any(Number),
  40  |           enrollDate: expect.stringMatching(/^\d{4}-\d{2}-\d{2}$/),
  41  |         })
  42  |       );
  43  |       expect(entry.id, 'Calendar ID should be positive').toBeGreaterThan(0);
  44  |     }
  45  |     if (body.habit !== null) {
  46  |       expect(body.habit, 'Assigned habit should expose typed identity and translation').toEqual(
  47  |         expect.objectContaining({
  48  |           id: expect.any(Number),
  49  |           defaultDuration: expect.any(Number),
  50  |           habitTranslation: expect.objectContaining({ name: expect.any(String) }),
  51  |         })
  52  |       );
  53  |       expect(body.habit.id, 'Habit ID should be positive').toBeGreaterThan(0);
  54  |     }
  55  |     if (body.lastEnrollmentDate !== null) {
  56  |       expect(
  57  |         Number.isNaN(Date.parse(body.lastEnrollmentDate)),
  58  |         'Last enrollment timestamp should be valid'
  59  |       ).toBe(false);
  60  |     }
  61  |     if (body.friendsIdsTrackingHabit !== null) {
  62  |       expect(
  63  |         Array.isArray(body.friendsIdsTrackingHabit),
  64  |         'Tracking friends should be an array'
  65  |       ).toBe(true);
  66  |       for (const id of body.friendsIdsTrackingHabit) {
  67  |         expect(
  68  |           Number.isInteger(id) && id > 0,
  69  |           'Tracking friend ID should be a positive integer'
  70  |         ).toBe(true);
  71  |       }
  72  |     }
  73  |     await test.info().attach('Assignment response', {
  74  |       body: JSON.stringify(body, null, 2),
  75  |       contentType: 'application/json',
  76  |     });
  77  |     return body;
  78  |   });
  79  | }
  80  | 
  81  | export async function expectError(response: APIResponse, status: number): Promise<void> {
  82  |   await test.step(`Verify HTTP ${status} domain error`, async () => {
  83  |     expect(response.status(), 'API should reject the invalid request').toBe(status);
  84  |     expect(await response.json(), 'Error should contain a nonempty message').toEqual(
  85  |       expect.objectContaining({ message: expect.stringMatching(/\S/) })
  86  |     );
  87  |   });
  88  | }
  89  | 
  90  | /** Accepts HTTP 400 diagnostics as a field-error array or an object with a message/detail field. */
  91  | export async function expectBadRequest(response: APIResponse): Promise<void> {
  92  |   await test.step('Verify HTTP 400 validation error and diagnostic body', async () => {
> 93  |     expect(response.status(), 'Invalid input should be rejected before mutation').toBe(400);
      |                                                                                   ^ Error: Invalid input should be rejected before mutation
  94  |     const body = await response.json();
  95  |     expect(body, 'Validation response should be an object or field-error array').toBeTruthy();
  96  |     if (Array.isArray(body)) {
  97  |       expect(body.length, 'Field errors should not be empty').toBeGreaterThan(0);
  98  |       for (const error of body) {
  99  |         expect(error, 'Field error should identify the field and reason').toEqual(
  100 |           expect.objectContaining({
  101 |             name: expect.any(String),
  102 |             message: expect.stringMatching(/\S/),
  103 |           })
  104 |         );
  105 |       }
  106 |     } else {
  107 |       expect(body.message ?? body.detail, 'Error should contain a diagnostic message').toEqual(
  108 |         expect.stringMatching(/\S/)
  109 |       );
  110 |     }
  111 |   });
  112 | }
  113 | 
```