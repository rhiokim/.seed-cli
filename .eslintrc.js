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
    "standard-flow"
  ],
  "settings": {
    "flowtype": {
      "onlyFilesWithFlowAnnotation": false
    }
  },
  "rules": {
    "object-property-newline": "off"
  }
}
