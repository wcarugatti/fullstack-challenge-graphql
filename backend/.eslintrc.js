module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "plugin:@typescript-eslint/recommended",
    "prettier/@typescript-eslint",
    "plugin:prettier/recommended",
  ],
  env: {
    es6: true,
    node: true,
    jest: true,
  },
  rules: {
    "no-var": "error",
    semi: "error",
    indent: ["error", 2, { SwitchCase: 1 }],
    "no-multi-spaces": "error",
    "space-in-parens": "error",
    "no-multiple-empty-lines": "error",
    "prefer-const": "error",
  },
};
