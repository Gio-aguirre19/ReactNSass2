var HtmlWebpack = require('html-webpack-plugin');
var HtmlWebpackConfig = new HtmlWebpack({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  minify: {
    collapseWhitespace: true,
  },
  inject: 'body'
})

module.exports = {
  entry: "./src/app.js",
  output: {
    path: __dirname + "/dist/",
    filename: "app.min.js"
  },
  plugins: [
    HtmlWebpackConfig
  ]
}
