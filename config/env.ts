import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const BASE_URL: string = process.env.BASE_URL || 'http://localhost:3000';
const API_USER_BASE_URL: string = process.env.API_USER_BASE_URL || 'http://localhost:8080';
const API_GREENCITY_BASE_URL: string =
  process.env.API_GREENCITY_BASE_URL || 'http://localhost:8080';
const HEADLESS: boolean = process.env.HEADLESS !== 'false';
const USER_EMAIL: string = process.env.USER_EMAIL || '';
const USER_PASSWORD: string = process.env.USER_PASSWORD || 'password';
const USER_ID: number = Number(process.env.USER_ID) || 0;
const USER_NAME: string = process.env.USER_NAME || 'Test User';

const ADMIN_EMAIL: string = process.env.ADMIN_EMAIL || '';
const ADMIN_PASSWORD: string = process.env.ADMIN_PASSWORD || '';
const EMPLOYEE_EMAIL: string = process.env.EMPLOYEE_EMAIL || '';
const EMPLOYEE_PASSWORD: string = process.env.EMPLOYEE_PASSWORD || '';
const MODERATOR_EMAIL: string = process.env.MODERATOR_EMAIL || '';
const MODERATOR_PASSWORD: string = process.env.MODERATOR_PASSWORD || '';

const SHORT_TIMEOUT: number = Number(process.env.SHORT_TIMEOUT) || 5000;
const MEDIUM_TIMEOUT: number = Number(process.env.MEDIUM_TIMEOUT) || 10000;
const LONG_TIMEOUT: number = Number(process.env.LONG_TIMEOUT) || 30000;

export default {
  BASE_URL,
  API_USER_BASE_URL,
  API_GREENCITY_BASE_URL,
  HEADLESS,
  USER_EMAIL,
  USER_PASSWORD,
  USER_ID,
  USER_NAME,
  ADMIN_EMAIL,
  ADMIN_PASSWORD,
  EMPLOYEE_EMAIL,
  EMPLOYEE_PASSWORD,
  MODERATOR_EMAIL,
  MODERATOR_PASSWORD,
  SHORT_TIMEOUT,
  MEDIUM_TIMEOUT,
  LONG_TIMEOUT,
};
