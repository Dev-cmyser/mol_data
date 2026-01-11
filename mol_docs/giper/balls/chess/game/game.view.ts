namespace $.$$ {
	export class $giper_balls_chess_game extends $.$giper_balls_chess_game {
		
		@ $mol_mem
		State( next?: $giper_balls_chess_state ): $giper_balls_chess_state {
			const val = this.$.$mol_state_local.value( '$giper_balls_chess:state', next && $mol_base64_encode( next ) )
			return val && new $giper_balls_chess_state( $mol_base64_decode( val ) ) || new $giper_balls_chess_state( super.State() )
		}
		
		score() {
			return this.State().ballance()
		}
		
		@ $mol_mem
		score_text() {
			return this.score().toLocaleString( 'en', { signDisplay: 'exceptZero' } )
		}
		
		@ $mol_mem_key
		ball_kind( id: [ number, number ], next?: number ) {
			
			const side = this.State().side()
			const coord =  $giper_balls_coord( ... id )
			const cell = this.State()[ coord ]
			const ways = this.State().movements()
			
			if( !ways.length ) {
				if( !cell ) return 0
				const cell_side = $giper_balls_chess_cell_side( cell )
				if( cell_side === side ) return cell_side ? -1 : -3
				else return cell_side ? 1 : 3
			}
			
			const active = this.active_cell()
			if( active.length ) {
				
				const active_coord = $giper_balls_coord( active[0], active[1] )
				const step = $giper_balls_step( active_coord, coord )
				
				if( !cell ) return ways.includes( step ) ? ( side ? -1 : -3 ) : 0
				
				if( ways.includes( step ) ) return $giper_balls_chess_cell_side( cell ) ? -1 : -3
				else return $giper_balls_chess_cell_side( cell ) ? 1 : 3
				
			} else {
				
				if( !cell ) return 0
				return $giper_balls_chess_cell_side( cell ) ? 1 : 3
				
			}
			
		}
		
		@ $mol_mem_key
		ball_mood( id: [ number, number ] ) {
			
			const cell = this.State()[ $giper_balls_coord( ... id ) ]
			if( !cell ) return ''
			
			return this.mood_smiles()[ $giper_balls_chess_cell_kind( cell ) ]
		}
		
		@ $mol_action
		ball_grab( id: [ number, number ], event: PointerEvent ) {
			
			event.preventDefault()
			;( event.target! as Element ).releasePointerCapture(event.pointerId)
			
			if( this.active_cell() ) this.ball_drop( this.active_cell() as any, event )
			
			const state = this.State()
			if( this.autobot() && state.side() ) return
			
			const ways = state.movements()
			const coord =  $giper_balls_coord( ... id )
			if( !ways.some( step => $giper_balls_step_from( step ) === coord ) ) return
			
			if( $giper_balls_chess_cell_side( state[ coord ] ) !== state.side() ) return
			
			this.cell_active( id, ! this.cell_active( id ) )
		}
		
		@ $mol_action
		ball_drop( id: [ number, number ], event: PointerEvent ) {
			
			const active = this.active_cell() as [ number, number ]
			if( !active.length ) return
			this.active_cell([])
			
			const coord =  $giper_balls_coord( ... id )
			const active_coord = $giper_balls_coord( active[0], active[1] )
			const step = $giper_balls_step( active_coord, coord )
			
			const ways = this.State().movements()
			if( !ways.includes( step ) ) return
			
			this.State( this.State().move( step ) )
			this.last_coord( $giper_balls_step_to( step ) )
			
		}
		
		@ $mol_action
		restart() {
			this.State( new $giper_balls_chess_state( super.State() ) )
			this.last_coord( Number.NaN )
		}
		
		@ $mol_mem
		thinking() {
			if( !this.autobot() ) return
			this.$.$mol_state_time.now(1)
			const state = this.State()
			for( const way of state.movements() ) {
				state.move( way ).think()
			}
		}
		
		autobot( next?: boolean ) {
			return this.$.$mol_state_arg.value( 'autobot', next?.toString() ) !== 'false'
		}
		
		@ $mol_mem
		autoboting() {
			
			if( !this.autobot() ) return
			
			const state = this.State()
			if( !state.side() ) return
			
			this.$.$mol_wait_timeout( 1000 )
			
			const best = state.best()
			if( !best.length ) return
			
			const step = $mol_array_lottery( best )
			this.State( state.move( step ) )
			this.last_coord( $giper_balls_step_to( step ) )
			
		}
		
		ball_focus( id: [ number, number ] ) {
			return this.last_coord() === $giper_balls_coord( ... id )
		}
		
	}
}
