
module.exports = function(webpackConfig) {
  webpackConfig.externals = {
    electron: 'require(\'electron\')',
  };
  return webpackConfig;
};
