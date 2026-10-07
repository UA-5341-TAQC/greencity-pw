import { test, expect } from '@/fixtures';
import env from '@/config/env';
import { OwnSecurityClient } from '@/api';

test.describe('Own Security API - Authentication & Tokens', () => {
  test('TC-API-1 [POST /ownSecurity/signIn] Verify successful authentication via ownSecurityClient.signIn', async ({
    ownSecurityClient,
  }) => {
    const response = await ownSecurityClient.signIn(env.USER_EMAIL, env.USER_PASSWORD);

    expect(response).toBeDefined();
    expect(response.accessToken).toBeTruthy();
    expect(response.userId).toBeGreaterThan(0);
    expect(ownSecurityClient.getAccessToken()).toBe(response.accessToken);
  });

  test('TC-API-2 [POST /ownSecurity/signIn] Verify authentication failure with invalid credentials', async ({
    ownSecurityClient,
  }) => {
    const response = await ownSecurityClient.rawSignIn(
      'nonexistent.user.test@example.com',
      'WrongPassword123!'
    );

    expect(response.status()).toBe(400);
  });

  test('TC-API-3 [GET /ownSecurity/updateAccessToken] Verify access token refresh endpoint returns 200 with new tokens', async ({
    ownSecurityClient,
  }) => {
    const auth = await ownSecurityClient.signIn(env.USER_EMAIL, env.USER_PASSWORD);

    const response = await ownSecurityClient.rawUpdateAccessToken(auth.refreshToken, 'GREENCITY');

    expect(response.status()).toBe(200);
    const body = (await response.json()) as { accessToken: string; refreshToken: string };
    expect(body.accessToken).toBeTruthy();
    expect(body.refreshToken).toBeTruthy();
  });

  test('TC-API-4 [GET /ownSecurity/password-status] Verify getPasswordStatus returns hasPassword status', async ({
    authorizedClient,
  }) => {
    const userClient = await authorizedClient(OwnSecurityClient, 'user');
    const passwordStatus = await userClient.getPasswordStatus();

    expect(typeof passwordStatus.hasPassword).toBe('boolean');
  });

  test('TC-API-5 [GET /ownSecurity/restorePassword] Verify restorePassword endpoint handles recovery request', async ({
    ownSecurityClient,
  }) => {
    const response = await ownSecurityClient.restorePassword(env.USER_EMAIL);
    expect([200, 400]).toContain(response.status());
  });

  test('TC-API-6 [PUT /ownSecurity/changePassword] Verify changePassword validates mismatched passwords for authenticated user', async ({
    authorizedClient,
  }) => {
    const userClient = await authorizedClient(OwnSecurityClient, 'user');
    const response = await userClient.changePassword({
      password: 'NewPassword123!',
      confirmPassword: 'MismatchPassword123!',
    });

    expect(response.status()).toBe(400);
    const body = (await response.json()) as { message?: string };
    expect(body.message).toContain("The passwords don't match");
  });

  test('TC-API-7 [POST /ownSecurity/updatePassword] Verify updatePassword returns error for inactive or invalid token', async ({
    ownSecurityClient,
  }) => {
    const response = await ownSecurityClient.updatePassword({
      token: '00000000-0000-0000-0000-000000000000',
      password: 'NewPassword123!',
      confirmPassword: 'NewPassword123!',
    });

    expect([400, 404]).toContain(response.status());
  });

  test('TC-API-8 [POST /ownSecurity/set-password] Verify set-password rejects request when user already has a password', async ({
    authorizedClient,
  }) => {
    const userClient = await authorizedClient(OwnSecurityClient, 'user');
    const response = await userClient.setPassword({
      password: 'NewPassword123!',
      confirmPassword: 'NewPassword123!',
    });

    expect(response.status()).toBe(400);
    const body = (await response.json()) as { message?: string };
    expect(body.message).toContain('User already has password');
  });

  test('TC-API-9 [POST /ownSecurity/unblockAccount] Verify unblockAccount endpoint handles request with token', async ({
    ownSecurityClient,
  }) => {
    const response = await ownSecurityClient.unblockAccount({
      token: '00000000-0000-0000-0000-000000000000',
    });

    expect(response.status()).toBeGreaterThanOrEqual(400);
  });
});

