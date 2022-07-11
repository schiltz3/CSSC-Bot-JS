// Require the necessary discord.js classes
import {Collection, Intents } from 'discord.js';
// Import token from config.json
import {myClient} from './myClient';
import { token } from '../config.json';
import fs from 'node:fs';
import path from 'node:path';
import { Command } from './command';


const client: myClient = new myClient({
	intents: [Intents.FLAGS.GUILDS],
	partials: ['MESSAGE', 'CHANNEL', 'REACTION'],
});
module.exports = { client };
const commandsPath = path.join(__dirname, 'commands');
const commandFiles = fs.readdirSync(commandsPath).filter((file: string) => file.endsWith('.js'));

// Add commands from files in commands folder
for (const file of commandFiles) {
	const filePath: string = path.join(commandsPath, file);

	// type is whatever is exported by command files
	const command:Command = require(filePath);
	client.commands.set(command.data.name, command);
}

const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter((file: string) => file.endsWith('.js'));

// Register event callback from files in events folder
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once == true) {
		client.once(event.name, (...args: any) => event.execute(...args));
	}
	else {
		client.on(event.name, (...args: any) => event.execute(...args));
	}
}

client.login(token);