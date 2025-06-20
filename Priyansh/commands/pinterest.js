const axios = require("axios");
const fs = require("fs-extra");

module.exports.config = {
    name: "pinterest",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Modified by Prince Malhotra",
    description: "Image search using Pinterest",
    usePrefix: false,
    commandCategory: "Search",
    usages: "[keyword] - [number]",
    cooldowns: 0,
};

module.exports.run = async function({ api, event, args }) {
    const keySearch = args.join(" ");
    if (!keySearch.includes("-")) {
        return api.sendMessage(
            '❗ Format error.\n\nExample:\n`pinterest Naruto - 5`\n(Write your keyword, then dash, then number of images)',
            event.threadID,
            event.messageID
        );
    }

    const keySearchs = keySearch.substr(0, keySearch.indexOf('-')).trim();
    const numberSearch = parseInt(keySearch.split("-").pop().trim()) || 6;

    try {
        const res = await axios.get(`https://shankar-all-apis.vercel.app/api/pinterest?q=${encodeURIComponent(keySearchs)}`);
        const results = res.data.results;

        if (!results || results.length === 0) {
            return api.sendMessage("❌ No images found for your search.", event.threadID, event.messageID);
        }

        const imgData = [];

        for (let i = 0; i < Math.min(numberSearch, results.length); i++) {
            const imgUrl = results[i].image;
            const path = __dirname + `/cache/pin_${i}.jpg`;
            const response = await axios.get(imgUrl, { responseType: 'arraybuffer' });
            fs.writeFileSync(path, Buffer.from(response.data, 'utf-8'));
            imgData.push(fs.createReadStream(path));
        }

        api.sendMessage({
            attachment: imgData,
            body: `📌 ${numberSearch} image(s) for keyword: ${keySearchs}`,
        }, event.threadID, async () => {
            // Clean up cache
            for (let i = 0; i < imgData.length; i++) {
                fs.unlinkSync(__dirname + `/cache/pin_${i}.jpg`);
            }
        }, event.messageID);

    } catch (error) {
        console.error("Pinterest API error:", error);
        api.sendMessage("⚠️ Failed to fetch images from Pinterest API.", event.threadID, event.messageID);
    }
};