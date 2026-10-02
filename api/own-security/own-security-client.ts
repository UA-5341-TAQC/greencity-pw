import { type APIRequestContext, type APIResponse } from '@playwright/test';
import { BaseApiClient } from '@/api/base-api-client';
import env from '@/config/env';
import type {
  ApiRequestOptions,
  OwnSignUpDto,
  SuccessSignUpDto,
  OwnSignInDto,
  SuccessSignInDto,
  OwnRestoreDto,
  UpdatePasswordDto,
  SetPasswordDto,
  UnblockAccountDto,
  EmployeeSignUpDto,
  UserManagementCreateDto,
} from '@/types';

/**
 * API client for the GreenCity OwnSecurityController endpoints.
 * Base URL defaults to env.API_USER_BASE_URL.
 */
export class OwnSecurityClient extends BaseApiClient {
  constructor(
    baseUrl: string = env.API_USER_BASE_URL,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  /**
   * POST /ownSecurity/signUp
   * Register a new user with own-security credentials.
   */
  public async rawSignUp(
    data: OwnSignUpDto,
    lang?: string,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    const params: Record<string, string> = {};
    if (lang) {
      params['lang'] = lang;
    }
    return await this.post('/ownSecurity/signUp', {
      ...options,
      params: { ...params, ...(options?.params as Record<string, string> | undefined) },
      data,
    });
  }

  public async signUp(data: OwnSignUpDto, lang?: string): Promise<SuccessSignUpDto> {
    const response = await this.rawSignUp(data, lang);
    if (!response.ok()) {
      throw new Error(`Sign up failed with status ${response.status()}: ${await response.text()}`);
    }
    return (await response.json()) as SuccessSignUpDto;
  }

  /**
   * POST /ownSecurity/signIn
   * Authenticate user with email and password.
   */
  public async rawSignIn(data: OwnSignInDto, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.post('/ownSecurity/signIn', {
      ...options,
      data,
    });
  }

  public async signIn(data: OwnSignInDto): Promise<SuccessSignInDto> {
    const response = await this.rawSignIn(data);
    if (!response.ok()) {
      throw new Error(`Sign in failed with status ${response.status()}: ${await response.text()}`);
    }
    const result = (await response.json()) as SuccessSignInDto;
    if (result.accessToken) {
      this.setAccessToken(result.accessToken);
    }
    return result;
  }

  /**
   * GET /ownSecurity/verifyEmail
   * Verify email by UUID token and user_id.
   */
  public async verifyEmail(
    token: string,
    userId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get('/ownSecurity/verifyEmail', {
      ...options,
      params: {
        token,
        user_id: userId,
        ...(options?.params as Record<string, string | number> | undefined),
      },
    });
  }

  /**
   * GET /ownSecurity/updateAccessToken
   * Refresh access token using refresh token.
   */
  public async updateAccessToken(
    refreshToken: string,
    projectName: 'GREENCITY' | 'PICKUP' = 'GREENCITY',
    options?: ApiRequestOptions
  ): Promise<SuccessSignInDto> {
    const response = await this.get('/ownSecurity/updateAccessToken', {
      ...options,
      params: {
        refreshToken,
        projectName,
        ...(options?.params as Record<string, string> | undefined),
      },
    });

    if (!response.ok()) {
      throw new Error(
        `Update access token failed with status ${response.status()}: ${await response.text()}`
      );
    }

    const result = (await response.json()) as SuccessSignInDto;
    if (result.accessToken) {
      this.setAccessToken(result.accessToken);
    }
    return result;
  }

  /**
   * GET /ownSecurity/restorePassword
   * Send password restoration email.
   */
  public async restorePassword(
    email: string,
    ubs?: string,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    const params: Record<string, string> = { email };
    if (ubs !== undefined) {
      params['ubs'] = ubs;
    }
    return await this.get('/ownSecurity/restorePassword', {
      ...options,
      params: {
        ...params,
        ...(options?.params as Record<string, string> | undefined),
      },
    });
  }

  /**
   * POST /ownSecurity/updatePassword
   * Update password via restoration token.
   */
  public async updatePassword(
    data: OwnRestoreDto,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post('/ownSecurity/updatePassword', {
      ...options,
      data,
    });
  }

  /**
   * PUT /ownSecurity/changePassword
   * Change current authenticated user password.
   */
  public async changePassword(
    data: UpdatePasswordDto,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.put('/ownSecurity/changePassword', {
      ...options,
      data,
    });
  }

  /**
   * POST /ownSecurity/set-password
   * Set password for user that does not have one yet.
   */
  public async setPassword(
    data: SetPasswordDto,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post('/ownSecurity/set-password', {
      ...options,
      data,
    });
  }

  /**
   * POST /ownSecurity/unblockAccount
   * Unblock account with token.
   */
  public async unblockAccount(
    data: UnblockAccountDto,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post('/ownSecurity/unblockAccount', {
      ...options,
      data,
    });
  }

  /**
   * POST /ownSecurity/sign-up-employee
   * Register employee.
   */
  public async signUpEmployee(
    data: EmployeeSignUpDto,
    lang?: string,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    const params: Record<string, string> = {};
    if (lang) {
      params['lang'] = lang;
    }
    return await this.post('/ownSecurity/sign-up-employee', {
      ...options,
      params: {
        ...params,
        ...(options?.params as Record<string, string> | undefined),
      },
      data,
    });
  }

  /**
   * POST /ownSecurity/register
   * Register new user with specified role.
   */
  public async register(
    data: UserManagementCreateDto,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post('/ownSecurity/register', {
      ...options,
      data,
    });
  }

  /**
   * GET /ownSecurity/password-status
   * Get password status for current user.
   */
  public async getPasswordStatus(options?: ApiRequestOptions): Promise<boolean> {
    const response = await this.get('/ownSecurity/password-status', options);
    if (!response.ok()) {
      throw new Error(
        `Get password status failed with status ${response.status()}: ${await response.text()}`
      );
    }
    return (await response.json()) as boolean;
  }

  /**
   * GET /ownSecurity/authorities/categories
   * Get all authority categories.
   */
  public async getAuthoritiesCategories(options?: ApiRequestOptions): Promise<string[]> {
    const response = await this.get('/ownSecurity/authorities/categories', options);
    if (!response.ok()) {
      throw new Error(
        `Get authorities categories failed with status ${response.status()}: ${await response.text()}`
      );
    }
    return (await response.json()) as string[];
  }

  /**
   * GET /ownSecurity/authorities/by-category
   * Get all authorities for a given category id.
   */
  public async getAuthoritiesByCategory(
    categoryId: number,
    options?: ApiRequestOptions
  ): Promise<string[]> {
    const response = await this.get('/ownSecurity/authorities/by-category', {
      ...options,
      params: {
        categoryId,
        ...(options?.params as Record<string, string | number> | undefined),
      },
    });
    if (!response.ok()) {
      throw new Error(
        `Get authorities by category failed with status ${response.status()}: ${await response.text()}`
      );
    }
    return (await response.json()) as string[];
  }
}
