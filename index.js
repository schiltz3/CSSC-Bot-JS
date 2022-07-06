// Require the necessary discord.js classes
const { Client, Intents } = require('discord.js');
// Import token from config.json
const { token } = require('./config.json');
const { commands } = require('./deploy-commands.js');


// Create a new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.once('ready', () => {
	console.log(`Logged in as ${client.user.tag}!`);
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;
	const { commandName } = interaction;

	if (commandName === 'cmds') {
		await interaction.reply(`${commands}`);
	}
	else if (commandName === 'assign') {
		await interaction.reply('Assign');
	}
	else if (commandName === 'poll') {
		await interaction.reply('Poll');
	}
	else if (commandName === 'dm') {
		await interaction.reply('DM');
	}
	else if (commandName === 'die') {
		await interaction.reply('Die');
	}
});

client.login(token);