module.exports = {
  devServer: {
    // 代理配置
    proxy: {
      // 表示如果我们的请求地址有/api的时候,就出触发代理机制
      // http://localhost:8888/api/login ->  http://www.baidu.com/api/login
      // 接口域名发生变化 其余地址保持不变
      '/api': {
        target: 'http://localhost:3000', // 我们要代理的真实接口地址
        changeOrigin: true, // 是否跨域 需要设置此值为true 才可以让本地服务代理我们发出请求
        // 路径重写
        // 如果我们不光要使得域名修改,而且还需要改变其它路径,则需要做路径重写
        // 比如 我们想把请求的api去掉（真实后台没有api前缀情况）
        // localhost:8888/api/login -> www.baidu.com/login
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
