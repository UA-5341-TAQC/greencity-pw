# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: api/own-security-api.spec.ts >> Own Security API - Authentication & Tokens >> TC-API-5 [GET /ownSecurity/restorePassword] Verify restorePassword endpoint handles recovery request
- Location: tests/api/own-security-api.spec.ts:50:3

# Error details

```
TimeoutError: apiRequestContext.fetch: Timeout 10000ms exceeded.
Call log:
  - → GET https://greencity-user.greencity.cx.ua/ownSecurity/restorePassword?email=greencitytest69%40hotmail.com
    - user-agent: Playwright/1.63.0 (x64; ubuntu 24.04) node/24.21 CI/1
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1   | import { test, request, type APIRequestContext, type APIResponse } from '@playwright/test';
  2   | import { attachment } from 'allure-js-commons';
  3   | import type { ApiRequestOptions } from '@/types';
  4   | 
  5   | export type { ApiRequestOptions };
  6   | 
  7   | /**
  8   |  * Base class for API clients that share an HTTP session and authentication.
  9   |  * Wraps requests in Allure steps and attaches status codes and error bodies.
  10  |  */
  11  | export class BaseApiClient {
  12  |   protected baseUrl: string;
  13  |   protected accessToken: string | null;
  14  |   protected requestContext?: APIRequestContext;
  15  |   private ownsContext: boolean;
  16  | 
  17  |   /**
  18  |    * Initialize a client with its API root, optional access token, and optional Playwright APIRequestContext.
  19  |    *
  20  |    * @param baseUrl Root URL used to resolve relative endpoint paths.
  21  |    * @param accessToken Optional bearer token sent with each request.
  22  |    * @param requestContext Optional Playwright APIRequestContext instance.
  23  |    */
  24  |   constructor(baseUrl: string, accessToken?: string | null, requestContext?: APIRequestContext) {
  25  |     this.baseUrl = baseUrl.replace(/\/+$/, '');
  26  |     this.accessToken = accessToken ?? null;
  27  |     this.requestContext = requestContext;
  28  |     this.ownsContext = !requestContext;
  29  |   }
  30  | 
  31  |   public setAccessToken(token: string | null): void {
  32  |     this.accessToken = token;
  33  |   }
  34  | 
  35  |   public getAccessToken(): string | null {
  36  |     return this.accessToken;
  37  |   }
  38  | 
  39  |   public setBaseUrl(url: string): void {
  40  |     this.baseUrl = url.replace(/\/+$/, '');
  41  |   }
  42  | 
  43  |   public getBaseUrl(): string {
  44  |     return this.baseUrl;
  45  |   }
  46  | 
  47  |   /**
  48  |    * Lazily resolves or instantiates an APIRequestContext.
  49  |    */
  50  |   protected async getRequestContext(): Promise<APIRequestContext> {
  51  |     if (!this.requestContext) {
  52  |       this.requestContext = await request.newContext();
  53  |       this.ownsContext = true;
  54  |     }
  55  |     return this.requestContext;
  56  |   }
  57  | 
  58  |   /**
  59  |    * Resolves endpoint against base_url without duplicate or missing slashes.
  60  |    */
  61  |   protected resolveUrl(endpoint: string): string {
  62  |     const cleanEndpoint = endpoint.replace(/^\/+/, '');
  63  |     return `${this.baseUrl}/${cleanEndpoint}`;
  64  |   }
  65  | 
  66  |   /**
  67  |    * Sends an HTTP request to an endpoint relative to `baseUrl`.
  68  |    * Request execution is centralized to maintain consistent Allure logging.
  69  |    */
  70  |   protected async sendRequest(
  71  |     method: string,
  72  |     endpoint: string,
  73  |     options: ApiRequestOptions = {}
  74  |   ): Promise<APIResponse> {
  75  |     const url = this.resolveUrl(endpoint);
  76  | 
  77  |     const headers: Record<string, string> = { ...(options.headers ?? {}) };
  78  | 
  79  |     if (this.accessToken && !headers['Authorization'] && !headers['authorization']) {
  80  |       headers['Authorization'] = `Bearer ${this.accessToken}`;
  81  |     }
  82  | 
  83  |     const uppercaseMethod = method.toUpperCase();
  84  | 
  85  |     return await test.step(`${uppercaseMethod} ${url}`, async () => {
  86  |       const context = await this.getRequestContext();
> 87  |       const response = await context.fetch(url, {
      |                                      ^ TimeoutError: apiRequestContext.fetch: Timeout 10000ms exceeded.
  88  |         method: uppercaseMethod,
  89  |         ...options,
  90  |         headers,
  91  |       });
  92  | 
  93  |       const statusCode = response.status();
  94  |       let responseText = '';
  95  |       try {
  96  |         responseText = await response.text();
  97  |       } catch {
  98  |         // Ignore failure to read response body
  99  |       }
  100 | 
  101 |       const statusText = response.statusText();
  102 |       const statusInfo = statusText ? `${statusCode} ${statusText}` : String(statusCode);
  103 | 
  104 |       await this.attachToReport('Response status', statusInfo, 'text/plain');
  105 | 
  106 |       if (statusCode >= 400 && responseText) {
  107 |         const contentTypeHeader = response.headers()['content-type'] || '';
  108 |         const isJson = contentTypeHeader.toLowerCase().includes('json');
  109 |         await this.attachToReport(
  110 |           'Response error',
  111 |           responseText,
  112 |           isJson ? 'application/json' : 'text/plain'
  113 |         );
  114 |       }
  115 | 
  116 |       return response;
  117 |     });
  118 |   }
  119 | 
  120 |   /**
  121 |    * Helper to safely attach data to both Allure and Playwright test context.
  122 |    */
  123 |   private async attachToReport(name: string, content: string, contentType: string): Promise<void> {
  124 |     try {
  125 |       await attachment(name, content, { contentType });
  126 |     } catch {
  127 |       try {
  128 |         const testInfo = test.info();
  129 |         if (testInfo) {
  130 |           await testInfo.attach(name, {
  131 |             body: Buffer.from(content),
  132 |             contentType,
  133 |           });
  134 |         }
  135 |       } catch {
  136 |         // Outside test context, suppress attachment errors
  137 |       }
  138 |     }
  139 |   }
  140 | 
  141 |   protected async get(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
  142 |     return await this.sendRequest('GET', endpoint, options);
  143 |   }
  144 | 
  145 |   protected async post(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
  146 |     return await this.sendRequest('POST', endpoint, options);
  147 |   }
  148 | 
  149 |   protected async put(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
  150 |     return await this.sendRequest('PUT', endpoint, options);
  151 |   }
  152 | 
  153 |   protected async patch(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
  154 |     return await this.sendRequest('PATCH', endpoint, options);
  155 |   }
  156 | 
  157 |   protected async delete(endpoint: string, options?: ApiRequestOptions): Promise<APIResponse> {
  158 |     return await this.sendRequest('DELETE', endpoint, options);
  159 |   }
  160 | 
  161 |   /**
  162 |    * Dispose request context if created internally by this instance.
  163 |    */
  164 |   public async dispose(): Promise<void> {
  165 |     if (this.ownsContext && this.requestContext) {
  166 |       await this.requestContext.dispose();
  167 |       this.requestContext = undefined;
  168 |     }
  169 |   }
  170 | }
  171 | 
```