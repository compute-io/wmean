
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
	'use strict';

	it( 'should export a function', function test() {
		expect( wmean ).to.be.a( 'function' );
	});

	it( 'should throw an error if provided non-arrays', function test() {
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
			expect( badValue1( values[i] ) ).to.throw( TypeError );
			expect( badValue2( values[i] ) ).to.throw( TypeError );
		}
		function badValue1( value ) {
			return function() {
				wmean( value, [] );
			};
		}
		function badValue2( value ) {
			return function() {
				wmean( [], value );
			};
		}
	});

	it( 'should throw an error if the value array and weights array are not the same length', function test() {
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

});