module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/eslint-recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    indent: ['error', 2],
    'no-console': 'off',
    'no-multiple-empty-lines': ['error', { 'max': 2 }],
    'no-trailing-spaces': 'error',
    '@typescript-eslint/member-delimiter-style': ['error', {
      'multiline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
      'singleline': {
        'delimiter': 'semi',
        'requireLast': true,
      },
    }],
    'no-restricted-syntax': [
      'error',
      {
        'selector': 'FunctionDeclaration',
        'message': 'Use expressive functions instead of declarative ones',
      },
    ],
    'comma-dangle': ['error', 'always-multiline'],
    'no-useless-concat': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    'no-prototype-builtins': 'off',
    '@typescript-eslint/no-namespace': 'off',
    'no-useless-escape': 'off',
  },
};
