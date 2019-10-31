module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'global-require': 0,
    'no-trailing-spaces': [2, { skipBlankLines: true }],
    'max-len': 'off',
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
