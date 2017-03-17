var browserCommonConfig = require('./browser_common.conf');

module.exports = Object.assign({}, browserCommonConfig, {
    output: {
        library: 'React Drive-Thru Client',
        libraryTarget: 'umd',
        path: './public/js',
        filename: 'app.js',
    }
});
