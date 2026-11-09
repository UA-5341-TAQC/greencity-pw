import { test, expect } from '@/fixtures';
import { LanguageClient } from '@/api';
import type { LanguageDto } from '@/types';

test.describe('Language Controller API', () => {
  let client: LanguageClient;

  test.beforeEach(async ({ authorizedClient }) => {
    client = await authorizedClient(LanguageClient, 'user');
  });

  test('GET /lang - should return all languages', async () => {
    const response = await client.getAllLanguages();

    expect(response.status(), 'Status code should be 200').toBe(200);

    const languages = (await response.json()) as LanguageDto[];
    expect(languages.length, 'Language list should not be empty').toBeGreaterThan(0);
    expect(languages, 'Languages should contain uk and en').toEqual(
      expect.arrayContaining([
        expect.objectContaining({ code: 'uk', name: 'Ukrainian' }),
        expect.objectContaining({ code: 'en', name: 'English' }),
      ])
    );

    for (const language of languages) {
      expect(language.id, 'Language ID should be a positive number').toBeGreaterThan(0);
      expect(language.code, 'Language code should be a non-empty string').toBeTruthy();
      expect(language.name, 'Language name should be a non-empty string').toBeTruthy();
    }
  });

  test('GET /lang/codes - should return all language codes', async () => {
    const response = await client.getAllLanguageCodes();

    expect(response.status(), 'Status code should be 200').toBe(200);

    const codes = (await response.json()) as string[];
    expect(codes, 'Language codes should contain uk and en').toEqual(
      expect.arrayContaining(['uk', 'en'])
    );
    expect(codes.every((code) => typeof code === 'string' && code.length > 0)).toBe(true);
  });

  test('GET /lang/codes/{code} - should return English language', async () => {
    const response = await client.getLanguageByCode('en');

    expect(response.status(), 'Status code should be 200').toBe(200);

    const language = (await response.json()) as LanguageDto;
    expect(language.id, 'English language ID should match').toBe(2);
    expect(language.code, 'Language code should match').toBe('en');
    expect(language.name, 'Language name should match').toBe('English');
  });

  test('GET /lang/codes/{code} - should return 404 for missing language code', async () => {
    const response = await client.getLanguageByCode('invalid-language-code');

    expect(response.status(), 'Status code should be 404').toBe(404);
  });
});
