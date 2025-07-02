const { spawn } = require("child_process");
const path = require("path");
const logger = require("./utils/log");

/////////////////////////////////////////////////////
// ✅ UPTIME SERVER (Only for Local Testing)
/////////////////////////////////////////////////////

if (!process.env.RUNNING_ON_RENDER) {
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8080;

    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '/𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.html'));
    });

    app.listen(port, () => {
        logger(`Local server is running on port ${port}`, "[ Local Uptime ]");
    });
}

/////////////////////////////////////////////////////
// ✅ BOT AUTO RESTART LOOP
/////////////////////////////////////////////////////

global.countRestart = global.countRestart || 0;

function startBot(message) {
    if (message) logger(message, "[ Starting ]");

    const bot = spawn("node", ["--trace-warnings", "--async-stack-traces", "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    bot.on("close", (code) => {
        if (code !== 0 && global.countRestart < 5) {
            global.countRestart += 1;
            logger(`Bot exited with code ${code}. Restarting... (${global.countRestart}/5)`, "[ Restarting ]");
            startBot();
        } else {
            logger(`Bot stopped after ${global.countRestart} restarts.`, "[ Stopped ]");
        }
    });

    bot.on("error", (error) => {
        logger(`Bot error: ${JSON.stringify(error)}`, "[ Error ]");
    });
}

startBot();
