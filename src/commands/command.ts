import { SlashCommandBuilder } from '@discordjs/builders';
import {Interaction} from 'discord.js';

export type ExecuteCommand = {execute(interaction: Interaction): Promise<void>}
export class Command{
	data: any
	execute: ExecuteCommand

	constructor(data:any, execute:ExecuteCommand) {
		this.data = data;
		this.execute = execute
	}
}