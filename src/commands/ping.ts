import type { CommandInteraction } from "npm:discord.js@14.12.1";
import { SlashCommandBuilder } from "npm:discord.js@14.12.1";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

export const execute = async (interaction: CommandInteraction) => {
  if (!interaction.isRepliable()) return;

  await interaction.reply("Pong!");
};
