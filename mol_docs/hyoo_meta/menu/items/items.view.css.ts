namespace $ {
	
	const { rem, px } = $mol_style_unit
	
	$mol_style_define( $hyoo_meta_menu_items, {
		
		Item_expand: {
			position: 'absolute',
			zIndex: $mol_layer.float,
			margin: {
				left: rem(-.75),
			},
		},
		
		Item_drop_after: {
			'@': {
				'mol_drop_status': {
					'drag': {
						box: {
							shadow: [{
								inset: false,
								x: 0,
								y: px(-1),
								blur: 0,
								spread: 0,
								color: $mol_theme.focus,
							}]
						},
					},
				},
			},
		},
		
		Item_add: {
			opacity: 0.5,
			':hover': {
				opacity: 1,
			},
		},
		
		Item_drop_inside: {
			'@': {
				'mol_drop_status': {
					'drag': {
						box: {
							shadow: [{
								inset: false,
								x: px(1),
								y: px(1),
								blur: 0,
								spread: 0,
								color: $mol_theme.focus,
							}]
						},
						opacity: 1,
					},
				},
			},
		},
		
		Item_row: {
			justifyContent: 'space-between',
			alignItems: 'flex-start',
		},
		
		Item_link: {
			flex: {
				grow: 1,
				shrink: 1,
			},
		},
		
		Item_items: {
			margin: {
				left: rem(.75),
				bottom: rem(.75),
			},
			padding: {
				left: rem(.75),
			},
			box: {
				shadow: [{
					inset: true,
					x: px(1),
					y: 0,
					blur: 0,
					spread: 0,
					color: $mol_theme.line,
				}],
			},
		},
		
	} )
	
}
