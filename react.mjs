import reactPlugin from 'eslint-plugin-react';

export default [
  {
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      react: reactPlugin,
    },
    rules: {
      'react/jsx-uses-vars': 2,
      'react/react-in-jsx-scope': 0,
      'react/jsx-uses-react': 0,
      'stylistic/jsx-quotes': [1, 'prefer-double'],
      'stylistic/jsx-closing-bracket-location': 1,
      'stylistic/jsx-curly-spacing': [1, { when: 'never', children: true }],
      'stylistic/jsx-self-closing-comp': [1, { component: true, html: false }],
      'stylistic/jsx-sort-props': [1, { noSortAlphabetically: true, shorthandLast: true, callbacksLast: true }],
      'stylistic/jsx-curly-brace-presence': [1, 'never'],
      'stylistic/jsx-closing-tag-location': [1, 'tag-aligned'],
      'stylistic/jsx-max-props-per-line': [1, { when: 'multiline', maximum: 1 }],
      'stylistic/jsx-first-prop-new-line': [1, 'multiline'],
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
];
