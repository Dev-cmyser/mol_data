namespace $ {
	
	export const $giper_balls_step = ( from: number, to: number )=> ( to << 8 ) | from
	export const $giper_balls_step_from = ( pos: number )=> pos & 0b1111_1111
	export const $giper_balls_step_to = ( pos: number )=> pos >> 8
	export const $giper_balls_step_str = ( step: number )=> $giper_balls_coord_str( $giper_balls_step_from( step ) ) + '' + $giper_balls_coord_str( $giper_balls_step_to( step ) )
	export const $giper_balls_step_parse = ( str: string )=> $giper_balls_step( $giper_balls_coord_parse( str.slice( 0, 2 ) ), $giper_balls_coord_parse( str.slice( 2, 4 ) ) )
	
}
