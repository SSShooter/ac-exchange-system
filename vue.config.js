module.exports = {
  devServer: {
    proxy: {
      '^/ac': {
        target: 'http://122.51.47.205',
        ws: true,
        changeOrigin: true,
      },
    },
  },
}
