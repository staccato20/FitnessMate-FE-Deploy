module.exports = {
	root: true,
	env: {browser: true, es2020: true},
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:react/recommended",
		"plugin:react/jsx-runtime",
		"plugin:jsx-a11y/recommended",
		"plugin:react-hooks/recommended",
		"plugin:prettier/recommended",
		"eslint-config-prettier",
	],
	ignorePatterns: ["dist", ".eslintrc.cjs", "vite.config.ts"],
	parser: "@typescript-eslint/parser",
	plugins: ["react-refresh", "react", "@typescript-eslint", "prettier"],
	settings: {
		react: {
			version: "detect",
		},
	},
	rules: {
		"react/react-in-jsx-scope": "off",
		"react/function-component-definition": [
			2,
			{namedComponents: "arrow-function"},
		],
		quotes: ["error", "double"],
		"prettier/prettier": [
			"error",
			{
				endOfLine: "auto",
			},
		],
		"react/no-unescaped-entities": 0,
	},
}
