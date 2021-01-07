module.exports = {
    "extends": [
        "airbnb/base",
        "eslint-config-prettier",
        "plugin:react/recommended",
    ],
    "plugins": [
        "eslint-plugin-prettier",
        "react",
        "react-hooks",
        "custom-rules",
        "you-dont-need-lodash-underscore",
    ],
    "env": {
        "browser": true,
    },
};