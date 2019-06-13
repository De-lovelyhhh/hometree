module.exports = {
  devServer: {
    host: 'localhost',
    port: 7002,
    https: false,
    open: false,
    proxy: 'http://47.106.250.33:7002/api'
  }
}
