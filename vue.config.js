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
        target: 'http://114.115.166.19:8090/fbs',
        ws: true,
        pathRewrite: {
          // 路径重写
          "^/fbs": "" // 这个意思就是以api开头的，定向到哪里, 如果你的后边还有路径的话， 会自动拼接上
        }
      }
    }
  }
}