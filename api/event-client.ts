import type { APIRequestContext, APIResponse } from '@playwright/test';
import { BaseApiClient, type ApiRequestOptions } from './base-api-client';
import env from '@/config/env';

/**
 * Client for interacting with the GreenCity Events API.
 */
export class EventClient extends BaseApiClient {
  private readonly resourceUrl = '/events';

  constructor(
    baseUrl: string = env.API_GREENCITY_BASE_URL,
    accessToken?: string | null,
    requestContext?: APIRequestContext
  ) {
    super(baseUrl, accessToken, requestContext);
  }

  /**
   * GET /events
   * Retrieve a paginated list of events.
   */
  public async getAllEvents(
    userId: number,
    page: number = 0,
    size: number = 10,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(this.resourceUrl, {
      ...options,
      params: {
        'user-id': userId,
        page,
        size,
        ...options?.params,
      },
    });
  }

  /**
   * GET /events/{eventId}
   * Retrieve an event by its ID.
   */
  public async getEventById(eventId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${eventId}`, options);
  }

  /**
   * POST /events
   * Create a new event using multipart/form-data.
   */
  public async createEvent(
    eventData: Record<string, unknown>,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(this.resourceUrl, {
      ...options,
      multipart: {
        addEventDtoRequest: {
          name: 'addEventDtoRequest',
          mimeType: 'application/json',
          buffer: Buffer.from(JSON.stringify(eventData)),
        },
      },
    });
  }

  /**
   * PUT /events/{eventId}
   * Update an existing event using multipart/form-data.
   */
  public async updateEvent(
    eventId: number,
    eventData: Record<string, unknown>,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.put(`${this.resourceUrl}/${eventId}`, {
      ...options,
      multipart: {
        eventDto: {
          name: 'eventDto',
          mimeType: 'application/json',
          buffer: Buffer.from(JSON.stringify(eventData)),
        },
      },
    });
  }

  /**
   * DELETE /events/{eventId}
   * Delete an event by its ID.
   */
  public async deleteEvent(eventId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.delete(`${this.resourceUrl}/${eventId}`, options);
  }

  /**
   * POST /events/{eventId}/like
   * Like an event.
   */
  public async likeEvent(eventId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${eventId}/like`, options);
  }

  /**
   * POST /events/{eventId}/dislike
   * Dislike an event.
   */
  public async dislikeEvent(eventId: number, options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${eventId}/dislike`, options);
  }

  /**
   * GET /events/{eventId}/likes/count
   * Retrieve the number of event likes.
   */
  public async getEventLikesCount(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${eventId}/likes/count`, options);
  }

  /**
   * GET /events/{eventId}/likes
   * Check whether the authenticated user liked an event.
   */
  public async checkUserLikedEvent(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${eventId}/likes`, options);
  }

  /**
   * GET /events/{eventId}/dislikes/count
   * Retrieve the number of event dislikes.
   */
  public async getEventDislikesCount(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${eventId}/dislikes/count`, options);
  }

  /**
   * POST /events/{eventId}/favorites
   * Add an event to favorites.
   */
  public async addEventToFavorites(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${eventId}/favorites`, options);
  }

  /**
   * DELETE /events/{eventId}/favorites
   * Remove an event from favorites.
   */
  public async removeEventFromFavorites(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.delete(`${this.resourceUrl}/${eventId}/favorites`, options);
  }

  /**
   * POST /events/{eventId}/ratings
   * Rate an event.
   */
  public async rateEvent(
    eventId: number,
    grade: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${eventId}/ratings`, {
      ...options,
      data: grade,
    });
  }

  /**
   * GET /events/{eventId}/attenders
   * Retrieve event attendees.
   */
  public async getEventAttenders(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${eventId}/attenders`, options);
  }

  /**
   * POST /events/{eventId}/attenders
   * Register the authenticated user as an attendee.
   */
  public async addAttenderToEvent(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${eventId}/attenders`, options);
  }

  /**
   * GET /events/attenders/count
   * Retrieve the number of events attended by a user.
   */
  public async getEventAttendersCount(
    userId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/attenders/count`, {
      ...options,
      params: {
        'user-id': userId,
        ...options?.params,
      },
    });
  }

  /**
   * POST /events/{eventId}/addToRequested
   * Request participation in an event.
   */
  public async addEventToRequested(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.post(`${this.resourceUrl}/${eventId}/addToRequested`, options);
  }

  /**
   * GET /events/{eventId}/requested-users
   * Retrieve users requesting event participation.
   */
  public async getRequestedUsers(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/${eventId}/requested-users`, options);
  }

  /**
   * DELETE /events/{eventId}/removeFromRequested
   * Cancel an event participation request.
   */
  public async removeEventFromRequested(
    eventId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.delete(`${this.resourceUrl}/${eventId}/removeFromRequested`, options);
  }

  /**
   * GET /events/organizers/count
   * Retrieve the number of events organized by a user.
   */
  public async getEventsCountByOrganizer(
    userId: number,
    options?: ApiRequestOptions
  ): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/organizers/count`, {
      ...options,
      params: {
        'user-id': userId,
        ...options?.params,
      },
    });
  }

  /**
   * GET /events/addresses
   * Retrieve event addresses.
   */
  public async getEventsAddresses(options?: ApiRequestOptions): Promise<APIResponse> {
    return await this.get(`${this.resourceUrl}/addresses`, options);
  }
}
