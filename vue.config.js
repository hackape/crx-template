const path = require("path");

module.exports = {
  lintOnSave: false,
  filenameHashing: false,
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, "src/popup/main.ts"),
      background: path.resolve(__dirname, "src/background.ts"),
      content: path.resolve(__dirname, "src/content.ts")
    }
  },
  chainWebpack: config => {
    return config.plugin("html").tap(args => {
      options = args[0];
      options.excludeChunks = ["background", "content"];
      options.minify = false;
      return args;
    });
  }
};
