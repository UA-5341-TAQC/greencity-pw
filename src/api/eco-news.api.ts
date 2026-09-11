import { type APIResponse, type APIRequestContext } from '@playwright/test';

import { API_BASE_URL } from '../utils/constants';
import { BaseApi } from './base.api';

export class EcoNewsApi extends BaseApi {
  constructor(request: APIRequestContext, apiBaseUrl = API_BASE_URL) {
    super(request, apiBaseUrl);
  }

  async getEcoNews(page = 0, size = 6): Promise<APIResponse> {
    return this.request.get(`${this.apiBaseUrl}/eco-news`, {
      params: {
        page,
        size
      }
    });
  }
}
