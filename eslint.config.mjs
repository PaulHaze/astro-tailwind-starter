import eslintPluginAstro from 'eslint-plugin-astro';
import js from '@eslint/js';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	js.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
			// 'no-unused-vars': 'warn',
		},
	},
];