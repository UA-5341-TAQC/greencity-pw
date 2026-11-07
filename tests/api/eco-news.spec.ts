import { test, expect } from '@/fixtures';
import { EcoNewsClient } from '@/api';
import type { EcoNewsDetails, EcoNewsPage } from '@/types';

test.describe('Eco News Controller API', () => {
  test.describe.configure({ mode: 'serial' });

  let client: EcoNewsClient;
  let createdEcoNewsId: number | undefined;
  let createdEcoNewsAuthorId: number | undefined;
  let ecoNewsCountBeforeCreation: number | undefined;
  let createdEcoNewsData:
    | {
        title: string;
        text: string;
        tags: string[];
        source: string;
        shortInfo: string;
      }
    | undefined;

  test.beforeEach(async ({ authorizedClient }) => {
    client = await authorizedClient(EcoNewsClient, 'user');
  });

  test.afterAll(async ({ authorizedClient }) => {
    if (createdEcoNewsId === undefined) return;

    const cleanupClient = await authorizedClient(EcoNewsClient, 'user');
    const response = await cleanupClient.deleteEcoNews(createdEcoNewsId);
    const status = response.status();

    if (![200, 404].includes(status)) {
      throw new Error(
        `Eco news cleanup failed for ID ${createdEcoNewsId}: status ${status}, body ${await response.text()}`
      );
    }
  });

  test('GET /eco-news/{ecoNewsId} - should return eco news by id and language', async () => {
    const ecoNewsId = 13959;

    const response = await client.getEcoNewsById(ecoNewsId, 'en');

    expect(response.status(), 'Status code should be 200').toBe(200);

    const body = (await response.json()) as EcoNewsDetails;

    expect(body.id, 'Eco news ID should match').toBe(ecoNewsId);
    expect(body.title, 'Title should not be empty').toBeTruthy();
    expect(body.content, 'Content should not be empty').toBeTruthy();
    expect(body.shortInfo, 'Short info should not be empty').toBeTruthy();
    expect(Date.parse(body.creationDate), 'Creation date should be valid').not.toBeNaN();
    expect(body.author, 'Author should be present').toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      })
    );
    expect(body.likes, 'Likes should be >= 0').toBeGreaterThanOrEqual(0);
    expect(body.dislikes, 'Dislikes should be >= 0').toBeGreaterThanOrEqual(0);
    expect(body.countComments, 'Comments count should be >= 0').toBeGreaterThanOrEqual(0);
    expect(body.hidden, 'Hidden should be boolean').toEqual(expect.any(Boolean));
    expect(body.tagsEn, 'English tags should be an array').toEqual(expect.any(Array));
    expect(body.tagsUk, 'Ukrainian tags should be an array').toEqual(expect.any(Array));
  });

  test('GET /eco-news/{ecoNewsId} - should return 404 for a missing eco news', async () => {
    const response = await client.getEcoNewsById(2147483647, 'en');

    expect(response.status(), 'Status code should be 404').toBe(404);
  });

  test('GET /eco-news/{ecoNewsId} - should return 400 for unsupported language', async () => {
    const ecoNewsId = 13959;

    const response = await client.getEcoNewsById(ecoNewsId, '1');

    expect(response.status(), 'Status code should be 400').toBe(400);

    const body = (await response.json()) as { message: string };

    expect(body.message).toBe("Select correct language: 'en' or 'ua'");
  });

  test('POST /eco-news - should create eco news', async ({ authSession }) => {
    const beforeCountResponse = await client.getEcoNewsCount(authSession.userId);
    expect(beforeCountResponse.status(), 'Author count before creation should be 200').toBe(200);
    ecoNewsCountBeforeCreation = (await beforeCountResponse.json()) as number;

    const ecoNewsData = {
      title: `API Eco News ${Date.now()}`,
      text: 'This is a test news article about environmental protection and recycling.',
      tags: ['News'],
      source: 'https://example.org/',
      shortInfo: 'API eco news test',
    };

    const createResponse = await client.createEcoNews(ecoNewsData);

    expect(createResponse.status(), 'Status code should be 201').toBe(201);

    const created = (await createResponse.json()) as EcoNewsDetails & {
      source: string;
      countOfEcoNews: number;
      favorite: boolean;
    };

    expect(created.id, 'Created eco news ID should be positive').toBeGreaterThan(0);
    expect(created.title, 'Title should match').toBe(ecoNewsData.title);
    expect(created.content, 'Content should match').toBe(ecoNewsData.text);
    expect(created.shortInfo, 'Short info should match').toBe(ecoNewsData.shortInfo);
    expect(created.source, 'Source should match').toBe(ecoNewsData.source);

    expect(created.author, 'Author should be present').toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
      })
    );

    expect(created.tagsEn, 'English tags should contain News').toContain('News');
    expect(created.likes, 'Likes should be 0').toBe(0);
    expect(created.countComments, 'Comments count should be 0').toBe(0);
    expect(created.imagePath, 'Image path should be null').toBeNull();
    expect(created.favorite, 'Favorite should be false').toBe(false);

    createdEcoNewsId = created.id;
    createdEcoNewsAuthorId = created.author.id;
    createdEcoNewsData = ecoNewsData;
  });

  test('GET /eco-news - should find the created eco news with its complete information', async () => {
    expect(createdEcoNewsId, 'Created eco news ID should be available').toBeDefined();
    expect(createdEcoNewsData, 'Created eco news data should be available').toBeDefined();

    const response = await client.findEcoNews({
      tags: createdEcoNewsData!.tags,
      title: createdEcoNewsData!.title,
      page: 0,
      size: 100,
      sort: ['id,desc'],
    });

    expect(response.status(), 'Status code should be 200').toBe(200);

    const body = (await response.json()) as EcoNewsPage;
    const created = body.page.find((item) => item.id === createdEcoNewsId);

    expect(created, 'Created eco news should be present in the list response').toBeDefined();
    expect(body.currentPage, 'Current page should be 0').toBe(0);
    expect(body.number, 'Page number should be 0').toBe(0);
    expect(body.page.length, 'Returned page should contain records').toBeGreaterThan(0);
    expect(body.page.length, 'Returned page should respect the size').toBeLessThanOrEqual(100);
    expect(created!.title, 'Title should match created data').toBe(createdEcoNewsData!.title);
    expect(created!.content, 'Content should match created data').toBe(createdEcoNewsData!.text);
    expect(created!.shortInfo, 'Short info should match created data').toBe(
      createdEcoNewsData!.shortInfo
    );
    expect(created!.source, 'Source should match created data').toBe(createdEcoNewsData!.source);
    expect(created!.tagsEn, 'English tags should match created data').toEqual(
      expect.arrayContaining(createdEcoNewsData!.tags)
    );
    expect(created!.author, 'Author should match created data').toEqual(
      expect.objectContaining({
        id: createdEcoNewsAuthorId,
        name: expect.any(String),
      })
    );
    expect(Date.parse(created!.creationDate), 'Creation date should be valid').not.toBeNaN();
    expect(created!.imagePath === null || typeof created!.imagePath === 'string').toBe(true);
    expect(created!.likes, 'Likes should be >= 0').toBeGreaterThanOrEqual(0);
    expect(created!.countComments, 'Comments count should be >= 0').toBeGreaterThanOrEqual(0);
    expect(typeof created!.favorite, 'Favorite should be boolean').toBe('boolean');
  });

  test('POST /eco-news/{ecoNewsId}/likes - should toggle like on eco news', async () => {
    const ecoNewsId = 13963;

    const beforeResponse = await client.getEcoNewsById(ecoNewsId, 'en');
    expect(beforeResponse.status(), 'Eco news should exist before toggle').toBe(200);
    const before = (await beforeResponse.json()) as EcoNewsDetails;

    const toggleResponse = await client.toggleEcoNewsLike(ecoNewsId);
    expect(
      toggleResponse.status(),
      `Like status code should be 200. Response: ${await toggleResponse.text()}`
    ).toBe(200);

    const afterResponse = await client.getEcoNewsById(ecoNewsId, 'en');
    expect(afterResponse.status(), 'Eco news should exist after toggle').toBe(200);
    const after = (await afterResponse.json()) as EcoNewsDetails;

    expect(Math.abs(after.likes - before.likes), 'Like count should change by one').toBe(1);

    const restoreResponse = await client.toggleEcoNewsLike(ecoNewsId);
    expect(restoreResponse.status(), 'Restoring state should return 200').toBe(200);

    const restoredResponse = await client.getEcoNewsById(ecoNewsId, 'en');
    expect(restoredResponse.status(), 'Eco news should exist after restore').toBe(200);
    const restored = (await restoredResponse.json()) as EcoNewsDetails;

    expect(restored.likes, 'Like count should return to its initial value').toBe(before.likes);
  });

  test('POST /eco-news/{ecoNewsId}/likes - should return 404 for missing eco news', async () => {
    const response = await client.toggleEcoNewsLike(2147483647);

    expect(response.status(), 'Status code should be 404').toBe(404);
  });

  test('POST /eco-news/{ecoNewsId}/favorites - should add eco news to favorites', async () => {
    const ecoNewsId = 13963;

    await client.removeEcoNewsFromFavorites(ecoNewsId);

    const addResponse = await client.addEcoNewsToFavorites(ecoNewsId);
    expect(
      addResponse.status(),
      `Add to favorites should return 200. Response: ${await addResponse.text()}`
    ).toBe(200);

    const addedResponse = await client.findEcoNews({ favorite: true, page: 0, size: 100 });
    expect(addedResponse.status(), 'Favorites list after add should return 200').toBe(200);
    const addedPage = (await addedResponse.json()) as EcoNewsPage;
    const added = addedPage.page.find((item) => item.id === ecoNewsId);

    expect(added, 'Eco news should be present in favorites list').toBeDefined();
    expect(added?.favorite, 'Eco news should be marked as favorite').toBe(true);

    const removeResponse = await client.removeEcoNewsFromFavorites(ecoNewsId);
    expect(removeResponse.status(), 'Cleanup remove from favorites should return 200').toBe(200);
  });

  test('POST /eco-news/{ecoNewsId}/favorites - should return 404 for missing eco news', async () => {
    const response = await client.addEcoNewsToFavorites(2147483647);

    expect(response.status(), 'Status code should be 404').toBe(404);
  });

  test('DELETE /eco-news/{ecoNewsId}/favorites - should remove eco news from favorites', async () => {
    const ecoNewsId = 13963;

    const addResponse = await client.addEcoNewsToFavorites(ecoNewsId);
    expect(addResponse.status(), 'Eco news should be added before removal with status 200').toBe(
      200
    );

    const removeResponse = await client.removeEcoNewsFromFavorites(ecoNewsId);
    expect(removeResponse.status(), 'Remove from favorites status code should be 200').toBe(200);

    const afterResponse = await client.findEcoNews({ favorite: true, page: 0, size: 100 });
    expect(afterResponse.status(), 'Favorites list after removal should return 200').toBe(200);
    const afterPage = (await afterResponse.json()) as EcoNewsPage;

    expect(
      afterPage.page.some((item) => item.id === ecoNewsId),
      'Eco news should be absent from favorites list'
    ).toBe(false);
  });

  test('DELETE /eco-news/{ecoNewsId}/favorites - should return 404 for missing eco news', async () => {
    const response = await client.removeEcoNewsFromFavorites(2147483647);

    expect(response.status(), 'Status code should be 404').toBe(404);
  });

  test('GET /eco-news/count - should return published news count for created news author', async () => {
    expect(createdEcoNewsAuthorId, 'Created eco news author ID should be available').toBeDefined();
    expect(
      ecoNewsCountBeforeCreation,
      'Author count before creation should be available'
    ).toBeDefined();

    const response = await client.getEcoNewsCount(createdEcoNewsAuthorId);

    expect(response.status(), 'Status code should be 200').toBe(200);

    const count = (await response.json()) as number;
    expect(Number.isInteger(count), 'Count should be an integer').toBe(true);
    expect(count, 'Count should increase by exactly 1 after creation').toBe(
      ecoNewsCountBeforeCreation! + 1
    );
  });

  test('GET /eco-news/count - should return 0 for missing author ID', async () => {
    const response = await client.getEcoNewsCount(2147483647);

    expect(response.status(), 'Status code should be 200').toBe(200);

    const count = (await response.json()) as number;
    expect(count, 'Published eco news count should be 0 for missing author').toBe(0);
  });

  test('DELETE /eco-news/{ecoNewsId} - should delete the created eco news', async () => {
    expect(createdEcoNewsId, 'Created eco news ID should be available').toBeDefined();

    const deleteResponse = await client.deleteEcoNews(createdEcoNewsId!);

    expect(deleteResponse.status(), 'Status code should be 200').toBe(200);

    const getResponse = await client.getEcoNewsById(createdEcoNewsId!, 'en');

    expect(getResponse.status(), 'Deleted eco news should return 404').toBe(404);
    createdEcoNewsId = undefined;
  });
});
