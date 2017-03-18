var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

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
        rules: [
            {
                test: /jsx?$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                            'react',
                        ],
                    },
                }],
            },
            {
                test: /jsx?$/,
                exclude: /node_modules/,
                loader: 'eslint-loader'
            },
        ],
    },
    output: {
        library: 'React Drive-Thru Server',
        libraryTarget: 'commonjs',
        path: './bin',
        filename: 'app.js',
    },
};
