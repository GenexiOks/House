module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ["eslint:recommended", "plugin:react/recommended", "plugin:prettier/recommended"],
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": [
            "error",
            {
                singleQuote: true,
                trailingComma: "es5",
                tabWidth: 2,
                useTabs: false,
                endOfLine: "auto",
                jsxBracketSameLine: false,
                bracketSpacing: true,
                semi: true,
                arrowParens: "always",
                htmlWhitespaceSensitivity: "css",
                proseWrap: "never",
            },
        ],
    },
};
