namespace $ {
	
	export type $hyoo_dnd_story = {
		title: string
		link: string
		description: string
		skills: $hyoo_dnd_skill_id[]
		perks: string[]
		mastery: string[]
		inventory: $hyoo_dnd_item_data[]
	}
	
	export const $hyoo_dnd_story_all = {
			
		pirate: {
			title: '🏴‍☠️ Пират',
			link: 'https://dnd.su/backgrounds/770-pirate/',
			description: 'Провел молодость среди жутких пиратов, безжалостных головорезов, научивших выживать среди акул и дикарей. Занимались грабежом в морях, и не одну душу отправил в солёную пучину. Хорошо знаком со страхом и кровью, и заслужил сомнительную репутацию во многих портовых городах.',
			skills: [ 'athletics', 'perception' ],
			perks: [
				'😨 Дурная репутация',
				'🧭 Инструменты навигатора',
				'⛵ Водный транспорт',
			],
			mastery: [
			],
			inventory: [
				{
					title: '🏏 Дубинка',
					price: 10,
					weight: 2,
					defence: 0,
					weapon_size: 'small',
					ability: 'strength',
					attack_cooldown: false,
					attack_ammo: false,
					damage_max: {
						hand1: 4,
						hand2: 0,
						near: 0,
						distant: 4,
					},
					damage_type: 'crush',
					attack_distance_norm: 20,
					attack_distance_max: 60,
				},
				{
					title: '🧵 50ф верёвки',
					price: 100,
					weight: 10,
					defence: 0,
					weapon_size: 'medium',
					ability: 'dexterity',
					attack_cooldown: false,
					attack_ammo: false,
					damage_max: {
						hand1: 0,
						hand2: 4,
						near: 0,
						distant: 4,
					},
					damage_type: 'crush',
					attack_distance_norm: 10,
					attack_distance_max: 20,
				},
				{
					title: '🧸 Талисман',
					price: 10,
					weight: 1,
					defence: 0,
					weapon_size: '',
					attack_cooldown: false,
					attack_ammo: false,
					damage_max: {
						hand1: 0,
						hand2: 0,
						near: 0,
						distant: 0,
					},
					damage_type: '',
					attack_distance_norm: 0,
					attack_distance_max: 0,
				},
				{
					title: '👘 Обычная одежда',
					price: 10,
					weight: 1,
					defence: 0,
					weapon_size: '',
					attack_cooldown: false,
					attack_ammo: false,
					damage_max: {
						hand1: 0,
						hand2: 0,
						near: 0,
						distant: 0,
					},
					damage_type: '',
					attack_distance_norm: 0,
					attack_distance_max: 0,
				},
				{
					title: '💰 Поясной кошель',
					price: 1000,
					weight: 1,
					defence: 0,
					weapon_size: 'small',
					ability: 'strength',
					attack_cooldown: false,
					attack_ammo: false,
					damage_max: {
						hand1: 4,
						hand2: 0,
						near: 0,
						distant: 4,
					},
					damage_type: 'crush',
					attack_distance_norm: 20,
					attack_distance_max: 60,
				},
			],
		} as $hyoo_dnd_story,
		
	}

	export type $hyoo_dnd_story_id = keyof typeof $hyoo_dnd_story_all

}
