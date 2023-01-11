const { REST } = require('@discordjs/rest');
const fs = require('fs');

module.exports = (client) => {
    client.handleCommands = async () => {
        const commandFolders = fs.readdirSync('commands');

        for (const folder of commandFolders) {
            const commandFiles = fs.readdirSync(`commands/${folder}`).filter((file) => file.endsWith('.js'));
            const { commands, commandArray } = client;
            const command = require(`../../commands/${folder}/${file}`)

            for (const files of commandFiles) {
                commands.set(command.data.name, command);
                commandArray.push(command, command.data.toJSON());
            }
        }
    }
}