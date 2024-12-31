const fs = require("fs");
module.exports.config = {
  name: "SHAAN",
    version: "2.1.1",
  hasPermssion: 0,
  credits: "𝐏𝐑𝐈𝐘𝐀𝐍𝐒𝐇𝐈 𝐊𝐀𝐔𝐑", 
  description: "Just Respond",
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = async ({ api, event, Users, Currencies, args, utils, client, global }) => {
  var name = await Users.getNameUser(event.senderID);
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("shan kham") ||
     react.includes("Shaan Khan") || react.includes("SHAAN") || react.includes("shaan") ||
react.includes("shan") ||
react.includes("SHAAN KHAN") ||     
react.includes("Shaan")) {
    var msg = {
        body: `${name} 𝐿𝑂 𝑀𝐸𝑅𝐼 𝐽𝐴𝐴𝑁 😹 𝑀𝐸𝑅𝐸 𝐵𝑂𝑆𝑆 𝐾𝑂😘 𝑌𝐴𝐴𝐷 𝐾𝐼𝑌𝐴 𝑆𝐻𝐴𝐴𝑁 𝑀𝐸𝑅𝐸 𝐵𝑂𝑆𝑆 😎 𝑆𝐻À𝐴𝑁 𝐺💐✿`,attachment: fs.createReadStream(__dirname + `/noprefix//Screenshot_2024-12-06-10-28-48-49_8110815a90a63ac3d3d945cf32a1cf14.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("💋", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = async ({ api, event, Currencies, args, utils, client, global }) => {

  }
