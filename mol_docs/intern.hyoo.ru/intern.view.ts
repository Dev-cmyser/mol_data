namespace $.$$ {

	type Role = keyof ReturnType<$hyoo_intern["cabinets"]>

	export class $hyoo_intern extends $.$hyoo_intern {

		@ $mol_mem
		home() {
			return this.yard().world().home()
		}

		@ $mol_mem
		user() {
			return this.home().chief.as( $hyoo_intern_person )
		}

		@ $mol_mem
		campaign_join() {
			const str = this.$.$mol_state_arg.value('campaign_join')
			const id = $mol_int62_string_ensure( str )
			return id ? this.home().world()?.Fund( $hyoo_intern_campaign ).Item(id) : null
		}

		@ $mol_mem
		role() {
			// В ссылке есть id кампании в которую входим и пользователь не проходил 'sign' - пришел новый кандидат или новый сотрудник
			if (this.campaign_join() && !this.user().signed()) return 'norole'

			// В ссылке нет id кампании в которую входим и пользователь не проходил 'sign' - создаем кампанию
			if (!this.campaign_join() && !this.user().signed()) return 'sign'

			// Заходим в текущую кампанию, пользователь админ
			if (this.user().campaign_current()?.owner()?.id() === this.user().id()) return 'admin'

			// Пользователь ждет аппрува на присоединение в качестве сотрудника
			if (this.user().campaign_current()?.person_wants_to_staff( this.user() )) return 'norole'

			return 'qwe'
		}

		sub() {
			return [ this.cabinets()[ this.role() ] ]
		}

	}

}
