import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import playwright from 'eslint-plugin-playwright';
import eslintConfigPrettier from 'eslint-config-prettier';
import checkFile from 'eslint-plugin-check-file';

export default tseslint.config(
  {
    ignores: [
      '.vscode/**/*',
      '.github/**/*',
      'allure-results/**/*',
      'allure-report/**/*',
      'node_modules/**/*',
      'playwright-report/**/*',
      'test-results/**/*',
    ],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,

  {
    ...playwright.configs['flat/recommended'],
    files: ['tests/**/*.{ts,js}'],
    rules: {
      ...playwright.configs['flat/recommended'].rules,
      'playwright/no-focused-test': 'error',
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-networkidle': 'error',
    },
  },

  {
    files: ['**/*.{ts,tsx,js}'],
    plugins: {
      'check-file': checkFile,
    },
    rules: {
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx,js}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          '**/*/': 'KEBAB_CASE',
        },
      ],
    },
  },

  {
    rules: {
      'no-console': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/ban-ts-comment': 'error',
    },
  },

  // Type-aware rule: an un-awaited promise in a test/POM silently skips its action or assertion.
  {
    files: ['**/*.ts'],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      '@typescript-eslint/no-floating-promises': 'error',
    },
  },

  // Synchronization guardrails for framework code (tests/ already get these from the recommended set).
  {
    files: [
      'pages/**/*.ts',
      'components/**/*.ts',
      'modals/**/*.ts',
      'helpers/**/*.ts',
      'fixtures/**/*.ts',
    ],
    plugins: { playwright },
    rules: {
      'playwright/no-wait-for-timeout': 'error',
      'playwright/no-networkidle': 'error',
    },
  },

  eslintConfigPrettier
);
