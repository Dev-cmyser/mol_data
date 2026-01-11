namespace $.$$ {
	
	const { url, linear_gradient } = $mol_style_func
	
	$mol_style_define( $giper_balls_catalog, {
		
		background: {
			size: [ 'cover' ],
			position: 'center',
			image: [
				[ linear_gradient( $mol_theme.spirit ) ],
				[ url( 'giper/balls/logo/back.jpg' ) ],
			]
		},
		
	} )
	
}
