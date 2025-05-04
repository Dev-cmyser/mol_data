namespace $ {
	
	export type $hyoo_dnd_moral = {
		title: string
	}
	
	export const $hyoo_dnd_moral_all = {
			
		good: {
			title: '👼 Добрый',
		} as $hyoo_dnd_moral,
		
		neutral: {
			title: '🤔 Нейтральный',
		} as $hyoo_dnd_moral,
		
		evil: {
			title: '👿 Злой',
		} as $hyoo_dnd_moral,
		
	}

	export type $hyoo_dnd_moral_id = keyof typeof $hyoo_dnd_moral_all
	
}
