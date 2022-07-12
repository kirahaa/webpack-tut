const path = require("path");
const sass = require("sass");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const port = process.env.PORT || 3000;

module.exports = {
    mode: "production",
    entry: {
        app: './src/assets/js/index.js',
    },
    output: {
        filename: "./js/app.bundle.js",
        path: path.resolve(__dirname, "public"),
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.(css|sass|scss)$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ],
            },
            // {
            //     test: /\.s[ac]ss$/,
            //     exclude: /node_modules/,
            //     use: [
            //         MiniCssExtractPlugin.loader,
            //         "css-loader",
            //         {
            //             loader: "sass-loader",
            //             options: {
            //                 implementation: sass,  // dart-sass 적용
            //             }
            //         }
            //     ],
            // },
            // {
            //     test: /\.(js|jsx)$/,
            //     use: {
            //         loader: 'babel-loader',
            //     },
            // },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "src/index.html",
            minify: process.env.NODE_ENV === 'production' ? {
                collapseWhitespace: true, // 빈칸 제거
                removeComments: true, // 주석 제거
            } : false,
        }),
        new MiniCssExtractPlugin({
            filename: './css/style.css',
            chunkFilename: "[id].css"
        }),
        new CopyWebpackPlugin({
            patterns: [
                { from: 'src/assets/images', to: 'images', toType: 'dir'}
            ]
        })
    ],
    target: 'web',
    devServer: {
        hot: false,
        liveReload: true,
        open: true,
        port: port,
    },
}