const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    './app.js'
  ],
  output: {
    path: path.resolve(__dirname, 'app'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    },
    {
      test: /\.scss$/,
      loader: 'style-loader!css-loader!sass-loader'
    }]
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 9000,
    watchContentBase: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
