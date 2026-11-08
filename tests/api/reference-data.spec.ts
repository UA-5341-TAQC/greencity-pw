import { test, expect } from '@/fixtures';
import { ReferenceDataClient } from '@/api';
import env from '@/config/env';
import type { CategoryDto, FactOfTheDay, SpecificationNameDto } from '@/types';

test.describe('Reference data API - public endpoints (no token)', () => {
  let client: ReferenceDataClient;

  test.beforeEach(({ request }) => {
    client = new ReferenceDataClient(env.API_GREENCITY_BASE_URL, null, request);
  });

  test('TC-API-REF-01 GET /fact-of-the-day/random - should return a fact with translations', async () => {
    const response = await client.getRandomFactOfTheDay();

    expect(response.status(), 'Status code should be 200').toBe(200);
    const body = (await response.json()) as FactOfTheDay;
    expect(body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        factOfTheDayTranslations: expect.any(Array),
      })
    );
    expect(body.factOfTheDayTranslations.length, 'Fact should have translations').toBeGreaterThan(
      0
    );
  });

  test('TC-API-REF-02 GET /fact-of-the-day/random - translations should have a language and text', async () => {
    const response = await client.getRandomFactOfTheDay();

    expect(response.status(), 'Status code should be 200').toBe(200);
    const body = (await response.json()) as FactOfTheDay;
    expect(
      body.factOfTheDayTranslations.every(
        (translation) =>
          typeof translation.languageCode === 'string' &&
          translation.languageCode.length > 0 &&
          typeof translation.content === 'string'
      ),
      'Every translation should have languageCode and content'
    ).toBe(true);
  });

  test('TC-API-REF-03 GET /categories - should return the list of categories', async () => {
    const response = await client.getCategories();

    expect(response.status(), 'Status code should be 200').toBe(200);
    const categories = (await response.json()) as CategoryDto[];
    expect(categories.length, 'Categories list should not be empty').toBeGreaterThan(0);
    expect(
      categories.every((category) => typeof category.nameEn === 'string' && category.nameEn !== ''),
      'Every category should have a non-empty English name'
    ).toBe(true);
  });

  test('TC-API-REF-04 GET /specification - should return the list of specifications', async () => {
    const response = await client.getSpecifications();

    expect(response.status(), 'Status code should be 200').toBe(200);
    const specifications = (await response.json()) as SpecificationNameDto[];
    expect(Array.isArray(specifications), 'Response should be a list').toBe(true);
    expect(
      specifications.every((spec) => typeof spec.name === 'string' && spec.name !== ''),
      'Every specification should have a non-empty name'
    ).toBe(true);
  });
});

test.describe('Reference data API - authorization', () => {
  test('TC-API-REF-05 GET /fact-of-the-day/random/by-tags - should return 401 without authentication', async ({
    request,
  }) => {
    const anonymous = new ReferenceDataClient(env.API_GREENCITY_BASE_URL, null, request);

    const response = await anonymous.getRandomFactOfTheDayByTags();

    expect(response.status(), 'Personal fact should require authentication').toBe(401);
  });

  test('TC-API-REF-06 GET /fact-of-the-day/random/by-tags - should return 401 for an invalid bearer token', async ({
    request,
  }) => {
    const invalid = new ReferenceDataClient(env.API_GREENCITY_BASE_URL, 'invalid-token', request);

    const response = await invalid.getRandomFactOfTheDayByTags();

    expect(response.status(), 'Invalid token should be rejected').toBe(401);
  });
});