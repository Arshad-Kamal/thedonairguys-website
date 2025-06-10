module.exports = {
	root: true,
	extends: [
		'eslint:recommended',
		'plugin:svelte/recommended',
		'prettier'
	],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020,
		extraFileExtensions: ['.svelte']
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	},
	overrides: [
		{
			files: ['*.svelte'],
			parser: 'svelte-eslint-parser'
		}
	],
	rules: {
		// Custom rules can be added here
		'no-unused-vars': ['error', {
			argsIgnorePattern: '^_',
			varsIgnorePattern: '^_'
		}],
		'no-console': ['warn', {
			allow: ['warn', 'error', 'info']
		}]
	}
};
