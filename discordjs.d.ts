import type { Collection, Interaction } from "npm:discord.js@14.12.1";

// Define the structure of a command
interface Command {
  name: string;
  description: string;
  execute: (interaction: Interaction) => Promise<void>;
}

declare module "npm:discord.js@14.12.1" {
  interface Client {
    commands: Collection<string, Command>;
  }
}
