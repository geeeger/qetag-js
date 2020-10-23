const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');

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
