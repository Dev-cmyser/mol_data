namespace $.$$ {

	export class $hyoo_sporno extends $.$hyoo_sporno {
		
		@ $mol_mem
		formulas_default() {
			
			if( Object.keys( this.$.$mol_state_arg.dict() ).length ) {
				return super.formulas_default()
			} else {
				return this.formulas_template()
			}
			
		}

	}

}
