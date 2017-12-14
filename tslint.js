module.exports = {
    extends: ['tslint-config-airbnb', 'tslint-react'],
    rules: {
        'ter-indent': [
            true,
            4,
            { SwitchCase: 1 }
        ],
        'trailing-comma': true,
        'no-increment-decrement': false,
        'max-line-length': [true, 120],
        'prefer-const': false,
        'variable-name': [true, 'allow-pascal-case'],
        align: [true, 'parameters', 'statements'],
        'jsx-curly-spacing': "always",
        'jsx-no-multiline-js': false,
        'jsx-no-lambda': true,
        'object-shorthand-properties-first': false,
        'strict-boolean-expressions': false,
        'import-name': false,
        'no-unused-variable': true,
        quotemark: [true, 'single', 'avoid-escape', 'jsx-single']
    }
};
