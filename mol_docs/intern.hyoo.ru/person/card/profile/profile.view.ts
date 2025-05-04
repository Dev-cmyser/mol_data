namespace $.$$ {
	export class $hyoo_intern_person_card_profile extends $.$hyoo_intern_person_card_profile {
		
		@ $mol_mem
		info() {
			return [
				this.Title(),
				this.Name(),
				... this.name_sub().length ? [ this.Name_sub() ] : [],
			]
		}
		
		name() {
			return super.name() || 'Имя Фамилия'
		}
		
	}
}
