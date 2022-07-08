export {};
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('cmds')
		.setDescription('Replies with all the commands'),
	async execute(interaction:any) {
		// interaction is 
		await interaction.reply('CMDS');
	},
};
