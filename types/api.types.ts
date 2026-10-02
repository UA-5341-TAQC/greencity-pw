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
