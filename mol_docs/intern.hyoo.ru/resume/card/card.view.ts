namespace $.$$ {

	type Job = ReturnType<$hyoo_intern_person['jobs']>[number]
	type Job_keys = keyof Job

	type Institution = ReturnType<$hyoo_intern_person['institutions']>[number]
	type Institution_keys = keyof Institution

	export class $hyoo_intern_resume_card extends $.$hyoo_intern_resume_card {

		enabled() {
			return !this.disabled()
		}

		@ $mol_mem
		job_status( next?: string ) {
			return this.person().job_status( next as any )
		}

		@ $mol_mem
		skills( next?: string[] ) {
			return this.person().skills( next )
		}

		@ $mol_mem
		avatar_file( next?: File[] ) {
			
			if( !next ) return []
			
			const file = next[0]
			const pict = $mol_picture.fit( file, 96 )

			const blob = pict.format( 'image/webp' )
			if( !blob ) return []
			
			this.person().avatar_node().blob( blob )
			
			return []
		}

		avatar_drop() {
			this.person().avatar_node().list([])
		}

		@ $mol_mem
		job_rows() {
			return this.person().jobs().map( (_,id) => this.Job_form(id) ).reverse()
		}

		job_add() {
			this.person().jobs_node().add({} as any)
		}

		job_drop(id: number) {
			this.person().jobs_node().cut( id )
		}

		@ $mol_mem_key
		job({ id, key } : { id: number, key: Job_keys }, next?: string) {
			
			const jobs = this.person().jobs()
			const job = jobs[id] ?? {}

			if (next === undefined) {
				return job[ key ] ?? (key === 'present' ? false : '') as any
			}

			this.person().jobs([
				... jobs.slice( 0, id ),
				{ ... job, [ key ]: next },
				... jobs.slice( id + 1 ),
			])

			return next as any
		}

		position( id: number, next?: string ) {
			return this.job({ id, key: 'position' }, next)
		}

		date_start( id: number, next?: $mol_time_moment ) {
			const str = this.job({ id, key: 'date_start' }, next && next.toString())
			return str ? new $mol_time_moment(str) : null
		}

		date_end( id: number, next?: $mol_time_moment) {
			const str = this.job({ id, key: 'date_end' }, next && next.toString())
			return str ? new $mol_time_moment(str) : null
		}

		@ $mol_mem
		institution_rows() {
			return this.person().institutions().map( (_,id) => this.Institution_form(id) ).reverse()
		}

		institution_add() {
			this.person().institutions_node().add({} as any)
		}

		institution_drop(id: number) {
			this.person().institutions_node().cut( id )
		}

		@ $mol_mem_key
		institution_change({ id, key } : { id: number, key: Institution_keys }, next?: string) {
			
			const jobs = this.person().institutions()
			const job = jobs[id] ?? {}

			if (next === undefined) {
				return job[ key ] ?? ''
			}

			this.person().institutions([
				... jobs.slice( 0, id ),
				{ ... job, [ key ]: next },
				... jobs.slice( id + 1 ),
			])

			return next
		}

		date_finish( id: number, next?: string ) {
			const str = this.institution_change({ id, key: 'date_finish' }, next && next.toString())
			return str ? new $mol_time_moment(str) : null
		}
	}

}
