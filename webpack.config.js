const path = require("path");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const config = {
    entry: {
        "Normal": "./src/QETag.ts",
        "Base": "./src/QETagBase.ts",
        "File": "./src/QZFile.ts",
        "Worker": "./src/QETagWorker.ts",
    },
    resolve: {
        extensions: [".ts", ".js"],
    },
    output: {
        path: path.resolve(__dirname, "lib"),
        libraryTarget: "umd",
        library: ["qetag", "[name]"],
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
        config.output.filename = "qetag.[name].js";
    }

    if (argv.mode === "production") {
        config.output.filename = "qetag.[name].min.js";
        config.optimization = {};
        config.optimization.minimizer = [
            new UglifyJsPlugin()
        ];
        config.devtool = "source-map";
    }
    return config;
};
