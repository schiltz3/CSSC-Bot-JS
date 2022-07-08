export {};
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('die')
		.setDescription('Shuts down the bot (Only owner can use this command)'),
	async execute(interaction) {
		await interaction.reply('DIE');
	},
};