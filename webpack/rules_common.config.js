module.exports = [
    {
        test: /jsx?$/,
        exclude: [
            /node_modules/,
            /\.spec\.js$/,
        ],
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
        test: /\.jsx$/,
        exclude: [
            /node_modules/,
            /\.spec\.js$/
        ],
        loader: 'eslint-loader'
    },
];
