module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'eslint-config-prettier',
        'prettier',
        'prettier/prettier',
        // 'stylelint',
        'next/core-web-vitals',
        'plugin:eslint-plugin-import/recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 13,
        sourceType: 'module',
    },
    plugins: ['react', '@typescript-eslint', 'prettier', 'react-hooks'],
    rules: {
        'linebreak-style': 0,
        'no-console': 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-use-before-define': 'off',
        'arrow-body-style': 'error',
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                ts: 'never',
                tsx: 'never',
            },
        ],
        'no-restricted-imports': [
            'error',
            {
                patterns: ['../'],
            },
        ],
        'padding-line-between-statements': 'off',
        'prettier/prettier': 'error',

        '@typescript-eslint/no-unused-vars': 'error',
        '@typescript-eslint/no-use-before-define': 'error',
        'no-unused-vars': ['error', { caughtErrors: 'all' }],

        'react/jsx-filename-extension': [
            'warn',
            {
                extensions: ['.tsx'],
            },
        ],
        quotes: ['error', 'single'],
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
};
