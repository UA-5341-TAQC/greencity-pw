import { test, expect, type APIRequestContext, type APIResponse } from '@playwright/test';

import { EcoNewsApi } from '../../src/api/eco-news.api';

test.describe('Eco news API sample tests', () => {
  test('builds request to eco-news endpoint', async () => {
    const mockedResponse = {
      ok: () => true,
      status: () => 200,
      json: async () => ({ totalElements: 0, content: [] })
    } as unknown as APIResponse;

    let requestedUrl = '';

    const mockedRequest = {
      get: async (url: string) => {
        requestedUrl = url;
        return mockedResponse;
      }
    } as unknown as APIRequestContext;

    const ecoNewsApi = new EcoNewsApi(mockedRequest, 'https://www.greencity.cx.ua');
    const response = await ecoNewsApi.getEcoNews();

    expect(requestedUrl).toBe('https://www.greencity.cx.ua/eco-news');
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
  });
});
