const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

const config = {
    entry: "./src/index.ts",
    devtool: false,
    resolve: {
        extensions: [".ts", ".js"],
    },
    target: 'web',
    output: {
        filename: "index.js",
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "umd",
        library: ["Qetag"]
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: ["ts-loader"],
                enforce: "pre",
            },
        ],
    },
    plugins: [
        new ESLintWebpackPlugin({
            context: 'src',
            extensions: ['ts'],
            emitWarning: true,
            emitError: true,
            failOnError: true,
            failOnWarning: false,
            fix: true
        })
    ],
    optimization: {
        minimizer: [
            new TerserPlugin()
        ],
    },
    externals: {
        crypto: 'crypto'
    }
};

module.exports = () => {
    return config;
};
