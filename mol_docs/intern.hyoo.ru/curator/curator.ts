namespace $ {

	export class $hyoo_intern_curator extends $hyoo_crowd_struct {

		@ $mol_mem
		person( next?: $hyoo_intern_person ) {
			const str = this.sub( 'person' , $hyoo_crowd_reg ).str( next && next.land.id() )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $hyoo_intern_person ).Item( id ) : null
		}
		
	}

}
