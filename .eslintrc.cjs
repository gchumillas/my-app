module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'plugin:react-hooks/recommended', 'plugin:consistent-default-export-name/fixed', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'import'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'eol-last': 'off',
    'eqeqeq': 'off',
    'quotes': ["error", "single"],
    'semi': ["error", "never"],
    'no-unused-vars': 'off',
    'func-style': ['error', 'expression'],
    'multiline-ternary': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      {
        'argsIgnorePattern': '^_',
        'destructuredArrayIgnorePattern': '^_',
        'varsIgnorePattern': '^_',
        'ignoreRestSiblings': true
      }
    ],
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'consistent-default-export-name/default-export-match-filename': 'error',
    'consistent-default-export-name/default-import-match-filename': [
      'error',
      {
        ignorePaths: ['**/*.module.css', '**/*.svg']
      }
    ],
  },
}
