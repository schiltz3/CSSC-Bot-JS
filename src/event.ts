import {CommandInteraction } from 'discord.js';

export type ExecuteEvent = (interaction: CommandInteraction) => Promise<void>
export class Event{
	name: string
	execute: ExecuteEvent

	constructor(name:string, execute:ExecuteEvent) {
		this.name = name;
		this.execute = execute;
	}
}