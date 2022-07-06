const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('assign')
		.setDescription('assign a role using a command'),
	async execute(interaction) {
		await interaction.reply('ASSIGN');
	},
};