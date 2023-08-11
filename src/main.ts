import { load as loadEnv } from "https://deno.land/std@0.198.0/dotenv/mod.ts";
const env = await loadEnv();

import type { Interaction } from "npm:discord.js@14.12.1";
import {
  Client,
  Collection,
  Events,
  GatewayIntentBits,
} from "npm:discord.js@14.12.1";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.commands = new Collection();

for (const file of Deno.readDirSync("./src/commands")) {
  if (!file.name.endsWith(".ts")) continue;

  const command = await import(`./commands/${file.name}`);

  if (!("data" in command) || !("execute" in command)) {
    console.log(
      `⚠ | The command at ${file.name} is missing a required "data" or "execute" property.`
    );

    continue;
  }

  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, (c) => {
  console.log(`✔ | Logged in as ${c.user.tag}`);
});

client.on(Events.InteractionCreate, async (interaction: Interaction) => {
  if (!interaction.isChatInputCommand()) return;

  const command = interaction.client.commands.get(interaction.commandName);
  if (!command) return;

  await command.execute(interaction);
});

client.login(env["DISCORD_TOKEN"]);
