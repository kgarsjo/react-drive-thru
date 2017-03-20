const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: 'styles.css',
});

module.exports = {
    entry: './src/styles/styles.scss',
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }],
                // use style-loader in development
                fallback: 'style-loader'
            })
        }]
    },
    plugins: [
        extractSass,
    ],
    output: {
        path: './public/styles/',
        filename: '__bundle__styles.css',
    },
};
