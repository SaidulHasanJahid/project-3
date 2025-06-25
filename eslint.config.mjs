import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Allow the use of 'any' type in TypeScript
      "@typescript-eslint/no-explicit-any": "off", // Turn off rule that disallows 'any' type
      "no-unused-vars": "warn", // Optional: To allow unused variables
    },
  },
];

export default eslintConfig;
