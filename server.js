/* eslint no-console: 0 */

const path = require('path')
const cfenv = require('cfenv')
const express = require('express')
const webpack = require('webpack')
const webpackMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const config = require('./webpack.config.js')

const isDeveloping = process.env.NODE_ENV !== 'production'
const app = express()

if (isDeveloping) {
  const compiler = webpack(config)
  const middleware = webpackMiddleware(compiler, {
    publicPath: config.output.publicPath,
    contentBase: 'app',
    stats: {
      colors: true,
      hash: false,
      timings: true,
      chunks: false,
      chunkModules: false,
      modules: false
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'app', 'index.html'))
  })
} else {
  app.use(path.join(__dirname, 'app'))
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'app', 'index.html'))
  })
}

const appEnv = cfenv.getAppEnv()

app.listen(appEnv.port, function onStart(err) {
  if (err) {
    return console.log(err)
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', appEnv.port, appEnv.port)
})
