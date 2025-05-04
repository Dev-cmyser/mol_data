/* @jsx $mol_jsx */
namespace $.$$ {
	
	export class $hyoo_meta_menu_items extends $.$hyoo_meta_menu_items {
		
		id() {
			return this.list().land.id()
		}
		
		editable() {
			return this.list().land.allowed_mod()
		}
		
		item_editable( id: $mol_int62_string ) {
			return this.item( id ).land.allowed_mod()
		}
		
		ids() {
			const self = this.id()
			return super.ids().filter( id => id !== self ).reverse() as readonly $mol_int62_string[]
		}
		
		@ $mol_mem
		items() {
			return this.ids().map( id => this.Item( id ) )
		}
		
		@ $mol_mem_key
		item( id: $mol_int62_string ) {
			return this.list().world()!.Fund( $hyoo_meta_model ).Item( id )
		}
		
		item_expandable( id: $mol_int62_string ) {
			return this.item_list( id ).list().length > 0
		}
		
		@ $mol_mem_key
		item_content( id: $mol_int62_string ) {
			return [
				this.Item_row( id ),
				... this.item_expanded( id )
					? [ this.Item_items( id ) ]
					: []
			]
		}
		
		@ $mol_mem_key
		item_row( id: $mol_int62_string ) {
			return [
				this.Item_expand( id ),
				this.Item_drop_after( id ),
				... this.editable()
					? this.list().has( id )
						? this.editing()
							? [ this.Item_remove( id ) ]
							: this.item_editable( id )
								? [ this.Item_drop_inside( id ) ]
								: []
						: [ this.Item_pin( id ) ]
					: [],
			]
		}
		
		@ $mol_action
		item_remove( id: $mol_int62_string ) {
			this.list().drop( id )
		}
		
		@ $mol_action
		item_pin( id: $mol_int62_string ) {
			this.list().add( id )
			this.item_moved( id, this.id() )
		}
		
		@ $mol_action
		add() {
			return this.item_add( this.id() )
		}
		
		item_html( id: $mol_int62_string ) {
			return( <a href={ this.item_uri( id ) }>{ this.item_title( id ) }</a> ).outerHTML
		}
		
		item_text( id: $mol_int62_string ) {
			return `\\\\${ this.item_title( id ) }\\${ this.item_uri( id ) }\\\\`
		}
		
		transfer_adopt( transfer : DataTransfer ) {
			
			const uri = transfer.getData( "text/uri-list" )
			if( !uri ) return
			
			return $mol_int62_string_ensure( uri.match( /[0-9a-z]+_[0-9a-z]+/ )?.[0] ?? '' )
			
		}

		@ $mol_action
		receive_after( anchor: $mol_int62_string, dropped: $mol_int62_string ) {

			if( anchor === dropped ) return
			
			const list = this.list()
			const exists = list.has( dropped )
			list.drop( dropped )
			const index = list.list().indexOf( anchor )
			
			list.insert( [dropped], Math.min( list.list().length, index + 1 ) )
			if( !exists ) this.item_moved( dropped, list.land.id() )
			
		}
		
		@ $mol_action
		receive_inside( anchor: $mol_int62_string, dropped: $mol_int62_string ) {

			if( anchor === dropped ) return
			
			const list = this.item_list( anchor )
			const exists = list.has( dropped )
			list.drop( dropped )
			
			list.insert( [dropped], 0 )
			if( !exists ) this.item_moved( dropped, list.land.id() )
			
		}
		
		// item_drag_end( id: $mol_int62_string, event: DragEvent ) {
		// 	if( event.dataTransfer!.dropEffect !== 'move' ) return
		// 	this.list().drop( id )
		// }
		
	}
	
}
