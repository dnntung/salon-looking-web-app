module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["next", "plugin:react/recommended", "airbnb"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: "latest",
        sourceType: "module",
    },
    plugins: ["react"],
    rules: {
        "react/jsx-indent": ["warn", 4],
        "react/jsx-indent-props": ["warn", 4],
        indent: ["warn", 4],
        quotes: ["warn", "double"],
        "linebreak-style": "off",
    },
};
