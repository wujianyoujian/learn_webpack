# webpack
* webpack是一个模块打包工具
* webpack.config.js为配置文件

## 下载

* `npm install webpack webpack-cli`
* `webpack-cli`的作用就是可以在命令行下使用`webpack`的命令

## `npx`

* 调用项目中安装的模块

## 命令

* 设置配置文件

  > `npx webpack --config webpack.config.js`

* 在命令行下打包

  > `npx webpack index.js` 在没有配置文件的情况下需要指定人口文件进行打包

* 使用快捷命令，`npm run bundle`

  > 在`package.json`中的`script`进行配置

  ```json
  "scripts": {
      "bundle": "webpack"
   }
  ```

## 配置项

* `entry`

  ```javascript
  {
      // 入口文件
      main: './index.js'
  }
  ```

* `output`

  ```javascript
  {
      // 打包后的js文件
  	filename: 'bundle.js',
      // 路径, 需要使用path的resolve转化为绝对路径
      path: path.resolve(__dirname, "dist")
  }
  ```

* `mode`

  > `development` 开发模式，代码不会被压缩

  > `production` 生产模式，代码会被压缩，默认为生产模式，不带这个参数但是会报错

## `loader`

* 处理非js文件的预处理器，可以打包非js的静态文件

* 如果有非js文件的，需要指定规则，告诉webpack需要加载什么loader去处理

* 从下到上加载loader

  ### `file-loader`
  
  ```javascript
  module: {
      result: [{
          以.png结尾的文件
          test: /\.png$/,
          use: {
          	// 将文件发送到输出文件夹，并返回（相对）URL
          	loader: 'file-loader'
      	}
      }]
}
  ```

### `url-loader`

* 可以将文件打包成base64格式进js文件中
* `url-loader`可以实现`file-loader`的功能

#### 参数

```javascript
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
            // 规定文件的大小，如果小于就打包进js文件，大于就打包进指定目录下
            limit: 1024
        }
	}
}]
```

### `css-loader, style-loader`

* `css-loader和style-loader`需要在一起使用
* 配置项`importloader`

```javascript
module: {
    rules: [{
        test: '/\.scss$/',
        use: [
            'style-loader',
            {
                loader: 'css-loader',
                option: {
                    // 这个参数的作用是当解析一个css文件的时候，css文件里面引入了一个scss文件，解析的顺序是从下往上的，再次解析scss文件的时候，前面的sass-loader就不会解析了，因此这个参数的作用就是让引入的文件全部从最开始进行解析
                    importLoaders: 2,
                    // 以模块块的形式引入css，就不会造成css样式的冲突
                    modules: true
                }
            },
            'sass-loader',
            'postcss-loader'
        ]
    }]
}
```

```javascript
import style from './avatar.scss'

img.classList.add(style.avatar)
```



### `sass-loader`

* `sass-loader`要与`css-loader`和`style-loader`一起使用

### `postcss-loader`

* 将css转化为其他浏览器所兼容的版本

  > 使用需要下载`postcss-loader`, `autoprefixer`为`postcss-loader`的一个插件
  >
  > `npm install autoprefixer -D`
  >
  > 创建一个`postcss.config.js`的文件引入这个插件
  >
  > ```javascript
  > module.exports = {
  >     plugins: [
  >         // 后面还要加上这么一句话
  >         require('autoprefixer')({browsers:['>0.15% in CN']})
  >     ]
  > }
  > ```
  >
  > 

## 注意

* 总是会出现，loader安装之后，添加rule，打包出现错误，解决方法之一，删除`node_module`，使用`cnpm`或者`npm`重新安装

* 如果出现<font color="#f00">`Replace Autoprefixer browsers option to Browserslist config. Use browserslis`</font>的错误

  ```javascript
  module.exports = {
      plugins: [
          require('autoprefixer')({
              overrideBrowserslist: [
                  "Android 4.1",
                  "ios 7.1",
                  "Chrome > 31",
                  "ff >31",
                  "ie >= 8"
              ],
              grid: true
          })
      ]
  }
  ```

  参考文章

  [webpack出现问题]: http://www.manongjc.com/detail/15-aznzmcuevjzkgwi.html

  

  



