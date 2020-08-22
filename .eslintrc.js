module.exports = {
    "parser": "@typescript-eslint/parser",
    "extends": "airbnb-typescript-prettier",
    "parserOptions": {
      "ecmaVersion": 2018,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true,
      },
    },
    "env": {
      "jest": true,
    },
    "rules": {
     // This is covered by TS interfaces instead
      "react/prop-types": 'off',
      "import/prefer-default-export": 'off',
      "global-require": 'off',
      "import/no-dynamic-require": 'off',
      "react/jsx-props-no-spreading": 'off'
    },
    "settings": {
      "react": {
        "version": "detect"
      }
    }
  };
  