import { Client, Collection, Interaction} from 'discord.js';
import {Command, ExecuteCommand} from './command';
// Create a new client instance
export class myClient extends Client {
	commands: Collection<string, Command>;

	constructor(options: any) {
		super(options)
		this.commands = new Collection<string, Command>;
	}
}