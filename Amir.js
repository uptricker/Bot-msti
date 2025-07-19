const login = require("fb-chat-api-self");
const fs = require("fs");
const chalk = require("chalk");

const prefix = "!"; // ⬅️ Set your desired prefix here

// Load appstate from file
const appState = JSON.parse(fs.readFileSync("appstate.json", "utf-8"));

// Login using appstate
login({ appState }, (err, api) => {
    if (err) {
        console.log(chalk.red("❌ Login failed! Check your appstate.json file."));
        return;
    }

    console.log(chalk.green("✅ Bot is now active and listening for commands..."));

    // Start listening to messages
    api.listenMqtt((err, message) => {
        if (err || !message.body) return;

        const sender = message.senderID;
        const thread = message.threadID;
        const msg = message.body.trim();

        // Check if message starts with prefix
        if (!msg.startsWith(prefix)) return;

        // Extract command and args
        const args = msg.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();

        // Handle Commands
        switch (command) {
            case "ping":
                api.sendMessage("🏓 Pong!", thread);
                break;

            case "help":
                api.sendMessage(
                    "📘 Available Commands:\n\n" +
                    "!ping - Check bot status\n" +
                    "!help - Show this help message",
                    thread
                );
                break;

            default:
                api.sendMessage("❓ Unknown command. Type `!help` to see available commands.", thread);
        }
    });
});
