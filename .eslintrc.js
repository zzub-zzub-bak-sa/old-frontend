module.exports = {
  extends: ['airbnb', 'plugin:prettier/recommended'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'operator-linebreak': ['error', 'before'],
    'max-depth': ['error', 2],
    'arrow-functions': 'on',
  },
};
