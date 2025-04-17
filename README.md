```markdown
# 🗑️ Remove Slash Commands - Discord Bot

This project is a Node.js script that removes **all slash commands** (global and guild-specific) registered by a Discord bot. It uses the Discord API to delete the commands from all servers the bot is in.

## Features

- Deletes **global slash commands**.
- Deletes **guild-specific slash commands** from every server the bot is in.
- Uses a secure `.env` file for bot credentials.

## Requirements

- Node.js (v16 or higher)
- A Discord bot token
- Your bot's application (client) ID
- `discord.js` and `dotenv` libraries

## Installation

### Step 1: Clone the repository

```bash
git clone https://github.com/william2sober/remove-slash-commands.git
cd remove-slash-commands
```

### Step 2: Install dependencies

```bash
npm install
```

### Step 3: Configure the environment

Create a `.env` file in the root folder and add your bot credentials:

```env
DISCORD_TOKEN=your_bot_token
CLIENT_ID=your_bot_client_id
```

## Usage

Run the script with:

```bash
node index.js
```

This will delete all global and guild slash commands for the bot.

## Support

For questions or help, feel free to contact:

- Email: [William2sober@gmail.com](mailto:William2sober@gmail.com)
- Discord: [https://discord.gg/8K2neBXVfg](https://discord.gg/8K2neBXVfg)
```

---
