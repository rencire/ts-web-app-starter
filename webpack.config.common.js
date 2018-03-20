const webpack = require("webpack");

module.exports = {
  // Webpack 4 default entry:
  // entry: './src/index',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        include: /src/,
        use: ["babel-loader", "tslint-loader"]
      },
      {
        test: /\.css$/,
        include: /src/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          "postcss-loader"
        ]
      }
    ]
  },
  // Webpack 4 default output:
  // output: './dist/main.js',
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    //   For debugging
    //   new webpack.LoaderOptionsPlugin({
    //     debug: true
    //   })
  ]
};
