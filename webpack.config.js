const path = require("path");
const webpack = require("webpack");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
    entry: {
        // "normal": "./src/QETag.ts",
        // "base": "./src/QETagBase.ts",
        "file": "./src/QZFile.ts",
        // "worker": "./src/QETagWorker.ts",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "umd",
        library: ["QETag", "[name]"],
        libraryExport: "default"
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
    }
};

module.exports = (_, argv) => {
    if (argv.mode === "development") {
        config.output.filename = "qetag-[name].js";
    }

    if (argv.mode === "production") {
        config.output.filename = "qetag-[name].min.js";
        config.optimization = {};
        config.optimization.minimizer = [
            new UglifyJsPlugin()
        ];
        config.devtool = "source-map";
    }
    return config;
};
