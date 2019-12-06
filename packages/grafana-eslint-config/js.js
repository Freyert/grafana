'use strict';

module.exports = {
  'env': {
    'es6': true
  },
  /*'extends': [
    'eslint:recommended'
  ],*/
  'parserOptions': {
    'ecmaVersion': 2019
  },
  'plugins': [
    'jsdoc',
    'prefer-arrow'
  ],
  'rules': {
    'arrow-body-style': 2,
    'camelcase': 2,
    'curly': 2,
    'dot-notation': 0,
    'eol-last': 2,
    'eqeqeq': [2, 'always', { 'null': 'ignore' }],
    'guard-for-in': 0,
    'id-blacklist': [2, 'any', 'Boolean', 'boolean', 'Number', 'number', 'String', 'string', 'Undefined', 'undefined'],
    'jsdoc/check-alignment': 2,
    'max-len': [2, { 'code': 150 }],
    'new-parens': 2,
    'no-bitwise': 0,
    'no-caller': 2,
    'no-cond-assign': 2,
    'no-console': [2, { 'allow': ['error', 'log', 'warn'] }],
    'no-debugger': 2,
    'no-empty': 0,
    'no-eval': 2,
    'no-fallthrough': 0,
    'no-new-wrappers': 2,
    'no-redeclare': 2,
    'no-restricted-imports': [2, 'moment'],
    'no-restricted-properties': [
      2,
      { 'object': 'Array', 'message': 'tsstyle#array-constructor' }
      // { 'object': 'moment', 'message': 'Use 'dateTime' instead.' }
    ],
    'no-shadow': 0,
    'no-throw-literal': 2,
    'no-trailing-spaces': 2,
    'no-unused-expressions': 2,
    'no-unused-labels': 2,
    'no-var': 2,
    'prefer-arrow/prefer-arrow-functions': 2,
    'prefer-const': 2,
    'radix': 2,
    'sort-keys': 0,
    'spaced-comment': [0, 'always'],
    'use-isnan': 2
  }
};
