namespace $ {
	
	export type $hyoo_dnd_ethics = {
		title: string
	}
	
	export const $hyoo_dnd_ethics_all = {
			
		lawful: {
			title: '🧐 Стоик',
		} as $hyoo_dnd_ethics,
		
		neutral: {
			title: '🤔 Нейтрал',
		} as $hyoo_dnd_ethics,
		
		chaotic: {
			title: '🥴 Хаотик',
		} as $hyoo_dnd_ethics,
		
	}

	export type $hyoo_dnd_ethics_id = keyof typeof $hyoo_dnd_ethics_all
	
}
