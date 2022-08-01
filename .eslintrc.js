module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['@nuxtjs', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "off"
    // 'at-rule-no-unknown': [true, {
    //   ignoreAtRules: [
    //     'tailwind',
    //     'apply',
    //     'variants',
    //     'responsive',
    //     'screen'
    //   ]
    // }],
    // 'declaration-block-trailing-semicolon': null,
    // 'no-descending-specificity': null
  },
}
