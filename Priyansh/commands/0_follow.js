const fs = require("fs");
module.exports.config = {
	name: "follow",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "𝐏𝐫𝐢𝐲𝐚𝐧𝐬𝐡 𝐑𝐚𝐣𝐩𝐮𝐭", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "follow",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("shaan")==0 || event.body.indexOf("Shan")==0 || event.body.indexOf("Shaan")==0 || event.body.indexOf("shan")==0) {
		var msg = {
				body: "👋For Any Kind Of Help Contact On WhatsApp +923368783346 👉 @shankhank345😇",
				attachment: fs.createReadStream(__dirname + `/noprefix/ttsmaker-file-2025-3-19-21-16-17.mp3`)
			}
			api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🔔", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
