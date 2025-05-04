namespace $ {

	export class $hyoo_intern_manager extends $hyoo_crowd_struct {

		@ $mol_mem
		person( next?: $hyoo_intern_person ) {
			const str = this.sub( 'person' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $hyoo_intern_person ).Item( id ) : null
		}
		
		@ $mol_mem
		company( next?: $hyoo_intern_company ) {
			const str = this.sub( 'person' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $hyoo_intern_person ).Item( id ) : null
		}

	}

}
