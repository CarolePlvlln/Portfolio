module.exports = {
  extends: [
    "plugin:eslint-plugin/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react"],
  rules: {
    "no-restricted-syntax": 0,
    "react/no-unescaped-entities": 0,
    "react/require-default-props": 0,
    "padded-blocks": ["error", "never"],
    "comma-dangle": "off",
    "linebreak-style": ["error", "windows"],
  },
};
