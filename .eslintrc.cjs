module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
    "plugin:tailwindcss/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    "prettier/prettier": "error",
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        vars: "local",
        args: "none",
        varsIgnorePattern: "usePresenter|model|reactive",
        caughtErrors: "none",
      },
    ],
    "@typescript-eslint/no-explicit-any": 2,
    eqeqeq: 2,
    "max-lines": ["error", 800],
    complexity: ["error", 20],
    "require-await": "error",
    "vue/multi-word-component-names": "off",
    "@typescript-eslint/no-empty-function": 1,
    "no-shadow": "error",
    "@typescript-eslint/ban-types": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "vue/valid-v-model": "off",
    "tailwindcss/no-custom-classname": "off",
  },
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
    },
  ],
};
