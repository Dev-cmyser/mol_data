namespace $.$$ {

	export class $hyoo_intern_cabinet_sign extends $.$hyoo_intern_cabinet_sign {

		campaign_creating() {
			return this.person().campaigns().items()?.[0] ?? super.campaign_creating()
		}

		person_has_camapigns() {
			return this.person().campaigns().items().length > 0
		}

		campaign_add_enabled() {
			return !this.person_has_camapigns()
		}

		@ $mol_mem
		campaign_body() {
			return [
				this.About(),
				... this.person_has_camapigns() ? [ this.Campaign() ] : [ null ],
			]
		}

		@ $mol_action
		campaign_add() {
			this.person().campaigns().item_make()
		}

		@ $mol_action
		start() {
			this.person().signed(true)
		}

		start_button_enabled() {
			return this.person_has_camapigns()
		}

	}

}
