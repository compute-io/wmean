/**
*
*	COMPUTE: wmean
*
*
*	DESCRIPTION:
*		- Computes a weighted mean of an array.
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2014-2015. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

'use strict';

// MODULES //

var isArray = require( 'validate.io-array' ),
	isObject = require( 'validate.io-object' ),
	isBoolean = require( 'validate.io-boolean-primitive' ),
	isFunction = require( 'validate.io-function' );


// WEIGHTED MEAN //

/**
* FUNCTION: wmean( arr, weights[, opts] )
*	Computes a weighted mean of an array.
*
* @param {Array} arr - input array
* @param {Array} weights - array of weights
* @param {Object} [opts] - function options
* @param {Boolean} [opts.normalized=false] - boolean indicating if the weights are normalized (i.e., sum to unity)
* @param {Function} [opts.accessor] - accessor function for accessing array values
* @returns {Number|null} weighted mean
*/
function wmean( arr, weights, opts ) {
	var unity,
		clbk,
		len,
		sum,
		mu,
		w,
		i;

	if ( !isArray( arr ) ) {
		throw new TypeError( 'wmean()::invalid input argument. Must provide an input array. Value: `' + arr + '`.' );
	}
	if ( !isArray( weights ) ) {
		throw new TypeError( 'wmean()::invalid input argument. Weights argument must be an array. Value: `' + arr + '`.' );
	}
	if ( arguments.length > 2 ) {
		if ( !isObject( opts ) ) {
			throw new TypeError( 'wmean()::invalid input argument. Options argument must be an object. Value: `' + opts + '`.' );
		}
		if ( opts.hasOwnProperty( 'accessor' ) ) {
			clbk = opts.accessor;
			if ( !isFunction( clbk ) ) {
				throw new TypeError( 'wmean()::invalid option. Accessor must be a function. Option: `' + clbk + '`.' );
			}
		}
		if ( opts.hasOwnProperty( 'normalized' ) ) {
			unity = opts.normalized;
			if ( !isBoolean( unity ) ) {
				throw new TypeError( 'wmean()::invalid option. Normalized option must be a boolean primitive. Option: `' + unity + '`.' );
			}
		}
	}
	len = arr.length;
	if ( len !== weights.length ) {
		throw new Error( 'wmean()::invalid input arguments. Value array and weights array must be the same length.' );
	}
	if ( !len ) {
		return null;
	}
	mu = 0;
	if ( unity ) {
		if ( clbk ) {
			for ( i = 0; i < len; i++ ) {
				mu += clbk( arr[ i ] ) * weights[ i ];
			}
		} else {
			for ( i = 0; i < len; i++ ) {
				mu += arr[ i ] * weights[ i ];
			}
		}
	} else {
		sum = 0;
		for ( i = 0; i < len; i++ ) {
			sum += weights[ i ];
		}
		if ( clbk ) {
			for ( i = 0; i < len; i++ ) {
				w = weights[ i ] / sum;
				mu += clbk( arr[ i ] ) * w;
			}
		} else {
			for ( i = 0; i < len; i++ ) {
				w = weights[ i ] / sum;
				mu += arr[ i ] * w;
			}
		}
	}
	return mu;
} // end FUNCTION wmean()


// EXPORTS //

module.exports = wmean;
