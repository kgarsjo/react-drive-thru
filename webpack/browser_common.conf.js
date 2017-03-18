module.exports = {
    entry: {
        library: './src/browser_app',
    },
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /jsx?$/,
            use: [{
                loader: 'babel-loader',
                options: {
                    presets: [
                        ['es2015', { modules: false }],
                        'react',
                    ],
                },
            }],
        }],
    },
};
