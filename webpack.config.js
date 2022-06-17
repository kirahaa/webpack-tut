const path = require("path")
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    mode: "development",
    entry: {
        app: './src/assets/js/index.js',
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/,
                exclude: /node_modules/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\. (js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader',
                    }
                ]
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "dist/index.html"
        }),
        new MiniCssExtractPlugin({
            filename: 'style.css',
            chunkFilename: "[id].css"
        })
    ],
    devServer: {
        host: 'localhost',
        port: port,
        open: true,
    }
}