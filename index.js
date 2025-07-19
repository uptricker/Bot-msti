const { spawn } = require("child_process");
const axios = require("axios");
const logger = require("./utils/log");

// ==============================
// ========== WEBSITE ==========
// ==============================

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8080;

// Serve index.html for root route
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start server with basic error handling
app.listen(port, () => {
    logger(`🌐 Server running on http://localhost:${port}`, "[ Starting ]");
}).on('error', (err) => {
    if (err.code === 'EACCES') {
        logger(`❌ Permission denied on port ${port}`, "[ Error ]");
    } else {
        logger(`❌ Server error: ${err.message}`, "[ Error ]");
    }
});

// ==============================
// ========== BOT LOOP =========
// ==============================

function startBot(message) {
    if (message) logger(message, "[ Starting ]");

    const child = spawn("node", ["--trace-warnings", "--async-stack-traces", "Amir.js"], {
        cwd: __dirname,
        stdio: "inherit",
        shell: true
    });

    child.on("close", (codeExit) => {
        logger(`🚫 Bot exited with code ${codeExit}. Restarting...`, "[ Restarting ]");
        startBot(); // Auto-restart on crash
    });

    child.on("error", (error) => {
        logger(`❌ Spawn error: ${JSON.stringify(error)}`, "[ Error ]");
    });
}

// ==============================
// === VERSION CHECK (OPTIONAL)
// ==============================

axios.get("https://raw.githubusercontent.com/priyanshu192/bot/main/package.json")
    .then((res) => {
        logger(`📦 ${res.data.name}`, "[ NAME ]");
        logger(`🔢 Version: ${res.data.version}`, "[ VERSION ]");
        logger(`📝 ${res.data.description}`, "[ DESCRIPTION ]");
    })
    .catch((err) => {
        logger(`⚠️ Failed to fetch update info: ${err.message}`, "[ Update Error ]");
    });

// Start everything
startBot();
