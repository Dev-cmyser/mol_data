namespace $.$$ {

	type Stages = 1 | 2 | 3 | 4 | 5

	export class $hyoo_intern_cabinet_intern extends $.$hyoo_intern_cabinet_intern {

		@ $mol_mem
		spreads() {
			return this.stage_spreads()[ this.stage() as Stages ]
		}

		@ $mol_mem
		profile_title(): string {
			return this.stage() > 3 ? 'Профиль стажера' : 'Профиль кандидата'
		}

		@ $mol_mem
		stage_title() {
			return `${this.stage()} этап стажировки`
		}

	}

}
