namespace $ {
	export class $hyoo_dnd_coin extends $mol_unit {
		
		toString() {
			
			let val = this.valueOf()
			let str = ''
			
			if( val % 10 ) {
				str = `🟠${ val % 10 }` + str
				val -= val % 10
			}
			val /= 10
			
			if( val % 10 ) {
				str = `⚪${ val % 10 }` + str
				val -= val % 10
			}
			val /= 10
			
			if( val ) str = `🟡${ val }` + str
			
			return str
		}
		
	}
}
