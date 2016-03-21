const HtmlWebpackPlugin = require('html-webpack-plugin')
const NpmInstallWebpackPlugin = require('npm-install-webpack-plugin')

module.exports = {
  devtool: 'source-map',
  entry: './app/browser.js',
  plugins: [
    new NpmInstallWebpackPlugin({ save: true }),
    new HtmlWebpackPlugin({
      template: './template.html',
      inject: 'body'
    })
  ],
  module: {
    loaders: [
      { test: /\.js$/, include: /app/, loader: 'babel' }
    ]
  },
  devServer: {
    historyApiFallback: true,
    host: 'localhost',
    port: 8080
  }
}