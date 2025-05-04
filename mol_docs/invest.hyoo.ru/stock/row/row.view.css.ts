namespace $ {

	const { rem, px } = $mol_style_unit

	$mol_style_define( $hyoo_invest_stock_row_group , {

		margin: 0,

		flex: {
			shrink: 1,
			wrap: 'wrap',
		},

		justifyContent: 'flex-end',

		'>': {
			
			$hyoo_invest_stock_row_group: {
				margin: 0,
			},

			$mol_view: {
				margin: rem(.5),
			},	
			
		},

	} )

	$mol_style_define( $hyoo_invest_stock_row , {

		padding: rem(.25),
		
		flex: {
			wrap: 'wrap',
		},

		justifyContent: 'flex-end',

		':first-child': {
			box: {
				shadow: 'none',
			},
		},

		box: {
			shadow: [{
				x: 0,
				y: px(-1),
				blur: 0,
				spread: 0,
				color: $mol_theme.line,
			}],
		},

		Info: {
			flex: {
				grow: 1,
			},
		},

		Main: {
			flex: {
				grow: 1,
			},
		},

		Title_block: {
			
			flex: {
				grow: 1000,
				basis: rem(10),
			},
			
			minWidth: 0,
			maxWidth: rem(14),

			Label: {
				justifyContent: 'space-between',
				alignItems: 'flex-start',
			},

		},

		Tools: {
			margin: rem(-.75),
		},

	} )

}
