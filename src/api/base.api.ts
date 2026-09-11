import { type APIRequestContext } from '@playwright/test';

export class BaseApi {
  constructor(
    protected readonly request: APIRequestContext,
    protected readonly apiBaseUrl: string
  ) {}
}
