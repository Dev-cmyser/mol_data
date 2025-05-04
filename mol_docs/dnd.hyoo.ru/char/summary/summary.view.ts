namespace $.$$ {
	export class $hyoo_dnd_char_summary extends $.$hyoo_dnd_char_summary {
		
		override race_title() {
			return this.char().race().title
		}
		
		override race_link() {
			return this.char().race().link
		}
		
		override story_title() {
			return this.char().story().title
		}
		
		override story_link() {
			return this.char().story().link
		}
		
		override class_title() {
			return this.char().class().title
		}
		
		override class_link() {
			return this.char().class().link
		}
		
		override moral_title() {
			return this.$.$hyoo_dnd_moral_all[ this.moral() ].title
		}
		
		override ethics_title() {
			return this.$.$hyoo_dnd_ethics_all[ this.ethics() ].title
		}
		
		override speed() {
			return this.char().race().speed
		}
		
		override perks() {
			return this.char().perks().join( '\n' )
		}
		
	}
}
