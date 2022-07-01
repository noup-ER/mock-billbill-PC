const {merge} = require("webpack-merge");
const path = require("path");
const {port} = require("./util");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');



module.exports = merge(require("./webpack.base.config"),{
    mode: "development",
    output: {
        path: path.resolve(__dirname,"../dist"),
        filename: "js/[name].js"
    },
    stats:"errors-only",
    plugins: [
        new FriendlyErrorsWebpackPlugin({
            compilationSuccessInfo: {
                messages: [`You application is running here http://localhost:${port}`],
                notes: [`You bundle analyzer is running here http://localhost:${port}`]
            },
            onErrors: function (severity, errors) {
                console.log(errors);
            },
            // should the console be cleared between each compilation?
            // default is true
            clearConsole: true,

            // add formatters and transformers (see below)
            additionalFormatters: [],
            additionalTransformers: []
        })
    ]
})