namespace $.$$ {
	export class $hyoo_meta_safe extends $.$hyoo_meta_safe {
		
		@ $mol_mem
		password_bid() {
			const pass = this.password()
			if( pass.length <= 7 ) return this.bid_pass_long()
			return ''
		}
		
		@ $mol_mem
		content() {
			return [
				this.key_import()
					? this.Import_block()
					: this.Export_block()
			]
		}
		
		@ $mol_mem
		recall( next?: string ) {
			
			const serial = this.key_import()
			if( !serial ) return next ?? ''
			
			const pack = $mol_base64_decode( serial )
			return $mol_charset_decode( pack.slice( this.key_size() ) )
			
		}
		
		recall_enabled() {
			return ! this.key_import()
		}
		
		@ $mol_mem
		peer_current() {
			return this.yard().peer().id
		}
		
		@ $mol_mem
		peer_new() {
			return $mol_int62_hash_string( this.$.$mol_crypto_auditor_private_to_public( this.key_new()! ) )
		}
		
		key_import( next?: string | null ) {
			return this.$.$mol_state_arg.value( 'hyoo_meta_key', next ) ?? null
		}
		
		@ $mol_mem
		key_new() {
			
			const serial = this.key_import()
			if( !serial ) return null
			
			try {
			
				const pack = $mol_base64_decode( serial )
				const closed = pack.slice( 0, this.key_size() )
				const salt = $mol_crypto_hash( pack.slice( this.key_size() ) ).slice( 0, 16 )
				
				const pass = this.password()
				const secret = $mol_wire_sync( this.$.$mol_crypto_secret ).pass( pass, salt )
				const opened = $mol_wire_sync( secret ).decrypt( closed, salt )
				
				return $mol_charset_decode( opened )
				
				
			} catch( error ) {
				
				$mol_fail_log( error )
				return null
				
			}
			
		}
		
		@ $mol_action
		import_switch() {
			this.yard().peer( this.key_new()! )
			this.password( '' )
			this.key_import( null ) // 
			this.$.$mol_wait_rest() // wait for url sync
			this.$.$mol_dom_context.location.reload() // peer isn't reactive yet
		}
		
		@ $mol_mem
		key_export() {
			
			const pass = this.password()
			const recall = $mol_charset_encode( this.recall() )
			
			const salt = $mol_crypto_hash( recall ).slice( 0, 16 )
			const secret = $mol_wire_sync( this.$.$mol_crypto_secret ).pass( pass, salt )
			
			const open = this.$.$mol_charset_encode( this.yard().peer().key_private_serial )
			const closed = new Uint8Array( $mol_wire_sync( secret ).encrypt( open, salt ) )
			
			const pack = new Uint8Array( this.key_size() + recall.byteLength )
			pack.set( closed, 0 )
			pack.set( recall, this.key_size() )
			
			return this.$.$mol_base64_encode( pack )
			
		}
		
		export_rows() {
			return [
				this.Expot_bid(),
				this.Export_pass(),
				... this.password_bid() ? [] : [ this.Export_link() ],
			]
		}
		
		import_rows() {
			return [
				this.Iport_descr(),
				this.Import_pass(),
				... this.key_new() ? [ this.Import_switch() ] : [],
			]
		}
		
		@ $mol_mem
		export_link() {
			return this.$.$mol_state_arg.link({
				hyoo_meta_key: this.key_export(),
			})
		}
		
	}
}
