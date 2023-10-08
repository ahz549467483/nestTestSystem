/*
 * @Author: chenchen
 * @Date: 2023-09-14 16:57:30
 * @LastEditors: Do not edit
 * @LastEditTime: 2023-09-19 15:07:55
 */
module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: 'tsconfig.json',
		tsconfigRootDir: __dirname,
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint/eslint-plugin'],
	extends: [
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	root: true,
	env: {
		node: true,
		jest: true,
	},
	ignorePatterns: ['.eslintrc.js'],
	rules: {
		'@typescript-eslint/interface-name-prefix': 'off',
		'@typescript-eslint/explicit-function-return-type': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'off',
		'indent': 'off',
		'no-tabs': 'off',
		'prettier/prettier': ['error', { 'tabWidth': 4, 'useTab': true }],
        'no-mixed-spaces-and-tabs': 0
	},
};
