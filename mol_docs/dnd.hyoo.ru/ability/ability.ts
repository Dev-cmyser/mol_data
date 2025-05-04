namespace $ {
	
	export type $hyoo_dnd_ability = {
		title: string
		description: string
	}
	
	export const $hyoo_dnd_ability_all = {
		strength: {
			title: '💪 Мощность',
			description: 'Сила, физическая мощь',
		} as $hyoo_dnd_ability,
		dexterity: {
			title: '🥏 Ловкость',
			description: 'Гибкость, проворство',
		} as $hyoo_dnd_ability,
		constitution: {
			title: '🐘 Стойкость',
			description: 'Телосложение, выносливость',
		} as $hyoo_dnd_ability,
		intelligence: {
			title: '🧠 Интеллект',
			description: 'Рассудительность, память',
		} as $hyoo_dnd_ability,
		wisdom: {
			title: '🦉 Мудрость',
			description: 'Внимательность, проницательность',
		} as $hyoo_dnd_ability,
		charisma: {
			title: '🌟 Харизма',
			description: 'Внушение, сила характера',
		} as $hyoo_dnd_ability,
	}
	
	export type $hyoo_dnd_ability_id = keyof typeof $hyoo_dnd_ability_all
}
