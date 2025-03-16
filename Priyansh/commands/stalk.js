var cred = "Deku";
module.exports.config = {
    name: "stalk",
    version: "1.0.0",
    hasPermision: 0,
    credits: `${cred}`,
    description: "get info using uid/mention/reply to a message",
    usages: "[reply/uid/@mention/url]",
    commandCategory: "info",
    cooldowns: 0,
};

module.exports.run = async function({api, event, args, utils, Users, Threads}) {
    try {
        let axios = require('axios');
        let fs = require("fs-extra");
        let request = require("request");
        let {threadID, senderID, messageID} = event;
      if ((this.config.credits) != `${cred}`) { return api.sendMessage(`ulol change credits pa `, event.threadID, event.messageID)}
