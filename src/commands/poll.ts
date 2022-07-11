export {};
const { SlashCommandBuilder } = require('@discordjs/builders');
import {Command} from '../command';
import { BaseCommandInteraction } from 'discord.js';

class ReactionPoll{
	name;
	color;
	emoji;
	cmd;
	constructor(name:string, color:string, emoji:string, cmd:string){
		this.name = name;
		this.color = color;
		this.emoji = emoji;
		this.cmd = cmd;
	}
}

module.exports = new Command(
	new SlashCommandBuilder()
		.setName('poll')
		.setDescription('Post a reaction poll'),
	false,
	async (interaction) => {
		// interaction.partial
		await interaction.reply('POLL');
	}
	)