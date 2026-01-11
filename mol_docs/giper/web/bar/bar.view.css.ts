namespace $.$$ {
	
	$mol_style_define( $giper_web_bar, {
		
		width: 'fit-content',
		overflow: 'hidden',
		
		background: {
			color: 'transparent',
		},
		
		Head: {
			display: 'grid',
			justify: {
				content: 'stretch',
			},
		},
		
		Body: {
			overflow: {
				x: 'hidden',
			}
		},
		
		// background: {
		// 	color: $mol_theme.card,
		// },
		
		// width: '4rem',
		
	} )
	
	$mol_style_define( $giper_web_bar_link, {
		
		padding: 0,
		
		gap: 0,
		
		Icon: {
			width: '2.5rem',
			padding: '.75rem',
			flex: {
				shrink: 0,
				grow: 0,
			},
		},
		
		Title: {
			padding: $mol_gap.text,
		},
		
		'[mol_link_current]': {
			true: {
				// background: {
				// 	color: $mol_theme.back,
				// },
				Icon : {
					box: {
						shadow: [{
							inset: true,
							x: 0,
							y: 0,
							blur: 0,
							spread: '1px',
							color: $mol_theme.line,
						}],
					},
				},
			},
		},
		
	} )
	
}
