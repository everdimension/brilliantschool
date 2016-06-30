const path = require('path');
const SvgStore = require('webpack-svgstore-plugin');

exports.modifyWebpackConfig = function (config, env) {
  console.log('modifyWebpackConfig in progress...');
  config.loader('svg', function (cfg) {
    cfg.test = /\.svg$/;
    cfg.loader = 'raw';
    return cfg;
  });
  config.plugin(
    'svg-store',
    SvgStore
  );
  return config;
};
