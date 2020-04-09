module.exports = {
  devServer: {
    proxy: {
      '^/ac': {
        target: 'http://122.51.47.205',
        pathRewrite: { '^/ac': 'ac-dev' },
        ws: true,
        changeOrigin: true
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // overide with less vars
          'button-primary-background-color': '#13826f',
          blue: '#13826f'
        }
      }
    }
  }
}
