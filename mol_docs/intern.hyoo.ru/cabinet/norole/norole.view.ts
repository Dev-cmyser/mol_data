namespace $.$$ {

	export class $hyoo_intern_cabinet_norole extends $.$hyoo_intern_cabinet_norole {

		campaign() {
			return this.campaign_join() ?? this.user().campaign_current()
		}

		campaign_info() {
			return this.campaign().info()
		}

		@ $mol_action
		send_resume() {
			this.campaign().candidates_on_review().item_push( this.user() )
		}

		@ $mol_action
		staff_request() {
			this.user().campaigns().item_push( this.campaign() )
		}

	}

}
