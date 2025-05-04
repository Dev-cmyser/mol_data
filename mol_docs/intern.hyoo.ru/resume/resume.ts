namespace $.$$ {

	export class $hyoo_intern_resume extends $hyoo_crowd_struct {

		

		@ $mol_mem
		mentor_vacancy( ) {
			return this.sub( 'vacancy', $hyoo_intern_vacancy ) ?? null
		}

		@ $mol_mem
		about( next?: string ) {
			return this.sub( 'about', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		status( next?: string ) {
			return this.sub( 'status', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		country( next?: string ) {
			return this.sub( 'country', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		city( next?: string ) {
			return this.sub( 'city', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		job_status( next?: 'working_for_hire' | 'self-employed' | 'unemployed' ) {
			return this.sub( 'job_status', $hyoo_crowd_reg ).str( next )
		}

		@ $mol_mem
		skills( next?: string[] ) {
			return this.sub( 'skills', $hyoo_crowd_list ).list( next ).map(String)
		}

		@ $mol_mem
		jobs_node() {
			return this.sub( 'jobs', $hyoo_crowd_list )
		}

		@ $mol_mem
		jobs(
			next?: Array<{
				position: string,
				functions: string,
				company: string,
				industry: string,
				date_start: string,
				date_end: string,
				present: boolean,
			}>
		) {
			return this.jobs_node().list( next ) as Exclude<typeof next, undefined>
		}

		@ $mol_mem
		institutions_node() {
			return this.sub( 'institutions', $hyoo_crowd_list )
		}

		@ $mol_mem
		institutions(
			next?: Array<{
				degree: string,
				institution: string,
				department: string,
				specialty: string,
				date_finish: string,
			}>
		) {
			return this.institutions_node().list( next ) as Exclude<typeof next, undefined> 
		}

	}

}
