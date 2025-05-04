namespace $ {

	export interface $hyoo_intern_campaign_staff {
		person: $hyoo_intern_person
		role: 'curator' | 'manager' | 'mentor'
	}

	export class $hyoo_intern_campaign extends $hyoo_crowd_struct {

		id() {
			return this.land.id()
		}
		
		@ $mol_mem
		name( next?: string ) {
			return this.sub( 'name', $hyoo_crowd_reg ).str( next ) ?? ''
		}

		@ $mol_mem
		image_node() {
			return this.yoke( 'image', $hyoo_crowd_blob )!
		}

		@ $mol_mem
		info( next?: string ) {
			return this.sub( 'info', $hyoo_crowd_text ).text( next ) || '# Заголовок\nОписание стажировки для кандидатов'
		}

		@ $mol_mem
		owner( next?: $hyoo_intern_person ) {
			const str = this.sub('owner', $hyoo_crowd_reg).str( next && next.id() )
			const id = $mol_int62_string_ensure(str)
			return id ? this.world()?.Fund($hyoo_intern_person).Item(id) : null
		}

		@ $mol_mem
		curators() {
			const node = this.sub('curators', $hyoo_intern_entity_links<typeof $hyoo_intern_person>)
			node.Item = $hyoo_intern_person
			return node
		}

		@ $mol_mem
		managers() {
			const node = this.sub('managers', $hyoo_intern_entity_links<typeof $hyoo_intern_person>)
			node.Item = $hyoo_intern_person
			return node
		}

		@ $mol_mem
		mentors() {
			const node = this.sub('mentors', $hyoo_intern_entity_links<typeof $hyoo_intern_person>)
			node.Item = $hyoo_intern_person
			return node
		}

		person_is_staff_member(person: $hyoo_intern_person) {
			return this.curators().item_has(person) || this.managers().item_has(person) || this.mentors().item_has(person) || person.id() === this.owner()?.id()
		}

		person_wants_to_staff(person: $hyoo_intern_person) {
			return person.campaigns().item_has( this ) && !this.person_is_staff_member(person)
		}

		@ $mol_mem
		candidates_on_review(){
			const node = this.sub('candidates_on_review', $hyoo_intern_entity_links<typeof $hyoo_intern_person>)
			node.Item = $hyoo_intern_person
			return node
		}
		
		@ $mol_mem
		companies() {
			const node = this.sub('companies', $hyoo_intern_entity_links<typeof $hyoo_intern_company>)
			node.Item = $hyoo_intern_company
			return node
		}
			
		@ $mol_action
		curator_add( person_id: $mol_int62_string ){
			// const person = this.world()!.Fund( $hyoo_intern_person ).Item( person_id )
			// const curator = this.curators().item_push( person )
			// const peer_id = $mol_int62_string_ensure( curator.peer_id() )!
			// this.land.level( curator.id(), $hyoo_crowd_peer_level.law )
			// this.curators().land.level( curator.id(), $hyoo_crowd_peer_level.law )
			// this.companies().land.level( curator.id(), $hyoo_crowd_peer_level.law )
			// return curator
		}
		
	}
	
}
