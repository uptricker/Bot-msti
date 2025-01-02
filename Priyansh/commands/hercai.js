const axios = require("axios");

module.exports.config = {
  name: "hercai",
  version: "1.3.0",
  hasPermission: 0,
  credits: "SHAAN SIR",
  description: "Hercai bot with memory and context-aware conversation.",
  commandCategory: "AI",
  usages: "[your question]",
  cooldowns: 5,
};

let userMemory = {}; // Store conversation memory for each user
let isActive = false; // To enable or disable the bot

module.exports.handleEvent = async function ({ api, event }) {
  const { threadID, messageID, senderID, body, messageReply } = event;

  // Check if the bot is active and the message is valid
  if (!isActive || !body) return;

  const userQuery = body.trim();

  // Initialize memory for the user if not already present
  if (!userMemory[senderID]) userMemory[senderID] = { history: [] };

  // If the user is replying to the bot's message, continue the conversation
  if (messageReply && messageReply.senderID === api.getCurrentUserID()) {
    userMemory[senderID].history.push({ sender: "user", message: userQuery });
  } else if (body.toLowerCase().includes("hercai")) {
    // If "hercai" is mentioned, treat it as a new query
    const cleanedQuery = body.toLowerCase().replace("hercai", "").trim();
    userMemory[senderID].history.push({ sender: "user", message: cleanedQuery });
  } else {
    return;
  }

  // Take only the last 3 messages for context
  const recentConversation = userMemory[senderID].history.slice(-3).map(
    (msg) => `${msg.sender === "" ? "" : ""}: ${msg.message}`
  ).join("\n");

  const apiURL = `https://api-shankar-sir-s26r.onrender.com/api/ai?ask=${encodeURIComponent(recentConversation)}`;

  try {
    const response = await axios.get(apiURL);

    if (response && response.data && response.data.reply) {
      const botReply = response.data.reply;

      // Add the bot's response to the conversation history
      userMemory[senderID].history.push({ sender: "bot", message: botReply });

      // Send the bot's reply to the user
      return api.sendMessage(botReply, threadID, messageID);
    } else {
      return api.sendMessage(
        "⚠️ Sorry! میں آپ کا سوال نہیں سمجھ سکا۔ براہ کرم دوبارہ کوشش کریں۔
",
        threadID,
        messageID
      );
    }
  } catch (error) {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return api.sendMessage(
      "❌ API سے جواب ملنے میں دشواری تھی۔ براہ کرم بعد میں کوشش کریں۔
 ",
      threadID,
      messageID
    );
  }
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID, senderID } = event;
  const command = args[0] && args[0].toLowerCase();

  if (command === "on") {
    isActive = true;
    return api.sendMessage("✅ Hercai bot اب ایکٹو۔
 ", threadID, messageID);
  } else if (command === "off") {
    isActive = false;
    return api.sendMessage("⚠️ Hercai bot اب غیر فعال۔
 ", threadID, messageID);
  } else if (command === "clear") {
    // Clear history for all users
    if (args[1] && args[1].toLowerCase() === "all") {
      userMemory = {}; // Reset memory
      return api.sendMessage("🧹تمام صارفین کی گفتگو کی سرگزشت صاف کر دی گئی ہے۔
 ", threadID, messageID);
    }

    // Clear history for the current user
    if (userMemory[senderID]) {
      delete userMemory[senderID];
      return api.sendMessage("🧹آپ کی گفتگو کی سرگزشت صاف کر دی گئی ہے۔
 ", threadID, messageID);
    } else {
      return api.sendMessage("⚠️ آپ کی کوئی بھی تاریخ پہلے سے موجود نہیں ہے۔
 ", threadID, messageID);
    }
  }

  const userQuery = args.join(" ");

  if (!userQuery) {
    return api.sendMessage("❓ براہ کرم اپنا سوال پوچھیں!
  Example: hercai آپ کیسے ہیں؟
 ?", threadID, messageID);
  }

  // Initialize memory for the user if not already present
  if (!userMemory[senderID]) userMemory[senderID] = { history: [] };

  // Add the user's query to their conversation history
  userMemory[senderID].history.push({ sender: "user", message: userQuery });

  // Take only the last 3 messages for context
  const recentConversation = userMemory[senderID].history.slice(-20).map(
    (msg) => `${msg.sender === "user" ? "User" : "Hercai"}: ${msg.message}`
  ).join("\n");

  const apiURL = `https://api-shankar-sir-s26r.onrender.com/api/ai?ask=${encodeURIComponent(recentConversation)}`;

  try {
    const response = await axios.get(apiURL);

    if (response && response.data && response.data.reply) {
      const botReply = response.data.reply;

      // Add the bot's response to the conversation history
      userMemory[senderID].history.push({ sender: "bot", message: botReply });

      // Send the bot's reply to the user
      return api.sendMessage(botReply, threadID, messageID);
    } else {
      return api.sendMessage(
        "⚠️ Sorry! میں آپ کا سوال نہیں سمجھ سکا۔ براہ کرم دوبارہ کوشش کریں۔
 ",
        threadID,
        messageID
      );
    }
  } catch (error) {
    console.error("API Error:", error.response ? error.response.data : error.message);
    return api.sendMessage(
      "❌ API سے جواب ملنے میں دشواری تھی۔ براہ کرم بعد میں کوشش کریں۔
 ",
      threadID,
      messageID
    );
  }
};