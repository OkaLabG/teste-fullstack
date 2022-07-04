module.exports = {
  env: {
    commonjs: true,
    // es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': 'off',
    'class-methods-use-this': 'off',
    'no-promise-executor-return': 'off',
    'consistent-return': 'off',
    'no-unused-vars': 'warning',
    camelcase: 'on',
  },
};
