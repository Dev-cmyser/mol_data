namespace $ {
	
	export type $hyoo_dnd_class = {
		title: string
		link: string
		description: string
		image: string
		dice: 6 | 8
		ability_main: $hyoo_dnd_ability_id
		ability_safe: $hyoo_dnd_ability_id[]
		skills: $hyoo_dnd_skill_id[]
		perks: string[][]
		inventory: $hyoo_dnd_item_data[]
	}
	
	export const $hyoo_dnd_class_all = {
			
		bard: {
			title: '🎻 Бард',
			link: 'https://dnd.su/class/88-bard/',
			description: 'Вдохновляющий заклинатель, черпающий мощь в музыке созидания',
			image: 'https://i.imgur.com/3dO7ESp.jpeg',
			dice: 8,
			ability_main: 'charisma',
			ability_safe: [ 'dexterity', 'charisma' ],
			skills: [
			],
			perks: [
				[ '🦺 Лёгкие доспехи', '🏏 Простое оружие', '🔪 Длинные мечи', '🔪 Короткие мечи', '🔪 Рапиры', '🏹 Ручные арбалеты' ],
				[ '✨ Использование заклинаний', '🎑 Вдохновение барда d6' ],
				[ '🔧 Мастер на все руки', '🎙️ Песнь отдыха d6' ],
				[ '🏫 Коллегия бардов', '🎓 Компетентность' ],
				[ '📈 Увеличение характеристик 1' ],
				[ '🎑 Вдохновение барда d8', '🌱 Источник вдохновения' ],
				[ 'Контрочарование', '🏫 Умение коллегии бардов' ],
				[],
				[ '📈 Увеличение характеристик 2' ],
				[ '🎙️ Песнь отдыха d8' ],
				[ '🎑 Вдохновение барда d10', 'Компетентность', 'Тайны магии' ],
				[],
				[ '📈 Увеличение характеристик 3' ],
				[ '🎙️ Песнь отдыха d10' ],
				// @todo 5+
			],
			inventory: [
				{
					title: '🦺 Кожанка',
					price: 1000,
					weight: 10,
					defence: 11,
					weapon_size: '',
					ability: 'dexterity',
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
					title: '🔪 Кинжал',
					price: 200,
					weight: 1,
					defence: 0,
					weapon_size: 'small',
					ability: 'dexterity',
					attack_cooldown: false,
					attack_ammo: false,
					damage_max: {
						hand1: 4,
						hand2: 0,
						near: 0,
						distant: 4,
					},
					damage_type: 'stab',
					attack_distance_norm: 20,
					attack_distance_max: 60,
				},
			],
		} as $hyoo_dnd_class,
		
	}

	export type $hyoo_dnd_class_id = keyof typeof $hyoo_dnd_class_all
	
}
