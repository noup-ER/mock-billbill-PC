const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin")
const {VueLoaderPlugin} = require("vue-loader")


module.exports = {
    entry: path.resolve(__dirname,"../src/main"),
    module: {
        rules: [
            {
                test: /\.vue$/,
                use:"vue-loader"
            },
            {
                test:/\.css$/,
                use:["style-loader","css-loader"]
            },
            {
                test:/\.scss$/,
                use:["style-loader","css-loader","sass-loader",{
                    loader: "sass-resources-loader",
                    options: {
                        resources:[
                            path.resolve(__dirname,"../src/assets/scss/common.scss"),
                            path.resolve(__dirname,"../src/assets/scss/colors.scss")
                        ]
                    }
                }]
            },
            {
                test: /\.(png|svg|jpg|gif|mp4)$/,
                use: [
                    {
                        loader:'file-loader',
                        options: {
                            name:"images/[hash].[ext]"
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: "src/public/index.html",
            favicon: "src/assets/icons/billbill.ico"
        })
    ],
    resolve: {
        alias: {
            "@":path.resolve(__dirname,"../src")
        },
        extensions: ["*",".js",".vue"]
    }
}