namespace $ {

	export class $hyoo_invest_store extends $mol_store<{
		stocks: readonly ReturnType< $hyoo_invest_stock['data'] >[]
	}> {

		@ $mol_mem
		stocks() {

			return this.value( 'stocks' ).map(
				( stock , index )=> this.stock( index )
			)

		}

		@ $mol_mem_key
		stock( index : number ) {
			return this.sub( 'stocks' )
				.sub( index , new $hyoo_invest_stock( this.value( 'stocks' )[ index ] ?? {} ) )
		}

		@ $mol_mem
		enter_amount() {
			return this.stocks().reduce(
				( sum , stock )=> sum + stock.enter_amount(),
				0,
			)
		}

		@ $mol_mem
		exit_amount() {
			return this.stocks().reduce(
				( sum , stock )=> sum + stock.exit_amount(),
				0,
			)
		}

		@ $mol_mem
		rate_annual() {
			const total_amount = this.enter_amount()
			const total_rate = this.stocks().reduce(
				( sum , stock )=> sum + stock.rate_annual() * stock.enter_amount() / total_amount,
				0,
			)
			return total_rate
		}

		stock_drop( index : number ) {
			const stocks = this.value( 'stocks' )
			this.value( 'stocks' , [
				... stocks.slice( 0, index ),
				... stocks.slice( index + 1 ),
			] )
		}

	}

}
