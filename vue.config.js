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
  },
  pwa: {
    name: '未命名的动森交易系统',
    workboxOptions: {
      skipWaiting: true,
      clientsClaim: true
    },
    iconPaths: {
      favicon32: '/favicon-32x32.png',
      favicon16: '/favicon-16x16.png',
      appleTouchIcon: '/apple-touch-icon.png',
      maskIcon: '/safari-pinned-tab.svg',
      msTileImage: '/mstile-150x150.png'
    },
    manifestOptions: {
      background_color: '#FFFFFF',
      icons: [
        {
          src: './android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: './android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    },
    themeColor: '#13826F',
    msTileColor: '#FFFFFF'
  }
}
