const fs = require("fs");
module.exports.config = {
        name: "sunny",
    version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU", 
        description: "hihihihi",
        commandCategory: "no prefix",
        usages: "sunny",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
        var { threadID, messageID } = event;
        if (event.body.indexOf("@Sunny Brand")==0 || event.body.indexOf("sunny")==0 || event.body.indexOf("Sunny")==0 || event.body.indexOf("SUNNY")==0) {
                var msg = {
                                body: "=𝐎𝐰𝐧𝐞𝐫 ➻   \n_______________________\n\n. 𝐎𝐰𝐧𝐞𝐫 ==∆ SuNNY \n_______________________",
                                attachment: fs.createReadStream(__dirname + `/noprefix/Picsart_24-12-01_21-53-47-781.jpg`)
                        }
                        api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😎", event.messageID, (err) => {}, true)
                }
        }
        module.exports.run = function({ api, event, client, __GLOBAL }) {

        }