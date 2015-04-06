/* global require, describe, it */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	wmean = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'compute-wmean', function tests() {

	it( 'should export a function', function test() {
		expect( wmean ).to.be.a( 'function' );
	});

	it( 'should throw an error if not provide a value array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				wmean( value, [1,1,1] );
			};
		}
	});

	it( 'should throw an error if not provide a weights array', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			function(){},
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				wmean( [1,2,3], value );
			};
		}
	});

	it( 'should throw an error if provided an options argument which is not an object', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			function(){}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				wmean( [1,2,3], [1,1,1], value );
			};
		}
	});

	it( 'should throw an error if provided an `accessor` option which is not a function', function test() {
		var values = [
			'5',
			5,
			true,
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				wmean( [1,2,3], [1,1,1], {'accessor': value} );
			};
		}
	});

	it( 'should throw an error if provided a `normalized` option which is not a boolean', function test() {
		var values = [
			'5',
			5,
			function(){},
			undefined,
			null,
			NaN,
			[],
			{}
		];

		for ( var i = 0; i < values.length; i++ ) {
			expect( badValue( values[i] ) ).to.throw( TypeError );
		}
		function badValue( value ) {
			return function() {
				wmean( [1,2,3], [1,1,1], {'normalized': value} );
			};
		}
	});

	it( 'should throw an error if the value array and weights array are not of equal length', function test() {
		expect( foo ).to.throw( Error );
		function foo() {
			wmean( [1,2,3,4], [1,1,1] );
		}
	});

	it( 'should compute the weighted mean', function test() {
		var data, weights, expected;

		data = [ 1, 2, 2, 1 ];
		weights = [ 1, 1, 1, 1 ];
		expected = 1.5;

		assert.strictEqual( wmean( data, weights ), expected );

		data = [ 1, 2, 2, 1 ];
		weights = [ 0, 1, 1, 0 ];
		expected = 2;

		assert.strictEqual( wmean( data, weights ), expected );

		data = [ 1, 3, 3, 1 ];
		weights = [ 2, 3, 3, 2 ];
		expected = 2.2;

		assert.closeTo( wmean( data, weights ), expected, 0.0001 );
	});

	it( 'should compute the weighted mean when the weights sum to unity', function test() {
		var data, weights, expected, actual;

		data = [ 1, 2, 2, 1 ];
		weights = [ 0.25, 0.25, 0.25, 0.25 ];

		actual = wmean( data, weights, {
			'normalized': true
		});
		expected = 1.5;

		assert.strictEqual( actual, expected );
	});

	it( 'should compute the weighted mean using an accessor function', function test() {
		var data, weights, expected, actual;

		data = [
			[1,1],
			[2,3],
			[3,3],
			[4,1]
		];
		weights = [ 2, 3, 3, 2 ];

		actual = wmean( data, weights, {
			'accessor': getValue
		});
		expected = 2.2;

		assert.closeTo( actual, expected, 0.0001 );

		function getValue( d ) {
			return d[ 1 ];
		}
	});

	it( 'should compute the weighted mean when the weights sum to unity and when provided an accessor function', function test() {
		var data, weights, expected, actual;

		data = [
			{'x':1},
			{'x':2},
			{'x':2},
			{'x':1}
		];
		weights = [ 0.25, 0.25, 0.25, 0.25 ];

		actual = wmean( data, weights, {
			'normalized': true,
			'accessor': getValue
		});
		expected = 1.5;

		assert.strictEqual( actual, expected );

		function getValue( d ) {
			return d.x;
		}
	});

	it( 'should return null if provided an empty array', function test() {
		assert.isNull( wmean( [], [] ) );
	});

});
