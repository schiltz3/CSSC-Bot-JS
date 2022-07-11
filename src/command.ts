import { SlashCommandBuilder } from '@discordjs/builders';
import {BaseCommandInteraction, CommandInteraction, Message } from 'discord.js';

export type ExecuteCommand = (interaction: CommandInteraction) => Promise<void>
export class Command{
	data: SlashCommandBuilder
	once: boolean
	execute: ExecuteCommand

	constructor(data:SlashCommandBuilder, once:boolean, execute:ExecuteCommand) {
		this.data = data;
		this.once = once;
		this.execute = execute;
	}
}