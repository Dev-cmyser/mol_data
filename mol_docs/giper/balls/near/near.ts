namespace $ {
	
	export function $giper_balls_near( left: [ number, number ], right: [ number, number ] ) {
		if( Math.abs( right[0] - left[0] ) > 1 ) return false
		if( Math.abs( right[1] - left[1] ) > 1 ) return false
		return true
	}

}
