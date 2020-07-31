const path = require('path');
const HTMLWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode:'production',
    entry:'./src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename:'bundle.js',
    },
    plugins: [
        new HTMLWebPackPlugin({
            template:"./src/index.html",
            filename:"./index.html"
        }),
        new MiniCssExtractPlugin({
            filename:'./src/css/style.css' 
        }),
    ],
    module: {
        rules: [
            {
                test:/\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,'css-loader',
                ],
            },
        ],
    },
};