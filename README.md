# Gulp pHTML [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][pHTML]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Gulp pHTML] lets you use [pHTML] with [Gulp].

## Install

Add [Gulp pHTML] to your project:

```bash
npm install gulp-phtml --save-dev
```

## Usage

Use [Gulp pHTML] in your Gulpfile:

```js
const gulp = require('gulp')
const gulpPhtml = require('gulp-phtml')

gulp.task('html',
  () => gulp.src('./src/*.html').pipe(
    gulpPhtml({
      /* pHTML Plugins */
      plugins: [], // Array | Plugin | Function

      /* pHTML Plugins */
      processOptions: {} // Object
    })
  ).pipe(
    gulp.dest('dist')
  )
)
```

## Options

### plugins

The `plugins` property determines which [pHTML plugins] are applied.

```js
gulpPhtml({
  plugins: require('@phtml/image-alt')
})
```

```js
gulpPhtml({
  plugins: [
    require('@phtml/image-alt'),
    require('@phtml/image-size')({ intrinsicsize: 'intrinsic' })
  ]
})
```

### processOptions

The `processOptions` property determines which [pHTML custom settings] are
applied.

```js
gulpPhtml({
  processOptions: {
    voidElements: ['path', 'source', 'use']
  }
})
```

[cli-img]: https://img.shields.io/travis/phtmlorg/gulp-phtml.svg
[cli-url]: https://travis-ci.org/phtmlorg/gulp-phtml
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/gulp-phtml.svg
[npm-url]: https://www.npmjs.com/package/gulp-phtml

[Gulp]: https://github.com/gulpjs/gulp
[Gulp pHTML]: https://github.com/phtmlorg/gulp-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML custom settings]: https://phtml.io/global.html#ProcessOptions
[pHTML plugins]: https://www.npmjs.com/search?q=keywords:phtml-plugin
