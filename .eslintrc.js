module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "plugin:prettier/recommended",
    "eslint:recommended",
  ],
  parserOptions: {
    parser: "@babel/eslint-parser",
  },
  rules: {
    "no-console": 0,
    "func-names": ["error", "never"],
    "no-unused-vars": "off",
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        selfClosingTag: "never",
      },
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        multiline: "never",
      },
    ],
  },
};
