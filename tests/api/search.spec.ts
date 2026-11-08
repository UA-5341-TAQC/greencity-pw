import type { APIResponse } from '@playwright/test';
import { test, expect } from '@/fixtures';
import { SearchClient } from '@/api';
import env from '@/config/env';
import type { ApiRequestOptions } from '@/api';
import type { SearchEventItem, SearchNewsItem, SearchPage, SearchPlaceItem } from '@/types';

type SearchItem = SearchNewsItem | SearchEventItem | SearchPlaceItem;

interface SearchTarget {
  name: string;
  endpoint: string;
  /** Fields every returned item must have. */
  fields: Record<string, unknown>;
  search: (
    client: SearchClient,
    query?: string,
    page?: number,
    size?: number,
    options?: ApiRequestOptions
  ) => Promise<APIResponse>;
  /** Text by which the item can be found again. */
  labelOf: (item: SearchItem) => string;
  /** Query used to fetch a sample item instead of an empty one. */
  sampleQuery?: string;
  /** The test stand may have no data for this target; data-dependent tests are skipped then. */
  mayBeEmpty?: boolean;
}

const targets: SearchTarget[] = [
  {
    name: 'ECONEWS',
    endpoint: '/search/eco-news',
    fields: { id: expect.any(Number), title: expect.any(String), tags: expect.any(Array) },
    search: (client, query, page, size, options) =>
      client.searchEcoNews(query, page, size, options),
    labelOf: (item) => (item as SearchNewsItem).title,
  },
  {
    name: 'EVENTS',
    endpoint: '/search/events',
    fields: { id: expect.any(Number), title: expect.any(String), tags: expect.any(Array) },
    search: (client, query, page, size, options) => client.searchEvents(query, page, size, options),
    labelOf: (item) => (item as SearchEventItem).title,
  },
  {
    name: 'PLACES',
    endpoint: '/search/places',
    fields: { id: expect.any(Number), name: expect.any(String) },
    search: (client, query, page, size, options) => client.searchPlaces(query, page, size, options),
    labelOf: (item) => (item as SearchPlaceItem).name,
    sampleQuery: 'a',
    mayBeEmpty: true,
  },
];

for (const target of targets) {
  // The search controller resolves the current user id as a required parameter,
  // so every request needs a valid token even though the path is open in SecurityConfig.
  test.describe(`Search API - GET ${target.endpoint} (authorized user)`, () => {
    let client: SearchClient;

    test.beforeEach(async ({ authorizedClient }) => {
      client = await authorizedClient(SearchClient, 'user', env.API_GREENCITY_BASE_URL);
    });

    test(`TC-API-SEARCH-${target.name}-01 should return a paginated page`, async () => {
      const response = await target.search(client, undefined, 0, 5);

      expect(response.status(), 'Status code should be 200').toBe(200);
      const body = (await response.json()) as SearchPage<SearchItem>;
      expect(body).toEqual(
        expect.objectContaining({
          page: expect.any(Array),
          totalElements: expect.any(Number),
          currentPage: expect.any(Number),
          totalPages: expect.any(Number),
        })
      );
      expect(body.currentPage, 'First page should be requested').toBe(0);
    });

    test(`TC-API-SEARCH-${target.name}-02 should return items with the expected fields`, async () => {
      const response = await target.search(client, target.sampleQuery, 0, 1);

      expect(response.status(), 'Status code should be 200').toBe(200);
      const body = (await response.json()) as SearchPage<SearchItem>;
      // eslint-disable-next-line playwright/no-skipped-test
      test.skip(target.mayBeEmpty === true && body.page.length === 0, 'No data on the test stand');
      expect(body.page.length, 'Precondition: at least one item is required').toBeGreaterThan(0);
      expect(body.page[0], 'Item should contain the expected fields').toEqual(
        expect.objectContaining(target.fields)
      );
    });

    test(`TC-API-SEARCH-${target.name}-03 should respect the page size`, async () => {
      const response = await target.search(client, undefined, 0, 2);

      expect(response.status(), 'Status code should be 200').toBe(200);
      const body = (await response.json()) as SearchPage<SearchItem>;
      expect(body.page.length, 'Page should not be larger than requested').toBeLessThanOrEqual(2);
    });

    test(`TC-API-SEARCH-${target.name}-04 should find an item by its own title`, async () => {
      const first = await target.search(client, target.sampleQuery, 0, 1);
      expect(first.status(), 'Precondition: list should be available').toBe(200);
      const firstBody = (await first.json()) as SearchPage<SearchItem>;
      // eslint-disable-next-line playwright/no-skipped-test
      test.skip(
        target.mayBeEmpty === true && firstBody.page.length === 0,
        'No data on the test stand'
      );
      expect(firstBody.page.length, 'Precondition: at least one item is required').toBeGreaterThan(
        0
      );
      const sample = firstBody.page[0];

      const response = await target.search(client, target.labelOf(sample), 0, 10);

      expect(response.status(), 'Status code should be 200').toBe(200);
      const body = (await response.json()) as SearchPage<SearchItem>;
      expect(
        body.page.map((item) => item.id),
        'Search by the item text should return that item'
      ).toContain(sample.id);
    });

    test(`TC-API-SEARCH-${target.name}-05 should return an empty page for an unknown query`, async () => {
      const response = await target.search(client, `no-such-item-${Date.now()}`, 0, 10);

      expect(response.status(), 'Status code should be 200').toBe(200);
      const body = (await response.json()) as SearchPage<SearchItem>;
      expect(body.page, 'Page should be empty').toEqual([]);
      expect(body.totalElements, 'Total elements should be 0').toBe(0);
    });

    test(`TC-API-SEARCH-${target.name}-06 should return 401 without authentication`, async ({
      request,
    }) => {
      const anonymous = new SearchClient(env.API_GREENCITY_BASE_URL, null, request);

      const response = await target.search(anonymous, undefined, 0, 10);

      expect(response.status(), 'Search should require authentication').toBe(401);
    });

    test(`TC-API-SEARCH-${target.name}-07 should accept isFavorite=true for an authenticated user`, async () => {
      const response = await target.search(client, undefined, 0, 10, {
        params: { isFavorite: true },
      });

      expect(response.status(), 'Status code should be 200').toBe(200);
      const body = (await response.json()) as SearchPage<SearchItem>;
      expect(body.page, 'Favorites should be a list').toEqual(expect.any(Array));
    });
  });
}
