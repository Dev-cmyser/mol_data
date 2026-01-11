namespace $ {
	
	const [ Free, Pawn, Rook, Knight, Bishop, Queen, King ] = [ 0, 1, 2, 3, 4, 5, 6 ]
	const Costs = [ 0, 1, 5, 3, 3, 9, 39 ]
	const Figures = '⋅♙♖♘♗♕♔　　♟♜♞♝♛♚'

	const [ White, Black ] = [ 0b0000, 0b1000 ]
	export const $giper_balls_chess_cell_side = ( cell: number )=> cell & Black
	export const $giper_balls_chess_cell_invert = ( cell: number )=> ( cell ^ Black )
	export const $giper_balls_chess_cell_kind = ( cell: number )=> cell & 0b111

	const Size = 8
	const Court = [ Rook, Knight, Bishop, Queen, King, Bishop, Knight, Rook ]
	const Pawns = Array.from( Court, _=> Pawn )
	const Empty = Array.from( Court, _=> Free )
	
	export class $giper_balls_chess_state extends Uint8Array {
		
		constructor( array: ArrayLike<number> | ArrayBuffer = [
			... Court,
			... Pawns,
			... Empty,
			... Empty,
			... Empty,
			... Empty,
			... Pawns.map( $giper_balls_chess_cell_invert ),
			... Court.map( $giper_balls_chess_cell_invert ),
			White,
		] ) {
			super( array )
		}
		
		ways = new Map< number, $giper_balls_chess_state >()
		
		@ $mol_memo.method
		ballance() {
			return this.reduce( ( sum, cell )=>
				sum + Costs[ $giper_balls_chess_cell_kind(cell) ] * ( $giper_balls_chess_cell_side(cell) ? -1 : +1 )
			, 0 )
		}
		
		@ $mol_memo.method
		score() {
			return this.ballance() * 100 + ( this.movements().length - this.flip().movements().length ) * ( this.side() ? -1 : +1 )
		}
		
		@ $mol_memo.method
		movements() {
			
			const mirror = this.side() ? -1 : +1
			const res = []
			let king_alive = false
			
			for( let from = 0; from < this.length; ++ from ) {
				
				const cell = this[ from ]
				if( $giper_balls_chess_cell_side( cell ) !== this.side() ) continue
				
				const kind = $giper_balls_chess_cell_kind( cell )
				if( kind === King ) king_alive = true
				
				const ways = $giper_balls_chess_rules[ kind ]
				for( const way of ways ) {
					
					let row_from = $giper_balls_coord_row( from )
					let col_from = $giper_balls_coord_col( from )
					
					for( const vec of way ) {
						
						let row = row_from + $giper_balls_vector_vert( vec ) * mirror
						if( row < 0 || row >= Size ) break
						
						let col = col_from + $giper_balls_vector_hor( vec )
						if( col < 0 || col >= Size ) break
						
						const to = $giper_balls_coord( row, col )
						const c = this[ to ]
						if( c ) {
							
							if( $giper_balls_chess_cell_side(c) !== this.side() ) {
								if( kind === Pawn && col === col_from ) continue
								res.push( $giper_balls_step( from, to ) )
							}
							break
							
						} else {
							
							if( kind === Pawn && col !== col_from ) continue
							res.push( $giper_balls_step( from, to ) )
							
						}
					}
					
				}
				
			}
			return king_alive ? res : []
		}
		
		flip() {
			const state = new $giper_balls_chess_state( this )
			state.side( $giper_balls_chess_cell_invert( this.side() ) )
			return state
		}

		move( step: number ) {
			
			const cached = this.ways.get( step )
			if( cached ) return cached
			
			const next = this.flip()
			
			const from = $giper_balls_step_from( step )
			const to = $giper_balls_step_to( step )
			const to_row = $giper_balls_coord_row( to )
			
			let figure = next[ from ]
			if( figure === Pawn && to_row === Size - 1 ) figure = Queen
			if( figure === $giper_balls_chess_cell_invert( Pawn ) && to_row === 0 ) figure = $giper_balls_chess_cell_invert( Queen )
			
			next[ to ] = figure
			next[ from ] = Free
			
			this.ways.set( step, next )
			
			return next
		}
		
		_estimation?: number
		estimation( next?: number ) {
			return this._estimation = next ?? this._estimation ?? this.score()
		}
		
		side( next = this[ Size ** 2 ] ) {
			return this[ Size ** 2 ] = next
		}

		think(i=0) {
			
			const ways = this.movements()
			if( !ways.length ) return
			
			if( this.ways.size === ways.length ) {
				for( const way of this.best() ) this.move( way ).think(i+1)
			}
			
			let est = Number.NaN
			for( const way of ways ) {
				const state = this.move( way )
				const bal = state.estimation()
				if( this.side() === White ) {
					if( bal <= est ) continue
					est = bal
				} else {
					if( bal >= est ) continue
					est = bal
				}
			}
			this.estimation( est )
			
		}

		best() {
			
			const ways = this.movements()
			let edge = Number.NaN
			const found = [] as number[]
			
			for( const way of ways ) {
				
				const state = this.move( way )
				const est = state.estimation()
				
				if( this.side() === White ? edge > est : edge < est ) {
					state.ways.clear()
					continue
				}
				
				if( edge !== est ) {
					for( const fo of found ) this.move( fo ).ways = new Map
					found.length = 0
					edge = est
				}
				
				found.push( way )
			}
			
			return found
		}
		
		[ $mol_dev_format_head ]() {
			return $mol_dev_format_div( {},
				$mol_dev_format_native( this ),
				$mol_dev_format_native( this.score() ),
				':',
				$mol_dev_format_native( this._estimation ),
				$mol_dev_format_auto(
					Object.fromEntries([
						[ Symbol.toStringTag, 'ways' ],
						... this.movements().map( step => [ $giper_balls_step_str( step ), this.ways.get( step ) ] ),
					])
				),
			)
		}

		[ $mol_dev_format_body ]() {
			return $mol_dev_format_div( {},
				$mol_dev_format_table( { display: 'inline-table', 'text-align' : 'center' },
					... Array.from( { length: Size }, (_, row )=> $mol_dev_format_tr( {},
						$mol_dev_format_td( { color : 'gray' }, Size - row ),
						... Array.from( { length: Size }, (_, col )=> $mol_dev_format_td( {},
							Figures[ this[ $giper_balls_coord( Size - row - 1, col ) ] ]
						) ),
					) ),
					$mol_dev_format_tr( {},
						$mol_dev_format_td( {}, this.side() ? '🔴' : '🟢' ),
						... [ ... 'abcdefgh' ].map( letter => $mol_dev_format_td( { color: 'gray'}, letter ) ),
					),
				),
			)
		}

	}
	
}
