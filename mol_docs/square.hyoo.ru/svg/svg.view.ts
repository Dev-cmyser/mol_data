namespace $.$$ {

	export class $hyoo_square_svg extends $.$hyoo_square_svg {
		
		@ $mol_mem
		bin() {
			return $mol_charset_encode( this.str() )
		}
		
		@ $mol_mem
		sizes() {
			
			const bin = this.bin()
			const len = bin.byteLength
			
			const size = Math.ceil( len ** .5 ) * 3 || 3
			return [ size, size ]
			
		}
		
		width() {
			return ( this.sizes()[0] * 2 + 4 ) * 8
		}
		
		height() {
			return ( this.sizes()[1] * 2 + 4 ) * 8
		}
		
		@ $mol_mem
		view_box() {
			const [ width, height ] = this.sizes().map( v => v * 2 + 4 )
			return `-2.5 -2.5 ${width} ${height}`
		}
		
		@ $mol_mem
		bits_data() {
			
			const bin = this.bin()
			const sizes = this.sizes()
			
			const bits = new Uint8Array( sizes[0] * sizes[1] )
			bits.set( bin )
			
			let next = 2352464411
			const shuffle = ( seed: number )=> ( ( ( next = ( next * 1103515245 + 12345 )|0 ) >> 14 ) & 0xFF ) ^ seed
			
			for( let i = 0; i < bits.length; ++i ) bits[i] = shuffle( bits[i] )
			
			return bits
		}
		
		@ $mol_mem_key
		path( face: `${ 'hi' | 'lo' }_${ 'data' | 'text' }` ) {
			
			const [ w, h ] = this.sizes()
			const bits = this.bits_data()
			const bin = this.bin()
			const font = $hyoo_square_svg.font().bitmap
			
			let path = `M-2,-2L-2,${ h*2 + 1 }L${ w*2 + 1 },${ h*2 + 1 }L${ w*2 + 1 },-2L-2,-2`
			
			for( let x = 0; x < w; ++x ) {
				for( let y = 0; y < h; ++y ) {
					
					const pos = y * w + x
					const byte = bits[ Math.floor( pos / 8 ) ]
					
					const bit = ( byte >> pos % 8 ) & 1
					let kind = bit ? 'hi' : 'lo'
					
					const poses = [
						[ x, y ],
						[ w*2 - x - 1, h - y - 1 ],
						[ w - y - 1, h*2 - x - 1 ],
						[ w + y, h + x ],
					]
					
					for( const [ px, py ] of poses ) {
						
						const offset = Math.floor( py / 6 ) * w/3 + Math.floor( px / 6 )
						const byte = bin[ offset ] ?? 0x20
						
						const row = ( byte >> 4 ) * 6 + ( py % 6 )
						const col = ( byte & 0b1111 ) * 6 + ( px % 6 )
						
						const type = font.data[ ( row * font.width + col ) * 4 ] === 0xFF ? 'text' : 'data'
						if( face !== `${kind}_${type}` ) continue
						
						path += `M${px},${py}l0,0`
					}
					
				}
			}
			
			return path
		}
		
		@ $mol_mem
		static font() {
			return $mol_picture.fit( require( '/hyoo/square/svg/svg.font.png' ) )
		}
		
	}
}
