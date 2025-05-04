namespace $ {

	export class $hyoo_intern_person extends $hyoo_crowd_struct {

		id() {
			return this.land.id()
		}

		@ $mol_mem
		role_raw( next?: string ) {
			return this.$.$mol_state_local.value( 'role' , next ) || 'norole'
		}

		@ $mol_mem
		role_raw_confirmed(): boolean {
			//return this.role_raw() === this.role()
			return true //todo
		}

		@ $mol_mem
		data() {
			return this.sub( '$hyoo_intern', $hyoo_crowd_struct )
		}

		@ $mol_mem
		avatar_node() {
			return this.yoke( 'avatar', $hyoo_crowd_blob )!
		}

		@ $mol_mem
		avatar() {
			if (this.avatar_node().list().length > 0) return this.avatar_node().uri()
			return `https://robohash.org/${this.id()}.png`
		}

		@ $mol_mem
		name( next?: string ) {
			return this.data().sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		name_family( next?: string ) {
			return this.data().sub( 'name_family', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		email( next?: string ) {
			return this.data().sub( 'email', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		phone( next?: string ) {
			return this.data().sub( 'phone', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		signed(next?: boolean) {
			return this.data().sub( 'signed', $hyoo_crowd_reg ).bool( next ) ?? false
		}

		@ $mol_mem
		campaigns() {
			const node = this.data().sub('campaigns', $hyoo_intern_entity_links<typeof $hyoo_intern_campaign>)
			node.Item = $hyoo_intern_campaign
			return node
		}

		@ $mol_mem
		campaign_current(next?: $hyoo_intern_campaign) {
			const str = this.data().sub('campaign_current', $hyoo_crowd_reg).str( next && next.id() )
			const id = $mol_int62_string_ensure(str)

			if (id) return this.world()?.Fund($hyoo_intern_campaign).Item(id)

			return this.campaigns().items()[0] ?? null
		}

	}

}
