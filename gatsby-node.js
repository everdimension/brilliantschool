const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');

exports.modifyWebpackConfig = function (config) {
  console.log('modifyWebpackConfig in progress...')
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
