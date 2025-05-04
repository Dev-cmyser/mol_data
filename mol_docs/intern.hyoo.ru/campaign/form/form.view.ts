namespace $.$$ {

	export class $hyoo_intern_campaign_form extends $.$hyoo_intern_campaign_form {

		@ $mol_mem
		invite_link() {
			return this.$.$mol_state_arg.make_link({ campaign: this.campaign().id() })
		}

		// @ $mol_mem
		// campaign_current( next?: boolean ) {
		// 	if (next === true) {
		// 		this.user().campaign_current( this.campaign() )
		// 		return next
		// 	}
			
		// 	return this.campaign().id() === this.user().campaign_current()?.id()
		// }

	}

}
