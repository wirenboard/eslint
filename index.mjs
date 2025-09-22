import js from '@eslint/js';
import stylisticPlugin from '@stylistic/eslint-plugin';
import typescriptPlugin from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import globals from 'globals';

export default [
  {
    files: [
      '**/*.js',
      '**/*.mjs',
      '**/*.ts',
      '**/*.tsx',
    ],
    ignores: [
      '.git/**',
      'dist/**',
      'test/**',
      'node_modules/**',
    ],
    rules: {
      ...js.configs.recommended.rules,
      eqeqeq: 2,
      strict: [2, 'never'],
      'no-var': 1,
      'no-empty': 0,
      'no-param-reassign': 2,
      'no-restricted-globals': 0,
      'no-unused-vars': [2, {
        args: 'after-used', caughtErrors: 'none', argsIgnorePattern: '^_', varsIgnorePattern: '^(_|[A-Z])[a-zA-Z0-9]*$',
      }],
      'no-return-assign': 0,
      'no-console': 0,
      'no-underscore-dangle': 0,
      'no-restricted-imports': [2, { paths: [{ name: 'react', importNames: ['default'] }] }],
      'stylistic/semi': 1,
      'stylistic/indent': [1, 2],
      'stylistic/quotes': [1, 'single'],
      'stylistic/quote-props': [1, 'as-needed'],
      'stylistic/no-extra-semi': 1,
      'stylistic/linebreak-style': 0,
      'stylistic/eol-last': 1,
      'stylistic/keyword-spacing': 1,
      'stylistic/brace-style': 1,
      'stylistic/arrow-parens': 1,
      'stylistic/space-infix-ops': 1,
      'stylistic/space-unary-ops': 1,
      'stylistic/spaced-comment': 1,
      'stylistic/space-in-parens': 1,
      'stylistic/object-curly-spacing': [1, 'always'],
      'stylistic/no-multi-spaces': 1,
      'stylistic/switch-colon-spacing': 1,
      'stylistic/no-trailing-spaces': 1,
      'stylistic/no-multiple-empty-lines': [2, { max: 1, maxBOF: 0, maxEOF: 0 }],
      'stylistic/max-len': [1, { code: 120, comments: 160 }],
      'stylistic/comma-spacing': 1,
      'stylistic/comma-dangle': [1, {
        objects: 'always-multiline', enums: 'always-multiline', imports: 'never', arrays: 'always-multiline',
      }],
      'stylistic/member-delimiter-style': [1, {
        multiline: { delimiter: 'semi', requireLast: true }, singleline: { delimiter: 'semi', requireLast: false },
      }],
      'typescript/naming-convention': [1,
        { selector: 'variable', format: ['camelCase', 'UPPER_CASE', 'PascalCase'], leadingUnderscore: 'allow' },
        { selector: 'interface', format: ['PascalCase'] },
        { selector: 'typeAlias', format: ['PascalCase'] },
        { selector: 'enum', format: ['PascalCase'] },
        { selector: 'parameter', format: ['camelCase'], leadingUnderscore: 'allow' },
        { selector: 'class', format: ['PascalCase'] },
      ],
      'import/no-cycle': 2,
      'import/newline-after-import': 1,
      'import/no-duplicates': 2,
      'import/no-useless-path-segments': 1,
      'import/no-dynamic-require': 1,
      'import/order': [1,
        {
          'newlines-between': 'never',
          groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
          pathGroups: [
            { pattern: '@/**', group: 'internal', position: 'after' },
            { pattern: '~/**', group: 'internal', position: 'after' },
          ],
          pathGroupsExcludedImportTypes: ['internal', 'external', 'builtin'],
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
    },
    languageOptions: {
      parser: typescriptParser,
      ecmaVersion: 2022,
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.jest,
        ...globals.node,
      },
    },
    plugins: {
      import: importPlugin,
      stylistic: stylisticPlugin,
      typescript: typescriptPlugin,
    },
  },
];
