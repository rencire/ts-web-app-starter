module.exports = (env, argv) => {
  const config = {
    // entry: './src/index',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          include: /src/
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"]
    }
    // output: './dist/main.js',
  };

  if (argv.mode === "development") {
    const DashboardPlugin = require("webpack-dashboard/plugin");
    const webpack = require("webpack");

    config.devtool = "inline-source-map";
    config.devServer = {
      contentBase: "./dist/",
      hot: true
      // port: 8080
    };
    config.plugins = [
      new DashboardPlugin(),
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ];
  }

  return config;
};
