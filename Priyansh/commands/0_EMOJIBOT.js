const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "EMOTIONS-EMOJI-BOT",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "SHAAN",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "satish",
  cooldowns: 5,
}
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

    if ((event.body.toLowerCase() == "🙋") || (event.body.toLowerCase() == "🙋🙋") || (event.body.toLowerCase() == "🙋‍♀️") || (event.body.toLowerCase() == "🙋‍♀️🙋‍♀️")) {
     return api.sendMessage(`${name} 𝗔𝗔p᩶ 𝗔𝗔 𝗴ɣɘ ß𝗔ß𝘂 😍`, threadID);
   };

    if ((event.body.indexOf("😀") >= 0 )) {
     return api.sendMessage(`${name} 𝐖𝐀𝐇 𝐊𝐘𝐀 𝐇𝐈 𝐌𝐔𝐒𝐑𝐀𝐇𝐀𝐓 𝐇𝐀𝐈 😀😀`, threadID, messageID);
   };

    if ((event.body.indexOf("😄") >= 0 )) {
     return api.sendMessage(`${name} 𝐂𝐇𝐔𝐇𝐄 𝐉𝐄𝐒𝐀 𝐌𝐔𝐇 𝐌𝐀𝐓 𝐁𝐀𝐍𝐀 😆`, threadID, messageID);
   };

    if ((event.body.indexOf("😁") >= 0 )) {
     return api.sendMessage(`${name} 𝐋𝐀𝐆𝐓𝐀 𝐇𝐀𝐈 𝐀𝐀𝐉 𝐏𝐄𝐇𝐋𝐈 𝐁𝐀𝐑 𝐁𝐑𝐀𝐒𝐇 𝐊𝐈𝐘𝐀 𝐇𝐀𝐈 😁`, threadID, messageID);
   };

    if ((event.body.indexOf("😆") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐀𝐍𝐊𝐇 𝐁𝐀𝐍𝐃 𝐊𝐀𝐑 𝐊𝐄 𝐊𝐘𝐎 𝐇𝐀𝐒 𝐑𝐄𝐇𝐄 𝐇𝐎 𝐓𝐇𝐀𝐑𝐊𝐈 😆`, threadID, messageID);
   };

    if ((event.body.indexOf("😅") >= 0 )) {
     return api.sendMessage(`${name} 𝐓𝐄𝐑𝐄 𝐒𝐀𝐑 𝐒𝐄 𝐏𝐀𝐍𝐈 𝐊𝐘𝐎 𝐓𝐀𝐏𝐀𝐊 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈 😅`, threadID, messageID);
   };

    if ((event.body.indexOf("😂") >= 0 )) {
     return api.sendMessage(`${name} 𝐄𝐓𝐍𝐈 𝐇𝐀𝐒𝐈 𝐊𝐘𝐎 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈, 𝐄𝐒 𝐇𝐀𝐒𝐈 𝐊𝐄 𝐏𝐈𝐂𝐇𝐇𝐄 𝐊𝐘𝐀 𝐑𝐀𝐉 𝐇𝐀𝐈 𝐁𝐀𝐓𝐀𝐎 𝐇𝐀𝐌𝐒𝐄 𝐍𝐀 𝐒𝐀𝐑𝐌𝐀𝐎 😂🤤`, threadID, messageID);
   };

    if ((event.body.indexOf("🤣") >= 0 )) {
     return api.sendMessage(`${name} 𝐉𝐀𝐃𝐀 𝐌𝐀𝐓 𝐇𝐀𝐒, 𝐄𝐊 𝐌𝐔𝐊𝐊𝐄 𝐌𝐄 𝐒𝐀𝐑𝐄 𝐃𝐀𝐍𝐓 𝐓𝐎𝐃 𝐃𝐔𝐍𝐆𝐀 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😭") >= 0 )) {
     return api.sendMessage(`${name} ️𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 𝐑𝐎𝐓𝐄 𝐍𝐇𝐈, 𝐀𝐀𝐏 𝐌𝐄𝐑𝐄 𝐏𝐘𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 𝐇𝐎 𝐍𝐀, 𝐋𝐎 𝐌𝐄 𝐀𝐀𝐏 𝐊𝐄 𝐋𝐈𝐘𝐄 𝐂𝐇𝐎𝐂𝐎𝐋𝐄𝐓 𝐋𝐀𝐈 𝐋𝐈𝐊𝐇𝐎 [ 𝐂𝐇𝐎𝐂𝐎𝐋𝐄𝐓 ] 🥺🥺🥺`, threadID, messageID);
   };

    if ((event.body.indexOf("😉") >= 0 )) {
     return api.sendMessage(`${name} ️𝐓𝐇𝐀𝐑𝐊𝐈 𝐈𝐍𝐒𝐀𝐀𝐍 𝐀𝐀𝐍𝐊𝐇 𝐊𝐘𝐎 𝐌𝐀𝐑 𝐑𝐄𝐇𝐄 𝐇𝐎 🥺🤟`, threadID, messageID);
   };

    if ((event.body.indexOf("😗") >= 0 )) {
     return api.sendMessage(`${name} 😗😗😗😗😗😗`, threadID, messageID);
   };

    if ((event.body.indexOf("😘") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐀𝐘𝐄 𝐇𝐀𝐘𝐄 𝐁𝐀𝐁𝐔 𝐔𝐌𝐀𝐀𝐇𝐇 𝐔𝐌𝐀𝐇𝐇𝐇 😘😘😘`, threadID, messageID);
   };

    if ((event.body.indexOf("🥰") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐀𝐘𝐑 𝐇𝐀𝐘𝐄 𝐋𝐀𝐆𝐓𝐀 𝐇𝐀𝐈 𝐓𝐔𝐌𝐊𝐎 𝐏𝐘𝐀𝐑 𝐇𝐎 𝐆𝐀𝐘𝐀 𝐌𝐄𝐑𝐈 𝐌𝐔𝐌𝐌𝐘 𝐍𝐀𝐈𝐑𝐀 𝐒𝐄🙈🙈`, threadID, messageID);
   };

    if ((event.body.indexOf("😍") >= 0 )) {
     return api.sendMessage(`${name} 𝐇𝐎𝐍𝐓𝐇𝐎 𝐏𝐀𝐑 𝐇𝐀𝐒𝐈 😁 𝐀𝐀𝐍𝐊𝐇𝐎 𝐌𝐄 𝐍𝐀𝐌𝐈 𝐇𝐀𝐈 🤭 𝐇𝐀𝐑 𝐒𝐀𝐍𝐒 𝐊𝐀𝐇𝐓𝐈 𝐇𝐀𝐈 🫤 𝐁𝐀𝐒 𝐓𝐄𝐑𝐈 𝐇𝐈 𝐊𝐌𝐈 𝐇𝐀𝐈 🤤👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥀") >= 0 )) {
     return api.sendMessage(`𝒀𝑬 𝑷𝑯𝑶𝑳 𝑴𝑬𝑹𝑬 𝑩𝑶𝑺𝑺 𝑺𝑯𝑨𝑨𝑵 𝑲𝑶 𝑫𝑶 𝑲𝑯𝑼𝑺𝑯 𝑯𝑶 𝑱𝑨𝒀𝑬 𝑮𝑨🥀🥀🥀🥀`, threadID, messageID);
   };

    if ((event.body.indexOf("🙃") >= 0 )) {
     return api.sendMessage(`${name} ️𝐎𝐋𝐄 𝐌𝐄𝐋𝐀 𝐁𝐀𝐁𝐔 𝐔𝐋𝐓𝐀 𝐇𝐎 𝐆𝐀𝐘𝐀 🧐✋`, threadID, messageID);
   };

    if ((event.body.indexOf("🙂") >= 0 )) {
     return api.sendMessage(`${name} 𝐇𝐀𝐘𝐄 𝐊𝐈𝐓𝐍𝐈 𝐌𝐀𝐒𝐎𝐎𝐌 𝐒𝐀𝐊𝐀𝐋 𝐇𝐀𝐈 𝐓𝐔𝐌𝐀𝐑𝐈 😝🤟`, threadID, messageID);
   };

    if ((event.body.indexOf("🥲") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐈𝐒𝐄 𝐌𝐔𝐇 𝐁𝐀𝐍𝐀𝐊𝐀𝐑 𝐌𝐀𝐓 𝐑𝐎 😒`, threadID, messageID);
   };

    if ((event.body.indexOf("🥹") >= 0 )) {
     return api.sendMessage(`${name} ️𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 𝐑𝐎𝐓𝐄 𝐍𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐄𝐓 𝐂𝐇𝐀𝐇𝐈𝐘𝐄  🙂 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈  🍫 𝐃𝐄𝐓𝐀 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎 ☞𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞☜`, threadID, messageID);
   };

    if ((event.body.indexOf("😋") >= 0 )) {
     return api.sendMessage(`${name} 𝐘𝐄 𝐓𝐎𝐓𝐄 𝐉𝐄𝐒𝐈 𝐉𝐔𝐁𝐀𝐍 𝐌𝐀𝐓 𝐃𝐈𝐊𝐇𝐀𝐎🤣😂🤣😂 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😛") >= 0 )) {
     return api.sendMessage(`${name} 𝐘𝐄 𝐆𝐀𝐍𝐃𝐈 𝐍𝐈𝐘𝐀𝐌 𝐒𝐄 𝐉𝐔𝐁𝐀𝐍 𝐍𝐀 𝐃𝐈𝐊𝐇𝐀 😂😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😝") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐀𝐍𝐊𝐇𝐄 𝐃𝐊𝐇𝐎𝐋 𝐎𝐑 𝐉𝐔𝐁𝐀𝐍 𝐀𝐍𝐃𝐄𝐑 𝐊𝐀𝐑 𝐕𝐀𝐑𝐍𝐀 𝐊𝐀𝐓 𝐋𝐔𝐍𝐆𝐀 🙊👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😜") >= 0 )) {
     return api.sendMessage(`${name} 𝐁𝐀𝐃𝐈 𝐌𝐀𝐒𝐓𝐈 𝐂𝐇𝐀𝐃𝐇 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈 𝐌𝐄𝐑𝐊𝐎 𝐄𝐊 𝐀𝐀𝐍𝐊𝐇 𝐁𝐀𝐍𝐃 𝐊𝐀𝐑 𝐊𝐄 𝐆𝐀𝐍𝐃𝐈 𝐉𝐔𝐁𝐀𝐍 𝐃𝐈𝐊𝐇𝐀 𝐑𝐄𝐇𝐄 𝐇𝐎 😂😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😇") >= 0 )) {
     return api.sendMessage(`${name} 😇😇😇😇😇😇`, threadID, messageID);
   };

    if ((event.body.indexOf("😊") >= 0 )) {
     return api.sendMessage(`${name} 😊😊😊😊😊😊`, threadID, messageID);
   };

    if ((event.body.indexOf("☺️") >= 0 )) {
     return api.sendMessage(`${name} ☺️☺️☺️☺️☺️☺️`, threadID, messageID);
   };

    if ((event.body.indexOf("😏") >= 0 )) {
     return api.sendMessage(`${name} 𝐂𝐇𝐀𝐋 𝐇𝐀𝐓 𝐌𝐄𝐑𝐀 𝐒𝐀𝐌𝐍𝐄 𝐌𝐀𝐓 𝐄𝐓𝐑𝐀 𝐓𝐄𝐃𝐇𝐀 𝐌𝐔𝐇 𝐋𝐄𝐊𝐀𝐑 😂🤟👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😌") >= 0 )) {
     return api.sendMessage(`${name} 😌😌😌😌😌😌`, threadID, messageID);
   };

    if ((event.body.indexOf("😔") >= 0 )) {
     return api.sendMessage(`${name} 𝐁𝐀𝐁𝐔 𝐊𝐘𝐀 𝐇𝐔𝐀 𝐒𝐀𝐃 𝐊𝐘𝐎 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐉𝐀𝐀𝐍 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😑") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐈𝐒𝐄 𝐊𝐘𝐀 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀 𝐊𝐈 𝐌𝐔𝐇 𝐊𝐄 𝐒𝐀𝐓𝐇 𝐀𝐀𝐍𝐊𝐇𝐄 𝐁𝐇𝐈 𝐁𝐀𝐍𝐃 𝐇𝐎 𝐆𝐀𝐘𝐈 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😐") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐁 𝐁𝐎𝐋 𝐍𝐀 😂😂😂`, threadID, messageID);
   };

    if ((event.body.indexOf("😶") >= 0 )) {
     return api.sendMessage(`${name} ️𝐎𝐘𝐄 𝐓𝐄𝐑𝐀 𝐋𝐈𝐏𝐒 👄 𝐊𝐀𝐇𝐀 𝐇𝐀𝐈 🤔👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🫡") >= 0 )) {
     return api.sendMessage(`${name} 🫡🫡🫡🫡🫡🫡`, threadID, messageID);
   };

    if ((event.body.indexOf("🤔") >= 0 )) {
     return api.sendMessage(`${name} 𝐊𝐘𝐀 𝐒𝐇𝐎𝐂𝐇 𝐑𝐄𝐇𝐄 𝐇𝐎 🤨👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤫") >= 0 )) {
     return api.sendMessage(`${name} 𝐓𝐄𝐑𝐈 𝐘𝐄 𝐔𝐍𝐆𝐋𝐈 𝐓𝐄𝐑𝐄 𝐇𝐈 𝐍𝐀𝐊 𝐌𝐄 𝐃𝐄 𝐃𝐈𝐘𝐀 𝐃𝐄𝐊𝐇𝐎 😒😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🫢") >= 0 )) {
     return api.sendMessage(`${name} 🫢🫢🫢🫢🫢🫢`, threadID, messageID);
   };

    if ((event.body.indexOf("🤭") >= 0 )) {
     return api.sendMessage(`${name} 🤭🤭🤭🤭🤭🤭`, threadID, messageID);
   };

    if ((event.body.indexOf("🥱") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐀𝐉𝐀 𝐁𝐄𝐁𝐘 𝐌𝐄𝐋𝐄 𝐏𝐀𝐒 𝐒𝐎 𝐉𝐀 🙊😜👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤗") >= 0 )) {
     return api.sendMessage(`${name} 𝐏𝐄𝐇𝐋𝐄 𝐍𝐀𝐇𝐀 𝐊𝐀𝐑 𝐀𝐀 😂`, threadID, messageID);
   };

    if ((event.body.indexOf("🫣") >= 0 )) {
     return api.sendMessage(`${name} 🫣🫣🫣🫣🫣🫣`, threadID, messageID);
   };

    if ((event.body.indexOf("😱") >= 0 )) {
     return api.sendMessage(`${name} 𝐊𝐘𝐀 𝐇𝐔𝐀 😱 𝐒𝐇𝐄𝐇𝐍𝐒𝐇𝐀𝐇 𝐃𝐄𝐊𝐇 𝐋𝐈𝐘𝐀 𝐊𝐘𝐀  😳👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤨") >= 0 )) {
     return api.sendMessage(`${name} ️️𝐄𝐓𝐍𝐀 𝐌𝐀𝐓 𝐒𝐎𝐂𝐇𝐎 𝐓𝐇𝐀𝐑𝐊𝐈 𝐈𝐍𝐒𝐀𝐀𝐍 𝐓𝐄𝐑𝐈 𝐕𝐀𝐋𝐈 𝐊𝐎 𝐌𝐄 𝐁𝐇𝐀𝐆𝐀 𝐋𝐄 𝐉𝐀𝐔𝐍𝐆𝐀 🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("🧐") >= 0 )) {
     return api.sendMessage(`${name} 𝐓𝐔 𝐇𝐀𝐓 𝐌𝐄 𝐃𝐄𝐊𝐇𝐓𝐀 𝐇𝐔 `, threadID, messageID);
   };

    if ((event.body.indexOf("😒") >= 0 )) {
     return api.sendMessage(`${name} ️️ 𝐓𝐈𝐑𝐂𝐇𝐇𝐈 𝐍𝐀𝐉𝐑𝐈𝐘𝐀 𝐌𝐎𝐑𝐈 𝐇𝐀𝐘 𝐇𝐀𝐘 𝐇𝐀𝐘 🙈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙄") >= 0 )) {
     return api.sendMessage(`${name} ️𝐔𝐏𝐀𝐑 𝐊𝐘𝐀 𝐃𝐄𝐊𝐇 𝐑𝐄𝐇𝐄 𝐇𝐎 𝐌𝐄𝐑𝐈 𝐉𝐀𝐀𝐍 🙂🤟🙄`, threadID, messageID);
   };

    if ((event.body.indexOf("😮‍💨") >= 0 )) {
     return api.sendMessage(`${name} 😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨😮‍💨`, threadID, messageID);
   };

    if ((event.body.indexOf("😤") >= 0 )) {
     return api.sendMessage(`${name} ️🥺 𝐌𝐄 𝐓𝐎 𝐒𝐈𝐑𝐅 𝐌𝐀𝐉𝐀𝐊 𝐊𝐀𝐑 𝐑𝐀𝐁𝐀 𝐓𝐇𝐀 🥺. 𝐆𝐔𝐒𝐒𝐀 𝐌𝐀𝐓 𝐊𝐀𝐑𝐎. 𝐄𝐊 𝐂𝐇𝐔𝐌𝐌𝐘 😘 𝐋𝐎 𝐎𝐑 𝐒𝐀𝐍𝐓 𝐑𝐄𝐇𝐎 𝐌𝐄𝐑𝐈 𝐁𝐀𝐁𝐔 😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😠") >= 0 )) {
     return api.sendMessage(`${name} 𝐁𝐀𝐁𝐔 𝐆𝐔𝐒𝐒𝐀 𝐍𝐇𝐈 𝐊𝐀𝐑𝐓𝐄 𝐍𝐀 𝐘𝐄 𝐔𝐌𝐌𝐀𝐀𝐀𝐇𝐇 𝐀𝐁 𝐒𝐀𝐍𝐓 𝐇𝐎 𝐉𝐀𝐎  😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😡") >= 0 )) {
     return api.sendMessage(`${name} 𝐁𝐀𝐁𝐔 𝐆𝐔𝐒𝐒𝐀 𝐍𝐇𝐈 𝐊𝐀𝐑𝐓𝐄 𝐍𝐀 𝐘𝐄 𝐔𝐌𝐌𝐀𝐀𝐀𝐇𝐇 𝐀𝐁 𝐒𝐀𝐍𝐓 𝐇𝐎 𝐉𝐀𝐎  😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤬") >= 0 )) {
     return api.sendMessage(`${name} 𝐁𝐀𝐁𝐔 𝐆𝐔𝐒𝐒𝐀 𝐍𝐇𝐈 𝐊𝐀𝐑𝐓𝐄 𝐍𝐀 𝐘𝐄 𝐔𝐌𝐌𝐀𝐀𝐀𝐇𝐇 𝐀𝐁 𝐒𝐀𝐍𝐓 𝐇𝐎 𝐉𝐀𝐎 😘😘👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥺") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐑𝐄 𝐁𝐀𝐁𝐔 𝐑𝐎𝐓𝐄 𝐍𝐇𝐈 𝐂𝐇𝐎𝐂𝐎𝐋𝐄𝐓 𝐂𝐇𝐀𝐇𝐈𝐘𝐄  🙂 𝐑𝐔𝐊𝐎 𝐌𝐄 𝐀𝐁𝐇𝐈  🍫 𝐃𝐄𝐓𝐀 𝐇𝐔 𝐋𝐈𝐊𝐇𝐎 ☞𝐂𝐡𝐨𝐜𝐨𝐥𝐚𝐭𝐞☜🍫`, threadID, messageID);
   };

    if ((event.body.indexOf("😟") >= 0 )) {
     return api.sendMessage(`${name} 😟😟😟😟😟😟`, threadID, messageID);
   };

    if ((event.body.indexOf("😥") >= 0 )) {
     return api.sendMessage(`${name} ️ 𝐊𝐘𝐀 𝐇𝐔𝐀 𝐒𝐀𝐃 𝐊𝐘𝐎 𝐇𝐎 𝐌𝐔𝐉𝐇𝐄 𝐁𝐀𝐓𝐀𝐎 𝐁𝐀𝐁𝐔 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😢") >= 0 )) {
     return api.sendMessage(`${name} 𝐓𝐀 𝐇𝐔𝐀 𝐌𝐀𝐘 𝐋𝐎𝐕𝐄 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("☹️") >= 0 )) {
     return api.sendMessage(`${name}  ☹️☹️☹️☹️`, threadID, messageID);
   };

    if ((event.body.indexOf("🙁") >= 0 )) {
     return api.sendMessage(`${name} Aww ☹️`, threadID, messageID);
   };

    if ((event.body.indexOf("🫤") >= 0 )) {
     return api.sendMessage(`${name} 🫤🫤🫤🫤🫤🫤`, threadID, messageID);
   };

    if ((event.body.indexOf("😕") >= 0 )) {
     return api.sendMessage(`${name} 😕😕😕😕😕😕`, threadID, messageID);
   };

    if ((event.body.indexOf("🤐") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐁 𝐘𝐄𝐑𝐈 𝐀𝐀𝐕𝐀𝐉 𝐀𝐀𝐈 𝐍𝐀 𝐓𝐎 𝐂𝐇𝐀𝐏𝐏𝐀𝐋 𝐅𝐄𝐊 𝐊𝐄 𝐌𝐀𝐑𝐔𝐍𝐆𝐀 😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😰") >= 0 )) {
     return api.sendMessage(`${name} 😰😰😰😰😰😰`, threadID, messageID);
   };

    if ((event.body.indexOf("😨") >= 0 )) {
     return api.sendMessage(`${name} 😨😨😨😨😨😨`, threadID, messageID);
   };

    if ((event.body.indexOf("😧") >= 0 )) {
     return api.sendMessage(`${name} 😧😧😧😧😧😧`, threadID, messageID);
   };

    if ((event.body.indexOf("😦") >= 0 )) {
     return api.sendMessage(`${name} 😦😦😦😦😦😦`, threadID, messageID);
   };

    if ((event.body.indexOf("😮") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐁𝐄 𝐌𝐔𝐇 𝐁𝐀𝐍𝐃 𝐊𝐀𝐑 𝐌𝐀𝐂𝐇𝐇𝐀𝐑 𝐆𝐇𝐔𝐒 𝐉𝐀𝐘𝐄𝐆𝐀 😂😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😯") >= 0 )) {
     return api.sendMessage(`${name} 😯😯😯😯😯😯`, threadID, messageID);
   };

    if ((event.body.indexOf("😲") >= 0 )) {
     return api.sendMessage(`${name} 😲😲😲😲😲😲`, threadID, messageID);
   };

    if ((event.body.indexOf("😳") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐈𝐒𝐄 𝐀𝐀𝐍𝐊𝐇𝐄 𝐅𝐀𝐃 𝐅𝐀𝐃 𝐊𝐄 𝐊𝐘𝐀 𝐃𝐄𝐊𝐇 𝐑𝐄𝐇𝐄 𝐇𝐎 🤔👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤯") >= 0 )) {
     return api.sendMessage(`${name} 𝐓𝐄𝐑𝐄 𝐒𝐈𝐑 𝐏𝐑 𝐁𝐎𝐌 𝐊𝐈𝐒𝐍𝐄 𝐅𝐎𝐃𝐀 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😬") >= 0 )) {
     return api.sendMessage(`${name} 😬😬😬😬😬😬`, threadID, messageID);
   };

    if ((event.body.indexOf("😓") >= 0 )) {
     return api.sendMessage(`${name} 😓😓😓😓😓😓`, threadID, messageID);
   };

    if ((event.body.indexOf("😞") >= 0 )) {
     return api.sendMessage(`${name} 😞😞😞😞😞😞`, threadID, messageID);
   };

    if ((event.body.indexOf("😖") >= 0 )) {
     return api.sendMessage(`${name} 😖😖😖😖😖😖`, threadID, messageID);
   };

    if ((event.body.indexOf("😣") >= 0 )) {
     return api.sendMessage(`${name} 😣😣😣😣😣😣`, threadID, messageID);
   };

    if ((event.body.indexOf("😩") >= 0 )) {
     return api.sendMessage(`${name} 😩😩😩😩😩😩`, threadID, messageID);
   };

    if ((event.body.indexOf("😫") >= 0 )) {
     return api.sendMessage(`${name} 😫😫😫😫😫😫`, threadID, messageID);
   };

    if ((event.body.indexOf("😵") >= 0 )) {
     return api.sendMessage(`${name} 😵😵😵😵😵😵`, threadID, messageID);
   };

    if ((event.body.indexOf("😵‍💫") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫥") >= 0 )) {
     return api.sendMessage(`${name} 🫥🫥🫥🫥🫥🫥`, threadID, messageID);
   };

    if ((event.body.indexOf("😴") >= 0 )) {
     return api.sendMessage(`${name} 𝐒𝐎 𝐉𝐀 𝐁𝐀𝐁𝐔 𝐁𝐇𝐎𝐎𝐓 𝐀𝐀 𝐉𝐀𝐘𝐄𝐍𝐆𝐄 🤣🤣🤣👌`, threadID, messageID);
   };

    if ((event.body.indexOf("😪") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐁𝐄 𝐓𝐄𝐑𝐈 𝐑𝐄𝐓 𝐍𝐈𝐊𝐀𝐋 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤤") >= 0 )) {
     return api.sendMessage(`${name} 𝐋𝐀𝐑 𝐌𝐀𝐓 𝐓𝐀𝐏𝐊𝐀 𝐌𝐄𝐊𝐎 𝐔𝐋𝐓𝐈 𝐀𝐀 𝐑𝐀𝐇𝐈 𝐇𝐀𝐈 🤮🤢👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🌛") >= 0 )) {
     return api.sendMessage(`${name} 🌛🌛🌛🌛🌛🌛`, threadID, messageID);
   };

    if ((event.body.indexOf("🌜") >= 0 )) {
     return api.sendMessage(`${name} 🌜🌜🌜🌜🌜🌜`, threadID, messageID);
   };

    if ((event.body.indexOf("🌚") >= 0 )) {
     return api.sendMessage(`${name} 🌚🌚🌚🌚🌚🌚`, threadID, messageID);
   };

    if ((event.body.indexOf("🌝") >= 0 )) {
     return api.sendMessage(`${name} 🌝🌝🌝🌝🌝🌝`, threadID, messageID);
   };

    if ((event.body.indexOf("🌞") >= 0 )) {
     return api.sendMessage(`${name} 🌞🌞🌞🌞🌞🌞`, threadID, messageID);
   };

    if ((event.body.indexOf("🫠") >= 0 )) {
     return api.sendMessage(`${name} 🫠🫠🫠🫠🫠🫠`, threadID, messageID);
   };

    if ((event.body.indexOf("😶‍🌫️") >= 0 )) {
     return api.sendMessage(`${name} 😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️😶‍🌫️`, threadID, messageID);
   };

    if ((event.body.indexOf("🥴") >= 0 )) {
     return api.sendMessage(`${name} 𝐒𝐀𝐒𝐓𝐀 𝐍𝐀𝐒𝐇𝐀 𝐊𝐀𝐑 𝐋𝐈𝐘𝐀 𝐋𝐀𝐆𝐓𝐀 𝐇𝐀𝐈 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥵") >= 0 )) {
     return api.sendMessage(`${name}  🥵🔥 𝐇𝐀𝐘𝐄 𝐆𝐀𝐑𝐌𝐈 🥵👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🥶") >= 0 )) {
     return api.sendMessage(`${name} 𝐊𝐈𝐓𝐍𝐈 𝐓𝐇𝐀𝐍𝐃𝐈 𝐇𝐄 𝐑𝐄 𝐁𝐀𝐁𝐀 🥶🥶👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤢") >= 0 )) {
     return api.sendMessage(`${name} 🤢🤢🤢🤢🤢🤢`, threadID, messageID);
   };

    if ((event.body.indexOf("🤮") >= 0 )) {
     return api.sendMessage(`${name} 𝐊𝐎𝐍 𝐒𝐀 𝐌𝐎𝐍𝐓𝐇 𝐂𝐇𝐀𝐋 𝐑𝐀𝐇𝐀 𝐇𝐀𝐈 😂👈 `, threadID, messageID);
   };

    if ((event.body.indexOf("🤧") >= 0 )) {
     return api.sendMessage(`${name} 𝐒𝐇𝐀𝐑𝐃𝐈 𝐇𝐎 𝐆𝐘𝐈 𝐊𝐘𝐀 𝐁𝐀𝐁𝐔 🤧👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤒") >= 0 )) {
     return api.sendMessage(`${name} 𝐅𝐄𝐕𝐀𝐑 𝐇𝐎 𝐆𝐀𝐘𝐀 𝐁𝐀𝐁𝐔 𝐀𝐀𝐎 𝐃𝐀𝐕𝐀 💊💉💉 𝐃𝐄𝐓𝐀 𝐇𝐔 👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤕") >= 0 )) {
     return api.sendMessage(`${name} 🤕🤕🤕🤕🤕🤕`, threadID, messageID);
   };

    if ((event.body.indexOf("😷") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐑𝐄 𝐉𝐀 𝐍𝐀 𝐌𝐄𝐊𝐎 𝐁𝐇𝐈 𝐁𝐈𝐌𝐀𝐑 𝐊𝐀𝐑𝐍𝐀 𝐇𝐀𝐈 𝐊𝐘𝐀 🥺👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤠") >= 0 )) {
     return api.sendMessage(`${name} 🤠🤠🤠🤠🤠🤠`, threadID, messageID);
   };

    if ((event.body.indexOf("🤑") >= 0 )) {
     return api.sendMessage(`${name} 🤑🤑🤑🤑🤑🤑`, threadID, messageID);
   };

    if ((event.body.indexOf("😎") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐍𝐃𝐇𝐄 𝐇𝐎 𝐊𝐘𝐀 𝐊𝐀𝐋𝐀 𝐂𝐇𝐀𝐒𝐇𝐌𝐀 𝐋𝐀𝐆𝐀 𝐊𝐄 𝐊𝐘𝐎 𝐆𝐇𝐔𝐌 𝐑𝐄𝐇𝐄 𝐇𝐎 😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤓") >= 0 )) {
     return api.sendMessage(`${name} 🤓🤓🤓🤓🤓🤓`, threadID, messageID);
   };

    if ((event.body.indexOf("🥸") >= 0 )) {
     return api.sendMessage(`${name} 🥸🥸🥸🥸🥸🥸`, threadID, messageID);
   };

    if ((event.body.indexOf("🤥") >= 0 )) {
     return api.sendMessage(`${name} 𝐓𝐄𝐑𝐈 𝐍𝐀𝐊 𝐄𝐓𝐍𝐈 𝐋𝐀𝐌𝐁𝐈 𝐇𝐀𝐈 𝐔𝐒𝐊𝐉 𝐓𝐎 𝐉𝐀𝐑𝐔𝐑𝐀𝐓 𝐁𝐇𝐈 𝐍𝐇𝐈 𝐏𝐀𝐃𝐄𝐆𝐈 😂🙊👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🤡") >= 0 )) {
     return api.sendMessage(`${name} 🤡🤡🤡🤡🤡🤡`, threadID, messageID);
   };

    if ((event.body.indexOf("👻") >= 0 )) {
     return api.sendMessage(`${name} 👻👻👻👻👻👻`, threadID, messageID);
   };

    if ((event.body.indexOf("💩") >= 0 )) {
     return api.sendMessage(`${name} 💩💩💩💩💩💩`, threadID, messageID);
   };

    if ((event.body.indexOf("👽") >= 0 )) {
     return api.sendMessage(`${name} 👽👽👽👽👽👽`, threadID, messageID);
   };

    if ((event.body.indexOf("🤖") >= 0 )) {
     return api.sendMessage(`${name} शर्म नहीं आती चिढ़ा रहे हो मुझे 🙁👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🎃") >= 0 )) {
     return api.sendMessage(`${name} 🎃🎃🎃🎃🎃🎃`, threadID, messageID);
   };

    if ((event.body.indexOf("😈") >= 0 )) {
     return api.sendMessage(`${name} 😈😈😈😈😈😈`, threadID, messageID);
   };

    if ((event.body.indexOf("👿") >= 0 )) {
     return api.sendMessage(`${name} 👿👿👿👿👿👿`, threadID, messageID);
   };

    if ((event.body.indexOf("👹") >= 0 )) {
     return api.sendMessage(`${name} 👹👹👹👹👹👹`, threadID, messageID);
   };

    if ((event.body.indexOf("👺") >= 0 )) {
     return api.sendMessage(`${name} 👺👺👺👺👺👺`, threadID, messageID);
   };

    if ((event.body.indexOf("🔥") >= 0 )) {
     return api.sendMessage(`${name} 🔥🔥🔥🔥🔥🔥`, threadID, messageID);
   };

    if ((event.body.indexOf("💫") >= 0 )) {
     return api.sendMessage(`${name} 💫💫💫💫💫💫`, threadID, messageID);
   };

    if ((event.body.indexOf("⭐") >= 0 )) {
     return api.sendMessage(`${name} ⭐⭐⭐`, threadID, messageID);
   };

    if ((event.body.indexOf("🌟") >= 0 )) {
     return api.sendMessage(`${name} 🌟🌟🌟🌟🌟🌟`, threadID, messageID);
   };

    if ((event.body.indexOf("✨") >= 0 )) {
     return api.sendMessage(`${name} ✨✨✨`, threadID, messageID);
   };

    if ((event.body.indexOf("💥") >= 0 )) {
     return api.sendMessage(`${name} 💥💥💥💥💥💥`, threadID, messageID);
   };

    if ((event.body.indexOf("💯") >= 0 )) {
     return api.sendMessage(`${name} 💯💯💯`, threadID, messageID);
   };

    if ((event.body.indexOf("💢") >= 0 )) {
     return api.sendMessage(`${name} 💢💢💢`, threadID, messageID);
   };

    if ((event.body.indexOf("💨") >= 0 )) {
     return api.sendMessage(`${name} 💨💨💨💨💨💨`, threadID, messageID);
   };

    if ((event.body.indexOf("💦") >= 0 )) {
     return api.sendMessage(`${name} 💦💦💦💦💦💦`, threadID, messageID);
   };

    if ((event.body.indexOf("🫧") >= 0 )) {
     return api.sendMessage(`${name} 🫧🫧🫧🫧🫧🫧`, threadID, messageID);
   };

    if ((event.body.indexOf("💤") >= 0 )) {
     return api.sendMessage(`${name} 💤💤💤`, threadID, messageID);
   };

    if ((event.body.indexOf("🕳️") >= 0 )) {
     return api.sendMessage(`${name} 🕳️🕳️🕳️🕳️🕳️🕳️`, threadID, messageID);
   };

    if ((event.body.indexOf("🎉") >= 0 )) {
     return api.sendMessage(`${name} 🎉🎉🎉🎉🎉🎉`, threadID, messageID);
   };

    if ((event.body.indexOf("🎊") >= 0 )) {
     return api.sendMessage(`${name} 🎊🎊🎊🎊🎊🎊`, threadID, messageID);
   };

    if ((event.body.indexOf("🙈") >= 0 )) {
     return api.sendMessage(`${name} 𝐀𝐀𝐘𝐄 𝐇𝐀𝐘𝐄 𝐁𝐀𝐁𝐔 𝐒𝐇𝐀𝐑𝐌𝐀 𝐆𝐀𝐘𝐄 🙈🙉🙊👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙉") >= 0 )) {
     return api.sendMessage(`${name} 🙉🙉🙉🙉🙉🙉`, threadID, messageID);
   };

    if ((event.body.indexOf("🙊") >= 0 )) {
     return api.sendMessage(`${name} 🙊🙊🙊🙊🙊🙊`, threadID, messageID);
   };

    if ((event.body.indexOf("😺") >= 0 )) {
     return api.sendMessage(`${name} 😺😺😺😺😺😺`, threadID, messageID);
   };

    if ((event.body.indexOf("😸") >= 0 )) {
     return api.sendMessage(`${name} 😸😸😸😸😸😸`, threadID, messageID);
   };

    if ((event.body.indexOf("😹") >= 0 )) {
     return api.sendMessage(`${name} बिल्ली जैसे क्यू हस रहे हो😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("😻") >= 0 )) {
     return api.sendMessage(`${name} 😻😻😻😻😻😻`, threadID, messageID);
   };

    if ((event.body.indexOf("😼") >= 0 )) {
     return api.sendMessage(`${name} 😼😼😼😼😼😼`, threadID, messageID);
   };

    if ((event.body.indexOf("😽") >= 0 )) {
     return api.sendMessage(`${name} 😽😽😽😽😽😽`, threadID, messageID);
   };

    if ((event.body.indexOf("🙀") >= 0 )) {
     return api.sendMessage(`${name} 🙀🙀🙀🙀🙀🙀`, threadID, messageID);
   };

    if ((event.body.indexOf("😿") >= 0 )) {
     return api.sendMessage(`${name} 😿😿😿😿😿😿`, threadID, messageID);
   };

    if ((event.body.indexOf("😾") >= 0 )) {
     return api.sendMessage(`${name} 😾😾😾😾😾😾`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️") >= 0 )) {
     return api.sendMessage(`${name} ❤️❤️❤️❤️❤️❤️`, threadID, messageID);
   };

    if ((event.body.indexOf("🧡") >= 0 )) {
     return api.sendMessage(`${name} 🧡🧡🧡🧡🧡🧡`, threadID, messageID);
   };

    if ((event.body.indexOf("💛") >= 0 )) {
     return api.sendMessage(`${name} 💛💛💛💛💛💛`, threadID, messageID);
   };

    if ((event.body.indexOf("💚") >= 0 )) {
     return api.sendMessage(`${name} 💚💚💚💚💚💚`, threadID, messageID);
   };

    if ((event.body.indexOf("💙") >= 0 )) {
     return api.sendMessage(`${name} 💙💙💙💙💙💙`, threadID, messageID);
   };

    if ((event.body.indexOf("💜") >= 0 )) {
     return api.sendMessage(`${name} 💜💜💜💜💜💜`, threadID, messageID);
   };

    if ((event.body.indexOf("🤎") >= 0 )) {
     return api.sendMessage(`${name} 🤎🤎🤎🤎🤎🤎`, threadID, messageID);
   };

    if ((event.body.indexOf("🖤") >= 0 )) {
     return api.sendMessage(`${name} 🖤🖤🖤🖤🖤🖤`, threadID, messageID);
   };

    if ((event.body.indexOf("🤍") >= 0 )) {
     return api.sendMessage(`${name} 🤍🤍🤍🤍🤍🤍`, threadID, messageID);
   };

    if ((event.body.indexOf("♥️") >= 0 )) {
     return api.sendMessage(`${name} ♥️♥️♥️`, threadID, messageID);
   };

    if ((event.body.indexOf("💘") >= 0 )) {
     return api.sendMessage(`${name} 💘💘💘💘💘💘`, threadID, messageID);
   };

    if ((event.body.indexOf("💝") >= 0 )) {
     return api.sendMessage(`${name} 💝💝💝💝💝💝`, threadID, messageID);
   };

    if ((event.body.indexOf("💖") >= 0 )) {
     return api.sendMessage(`${name} 💖💖💖💖💖💖`, threadID, messageID);
   };

    if ((event.body.indexOf("💗") >= 0 )) {
     return api.sendMessage(`${name} 💗💗💗💗💗💗`, threadID, messageID);
   };

    if ((event.body.indexOf("💓") >= 0 )) {
     return api.sendMessage(`${name} 💓💓💓💓💓💓`, threadID, messageID);
   };

    if ((event.body.indexOf("💞") >= 0 )) {
     return api.sendMessage(`${name} 💞💞💞💞💞💞`, threadID, messageID);
   };

    if ((event.body.indexOf("💕") >= 0 )) {
     return api.sendMessage(`${name} 💕💕💕💕💕💕`, threadID, messageID);
   };

    if ((event.body.indexOf("💌") >= 0 )) {
     return api.sendMessage(`${name} 💌💌💌💌💌💌`, threadID, messageID);
   };

    if ((event.body.indexOf("💟") >= 0 )) {
     return api.sendMessage(`${name} 💟💟💟💟💟💟`, threadID, messageID);
   };

    if ((event.body.indexOf("❣️") >= 0 )) {
     return api.sendMessage(`${name} ❣️❣️❣️❣️`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️‍🩹") >= 0 )) {
     return api.sendMessage(`${name} ❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹❤️‍🩹`, threadID, messageID);
   };

    if ((event.body.indexOf("💔") >= 0 )) {
     return api.sendMessage(`${name} 💔💔💔💔💔💔`, threadID, messageID);
   };

    if ((event.body.indexOf("❤️‍🔥") >= 0 )) {
     return api.sendMessage(`${name} ❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥❤️‍🔥`, threadID, messageID);
   };

    if ((event.body.indexOf("💋") >= 0 )) {
     return api.sendMessage(`${name} 💋💋💋💋💋💋`, threadID, messageID);
   };

    if ((event.body.indexOf("🫂") >= 0 )) {
     return api.sendMessage(`${name} 🫂🫂🫂🫂🫂🫂`, threadID, messageID);
   };

    if ((event.body.indexOf("👥") >= 0 )) {
     return api.sendMessage(`${name} 👥👥👥👥👥👥`, threadID, messageID);
   };

    if ((event.body.indexOf("👤") >= 0 )) {
     return api.sendMessage(`${name} 👤👤👤👤👤👤`, threadID, messageID);
   };

    if ((event.body.indexOf("🗣️") >= 0 )) {
     return api.sendMessage(`${name} 🗣️🗣️🗣️🗣️🗣️🗣️`, threadID, messageID);
   };

    if ((event.body.indexOf("👣") >= 0 )) {
     return api.sendMessage(`${name} 👣👣👣👣👣👣`, threadID, messageID);
   };

    if ((event.body.indexOf("🧠") >= 0 )) {
     return api.sendMessage(`${name} 🧠🧠🧠🧠🧠🧠`, threadID, messageID);
   };

    if ((event.body.indexOf("🫀") >= 0 )) {
     return api.sendMessage(`${name} 🫀🫀🫀🫀🫀🫀`, threadID, messageID);
   };

    if ((event.body.indexOf("🫁") >= 0 )) {
     return api.sendMessage(`${name} 🫁🫁🫁🫁🫁🫁`, threadID, messageID);
   };

    if ((event.body.indexOf("🩸") >= 0 )) {
     return api.sendMessage(`${name} 🩸🩸🩸🩸🩸🩸`, threadID, messageID);
   };

    if ((event.body.indexOf("🦠") >= 0 )) {
     return api.sendMessage(`${name} 🦠🦠🦠🦠🦠🦠`, threadID, messageID);
   };

    if ((event.body.indexOf("🦷") >= 0 )) {
     return api.sendMessage(`${name} 🦷🦷🦷🦷🦷🦷`, threadID, messageID);
   };

    if ((event.body.indexOf("🦴") >= 0 )) {
     return api.sendMessage(`${name} 🦴🦴🦴🦴🦴🦴`, threadID, messageID);
   };

    if ((event.body.indexOf("☠️") >= 0 )) {
     return api.sendMessage(`${name} ☠️☠️☠️`, threadID, messageID);
   };

    if ((event.body.indexOf("💀") >= 0 )) {
     return api.sendMessage(`${name} 💀💀💀💀💀💀`, threadID, messageID);
   };

    if ((event.body.indexOf("👀") >= 0 )) {
     return api.sendMessage(`${name} 👀👀👀👀👀👀`, threadID, messageID);
   };

    if ((event.body.indexOf("👁️") >= 0 )) {
     return api.sendMessage(`${name} 👁️👁️👁️👁️👁️👁️`, threadID, messageID);
   };

    if ((event.body.indexOf("👄") >= 0 )) {
     return api.sendMessage(`${name} 👄👄👄👄👄👄`, threadID, messageID);
   };

    if ((event.body.indexOf("🫦") >= 0 )) {
     return api.sendMessage(`${name} 🫦🫦🫦🫦🫦🫦`, threadID, messageID);
   };

    if ((event.body.indexOf("👅") >= 0 )) {
     return api.sendMessage(`${name} 👅👅👅👅👅👅`, threadID, messageID);
   };

    if ((event.body.indexOf("👃") >= 0 )) {
     return api.sendMessage(`${name} तुम्हारी नाक इतनी लंबी क्यू है।😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👂") >= 0 )) {
     return api.sendMessage(`${name} ऐसे कान फाड़ के क्या सुन रहे हो😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🦻") >= 0 )) {
     return api.sendMessage(`${name} बहरे हो गए हो क्या जो कान में मशीन लगा के सुन रहे हो😂😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🦶") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🦵") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🦿") >= 0 )) {
     return api.sendMessage(`${name} 🦿🦿🦿🦿🦿🦿`, threadID, messageID);
   };

    if ((event.body.indexOf("🦾") >= 0 )) {
     return api.sendMessage(`${name} 🦾🦾🦾🦾🦾🦾`, threadID, messageID);
   };

    if ((event.body.indexOf("💪") >= 0 )) {
     return api.sendMessage(`${name} आ जाओ हो जाए 2,2 हाथ 💪💪`, threadID, messageID);
   };

    if ((event.body.indexOf("👍") >= 0 )) {
     return api.sendMessage(`${name} ठेंगा किसे दिखा रहे हो😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👎") >= 0 )) {
     return api.sendMessage(`${name} तुमने कभी बताया नही की तुम लूजर हो😂😂👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👏") >= 0 )) {
     return api.sendMessage(`${name} तालियां क्यू बजा रहे हो 🤔👈 `, threadID, messageID);
   };

    if ((event.body.indexOf("🫶") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🙌") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👐") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤲") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤝") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤜") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤛") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("✊") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👊") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫳") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫴") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫱") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫲") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤚") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👋") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🖐️") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("✋") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🖖") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤟") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤘") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("✌️") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤞") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🫰") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤙") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤌") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("🤏") >= 0 )) {
     return api.sendMessage(`${name} ittu🤏🤏sa sharam kar beshram 😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("👌") >= 0 )) {
     return api.sendMessage(`${name} सुपर 👌👌`, threadID, messageID);
   };

    if ((event.body.indexOf("🖕") >= 0 )) {
     return api.sendMessage(`${name} ye tu khud ki gand me dalo😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("☝️") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👆") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👇") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };

    if ((event.body.indexOf("👉") >= 0 )) {
     return api.sendMessage(`${name} 😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫😵‍💫`, threadID, messageID);
   };
    if ((event.body.indexOf("👈") >= 0 )) {
     return api.sendMessage(`${name} `, threadID, messageID);
   };

    if ((event.body.indexOf("🫵") >= 0 )) {
     return api.sendMessage(`${name} उंगली किसे दिखा रहे हो🥵👈`, threadID, messageID);
   };

    if ((event.body.indexOf("✍️") >= 0 )) {
     return api.sendMessage(`${name} ✍️✍️✍️✍️✍️✍️`, threadID, messageID);
   };

    if ((event.body.indexOf("🤳") >= 0 )) {
     return api.sendMessage(`${name} शरम नही आती अकेले अकेले सेल्फी ले रहे हो😒👈`, threadID, messageID);
   };

    if ((event.body.indexOf("🙏") >= 0 )) {
     return api.sendMessage(`${name} नमस्ते 🙏🙏`, threadID, messageID);
   };

    if ((event.body.indexOf("💅") >= 0 )) {
     return api.sendMessage(`${name} 💅💅💅💅💅💅`, threadID, messageID);
   };

    if ((event.body.indexOf("😃") >= 0 )) {
     return api.sendMessage(`${name} 😃😃😃😃😃😃`, threadID, messageID);
   };

    if ((event.body.indexOf("😙") >= 0 )) {
     return api.sendMessage(`${name} 😙😙😙😙😙😙`, threadID, messageID);
   };

    if ((event.body.indexOf("😚") >= 0 )) {
     return api.sendMessage(`${name} 😚😚😚😚😚😚`, threadID, messageID);
   };

    if ((event.body.indexOf("🤩") >= 0 )) {
     return api.sendMessage(`${name} सबकी आंखे होती तेरी तो सितारे है 🙂`, threadID, messageID);
   };

    if ((event.body.indexOf("🤪") >= 0 )) {
     return api.sendMessage(`${name} ये अजीबो गरीब मुह ना बना 😂 कार्टून 🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("kaise ho") >= 0 )) {
     return api.sendMessage(`${name} मैं अच्छा हूं बाबू तुम कैसे हो🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("thank") >= 0 )) {
     return api.sendMessage(`${name} मैं हूं ही इतना अच्छा की सब  लोग तारीफ करते है मेरी🥰🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("kese ho") >= 0 )) {
     return api.sendMessage(`${name} मैं ठीक हूं बाबू तुम कैसे हो🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("Koi hai") >= 0 )) {
     return api.sendMessage(`${name} मैं हूं ना बाबू बोलो🥰👈`, threadID, messageID);
   };

    if ((event.body.indexOf("call") >= 0 )) {
     return api.sendMessage(`${name} 🌸𝐁𝐞𝐛𝐲 𝐌𝐞 𝐓𝐨 𝐁𝐨𝐭 𝐇𝐮 𝐊𝐞𝐬𝐞 𝐀𝐚𝐮 𝐂𝐚𝐥𝐥 𝐏𝐚𝐫 🥺🥺🥺`, threadID, messageID);
   };

    if ((event.body.indexOf("Call") >= 0 )) {
     return api.sendMessage(`${name} 🌸𝐁𝐞𝐛𝐲 𝐌𝐞 𝐓𝐨 𝐁𝐨𝐭 𝐇𝐮 𝐊𝐞𝐬𝐞 𝐀𝐚𝐮 𝐂𝐚𝐥𝐥 𝐏𝐚𝐫 🥺🥺🥺`, threadID, messageID);
   };

    if ((event.body.indexOf("CALL") >= 0 )) {
     return api.sendMessage(`${name} 🌸𝐁𝐞𝐛𝐲 𝐌𝐞 𝐓𝐨 𝐁𝐨𝐭 𝐇𝐮 𝐊𝐞𝐬𝐞 𝐀𝐚𝐮 𝐂𝐚𝐥𝐥 𝐏𝐚𝐫 🥺🥺🥺`, threadID, messageID);
   };

    if ((event.body.indexOf("Ludo") >= 0 )) {
     return api.sendMessage(`${name} 🌸𝐁𝐚𝐛𝐮 𝐌𝐮𝐣𝐡𝐞 𝐊𝐡𝐞𝐥𝐧𝐚 𝐍𝐡𝐢 𝐀𝐚𝐭𝐚 𝐋𝐮𝐝𝐨 𝐁𝐚𝐬 𝐀𝐚𝐩𝐬𝐞 𝐏𝐲𝐚𝐫 𝐊𝐚𝐫𝐧𝐚 𝐀𝐚𝐭𝐚 𝐇𝐚𝐢 😘😘🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("LUDO") >= 0 )) {
     return api.sendMessage(`${name} 🌸𝐁𝐚𝐛𝐮 𝐌𝐮𝐣𝐡𝐞 𝐊𝐡𝐞𝐥𝐧𝐚 𝐍𝐡𝐢 𝐀𝐚𝐭𝐚 𝐋𝐮𝐝𝐨 𝐁𝐚𝐬 𝐀𝐚𝐩𝐬𝐞 𝐏𝐲𝐚𝐫 𝐊𝐚𝐫𝐧𝐚 𝐀𝐚𝐭𝐚 𝐇𝐚𝐢 😘😘🤣`, threadID, messageID);
   };

    if ((event.body.indexOf("ludo") >= 0 )) {
     return api.sendMessage(`${name} 🌸𝐁𝐚𝐛𝐮 𝐌𝐮𝐣𝐡𝐞 𝐊𝐡𝐞𝐥𝐧𝐚 𝐍𝐡𝐢 𝐀𝐚𝐭𝐚 𝐋𝐮𝐝𝐨 𝐁𝐚𝐬 𝐀𝐚𝐩𝐬𝐞 𝐏𝐲𝐚𝐫 𝐊𝐚𝐫𝐧𝐚 𝐀𝐚𝐭𝐚 𝐇𝐚𝐢 😘😘🤣`, threadID, messageID);
   };


    if ((event.body.indexOf("Koi h") >= 0 )) {
     return api.sendMessage(`${name} मैं हूं ना बाबू बोलो 🥰👈`, threadID, messageID);
   };

   mess = "{name}"

  if (event.body.indexOf("Bot") >= 0 || (event.body.indexOf("bot") >= 0)) {
    var msg = {
      body: `╔═════▓࿇࿇▓═════╗\n${name}\n╚═════▓࿇࿇▓═════╝\n\n💖🥀🐬•||•●┼┼──🔏🌊_____ ${rand} _____••||•●┼┼─💌🕊️🌿✨🎩🐬😘\n\n                      ╔════•| ✿ |•════╗
                      🌹   😻𝐒𝐇𝐀𝐀𝐍 😻    🌹
                      ╚════•| ✿ |•════╝`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }