module.exports = {
  extends: [
    "airbnb-base",
    "plugin:eslint-plugin/recommended",
    "eslint:recommended",
    "plugin:react/recommended",
  ],
  plugins: ["react"],
  rules: {
    "no-restricted-syntax": 0,
    "react/no-unescaped-entities": 0,
    "react/require-default-props": 0,
    "react/no-unescaped-entities": "off",
    "padded-blocks": ["error", "never"],
    "comma-dangle": "off",
  },
  "linebreak-style": ["error", "windows"],
};
