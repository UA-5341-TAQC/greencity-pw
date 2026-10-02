import { test as baseTest, expect as baseExpect } from '@/fixtures/base-fixture';
import env from '@/config/env';
import { OwnSecurityClient } from '@/api';
import { TempMailApiClient } from '@/helpers';

export interface ApiFixtures {
  ownSecurityClient: OwnSecurityClient;
  tempMailClient: TempMailApiClient;
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
});

export { baseExpect as expect };
