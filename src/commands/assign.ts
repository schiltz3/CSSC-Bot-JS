import { Command } from "../command";

export {};
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = new Command(
	new SlashCommandBuilder()
		.setName('assign')
		.setDescription('assign a role using a command'),
	false,
	async (interaction) => {
		await interaction.reply('ASSIGN');
	},
);