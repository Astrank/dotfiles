module.exports = {
    name: 'interactionCreate',
    async execute(interaction, client) {
        if (interaction.isCommand()) {
            const { commands } = client;
            const { commandName } = interaction;
            const command = command.get(commandName);

            if(!command) return;

            try {

            } catch (error) {
                console.error(error);
            }
        }
    }
}