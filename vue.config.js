module.exports = {
  devServer: {
    proxy: {
      '^/ac': {
        target: 'http://122.51.47.205',
        pathRewrite: { '^/ac': 'ac-dev' },
        ws: true,
        changeOrigin: true,
      },
    },
  },
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          // overide with less vars
          'button-primary-background-color': '#13826f',
          blue: '#13826f',
        },
      },
    },
  },
  pwa: {
    name: '未命名的动森交易系统',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true,
    },
    themeColor: '#13826F',
    msTileColor: '#FFFFFF',
    manifestOptions: {
      background_color: '#FFFFFF',
    },
  },
}
