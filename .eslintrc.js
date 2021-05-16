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
  overrides: [
    {
      files: '*.types.ts',
      rules: {
        '@typescript-eslint/no-unused-vars': [0],
      },
    },
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    'react/jsx-filename-extension': [0],
  },
};
