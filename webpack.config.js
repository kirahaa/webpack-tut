const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: {
        app: './src/assets/js/index.js',
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "public"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                      loader: 'css-loader',
                      options: {
                          url: true,
                      }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(png|jpe?g)$/i,
                loader: "url-loader",
                options: {
                    limit: 8000,
                    name: 'images/[name].[ext]',
                }
            },
            {
                test: /\.svg$/,
                loader: "file-loader",
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'images', toType: 'dir'}
            ]
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
    }
}