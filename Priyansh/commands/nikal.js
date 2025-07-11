const fs = require("fs");
module.exports.config = {
  name: "nikal",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "SUSHIL YADAV", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("chal nikal") ||
     react.includes("nikal") || react.includes("Nikal") || react.includes("NIKAL") ||
react.includes("niklo") ||
react.includes("Niklo")) {
    var msg = {
        body: `𝐌𝐄 𝐊𝐘𝐔 𝐍𝐈𝐊𝐀𝐋 𝐉𝐀𝐖𝐎𝐍 𝐓𝐔 𝐉𝐀 𝐁𝐀𝐃𝐀 𝐀𝐀𝐘𝐀 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐇𝐀𝐑 𝐍𝐈𝐊𝐀𝐋 𝐍𝐄 𝐖𝐀𝐋𝐄😏😏👈`,
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("🧐", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }