module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          esmodules: true
        },
        useBuiltIns: "usage"
      }
    ],
    "@babel/typescript"
  ],
  plugins: [
    "@babel/proposal-class-properties",
    ["@babel/proposal-object-rest-spread", { useBuiltIns: true }]
  ]
};
