const { applyCommandMessage } = require("../config.json");

module.exports = {
    data: {
        name: "apply",
        description: "Apply for Staff or Media!",
    },
    async execute(message) {
        if (!applyCommandMessage) return;
        message.channel.send(applyCommandMessage)
    },
};