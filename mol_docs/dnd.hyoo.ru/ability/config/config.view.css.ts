namespace $.$$ {
	
	$mol_style_define( $hyoo_dnd_ability_config, {
		
		flex: {
			basis: '25rem',
		},
		
		Ability_row: {
			':first-of-type': {
				textShadow: '0 0',
				$mol_chip: {
					background: 'none',
				},
				$mol_paginator: {
					visibility: 'hidden',
				},
			},
		},
		
		Ability_total: {
			flex: {
				basis: '2.5rem',
			},
			justify: {
				content: 'center',
			},
			color: $mol_theme.shade,
		},
		
		Ability_safe: {
			flex: {
				basis: '2.5rem',
			},
			justify: {
				content: 'center',
			},
		},
		
		Ability_modifier: {
			flex: {
				basis: '2.5rem',
			},
			color: $mol_theme.special,
			justify: {
				content: 'center',
			},
		},
		
		Ability_title: {
			flex: {
				basis: '8rem',
				grow: 1,
				shrink: 0,
			},
		},
		
	} )
	
}
