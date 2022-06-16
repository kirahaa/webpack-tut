const path = require("path");

module.exports = {
    mode: "development",
    entry: {
        app: './src/assets/js/index.js',
    },
    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "./dist/"),
    },
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
            }
        ]
    },
}