const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');

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
            ]
        },
        externals: {
            crypto: 'crypto'
        }
    };
};
