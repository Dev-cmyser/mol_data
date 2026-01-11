namespace $ {
	
	export const $giper_balls_vector = ( hor: number, ver: number )=> ( ( ver & 0b1111 ) << 4 ) | ( hor & 0b1111 )
	export const $giper_balls_vector_hor = ( vec: number )=> ( vec << 28 ) >> 28
	export const $giper_balls_vector_vert = ( vec: number )=> ( vec << 24 ) >> 28

}
