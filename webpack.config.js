module.exports = (env, argv) => require(`./webpack.config.${argv.mode}.js`);
