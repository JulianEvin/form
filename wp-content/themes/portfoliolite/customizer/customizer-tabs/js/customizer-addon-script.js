/**
 * Script fort the customizer tabs control focus function.
 * @package ThemeHunk
 * @subpackage Portfoliolite
 * @since 1.0.0
 */

/* global wp */

var portfoliolite_customize_tabs_focus = function ( $ ) {
	'use strict';
	$(
		function () {
				var customize = wp.customize;
				$( '.customize-partial-edit-shortcut' ).on(
					'DOMNodeInserted', function () {
						$( this ).on(
							'click', function() {
								var controlId     = $( this ).attr( 'class' );
								var tabToActivate = '';
                                var controlFinalId = controlId.split( ' ' ).pop().split( '-' ).pop();

                                if ( controlId.indexOf( 'widget' ) !== -1 ) {
									tabToActivate = $( '.thunk-customizer-tab>.widgets' );
								} else {
									tabToActivate      = $( '.thunk-customizer-tab>.' + controlFinalId );
								}

								customize.preview.send( 'tab-previewer-edit', tabToActivate );
                                customize.preview.send( 'focus-control', controlFinalId );
							}
						);
					}
				);
		}
	);
};

portfoliolite_customize_tabs_focus( jQuery );
