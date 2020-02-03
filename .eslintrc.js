module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ['airbnb'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly'
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'arrow-parens': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    semi: 0,
    'import/no-unresolved': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-array-index-key': 1,
    'react/jsx-props-no-spreading': 1,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }]
  }
}
