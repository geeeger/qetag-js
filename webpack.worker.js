const path = require('path');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

module.exports = function() {
    return {
        entry: './src/wscript.ts',
        devtool: false,
        target: 'web',
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'worker'),
            libraryTarget: 'var',
        },
        module: {
            rules: [
                {
                    test: /\.ts$/,
                    use: ["ts-loader"],
                    enforce: "pre",
                },
                {
                    test: /\.ts$/,
                    enforce: "pre",
                    loader: "eslint-loader",
                    exclude: /(node_modules)/,
                    options: {
                        /* Loader options go here */
                    },
                },
            ],
        },
        optimization: {
            minimizer: [
                new UglifyJsPlugin()
            ]
        },
        externals: {
            crypto: 'crypto'
        }
    };
};
