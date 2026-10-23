import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient } from './base-api-client';
import env from '@/config/env';
import type {
  ApiRequestOptions,
  HabitAssignCustomProperties,
  HabitAssignStatus,
  HabitToDoLists,
} from '@/types';

export class HabitAssignClient extends BaseApiClient {
  private readonly resourceUrl = '/habit/assign';

  constructor(
    baseUrl: string = env.API_GREENCITY_BASE_URL,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  public async assignDefault(habitId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${habitId}`, options);
  }

  public async assignCustom(
    habitId: number,
    data: HabitAssignCustomProperties,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.rawAssignCustom(habitId, data, options);
  }

  /** Allows malformed payloads to reach the server for negative API tests. */
  public async rawAssignCustom(
    habitId: number,
    data: unknown,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${habitId}/custom`, { ...options, data });
  }

  public async getAssignment(
    assignmentId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${assignmentId}`, options);
  }

  public async getActiveAssignment(
    habitId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${habitId}/active`, options);
  }

  public async getAssignmentsByHabit(
    habitId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${habitId}/all`, options);
  }

  public async getHabitDetails(
    assignmentId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${assignmentId}/more`, options);
  }

  public async getCurrentUserAssignments(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/allForCurrentUser`, options);
  }

  public async getUserAssignments(
    userId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/allUser/${userId}`, options);
  }

  public async getMyHabits(userId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/myHabits/${userId}`, options);
  }

  public async getMutualHabits(userId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/allMutualHabits/${userId}`, options);
  }

  public async getActiveOnDate(date: string, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/active/${date}`, options);
  }

  public async getActivity(
    from: string,
    to: string,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/activity/${from}/to/${to}`, options);
  }

  public async getToDoLists(
    assignmentId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${assignmentId}/allUserAndCustomList`, options);
  }

  public async updateToDoLists(
    assignmentId: number,
    data: HabitToDoLists,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.rawUpdateToDoLists(assignmentId, data, options);
  }

  /** Allows malformed to-do payloads to reach the server for negative API tests. */
  public async rawUpdateToDoLists(
    assignmentId: number,
    data: unknown,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.put(`${this.resourceUrl}/${assignmentId}/allUserAndCustomList`, {
      ...options,
      data,
    });
  }

  public async getInprogressToDoLists(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/allUserAndCustomToDoListsInprogress`, options);
  }

  public async getFriendsDuration(
    assignmentId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(
      `${this.resourceUrl}/${assignmentId}/friends/habit-duration-info`,
      options
    );
  }

  public async updateDuration(
    assignmentId: number,
    duration: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.put(`${this.resourceUrl}/${assignmentId}/update-habit-duration`, {
      ...options,
      params: { duration, ...options?.params },
    });
  }

  public async updateStatusAndDuration(
    assignmentId: number,
    duration: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.put(`${this.resourceUrl}/${assignmentId}/update-status-and-duration`, {
      ...options,
      params: { duration, ...options?.params },
    });
  }

  public async updateStatus(
    assignmentId: number,
    status: HabitAssignStatus,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.rawUpdateStatus(assignmentId, { status }, options);
  }

  /** Allows unsupported or missing status values to reach the server for negative API tests. */
  public async rawUpdateStatus(
    assignmentId: number,
    data: unknown,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.patch(`${this.resourceUrl}/${assignmentId}`, { ...options, data });
  }

  public async markProgressNotificationDisplayed(
    assignmentId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.put(
      `${this.resourceUrl}/${assignmentId}/updateProgressNotificationHasDisplayed`,
      options
    );
  }

  public async enroll(
    assignmentId: number,
    date: string,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${assignmentId}/enroll/${date}`, options);
  }

  /** Cancels the completion recorded for an assignment on the supplied calendar date. */
  public async unenroll(
    assignmentId: number,
    date: string,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${assignmentId}/unenroll/${date}`, options);
  }

  public async inviteFriends(
    habitId: number,
    friendsIds: number[],
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${habitId}/invite`, {
      ...options,
      params: { friendsIds: friendsIds.join(','), ...options?.params },
    });
  }

  /** Returns the confirmation response without following redirects, allowing tests to inspect it. */
  public async confirmInvitation(
    assignmentId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/confirm/${assignmentId}`, {
      maxRedirects: 0,
      ...options,
    });
  }

  public async deleteAssignment(
    assignmentId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.delete(`${this.resourceUrl}/delete/${assignmentId}`, options);
  }
}
