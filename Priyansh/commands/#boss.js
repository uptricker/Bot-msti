const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "boss",
        version: "1.0.1",
        hasPermssion: 0,
        credits: "SHANKAR SUMAN",
        description: "no prefix",
        usePrefix: false,
        commandCategory: "No command marks needed",
        usages: "Yo Yo",
        cooldowns: 5,
    },

    // Array of Imgur URLs
    handleEvent: async function({ api, event, client, Users, __GLOBAL }) {
        const gifs = [
            "https://i.imgur.com/rBlViD9.jpeg",
            "https://i.imgur.com/HghDS5W.jpeg",
            "https://i.imgur.com/SShebP9.jpeg",
            "https://i.imgur.com/i1QMVd7.jpeg",
            "https://i.imgur.com/C3KXDEk.jpeg",
            "https://i.imgur.com/bBk4AMt.jpeg"
        ];

        const message = "●💐 =======❤️💐❤️💐❤️❤️  =======💐     ☟  ========== ☟ ==========  ☟  ●============================●     𝐒𝐇𝐀𝐀𝐍 𝐃𝐏 ➻────╔╬⓼★⓼╃───────➣𝐘𝐄 𝐋𝐎 𝐌𝐄𝐑𝐀 𝐁𝐎𝐒𝐒 𝐒𝐇𝐀𝐀𝐍 𝐊𝐇𝐀𝐍𝄠━─━Ⓔ⧐╰✾✾®️╀✿✿╀─━ↈⓇ⧐";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("Boss")) {  
            // Select a random image URL from the array
            const randomGif = gifs[Math.floor(Math.random() * gifs.length)];
            const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

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
