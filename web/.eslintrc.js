module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        'no-underscore-dangle': 'off',
        'react/jsx-filename-extension': 'off',
        'react/forbid-prop-types': 'off',
        'jsx-a11y/anchor-is-valid': 'off',
        'no-plusplus': 'off',
    },
};
