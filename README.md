# Typescript Starter Frontend Web Project

A starter frontend web project with an opionated default configuration.

# Quick Start

## Dependencies

* git
* node.js >= 8

Clone:

```
git clone git@github.com:rencire/ts-web-app-starter.git
```

Start development server:

```
npm start
```

Build files for production:

```
npm build
```

# Features:

* Typescript. Because you want types :).
* CSS Modules.
* Gracefully transpile es6/es2015+ code
  * Main bundle served to es6/es2015 compliant browsers.
  * Create fallback bundle for non-supported browsers.
* Tree-Shaking.
* Fast dev server.

Now just add your own javascript framework/lib flavor of the month, and you're all set!

# TODO

* [x] add babel, so we can include babel-preset-env. (wait for @babel/preset-env to be out of beta)
* [x] Create [legacy webpack prod config](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)
* [ ] Add `stylelint-webpack-plugin` once stable for webpack 4:
      `https://github.com/JaKXz/stylelint-webpack-plugin/issues/137`

## Notes

* HMR not working
* Consider replacing `lint-staged` with `https://github.com/nrwl/precise-commits` once its more stable.

## Tools

### Typescript

* https://github.com/Microsoft/TypeScript

### Webpack & friends

* https://webpack.js.org/
* https://github.com/webpack/webpack

* https://github.com/TypeStrong/ts-loader
* https://github.com/webpack-contrib/style-loader
* https://github.com/webpack-contrib/css-loader
* https://github.com/FormidableLabs/webpack-dashboard

### Babel & friends

Why use Babel instead of just `tsc`? We want to take advantage of `@babel/preset-env` to auto polyfill for us.

Official Starter for integrating Typescript with Babel
https://github.com/Microsoft/TypeScript-Babel-Starter#readme

babel loader for webpack
https://github.com/babel/babel-loader

@babel/core
https://github.com/babel/babel/tree/master/packages/babel-core

@babel/preset-env
https://github.com/babel/babel/tree/master/packages/babel-preset-env

@babel/preset-typescript
https://github.com/babel/babel/tree/master/packages/babel-preset-typescript

Some extra proposals:

* object rest spread
  https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-object-rest-spread

* class properties
  https://github.com/babel/babel/tree/master/packages/babel-plugin-proposal-class-properties

### Linters

* https://github.com/palantir/tslint
* https://github.com/stylelint/stylelint

- https://github.com/okonet/lint-staged
- https://github.com/typicode/husky
- https://github.com/kulshekhar/ts-jest
