// Defines allowed datasource
global.DATASOURCE = {
	SQLITE: "sqlite",
	JSON: "json"
};

// Effect
global.EFFECT = {
	EMOJIS: {
		":baby:": "👶",
		":smiley:": "😃",
		":clock10:": "🕙", // may be deleted : is used to avoir interaction when the bot is awaiting an answer
		":skull:": "💀",
		":sleeping:": "😴",
		":zany_face:": "🤪",
		":cold_face:": "🥶",
		":head_bandage:": "🤕",
		":sick:": "🤢",
		":lock:": "🔒",
		":dizzy_face:": "😵",
		":clock2:": "🕑",
		":drooling_face:": "🤤",
		":confounded:": "😖",
		":scream:": "😱"
	},
	BABY: ":baby:",
	SMILEY: ":smiley:",
	AWAITING_ANSWER: ":clock10:", // may be deleted : is used to avoir interaction when the bot is awaiting an answer
	DEAD: ":skull:",
	SLEEPING: ":sleeping:",
	DRUNK: ":zany_face:",
	FROZEN: ":cold_face:",
	HURT: ":head_bandage:",
	SICK: ":sick:",
	LOCKED: ":lock:",
	INJURED: ":dizzy_face:",
	OCCUPIED: ":clock2:",
	STARVING: ":drooling_face:",
	CONFOUNDED: ":confounded:",
	SCARED: ":scream:"
};

global.LANGUAGE = {
	FRENCH: "fr",
	ENGLISH: "en"
};

// Object nature
global.NATURE = {
	NONE: 0,
	HEALTH: 1,
	SPEED: 2,
	ATTACK: 3,
	DEFENSE: 4,
	HOSPITAL: 5,
	MONEY: 6
};

// Object rarity
global.RARITY = {
	BASIC: 0,
	COMMON: 1,
	UNCOMMON: 2,
	EXOTIC: 3,
	RARE: 4,
	SPECIAL: 5,
	EPIC: 6,
	LEGENDARY: 7,
	MYTHICAL: 8
};

global.PERMISSION = {
	ROLE: {
		BOT_OWNER: "owner", // is the owner of the bot
		BADGE_MANAGER: "manager", // has the badge manager role
		SUPPORT: "support", // has the support role
		ADMINISTRATOR: "administrator", // has the admin permission in a server where the bot is.
		CONTRIBUTORS: "contributors",
		ALL: "all"
	}
};

global.REWARD_TYPES = {
	PERSONAL_XP: "personalXP",
	GUILD_XP: "guildXp",
	HOSPITAL: "hospital",
	MONEY: "money",
	FIXED_MONEY: "fixedMoney",
	BADGE: "badge",
	FULL_HEAL: "fullHeal",
	PARTIAL_HEAL: "partialHeal",
	ALTERATION: "alterationHeal",
	PET_FOOD: "petFood"
};

global.ITEMTYPE = {
	POTION: "potions",
	WEAPON: "weapons",
	ARMOR: "armors",
	OBJECT: "objects"
};

global.GUILD = {
	REQUIRED_LEVEL: 10,
	MAX_GUILD_MEMBER: 6,
	MAX_GUILD_NAME_SIZE: 15,
	MIN_GUILD_NAME_SIZE: 2,
	MIN_DESCRIPTION_LENGTH: 2,
	MAX_DESCRIPTION_LENGTH: 140,
	MAX_COMMON_PET_FOOD: 25,
	MAX_HERBIVOROUS_PET_FOOD: 15,
	MAX_CARNIVOROUS_PET_FOOD: 15,
	MAX_ULTIMATE_PET_FOOD: 5
};

global.CLASS = {
	REQUIRED_LEVEL: 4,
	PRICE: 5000,
	GROUP1LEVEL: 16,
	GROUP2LEVEL: 32,
	GROUP3LEVEL: 48
};

global.CATEGORY = {
	SERVER: "server",
	UTIL: "util",
	PLAYER: "player",
	GUILD: "guild",
	PET: "pet"
};
global.MENU_REACTION = {
	ACCEPT: "✅",
	DENY: "❌",
	FRENCH_FLAG: "🇫🇷",
	ENGLISH_FLAG: "🇬🇧"
};

global.PROGRESSBARS_SIZE = 20;

global.FIGHT = {
	MAX_SPEED_IMPROVEMENT: 30,
	MAX_TURNS: 25,
	REQUIRED_LEVEL: 8,
	POINTS_REGEN_MINUTES: 15,
	POINTS_REGEN_AMOUNT: 50,
	ACTION: {
		QUICK_ATTACK: 0,
		SIMPLE_ATTACK: 1,
		POWERFUL_ATTACK: 2,
		BULK_ATTACK: 3,
		IMPROVE_SPEED: 4,
		ULTIMATE_ATTACK: 5
	}
};

