import { test, request, type APIRequestContext, type APIResponse } from '@playwright/test';
import env from '@/config/env';
import type {
  MailTmDomain,
  MailTmMessage,
  MailTmMessageDetail,
  MailTmTokenResponse,
  VerificationLinkDetails,
  TempMailClientOptions,
} from '@/types';

/**
 * Helper class to interact with the mail.tm API.
 * Provides temporary mailbox creation, message polling, and verification link parsing.
 */
export class TempMailApiClient {
  public static readonly BASE_URL = 'https://api.mail.tm';
  public static readonly DEFAULT_PASSWORD = 'Password123!';

  public domain = '';
  public emailAddress = '';
  public password = '';
  public token = '';

  private readonly baseUrl: string;
  private requestContext?: APIRequestContext;
  private readonly ownsContext: boolean;

  constructor(options: TempMailClientOptions = {}) {
    this.baseUrl = (options.baseUrl || TempMailApiClient.BASE_URL).replace(/\/+$/, '');
    this.password = options.password || TempMailApiClient.DEFAULT_PASSWORD;
    this.requestContext = options.requestContext;
    this.ownsContext = !options.requestContext;
  }

  /**
   * Factory method to instantiate, create a mail.tm account, and authenticate.
   */
  public static async create(options: TempMailClientOptions = {}): Promise<TempMailApiClient> {
    const client = new TempMailApiClient(options);
    await client.init();
    return client;
  }

  /**
   * Initializes domain, generates email, creates account and obtains auth token.
   */
  public async init(): Promise<void> {
    this.domain = await this.getDomain();
    this.emailAddress = this.generateEmailAddress(this.domain);
    await this.createAccount();
    this.token = await this.authenticate();
  }

  private async getContext(): Promise<APIRequestContext> {
    if (!this.requestContext) {
      this.requestContext = await request.newContext();
    }
    return this.requestContext;
  }

  /**
   * Execute an HTTP request with exponential backoff on 429 Too Many Requests.
   */
  private async requestWithRetry(
    method: string,
    url: string,
    options: Parameters<APIRequestContext['fetch']>[1] = {}
  ): Promise<APIResponse> {
    const context = await this.getContext();
    const maxRetries = 5;

    for (let attempt = 0; attempt < maxRetries; attempt++) {
      const response = await context.fetch(url, {
        method,
        timeout: env.MEDIUM_TIMEOUT,
        ...options,
      });

      if (response.status() === 429) {
        const delayMs = 2000 * (attempt + 1);
        await new Promise((resolve) => setTimeout(resolve, delayMs));
        continue;
      }

      if (!response.ok()) {
        const errorText = await response.text();
        throw new Error(
          `Request ${method} ${url} failed with status ${response.status()}: ${errorText}`
        );
      }

      return response;
    }

    throw new Error(`Max retries exceeded with 429 errors for ${method} ${url}`);
  }

  /**
   * Fetch an active domain from mail.tm.
   */
  private async getDomain(): Promise<string> {
    const response = await this.requestWithRetry('GET', `${this.baseUrl}/domains`);
    const data = (await response.json()) as { 'hydra:member'?: MailTmDomain[] };
    const domains = data['hydra:member'] || [];

    if (!domains.length || !domains[0].domain) {
      throw new Error('No domains available from mail.tm API');
    }

    return domains[0].domain;
  }

  /**
   * Generate a unique random email address with given domain.
   */
  private generateEmailAddress(domain: string): string {
    const randomHex = Math.random().toString(36).substring(2, 10);
    return `qavisitor${randomHex}@${domain}`;
  }

  /**
   * Create a new temporary email account on mail.tm.
   */
  private async createAccount(): Promise<void> {
    await test.step('Create temporary email account', async () => {
      await this.requestWithRetry('POST', `${this.baseUrl}/accounts`, {
        data: {
          address: this.emailAddress,
          password: this.password,
        },
      });
    });
  }

  /**
   * Authenticate and retrieve the bearer token.
   */
  private async authenticate(): Promise<string> {
    return await test.step('Authenticate to get token', async () => {
      const response = await this.requestWithRetry('POST', `${this.baseUrl}/token`, {
        data: {
          address: this.emailAddress,
          password: this.password,
        },
      });
      const data = (await response.json()) as MailTmTokenResponse;
      return data.token;
    });
  }

