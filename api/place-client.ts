import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { PlaceStatus } from '@/types';

export class PlaceClient extends BaseApiClient {
  constructor(
    baseUrl: string,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  async getStatuses(): Promise<APIResponse> {
    return await this.get('/place/statuses');
  }

  async getPlacesByStatus(
    status: PlaceStatus,
    page = 0,
    size = 20
  ): Promise<APIResponse> {
    return await this.get(`/place/${status}`, {
      params: {
        page,
        size,
      },
    });
  }

  async getFilteredPlaceCategories(): Promise<APIResponse> {
    return await this.get('/place/v2/filteredPlacesCategories');
  }

  async getPlaceInfo(placeId: number): Promise<APIResponse> {
    return await this.get(`/place/info/${placeId}`);
  }
}