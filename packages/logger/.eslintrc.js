/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ai-boilerplate/eslint-config/library.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
