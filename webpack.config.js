const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client?reload=true',
    './src/app.js'
  ],
  devtool: 'source-map',
  output: {
    path: __dirname + '/src',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader'
    }, {
      test: /(\.scss|\.css)$/,
      loader: 'style-loader!css-loader!sass-loader'
    }, {
      test: /\.(png|woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?limit=100000'
    }, {
      test: /\.html$/,
      exclude: /node_modules/,
      loader: 'raw-loader'
    }]
  },
  resolve: {
    modules: ['bower_components', 'node_modules'],
    descriptionFiles: ['package.json', 'bower.json']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery'
    })
  ]
}
