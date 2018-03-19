// Config specific to production mode
const commonConfig = require("./webpack.config.common.js");
const fallbackProdConfig = require("./webpack.config.fallback.js");
const mainProdConfig = commonConfig;

module.exports = [
  // Use mainProdConfig to supplemant default production options (`webpack --mode production`)
  mainProdConfig,
  // Add another config for `fallback` bundle.  Used for browsers that do not support es6 modules.
  fallbackProdConfig
];
