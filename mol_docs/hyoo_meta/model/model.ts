namespace $ {
	export class $hyoo_meta_model extends $hyoo_crowd_struct {
		
		@ $mol_mem
		editable() {
			return this.land.allowed_mod()
		}
		@ $mol_mem
		editors() {
			return this.land.peers()
		}
		
		@ $mol_mem
		title_node() {
			return this.sub( 'title', $hyoo_crowd_text )
		}
		@ $mol_mem
		title( next?: string ) {
			return this.title_node().str( next )
		}
		@ $mol_mem
		title_selection( next?: number[] ) {
			return this.title_node().selection( this.land.peer().id, next )
		}

		@ $mol_action
		steal_rights( node: $hyoo_crowd_node ) {
			this.land.steal_rights( node.land )
		}
		
		@ $mol_mem
		whole( next?: $hyoo_meta_model | null ) {
			const reg = this.sub( '$hyoo_meta_whole', $hyoo_crowd_reg )
			const id = $mol_int62_string_ensure( reg.str( next?.id() ) )
			return id ? this.world()!.Fund( $hyoo_meta_model ).Item( id ) : this
		}
		
	}
}
