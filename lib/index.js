/**
*
*	COMPUTE: wmean
*
*
*	DESCRIPTION:
*		- Computes a weighted mean over an array of values.
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
*	Copyright (c) 2014. Athan Reines.
*
*
*	AUTHOR:
*		Athan Reines. kgryte@gmail.com. 2014.
*
*/

(function() {
	'use strict';

	/**
	* FUNCTION: wmean( arr, weights )
	*	Computes a weighted mean over an array of values.
	*
	* @param {Array} arr - array of values
	* @param {Array} weights - array of weights
	* @returns {Number} weighted mean value
	*/
	function wmean( arr, weights ) {
		if ( !Array.isArray( arr ) || !Array.isArray( weights ) ) {
			throw new TypeError( 'wmean()::invalid input argument. Must provide arrays.' );
		}
		if ( arr.length !== weights.length ) {
			throw new Error( 'wmean()::invalid input arguments. Value array and weights array must be the same length.' );
		}
		var len = arr.length,
			sum = 0,
			mu = 0,
			w;

		// Normalize the weights to sum to 1 and calculate the weighted mean...
		for ( var i = 0; i < len; i++ ) {
			sum += weights[ i ];
		}
		for ( var j = 0; j < len; j++ ) {
			w = weights[ j ] / sum;
			mu += arr[ j ] * w;
		}
		return mu;
	} // end FUNCTION wmean()


	// EXPORTS //

	module.exports = wmean;

})();