module.exports = {
  root: true,
  env: {
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": "off",
    "no-debugger": "off",
    "comma-dangle": "off",
    "space-before-function-paren": "off",
  },
  extends: ["plugin:vue/recommended", "@vue/standard"],
};
