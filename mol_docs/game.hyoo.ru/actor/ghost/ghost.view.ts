namespace $.$$ {
	export class $hyoo_game_actor_ghost extends $.$hyoo_game_actor_ghost {
		
		@ $mol_mem
		auto() {
			
			this.$.$mol_state_time.now(1000)
			
			this.move_forward( Math.random() > .5 )
			
			this.turn_left( Math.random() > .5 )
			this.turn_right( Math.random() > .5 )
			
			super.auto()
		}
			  
	}
}
