import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient, type ApiRequestOptions } from './base-api-client';
import env from '@/config/env';

/**
 * Client for the GreenCity Search API (`/search/*`).
 * The endpoints are public; `isFavorite=true` is the only option that requires authentication.
 */
export class SearchClient extends BaseApiClient {
  private readonly resourceUrl = '/search';

  constructor(
    baseUrl: string = env.API_GREENCITY_BASE_URL,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  /**
   * GET /search/eco-news
   * Search eco news. Without `searchQuery` all news are returned page by page.
   */
  public async searchEcoNews(
    searchQuery?: string,
    page: number = 0,
    size: number = 10,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.search('eco-news', searchQuery, page, size, options);
  }

  /**
   * GET /search/events
   * Search events. Without `searchQuery` all events are returned page by page.
   */
  public async searchEvents(
    searchQuery?: string,
    page: number = 0,
    size: number = 10,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.search('events', searchQuery, page, size, options);
  }

  /**
   * GET /search/places
   * Search places. Without `searchQuery` all places are returned page by page.
   */
  public async searchPlaces(
    searchQuery?: string,
    page: number = 0,
    size: number = 10,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.search('places', searchQuery, page, size, options);
  }

  private async search(
    target: 'eco-news' | 'events' | 'places',
    searchQuery: string | undefined,
    page: number,
    size: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    const queryParams: Record<string, string | number | boolean> = { page, size, lang: 'en' };
    if (searchQuery !== undefined) {
      queryParams.searchQuery = searchQuery;
    }
    return await this.get(`${this.resourceUrl}/${target}`, {
      ...options,
      params: { ...queryParams, ...options?.params },
    });
  }
}
