const discord = require("discord.js");
/***
* @param {Discord.client} bot the discord bot client.
* @param {Discord.messsage} message the initial message sent by the user.
* @param {array} args an array of arguments
 */
module.exports.run = async (bot, message, args) => {
	const dankbotembed = new discord.MessageEmbed()
		.setColor('#E7A700')
		.setTitle('DANK MEMER BOT USER MANUAL')
		.setDescription(`
		 
		 \`\`\`1) pls meme\`\`\`  Sends a random meme

		 \`\`\`2) pls wholesome\`\`\`  Sends a wholesome meme

		 \`\`\`3) pls pun\`\`\`  Sends a pun

		 \`\`\`4) pls 4chan\`\`\` A random 4chan quote/meme

		 \`\`\`5) pls antijoke\`\`\`  Sends a non joke text

		 \`\`\`6) pls antiantijoke\`\`\`  Yes you read it right, it's a joke

		 \`\`\`7) pls xkcd\`\`\`  Grabs a random comic from the xkcd website

		 \`\`\`8) pls create\`\`\`  Create a meme using this bot

		 \`\`\`9) pls discordmeme\`\`\`  Sends a random discord themed meme

		 \`\`\`10) pls meirl\`\`\`  Sends a post that you can relate to (well...sometimes)


		 THESE ARE THE IMPORTANT COMMANDS`)
		.setImage('https//dankmemer.lol/40326fed0d1bc75a2688535e70dd31be.png');

	message.channel.send(dankbotembed);
	
};

module.exports.help = {
	name : "dankbot",
    aliases: ['dankmemer']
};