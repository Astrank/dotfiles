const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('./commands');

        for (const folder of commandFolders) {
            const commandFiles = fs
                .readdirSync(`./commands/${folder}`)
                .filter((file) => file.endsWith('.js'));
            const { commands, commandArray } = client;

            for (const file of commandFiles) {
                const command = require(`../../commands/${folder}/${file}`);

                commands.set(command.data.name, command);
                 
                if (Array.isArray(commandArray)) {
                    commandArray.push(command.data.toJSON());
                } else {
                    return
                }
            }
        }

        const clientId = '1024540089205919775';
        const guildId = '1019747082833231962';
        const rest = new REST({ version: '9' }).setToken(process.env.token);

        try {
            console.log("Started refreshing application (/) commands.");

            await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
                body: client.commandArray,
            });

            console.log("Successfully reloaded application (/) commands.")
        } catch (error) {
            console.error(error);
        }
    }
}