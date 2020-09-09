module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  'extends': [
    // 检测vue的
    'plugin:vue/essential',
    // ESlint标准的检测
    '@vue/standard'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'semi': ['error', 'never'],  // 强制分号
    'indent': ['error', 2], // 2个空格
    'camelcase': 0, // 不强制_形式，或者驼峰
    'vue/no-parsing-error': [2, { "x-invalid-end-tag": false }],
    'vue/html-indent': ['error', 2], // vue中2个空格
    'vue/require-default-prop': 'off',  // prop的值设置默认值（后期关闭该规则）
    'vue/require-prop-type-constructor': 'off', // 关闭prop强制类型设置（后期关闭该规则）
    'vue/require-prop-types': 'off',  // 关闭prop强制类型设置（后期关闭该规则）
    'vue/prop-name-casing': 'off' // prop的属性名可以为驼峰，也可以_表示
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  globals: {
    'cwv': true
  },
  plugins: [
    'vue'
  ]
}
