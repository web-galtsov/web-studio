const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: "./index.js",
    mode: "development",
    output: {
        filename: "[name].[contenthash].js",
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        compress: true,
        port: 9000,
        watchContentBase: true,
        progress: true
    },
    optimization: {
        splitChunks: {
            chunks: "all"
        }
    },
    plugins: [
        new HtmlWebPackPlugin({template: './index.html' }),
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jQuery"
        })
        ],

    resolve: {
       extensions: ['.js', '.jsx', '.css']
     },
       module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    'css-loader'
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: ["file-loader"]
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2)(\??\#?v=[.0-9]+)?$/,
                use: ["file-loader"]
            },
        ]
    },
};