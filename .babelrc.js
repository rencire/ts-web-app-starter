module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true
        },
        useBuiltIns: "usage",
        // Disable babel-plugin-transform-modules-commonjs, so webpack can tree shake with uglify
        // https://github.com/babel/babel/tree/master/packages/babel-plugin-transform-modules-commonjs
        modules: false
      }
    ],
    "@babel/typescript"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    ["@babel/proposal-object-rest-spread", { useBuiltIns: true }]
  ]
};
