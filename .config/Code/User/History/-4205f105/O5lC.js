const fs = require('fs');

module.exports = (client) => {
    client.handleEvents = async () => {
        const eventFolders = fs.readdirSync('../../events');

        for (const folder of eventFolders) {
            const eventFiles = fs.readdirSync(`../../events/${folder}`).filter((file) => file.endsWith('.js'));

            switch (folder) {
                case "client":
                    for (const file of eventFiles) {
                        const event = require(`../../events/${folder}`);

                        if (event.once) {
                            client.once(event.name, (...args) => event.execute(...args, client));
                        } else {
                          event.on(event.name, (...args) => event.execute(...args, client));
                        }
                    }
                    break;
            
                default:
                    break;
            }
        }
    }
}