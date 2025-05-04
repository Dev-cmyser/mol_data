namespace $.$$ {
	
	const {rem} = $mol_style_unit
	const {calc} = $mol_style_func
	
	$mol_style_define( $hyoo_lingua_app, {
		
		Native_translate: {
			flex: {
				basis: rem(2),
				grow: 1,
			},
			justifyContent: 'flex-end',
		},
		
		Foreign_translate: {
			flex: {
				basis: rem(2),
				grow: 1,
			},
		},
		
		Foreign_pane: {
			padding: $mol_gap.block,
			flex: {
				basis: rem(21),
				grow: 1,
			},
		},
		
		Native_pane: {
			padding: $mol_gap.block,
			flex: {
				basis: rem(21),
				grow: 1,
			},
		},
		
		Body: {
			flex: {
				grow: 0,
			},
		},

		Foot: {
			flex: {
				wrap: 'wrap',
			},
			justify: {
				content: 'space-between',
			},
		},
		
		Native_alt_list: {
			direction: 'rtl',
		},

		Native_bar: {
			flex: {
				wrap: 'wrap',
				basis: calc( `50% - var(--mol_gap_block)` ),
				direction: 'row-reverse',
			},
			justify: {
				content: 'flex-end',
			},
		},
		
		Foreign_bar: {
			flex: {
				wrap: 'wrap',
				basis: calc( `50% - var(--mol_gap_block)` ),
			},
			justify: {
				content: 'flex-end',
			},
		},
		
		Native_tools: {
			flex: {
				grow: 1,
				basis: '12rem',
			},
			justify: {
				content: 'flex-end',
			},
		},
		
		Foreign_tools: {
			flex: {
				grow: 1,
				basis: '12rem',
			},
		},
		
	} )
	
}
