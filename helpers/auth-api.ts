import { test, type APIRequestContext } from '@playwright/test';
import env, { requireUserCredentials } from '@/config/env';

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

/**
 * Performs authentication via the GreenCity User REST API.
 * Returns auth tokens and user information without UI interaction.
 */
export async function signInViaApi(
  request: APIRequestContext,
  credentials?: SignInCredentials
): Promise<AuthSessionData> {
  return await test.step('API: Sign in via user service', async () => {
    const fallback = credentials?.email && credentials?.password ? null : requireUserCredentials();
    const email = credentials?.email || fallback?.email;
    const password = credentials?.password || fallback?.password;

    const response = await request.post(`${env.USER_API_URL}/ownSecurity/signIn`, {
      data: {
        email,
        password,
        projectName: 'GREENCITY',
      },
    });

    if (!response.ok()) {
      throw new Error(
        `API sign in failed with status ${response.status()}: ${await response.text()}`
      );
    }

    return (await response.json()) as AuthSessionData;
  });
}
