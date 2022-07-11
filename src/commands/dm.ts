import { BaseCommandInteraction } from 'discord.js';
import { Command } from '../command';
const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = new Command(
	new SlashCommandBuilder()
		.setName('dm')
		.setDescription('DM caller\'s ID bot logs, discord logs, or server logs (Only owner can use this command'),
	false,
	async (interaction) => {
		await interaction.reply('DM');
	},
)