const fs = require("fs");
module.exports.config = {
        name: "emoji",
    version: "1.1.1",
        hasPermssion: 0,
        credits: "SHAAN", 
        description: "THIS BOT IS MR SHAAN",
        commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        let react = event.body.toLowerCase();
        if(react.includes("🙉") ||
     react.includes("🙊") || react.includes("🙈") || react.includes("") ||
react.includes("") ||
react.includes("")) {
                var msg = {
                                body: `bander Ka muu wala has mat 
👆ya line be KIsi emoji Ka sath lauo 🤣👈`,
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🙊", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

  }