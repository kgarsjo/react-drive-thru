var browserCommonConfig = require('./browser_common.conf');
var webpack = require('webpack');

module.exports = Object.assign({}, browserCommonConfig, {
    output: {
        library: 'React Drive-Thru Client',
        libraryTarget: 'umd',
        path: './public/js',
        filename: 'app.min.js',
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: false,
            mangle: false,
            sorceMap: true,
        }),
    ],
});
