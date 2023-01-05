module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: 'standard-with-typescript',
  overrides: [
  ],
  "parserOptions": {
    "ecmaVersion": 2020,
    "project": ["tsconfig.json"] ,
    "sourceType": "module"
  },
  "ignorePatterns": ["**/dist/*", '*.js'],
  rules: {
  }
}
