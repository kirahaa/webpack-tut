const path = require("path");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: {
        app: './src/assets/js/index.js',
    },
    output: {
        filename: "app.bundle.js",
        path: path.resolve(__dirname, "./dist/"),
    },
    // optimization: {
    //     minimizer: []
    // },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/assets/js'),
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                },
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: "html-loader",
                        // options: {
                        //     minimize: true // 옵션값들.
                        // }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/index.html",  // input
            filename: "./index.html"  // output : dist 폴더의 index.html
        })
    ]
}