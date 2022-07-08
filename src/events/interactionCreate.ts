import {Interaction} from 'discord.js';
import {myClient} from '../myClient';


module.exports = {
	name: 'interactionCreate',
	async execute(interaction:Interaction) {
		if (!interaction.isCommand()) return;
		const command = (interaction.client as myClient).commands.get(interaction.commandName);
		if (!command) return;

		try {
			await command.execute(interaction);
		}
		catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	},
};