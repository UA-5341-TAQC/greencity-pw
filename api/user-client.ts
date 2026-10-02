import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import { UserStatus, type CreateUserRequest } from '@/types';

export class UserClient extends BaseApiClient {
  constructor(baseUrl: string, accessToken?: string | null, requestContext?: APIRequestContext) {
    super(baseUrl, accessToken, requestContext);
  }

  async updateUserPicturePath(email: string, profilePicturePath: string): Promise<APIResponse> {
    return await this.put('/users/user/picturePath', {
      params: {
        email,
        profilePicturePath,
      },
    });
  }

  async changeUserStatus(userId: number, status: UserStatus): Promise<APIResponse> {
    return await this.put(`/users/status/${userId}`, {
      params: {
        status,
      },
    });
  }

  async createUser(user: CreateUserRequest): Promise<APIResponse> {
    return await this.post('/users/create', {
      data: user,
    });
  }

  async updateUserName(userId: number, userName: string): Promise<APIResponse> {
    return await this.patch(`/users/${userId}/name`, {
      params: {
        userName,
      },
    });
  }

  async getUserLocation(userId: number): Promise<APIResponse> {
    return await this.get(`/users/${userId}/location`);
  }
}
