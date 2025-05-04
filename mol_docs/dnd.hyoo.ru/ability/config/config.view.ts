namespace $.$$ {
	export class $hyoo_dnd_ability_config extends $.$hyoo_dnd_ability_config {
		
		@ $mol_mem
		override title() {
			if( !this.pending() ) return super.title()
			return super.title() + ' ' + this.pending()
		}
		
		@ $mol_mem
		pending() {
			const char = this.char()
			const total = Object.keys( this.$.$hyoo_dnd_ability_all )
				.reduce( ( sum, id )=> sum + char.ability_addon( id as $hyoo_dnd_ability_id ), 0 )
			return 24 - total
		}
		
		@ $mol_mem
		override ability_list() {
			return [
				this.Ability_row( '' ),
				... Object.keys( this.$.$hyoo_dnd_ability_all )
					.map( ability => this.Ability_row( ability ) )
			]
		}
		
		override ability_hint( id: $hyoo_dnd_ability_id ) {
			if( !id ) return 'Характеристики'
			return this.$.$hyoo_dnd_ability_all[ id ].description
		}
		
		override ability_title( id: $hyoo_dnd_ability_id ) {
			if( !id ) return 'Способности'
			return this.$.$hyoo_dnd_ability_all[ id ].title
		}
		
		ability_total_value( id: $hyoo_dnd_ability_id ) {
			if( !id ) return [ '🔢' ]
			return [ this.char().ability( id ) ]
		}
		
		ability_modifier_value( id: $hyoo_dnd_ability_id ) {
			if( !id ) return [ '✨' ]
			return [ new $hyoo_dnd_modifier( this.char().ability_modifier( id ) ).toString() ]
		}
		
		@ $mol_mem_key
		ability_safe_value( id: $hyoo_dnd_ability_id ) {
			if( !id ) return [ '☔' ]
			return [ new $hyoo_dnd_modifier( this.char().ability_safe( id ) ).toString() ]
		}
		
	}
}
