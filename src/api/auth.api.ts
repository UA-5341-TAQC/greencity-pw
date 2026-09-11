import { type APIResponse, type APIRequestContext } from '@playwright/test';

import { API_BASE_URL } from '../utils/constants';
import { BaseApi } from './base.api';

export class AuthApi extends BaseApi {
  constructor(request: APIRequestContext, apiBaseUrl = API_BASE_URL) {
    super(request, apiBaseUrl);
  }

  async login(email: string, password: string): Promise<APIResponse> {
    return this.request.post(`${this.apiBaseUrl}/ownSecurity/signIn`, {
      data: {
        email,
        password
      }
    });
  }
}
