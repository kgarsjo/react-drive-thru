module.exports = {
    entry: {
        library: './src/browser_app',
    },
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
};
