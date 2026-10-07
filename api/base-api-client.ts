import { test, request, type APIRequestContext, type APIResponse } from '@playwright/test';
import { attachment } from 'allure-js-commons';
import type { ApiRequestOptions } from '@/types';

export type { ApiRequestOptions };

/**
 * Base class for API clients that share an HTTP session and authentication.
 * Wraps requests in Allure steps and attaches status codes and error bodies.
 */
export class BaseApiClient {
  protected baseUrl: string;
  protected accessToken: string | null;
  protected requestContext?: APIRequestContext;
  private ownsContext: boolean;

  /**
   * Initialize a client with its API root, optional access token, and optional Playwright APIRequestContext.
   *
   * @param baseUrl Root URL used to resolve relative endpoint paths.
   * @param accessToken Optional bearer token sent with each request.
   * @param requestContext Optional Playwright APIRequestContext instance.
   */
  constructor(baseUrl: string, accessToken?: string | null, requestContext?: APIRequestContext) {
    this.baseUrl = baseUrl.replace(/\/+$/, '');
    this.accessToken = accessToken ?? null;
    this.requestContext = requestContext;
    this.ownsContext = !requestContext;
  }

  public setAccessToken(token: string | null): void {
    this.accessToken = token;
  }

  public getAccessToken(): string | null {
    return this.accessToken;
  }

  public setBaseUrl(url: string): void {
    this.baseUrl = url.replace(/\/+$/, '');
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  /**
   * Lazily resolves or instantiates an APIRequestContext.
   */
  protected async getRequestContext(): Promise<APIRequestContext> {
    if (!this.requestContext) {
      this.requestContext = await request.newContext();
      this.ownsContext = true;
    }
    return this.requestContext;
  }

  /**
   * Resolves endpoint against base_url without duplicate or missing slashes.
   */
  protected resolveUrl(endpoint: string): string {
    const cleanEndpoint = endpoint.replace(/^\/+/, '');
    return `${this.baseUrl}/${cleanEndpoint}`;
  }

  /**
   * Sends an HTTP request to an endpoint relative to `baseUrl`.
   * Request execution is centralized to maintain consistent Allure logging.
   */
  protected async sendRequest(
    method: string,
    endpoint: string,
    options: ApiRequestOptions = {}
  ): Promise<APIResponse> {
    const url = this.resolveUrl(endpoint);

    const headers: Record<string, string> = { ...(options.headers ?? {}) };

    if (this.accessToken && !headers['Authorization'] && !headers['authorization']) {
      headers['Authorization'] = `Bearer ${this.accessToken}`;
    }

    const uppercaseMethod = method.toUpperCase();

    return await test.step(`${uppercaseMethod} ${url}`, async () => {
      const context = await this.getRequestContext();
      const response = await context.fetch(url, {
        method: uppercaseMethod,
        ...options,
        headers,
      });

      const statusCode = response.status();
      let responseText = '';
      try {
        responseText = await response.text();
      } catch {
        // Ignore failure to read response body
      }

      const statusText = response.statusText();
      const statusInfo = statusText ? `${statusCode} ${statusText}` : String(statusCode);

      await this.attachToReport('Response status', statusInfo, 'text/plain');

      if (statusCode >= 400 && responseText) {
        const contentTypeHeader = response.headers()['content-type'] || '';
        const isJson = contentTypeHeader.toLowerCase().includes('json');
        await this.attachToReport(
          'Response error',
          responseText,
          isJson ? 'application/json' : 'text/plain'
        );
      }

      return response;
    });
  }

  /**
   * Helper to safely attach data to both Allure and Playwright test context.
   */
  private async attachToReport(name: string, content: string, contentType: string): Promise<void> {
    try {
      await attachment(name, content, { contentType });
    } catch {
      try {
        const testInfo = test.info();
        if (testInfo) {
          await testInfo.attach(name, {
            body: Buffer.from(content),
            contentType,
          });
        }
      } catch {
        // Outside test context, suppress attachment errors
      }
    }
  }

  protected async get(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.sendRequest('GET', endpoint, options);
  }

  protected async post(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.sendRequest('POST', endpoint, options);
  }

  protected async put(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.sendRequest('PUT', endpoint, options);
  }

  protected async patch(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.sendRequest('PATCH', endpoint, options);
  }

  protected async delete(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.sendRequest('DELETE', endpoint, options);
  }

  /**
   * Dispose request context if created internally by this instance.
   */
  public async dispose(): Promise<void> {
    if (this.ownsContext && this.requestContext) {
      await this.requestContext.dispose();
      this.requestContext = undefined;
    }
  }
}
