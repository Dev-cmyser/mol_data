namespace $.$$ {
	export class $giper_web_frame extends $.$giper_web_frame {
		
		@ $mol_mem
		uri() {
			return super.uri()
				.replace( '{lights}', String( this.$.$mol_lights() ) )
				.replace( '{query}', encodeURIComponent( this.query() ) )
				.replace( '{current}', encodeURIComponent( this.$.$mol_state_arg.href().replace( /^https?:\/\/|\/?\??#.*$/, '' ) ) )
		}
		
	}
}
