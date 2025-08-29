import globals from "globals";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
import prettier from "eslint-plugin-prettier";
export default defineConfig([
     {
          files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
          languageOptions: { globals: globals.browser },
          plugins: {
               prettier,
          },
          rules: {
               "prettier/prettier": "warn",
          },
     },
     tseslint.configs.recommended,
]);
