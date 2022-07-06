const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Post a reaction poll'),
	async execute(interaction) {
		await interaction.reply('POLL');
	},
};
