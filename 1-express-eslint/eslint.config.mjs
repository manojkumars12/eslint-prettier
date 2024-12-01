import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,ts}"]},
  {languageOptions: { globals: globals.browser },
    rules: {
      //Indentation rule: 2 spaces
      "indent": ["error", 2],
      // Space before function parenthesis
      "space-before-function-paren": ['error', 'always'],
      "space-in-parens": ["error", "never"]

    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];