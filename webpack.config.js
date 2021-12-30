const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    output: {
        filename: 'index.[contenthash].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'mock',
            template: './src/assets/index.html'
        })
    ]
}