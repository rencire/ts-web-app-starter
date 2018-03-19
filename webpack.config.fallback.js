const commonConfig = require("./webpack.config.common.js");
const babelConfig = require("./babel.config.js");

const fallbackBabelConfig = {
  ...babelConfig,
  presets: [
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

const moduleOpts = commonConfig.module;
const rules = moduleOpts.rules;
const tsRuleObj = rules[0];
const tsRuleLoaders = tsRuleObj.use;

module.exports = {
  ...commonConfig,
  output: {
    filename: "./fallback.js"
  },
  module: {
    ...moduleObj,
    rules: [
      {
        ...tsRuleObj,
        use: [
          { loader: "babel-loader", options: fallbackBabelConfig },
          ...tsRuleLoaders.slice(1)
        ]
      },
      ...rules.slice(1) // 1 is index of rule we want to override
    ]
  }
};
