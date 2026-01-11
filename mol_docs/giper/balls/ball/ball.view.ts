namespace $.$$ {
	export class $giper_balls_ball extends $.$giper_balls_ball {
		
		@ $mol_mem
		color() {
			return this.colors()[ Math.abs( this.kind() ) ]
		}
		
		@ $mol_mem
		state() {
			const kind = this.kind()
			if( !kind ) return 'empty'
			if( kind < 0 ) return 'ghost'
			if( this.active() ) return 'active'
			return 'alve'
		}
		
		@ $mol_mem
		image() {
			return `radial-gradient( circle at 50% 25%, oklch( 1 0 0 ), ${ this.color() } 3%, oklch( 0 0 0 ) 120% )`
		}
		
	}
}
