import { test, expect } from '@/fixtures/habit-assign-fixture';
import { expectBadRequest, readAssignment } from '@/helpers/habit-assign/assertions';
import { customProperties, language } from '@/helpers/habit-assign/test-data';

export function registerPayloadTests(): void {
  test.describe('Request body validation', () => {
    const invalidCustomProperties = [
      { name: 'duration below minimum', properties: { duration: 6, isPrivate: true } },
      { name: 'duration above maximum', properties: { duration: 57, isPrivate: true } },
      { name: 'negative duration', properties: { duration: -1, isPrivate: true } },
      { name: 'missing duration', properties: { isPrivate: true } },
      { name: 'null duration', properties: { duration: null, isPrivate: true } },
      { name: 'missing privacy flag', properties: { duration: 7 } },
      { name: 'null privacy flag', properties: { duration: 7, isPrivate: null } },
      { name: 'wrong duration type', properties: { duration: 'not-a-number', isPrivate: true } },
    ];
    for (const { name, properties } of invalidCustomProperties) {
      test(`TC-API-HA-PAYLOAD-01-${name.replaceAll(' ', '-')} POST /habit/assign/{habitId}/custom - should return 400 for ${name} without creating an assignment`, async ({
        habitClient,
        assignmentFactory,
      }) => {
        const before = await habitClient.getCurrentUserAssignments(language);
        expect(before.status(), 'Existing assignments should be available').toBe(200);
        const beforeIds = (await before.json()).map((item: { id: number }) => item.id).sort();
        const response = await assignmentFactory.attemptCustom({
          ...customProperties,
          habitAssignPropertiesDto: properties,
        });
        const after = await habitClient.getCurrentUserAssignments(language);
        expect(after.status(), 'Assignments should remain available after invalid creation').toBe(
          200
        );
        expect(
          (await after.json()).map((item: { id: number }) => item.id).sort(),
          'Invalid custom payload must not create an assignment'
        ).toEqual(beforeIds);
        await expectBadRequest(response);
      });
    }

    for (const { name, item } of [
      { name: 'empty text', item: { text: '', status: 'INPROGRESS' } },
      { name: 'missing text', item: { status: 'INPROGRESS' } },
      { name: 'null text', item: { text: null, status: 'INPROGRESS' } },
      { name: 'unknown status', item: { text: 'API validation task', status: 'NOT_A_STATUS' } },
      { name: 'null status', item: { text: 'API validation task', status: null } },
    ]) {
      test(`TC-API-HA-PAYLOAD-02-${name.replaceAll(' ', '-')} PUT /habit/assign/{habitAssignId}/allUserAndCustomList - should return 400 for ${name} without persisting the task`, async ({
        habitClient,
        createAssignment,
      }) => {
        const created = await createAssignment(customProperties);
        const response = await habitClient.rawUpdateToDoLists(
          created.id,
          {
            userToDoListItemDto: [],
            customToDoListItemDto: [item],
          },
          language
        );
        await expectBadRequest(response);
        const lists = await habitClient.getToDoLists(created.id, language);
        expect(lists.status(), 'Lists should remain readable after rejection').toBe(200);
        expect(
          (await lists.json()).customToDoListItemDto,
          'Invalid item must not be persisted'
        ).toEqual([]);
        const persisted = await readAssignment(
          await habitClient.getAssignment(created.id, language)
        );
        expect(persisted.workingDays, 'Invalid to-do update must not change progress').toBe(0);
      });
    }
  });
}
