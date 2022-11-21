module.exports = {
	root: true,
	extends: ['eslint:recommended', 'prettier'],
	plugins: ['svelte3'],
	overrides: [{ files: ['*.svelte'], processor: 'svelte3/svelte3' }],
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2020
	},
	rules: {
		'no-cond-assign': 'warn',
		'no-constant-condition': 'warn',
		'no-unreachable': 'warn',
		'no-unused-expressions': 'warn',
		'no-constant-binary-expression': 'warn',
		'no-sequences': 'warn'
	},
	env: {
		browser: true,
		es2017: true,
		node: true
	}
};
