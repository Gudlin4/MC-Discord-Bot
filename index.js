const { Client, GatewayIntentBits, Collection, Events, ActivityType } = require('discord.js');
const fs = require("fs");
const { prefix, activity } = require("./config.json");

const client = new Client({
    intents: [ GatewayIntentBits.GuildMembers, GatewayIntentBits.GuildMessages, GatewayIntentBits.Guilds, GatewayIntentBits.GuildPresences, GatewayIntentBits.MessageContent ]
});

client.commands = new Collection();
client.config = require('./config.json');

const commandFiles = fs.readdirSync('./Commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./Commands/${file}`);
    client.commands.set(command.data.name, command);
};

client.once('ready', () => {

    if (activity) {

        setInterval(() => {
            const status = activity[Math.floor(Math.random() * activity.length)];
            client.user.setPresence({ 
                status: "online", 
                activities: [{
                    type: ActivityType.Custom,
                    name: `status`,
                    state: status
                }],
            });
        }, 5000); // Time in milliseconds
    };
        
    console.log(`Logged in as ${client.user.tag}`);
});

client.on(Events.MessageCreate, async (message) => {

    if (!prefix) return;
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (!client.commands.has(commandName)) return;

    const command = client.commands.get(commandName);

    try {
        await command.execute(message, args);
    } catch (error) {
        console.error(error);
    };
});

client.login(client.config.token);