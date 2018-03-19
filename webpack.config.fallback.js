const commonConfig = require("./webpack.config.common.js");
const babelConfig = require("./babel.config.js");

const fallbackBabelConfig = {
  ...babelConfig,
  presets: [
    ...babelConfig.presets.slice(0, 0),
    [
      ...babelConfig.presets[0].slice(0, 1),
      {
        ...babelConfig.presets[0][1],
        targets: {
          browsers: ["> 1%", "last 2 versions", "Firefox ESR"]
        }
      },
      ...babelConfig.presets[0].slice(2)
    ],
    ...babelConfig.presets.slice(1)
  ]
};

module.exports = {
  ...commonConfig,
  output: {
    filename: "./fallback.js"
  },
  module: {
    ...commonConfig.module,
    rules: [
      ...commonConfig.module.rules.slice(0, 0),
      {
        ...commonConfig.module.rules[0],
        use: [
          ...commonConfig.module.rules[0].use.slice(0, 0),
          { loader: "babel-loader", options: fallbackBabelConfig },
          ...commonConfig.module.rules[0].use.slice(1)
        ]
      },
      ...commonConfig.module.rules.slice(1) // 1 is index of rule we want to override
    ]
  }
};
