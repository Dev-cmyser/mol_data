namespace $.$$ {
	export class $giper_web_bar_link extends $.$giper_web_bar_link {
		
		uri_toggle() {
			return this.uri().replace( '{query}', encodeURIComponent( this.$.$mol_state_arg.value( 'query' ) ?? '' ) )
		}
		
		@ $mol_mem
		current() {
			const omit = /^https?:\/\/|\/?\??(#.*)?$/g
			const current = ( this.$.$mol_state_arg.value( 'current' ) ?? '' ).replace( omit, '' )
				|| this.$.$mol_state_arg.href().replace( omit, '' )
			const uri = this.uri().replace( omit, '' )
			return uri === current
		}
		
	}
}
