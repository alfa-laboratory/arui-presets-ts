module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
        ecmaFeatures: {
            'jsx': true
        }
    },
    env: {
        browser: true,
        node: true
    },
    plugins: ['@typescript-eslint', 'import', 'react'],
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
        '@typescript-eslint/no-angle-bracket-type-assertion': 'error',
        '@typescript-eslint/no-array-constructor': 'error',
        '@typescript-eslint/no-empty-interface': 'error',
        '@typescript-eslint/no-unused-vars': 'error',
        'no-undef': 'off', // see https://github.com/eslint/typescript-eslint-parser/issues/416
        'import/prefer-default-export': 'off',
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],
        'space-infix-ops': 'off', // see https://github.com/eslint/typescript-eslint-parser/issues/449
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }]
    }
};
