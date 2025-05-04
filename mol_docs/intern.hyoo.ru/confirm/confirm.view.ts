namespace $.$$ {

	export class $hyoo_intern_confirm extends $.$hyoo_intern_confirm {

		person() {
			const person_id = $mol_int62_string_ensure(this.$.$mol_state_arg.dict()['confirm_id'])
			if (!person_id) $mol_fail( new $mol_data_error(`there isnt person with id ${person_id}`) )
			return this.yard().world().Fund( $hyoo_intern_person ).Item( person_id )
		}

		@ $mol_action
		confirm_role(){
			const role = this.$.$mol_state_arg.dict()['confirm_role']
			if ( !['curator','mentor','manager'].includes( role ) ) {
				$mol_fail( new $mol_data_error(`role "${role}" isnt exist`) )
			}
			
			const person_id = this.person().id()
			switch (role) {
				case 'curator': 
					return this.campaign().curator_add( person_id! )
			}
		}

	}

}
