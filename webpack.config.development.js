// Config specific to development mode
const webpack = require("webpack");
const commonConfig = require("./webpack.config.common.js");

const DashboardPlugin = require("webpack-dashboard/plugin");
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin");

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
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin(),
    new HardSourceWebpackPlugin()
  ]
};
