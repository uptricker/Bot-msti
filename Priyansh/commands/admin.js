module.exports.config = {
    name: "admin",
    version: "1.0.1", 
    hasPermssion: 0,
    credits: "Abdulla Rahaman",
    description: "Abdulla Tech 49",
    commandCategory: "...",
    cooldowns: 1,
    dependencies: 
    {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
var link =["https://imgur.com/a/wLAWwUt#xCd02Z9", 

            "https://imgur.com/a/TGwch6n#vi9H5Pa", 

"https://imgur.com/a/TGwch6n#vi9H5Pa",

            "https://imgur.com/a/ZjktLVL#4VdCrZQ"];

var callback = () => api.sendMessage({body:`𝗗𝗢 𝗡𝗢𝗧 𝗧𝗥𝗨𝗦𝗧 𝗧𝗛𝗘 𝗕𝗢𝗧 𝗢𝗣𝗘𝗥𝗔 𝗧𝗢𝗥\n
------------------------------------------------\n𝗡𝗮𝗺𝗲       : 𝙎𝙪𝙨𝙝𝙞𝙡 𝙮𝙖𝙙𝙖𝙫\n𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸 : 𝙎𝙪𝙨𝙝𝙞𝙡 𝙆𝙪𝙢𝙖𝙧 𝙮𝙖𝙙𝙖𝙫\n𝗥𝗲𝗹𝗶𝗴𝗶𝗼𝗻    : (𝙎𝙖𝙣𝙖𝙏𝙖𝙣𝙞 𝙃𝙞𝙣𝙙𝙪)\n𝗣𝗲𝗿𝗺𝗮𝗻𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : (𝙐𝙩𝙩𝙖𝙧 𝙋𝙧𝙖𝙙𝙚𝙨𝙝)\n𝗖𝘂𝗿𝗿𝗲𝗻𝘁 𝗔𝗱𝗱𝗿𝗲𝘀𝘀 : 𝙐𝙩𝙩𝙖𝙧 𝙋𝙧𝙖𝙙𝙚𝙨𝙝, 𝙄𝙣𝙙𝙞𝙖\n𝗚𝗲𝗻𝗱𝗲𝗿     : (𝗠𝗮𝗹𝗲)\n𝗔𝗴𝗲            :  (24)\n𝗥𝗲𝗹𝗮𝘁𝗶𝗼𝗻𝘀𝗵𝗶𝗽 : (𝗦𝗶𝗻𝗴𝗹𝗲)\n𝗪𝗼𝗿𝗸         : 𝙎𝙩𝙪𝙙𝙮\n𝗚𝗺𝗮𝗶𝗹        :  sushilkumar94585@gmail.com.com\n𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 :  wa.me/+919910632063\n𝗧𝗲𝗹𝗲𝗴𝗿𝗮𝗺  : yaad nahi hai\n𝗙𝗯 𝗹𝗶𝗻𝗸   : 610265515
`,attachment: fs.createReadStream(__dirname + "/cache/juswa.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/juswa.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/juswa.jpg")).on("close",() => callback());
   };