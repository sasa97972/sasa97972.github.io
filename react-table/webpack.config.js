const path =  require('path');
const webpack = require('webpack');

const config = {
    entry: './src/index.js',
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        contentBase: './',
        hot: true,
        overlay: true
    },
};

module.exports = (env, options) => {
    const mode = options.mode;
    config.devtool = mode === 'production' ? 'source-map' : 'eval-sourcemap';
    return config;
};