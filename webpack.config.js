const path = require("path")

module.exports = {
    // 入口文件
    // entry: './src/index.js',
    entry: {
        main: './src/index.js'
    },
    module: {
        rules: [{
            test: /\.(png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                // 配置项
                options: {
                    // [placehold] 占位符
                    // 规定文件名 [文件名].[格式]
                    name: '[name]_[hash].[ext]',
                    // 打包的路径, 相对于整个打包的路径来说的, 后面需要加上/,否则不起作用
                    outputPath: 'images/',
                    limit: 1024
                }
            }
        }, {
            // 从下到上，从右到左, sass-loader要和css-loader和style-loader结合一起使用
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader',
                'postcss-loader'
            ]
        }]
    },
    // 出口配置，最后打包的地址
    output: {
        // 文件名
        filename: 'bundle.js',
        // 路径
        path: path.resolve(__dirname, "dist")
    },
    // mode 模式
    // mode: 'production'
    mode: 'development'

}