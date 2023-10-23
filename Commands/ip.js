const { ipCommandMessage } = require("../config.json");

module.exports = {
    data: {
        name: "ip",
        description: "Get the server IP & Port",
    },
    async execute(message) {
        if (!ipCommandMessage) return;
        message.channel.send(ipCommandMessage)
    },
};