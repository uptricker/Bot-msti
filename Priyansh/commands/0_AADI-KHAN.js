const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports = {
    config: {
        name: "boss",
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
            "https://i.imgur.com/YWk2ByL.jpeg",
            "https://i.imgur.com/5vHvLxl.jpeg",
            "https://i.imgur.com/1zKup0G.jpeg",
            "https://i.imgur.com/937lLly.jpeg",
            "https://i.imgur.com/MCO9hoY.jpeg",
            "https://i.imgur.com/iucGU0c.jpeg"
        ];

        const message = "=𝐎𝐰𝐧𝐞𝐫 ➻  𝐀𝐚̃𝐃𝐢 𝐛𝐚𝐛𝐮 \n──────────────────\n\n𝐎𝐰𝐧𝐞𝐑 𝐁𝐚𝐁𝐮\n";
        const { threadID, messageID } = event;
        const lowerCaseMessage = event.body.toLowerCase();

        if (lowerCaseMessage.startsWith("aadi")) {  
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