# Habit Assign API coverage

The suite follows the existing `BaseApiClient` / API client / Playwright fixture pattern used by Events and User tests. `HabitAssignClient` exposes all 25 operations in the deployed [Swagger](https://greencity.greencity.cx.ua/swagger-ui/index.html#/habit-assign-controller). The suite checks runtime response fields and persisted behavior with Playwright assertions; TypeScript interfaces alone do not validate JSON.

## Run

Configure `API_USER_BASE_URL`, `API_GREENCITY_BASE_URL`, `USER_EMAIL` and `USER_PASSWORD` in your local environment, then run:

```bash
npx playwright test tests/api/habit-assign.spec.ts --project=api --workers=1
```

Use a dedicated test account with at least one free active-habit slot and unassigned public habits. Catalog lookup follows pagination. The entry spec registers scenario modules under one sequential `test.describe`, so a shared account is not mutated concurrently even when global `fullyParallel` is enabled. Do not run another process or manual session against this account during the suite.

## Structure and Allure

- `tests/api/habit-assign.spec.ts`: a single sequential entry point with shared Allure labels in `beforeEach`.
- `tests/api/habit-assign/*.suite.ts`: separate groups for creation/reads, lifecycle, authorization, parameter validation, payload validation, enrollment/acquisition, status transitions and the active-habit limit. Playwright `test.describe` groups scenarios; test classes are unnecessary.
- `fixtures/habit-assign-fixture.ts`: on-demand authenticated client, per-test factory and shared worker authentication.
- `helpers/habit-assign/assignment-factory.ts`: `HabitAssignmentFactory` discovers eligible habits, records created IDs, undoes enrollments and attempts every deletion even after an earlier cleanup failure. Invalid creation tests also register unexpectedly created records for cleanup.
- `helpers/habit-assign/assertions.ts`: runtime contracts and domain/validation errors as named verification steps.
- `helpers/habit-assign/test-data.ts` and `endpoints.ts`: shared payloads, calendar dates and endpoint tables.

Each result carries `epic`, `feature`, `story` and `owner` labels, following the existing UI tests. Suite grouping follows Playwright `test.describe`, and titles use `TC-API-HA-<group>-<case> METHOD /route - should ...` with explicit parameter values, following the User API tests. Setup, HTTP operations, key business actions, verification and teardown appear as steps. Assignment JSON and HTTP error bodies are attached; credentials and tokens are not explicitly attached. Allure TestOps IDs are not fabricated: no external case IDs have been provided. The configured reporter generates normal Allure results for this suite.

```bash
npx playwright test tests/api/habit-assign.spec.ts --project=api --workers=1
npm run report
```

The report command shows results already in `allure-results`, which may include earlier runs. Use a fresh result directory when a report must represent only this suite.

Each mutation scenario creates its own assignments. Teardown undoes remaining calendar enrollments before deleting only recorded assignments. Existing account assignments are preserved. An assignment already deleted by its test may return 404 during cleanup. Force-killing the process can prevent teardown. Enrollment/acquisition also invokes server rating/achievement logic; deleting an assignment alone does not promise restoration of all derived account counters.

No successful friend invitation or email confirmation is attempted. These scenarios are deferred by the user until a second controlled account is available. Invitation negative tests use nonexistent IDs. Confirmation requests disable redirects.

## Coverage matrix

Paths below are relative to `/habit/assign`. Every operation except email confirmation has an anonymous 401 check; an invalid bearer token is also checked on `allForCurrentUser`.

| Method and path                                               | Authenticated coverage                                                               |
| ------------------------------------------------------------- | ------------------------------------------------------------------------------------ |
| POST `/{habitId}`                                             | Default creation, initial state, duplicate 400, missing habit 404                    |
| POST `/{habitId}/custom`                                      | Durations 7 and 56, persisted custom task, missing habit 404                         |
| GET `/{habitAssignId}`                                        | Persisted identity/state/progress, English/Ukrainian translation, missing 404        |
| GET `/{habitId}/active`                                       | Created assignment lookup, lookup after deletion, missing 404                        |
| GET `/{habitId}/all`                                          | Includes created assignment                                                          |
| GET `/{habitAssignId}/more`                                   | Habit details and translation, missing 404                                           |
| GET `/allForCurrentUser`                                      | Includes created assignment, excludes cancelled assignment                           |
| GET `/allUser/{userId}`                                       | Page metadata and preview fields                                                     |
| GET `/myHabits/{userId}`                                      | Page metadata and preview fields; page may be empty                                  |
| GET `/allMutualHabits/{userId}`                               | Page metadata and preview fields using the current user's ID                         |
| GET `/active/{date}`                                          | Includes created assignment, malformed date 400                                      |
| GET `/activity/{from}/to/{to}`                                | Enrolled assignment on the requested day, malformed start date 400                   |
| GET `/{habitAssignId}/allUserAndCustomList`                   | Both list groups, persisted mutations, missing 404                                   |
| PUT `/{habitAssignId}/allUserAndCustomList`                   | Add, complete and remove custom task, missing 404                                    |
| GET `/allUserAndCustomToDoListsInprogress`                    | Includes new inprogress custom task                                                  |
| GET `/{habitAssignId}/friends/habit-duration-info`            | No tracking friends 404, missing assignment 404                                      |
| PUT `/{habitAssignId}/update-habit-duration`                  | Persisted 7/56, rejected 6/57 without mutation, empty parameter 400, missing 404     |
| PUT `/{habitAssignId}/update-status-and-duration`             | Non-REQUESTED state 409, rejected 6/57 without mutation, missing 404                 |
| PATCH `/{habitAssignId}`                                      | Persisted CANCELLED state, missing 404                                               |
| PUT `/{habitAssignId}/updateProgressNotificationHasDisplayed` | Persisted true flag, repeated acknowledgement, missing 404                           |
| POST `/{habitAssignId}/enroll/{date}`                         | Calendar and working-day changes, duplicate day 400, malformed date 400, missing 404 |
| POST `/{habitAssignId}/unenroll/{date}`                       | Persisted reversal of enrollment, malformed date 400, missing 404                    |
| POST `/{habitId}/invite`                                      | Missing habit 404; no email sent                                                     |
| GET `/confirm/{habitAssignId}`                                | Missing invitation 404; redirects disabled                                           |
| DELETE `/delete/{habitAssignId}`                              | Deletion verified through assignment and active lookups, missing 404                 |

## Verified server behavior and Swagger differences

Inspected on 2026-10-16 against the deployed services:

- `GET /allUser/{userId}` returns a pageable object containing `page`, although Swagger describes `HabitAssignDto[]`. Tests explicitly validate the deployed pageable shape.
- `PATCH /{habitAssignId}` returns the management shape (`habitId`, `lastEnrollment`), although Swagger references `HabitAssignDto`. Tests check persisted state through a subsequent GET.
- Some DTO properties return `null`, including the habit in an unenroll response and notification flags on older assignments. Response types allow relevant observed nulls.
- Custom tasks created through `/custom` start as `ACTIVE`; tasks explicitly added as `INPROGRESS` through the list-update endpoint preserve that requested status.
- `/update-status-and-duration` requires a `REQUESTED` assignment and returns 409 for an ordinary `INPROGRESS` assignment. Swagger does not list 409.
- Friends duration returns 404 when no friends track the assignment.
- Empty required `duration` produces a problem response with `detail`, `title` and `status`; the tested domain/validation errors use `message`.

## Latest live verification

The final daytime run on 2026-10-20 executed **107 tests: 100 passed and 7 failed**, with one worker and retries disabled. All seven failures reproduce the custom-assignment validation defect below; field-error assertions, lifecycle checks and cleanup steps passed. The final code includes the local case IDs and shared Allure metadata hook.

An earlier run on 2026-10-20 completed with **97 passed and 10 failed**. Three additional enrollment-date failures passed during the daytime rerun without changes to their assertions. The tests calculate dates using Europe/Kyiv; a calendar-day mismatch with the backend is suspected, but its date source and timezone have not been verified. The rerun does not establish reliability around midnight.

Repository-wide TypeScript, ESLint and Prettier checks, plus `git diff --check`, passed. The earlier 2026-10-17 run also had 100 passed and 7 failed; its separate cleanup audit found no active test-owned assignments and confirmed the original assignment remained accessible.

## Confirmed API defect: custom assignment validation

Live runs on 2026-10-17 and 2026-10-20 reproduce HTTP **500** instead of the expected HTTP **400** on `POST /habit/assign/{habitId}/custom` for these nested properties:

| Case                   | `habitAssignPropertiesDto`                |
| ---------------------- | ----------------------------------------- |
| Duration below minimum | `{ "duration": 6, "isPrivate": true }`    |
| Duration above maximum | `{ "duration": 57, "isPrivate": true }`   |
| Negative duration      | `{ "duration": -1, "isPrivate": true }`   |
| Missing duration       | `{ "isPrivate": true }`                   |
| Null duration          | `{ "duration": null, "isPrivate": true }` |
| Missing privacy flag   | `{ "duration": 7 }`                       |
| Null privacy flag      | `{ "duration": 7, "isPrivate": null }`    |

Use an available public habit and an authenticated test user. For example:

```json
{
  "habitAssignPropertiesDto": { "duration": 6, "isPrivate": true },
  "friendsIdsList": [],
  "customToDoListItemList": []
}
```

Swagger specifies a duration from 7 to 56 and requires both `duration` and `isPrivate`. The server responds with an `Internal Server Error` body. The regression tests retain the 400 expectation and therefore remain failing while this API defect exists. Each test also checks that the assignment list did not change. No root cause is inferred from the response alone.

By comparison, malformed PATCH/to-do fields produce HTTP 400 with field errors shaped as `{ "name": "...", "message": "..." }`. A nonnumeric custom duration produces HTTP 400 rather than the 500 above.

## Additional depth

The expanded scenarios use boundary values, equivalence partitions, state transitions and checks that rejected requests preserve state:

- All five declared PATCH status values are persisted and read back. Duration changes in non-INPROGRESS states are rejected.
- Owned assignments are put into REQUESTED through PATCH, then accepted at durations 7 and 56. This isolates acceptance behavior without claiming to exercise invitations.
- Custom payload validation covers out-of-range/negative durations, missing/null fields and a wrong duration type. Status and to-do payloads include missing, null and unknown values.
- Enrollment checks the oldest permitted day (today minus seven days), the excluded day (minus eight), a future day, unenrolling a day with no entry, acquisition after seven distinct accepted dates, consecutive-day streak and rejection past completed duration.
- The account is filled to six active habits using only test-owned records. A seventh creation must be rejected without changing the assignment list.

Rules were cross-checked with the public [service implementation](https://github.com/ita-social-projects/GreenCity/blob/dev/service/src/main/java/greencity/service/HabitAssignServiceImpl.java) and [constants](https://github.com/ita-social-projects/GreenCity/blob/dev/service-api/src/main/java/greencity/constant/AppConstant.java), then tested against the deployed service. Public `dev` is supporting evidence, not proof of the deployed revision.

## Deferred and remaining scenarios

Operation coverage does not mean every business branch is covered. On 2026-10-17, the user explicitly deferred checks requiring a second account: successful invite/confirmation, friends-duration data, distinct-user mutual habits and ownership/403 checks. The acceptance endpoint is exercised using an owned REQUESTED record rather than an invitation.

Full contracts for every nested DTO, every combination of status/history/date, concurrent requests and exhaustive malformed payloads remain outside this suite. No percentage of branch coverage is claimed.

## Zod decision

No Zod dependency is added. Existing tests use Playwright assertions, and this module can verify the required fields, runtime types, boundary values and state changes using that approach. Add shared runtime schemas if the team chooses reusable contract validation across controllers. Agree on response nullability and resolve the documented Swagger drift first. Zod would complement behavioral tests; it would not prove persistence or lifecycle behavior.
