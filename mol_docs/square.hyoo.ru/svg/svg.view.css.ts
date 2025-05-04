namespace $.$${
	$mol_style_define( $hyoo_square_svg, {
		
		strokeLinecap: `round`,
		strokeLinejoin: `round`,
		strokeWidth: `1px`,
		fill: `none`,
		backgroundColor: `var(--mol_theme_field)`,
		
		Path_hi_data: {
			// stroke: `currentColor`,
			stroke: `var(--mol_theme_special)`,
		},
		
		Path_hi_text: {
			stroke: `var(--mol_theme_focus)`,
			strokeLinecap: `square`,
			strokeLinejoin: `miter`,
		},
		
		Path_lo_data: {
			stroke: `var(--mol_theme_card)`,
		},
		
		Path_lo_text: {
			stroke: `var(--mol_theme_focus)`,
			opacity: .4,
			strokeLinecap: `square`,
			strokeLinejoin: `miter`,
		},
		
	} )
}
