namespace $.$$ {

	export class $hyoo_intern_person_page extends $.$hyoo_intern_person_page {

		@ $mol_action
		campaign_add() {
			this.person().campaigns().item_make()
		}

		campaign( id: $mol_int62_string ) {
			return this.person().campaigns().item(id)
		}

		campaign_list() {
			return this.person().campaigns().ids().map( id => this.Campaign(id) )
		}


		@ $mol_mem
		confirm_link() {
			return this.$.$mol_state_arg.make_link({ 
				section: 'confirm',
				confirm_id: this.person().id(),
				confirm_role: this.person().role_raw(), 
			})
		}

		@ $mol_mem
		body() {
			if ( this.person().role_raw_confirmed() ) return [ this.Deck() ]
			return super.body()
		}

	}

}
