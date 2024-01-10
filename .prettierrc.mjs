/** @type {import("prettier").Config} */
export default {
  ...require("prettier-config-standard"),
  printWidth: 100,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: "es5",
  useTabs: true,
  pluginSearchDirs: [__dirname],
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
