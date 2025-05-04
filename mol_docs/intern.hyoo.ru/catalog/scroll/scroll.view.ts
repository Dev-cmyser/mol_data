namespace $.$$ {

	export class $hyoo_intern_catalog_scroll extends $.$hyoo_intern_catalog_scroll {

		@ $mol_mem
		id_numered() {
			return Object.fromEntries(this.ids().map( (id, index) => [id, index+1] ))
		}

		row_title(id: string) {
			return `${this.id_numered()[id]}. ${id}`
		}

		page_title(id: string) {
			if (this.Page_link( id ).current()) {
				new $mol_after_tick( 
					()=> this.Pages().ensure_visible( this.Page(id) ) 
				)
			}
			return this.row_title(id)
		}

		id(id: string) {
			return id
		}

		@ $mol_mem
		links() {
			return this.ids().map( id=> this.Row_link(id) )
		}

		@ $mol_mem
		spreads() {
			return this.ids().map( id=> this.Page(id) )
		}

	}

}
