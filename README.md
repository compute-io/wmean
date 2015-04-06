Weighted Mean
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes a weighted mean of an array.


## Installation

``` bash
$ npm install compute-wmean
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var wmean = require( 'compute-wmean' );
```


#### wmean( arr, weights[, opts] )

Computes a weighted mean of an `array`. For numeric `arrays`,

``` javascript
var data = [ 1, 3, 3, 1 ],
	weights = [ 2, 3, 3, 2 ];

var mu = wmean( data, weights );
// returns 2.2
```

The function accepts the following `options`:

*	__accessor__: accessor `function` for accessing numeric values.
*	__normalized__: `boolean` indicating if the provided weights `array` sums to `1`. Default: `false`.

For non-numeric `arrays`, provide an accessor `function` for accessing numeric values

``` javascript
var data, weights;

data = [
	{'x':1},
	{'x':3},
	{'x':3},
	{'x':1}
];

weights = [ 2, 3, 3, 2 ];

function getValue( d ) {
	return d.x;
}

var mu = wmean( data, weights, {
	'accessor': getValue
});
// returns 2.2
```

If the weights are [normalized](http://en.wikipedia.org/wiki/Normalization_(statistics)) (i.e., sum to `1`), set the `normalized` option to `true`.

``` javascript
var data, weights;

data = [ 1, 3, 3, 1 ];
weights = [ 0, 0.5, 0, 0.5 ];

var mu = wmean( data, weights, {
	'normalized': true
});
// returns 2
```


__Note__: if provided an empty `array`, the function returns `null`.




## Examples

``` javascript
var wmean = require( 'compute-wmean' );

var data = new Array( 100 ),
	weights = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
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

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

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
$ make view-cov
```



---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014-2015. Athan Reines.


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
