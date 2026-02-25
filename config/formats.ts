// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts
/*
If you want to add custom formats, create a file in this folder named: "custom-formats.ts"

Paste the following code into the file and add your desired formats and their sections between the brackets:
--------------------------------------------------------------------------------
// Note: This is the list of formats
// The rules that formats use are stored in data/rulesets.ts

export const Formats: FormatList = [
];
--------------------------------------------------------------------------------

If you specify a section that already exists, your format will be added to the bottom of that section.
New sections will be added to the bottom of the specified column.
The column value will be ignored for repeat sections.
*/

export const Formats: import('../sim/dex-formats').FormatList = [
	// OU
	{
		name: "[Gen 1] OU",
		mod: 'gen1',
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Tradebacks OU",
		desc: `RBY OU with movepool additions from the Time Capsule.`,
		mod: 'gen1tradeback',
		searchShow: false,
		ruleset: ['[Gen 1] OU', 'Allow Tradeback'],
	},
	{
		name: "[Gen 1] Stadium OU",
		mod: 'gen1stadium',
		searchShow: false,
		ruleset: ['Standard', 'Team Preview'],
		banlist: ['Uber',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] Japanese OU",
		desc: `Generation 1 with Japanese battle mechanics.`,
		mod: 'gen1jpn',
		searchShow: false,
		ruleset: ['Standard'],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] Stadium 0 OU",
		mod: "gen1stadium0",
		searchShow: false,
		ruleset: ['Standard', 'Team Preview'],
		banlist: ['Uber', 'Disc',
			'Nidoking + Fury Attack + Thrash', 'Exeggutor + Poison Powder + Stomp', 'Exeggutor + Sleep Powder + Stomp',
			'Exeggutor + Stun Spore + Stomp', 'Jolteon + Focus Energy + Thunder Shock', 'Flareon + Focus Energy + Ember',
		],
	},
	{
		name: "[Gen 1] NC 1997",
		mod: 'gen1jpn',
		bestOfDefault: true,
		// searchShow: false,
		ruleset: [
			'Picked Team Size = 3', 'Min Level = 50', 'Max Level = 55', 'Max Total Level = 155',
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod', 'NC 1997 Move Legality',
		],
		banlist: ['Uber'],
	},
	{
		name: "[Gen 1] NC 1998",
		mod: 'gen1stadium0',
		searchShow: false,	
		ruleset: [
			'Picked Team Size = 3',  'Min Level = 1', 'Max Level = 30', 
			'Obtainable', 'Team Preview', 'Stadium Sleep Clause', 'Freeze Clause', 'Species Clause', 'Nickname Clause', 'Cancel Mod', 'NC 1998 Move Legality',
		],
		banlist: ['Disc'],
	},
	{
		name: "[Gen 2] First Pokemon Champions Tournament 3v3",
		mod: 'gen2',
		searchShow: false,
		ruleset: ['Obtainable', 'Species Clause', 'Cancel Mod', 'NC 2000 Move Legality', 'Time Capsule Clause', 'HP Percentage Mod', 'Event Moves Clause'],
		banlist: ['Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise', 
			'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Mewtwo', 'Mew', 'Zapdos', 'Moltres', 'Articuno', 'Celebi', 'All Items'],
	},
/*	{
		name: "[Gen 1] Random Battle",
		mod: 'gen1',
		team: 'random',
		bestOfDefault: true,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] Challenge Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any legal moves.`,
		mod: 'gen1',
		team: 'randomCC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['Obtainable', 'HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Sleep Clause Mod', 'Freeze Clause Mod'],
	},
	{
		name: "[Gen 1] Hackmons Cup",
		desc: `Randomized teams of level-balanced Pok&eacute;mon with absolutely any moves, types, and stats.`,
		mod: 'gen1',
		team: 'randomHC',
		searchShow: false,
		challengeShow: false,
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Sleep Clause Mod', 'Freeze Clause Mod', 'Team Type Preview'],
		banlist: ['Nonexistent'],
		onModifySpecies(species, target, source, effect) {
			if (!target) return;
			return { ...species, ...(target.set as any).hc };
		},
		onSwitchIn(pokemon) {
			this.add('-start', pokemon, 'typechange', pokemon.getTypes(true).join('/'), '[silent]');
			for (const i in pokemon.species.baseStats) {
				if (i === 'spd') continue;
				this.add('-start', pokemon, `${pokemon.species.baseStats[i as keyof StatsTable]}${i === 'spa' ? 'spc' : i}`, '[silent]');
			}
		},
	},
	{
		name: "[Gen 1] Ubers",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['Standard'],
	},
	{
		name: "[Gen 1] UU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] OU'],
		banlist: ['OU', 'UUBL', 'Bind', 'Clamp', 'Confuse Ray', 'Fire Spin', 'Supersonic', 'Wrap'],
	},
	{
		name: "[Gen 1] NU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] UU'],
		banlist: ['UU', 'NUBL'],
	},
	{
		name: "[Gen 1] PU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] NU'],
		banlist: ['NU', 'PUBL'],
	},
	{
		name: "[Gen 1] ZU",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['[Gen 1] PU'],
		banlist: ['PU', 'ZUBL'],
	},
	{
		name: "[Gen 1] LC",
		mod: 'gen1',
		searchShow: false,
		ruleset: ['Little Cup', 'Standard', '!Max Level', 'Adjust Level = 5'],
		banlist: ['Dragon Rage', 'Fire Spin', 'Sonic Boom', 'Wrap'],
	},
	{
		name: "[Gen 1] 1v1",
		mod: 'gen1',
		searchShow: false,
		ruleset: [
			'Picked Team Size = 1', 'Max Team Size = 3',
			'Standard', 'Accuracy Moves Clause', 'Sleep Moves Clause', 'Team Preview',
		],
		banlist: ['Mew', 'Mewtwo', 'Bind', 'Clamp', 'Explosion', 'Fire Spin', 'Self-Destruct', 'Wrap'],
	},
*/	{
		name: "[Gen 1] Custom Game",
		mod: 'gen1',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 1] Stadium Custom Game",
		mod: 'gen1stadium',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 1] Japanese Custom Game",
		mod: 'gen1jpn',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 1] Stadium 0 Custom Game",
		mod: 'gen1stadium0',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 1] Yellow Custom Game",
		mod: 'gen1yellow',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] Custom Game",
		mod: 'gen2',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
	{
		name: "[Gen 2] SpaceWorld '97 Custom Game",
		mod: 'gen2sw97',
		searchShow: false,
		debug: true,
		battle: { trunc: Math.trunc },
		ruleset: ['HP Percentage Mod', 'Cancel Mod', 'Desync Clause Mod', 'Max Team Size = 24', 'Max Move Count = 24', 'Max Level = 9999', 'Default Level = 100'],
	},
];
