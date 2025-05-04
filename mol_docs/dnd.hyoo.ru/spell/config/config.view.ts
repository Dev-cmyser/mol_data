namespace $.$$ {
	export class $hyoo_dnd_spell_config extends $.$hyoo_dnd_spell_config {
		
		override title() {
			return this.spell().title()
		}
		
		@ $mol_mem
		override damage_options() {
			return Object.keys( this.$.$hyoo_dnd_damage_all )
		}
		
		override damage_title( id: $hyoo_dnd_damage_id ) {
			return this.$.$hyoo_dnd_damage_all[ id ]?.title ?? '???'
		}
		
		// @ $mol_mem
		// override classes_options() {
		// 	return Object.keys( this.$.$hyoo_dnd_class_all )
		// }
		
		// override class_title( id: $hyoo_dnd_class_id ) {
		// 	return this.$.$hyoo_dnd_class_all[ id ].title
		// }
		
		// override class_checked( id: $hyoo_dnd_class_id, next?: boolean ) {
		// 	return this.spell().class_has( id, next )
		// }
		
		override component_checked( id: 'verbal' | 'somatic' , next?: boolean ) {
			return this.spell().component( id, next )
		}
		
	}
}
