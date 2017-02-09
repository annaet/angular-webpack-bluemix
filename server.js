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
    stats: {
      colors: true
    }
  })

  app.use(middleware)
  app.use(webpackHotMiddleware(compiler, {
    log: console.log
  }))
  app.use(express.static(__dirname + '/src'))
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
  })
} else {
  app.use(path.join(__dirname, 'src'))
  app.get('*', function response(req, res) {
    res.sendFile(path.join(__dirname, 'src', 'index.html'))
  })
}

const appEnv = cfenv.getAppEnv()

app.listen(appEnv.port, err => {
  if (err) {
    return console.log(err)
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', appEnv.port, appEnv.port)
})
