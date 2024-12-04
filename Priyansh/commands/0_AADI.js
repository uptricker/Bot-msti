const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "owner",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "AADI BABU",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/HI2QPof.jpeg",
            "https://i.imgur.com/GmwtlyW.jpeg",
            "https://i.imgur.com/f8xCMLp.jpeg",
            "https://i.imgur.com/jBdCIce.jpeg",
            "https://i.imgur.com/MJrbrDW.jpeg",
            "https://i.imgur.com/ItvIrPx.jpeg"
        ];

        const message = "𝐖𝐞𝐥𝐜𝐨𝐦𝐞 𝐓𝐨 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 𝐁𝐨𝐭 😇👈\n──────────────────\n=𝐎𝐰𝐧𝐞𝐫 ➻    🌹 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 🌹\n──────────────────\n𝐅𝐎𝐑 𝐀𝐍𝐘 𝐊𝐈𝐍𝐆 𝐎𝐅𝐅 𝐇𝐄𝐋𝐏 𝐂𝐎𝐍𝐓𝐀𝐂𝐓 𝐎𝐍 𝐈𝐍𝐒𝐓𝐀 𝐈𝐃\n──────────────────\nhttps://www.instagram.com/aadi_singh__143?igsh=MXVneXZ6bzR4bHhvcg==\n──────────────────\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝 𝐥𝐢𝐧𝐤 😊 𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞\n𝐀𝐚𝐝𝐢 𝐛𝐚𝐛𝐮 :- ☞ 𝐊𝐀 𝐋𝐔𝐊 😁\n──────────────────\nhttps://www.facebook.com/profile.php?id=100066401546757&mibextid=ZbWKwL";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("owner")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'owner-Jpg-Images.jpg');

            // Download image from the random URL
            request(randomGif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
                const msg = {
                    body: message,
                    attachment: fs.createReadStream(downloadPath)
                };
                api.sendMessage(msg, threadID, messageID);
                api.setMessageReaction("😘", event.messageID, (err) => {}, true);
            });
        }
    },

    run: function({ api, event, client, __GLOBAL }) {
        // Empty run function for module requirements
    },
}