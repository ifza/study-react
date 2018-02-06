const merge = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common.config')

//#region 

const devConfig = {
    devtool: 'inline-source-map',
    entry: {
        app: [
            'babel-polyfill',
            'react-hot-loader/patch',
            path.join(__dirname, 'src/index.js')
        ]
    },
    output: {
        filename: '[name].[hash].js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ['style-loader', 'css-loader','sass-loader']
        }]
    },
    devServer: {
        port: 8000,
        host: '192.168.1.13',
        contentBase: path.join(__dirname, './dist'),
        historyApiFallback: true,
        proxy:{
            '/api/*':'http://192.168.1.13:9000/$1'
        }
    }

}
module.exports = merge({
    customizeArray(a, b, key) {
        if (key === 'entry.app') {
            return b
        }
        return undefined
    }
})(commonConfig, devConfig)
//#endregion