import { test, expect } from '@/fixtures/habit-assign-fixture';
import { HabitAssignClient } from '@/api';
import { readAssignment, expectError } from '@/helpers/habit-assign/assertions';
import { customProperties, language, today } from '@/helpers/habit-assign/test-data';

export function registerCreationTests(): void {
  test.describe('Creation and reads', () => {
    test('TC-API-HA-CREATION-01 POST /habit/assign/{habitId} - should create an assignment and persist translations for lang=en,uk', async ({
      habitClient,
      createAssignment,
      authSession,
    }) => {
      const created = await createAssignment();
      expect(
        created,
        'Default assignment should start with zero progress for the logged-in user'
      ).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          habitId: expect.any(Number),
          userId: authSession.userId,
          status: 'INPROGRESS',
          workingDays: 0,
          habitStreak: 0,
          progressNotificationHasDisplayed: false,
        })
      );
      for (const lang of ['en', 'uk']) {
        const body = await readAssignment(
          await habitClient.getAssignment(created.id, { params: { lang } })
        );
        expect(body.id, 'GET should return the newly created assignment').toBe(created.id);
        expect(body.duration, 'Default duration should be persisted').toBe(created.duration);
        expect(body.habit, 'Habit identity and translation should match the request').toEqual(
          expect.objectContaining({
            id: created.habitId,
            habitTranslation: expect.objectContaining({ languageCode: lang }),
          })
        );
      }
    });

    for (const duration of [7, 56]) {
      test(`TC-API-HA-CREATION-02-${duration} POST /habit/assign/{habitId}/custom - should persist duration=${duration} and a custom task`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment({
          ...customProperties,
          habitAssignPropertiesDto: { ...customProperties.habitAssignPropertiesDto, duration },
          customToDoListItemList: [{ text: 'API assignment test task' }],
        });
        const body = await readAssignment(await habitClient.getAssignment(created.id, language));
        expect(body.duration, 'Custom duration should be persisted').toBe(duration);
        const lists = await habitClient.getToDoLists(created.id, language);
        expect(lists.status(), 'Custom to-do list should be available').toBe(200);
        expect(
          (await lists.json()).customToDoListItemDto,
          'Custom task should be persisted'
        ).toEqual(
          expect.arrayContaining([
            expect.objectContaining({ text: 'API assignment test task', status: 'ACTIVE' }),
          ])
        );
      });
    }

    test('TC-API-HA-CREATION-03 POST /habit/assign/{habitId} - should return 400 for a duplicate assignment', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      await expectError(await habitClient.assignDefault(created.habitId), 400);
      const body = await readAssignment(
        await habitClient.getActiveAssignment(created.habitId, language)
      );
      expect(body.id, 'Duplicate request should preserve the original assignment').toBe(created.id);
    });

    for (const { caseId, endpoint } of [
      { caseId: '1', endpoint: 'GET /habit/assign/allForCurrentUser' },
      { caseId: '2', endpoint: 'GET /habit/assign/{habitId}/all' },
      { caseId: '3', endpoint: 'GET /habit/assign/active/{date}' },
    ] as const) {
      test(`TC-API-HA-CREATION-04-${caseId} ${endpoint} - should include the created assignment in the list`, async ({
        habitClient,
        createAssignment,
        authSession,
      }) => {
        const created = await createAssignment();
        const responses = {
          'GET /habit/assign/allForCurrentUser': () =>
            habitClient.getCurrentUserAssignments(language),
          'GET /habit/assign/{habitId}/all': () =>
            habitClient.getAssignmentsByHabit(created.habitId, language),
          'GET /habit/assign/active/{date}': () => habitClient.getActiveOnDate(today, language),
        };
        const response = await responses[endpoint]();
        expect(response.status(), 'Assignment list should be available').toBe(200);
        const body = await response.json();
        expect(Array.isArray(body), 'Assignment list should be an array').toBe(true);
        expect(body, 'List should contain the new assignment with its identity and state').toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: created.id,
              userId: authSession.userId,
              status: 'INPROGRESS',
              habit: expect.objectContaining({ id: created.habitId }),
            }),
          ])
        );
      });
    }

    test('TC-API-HA-CREATION-05 GET /habit/assign/{habitAssignId}/more - should return assigned habit details', async ({
      habitClient,
      createAssignment,
    }) => {
      const created = await createAssignment();
      const response = await habitClient.getHabitDetails(created.id, language);
      expect(response.status(), 'Habit details should be available').toBe(200);
      expect(await response.json(), 'Details should identify the assigned habit').toEqual(
        expect.objectContaining({
          id: created.habitId,
          defaultDuration: created.duration,
          habitTranslation: expect.objectContaining({
            name: expect.any(String),
            languageCode: 'en',
          }),
        })
      );
    });

    const paginatedReads = [
      {
        caseId: '1',
        endpoint: 'GET /habit/assign/myHabits/{userId}',
        getPage: (client: HabitAssignClient, userId: number) => client.getMyHabits(userId),
      },
      {
        caseId: '2',
        endpoint: 'GET /habit/assign/allMutualHabits/{userId}',
        getPage: (client: HabitAssignClient, userId: number) => client.getMutualHabits(userId),
      },
      {
        caseId: '3',
        endpoint: 'GET /habit/assign/allUser/{userId}',
        getPage: (client: HabitAssignClient, userId: number) =>
          client.getUserAssignments(userId, language),
      },
    ];
    for (const { caseId, endpoint, getPage } of paginatedReads) {
      test(`TC-API-HA-CREATION-06-${caseId} ${endpoint} - should return a valid page for the current user`, async ({
        habitClient,
        authSession,
      }) => {
        const response = await getPage(habitClient, authSession.userId);
        expect(response.status(), 'Paginated habits should be available').toBe(200);
        const body = await response.json();
        expect(body, 'Page should expose pagination fields with their runtime types').toEqual(
          expect.objectContaining({
            page: expect.any(Array),
            totalElements: expect.any(Number),
            currentPage: expect.any(Number),
            totalPages: expect.any(Number),
            number: expect.any(Number),
            hasPrevious: expect.any(Boolean),
            hasNext: expect.any(Boolean),
            first: expect.any(Boolean),
            last: expect.any(Boolean),
          })
        );
        expect(
          body.totalElements,
          'Total should include at least this page'
        ).toBeGreaterThanOrEqual(body.page.length);
        for (const item of body.page) {
          expect(item, 'Preview should include typed identity, habit and progress').toEqual(
            expect.objectContaining({
              id: expect.any(Number),
              duration: expect.any(Number),
              status: expect.any(String),
              userId: authSession.userId,
              workingDays: expect.any(Number),
              habit: expect.objectContaining({ id: expect.any(Number) }),
            })
          );
        }
      });
    }

    for (const { caseId, endpoint } of [
      { caseId: '1', endpoint: 'GET /habit/assign/allUser/{userId}' },
      { caseId: '2', endpoint: 'GET /habit/assign/allMutualHabits/{userId}' },
    ] as const) {
      test(`TC-API-HA-CREATION-07-${caseId} ${endpoint} - should include the created assignment in the current user page`, async ({
        habitClient,
        createAssignment,
        authSession,
      }) => {
        const created = await createAssignment();
        const reads = {
          'GET /habit/assign/allUser/{userId}': () =>
            habitClient.getUserAssignments(authSession.userId, {
              params: { lang: 'en', size: 100 },
            }),
          'GET /habit/assign/allMutualHabits/{userId}': () =>
            habitClient.getMutualHabits(authSession.userId, { params: { size: 100 } }),
        };
        const response = await reads[endpoint]();
        expect(response.status(), 'Seeded preview page should be available').toBe(200);
        const body = await response.json();
        expect(
          body.page,
          'Preview page should include the assignment created in this test'
        ).toEqual(
          expect.arrayContaining([
            expect.objectContaining({
              id: created.id,
              userId: created.userId,
              status: 'INPROGRESS',
              duration: created.duration,
              workingDays: 0,
              habit: expect.objectContaining({ id: created.habitId }),
            }),
          ])
        );
        expect(body.totalElements, 'Seeded page should not be empty').toBeGreaterThan(0);
      });
    }
  });
}
