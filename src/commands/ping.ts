import { SlashCommandBuilder } from "npm:discord.js@14.12.1";
import type { Interaction } from "npm:discord.js@14.12.1";

export const data = new SlashCommandBuilder()
  .setName("ping")
  .setDescription("Replies with Pong!");

export const execute = async (interaction: Interaction) => {
  if (!interaction.isRepliable()) return;

  await interaction.reply("Pong!");
};
