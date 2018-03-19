# Typescript Starter Frontend Web Project

A starter frontend web project with focus on developer happiness.

# TODO

* [ ] add babel, so we can include babel-preset-env. (wait for @babel/preset-env to be out of beta)
* [ ] Create [legacy webpack prod config](https://philipwalton.com/articles/deploying-es2015-code-in-production-today/)

### Babel

Why use Babel instead of just `tsc`? We want to take advantage of `@babel/preset-env` to auto polyfill for us.

#### Links

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

## Notes

* HMR not working
* Consider replacing `lint-staged` with `https://github.com/nrwl/precise-commits` once its more stable.
* Look into `stylelint-webpack-plugin` once stable for webpack 4:
  `https://github.com/JaKXz/stylelint-webpack-plugin/issues/137`

## Tools

* https://github.com/Microsoft/TypeScript
* https://github.com/webpack/webpack
* https://github.com/TypeStrong/ts-loader
* https://github.com/webpack-contrib/style-loader
* https://github.com/webpack-contrib/css-loader
* https://github.com/FormidableLabs/webpack-dashboard

- https://github.com/palantir/tslint
- https://github.com/stylelint/stylelint
- https://github.com/okonet/lint-staged
- https://github.com/typicode/husky
- https://github.com/kulshekhar/ts-jest
