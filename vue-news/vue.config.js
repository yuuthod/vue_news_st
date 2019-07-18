/* cli.vuejs.org */
module.exports = {
  /* eslint */
  lintOnSave: false,
  devServer: {
    overlay: {
      warnings: true,
      errors: true
    }
  },
  resolve: {
    alias: {
      "@": require("path").resolve(__dirname, "src")
    }
  }
}