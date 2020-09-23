jQuery( document ).ready( function( $ ) {

	$( '#|uniquestring|_form_update' ).on( 'submit', function( e ){

		e.preventDefault();

		var nonce = $( this ).find( '#|uniquestring|_wpnonce' ).val();

		var someString = $( '#|uniquestring|_some_string' ).val();

		var data = {

			'action': '|uniquestring|_update',
			'nonce': nonce,
			'|uniquestring|_some_string': someString

		};

		jQuery.post( |uniquestring|_admin_localize.ajaxurl, data, function( response ){

			// console.log( response );
			alert( 'Value updated.' );

		} );

	} );

} );