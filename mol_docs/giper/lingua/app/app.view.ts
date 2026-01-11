namespace $.$$ {
	export class $giper_lingua_app extends $.$giper_lingua_app {
		
		langs() {
			return this.$.$giper_lingua_langs
		}
		
		@ $mol_mem
		native_lang( next?: string ) {
			const local = this.$.$mol_state_local.value( 'native_lang', next )
			return this.$.$mol_state_arg.value( 'native_lang', next ) ?? local ?? $mol_locale.lang()
		}
		
		@ $mol_mem
		foreign_lang( next?: string ) {
			const local = this.$.$mol_state_local.value( 'foreign_lang', next )
			return this.$.$mol_state_arg.value( 'foreign_lang', next ) ?? local ?? 'en'
		}
		
		@ $mol_mem
		native_text( next?: string ) {
			return this.$.$mol_state_arg.value( 'native_text', next ) ?? ''
		}
		
		@ $mol_mem
		foreign_text( next?: string ) {
			return this.$.$mol_state_arg.value( 'foreign_text', next ) ?? ''
		}
		
		@ $mol_action
		native_translate() {
			const res = this.$.$giper_lingua_variants( this.native_lang(), this.foreign_lang(), this.native_text() )
			this.foreign_variants( res )
			this.foreign_text( Object.keys( res )[0] )
			this.$.$mol_state_arg.commit()
			this.Foreign_pane().dom_node().scrollIntoView({ behavior: 'smooth' })
		}
		
		@ $mol_action
		foreign_translate() {
			const res = this.$.$giper_lingua_variants( this.native_lang(), this.native_lang(), this.foreign_text() )
			this.native_variants( res )
			this.native_text( Object.keys( res )[0] )
			this.$.$mol_state_arg.commit()
			this.Native_pane().dom_node().scrollIntoView({ behavior: 'smooth' })
		}
		
		@ $mol_mem
		native_links() {
			return Object.keys( this.native_variants() ).map( text => this.Native_variant( text ) )
		}
		
		@ $mol_mem
		foreign_links() {
			return Object.keys( this.foreign_variants() ).map( text => this.Foreign_variant( text ) )
		}
		
		native_variant_title( text: string ) {
			return text
		}
		
		foreign_variant_title( text: string ) {
			return text
		}
		
		native_variant_descr( text: string ) {
			return this.native_variants()[ text ]
		}
		
		foreign_variant_descr( text: string ) {
			return this.foreign_variants()[ text ]
		}
		
		native_variant_use( text: string, next?: Event ) {
			this.native_text( text )
			this.$.$mol_state_arg.commit()
		}

		foreign_variant_use( text: string, next?: Event ) {
			this.foreign_text( text )
			this.$.$mol_state_arg.commit()
		}

		@ $mol_mem
		native_alt_list() {
			return Object.keys( this.alt_services() ).map( service => this.Native_alt_link( service ) )
		}
		
		@ $mol_mem
		foreign_alt_list() {
			return Object.keys( this.alt_services() ).map( service => this.Foreign_alt_link( service ) )
		}
		
		alt_title( service: string ) {
			return service
		}

		@ $mol_mem_key
		native_alt_link( service: string ) {
			return this.alt_services()[ service ]
				.replace( '{lang}', this.native_lang() )
				.replace( '{text}', encodeURIComponent( this.foreign_text() ) )
		}
		
		@ $mol_mem_key
		foreign_alt_link( service: string ) {
			return this.alt_services()[ service ]
				.replace( '{lang}', this.foreign_lang() )
				.replace( '{text}', encodeURIComponent( this.native_text() ) )
		}
		
		clear() {
			this.native_text( '' )
			this.native_variants({})
			this.foreign_text( '' )
			this.foreign_variants({})
		}
		
	}
}
