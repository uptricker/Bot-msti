module.exports.config = {
	name: "restart",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "𝙋𝙧𝙞𝙮𝙖𝙣𝙨𝙝 𝙍𝙖𝙟𝙥𝙪𝙩",
	description: "Restart Bot",
	commandCategory: "system",
	usages: "",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
	const { threadID, messageID } = event;
	return api.sendMessage(`𝐁𝐎𝐓 𝐈𝐒 𝐑𝐄START🤖 👈 ●============================================================●𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐒𝐔𝐒𝐇𝐈𝐋 𝐘𝐀𝐃𝐀𝐕 𝐁𝐨𝐭 😇👈
=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐒𝐔𝐒𝐇𝐈𝐋🌹
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 👈👈👈👈👈 𝐒𝐔𝐒𝐇𝐈𝐋:- ☞ https://www.facebook.com/share/16Qc2GoC6x/
●============================================================● 𝐁𝐎𝐓 𝐑𝐄𝐒𝐓𝐒𝐓 𝐇𝐎 𝐑𝐄𝐇𝐀 𝐇𝐀𝐈 𝐏𝐋𝐙 𝐖𝐀𝐈𝐓`, threadID, () => process.exit(1));
}
