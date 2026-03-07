/* eslint-disable @typescript-eslint/no-require-imports */

const eslintJs = require("@eslint/js");
const tsPlugin = require("@typescript-eslint/eslint-plugin");
const nextPlugin = require("@next/eslint-plugin-next");
const globals = require("globals");

const jsConfig = {
	...eslintJs.configs.recommended,
	files: ["**/*.{js,jsx,mjs,cjs}"],
	languageOptions: {
		...(eslintJs.configs.recommended.languageOptions ?? {}),
		ecmaVersion: 2021,
		sourceType: "module",
		globals: {
			...(eslintJs.configs.recommended.languageOptions?.globals ?? {}),
			...globals.browser,
			...globals.es2021,
			...globals.node,
		},
	},
};

const tsConfigs = tsPlugin.configs["flat/recommended"].map((config) => ({
	...config,
	languageOptions: {
		...(config.languageOptions ?? {}),
		parserOptions: {
			...(config.languageOptions?.parserOptions ?? {}),
			ecmaVersion: 2021,
			sourceType: "module",
			ecmaFeatures: {
				...(config.languageOptions?.parserOptions?.ecmaFeatures ?? {}),
				jsx: true,
			},
		},
		globals: {
			...(config.languageOptions?.globals ?? {}),
			...globals.browser,
			...globals.es2021,
			...globals.node,
		},
	},
}));

const nextConfig = {
	files: ["**/*.{ts,tsx,js,jsx}"],
	plugins: {
		"@next/next": nextPlugin,
	},
	rules: {
		...nextPlugin.configs["core-web-vitals"].rules,
	},
};

module.exports = [
	{
		ignores: ["node_modules", ".next", "styled-system"],
	},
	jsConfig,
	...tsConfigs,
	nextConfig,
];
