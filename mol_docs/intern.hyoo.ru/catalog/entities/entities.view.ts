namespace $.$$ {

	export class $hyoo_intern_catalog_entities extends $.$hyoo_intern_catalog_entities {

		@ $mol_mem
		ids() {
			return this.entity_links().ids()
		}

		@ $mol_mem_key
		item( id: string ) {
			return this.entity_links().item(id as $mol_int62_string)
		}

		add() {
			return this.entity_links().item_make()
		}

		drop(id: $mol_int62_string) {
			return this.entity_links().item_drop( this.entity_links().item(id) )
		}

		menu_body(): readonly any[] {
			return this.filter_opened()?
				[ this.Filter_form() ] : 
				super.menu_body()
		}

		menu_foot(){
			switch (this.access()) {
				case 'mod':
					return super.menu_foot()
				default:
					return [ ]
			}
		}

		page_content( id: any ) {
			switch (this.access()) {
				case 'mod':
					return [ this.Page_content_edit(id) ]
				default:
					return [ this.Page_content_view(id) ]
			}
			
		}

	}

}
