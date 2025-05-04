namespace $ {
	
	export class $hyoo_dnd_char extends $mol_store<{
		name: string
		race: $hyoo_dnd_race_id
		story: $hyoo_dnd_story_id
		class: $hyoo_dnd_class_id
		moral: 'good' | 'neutral' | 'evil'
		ethics: 'lawful' | 'neutral' | 'chaotic'
		biography: string
		age: number
		level: number
		experience: number
		hits_max: number
		hits_addon: number
		hits: number
		traits: string
		ideals: string
		affection: string
		weakness: string
		remarks: string
		abilities: Record< $hyoo_dnd_ability_id, number >
		skills: $hyoo_dnd_skill_id[]
		inventory: $hyoo_dnd_item_data[]
		spells: $hyoo_dnd_spell_data[]
	}> {
		
		image() {
			return this.race().image
		}
		
		name( next?: string ) {
			return this.value( 'name', next ) ?? ''
		}
		
		biography( next?: string ) {
			return this.value( 'biography', next ) ?? ''
		}
		
		age( next?: number ) {
			return Math.max( 1, this.value( 'age', next ) ?? 20 )
		}
		
		level( next?: number ) {
			return Math.min( Math.max( 1, this.value( 'level', next ) ?? 1 ), 20 )
		}
		
		experience( next?: number ) {
			return this.value( 'experience', next ) ?? 0
		}
		
		race_id( next?: $hyoo_dnd_race_id ) {
			return this.value( 'race', next ) || Object.keys( $hyoo_dnd_race_all )[0] as $hyoo_dnd_race_id
		}
		
		@ $mol_mem
		race() {
			return this.$.$hyoo_dnd_race_all[ this.race_id() ]
		}
		
		story_id( next?: $hyoo_dnd_story_id ) {
			return this.value( 'story', next ) || Object.keys( $hyoo_dnd_story_all )[0] as $hyoo_dnd_story_id
		}
		
		@ $mol_mem
		story() {
			return this.$.$hyoo_dnd_story_all[ this.story_id() ]
		}
		
		class_id( next?: $hyoo_dnd_class_id ) {
			return this.value( 'class', next ) || Object.keys( $hyoo_dnd_class_all )[0] as $hyoo_dnd_class_id
		}
		
		@ $mol_mem
		class() {
			return this.$.$hyoo_dnd_class_all[ this.class_id() ]
		}
		
		ability_addon( id: $hyoo_dnd_ability_id, next?: number ) {
			return this.sub( 'abilities', new $mol_store( {} as any ) ).value( id, next && Math.max( 0, Math.min( next, 7 ) ) ) ?? 0
		}
		
		ability( id: $hyoo_dnd_ability_id ) {
			return 8 + this.ability_addon( id ) + this.race().abilities[ id ]
		}
		
		ability_modifier( id: $hyoo_dnd_ability_id ) {
			return Math.floor( this.ability( id ) / 2 - 5 )
		}
		
		@ $mol_mem_key
		ability_safe( id: $hyoo_dnd_ability_id ) {
			const mod = this.ability_modifier( id )
			const safe = this.class().ability_safe
			return mod + ( safe.includes( id ) ? this.master_bonus() : 0 )
		}

		skills_choosen( next?: $hyoo_dnd_skill_id[] ) {
			return this.value( 'skills', next ) ?? [] as $hyoo_dnd_skill_id[]
		}
		
		@ $mol_mem
		skills() {
			return [ ... new Set([
				... this.class().skills,
				... this.race().skills,
				... this.story().skills,
				... this.skills_choosen(),
			]) ]
		}
		
		@ $mol_mem_key
		skill( id: $hyoo_dnd_skill_id ) {
			const skill = this.$.$hyoo_dnd_skill_all[ id ]
			const mod = this.ability_modifier( skill.ability )
			const skills = this.skills()
			return mod + ( skills.includes( id ) ? this.master_bonus() : 0 )
		}
		
		skill_has( id: $hyoo_dnd_skill_id, next?: boolean ) {
			if( next !== undefined ) {
				if( next ) this.skills_choosen([ ... this.skills_choosen(), id ])
				else this.skills_choosen( this.skills_choosen().filter( i => i !== id ) )
			}
			const skills = this.skills()
			return skills.includes( id )
		}
		
		@ $mol_mem
		perks() {
			return [ ... new Set([
				... this.race().perks,
				... this.story().perks,
				... this.class().perks.slice( 0, this.level() + 1 ).flatMap( p => p ),
			]) ]
		}
		
		@ $mol_mem
		inventory( next?: $hyoo_dnd_item_data[] ) {
			return this.sub( 'inventory', new $mol_store([ ... new Set([
				... this.class().inventory,
				... this.race().inventory,
				... this.story().inventory,
			]) ]) as any ) as $mol_store< $hyoo_dnd_item_data[] >
		}
		
		@ $mol_mem_key
		inventory_item( index: number ) {
			return this.inventory().sub( index, new $hyoo_dnd_item( {} as any ) )
		}
		
		inventory_delete( index: number ) {
			const all = this.inventory().data()
			this.inventory().data([ ... all.slice( 0, index ), ... all.slice( index + 1 ) ])
		}
		
		@ $mol_mem
		spells( next?: $hyoo_dnd_spell_data[] ) {
			return this.sub( 'spells', new $mol_store([]) as any ) as $mol_store< $hyoo_dnd_spell_data[] >
		}
		
		@ $mol_mem_key
		spell( index: number ) {
			return this.spells().sub( index, new $hyoo_dnd_spell( {} as any ) )
		}
		
		spell_delete( index: number ) {
			const all = this.spells().data()
			this.spells().data([ ... all.slice( 0, index ), ... all.slice( index + 1 ) ])
		}
		
		charm_count() {
			return this.$.$hyoo_dnd_spell_levels[ this.level() ].charms
		}
		
		spell_count() {
			return this.$.$hyoo_dnd_spell_levels[ this.level() ].spells
		}
		
		moral( next?: 'good' | 'neutral' | 'evil' ) {
			return this.value( 'moral', next ) ?? 'neutral'
		}
		
		ethics( next?: 'lawful' | 'neutral' | 'chaotic' ) {
			return this.value( 'ethics', next ) ?? 'neutral'
		}
		
		traits( next?: string ) {
			return this.value( 'traits', next ) ?? ''
		}
		
		ideals( next?: string ) {
			return this.value( 'ideals', next ) ?? ''
		}
		
		affection( next?: string ) {
			return this.value( 'affection', next ) ?? ''
		}
		
		weakness( next?: string ) {
			return this.value( 'weakness', next ) ?? ''
		}
		
		remarks( next?: string ) {
			return this.value( 'remarks', next ) ?? ''
		}
		
		master_bonus() {
			return 2 + Math.floor( this.level() / 4 - 1/4 )
		}
		
		hits_dice() {
			return this.class().dice
		}
		
		@ $mol_mem
		hits_max( next?: number ) {
			const def = this.hits_dice() + this.ability_modifier( 'constitution' )
			return this.value( 'hits_max', next ) || def
		}
		
		@ $mol_mem
		hits( next?: number ) {
			return this.value( 'hits', next && Math.max( 0, Math.min( next, this.hits_max() ) ) ) || this.hits_max()
		}
		
		@ $mol_mem
		hits_addon( next?: number ) {
			return this.value( 'hits_addon', next && Math.max( 0, next ) ) ?? 0
		}
		
		@ $mol_mem
		hits_heal() {
			const mod = Math.max( 1, this.ability_modifier( 'constitution' ) )
			const dice = this.hits_dice()
			return `d${dice}+${mod}`
		}
		
	}
	
}
