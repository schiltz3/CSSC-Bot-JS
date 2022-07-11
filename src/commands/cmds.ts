import { Command } from '../command';
import { myClient } from '../myClient';
const { SlashCommandBuilder } = require('@discordjs/builders');


module.exports = new Command(
	new SlashCommandBuilder()
		.setName('cmds')
		.setDescription('Replies with all the commands'),
	false,
	async (interaction) => {
		// interaction is 
		let message:string = "";
		for (const command of (interaction.client as myClient).commands){
			message += command[0] + ":\t" + command[1].data.description + "\n";
		}
		console.log(message);
		await interaction.reply(message);
	}
)
