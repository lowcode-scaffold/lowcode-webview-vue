module.exports = {
  processors: [],
  overrides: [
    {
      files: ["**/*.(scss|css|html|vue)"],
      customSyntax: "postcss-scss",
    },
    {
      files: ["**/*.(html|vue)"],
      customSyntax: "postcss-html",
    },
  ],
  extends: [
    "stylelint-config-standard",
    "stylelint-config-standard-scss",
    "stylelint-prettier/recommended",
    "stylelint-config-prettier",
    "stylelint-config-recommended-vue",
    "stylelint-config-clean-order",
  ],
  rules: {
    "prettier/prettier": true,
    "at-rule-no-unknown": null,
    "no-empty-source": null,
    "unit-no-unknown": null,
    "no-descending-specificity": null,
    "selector-pseudo-class-no-unknown": null,
    "declaration-block-no-duplicate-properties": null,
    "selector-type-no-unknown": null,
    "block-no-empty": null,
    "font-family-no-missing-generic-family-keyword": null,
    "declaration-block-no-shorthand-property-overrides": null,
    "selector-class-pattern": null,
    "custom-property-pattern": null,
  },
};
