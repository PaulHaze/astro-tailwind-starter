import eslintPluginAstro from 'eslint-plugin-astro';
import eslintjs from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default [
	// add more generic rule sets here, such as:
	// js.configs.recommended,
	eslintjs.configs.recommended,
	...tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		rules: {
			// override/add rules settings here, such as:
			// "astro/no-set-html-directive": "error"
			// 'no-unused-vars': 'warn',
			'no-unused-vars': 'warn',
		},
	},
	eslintPluginPrettierRecommended,
];
