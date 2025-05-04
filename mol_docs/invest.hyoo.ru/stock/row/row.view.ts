namespace $.$$ {
	
	export class $hyoo_invest_stock_row extends $.$hyoo_invest_stock_row {

		title( next? : string ) {
			return this.stock().title(  next )
		}

		enter_amount( next? : number ) {
			return this.stock().enter_amount( next )
		}

		enter_date( next? : $mol_time_moment ) {
			return this.stock().enter_date( next )
		}

		exit_amount( next? : number ) {
			return this.stock().exit_amount( next )
		}

		exit_date( next? : $mol_time_moment ) {
			return this.stock().exit_date( next )
		}

		income() {
			return this.stock().income()
		}

		duration() {
			return Math.floor( this.stock().interval().duration.count( 'P1D' ) )
		}

		rate_annual( next? : number ) {
			return this.stock().rate_annual( next )
		}

		exit_date_mood() {
			const today = new $mol_time_moment().toString( 'YYYY-MM-DD' )
			const exit = this.exit_date()?.toString( 'YYYY-MM-DD' ) ?? ''
			return exit >= today ? 'good' : 'bad'
		}

		result_mood() {
			return this.income() > 0 ? 'good' : 'bad'
		}

	}

}
