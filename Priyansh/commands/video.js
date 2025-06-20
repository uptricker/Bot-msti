const fs = require("fs");
const path = require("path");
const request = require("request");
const yts = require("yt-search");

module.exports.config = {
  name: "video",
  version: "2.0.0",
  hasPermission: 0,
  credits: "SHANKAR + ChatGPT",
  description: "Smart YouTube video downloader using trigger",
  commandCategory: "media",
  usePrefix: false,
  cooldowns: 5
};

const triggerWords = ["pika", "bot", "shankar"];
const keywordMatchers = ["video", "bhejo", "bhej", "dikhao", "lagao"];

module.exports.handleEvent = async function ({ api, event }) {
  let message = event.body?.toLowerCase();
  if (!message) return;

  const foundTrigger = triggerWords.find(trigger => message.startsWith(trigger));
  if (!foundTrigger) return;

  let content = message.slice(foundTrigger.length).trim();
  if (!content) return;

  const words = content.split(/\s+/);
  const keywordIndex = words.findIndex(word => keywordMatchers.includes(word));
  if (keywordIndex === -1 || keywordIndex === words.length - 1) return;

  let possibleWords = words.slice(keywordIndex + 1);
  possibleWords = possibleWords.filter(word => !keywordMatchers.includes(word));
  const query = possibleWords.join(" ").trim();
  if (!query) return;

  // Simulate run command
  module.exports.run({ api, event, args: query.split(" ") });
};

module.exports.run = async function({ api, event, args }) {
  const query = args.join(" ");
  if (!query) return api.sendMessage("❌ | कृपया किसी वीडियो का नाम लिखें।\nउदाहरण: video लाल दुपट्टा", event.threadID);

  try {
    const searching = await api.sendMessage(`🔍 | "${query}" के लिए वीडियो खोजा जा रहा है...`, event.threadID);
    const searchResult = await yts(query);
    const video = searchResult.videos[0];

    if (!video) {
      return api.sendMessage("❌ | कोई भी वीडियो नहीं मिला।", event.threadID);
    }

    const videoUrl = video.url;
    const title = video.title.replace(/[^\w\s]/gi, '').substring(0, 50);
    const fileName = `${Date.now()}-${title}.mp4`;
    const filePath = path.join(__dirname, "cache", fileName);

    const apiUrl = `https://shankar-all-apis.vercel.app/api/ytdl?url=${encodeURIComponent(videoUrl)}`;

    request({ url: apiUrl, json: true }, (err, res, body) => {
      if (err || !body.status || !body.result || !body.result.download_url) {
        return api.sendMessage("❌ | वीडियो डाउनलोड लिंक प्राप्त करने में समस्या हुई।", event.threadID);
      }

      const downloadUrl = body.result.download_url;

      request(downloadUrl)
        .pipe(fs.createWriteStream(filePath))
        .on("finish", async () => {
          const stats = fs.statSync(filePath);
          const fileSizeMB = stats.size / (1024 * 1024);

          if (fileSizeMB > 25) {
            const readStream = fs.createReadStream(filePath);
            const uploadReq = request.post("https://transfer.sh/" + fileName, async (err, resp, body) => {
              fs.unlinkSync(filePath);
              if (err) {
                return api.sendMessage(`❌ | वीडियो बहुत बड़ा है और अपलोड करने में समस्या हुई: ${err.message}`, event.threadID);
              }
              return api.sendMessage(`⚠️ | वीडियो साइज: ${fileSizeMB.toFixed(2)}MB\n💾 डाउनलोड लिंक:\n${body}`, event.threadID);
            });
            readStream.pipe(uploadReq);
          } else {
            await api.sendMessage({
              body: `🎬 | "${title}" डाउनलोड हो चुका है!`,
              attachment: fs.createReadStream(filePath)
            }, event.threadID, () => fs.unlinkSync(filePath));
          }

          api.unsendMessage(searching.messageID);
        })
        .on("error", async error => {
          fs.unlinkSync(filePath);
          return api.sendMessage(`❌ | वीडियो डाउनलोड में समस्या: ${error.message}`, event.threadID);
        });
    });

  } catch (e) {
    console.error(e);
    api.sendMessage("❌ | कोई अनपेक्षित त्रुटि हुई।", event.threadID);
  }
};