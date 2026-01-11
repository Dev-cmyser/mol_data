namespace $.$$ {
	
	const {calc} = $mol_style_func
	
	$mol_style_define( $giper_lingua_app, {
		
		Native_translate: {
			flex: {
				basis: '2rem',
				grow: 1,
			},
			justifyContent: 'flex-end',
		},
		
		Foreign_translate: {
			flex: {
				basis: '2rem',
				grow: 1,
			},
		},
		
		Foreign_pane: {
			padding: $mol_gap.block,
			flex: {
				basis: '21rem',
				grow: 1,
			},
			display: 'flex',
			align: {
				items: 'stretch',
			},
		},
		
		Native_pane: {
			padding: $mol_gap.block,
			flex: {
				basis: '21rem',
				grow: 1,
			},
			display: 'flex',
			align: {
				items: 'stretch',
			},
		},
		
		Native_variant: {
			flex: {
				wrap: 'wrap',
			},
		},
		
		Native_variant_title: {
			flex: {
				shrink: 1,
			},
		},
		
		Native_variant_descr: {
			color: $mol_theme.text,
			flex: {
				shrink: 1,
			},
		},
		
		Foreign_variant: {
			flex: {
				wrap: 'wrap',
			},
		},
		
		Foreign_variant_title: {
			flex: {
				shrink: 1,
			},
		},
		
		Foreign_variant_descr: {
			color: $mol_theme.text,
			flex: {
				shrink: 1,
			},
		},
		
		Main : {
			
			margin: [ 0, 'auto' ],
			
			flex: {
				basis: '100rem',
			},
			
			Foot: {
				flex: {
					wrap: 'wrap',
				},
				justify: {
					content: 'space-between',
				},
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
