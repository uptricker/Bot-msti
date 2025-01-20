const fs = require("fs");
module.exports.config = {
	name: "bot2",
    version: "1.0.1",
	hasPermssion: 0,
	credits: "Amir", 
	description: "hihihihi",
	commandCategory: "no prefix",
	usages: "npxs5",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
	if (event.body.indexOf("Bot🙄")==0 || event.body.indexOf("bot🙄")==0 || event.body.indexOf("robot")==0 || event.body.indexOf("Robot")==0) {
		var msg = {
				body: "",
				attachment: fs.createReadStream(__dirname + `/noprefix/bot.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}