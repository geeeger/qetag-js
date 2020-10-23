const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = function() {
    return {
        entry: './src/wscript.ts',
        devtool: false,
        target: 'webworker',
        resolve: {
            extensions: ['.ts', '.js'],
        },
        output: {
            filename: 'index.js',
            path: path.resolve(__dirname, 'worker')
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
            ]
        },
        externals: {
            crypto: 'crypto'
        }
    };
};
