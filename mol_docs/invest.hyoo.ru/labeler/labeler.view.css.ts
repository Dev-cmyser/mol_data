namespace $ {

	const { rem, px } = $mol_style_unit
	const { hsla } = $mol_style_func

	$mol_style_define( $hyoo_invest_labeler , {

		$mol_string: {

			textShadow: '0 0 1px currentColor',
			
		},

		'@': {
			hyoo_invest_labeler_mood: {

				bad: {
					$mol_string: {
						color: hsla( 0, 70, 60, 1 ),
					},
				},
				
				good: {
					$mol_string: {
						color: hsla( 90, 40, 50, 1 ),
					},
				},
				
			},
		},

	} )

}
