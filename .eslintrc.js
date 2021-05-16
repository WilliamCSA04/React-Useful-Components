module.exports = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'react/jsx-filename-extension': [0],
    '@typescript-eslint/explicit-module-boundary-types': [0],
  },
  overrides: [
    {
      files: '*.types.ts',
      rules: {
        '@typescript-eslint/no-unused-vars': [0],
      },
    },
    {
      files: '*.test.tsx',
      rules: {
        'import/no-extraneous-dependencies': [0],
      },
    },
    {
      files: 'jest-setup.ts',
      rules: {
        'import/no-extraneous-dependencies': [0],
      },
    },
  ],
};
