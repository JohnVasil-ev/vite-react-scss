import globals from 'globals';
import { FlatCompat } from '@eslint/eslintrc';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';

const eslintrc = new FlatCompat({
	baseDirectory: import.meta.dirname,
});

export default [
	...eslintrc.plugins('@typescript-eslint', 'simple-import-sort'),
	...eslintrc.extends('plugin:@typescript-eslint/recommended'),
	{
		name: 'Root',
		files: [
			'**/*.ts',
			'**/*.tsx',
		],
		languageOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
			globals: {
				...globals.browser
			},
			parser: typescriptEslintParser,
			parserOptions: {
				project: './tsconfig.json',
				ecmaFeatures: {
					jsx: true,
					modules: true,
				},
			},
		},
		plugins: {
			'@typescript-eslint': typescriptEslintPlugin,
		},
		rules: {
			'import/no-named-as-default': 'off',
			quotes: 'off',
			'@typescript-eslint/quotes': ['error', 'single'],
			'@typescript-eslint/array-type': ['error', { default: 'generic' }],
			'@typescript-eslint/indent': ['error', 'tab'],
			'@typescript-eslint/no-unsafe-call': 'error',
			'@typescript-eslint/no-var-requires': 'error',
			'@typescript-eslint/no-explicit-any': 'error',
			'@typescript-eslint/no-unsafe-return': 'error',
			'@typescript-eslint/no-use-before-define': 'error',
			'@typescript-eslint/no-unsafe-assignment': 'error',
			'@typescript-eslint/no-unsafe-member-access': 'error',
			'@typescript-eslint/explicit-member-accessibility': 'off',
			'@typescript-eslint/explicit-function-return-type': 'off',
			'@typescript-eslint/member-delimiter-style': [
				'error',
				{
					multiline: {
						delimiter: 'semi',
						requireLast: true,
					},
					singleline: {
						delimiter: 'semi',
						requireLast: false,
					},
					overrides: {
						interface: {
							multiline: {
								delimiter: 'semi',
								requireLast: true,
							},
						},
					},
				},
			],
			'@typescript-eslint/no-unused-vars': [
				'error',
				{
					argsIgnorePattern: '^_',
				},
			],
			'no-console': [
				'error',
				{
					allow: ['warn', 'error'],
				},
			],
			'no-shadow': ['off'],
			'@typescript-eslint/no-shadow': 'error',
			'simple-import-sort/exports': 'error',
			'simple-import-sort/imports': [
				'error',
				{
					groups: [
						['^\\w', '^@\\w', '^#\\w'],
						[
							'^@/app/\\w',
							'^@/store$',
							'^@/store/\\w',
							'^@/pages/\\w',
							'^@/widgets/\\w',
							'^@/features/\\w',
							'^@/shared/\\w',
							'^@/\\w',
						],
						[
							'^\\.\\.(?!/?$)',
							'^\\.\\./?$',
							'^\\./(?=.*/)(?!/?$)',
							'^\\.(?!/?$)',
							'^\\./?$',
						],
					],
				},
			],
		},
	},
];
