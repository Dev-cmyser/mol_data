namespace $.$$ {
	export class $hyoo_dnd_char_main extends $.$hyoo_dnd_char_main {
		
		@ $mol_mem
		override race_options() {
			return Object.keys( this.$.$hyoo_dnd_race_all )
		}
		
		@ $mol_mem_key
		override race_title( id: $hyoo_dnd_race_id ) {
			return this.$.$hyoo_dnd_race_all[ id ].title
		}
		
		override race_descr() {
			return this.char().race().description
		}
		
		@ $mol_mem
		override story_options() {
			return Object.keys( this.$.$hyoo_dnd_story_all )
		}
		
		@ $mol_mem_key
		override story_title( id: $hyoo_dnd_story_id ) {
			return this.$.$hyoo_dnd_story_all[ id ].title
		}
		
		override story_descr() {
			return this.char().story().description
		}
		
		@ $mol_mem
		override class_options() {
			return Object.keys( this.$.$hyoo_dnd_class_all )
		}
		
		@ $mol_mem_key
		override class_title( id: $hyoo_dnd_class_id ) {
			if( !id ) return ''
			return this.$.$hyoo_dnd_class_all[ id ].title
		}
		
		override class_descr() {
			return this.char().class().description
		}
		
	}
}
