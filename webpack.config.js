var appConfig = require('./webpack/app.conf');
var browserConfig = require('./webpack/browser.conf');
var browserMinConfig = require('./webpack/browser.min.conf');
var stylesConfig = require('./webpack/styles.conf');

module.exports = [
    appConfig,
    browserConfig,
    stylesConfig,
];
