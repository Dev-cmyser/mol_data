namespace $.$$ {

	export const $hyoo_intern_cabinet_page_style = {
		maxWidth: 'min(100%, 60rem)' as any,
		flex: { 
			grow: 1,
			basis: '40rem' as any,
		},
		// ":last-child": {
		// 	margin: {
		// 		right: 'auto'
		// 	},
		// } as any,
	}

	$mol_style_define( $hyoo_intern_cabinet, {

		Menu: {
			// ":first-child": {
			// 	margin: {
			// 		left: 'auto'
			// 	},
			// },
			flex: {
				basis: '20rem',
				shrink: 0,
			},
			Head: {
				justifyContent: 'center',
				alignItems: 'center',
				gap: $mol_gap.block,
			},
		},
		
	 } )

}
