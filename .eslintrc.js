module.exports = {
  extends: ['eslint-config-airbnb', 'prettier'],
  env: {
    browser: true,
    node: true,
    jasmine: true,
    jest: true,
    es6: true
  },
  globals: {
    $: false,
    jQuery: false,
    Highcharts: false,
    require: false
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  plugins: ['react', 'babel'],
  rules: {
    //'prettier/prettier': 'error', //被prettier标记的地方会抛出错误信息
    semi: 0, //不强制使用分号
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/forbid-prop-types': [
      1,
      { forbid: [''], checkContextTypes: false, checkChildContextTypes: false }
    ],
    'react/prop-types': [
      0,
      {
        ignore: [],
        customValidators: [],
        skipUndeclared: false
      }
    ],
    'no-nested-ternary': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    "react/jsx-one-expression-per-line": "off",
  }
}
