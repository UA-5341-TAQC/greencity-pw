import { test, expect } from '@/fixtures';
import env from '@/config/env';

test.describe('Own Security API & Temp Mail Helper', () => {
  test('TC-API-1 Verify successful authentication via ownSecurityClient.signIn', async ({
    ownSecurityClient,
  }) => {
    const response = await ownSecurityClient.signIn({
      email: env.USER_EMAIL,
      password: env.USER_PASSWORD,
      projectName: 'GREENCITY',
    });

    expect(response).toBeDefined();
    expect(response.accessToken).toBeTruthy();
    expect(response.userId).toBeGreaterThan(0);
    expect(ownSecurityClient.getAccessToken()).toBe(response.accessToken);
  });

  test('TC-API-2 Verify authentication failure with invalid password', async ({
    ownSecurityClient,
  }) => {
    const response = await ownSecurityClient.rawSignIn({
      email: env.USER_EMAIL,
      password: 'WrongPassword123!',
      projectName: 'GREENCITY',
    });

    expect(response.status()).toBe(400);
  });

  test('TC-API-3 Verify TempMailApiClient initializes active mailbox and parses link', async ({
    tempMailClient,
  }) => {
    expect(tempMailClient.domain).toBeTruthy();
    expect(tempMailClient.emailAddress).toContain(`@${tempMailClient.domain}`);
    expect(tempMailClient.token).toBeTruthy();

    const mockEmailHtml = `
      <div style="font-family: Arial, sans-serif;">
        <p>Welcome to GreenCity!</p>
        <a href="https://greencity.cx.ua/#/greenCity?token=abc-123-uuid&userId=999">Confirm Registration</a>
      </div>
    `;

    const extractedLink = await tempMailClient.extractVerificationLink(mockEmailHtml);
    expect(extractedLink).toBe('https://greencity.cx.ua/#/greenCity?token=abc-123-uuid&userId=999');

    const details = await tempMailClient.extractVerificationDetails(mockEmailHtml);
    expect(details.token).toBe('abc-123-uuid');
    expect(details.userId).toBe(999);
  });
});
