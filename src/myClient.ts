import { Client, Collection, Interaction} from 'discord.js';
import {ExecuteCommand} from './commands/command';
// Create a new client instance
export class myClient extends Client {
	commands: Collection<string, ExecuteCommand>;

	constructor(options: any) {
		super(options)
		this.commands = new Collection<string, ExecuteCommand>;
	}
}