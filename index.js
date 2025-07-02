const { spawn } = require("child_process");
const path = require("path");
const logger = require("./utils/log");

///////////////////////////////////////////////////////////
//========= Skip Express (Uptime) on Render =============//
///////////////////////////////////////////////////////////

if (!process.env.RUNNING_ON_RENDER) {
    const express = require('express');
    const app = express();
    const port = process.env.PORT || 8080;

    app.get('/', function (req, res) {
        res.sendFile(path.join(__dirname, '/𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.html'));
    });

    app.listen(port, () => {
        logger(`Local server is running on port ${port}...`, "[ Local Uptime ]");
    });
}

/////////////////////////////////////////////////////////
//========= Start the bot and make it loop ============//
/////////////////////////////////////////////////////////

global.countRestart = global.countRestart || 0;

function startBot(message) {
    if (message) logger(message, "[ Starting ]");

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "𝑴𝒓𝑼𝒛𝒂𝒊𝒓𝑿𝒙𝑿-𝑴𝑻𝑿.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        if (codeExit !== 0 && global.countRestart < 5) {
            global.countRestart += 1;
            logger(`Bot exited with code ${codeExit}. Restarting... (${global.countRestart}/5)`, "[ Restarting ]");
            startBot();
        } else {
            logger(`Bot stopped after ${global.countRestart} restarts.`, "[ Stopped ]");
        }
    });

    child.on("error", (error) => {
        logger(`An error occurred: ${JSON.stringify(error)}`, "[ Error ]");
    });
}

// Start the bot
startBot();
