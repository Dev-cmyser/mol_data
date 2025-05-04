namespace $.$$ {

	export class $hyoo_tree extends $.$hyoo_tree {

		@ $mol_mem
		pipeline( next?: string[] ) {
			const str = this.$.$mol_state_arg.value( 'pipeline', next && next.join( '~' ) )
			return str && str.split( '~' ).filter( Boolean ) || super.pipeline()
		}
		
		add( index: number, next?: string ) {
			
			if( next ) {
				this.pipeline([
					... this.pipeline().slice( 0, index + 1 ),
					next,
				])
			}
			
			return ''
		}
		
		@ $mol_mem
		source( next? : string ) {
			return this.$.$mol_state_arg.value( 'source' , next ) ?? super.source()
		}

		@ $mol_mem_key
		transform( index: number, next?: string ) {
			let pipeline = this.pipeline()
			if( next ) pipeline = this.pipeline([
				... pipeline.slice( 0, index ),
				next,
				... pipeline.slice( index + 1 ),
			])
			return pipeline[ index ] ?? null
		}
		
		@ $mol_mem
		transform_options() {
			
			const map = this.transform_map()
			const pipeline = this.pipeline()
			const last = pipeline[ pipeline.length - 1 ]
			
			const type = last ? map[ last as keyof typeof map ].output.split('.').filter( Boolean ).reverse() : [ 'text' ]
			if( !type.length ) return Object.keys( map )
			
			return (Object.keys( map ) as (keyof typeof map)[]).filter( id => {
				
				const diff = $mol_diff_path( type , map[ id ].input.split('.').reverse() )
				if( !diff.prefix.length ) return false
				
				if( diff.suffix.every( s => s.length ) ) return false
				
				return true
			} )
			
		}
		
		@ $mol_mem_key
		result( index: number ): string | $mol_tree2 | Uint8Array | $mol_wasm_module {
			
			const func = this.pipeline()[ index ]
			if( !func ) return ''
			
			const arg = index ? this.result( index - 1 ) : this.source()
			const val = ( this.$ as any )[ func ] as any as Function

			if( $mol_func_is_class( val ) ) {
				return new val( arg )
			} else if( typeof val === 'function' ) {
				return val.call( this.$, arg ) ?? ''
			} else {
				return ''
			}

		}

		@ $mol_mem
		result_text(): string {
			let res = $mol_try( ()=> this.result( this.pipeline().length - 1 ) )
			if( res instanceof Promise ) $mol_fail_hidden( res )
			if( typeof res === 'string' ) return res
			if( Object( res ) !== res ) return String( res )
			if( res instanceof $mol_dom_context.Node ) return $mol_dom_serialize( res )
			if( !Reflect.getPrototypeOf( Reflect.getPrototypeOf( res )! ) ) return JSON.stringify( res, null, '\t' )
			if( Array.isArray( res ) ) return JSON.stringify( res, null, '\t' )
			let mime = 'application/octet-stream'
			if( res instanceof $mol_wasm_module ) {
				res = new Uint8Array( res.buffer )
				mime = 'application/wasm'
			}
			if( res instanceof Uint8Array ) {
				return `data:${ mime };base64,${ $mol_base64_encode( res ) }`
			}
			return String( res )
		}

	}

}
