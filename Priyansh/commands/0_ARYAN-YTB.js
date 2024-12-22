 const axios = require("axios");
const fs = require("fs-extra");
const path = require("path");
const ytdl = require("@distube/ytdl-core");
const { createProxyAgent } = ytdl;

// Configure Proxy
const agent = createProxyAgent({ uri: "http://54.233.119.172:3128" });

/**
 * Search YouTube using the YouTube Data API.
 * @param {string} query - Search term or video keyword.
 * @returns {Promise<object[]>} - List of search results.
 */
async function searchYoutube(query) {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&key=AIzaSyCDDV9GJU_IeepE1hbS-rrGclbqamFVV5Y&type=video&maxResults=6`
    );
    return response.data.items.map((item) => ({
      id: item.id.videoId,
      title: item.snippet.title,
      channel: item.snippet.channelTitle,
      thumbnail: item.snippet.thumbnails.high.url,
    }));
  } catch (error) {
    throw new Error(`Failed to search YouTube: ${error.message}`);
  }
}

/**
 * Download Media (video/audio) from YouTube using `@distube/ytdl-core`.
 * @param {string} videoUrl - URL of the video to download.
 * @param {string} outputFilePath - File path to save the downloaded media.
 * @param {string} filter - Download format filter (videoandaudio/audioonly).
 */
async function downloadMedia(videoUrl, outputFilePath, filter = "videoandaudio") {
  const tempDir = path.dirname(outputFilePath);
  await fs.ensureDir(tempDir);
  return new Promise((resolve, reject) => {
    const stream = ytdl(videoUrl, { filter, agent });
    const fileStream = fs.createWriteStream(outputFilePath);
    stream.pipe(fileStream);

    fileStream.on("finish", () => resolve());
    stream.on("error", (error) => reject(error));
    fileStream.on("error", (error) => reject(error));
  });
}

module.exports = {
  config: {
    name: "ytb",
    version: "1.0.0",
    author: "Priyanshi Kaur",
    countDown: 5,
    role: 0,
    description: {
      en: "Download video/audio from YouTube or view video info",
    },
    category: "media",
    guide: {
      en: `
      Usage:
      - {pn} [video|-v] [<video name>|<video link>]: Download video
      - {pn} [audio|-a] [<video name>|<video link>]: Download audio
      - {pn} [info|-i] [<video name>|<video link>]: View video info`,
    },
  },

  langs: {
    en: {
      error: "❌ Error: %1",
      noResult: "⭕ No search results for %1",
      downloading: "⬇️ Downloading %1 \"%2\"...",
      success: "✅ Downloaded successfully!",
      noVideo: "⭕ No valid video found",
      noAudio: "⭕ No valid audio found",
      info: "💠 Title: %1\n🏪 Channel: %2\n⏱ Duration: %3\n🔗 Link: %4",
    },
  },

  onStart: async function ({ args, message, getLang }) {
    const input = args.slice(1).join(" ");
    if (!input) return message.SyntaxError();

    const type = args[0] === "-v" || args[0] === "video" ? "video"
      : args[0] === "-a" || args[0] === "audio" ? "audio"
      : args[0] === "-i" || args[0] === "info" ? "info"
      : null;

    if (!type) return message.SyntaxError();

    const youtubeRegex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com|youtu\.be)\/(?:watch\?v=)?([\w-]+)/;

    if (youtubeRegex.test(input)) {
      const videoUrl = youtubeRegex.exec(input)[0];
      await handleRequest(type, videoUrl, message, getLang);
    } else {
      try {
        const results = await searchYoutube(input);
        if (results.length === 0) return message.reply(getLang("noResult", input));

        const choices = results.map(
          (item, index) =>
            `${index + 1}. ${item.title} - ${item.channel}`
        ).join("\n");

        await message.reply(choices);
        const selectedMessage = await message.reply("Please select an option (e.g., 1):");

        const handler = async (choiceMessage) => {
          const choice = parseInt(choiceMessage.body);
          if (isNaN(choice) || choice < 1 || choice > results.length) {
            return message.reply(getLang("error", "Invalid choice"));
          }
          const videoId = results[choice - 1].id;
          const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
          await handleRequest(type, videoUrl, message, getLang);
        };

        selectedMessage.once("message", handler);
      } catch (error) {
        return message.reply(getLang("error", error.message));
      }
    }
  },
};

/**
 * Handles info, video, or audio request.
 * @param {string} type - 'info', 'video', or 'audio'.
 * @param {string} videoUrl - Video URL.
 * @param {object} message - Message object.
 * @param {function} getLang - Get language string function.
 */
async function handleRequest(type, videoUrl, message, getLang) {
  try {
    if (type === "info") {
      const videoInfo = await ytdl.getInfo(videoUrl, { agent });
      const duration = formatDuration(videoInfo.videoDetails.lengthSeconds);
      return message.reply(
        getLang(
          "info",
          videoInfo.videoDetails.title,
          videoInfo.videoDetails.author.name,
          duration,
          videoInfo.videoDetails.video_url
        )
      );
    }

    const filePath = type === "video"
      ? path.join(__dirname, "downloads", `${Date.now()}.mp4`)
      : path.join(__dirname, "downloads", `${Date.now()}.mp3`);

    const filter = type === "video" ? "videoandaudio" : "audioonly";

    const msg = await message.reply(getLang("downloading", type, videoUrl));
    await downloadMedia(videoUrl, filePath, filter);

    await message.reply({
      body: getLang("success"),
      attachment: fs.createReadStream(filePath),
    });

    await fs.unlink(filePath);
    await msg.delete();
  } catch (error) {
    return message.reply(getLang("error", error.message));
  }
}

/**
 * Formats duration into "minutes:seconds".
 * @param {number} seconds - Total seconds.
 * @returns {string} - Formatted duration.
 */
function formatDuration(seconds) {
  const minutes = Math.floor(seconds / 60);
  seconds = seconds % 60;
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}
