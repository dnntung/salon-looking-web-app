module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        "next",
        'plugin:react/recommended',
        'airbnb',

    ],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    plugins: [
        'react',
    ],
    rules: {
        indent: ["warn", 4],
        "react/react-in-jsx-scope": "off",
        quotes: ["warn", "double"],
        "linebreak-style": "off",
        semi: "off"
    },
};
