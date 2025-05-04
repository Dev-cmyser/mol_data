namespace $ {
	
	export type $hyoo_dnd_skill = {
		title: string
		ability: $hyoo_dnd_ability_id
	}
	
	export const $hyoo_dnd_skill_all = {
		
		athletics: {
			title: '🏋️‍♂️ Атлетика',
			ability: 'strength',
		} as $hyoo_dnd_skill,
		
		acrobatics: {
			title: '🤸‍♂️ Акробатика',
			ability: 'dexterity',
		} as $hyoo_dnd_skill,
		sleight: {
			title: '🤏 Моторика',
			ability: 'dexterity',
		} as $hyoo_dnd_skill,
		stealth: {
			title: '🐙 Скрытность',
			ability: 'dexterity',
		} as $hyoo_dnd_skill,
		
		investigation: {
			title: '🧠 Анализ',
			ability: 'intelligence',
		} as $hyoo_dnd_skill,
		history: {
			title: '📚 История',
			ability: 'intelligence',
		} as $hyoo_dnd_skill,
		arcana: {
			title: '✨ Магия',
			ability: 'intelligence',
		} as $hyoo_dnd_skill,
		nature: {
			title: '🌿 Природа',
			ability: 'intelligence',
		} as $hyoo_dnd_skill,
		religion: {
			title: '🛐 Религия',
			ability: 'intelligence',
		} as $hyoo_dnd_skill,
		
		perception: {
			title: '👀 Восприятие',
			ability: 'wisdom',
		} as $hyoo_dnd_skill,
		survival: {
			title: '🍄 Выживание',
			ability: 'wisdom',
		} as $hyoo_dnd_skill,
		medicine: {
			title: '💊 Медицина',
			ability: 'wisdom',
		} as $hyoo_dnd_skill,
		insight: {
			title: '🔮 Интуиция',
			ability: 'wisdom',
		} as $hyoo_dnd_skill,
		animals: {
			title: '🐕 Звероводство',
			ability: 'wisdom',
		} as $hyoo_dnd_skill,
		
		performance: {
			title: '🎪 Выступление',
			ability: 'charisma',
		} as $hyoo_dnd_skill,
		intimidation: {
			title: '🎃 Запугивание',
			ability: 'charisma',
		} as $hyoo_dnd_skill,
		deception: {
			title: '🎎 Обман',
			ability: 'charisma',
		} as $hyoo_dnd_skill,
		persuasion: {
			title: '💬 Убеждение',
			ability: 'charisma',
		} as $hyoo_dnd_skill,
		
	}

	export type $hyoo_dnd_skill_id = keyof typeof $hyoo_dnd_skill_all
}
