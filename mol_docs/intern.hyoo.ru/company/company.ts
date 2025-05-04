namespace $ {

	export class $hyoo_intern_company extends $hyoo_crowd_struct {
		
		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}
		@ $mol_mem
		adress( next?: string ) {
			return this.sub( 'adress', $hyoo_crowd_reg ).str( next ) ?? ''
		}
		@ $mol_mem
		scope( next?: string ) {
			return this.sub( 'scope', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		campaign( next?: $hyoo_intern_campaign ) {
			const str = this.sub( 'campaign' , $hyoo_crowd_reg ).str( next && next.head )
			const id = $mol_int62_string_ensure( str )
			return id ? this.world()?.Fund( $hyoo_intern_campaign ).Item( id ) : null
		}
		
		@ $mol_mem
		managers_node() {
			return this.sub( 'managers', $hyoo_crowd_list ) 
		}

		@ $mol_mem
		managers_ids() {
			const ids = this.managers_node().list() as string[]
			return ids
		}

		@ $mol_mem
		managers() {
			const ids = this.managers_ids()
			return ids.map( id => this.manager(id) )
		}

		@ $mol_mem_key
		manager(id: string){
			const manager = this.world()?.Fund( $hyoo_intern_manager ).Item( $mol_int62_string_ensure( id )! )
			return manager
		}

		@ $mol_action
		manager_add() {
			const manager = this.world()?.Fund( $hyoo_intern_manager ).make()
			this.managers_node().insert([ manager?.id() ])
			return manager
		}
		
		@ $mol_action
		manager_drop( obj: $hyoo_intern_manager ) {
			const index = this.managers().indexOf( obj )
			this.managers_node().cut( index )
		}

	}
	
}
