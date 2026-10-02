import { test as baseTest, expect as baseExpect } from '@/fixtures/base-fixture';
import env from '@/config/env';
import { OwnSecurityClient } from '@/api';
import { TempMailApiClient, signInViaApi } from '@/helpers';
import type { AuthorizedClientFactory, AuthSessionData, UserRole } from '@/types';

// Worker-level session cache to avoid repeating signInViaApi calls for each test
const roleSessionsCache = new Map<UserRole, AuthSessionData>();

export interface ApiFixtures {
  ownSecurityClient: OwnSecurityClient;
  tempMailClient: TempMailApiClient;
  authorizedClient: AuthorizedClientFactory;
}

export const test = baseTest.extend<ApiFixtures>({
  ownSecurityClient: async ({ request }, use): Promise<void> => {
    const client = new OwnSecurityClient(env.API_USER_BASE_URL, null, request);
    await use(client);
  },

  tempMailClient: async ({ request }, use): Promise<void> => {
    const client = await TempMailApiClient.create({ requestContext: request });
    await use(client);
    await client.dispose();
  },

  authorizedClient: async ({ request }, use): Promise<void> => {
    const factory: AuthorizedClientFactory = async (clientClass, role: UserRole = 'user') => {
      const credentialsMap: Record<UserRole, { email?: string; password?: string }> = {
        user: { email: env.USER_EMAIL, password: env.USER_PASSWORD },
        admin: { email: env.ADMIN_EMAIL, password: env.ADMIN_PASSWORD },
        employee: { email: env.EMPLOYEE_EMAIL, password: env.EMPLOYEE_PASSWORD },
        moderator: { email: env.MODERATOR_EMAIL, password: env.MODERATOR_PASSWORD },
      };

      const creds = credentialsMap[role];
      if (!creds?.email || !creds?.password) {
        throw new Error(
          `Missing credentials in configuration for role '${role}'. Please set ${role.toUpperCase()}_EMAIL and ${role.toUpperCase()}_PASSWORD in .env.`
        );
      }

      let session = roleSessionsCache.get(role);
      if (!session) {
        session = await signInViaApi(request, creds);
        roleSessionsCache.set(role, session);
      }

      return new clientClass(env.API_USER_BASE_URL, session.accessToken, request);
    };

    await use(factory);
  },
});

export { baseExpect as expect };
