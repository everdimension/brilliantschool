const path = require('path')
// const SvgStore = require('webpack-svgstore-plugin')
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')
const env = process.env.NODE_ENV

exports.modifyWebpackConfig = function (config, currentEnv) {
  console.log('modifyWebpackConfig in progress...', currentEnv)
  config.loader('jpg', function (cfg) { // eslint-disable-line prefer-arrow-callback
    cfg.test = /\.jpg$/ // eslint-disable-line no-param-reassign
    cfg.loader = 'url?name=[path][name].[ext]&mimetype=image/jpg&limit=10000' // eslint-disable-line no-param-reassign, max-len
    cfg.include = path.resolve(__dirname, 'assets') // eslint-disable-line no-param-reassign
    return cfg
  })
  config.loader('png', function (cfg) { // eslint-disable-line prefer-arrow-callback
    cfg.test = /\.png$/ // eslint-disable-line no-param-reassign
    cfg.loader = 'url?name=[path][name].[ext]&mimetype=image/png&limit=10000' // eslint-disable-line no-param-reassign, max-len
    cfg.include = path.resolve(__dirname, 'assets') // eslint-disable-line no-param-reassign
    return cfg
  })
  // config.loader('svg', function svgLoader (cfg) { // eslint-disable-line prefer-arrow-callback
  //   cfg.test = /\.svg$/ // eslint-disable-line no-param-reassign
  //   cfg.loader = 'raw' // eslint-disable-line no-param-reassign
  //   return cfg
  // })
  // config.plugin(
  //   'svg-store',
  //   SvgStore,
  //   [{
  //     svgoOptions: {
  //       plugins: [
  //         { removeTitle: true },
  //       ],
  //     },
  //   }]
  // )

  if (env === 'production') {
    config.plugin('faviconPlugin',
                  FaviconsWebpackPlugin,
                  [{
                    logo: 'assets/favicon-original.png',
                    prefix: '/favicon/',
                  }])
  }
  return config
}
