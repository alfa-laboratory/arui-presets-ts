module.exports = {
    parser: 'typescript-eslint-parser',
    parserOptions: {
        ecmaVersion: 6,
        sourceType: 'module'
    },
    plugins: [
        'typescript', 'import', 'react'
    ],
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
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],
        'no-undef': 'off', // see https://github.com/eslint/typescript-eslint-parser/issues/416
        'import/prefer-default-export': 'off', // see https://github.com/eslint/typescript-eslint-parser
        'space-infix-ops': 'off', // see https://github.com/eslint/typescript-eslint-parser/issues/449
        'typescript/no-unused-vars': ['error'],
        'react/jsx-filename-extension': [1, { extensions: ['.jsx', '.tsx'] }],
        'typescript/type-annotation-spacing': 'error',
        'typescript/no-array-constructor': 'error',
        'typescript/no-angle-bracket-type-assertion': 'error',
        'typescript/class-name-casing': 'error',
        'typescript/member-delimiter-style': 'error',
        'typescript/no-empty-interface': 'error',
    }
};
