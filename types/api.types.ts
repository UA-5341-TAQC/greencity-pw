export interface ApiRequestOptions {
  headers?: Record<string, string>;
  data?: unknown;
  params?: Record<string, string | number | boolean>;
  timeout?: number;
  failOnStatusCode?: boolean;
  ignoreHTTPSErrors?: boolean;
  maxRedirects?: number;
}

export interface AuthSessionData {
  userId: number;
  accessToken: string;
  refreshToken: string;
  name: string;
  ownRegistrations?: boolean;
}

export interface SignInCredentials {
  email?: string;
  password?: string;
}

export type UserRole = 'user' | 'admin' | 'employee' | 'moderator';

export type ClientConstructor<T> = new (
  baseUrl?: string,
  accessToken?: string | null,
  requestContext?: import('@playwright/test').APIRequestContext
) => T;

export type AuthorizedClientFactory = <T>(
  clientClass: ClientConstructor<T>,
  role?: UserRole
) => Promise<T>;
