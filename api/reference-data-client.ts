import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient, type ApiRequestOptions } from './base-api-client';
import env from '@/config/env';

/**
 * Client for small public reference-data endpoints of the GreenCity API:
 * fact of the day, place categories and place specifications.
 */
export class ReferenceDataClient extends BaseApiClient {
  constructor(
    baseUrl: string = env.API_GREENCITY_BASE_URL,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  /**
   * GET /fact-of-the-day/random
   * Retrieve a random general fact of the day with its translations. Public.
   */
  public async getRandomFactOfTheDay(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get('/fact-of-the-day/random', options);
  }

  /**
   * GET /fact-of-the-day/random/by-tags
   * Retrieve a random fact based on the user's habit tags. Requires authentication.
   */
  public async getRandomFactOfTheDayByTags(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get('/fact-of-the-day/random/by-tags', options);
  }

  /**
   * GET /categories
   * Retrieve the list of available place categories. Public.
   */
  public async getCategories(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get('/categories', options);
  }

  /**
   * GET /specification
   * Retrieve the list of available place specifications. Public.
   */
  public async getSpecifications(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get('/specification', options);
  }
}