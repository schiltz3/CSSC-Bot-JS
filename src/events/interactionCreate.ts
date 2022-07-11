import { CommandInteraction, Interaction } from 'discord.js';
import { myClient } from '../myClient';
import { Event } from '../event';

module.exports = new Event(
	'interactionCreate',
	async (interaction: CommandInteraction) => {
		if (!interaction.isCommand()) return;
		const command = (interaction.client as myClient).commands.get(interaction.commandName);
		if (!command) return;

		try {
			await command.execute(interaction as any);
		}
		catch (error) {
			console.error(error);
			await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
		}
	}
)