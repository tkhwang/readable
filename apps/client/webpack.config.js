const nrwlConfig = require("@nrwl/react/plugins/webpack.js");
const webpackCommonConfig = require("../../webpack-common.config");

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
    module: {
      rules: [
        ...config.module.rules,
        webpackCommonConfig.tailwindWebpackRule,
        
      ],
    },
  };
};