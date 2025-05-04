namespace $.$$ {

	export class $hyoo_intern_sign extends $.$hyoo_intern_sign {

		step_current() {
			return this.steps()[ this.step() ]
		}

		buttons() {
			const end = this.step() + 1 === this.steps().length
			return end ? [this.Back_button(), this.Submit_button()] : [this.Back_button(), this.Next_button()]
		}

		next() {
			this.step( this.step() + 1 )
		}

		back() {
			this.step( Math.max(0, this.step() - 1) )
		}

		back_enabled() {
			return this.step() > 0
		}

		submit() {
			super.submit()
			this.person().signed(true)
		}

	}

}
