const { defineConfig } = require('@vue/cli-service')
const path = require('path')
const isDev = process.env.NODE_ENV === 'development'
const isDemo = process.env.NODE_ENV === 'demo'
const isProd = process.env.NODE_ENV === 'production'
const LOCAL_SERVER = 'http://localhost:3000'
const PROD_SERVER_DEMO = ''
const PROD_SERVER = ''

function getBaseUrl(isDev, isDemo, isProd) {
  if (isDev) return LOCAL_SERVER
  if (isDemo) return PROD_SERVER_DEMO
  if (isProd) return PROD_SERVER
  return LOCAL_SERVER
}

module.exports = defineConfig({

  // Базовый URL-адрес сборки вашего приложения, по которому оно будет опубликовано (именуемая как baseUrl до версии Vue CLI 3.3).
  // Это аналог опции webpack output.publicPath, но Vue CLI также использует это значение в других целях, поэтому вы должны всегда
  // использовать publicPath вместо изменения опции output.publicPath
  // По умолчанию: '/'
  publicPath: '/',

  // Настройка пути для выходных файлов
  outputDir: 'dist',

  // Каталог (относительно outputDir) для хранения сгенерированных статических ресурсов (js, css, img, fonts).
  assetsDir: 'assets',

  // Настройка директории для статических ресурсов (css, js, изображения и др.)
  // assetsDir: 'static',

  // Включение или отключение source maps
  // По умолчанию: true
  productionSourceMap: false,

  // Настройка сервера разработки
  devServer: {
    port: 8080,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: getBaseUrl(isDev, isDemo, isProd),
        changeOrigin: true,
        /*
        Предположим, у вас есть запрос к /api/data, и вы используете pathRewrite: {'^/api': ''}.
        В результате, запрос будет перезаписан и отправлен на сервер как /data вместо /api/data.
        Предположим, у вас есть запрос к /api/data, и вы используете pathRewrite: {'^/api': ''}.
        В результате, запрос будет перезаписан и отправлен на сервер как /data вместо /api/data.
        */
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  // Плагин PWA (Progressive Web App)
  pwa: {
    name: 'My Vue App', // Название вашего PWA
    themeColor: '#4DBA87', // Цвет темы
    msTileColor: '#000000', // Цвет плитки для Windows
    appleMobileWebAppCapable: 'yes', // Включить как веб-приложение для iOS
    appleMobileWebAppStatusBarStyle: 'black', // Стиль полосы состояния iOS
    manifestOptions: {
      icons: [
        {
          src: './img/pwa/icon.png',
          sizes: '192x192',
          type: 'image/png'
        }
        // {
        //   src: './img/pwa/icon-512x512.png',
        //   sizes: '512x512',
        //   type: 'image/png',
        // },
      ]
    },
    workboxPluginMode: 'GenerateSW', // Режим сервис-воркера
    workboxOptions: {
      // Опции сервис-воркера
      skipWaiting: true,
      clientsClaim: true
    }
  },

  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.(svg)(\?.*)?$/,
          include: [path.resolve(__dirname, 'src/assets/icons/')],
          use: [
            {
              loader: 'svg-sprite-loader',
              options: {
                limit: 10000
              }
            }
          ]
        }
      ]
    }
  },

  chainWebpack: (config) => {
    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, 'src/assets/icons/'))
      .end()
      .test(() => false)
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .end()

    // style-resources-loader
    config.module
      .rule('scss')
      .oneOf('vue')
      .use('style-resource')
      .loader('style-resources-loader')
      .options({
        patterns: [
          path.resolve(__dirname, 'src/assets/scss/general/variables.scss'),
          path.resolve(__dirname, 'src/assets/scss/mixins/mixins.scss')
        ]
      })
  }
})
