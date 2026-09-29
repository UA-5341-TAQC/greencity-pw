import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const BASE_URL: string = process.env.BASE_URL || 'http://localhost:3000';
const API_URL: string = process.env.API_URL || 'http://localhost:8080';
const USER_API_URL: string = process.env.USER_API_URL || 'https://greencity-user.greencity.cx.ua';
const HEADLESS: boolean = process.env.HEADLESS !== 'false';
const USER_EMAIL: string = process.env.USER_EMAIL || '';
const USER_PASSWORD: string = process.env.USER_PASSWORD || 'password';

const SHORT_TIMEOUT: number = Number(process.env.SHORT_TIMEOUT) || 5000;
const MEDIUM_TIMEOUT: number = Number(process.env.MEDIUM_TIMEOUT) || 10000;
const LONG_TIMEOUT: number = Number(process.env.LONG_TIMEOUT) || 30000;

export default {
  BASE_URL,
  API_URL,
  USER_API_URL,
  HEADLESS,
  USER_EMAIL,
  USER_PASSWORD,
  SHORT_TIMEOUT,
  MEDIUM_TIMEOUT,
  LONG_TIMEOUT,
};
