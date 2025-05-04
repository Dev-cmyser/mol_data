namespace $.$$ {
	export class $hyoo_dnd_char_personality extends $.$hyoo_dnd_char_personality {
		
		@ $mol_mem
		override moral_options() {
			return Object.keys( this.$.$hyoo_dnd_moral_all )
		}
		
		@ $mol_mem_key
		override moral_title( id: $hyoo_dnd_moral_id ) {
			return this.$.$hyoo_dnd_moral_all[ id ].title
		}
		
		@ $mol_mem
		override ethics_options() {
			return Object.keys( this.$.$hyoo_dnd_ethics_all )
		}
		
		@ $mol_mem_key
		override ethics_title( id: $hyoo_dnd_ethics_id ) {
			return this.$.$hyoo_dnd_ethics_all[ id ].title
		}
		
	}
}
