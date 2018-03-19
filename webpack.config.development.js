// Config specific to development mode
const DashboardPlugin = require("webpack-dashboard/plugin");
const webpack = require("webpack");
const commonConfig = require("./webpack.config.common.js");

module.exports = {
  ...commonConfig,
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: "./dist/",
    hot: true
    // port: 8080
  },
  plugins: [
    ...commonConfig.plugins,
    new DashboardPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
};
