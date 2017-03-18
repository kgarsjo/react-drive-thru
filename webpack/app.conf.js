var webpack = require('webpack');
var path = require('path');
var fs = require('fs');
var commonRules = require('./rules_common.config');

var nodeModules = {};
fs.readdirSync('node_modules')
    .filter(function(x) {
        return ['.bin'].indexOf(x) === -1;
    })
    .forEach(function(mod) {
        nodeModules[mod] = 'commonjs ' + mod;
    });

module.exports = {
    entry: './src/app.js',
    externals: nodeModules,
    module: {
        rules: commonRules,
    },
    output: {
        library: 'React Drive-Thru Server',
        libraryTarget: 'commonjs',
        path: './bin',
        filename: 'app.js',
    },
};