global.SHOP = {
	QUESTION: "❓",
	HOSPITAL: "🏥",
	HEART: "💗",
	MONEY_MOUTH: "🤑",
	POTION_REPLACEMENT: "🍷"
};

global.GUILDSHOP = {
	STAR: "⭐",
	COMMON_FOOD: "🍬",
	HERBIVOROUS_FOOD: "🥬",
	CARNIVOROUS_FOOD: "🥩",
	ULTIMATE_FOOD: "🍲"
};

global.QUANTITY = {
	ONE: "1️⃣",
	FIVE: "5️⃣",
	TEN: "🔟"
};

global.PETFREE = {
	MEAT_GIVEN: 1,
	GIVE_MEAT_PROBABILITY: 0.1,
	FREE_FEISTY_COST: 1000
};

global.TOPGG = {
	BADGE: "🗳️",
	BADGE_DURATION: 12,
	ROLE_DURATION: 24,
	DBL_SERVER_COUNT_UPDATE_TIME: 1800000
};

global.PETS = {
	IS_FOOD: 1,
	MALE: "m",
	FEMALE: "f",
	FREE_COOLDOWN: 60 * 60 * 1000, // 1 hour
	BREED_COOLDOWN: 60 * 60 * 1000, // 1 hour
	MAX_LOVE_POINTS: 100,
	BASE_LOVE: 10,
	GUILD_LEVEL_USED_FOR_NO_GUILD_LOOT: 20,
	LOVE_LEVELS: [5, 20, 50],
	SELL: {
		MIN: 100,
		MAX: 50000
	}
};
global.UNLOCK = {
	PRICE_FOR_UNLOCK: 3000
};

global.LOGS = {
	LOG_COUNT_LINE_LIMIT: 50000
};

global.REPORT = {
	TIME_BETWEEN_BIG_EVENTS: 2 * 60 * 60 * 1000, // 2 hours
	BONUS_POINT_TIME_DIVIDER: 6,
	POINTS_BY_SMALL_EVENT: 50,
	PATH_SQUARE_COUNT: 16,
	TIME_BETWEEN_MINI_EVENTS: 10 * 60 * 1000, // 10 minutes
	QUICK_END_EMOTE: "🔚"
};

global.SMALL_EVENT = {
	MINIMUM_HEALTH_WON: 1,
	MAXIMUM_HEALTH_WON: 4,
	SHOP_RESALE_MULTIPLIER: 0.1,
	MINIMUM_EXPERIENCE_WON: 10,
	MAXIMUM_EXPERIENCE_WON: 35,
	MINIMUM_GUILD_EXPERIENCE_WON: 20,
	MAXIMUM_GUILD_EXPERIENCE_WON: 80,
	MINIMUM_MONEY_WON_VOTE: 150,
	MAXIMUM_MONEY_WON_VOTE: 250,
	MINIMUM_HEALTH_LOST_SMALL: 1,
	MAXIMUM_HEALTH_LOST_SMALL: 5,
	MINIMUM_TIME_LOST_SMALL: 1,
	MAXIMUM_TIME_LOST_SMALL: 24,
	MINIMUM_MONEY_LOST_SMALL: 10,
	MAXIMUM_MONEY_LOST_SMALL: 50,
	MINIMUM_HEALTH_LOST_BIG: 5,
	MAXIMUM_HEALTH_LOST_BIG: 30,
	MINIMUM_MONEY_LOST_BIG: 50,
	MAXIMUM_MONEY_LOST_BIG: 250,
	MINIMUM_MONEY_WON_CLASS: 50,
	MAXIMUM_MONEY_WON_CLASS: 150,
	MINIMUM_HEALTH_WON_CLASS: 1,
	MAXIMUM_HEALTH_WON_CLASS: 5,
	LOTTERY_REWARDS: {
		EXPERIENCE: 50,
		MONEY: 50,
		GUILD_EXPERIENCE: 45,
		POINTS: 35
	}
};

global.COLLECTOR_TIME = 120000;

global.TEST_EMBED_COLOR = {
	SUCCESSFUL: "#FF8888",
	ERROR: "#FF0000"
};

global.ROLES = {
	GUILD: {
		NONE: "none",
		MEMBER: "member",
		ELDER: "elder",
		CHIEF: "chief"
	},
	USER: {
		ADMINISTRATOR: "administrator", // has the admin permission in a server where the bot is.
		BADGE_MANAGER: "manager", // has the badge manager role
		SUPPORT: "support", // has the support role
		CONTRIBUTORS: "contributors",
		BOT_OWNER: "owner" // is the owner of the bot
	}
};