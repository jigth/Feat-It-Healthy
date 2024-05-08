// @ts-check

const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');

/** @type {import('eslint').Linter.FlatConfig[]} */
module.exports = [
  ...tseslint.config(
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
  ),
  {
    ignores: [ "eslint.config.js" ]
  },
  {
    files: [ "**/*.entity.ts" ],
    rules: {
      "no-unused-vars": "off"
    },
  }
]