namespace $.$$ {

	export class $hyoo_intern_curator_card extends $.$hyoo_intern_curator_card {

		@ $mol_mem
		person_id() {
			const person = this.curator().person()
			return person?.id()
		}

	}

}
