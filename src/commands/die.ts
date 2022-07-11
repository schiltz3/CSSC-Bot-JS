import { Command } from '../command';
export {};
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = new Command(
	new SlashCommandBuilder()
		.setName('die')
		.setDescription('Shuts down the bot (Only owner can use this command)'),
	false,
	async (interaction) => {
		await interaction.reply('DIE');
	},
);