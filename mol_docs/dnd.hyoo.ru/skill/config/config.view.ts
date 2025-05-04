namespace $.$$ {
	export class $hyoo_dnd_skill_config extends $.$hyoo_dnd_skill_config {
		
		@ $mol_mem
		override skill_list() {
			return Object.keys( this.$.$hyoo_dnd_skill_all ).map( ability => this.Skill_row( ability ) )
		}
		
		override skill_title( id: $hyoo_dnd_skill_id ) {
			return this.$.$hyoo_dnd_skill_all[ id ].title
		}
		
		@ $mol_mem_key
		override skill_value( id: $hyoo_dnd_skill_id ) {
			const ability = this.$.$hyoo_dnd_skill_all[ id ].ability
			const icon = this.$.$hyoo_dnd_ability_all[ ability ].title.slice( 0, 2 )
			const skill = new $hyoo_dnd_modifier( this.skill( id ) )
			return `${skill} ${icon}`
		}
		
	}
}
