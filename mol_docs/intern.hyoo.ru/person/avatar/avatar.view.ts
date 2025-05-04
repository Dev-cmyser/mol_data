namespace $.$$ {

	export class $hyoo_intern_person_avatar extends $.$hyoo_intern_person_avatar {

		sub() {
			return [
				... this.uri() !== '' ? [ this.Preview() ] : [],
				... this.control() ? [this.Control()] : [],
			]
		}

		blob_exists() {
			return this.blob_node().list().length > 0
		}

		// placeholder() {
		// 	return super.placeholder().replace('{id}', this.blob().land.id)
		// }

		uri() {
			return this.blob_exists() ? this.blob_node().uri() : ''
		}

		@ $mol_mem
		avatar_file( next?: File[] ) {
			
			if( !next ) return []
			
			const file = next[0]
			const pict = $mol_picture.fit( file, this.size() )

			const blob = pict.format( 'image/webp' )
			if( !blob ) return []
			
			this.blob_node().blob( blob )
			
			return []
		}

		avatar_drop() {
			this.blob_node().list([])
		}

	}

}
