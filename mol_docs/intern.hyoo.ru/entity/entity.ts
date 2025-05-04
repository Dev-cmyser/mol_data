namespace $ {

	export class $hyoo_intern_entity_links<Item extends typeof $hyoo_crowd_node> extends $hyoo_crowd_list {

		Item = null as unknown as Item

		@ $mol_mem
		fund() {
			return this.world()!.Fund( this.Item )
		}

		@ $mol_mem
		ids() {
			const ids = this.list()
			return ids
				.map( id => $mol_int62_string_ensure( id ) )
				.filter( $mol_guard_defined )
		}

		length() {
			return this.ids().length
		}

		@ $mol_mem_key
		item( id: $mol_int62_string ) {
			return this.fund().Item( id! )
		}

		@ $mol_mem
		items() {
			return this.ids().map( id => this.item( id! ) )
		}

		@ $mol_action
		item_make() {
			const obj = this.fund().make()
			this.add( obj.land.id() )
			return obj
		}
		
		@ $mol_action
		item_push(obj: InstanceType<Item>) {
			this.add( obj.land.id() )
			return obj
		}

		@ $mol_action
		item_drop( obj: InstanceType<Item>) {
			this.drop( obj.land.id() )
		}

		@ $mol_mem_key
		item_has( obj: InstanceType<Item> ) {
			return this.has(obj.id())
		}

	}

}
