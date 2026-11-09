import type { APIRequestContext, APIResponse } from '@playwright/test';
import env from '@/config/env';
import { BaseApiClient, type ApiRequestOptions } from './base-api-client';

export class EcoNewsClient extends BaseApiClient {
  private readonly resourceUrl = '/eco-news';

  constructor(
    baseUrl: string = env.API_GREENCITY_BASE_URL,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  public async getEcoNewsById(
    ecoNewsId: number,
    lang?: string,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${ecoNewsId}`, {
      ...options,
      params: lang ? { lang, ...options?.params } : options?.params,
    });
  }

  public async findEcoNews(
    params: {
      tags?: string[];
      title?: string;
      authorId?: number;
      favorite?: boolean;
      page?: number;
      size?: number;
      sort?: string[];
    } = {},
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    const queryParts: string[] = [];

    for (const tag of params.tags ?? []) {
      queryParts.push(`tags=${encodeURIComponent(tag)}`);
    }
    for (const sortCriterion of params.sort ?? []) {
      queryParts.push(`sort=${encodeURIComponent(sortCriterion)}`);
    }

    const queryParams: Record<string, string | number | boolean> = {
      ...options?.params,
    };

    if (params.title !== undefined) queryParams.title = params.title;
    if (params.authorId !== undefined) queryParams['author-id'] = params.authorId;
    if (params.favorite !== undefined) queryParams.favorite = params.favorite;
    if (params.page !== undefined) queryParams.page = params.page;
    if (params.size !== undefined) queryParams.size = params.size;

    const endpoint =
      queryParts.length > 0 ? `${this.resourceUrl}?${queryParts.join('&')}` : this.resourceUrl;

    return await this.get(endpoint, {
      ...options,
      params: queryParams,
    });
  }

  public async toggleEcoNewsLike(
    ecoNewsId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${ecoNewsId}/likes`, options);
  }

  public async addEcoNewsToFavorites(
    ecoNewsId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${ecoNewsId}/favorites`, options);
  }

  public async removeEcoNewsFromFavorites(
    ecoNewsId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.delete(`${this.resourceUrl}/${ecoNewsId}/favorites`, options);
  }

  public async getEcoNewsCount(
    authorId?: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/count`, {
      ...options,
      params:
        authorId !== undefined ? { 'author-id': authorId, ...options?.params } : options?.params,
    });
  }

  public async deleteEcoNews(ecoNewsId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.delete(`${this.resourceUrl}/${ecoNewsId}`, options);
  }

  public async createEcoNews(
    ecoNewsData: Record<string, unknown>,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(this.resourceUrl, {
      ...options,
      multipart: {
        addEcoNewsDtoRequest: {
          name: 'addEcoNewsDtoRequest',
          mimeType: 'application/json',
          buffer: Buffer.from(JSON.stringify(ecoNewsData)),
        },
        image: '',
        ...options?.multipart,
      },
    });
  }
}
