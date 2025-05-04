namespace $.$$ {

	export class $hyoo_invest extends $.$hyoo_invest {

		@ $mol_mem
		stock_list() {
			return this.store().stocks().map( (_,i)=> this.Stock_row(i) )
		}

		@ $mol_mem
		stock_rows() {

			const stocks = this.store().stocks()
			
			return [
				... ( stocks.length > 1 ) ? [ this.Stock_summary() ] : [],
				... this.stock_list(),
				this.Stock_row( stocks.length ),
			]

		}

		@ $mol_mem
		store() {
			return this.$.$mol_store_local.sub( '$hyoo_investment' , super.store() )
		}

		stock( id : number ) {
			return this.store().stock( id )
		}

		enter_amount() {
			return this.store().enter_amount()
		}

		exit_amount() {
			return this.store().exit_amount()
		}

		@ $mol_mem
		enter_date() {
			return this.store().stocks().reduce(
				( min , stock )=> {
					const date = stock.enter_date().toString()
					return ( min && ( date > min ) )
						? min
						: date ?? min
				},
				''
			)
		}

		@ $mol_mem
		exit_date() {
			return new $mol_time_moment().toString( 'YYYY-MM-DD' )
		}

		rate_annual() {
			return this.store().rate_annual()
		}

		stock_row_tools( id : number ) {
			return [
				... ( id === this.stock_list().length )
					? []
					: [ this.Stock_drop( id ) ]
			]
		}

		stock_drop( id : number ) {
			this.store().stock_drop( id )
		}

	}

}
