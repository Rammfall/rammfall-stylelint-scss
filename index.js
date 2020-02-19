module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-config-sass-guidelines",
    "stylelint-config-property-sort-order-smacss"
  ],
  "plugins": [
    "stylelint-scss",
    "stylelint-prettier"
  ],
  "rules": {
    "prettier/prettier": true,
    "selector-class-pattern": "^(?:(?:o|c|u|t|s|is|has|_|js|qa)-)?[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:__[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:--[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)?(?:\\[.+\\])?$",
    "rule-empty-line-before": "never",
    "selector-pseudo-element-colon-notation": "single",
    "at-rule-empty-line-before": "never"
  }
};
