import { type APIRequestContext } from '@playwright/test';

export interface TempMailClientOptions {
  password?: string;
  requestContext?: APIRequestContext;
  baseUrl?: string;
}

export interface MailTmDomain {
  id: string;
  domain: string;
  isActive: boolean;
  isPrivate: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MailTmAccount {
  id: string;
  address: string;
  quota: number;
  used: number;
  isDisabled: boolean;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface MailTmTokenResponse {
  id: string;
  token: string;
}

export interface MailTmAddress {
  address: string;
  name: string;
}

export interface MailTmMessage {
  id: string;
  accountId: string;
  msgid: string;
  from: MailTmAddress;
  to: MailTmAddress[];
  subject: string;
  intro: string;
  seen: boolean;
  isFlagged: boolean;
  isDeleted: boolean;
  hasAttachments: boolean;
  size: number;
  createdAt: string;
  updatedAt: string;
}

export interface MailTmMessageDetail extends MailTmMessage {
  text: string;
  html: string[] | string;
}

export interface VerificationLinkDetails {
  fullUrl: string;
  token?: string;
  userId?: number;
}
