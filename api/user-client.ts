import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { UserStatus, type CreateUserRequest } from '@/types';

/**
 * Client for working with the User Controller API.
 */
export class UserClient extends BaseApiClient {
  // Optional baseUrl for compatibility with ClientConstructor<T>.
  constructor(baseUrl?: string, accessToken?: string | null, requestContext?: APIRequestContext) {
    if (!baseUrl) {
      throw new Error('Base URL is required for UserClient');
    }
    super(baseUrl, accessToken, requestContext);
  }

  /**
   * Updates the profile picture path for a user.
   *
   * @param email - User email.
   * @param profilePicturePath - New profile picture path.
   */
  async updateUserPicturePath(email: string, profilePicturePath: string): Promise<APIResponse> {
    return await this.put('/users/user/picturePath', {
      params: { email, profilePicturePath },
    });
  }

  /**
   * Changes the status of a user.
   *
   * @param userId - User ID.
   * @param status - New user status.
   */
  async changeUserStatus(userId: number, status: UserStatus): Promise<APIResponse> {
    return await this.put(`/users/status/${userId}`, {
      params: { status },
    });
  }

  /**
   * Creates a new GreenCity user.
   *
   * @param user - User data required for creation.
   */
  async createUser(user: CreateUserRequest): Promise<APIResponse> {
    return await this.post('/users/create', {
      data: user,
    });
  }

  /**
   * Updates the user's name.
   *
   * @param userId - User ID.
   * @param userName - New user name.
   */
  async updateUserName(userId: number, userName: string): Promise<APIResponse> {
    return await this.patch(`/users/${userId}/name`, {
      params: { userName },
    });
  }

  /**
   * Gets location information for a user.
   *
   * @param userId - User ID.
   */
  async getUserLocation(userId: number): Promise<APIResponse> {
    return await this.get(`/users/${userId}/location`);
  }
}
