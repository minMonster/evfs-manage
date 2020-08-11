module.exports = {
  publicPath: '',
  css: {
    loaderOptions: { // 向 CSS 相关的 loader 传递选项
      less: {
        javascriptEnabled: true
      }
    }
  },
  devServer: {
    proxy: {
      "/fbs": {
        target: 'http://47.116.17.247:9000/fbs',
        ws: true,
        pathRewrite: {
          // 路径重写
          "^/fbs": "" // 这个意思就是以fbs开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        }
      }
    }
  }
}