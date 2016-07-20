const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');

exports.modifyWebpackConfig = function (config) {
  console.log('modifyWebpackConfig in progress...')
  config.loader('jpg', function (cfg) { // eslint-disable-line prefer-arrow-callback
    cfg.test = /\.jpg$/ // eslint-disable-line no-param-reassign
    cfg.loader = 'url?name=[path][name].[ext]&mimetype=image/jpg&limit=10000' // eslint-disable-line no-param-reassign, max-len
    cfg.include = path.resolve(__dirname, 'assets') // eslint-disable-line no-param-reassign
    return cfg
  })
  config.loader('svg', function svgLoader (cfg) { // eslint-disable-line prefer-arrow-callback
    cfg.test = /\.svg$/ // eslint-disable-line no-param-reassign
    cfg.loader = 'raw' // eslint-disable-line no-param-reassign
    return cfg
  })
  config.plugin(
    'svg-store',
    SvgStore,
    [{
      svgoOptions: {
        plugins: [
          { removeTitle: true },
        ],
      },
    }]
  )
  return config
}
