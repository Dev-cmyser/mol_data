/* @jsx $mol_jsx */
namespace $.$$ {
	
	export class $hyoo_meta_menu extends $.$hyoo_meta_menu {
		
		id() {
			return this.list().land.id()
		}
		
		@ $mol_mem
		head() {
			return [
				this.Title(),
				this.Tools(),
				... this.search_show() ? [ this.Search() ] : [],
			]
		}
		
		editable() {
			return this.list().land.allowed_mod()
		}
		
		item_editable( id: $mol_int62_string ) {
			return this.item( id ).land.allowed_mod()
		}
		
		tools() {
			return this.editable() ? super.tools() : [ this.Search_toggle(), ... this.tools_ext() ]
		}
		
		@ $mol_mem
		body() {
			return this.search().trim()
				? [ this.Found() ]
				: [ this.Content(), this.Drop_end() ]
		}
		
		@ $mol_mem
		search_show( next = false ) {
			if( next === true ) this.Search().bring()
			if( next === false ) this.search( '' )
			return next
		}
		
		@ $mol_mem_key
		item( id: $mol_int62_string ) {
			return this.list().world()!.Fund( $hyoo_meta_model ).Item( id )
		}
		
		@ $mol_mem
		found() {
			
			if( !this.search().trim() ) return []
				
			return this.yard()
				.land_search( this.search() )
				.map( id => this.item( id ).whole() )
				.filter( meta => meta.title().trim() )
				.map( meta => meta.id() )
			
		}
		
		@ $mol_action
		add() {
			return this.item_add( this.id() )
		}
		
		transfer_adopt( transfer : DataTransfer ) {
			
			const uri = transfer.getData( "text/uri-list" )
			if( !uri ) return
			
			return $mol_int62_string_ensure( uri.match( /[0-9a-z]+_[0-9a-z]+/ )?.[0] ?? '' )
			
		}

		@ $mol_action
		receive_end( dropped: $mol_int62_string ) {
			
			const list = this.list()
			const exists = list.has( dropped )
			list.drop( dropped )
			
			this.list().insert( [dropped], 0 )
			if( !exists ) this.item_moved( dropped, this.id() )
			
		}
		
	}
	
}
