var path = require('path');
var webpack = require('webpack');
var express = require('express');
var chalk = require('chalk');
var config = require('./webpack.dev.config');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

var jsondata = require('./src/init/mapGeoJson');
var qgis = require('./src/init/qgis');
var tujv = require('./src/init/tujv');

var app = express();
var compiler = webpack(config);

const serverOptions = {
  contentBase: config.src,
  quiet: false,
  noInfo: false,
  hot: true,
  inline: true,
  lazy: false,
  publicPath: config.output.publicPath,
  headers: { 'Access-Control-Allow-Origin': '*' },
  stats: { colors: true },
};

app.use(webpackDevMiddleware(compiler, serverOptions));
app.use(webpackHotMiddleware(compiler));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './src/init/index.html'));
});

app.get('/frame', function(req, res) {
  res.end(JSON.stringify(jsondata.Frame));
});

app.get('/jtframe', function(req, res) {
  res.end(JSON.stringify(jsondata.jtFrame));
});

app.get('/area', function(req, res) {
  res.end(JSON.stringify(jsondata.Area));
});

app.get('/facility', function(req, res) {
  res.end(JSON.stringify(jsondata.Facility));
});

app.get('/rooms', function(req, res) {
  res.end(JSON.stringify(jsondata.rooms));
});

app.get('/doors', function(req, res) {
  res.end(JSON.stringify(jsondata.doors));
});

app.get('/qgis', function(req, res) {
  res.end(JSON.stringify(qgis));
});

app.get('/tujv', function(req, res) {
  res.end(JSON.stringify(tujv));
});


app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }

  console.log(chalk.green('\n🌈  Listening at http://localhost:3000/\n'));
})
