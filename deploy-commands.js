const { SlashCommandBuilder } = require('@discordjs/builders');
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { clientId, guildId, token } = require('./config.json');
const fs = require('fs');

const commands = [
	new SlashCommandBuilder().setName('cmds').setDescription('Replies with all the commands'),
	new SlashCommandBuilder().setName('assign').setDescription('assign a role using a command'),
	new SlashCommandBuilder().setName('poll').setDescription('Post a reaction poll'),
	new SlashCommandBuilder().setName('dm').setDescription('DM caller\'s ID bot logs, discord logs, or server logs (Only owner can use this command'),
	new SlashCommandBuilder().setName('die').setDescription('Shuts down the bot (Only owner can use this command)'),
].map(command => command.toJSON());

fs.writeFileSync('json/commands.json', commands.map(command => JSON.stringify(command)).join());

const rest = new REST({ version: '9' }).setToken(token);

rest.put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
	.then(() => console.log('Successfully registered application commands.'))
	.catch(console.error);