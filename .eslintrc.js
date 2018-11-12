module.exports = {
  "parser": "babel-eslint",
  "env": {
    "node": true,
    "es6": true
  },
  "globals": {
  },
  "plugins": [
    "flowtype"
  ],
  "extends": [
    "standard",
    "plugin:flowtype/recommended"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "rules": {
  }
}
