namespace $.$$ {

	export class $hyoo_intern_cabinet extends $.$hyoo_intern_cabinet {

		@ $mol_mem
		campaign() {
			return this.user().campaign_current()!
		}

		@ $mol_mem
		Spread() {
			if (this.campaign().person_wants_to_staff( this.user() )) return this.Staff_request_page()

			if ( !this.spread() ) this.spread( Object.keys(this.spreads())[0] )

			return {
				person: this.Person_page(),
				// confirm: this.Confirm_page(),
				...this.spreads(),
			}[ this.spread() ]!
		}

		Menu_logo() {
			return this.campaign()?.image_node()?.list()?.length ?? 0 > 0 ? super.Menu_logo() : null as any
		}

		@ $mol_mem
		campaign_image_node() {
			return this.campaign()?.image_node() ?? new $hyoo_crowd_blob
		}

		campaign_name() {
			return this.campaign()?.name() || super.campaign_name()
		}

		staff_request_role( next?: string ) {
			return this.$.$mol_state_local.value(`${this}.staff_request_role()`, next) ?? super.staff_request_role()
		}

		staff_link_copy_enabled() {
			return !!this.staff_request_role() && !!this.user().name() && !!this.user().name_family()
		}

		staff_request_link() {
			return this.$.$mol_state_arg.make_link({ section: 'staff_approve', person: this.user().id(), campaign: this.campaign().id(), role: this.staff_request_role() })
		}

	}

}
