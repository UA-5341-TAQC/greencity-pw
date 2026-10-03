import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { PlaceStatus } from '@/types';

/**
 * Client for working with the Place Controller API.
 */
export class PlaceClient extends BaseApiClient {
  constructor(
    baseUrl: string,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  /**
   * Gets all available place statuses.
   */
  async getStatuses(): Promise<APIResponse> {
    return await this.get('/place/statuses');
  }

  /**
   * Gets places filtered by status.
   *
   * @param status - Place status used for filtering.
   * @param page - Page number.
   * @param size - Number of places per page.
   */
  async getPlacesByStatus(
    status: PlaceStatus,
    page = 0,
    size = 20
  ): Promise<APIResponse> {
    return await this.get(`/place/${status}`, {
      params: { page, size },
    });
  }

  /**
   * Gets available place categories used for filtering.
   */
  async getFilteredPlaceCategories(): Promise<APIResponse> {
    return await this.get('/place/v2/filteredPlacesCategories');
  }

  /**
   * Gets detailed information about a place.
   *
   * @param placeId - Place ID.
   */
  async getPlaceInfo(placeId: number): Promise<APIResponse> {
    return await this.get(`/place/info/${placeId}`);
  }
}