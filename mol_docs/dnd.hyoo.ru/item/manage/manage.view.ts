namespace $.$$ {
	export class $hyoo_dnd_item_manage extends $.$hyoo_dnd_item_manage {
		
		@ $mol_mem
		override spread_ids() {
			return Object.keys( this.char().inventory().data() )
		}
		
		override item_id_next() {
			return this.char().inventory().data().length.toString()
		}
		
		override item( index: number ) {
			return this.char().inventory_item( index )
		}
		
		override item_brief( index: number ) {
			return this.item( index ).brief()
		}
		
		override item_delete( index: number ) {
			this.char().inventory_delete( index )
		}
		
	}
}
