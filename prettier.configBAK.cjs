/** @type {import("prettier").Config} */
module.exports = {
	...require('prettier-config-standard'),
	printWidth: 100,
	semi: true,
	singleQuote: true,
	tabWidth: 2,
	trailingComma: 'es5',
	useTabs: true,
	pluginSearchDirs: [__dirname],
	plugins: [require.resolve('prettier-plugin-astro', 'prettier-plugin-tailwindcss')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
