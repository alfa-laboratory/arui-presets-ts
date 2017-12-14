module.exports = {
    settings: {
        'import/resolver': [
            'webpack'
        ]
    },
    rules: {
        'import/extensions': ['error', 'always', {
            js: 'never',
            jsx: 'never',
            ts: 'never',
            tsx: 'never'
        }],
    }
};
