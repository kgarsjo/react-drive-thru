var appConfig = require('./webpack/app.conf');
var browserConfig = require('./webpack/browser.conf');
var browserMinConfig = require('./webpack/browser.min.conf');

module.exports = [
    appConfig,
    browserConfig,
    browserMinConfig,
];
