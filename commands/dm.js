const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('dm')
		.setDescription('DM caller\'s ID bot logs, discord logs, or server logs (Only owner can use this command'),
	async execute(interaction) {
		await interaction.reply('DM');
	},
};