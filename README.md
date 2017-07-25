# html-compat

[![NPM version](https://img.shields.io/npm/v/html-compat.svg?style=flat)](https://npmjs.com/package/html-compat) [![NPM downloads](https://img.shields.io/npm/dm/html-compat.svg?style=flat)](https://npmjs.com/package/html-compat) [![Build Status](https://img.shields.io/circleci/project/egoist/html-compat/master.svg?style=flat)](https://circleci.com/gh/egoist/html-compat) [![donate](https://img.shields.io/badge/$-donate-ff69b4.svg?maxAge=2592000&style=flat)](https://github.com/egoist/donate)

## How does it work?

If you simply want to work with an `index.html` and love `ES2015`, `CSSnext` features, all `script` and `style` tags inside the html file will be transpiled to more compatible JS/CSS.

Here's nothing magic and worths studying, just a simple short-hand to reduce boilerplate code 😄

## Install

```bash
npm i -g html-compat
```

## Usage

```bash
html-compat input.html -o output.html

# help
html-compat -h
```

## API

```js
const htmlCompat = require('html-compat')

htmlCompat(`<html>html string</html>`, options)
  .then(result => {
    console.log(result)
  })
```

### options

#### browsers

Type: `Array`<br>
Default: `['ie > 8', 'last 4 versions']`

Support browsers down to this value.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D


## Author

**html-compat** © [egoist](https://github.com/egoist), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by egoist with help from contributors ([list](https://github.com/egoist/html-compat/contributors)).

> [egoistian.com](https://egoistian.com) · GitHub [@egoist](https://github.com/egoist) · Twitter [@_egoistlily](https://twitter.com/_egoistlily)
