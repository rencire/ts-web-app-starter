const commonConfig = require("./webpack.config.common.js");
const babelConfig = require("./.babelrc.js");

const presetEnv = babelConfig.presets[0];
const presetEnvOptions = presetEnv[1];

const fallbackBabelConfig = {
  ...babelConfig,
  presets: [
    [
      "@babel/preset-env",
      {
        ...presetEnvOptions,
        targets: {
          browsers: ["> 1%", "last 2 versions", "Firefox ESR"]
        }
      }
    ],
    ...babelConfig.presets.slice(1)
  ]
};

const moduleObj = commonConfig.module;
const rules = moduleObj.rules;
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
