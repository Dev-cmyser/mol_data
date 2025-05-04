namespace $.$$ {
	export class $hyoo_dnd_app extends $.$hyoo_dnd_app {
		
		@ $mol_mem
		char() {
			return this.$.$mol_store_local.sub( 'char', new $hyoo_dnd_char({
				// name: '',
				// race: Object.keys( $hyoo_dnd_race_all )[0] as $hyoo_dnd_race_id,
				// class: Object.keys( $hyoo_dnd_class_all )[0] as $hyoo_dnd_class_id,
				// story: Object.keys( $hyoo_dnd_story_all )[0] as $hyoo_dnd_story_id,
				// moral: 'neutral',
				// ethics: 'neutral',
				// experience: 0,
				// level: 1,
				// age: 20,
				// hits: 0,
				// hits_max: 0,
				// hits_addon: 0,
				// abilities: {
				// 	dexterity: 0,
				// 	charisma: 0,
				// 	constitution: 0,
				// 	intelligence: 0,
				// 	strength: 0,
				// 	wisdom: 0,
				// },
				// skills: [],
				// biography: '',
				// affection: '',
				// ideals: '',
				// traits: '',
				// weakness: '',
				// inventory: '',
			}as any) )
		}
		
		@ $mol_mem
		background() {
			const color = this.$.$mol_lights() ? `rgba(255,255,255,.75)` : `rgba(0,0,0,.75)`
			return `linear-gradient( to bottom, ${color}, ${color} ), url(${ JSON.stringify( this.char_image() ) })`
		}
		
		@ $mol_mem
		pages() {
			return [
				... super.pages(),
				... $mol_maybe( this.Inventory_spread() ),
				... $mol_maybe( this.Spells_spread() ),
			]
		}
		
	}
}
