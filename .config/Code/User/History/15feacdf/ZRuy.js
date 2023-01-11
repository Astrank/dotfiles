require('dotenv').config();
const { token } = process.env;
const { Client, Collection, GatewayIntentBits } = require('discord.js');
const fs = require('fs');

const client = Client({ intents: GatewayIntentBits.Guilds });
client.commands = new Collection();

const functionFolders = fs.readdirSync('functions');

for (folder of functionFolders) {
    const functionFiles = fs.readdirSync(`function/${folder}`)    
}