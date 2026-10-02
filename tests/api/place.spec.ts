import { expect } from '@playwright/test';
import { test } from '@/fixtures/auth-fixture';
import { PlaceClient } from '@/api/place-client';
import { PlaceStatus } from '@/types';
import env from '@/config/env';

test.describe('Place Controller', () => {
  let placeClient: PlaceClient;

  test.beforeEach(async ({ request, authSession }) => {
    placeClient = new PlaceClient(
      env.API_GREENCITY_BASE_URL,
      authSession.accessToken,
      request
    );
  });

  test('GET /place/statuses - should return available place statuses', async () => {
    const response = await placeClient.getStatuses();

    expect(response.status()).toBe(200);

    const statuses = await response.json();

    expect(statuses).toEqual([
      'PROPOSED',
      'DECLINED',
      'APPROVED',
      'DELETED',
    ]);
  });

  test('GET /place/{status} - should return places by status', async () => {
    const response = await placeClient.getPlacesByStatus(
      PlaceStatus.Proposed
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body).toHaveProperty('page');
    expect(body).toHaveProperty('totalElements');
    expect(body).toHaveProperty('currentPage');
    expect(body).toHaveProperty('totalPages');
  });

  test('GET /place/v2/filteredPlacesCategories - should return place categories', async () => {
    const response = await placeClient.getFilteredPlaceCategories();

    expect(response.status()).toBe(200);

    const categories = await response.json();

    expect(Array.isArray(categories)).toBe(true);
    expect(categories.length).toBeGreaterThan(0);

    expect(categories[0]).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        nameEn: expect.any(String),
        nameUk: expect.any(String),
      })
    );
  });

  test('GET /place/info/{id} - should return place info', async () => {
    const placeId = 1;

    const response = await placeClient.getPlaceInfo(placeId);

    expect(response.status()).toBe(200);

    const place = await response.json();

    expect(place).toEqual(
        expect.objectContaining({
        id: placeId,
        name: expect.any(String),
        location: expect.objectContaining({
            id: expect.any(Number),
            lat: expect.any(Number),
            lng: expect.any(Number),
            address: expect.any(String),
        }),
        })
    );
  });
});