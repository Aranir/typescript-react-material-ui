const path = require("path");
const webpack = require('webpack');
const fs = require('fs');


const cssModuleLoaders = [
    'css?sourceMap&modules&importLoaders=2&localIdentName=[name]__[local]___[hash:base64:5]',
    'postcss',
    'sass?sourceMap&sourceMapContents&outputStyle=expanded',
];
module.exports = {
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js", ".jsx", ".sass", ".css"]
    },
    entry: [
        'babel-polyfill',
        "react-hot-loader/patch", // activate HMR for React
        // "webpack-dev-server/client?http://localhost:3000",// bundle the client for webpack-dev-server and connect to the provided endpoint
        // "webpack/hot/only-dev-server", // bundle the client for hot reloading, only- means to only hot reload for successful updates
        './src/index.tsx'
    ],
    devtool: 'cheap-module-source-map',

    plugins: [
        new webpack.HotModuleReplacementPlugin(), // enable HMR globally
        new webpack.NamedModulesPlugin() // prints more readable module names in the browser console on HMR updates
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: ["babel-loader", "source-map-loader"],
                exclude: /node_modules/
            },
            {
                test: /\.tsx?$/,
                loaders: [
                    'react-hot-loader/webpack',
                    'babel-loader',
                    'awesome-typescript-loader'

                ],
                exclude: path.resolve(__dirname, 'node_modules'),
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
        ]
    },

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, "./public"),
        publicPath: "/"
    },
    devServer: {
        hot: true,
        historyApiFallback: true,
        contentBase: path.join(__dirname, "public"),
        publicPath: "/",
        port: 3000
    }
};