require('dotenv').config();
const { REST, Routes } = require('discord.js');

const token = process.env.DISCORD_TOKEN;
const clientId = process.env.CLIENT_ID;

const rest = new REST({ version: '10' }).setToken(token);

(async () => {
  try {
    console.log('Removing all global commands...');
    await rest.put(Routes.applicationCommands(clientId), { body: [] });
    console.log('✅ Global commands removed.');

    console.log('Fetching guilds...');
    const guilds = await rest.get(Routes.userGuilds());

    for (const guild of guilds) {
      console.log(`Removing commands from ${guild.name} (${guild.id})...`);
      await rest.put(Routes.applicationGuildCommands(clientId, guild.id), { body: [] });
      console.log(`✅ Guild commands removed from ${guild.name}`);
    }

    console.log('🎉 All commands removed!');
  } catch (error) {
    console.error('❌ Error:', error);
  }
})();