test.describe('Own Security API - Parameterized Email Language & Verification Flow', () => {
  const languageCases = [
    {
      lang: 'en',
      expectedSubject: 'Verify your email address',
      expectedText: 'Thanks for your interest in joining Green City!',
    },
    {
      lang: 'uk',
      expectedSubject: 'Підтвердження електронної пошти',
      expectedText: 'Дякуємо, що приєдналися до Green City!',
    },
  ];

  for (const { lang, expectedSubject, expectedText } of languageCases) {
    test(`TC-API-EMAIL-${lang.toUpperCase()} [POST /ownSecurity/signUp, GET /ownSecurity/verifyEmail] Verify registration email language, content and verification for lang=${lang}`, async ({
      ownSecurityClient,
      tempMailClient,
    }) => {
      const uniqueName = `User${lang.toUpperCase()}${Date.now().toString().slice(-4)}`;
      const password = 'StrongPassword#123';

      const signUpResponse = await ownSecurityClient.signUp(
        {
          email: tempMailClient.emailAddress,
          name: uniqueName,
          password,
        },
        lang
      );

      expect(signUpResponse).toBeDefined();
      expect(signUpResponse.email).toBe(tempMailClient.emailAddress);

      const messageId = await tempMailClient.waitForEmail();
      const emailHtml = await tempMailClient.getEmailContent(messageId);

      expect(emailHtml).toContain(expectedSubject);
      expect(emailHtml).toContain(expectedText);

      const details = await tempMailClient.extractVerificationDetails(emailHtml);
      expect(details.token).toBeTruthy();
      expect(details.userId).toBe(signUpResponse.userId);

      const verifyResponse = await ownSecurityClient.verifyEmail(details.token!, details.userId!);
      expect(verifyResponse.status()).toBe(200);

      const signInResponse = await ownSecurityClient.signIn(tempMailClient.emailAddress, password);
      expect(signInResponse.accessToken).toBeTruthy();
      expect(signInResponse.userId).toBe(signUpResponse.userId);

      // Verify PUT /ownSecurity/changePassword updates password for verified user
      const updatedPassword = 'NewPassword#123';
      const changePasswordResponse = await ownSecurityClient.changePassword({
        password: updatedPassword,
        confirmPassword: updatedPassword,
      });
      expect(changePasswordResponse.status()).toBe(200);

      // Verify sign in with the new password
      const reSignInResponse = await ownSecurityClient.signIn(
        tempMailClient.emailAddress,
        updatedPassword
      );
      expect(reSignInResponse.accessToken).toBeTruthy();
    });
  }
});

test.describe('Own Security API - Role-Based Endpoints (Admin, Employee, Moderator)', () => {
  test('TC-API-ROLE-1 [GET /ownSecurity/authorities/categories] Verify admin authorities categories endpoint via admin role', async ({
    authorizedClient,
  }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      !env.ADMIN_EMAIL || !env.ADMIN_PASSWORD,
      'Admin credentials are not configured in environment'
    );
    const adminClient = await authorizedClient(OwnSecurityClient, 'admin');
    const categories = await adminClient.getAuthoritiesCategories();

    expect(Array.isArray(categories)).toBe(true);
  });

  test('TC-API-ROLE-2 [GET /ownSecurity/authorities/by-category] Verify admin authorities by category endpoint via admin role', async ({
    authorizedClient,
  }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      !env.ADMIN_EMAIL || !env.ADMIN_PASSWORD,
      'Admin credentials are not configured in environment'
    );
    const adminClient = await authorizedClient(OwnSecurityClient, 'admin');
    const authorities = await adminClient.getAuthoritiesByCategory(1);

    expect(Array.isArray(authorities)).toBe(true);
  });

  test('TC-API-ROLE-3 [POST /ownSecurity/register] Verify register endpoint via admin role', async ({
    authorizedClient,
  }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      !env.ADMIN_EMAIL || !env.ADMIN_PASSWORD,
      'Admin credentials are not configured in environment'
    );
    const adminClient = await authorizedClient(OwnSecurityClient, 'admin');
    const response = await adminClient.register({
      email: `new.user.${Date.now()}@example.com`,
      role: 'ROLE_USER',
      name: 'RegisteredUser',
    });

    expect([200, 201]).toContain(response.status());
  });

  test('TC-API-ROLE-4 [POST /ownSecurity/sign-up-employee] Verify signUpEmployee endpoint via employee role', async ({
    authorizedClient,
  }) => {
    // eslint-disable-next-line playwright/no-skipped-test
    test.skip(
      !env.EMPLOYEE_EMAIL || !env.EMPLOYEE_PASSWORD,
      'Employee credentials are not configured in environment'
    );
    const employeeClient = await authorizedClient(OwnSecurityClient, 'employee');
    const response = await employeeClient.signUpEmployee({
      email: `employee.${Date.now()}@example.com`,
      name: 'EmployeeTest',
    });

    expect([200, 201]).toContain(response.status());
  });

  test('TC-API-ROLE-5 [ROLE FACTORY] Verify authorizedClient throws error for unsupported role', async ({
    authorizedClient,
  }) => {
    await expect(authorizedClient(OwnSecurityClient, 'unsupported_role')).rejects.toThrow(
      /Unsupported role: 'unsupported_role'/
    );
  });
});
