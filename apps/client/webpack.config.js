const nrwlConfig = require("@nrwl/react/plugins/webpack.js");

module.exports = (config) => {
  nrwlConfig(config);
  return {
    ...config,
  };
};