# Discord.js Deno Boilerplate

![Deno Version](https://img.shields.io/badge/deno-1.35.0-green.svg?logo=deno)
![Discord.js Version](https://img.shields.io/badge/discord.js-14.12.1-blue.svg?logo=discord)

A minimalistic boilerplate for creating Discord bots using Deno and Discord.js.

## Features

- Utilizes the power of Deno, a secure runtime for JavaScript and TypeScript.
- Based on the latest version of Discord.js for interacting with the Discord API.
- Get started quickly with a simple and organized project structure.
- Includes example commands and event handlers to kickstart your bot development.

## Prerequisites

- [Deno](https://deno.land)
- Discord application token (You can get one by [creating a new bot](https://discord.com/developers/applications))

## Getting Started

1. Clone this repository: `git clone https://github.com/franciscosilva00/deno-discordjs-boilerplate.git my-discord-bot`
2. Navigate to the project directory: `cd my-discord-bot`
3. Install dependencies: `deno cache src/main.ts`
4. Rename `.env.example` to `.env` and add your Discord application token and application ID.
5. Deploy commands: `deno task deploy`
6. Start the bot with `deno task run`, or `deno task dev` to watch for file changes while you develop.
