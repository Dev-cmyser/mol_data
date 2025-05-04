namespace $ {
	
	export class $hyoo_invest_stock extends $mol_store<{
		title?: string
		enter_amount?: number
		enter_date?: string
		exit_amount?: number | null
		exit_date?: string
		rate_annual?: number | null
	}> {

		title( next? : string ) {
			return this.value( 'title' , next ) ?? ''
		}

		enter_date( next? : $mol_time_moment ) {
			let str = next?.toString()
			str = this.value( 'enter_date' , str )
			return new $mol_time_moment( str ).mask( '1111-11-11' )
		}

		exit_date( next? : $mol_time_moment ) {
			let str = next?.toString()
			str = this.value( 'exit_date' , str )
			return new $mol_time_moment( str ).mask( '1111-11-11' )
		}

		enter_amount( next? : number ) {

			if( next ) {
				this.enter_date( this.enter_date() )
			}
			
			return this.value( 'enter_amount' , next ) ?? 0
		}

		@ $mol_mem
		exit_amount( next? : number | null ) {
			
			let amount = this.value( 'exit_amount' , next )
			const rate = this.value( 'rate_annual' , next && null )

			if( next ) {
				this.exit_date( this.exit_date() )
			}
			
			if( rate ) {
				amount = amount ?? this.value( 'enter_amount' ) * ( 1 + rate / 100 * this.duration() )
			}
			
			return amount ?? 0
		}

		@ $mol_mem
		rate_annual( next? : number | null ) {
			
			let rate = this.value( 'rate_annual' , next )
			const exit_amount = this.value( 'exit_amount' , next && null )

			if( exit_amount ) {
				rate = rate ?? ( ( exit_amount - this.value( 'enter_amount' ) ) / this.duration() / this.enter_amount() * 100 )
			}
			
			return rate ?? 0
		}

		@ $mol_mem
		interval() {
			return new $mol_time_interval({
				start: this.enter_date(),
				end: this.exit_date(),
			})
		}

		@ $mol_mem
		duration() {
			return this.interval().duration.count( 'P1Y' )
		}

		income() {
			return this.exit_amount() - this.enter_amount()
		}

	}

}
