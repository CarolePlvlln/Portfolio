module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended", "airbnb"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "arrow-parens": "off",
    "consistent-return": "off",
    "comma-dangle": "off",
    "max-len": "off",
    "generator-star-spacing": "off",
    "no-unused-vars": "warn",
    "no-console": ["warn", { allow: ["warn"] }],
  },
};
