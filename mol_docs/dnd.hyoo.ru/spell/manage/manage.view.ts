namespace $.$$ {
	export class $hyoo_dnd_spell_manage extends $.$hyoo_dnd_spell_manage {
		
		@ $mol_mem
		level() {
			return this.$.$hyoo_dnd_spell_levels[ this.char().level() ]
		}
		
		@ $mol_mem
		levels() {
			return Array.from( { length: this.level().slots.length }, ( _, level )=> this.Level( level ) )
		}
		
		level_title( level: number ) {
			return super.level_title( level ).replace( '{level}', level+'' )
		}
		
		level_slot_max( level: number ) {
			if( !level ) return '/ ∞'
			return ' / ' + ( this.level().slots[ level ] ??  0 )
		}
		
		@ $mol_mem_key
		level_slot_ready( level: number, next?: number ) {
			
			if( !level ) return 0
			
			const max = this.level().slots[ level ] ??  0
			if( next === undefined ) return max
			
			return Math.max( 0, Math.min( next, max ) )
		}

		@ $mol_mem_key
		override level_spells( level: number ) {
			const spells = this.char().spells().data()
			return Object.keys( spells ).filter( id => spells[ id as any as number ].level === level ).map( id => this.Menu_item( id ) )
		}
		
		override spell_id_next() {
			return this.char().spells().data().length.toString()
		}
		
		override spell( index: number ) {
			return this.char().spell( index )
		}
		
		override spell_brief( index: number ) {
			return this.spell( index ).brief()
		}
		
		override spell_delete( index: number ) {
			this.char().spell_delete( index )
		}
		
	}
}
