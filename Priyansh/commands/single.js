const fs = require("fs");
module.exports.config = {
	name: "single",
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
	if (event.body.indexOf("single")==0 || event.body.indexOf("Single")==0 || event.body.indexOf("single")==0 || event.body.indexOf("single")==0) {
		var msg = {
				body: "𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍 𝐊 owner",
				attachment: fs.createReadStream(__dirname + `/noprefix/single.mp4`)
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("💗", event.messageID, (err) => {}, true)
		}
	}
	module.exports.run = function({ api, event, client, __GLOBAL }) {

  }