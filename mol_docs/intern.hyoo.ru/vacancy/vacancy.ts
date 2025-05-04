namespace $ {

	export class $hyoo_intern_vacancy extends $hyoo_crowd_struct {
		
		@ $mol_mem
		requirements( next?: string ) {
			return this.sub( 'requirements', $hyoo_crowd_reg ).str( next ) ?? ''
		}
		
	}

}
