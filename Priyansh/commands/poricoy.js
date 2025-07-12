module.exports.config = {
  name: "poricoy",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "SUSHIL",
  description: "Simple Banglish Ai Chatbot",
  commandCategory: "Ai Robot",
  usages: "/meta [typeinBanglish]",
  cooldowns: 2,
  dependencies: {"axios" : ""}
};
module.exports.run = async({api, event, args}) => {

  const axios = require('axios');

if (args.join() == "") { 
    return api.sendMessage(`
     ╭────────────────╮
   🌸𝐄𝐯𝐞𝐫𝐲 𝐒𝐚𝐧𝐚𝐭𝐚𝐧𝐢 𝐈𝐝𝐞𝐧𝐭𝐢𝐭𝐲🌸
     ╰────────────────╯

𝙽𝚊𝚖𝚎                     : 𝐒𝐚𝐧𝐚𝐭𝐚𝐧𝐢.
𝙵𝚊𝚝𝚑𝚎𝚛'𝚜 𝙽𝚊𝚖𝚎    : 𝐑𝐚𝐦𝐞𝐬𝐡𝐰𝐚𝐫 (S.K:)
𝙲𝚛𝚎𝚊𝚝𝚘𝚛               : 𝐒𝐮𝐬𝐡𝐢𝐥 𝐲𝐚𝐝𝐚𝐯
𝙸𝚍𝚎𝚊𝚕                   : 𝐄𝐧𝐣𝐞𝐞𝐧𝐢𝐞𝐫 
𝙷𝚘𝚕𝚢 𝙱𝚘𝚘𝚔           : 𝐑𝐚𝐦𝐚𝐲𝐚𝐧 
𝚁𝚎𝚕𝚒𝚐𝚒𝚘𝚗            : 𝐇𝐢𝐧𝐝𝐮 
𝙸𝚍𝚎𝚗𝚝𝚒𝚝𝚢            : 𝐒𝐚𝐧𝐚𝐭𝐚𝐧𝐢 
𝙷𝚘𝚋𝚋𝚒𝚎𝚜               : 𝐄𝐧𝐣𝐞𝐞𝐧𝐢𝐞𝐫 
𝙿𝚛𝚎𝚜𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜   : 𝐋𝐮𝐜𝐤𝐧𝐨𝐰 𝐔𝐭𝐭𝐚𝐫 𝐏𝐫𝐚𝐝𝐞𝐬𝐡 
𝙿𝚎𝚛𝚖𝚊𝚗𝚎𝚗𝚝 𝙰𝚍𝚍𝚛𝚎𝚜𝚜 : (𝐋𝐮𝐜𝐤𝐧𝐨𝐰 𝐔𝐭𝐭𝐚𝐫 𝐏𝐫𝐚𝐝𝐞𝐬𝐡) update of 👉༆SUSHIL KUMAR YADAV༄👈.`, event.threadID, event.messageID)}

  else {
    let uint = encodeURI(args.join(' '));
  const res = await axios.get(`https://simsimi.info/api/?text=${uint}&lc=bn`);
  var d1 = res.data.message
  return api.sendMessage(`${d1}`, event.threadID, event.messageID)

  }



}