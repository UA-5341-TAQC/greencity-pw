import dotenv from 'dotenv';
import path from 'path';

import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.resolve(__dirname, '../.env') });

const BASE_URL: string = process.env.BASE_URL || 'http://localhost:3000';
const API_URL: string = process.env.API_URL || 'http://localhost:8080';
const HEADLESS: boolean = process.env.HEADLESS !== 'false';
const USER_EMAIL: string = process.env.USER_EMAIL || '';
const USER_PASSWORD: string = process.env.USER_PASSWORD || 'password';

export default {
  BASE_URL,
  API_URL,
  HEADLESS,
  USER_EMAIL,
  USER_PASSWORD,
};
