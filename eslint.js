module.exports = {
    overrides: [
        {
            files: ['*.{ts,tsx}'],
            parser: '@typescript-eslint/parser',
            parserOptions: {
                ecmaVersion: 2018,
                sourceType: 'module',
                ecmaFeatures: {
                    'jsx': true
                }
            }
        }
    ],
    env: {
        browser: true,
        node: true
    },
    plugins: ['@typescript-eslint', 'import', 'react', 'react-hooks'],
    settings: {
        'import/resolver': {
            node: {
                extensions: [
                    '.ts',
                    '.tsx',
                    '.js',
                    '.jsx'
                ]
            }
        }
    },
    rules: {
        '@typescript-eslint/class-name-casing': 'error',
        '@typescript-eslint/type-annotation-spacing': 'error',
        '@typescript-eslint/member-delimiter-style': 'error',
        // TODO: turn on when fix it: https://github.com/facebook/create-react-app/issues/7709
        '@typescript-eslint/consistent-type-assertions': 0,
        // '@typescript-eslint/consistent-type-assertions': ['error', {
        //     assertionStyle: 'as',
        //     objectLiteralTypeAssertions: 'never'
        // }],
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-unused-vars': [
            'error',
            { ignoreRestSiblings: true }
        ],
        'no-undef': 'off', // see https://github.com/eslint/typescript-eslint-parser/issues/416
        'import/prefer-default-export': 'off',
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],
        'space-infix-ops': 'off', // see https://github.com/eslint/typescript-eslint-parser/issues/449
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn'
    }
};
