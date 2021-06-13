module.exports.infos = {
	name: "weaponid",
	commandFormat: "<id>",
	typeWaited: {
		id: typeVariable.INTEGER
	},
	messageWhenExecuted: "Vous avez maintenant l'arme {weapon} !",
	description: "Change l'arme de votre joueur"
};

/**
 * Set the weapon of the player
 * @param {("fr"|"en")} language - Language to use in the response
 * @param {module:"discord.js".Message} message - Message from the discord server
 * @param {String[]} args=[] - Additional arguments sent with the command
 * @return {String} - The successful message formatted
 */
async function weaponid(language, message, args) {
	const [entity] = await Entities.getOrRegister(message.author.id);

	entity.Player.Inventory.weaponId = parseInt(args[0]);
	let weaponText;
	try {
		weaponText = await (await entity.Player.Inventory.getWeapon()).toFieldObject(language).value;
	}
	catch (e) {
		throw new Error("Arme avec id inexistant : " + args[0]);
	}
	entity.Player.Inventory.save();

	return format(module.exports.infos.messageWhenExecuted, {weapon: weaponText});
}

module.exports.execute = weaponid;