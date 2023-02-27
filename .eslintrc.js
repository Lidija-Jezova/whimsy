module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'plugin:i18next/recommended',
        'plugin:storybook/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: ['./tsconfig.eslint.json'],
        tsconfigRootDir: './',
    },
    plugins: ['react', '@typescript-eslint', 'i18next'],
    rules: {
        quotes: ['error', 'single', 'avoid-escape'],
        camelcase: 'error',
        'spaced-comment': 'error',
        'no-duplicate-imports': 'warn',
        'react/react-in-jsx-scope': 'off',
        'react/jsx-props-no-spreading': 'warn',
        'react/display-name': 'off',
        '@typescript-eslint/ban-ts-comment': 'warn',
        '@typescript-eslint/consistent-type-imports': [
            'error',
            {
                prefer: 'type-imports',
            },
        ],
        'i18next/no-literal-string': 'warn',
        //         [
        //             'warn',
        // {
        //     'jsx-attributes': { exclude : ['data-testid'] },
        //     mode: 'jsx-only'
        // }
        // ]
        'no-unused-vars': 'warn',
    },
    overrides: [
        {
            files: ['**/src/**/*.test.{ts,tsx}'],
            rules: {
                'i18next/no-literal-string': 'off',
            },
        },
    ],
}
