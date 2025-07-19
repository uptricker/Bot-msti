const login = require("fb-chat-api-self");
const fs = require("fs");
const chalk = require("chalk");

// Prefix (change this to "/" if you use /ping instead of !ping)
const prefix = "!";

// Load appstate
const appState = JSON.parse(fs.readFileSync("appstate.json", "utf-8"));

login({ appState }, (err, api) => {
  if (err) {
    console.log(chalk.red("❌ Login failed! Check your appstate.json"));
    return;
  }

  console.log(chalk.green("✅ Bot is now active and listening for commands..."));

  api.listenMqtt((err, message) => {
    if (err || !message || !message.body) return;

    // Debug log
    console.log(chalk.blue(`📩 Message from ${message.senderID}: ${message.body}`));

    const body = message.body.trim();
    if (!body.startsWith(prefix)) return;

    const args = body.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    switch (command) {
      case "ping":
        api.sendMessage("🏓 Pong!", message.threadID);
        break;

      case "help":
        api.sendMessage("📜 Available Commands:\n\n!ping - Test the bot\n!help - List commands", message.threadID);
        break;

      default:
        api.sendMessage(`❓ Unknown command: ${command}\nType !help to see available commands`, message.threadID);
    }
  });
});
