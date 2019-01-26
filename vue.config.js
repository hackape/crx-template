const path = require("path");
module.exports = {
  lintOnSave: false,
  filenameHashing: false,
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, "src/popup/main.ts")
    }
  }
};
