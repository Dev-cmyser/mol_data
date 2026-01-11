namespace $.$$ {
	
	$mol_style_define( $giper_balls_ball, {
		
		border: {
			radius: '50%',
		},
		
		align: {
			items: 'center',
		},
		
		justify: {
			content: 'center',
		},
		
		color: 'black',
		
		font: {
			weight: 'bold',
			size: '3.5vmin',
			family: 'monospace',
		},
		
		willChange: 'transform',
		
		box: {
			shadow: [{
				inset: true,
				x: 0,
				y: 0,
				blur: '2vmin',
				spread: 0,
				color: $mol_style_func.hsla( 0, 0, 0, .5 ),
			}]
		},
		
		'[giper_balls_ball_focus]': {
			true: {
				outline: '2px solid oklch( 0.3 0.3 210 )',
			}
		},
		
		'[giper_balls_ball_state]': {
			empty: {
				scale: '0',
			},
			ghost: {
				scale: '.5',
				opacity: .75,
			},
			active: {
				zIndex: 1,
			},
		},
		
		'@starting-style': {
			scale: '0',
		},
		
	} )
	
}