  /**
   * Wait for an email to arrive in the inbox within the specified timeout.
   *
   * @param timeoutMs Maximum time in ms to wait for the email. Defaults to env.LONG_TIMEOUT.
   * @param pollFrequencyMs Delay in ms between API requests. Defaults to env.SHORT_TIMEOUT.
   * @returns The string ID of the latest received message.
   */
  public async waitForEmail(
    timeoutMs: number = env.LONG_TIMEOUT,
    pollFrequencyMs: number = env.SHORT_TIMEOUT
  ): Promise<string> {
    return await test.step('Wait for an email to arrive', async () => {
      const endTime = Date.now() + timeoutMs;
      const headers = { Authorization: `Bearer ${this.token}` };

      while (Date.now() < endTime) {
        const response = await this.requestWithRetry('GET', `${this.baseUrl}/messages`, {
          headers,
        });
        const data = (await response.json()) as { 'hydra:member'?: MailTmMessage[] };
        const messages = data['hydra:member'] || [];

        if (messages.length > 0) {
          return messages[0].id;
        }

        await new Promise((resolve) => setTimeout(resolve, pollFrequencyMs));
      }

      throw new Error(`No email received within ${timeoutMs}ms.`);
    });
  }

  /**
   * Fetch the HTML content of a specific email message.
   *
   * @param messageId The message ID.
   * @returns HTML string of the message.
   */
  public async getEmailContent(messageId: string): Promise<string> {
    return await test.step('Fetch received email content', async () => {
      const headers = { Authorization: `Bearer ${this.token}` };
      const response = await this.requestWithRetry('GET', `${this.baseUrl}/messages/${messageId}`, {
        headers,
      });
      const data = (await response.json()) as MailTmMessageDetail;
      const htmlContent = data.html;

      if (Array.isArray(htmlContent)) {
        if (htmlContent.length === 0) {
          throw new Error('Email HTML content is empty.');
        }
        return htmlContent[0];
      }

      if (!htmlContent) {
        throw new Error('Email HTML content is empty.');
      }

      return htmlContent;
    });
  }

  /**
   * Parse the confirmation link from the email HTML.
   *
   * @param emailHtml The raw HTML content of the email.
   * @returns The extracted URL string.
   */
  public async extractVerificationLink(emailHtml: string): Promise<string> {
    return await test.step('Extract verification link from email HTML', async () => {
      // Matches href="https?://.../verify?code=..." or GreenCity verification links containing token/verify
      const match =
        emailHtml.match(/href="([^"]*(?:verify\?code=|verifyEmail|token=)[^"]*)"/i) ||
        emailHtml.match(/href="(https?:\/\/[^"]+)"/i);

      if (!match || !match[1]) {
        throw new Error('Verification link not found in the email content.');
      }

      return match[1];
    });
  }

  /**
   * Extracts verification parameters (token, userId) from verification link in email HTML.
   */
  public async extractVerificationDetails(emailHtml: string): Promise<VerificationLinkDetails> {
    const fullUrl = await this.extractVerificationLink(emailHtml);
    let token: string | undefined;
    let userId: number | undefined;

    try {
      const parsedUrl = new URL(fullUrl);
      token =
        parsedUrl.searchParams.get('token') || parsedUrl.searchParams.get('code') || undefined;

      let rawUserId = parsedUrl.searchParams.get('user_id') || parsedUrl.searchParams.get('userId');

      if ((!token || !rawUserId) && parsedUrl.hash.includes('?')) {
        const hashQuery = parsedUrl.hash.substring(parsedUrl.hash.indexOf('?') + 1);
        const hashParams = new URLSearchParams(hashQuery);
        token = token || hashParams.get('token') || hashParams.get('code') || undefined;
        rawUserId = rawUserId || hashParams.get('user_id') || hashParams.get('userId');
      }

      if (rawUserId) {
        userId = parseInt(rawUserId, 10);
      }
    } catch {
      // Ignored, proceed to regex fallback below
    }

    if (!token) {
      const tokenMatch = fullUrl.match(/[?&](?:token|code)=([^&#]+)/);
      if (tokenMatch) {
        token = decodeURIComponent(tokenMatch[1]);
      }
    }
    if (userId === undefined) {
      const userMatch = fullUrl.match(/[?&](?:user_id|userId)=(\d+)/);
      if (userMatch) {
        userId = parseInt(userMatch[1], 10);
      }
    }

    return {
      fullUrl,
      token,
      userId,
    };
  }

  /**
   * Clean up request context if owned.
   */
  public async dispose(): Promise<void> {
    if (this.ownsContext && this.requestContext) {
      await this.requestContext.dispose();
      this.requestContext = undefined;
    }
  }
}
