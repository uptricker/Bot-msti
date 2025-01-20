const fs = require("fs");
module.exports.config = {
	name: "keya",
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
	if (event.body.indexOf("kya kar")==0 || event.body.indexOf("keya kr rahi ho")==0 || event.body.indexOf("kiya krti ho")==0 || event.body.indexOf("kya kar rahi ho")==0) {
		var msg = {
				body: "🥀🥀🥀",
				attachment: fs.createReadStream(__dirname + `/noprefix/kuchnhi.mp3`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💕", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

	}