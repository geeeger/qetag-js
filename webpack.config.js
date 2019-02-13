const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
    mode: "production",
    entry: "./src/index.ts",
    resolve: {
        extensions: [".ts", ".js"],
    },
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
                loader: "tslint-loader",
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
        ],
    },
};

module.exports = config;
