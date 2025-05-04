namespace $.$$ {

	$mol_style_define( $hyoo_intern_catalog_scroll, {
		
		Rows: {
			flex: {
				basis: '20rem',
			},
		},
		
		Pages: {
			maxWidth: 'min(100%, 60rem)' as any,
			flex: { 
				grow: 1,
				basis: '40rem' as any,
			},
		},

		Page: {
			margin: $mol_gap.block,
			background: {
				color: $mol_theme.card
			},
			flex: {
				direction: 'column'
			}
		},

		Page_link: {
			background: {
				color: $mol_theme.card
			},
		},
		
		Page_content: {
			padding: $mol_gap.block,
			flex: {
				direction: 'column'
			}
		},
		
		
	} )

}
