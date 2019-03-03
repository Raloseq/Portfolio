const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtratPlugin = require('mini-css-extract-plugin');
const devMode = process.env.NODE_ENV !== 'production';
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: './js/main.js',
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
            {
                test: /\.png$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        mimetype: 'image/png',
                    },
                }, ],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader'],
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    devMode ? 'style-loader' : MiniCssExtratPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            url: false
                        }
                    },
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './index.html'
        }),
        new MiniCssExtratPlugin({
            filename: devMode ? '[name].css' : '[name].[hash].css',
            chunkFilename: devMode ? '[id].css' : '[id].[hash].css',
        })
    ]
}