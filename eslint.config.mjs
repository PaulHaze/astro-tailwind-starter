import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginAstro from 'eslint-plugin-astro';

export default tseslint.config(
	eslint.configs.recommended,
	tseslint.configs.recommended,
	...eslintPluginAstro.configs.recommended,
	{
		// our own additional config
		languageOptions: {
			parser: tseslint.parser,
		},
		files: ['src/**/*.ts', 'src/**/*.tsx'],
		plugins: {
			// additional plugins
		},
		rules: {
			'@typescript-eslint/consistent-type-definitions': ['error', 'type'],
		},
	},
	{
		// override/add rules settings here, such as:
		// "astro/no-set-html-directive": "error"
		// 'no-unused-vars': 'warn'
		rules: {},
	}
);
