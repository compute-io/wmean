wmean
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes a weighted mean over an array of values.


## Installation

``` bash
$ npm install compute-wmean
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var wmean = require( 'compute-wmean' );
```


## Examples

``` javascript
var data = new Array( 100 ),
	weights = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random()*100;
	weights[ i ] = Math.random();
}

console.log( wmean( data, weights ) );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-wmean.svg
[npm-url]: https://npmjs.org/package/compute-wmean

[travis-image]: http://img.shields.io/travis/compute-io/wmean/master.svg
[travis-url]: https://travis-ci.org/compute-io/wmean

[coveralls-image]: https://img.shields.io/coveralls/compute-io/wmean/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/wmean?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/wmean.svg
[dependencies-url]: https://david-dm.org/compute-io/wmean

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/wmean.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/wmean

[github-issues-image]: http://img.shields.io/github/issues/compute-io/wmean.svg
[github-issues-url]: https://github.com/compute-io/wmean/issues