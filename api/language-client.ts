import type { APIRequestContext, APIResponse } from '@playwright/test';
import env from '@/config/env';
import { BaseApiClient, type ApiRequestOptions } from './base-api-client';

export class LanguageClient extends BaseApiClient {
  private readonly resourceUrl = '/lang';

  constructor(
    baseUrl: string = env.API_USER_BASE_URL,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  public async getAllLanguages(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(this.resourceUrl, options);
  }

  public async getAllLanguageCodes(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/codes`, options);
  }

  public async getLanguageByCode(code: string, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/codes/${encodeURIComponent(code)}`, options);
  }
}
