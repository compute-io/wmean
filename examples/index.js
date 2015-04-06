'use strict';

var wmean = require( './../lib' );

var data = new Array( 100 ),
	weights = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.random() * 100;
	weights[ i ] = Math.random();
}

console.log( wmean( data, weights ) );
