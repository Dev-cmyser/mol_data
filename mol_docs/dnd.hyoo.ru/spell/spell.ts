namespace $ {
	
	export type $hyoo_dnd_spell_data = {
		title: string
		level: number
		classes: $hyoo_dnd_class_id[]
		school: string
		focus: boolean
		ritual: boolean
		verbal: boolean
		somatic: boolean
		material: string
		cooldown: 'action' | 'bonus' | 'reaction' | 'minute' | 'hour'
		damage: `${number}d${number}`,
		damage_type: $hyoo_dnd_damage_id
		ability: $hyoo_dnd_ability_id,
		distance: number
		remarks: string
	}
	
	export class $hyoo_dnd_spell extends $mol_store< $hyoo_dnd_spell_data > {
		
		title( next?: string ) {
			return this.value( 'title', next ) ?? ''
		}
		
		level( next?: number ) {
			return this.value( 'level', next ) ?? 0
		}
		
		damage( next?: `${number}d${number}` ) {
			return this.value( 'damage', next ) ?? '0d0'
		}
		
		damage_type( next?: $hyoo_dnd_damage_id ) {
			return this.value( 'damage_type', next ) ?? ''
		}
		
		@ $mol_mem
		distance( next?: number ) {
			return this.value( 'distance', next ) ?? 0
		}
		
		@ $mol_mem
		ability( next?: $hyoo_dnd_ability_id ) {
			return this.value( 'ability', next ) ?? 'inteligence'
		}
		
		component( id: 'verbal' | 'somatic', next?: boolean ) {
			return this.value( id, next ) ?? false
		}
		
		material( next?: string ) {
			return this.value( 'material', next ) ?? ''
		}
		
		classes( next?: $hyoo_dnd_class_id[] ) {
			return this.value( 'classes', next ) ?? []
		}
		
		class_has( id: $hyoo_dnd_class_id, next?: boolean ) {
			if( next !== undefined ) {
				if( next ) this.classes([ ... this.classes(), id ])
				else this.classes( this.classes().filter( i => i !== id ) )
			}
			const skills = this.classes()
			return skills.includes( id )
		}
		
		@ $mol_mem
		brief() {
			
			let brief = ''
			
			// brief += ` 🏅${ this.level() }`
			
			brief += ' ' + [
				... this.component( 'verbal' ) ? [ `👅` ] : [],
				... this.component( 'somatic' ) ? [ `🖐` ] : [],
				... this.material() ? [ `🍭` ] : [],
			].join( '' )
			
			// if( this.defence() ) brief += ` 🦺${ this.defence() }`
			
			// const damage = this.damage()
			// if( damage.value( 'hand1' ) ) brief += ` 🙋d${ damage.value( 'hand1' ) }`
			// if( damage.value( 'hand2' ) ) brief += ` 🙆d${ damage.value( 'hand2' ) }`
			// if( damage.value( 'distant' ) ) {
			// 	brief += ` 💨d${ damage.value( 'distant' ) }`
			// 	brief += `:${ this.attack_distance_norm() }..${ this.attack_distance_max() }`
			// }
			
			
			if( this.damage_type() ) {
				brief += ' ' + this.$.$hyoo_dnd_damage_all[ this.damage_type() as $hyoo_dnd_damage_id ].title.slice( 0, 2 )
					+ this.damage()
			}
			
			// brief += ' ' + this.$.$hyoo_dnd_ability_all[ this.ability() ].title.slice( 0, 2 )
				
			return brief
		}
		
		remarks( next?: string ) {
			return this.value( 'remarks', next ) ?? ''
		}
		
	}
	
}
