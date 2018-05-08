const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    context: path.resolve(__dirname + "/app"),
    entry: './index.js',
    output:{
        path:path.resolve(__dirname + "/dist"),
        filename:'bundle.js'
    },
    devServer:{
        contentBase:'./dist',
        port:9000,
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                use:'babel-loader',
            }
        ]
    },
    plugins:[
        // new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title:'devServer',
            template:'./index.html',
        }),
    ],
};