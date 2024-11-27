/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["@ai-boilerplate/eslint-config/server.js"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: true,
  },
};
