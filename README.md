# Bumble Starter Library

<!-- Add badges -->

Welcome to your Bumble Starter Library! This is a great place to start for writing an extension in 2019.

### Getting started

This library works great in VSCode with the following extensions:

- [Jest](https://marketplace.visualstudio.com/items?itemName=Orta.vscode-jest)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Core Libraries

### [RollupJS](https://rollupjs.org/guide/en)

Rollup takes your code and puts it in one file. See `rollup.config.js`, it's just a JavaScript file.

### [ESLint](https://flaviocopes.com/eslint/#eslint)

ESLint makes sure you don't make mistakes in your code.

### [Sucrase]()

Sucrase translates supersets of JavaScript into normal JavaScript. It's like Babel, but much faster.

### [Jest]()

Jest is a testing library. Write tests to make sure your code behaves exactly the way you think it does.

## Basic Terminal Commands

### `npm run build`

Run this command to compile all your code into one file, starting with `src/index.js`

### `npm run test`

Run this command to start Jest and run all your tests. Follow it with part of a filename to just run test files with that name: `npm run test index`

### `npm run start`

The same as `npm run build`, but it continues to watch the `src` folder for changes.

### `npm version`

Run this to increase the version number in `package.json` and make a commit tagged with the version number.

> Anything in `package.json` under `scripts` in `postversion` or `preversion` will run at this time.
