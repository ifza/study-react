//wenpack合并插件
const merge = require('webpack-merge')

const webpack = require('webpack')
//代码压缩插件
const UglifyJS = require('uglifyjs-webpack-plugin')
//打包优化插件
const CleanWebpackPlugin = require('clean-webpack-plugin')
//css提取插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')
//公共webpack配置文件
const commonConfig = require('./webpack.common.config')

//#region 
const publiConfig = {
    devtool:'cheap-module-source-map',
    module:{
        rules:[{
            test:/\.scss$/,
            use:ExtractTextPlugin.extract({
                fallback:'style-loader',
                use:['css-loader','sass-loader']
            })
        }]
    },
    plugins:[
        new CleanWebpackPlugin(['dist']),
        new UglifyJS(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV':JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin({
            filename:'[name].[contenthash:5].css',
            allChunks:true
        })
    ]
}

module.exports = merge(commonConfig,publiConfig)
//#endregion