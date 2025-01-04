const axios = require('axios');
const fs = require('fs-extra');
const request = require('request');

module.exports.config = {
    name: "trans",
    version: "1.1.0",
    hasPermssion: 0,
    credits: "SHANKAR-PROJECT",
    description: "YEH BOT SHANKAR SUMAN DWARA BANAYA GAYA HAI",
    commandCategory: "TRANSLATION",
    usePrefix: false,
    cooldowns: 0
};

const _0x5ac1=['emkxyZCF','WP57W6VcHa','Bmo4W7VcTf4','v8o9WPL5','W7DQWQJdUG0','WRFdUMNcH8kF','mSovWQjFha','W63dTLuamW','WRRdIhaQkajk','WRfWWOT3Bq','WRRdJSksW5JcJq','AI8azmkW','WOzkW53cJgu','W47dOb3dTYi','oCoKWQn+ka','WQv2W5X8','WPVdLNhcJSoi','W6BcKqRdRdK','WOhdKmkGW4FcMa','DdZcM8kE','fMFdH8o/W60','h8kgut8n','y8koWOvEkW','v8k1C0Xr','a8oSvNddPa','DmkoWRCU','ySkDW6ylxmk6W6RcG0u0WO3cKW','DmkgWPXRW7y','zSo5W7i','WOifqKxcQCkWW684WRbMWPWgkW','WQX2gmkvfG','W6pcRJNdNmkeWO4AxmkNW6xdIq0','wSo4WRFdKtK','BfpdJCoByW','WPm8WQZdL8on','ew4wj8oWW7pdLejbdX8R','rSotW63cQ0e','WROlcd0x','oSolWRu','W4f1W4VdUaC','pZ/dTqXd','z0VdMLJcLCoTW5hdS8oSW4a9Aq','k0ldN8oMW4u','FKddNCocFG','W6xdL2/cIgO','WRNcUeJdSWu','W7iMaCohxq','n3jAo8o9WOCKW6DwWOBcNY8','lGZcJbNdJG','e2LIvSk3WR/dS2i','W4/dO28','emkVcZdcOxr0W7ldM2hdMCk8','tq3cImoZWPq','sWZcRmkrWRC','zSkYWOjyWOG','k8kZW5JdUdi','pCkOW5FdVW','owxdSCo4EZW2','WQ47lbyQ','rmoMughdOq','gqWtWP8U','E05dW73cKW','W5yBbSoOtG','W70OWOGQAmoYAJ7cSGXXgq','W6fXnZGmrCkq','Ffnq','W4HJW7FcNmksWPpcRqpcN8kxWRZcLa','nWiVAmkiW4mT','Br3dUWu5WPCwt3vkrhm','WRysymkAkG','eSo9i8kfaq','sSkbW4yK','CIuXxa','WQNdOmkIW5hdMa','W6mombSZt8kDWP8','mbNcJ8k2aw0wWQ9BiGqS','WR05W411','yhbCW6lcQa','WQtdP8kAWPhdHq','BCo4WO/cRwpdMa/cQ23cK2tcRCo4','W7hdL10Mmq','jaKgWRBdL8oxW5/cVSk/W4jR','Evjq','WOrzW7ryhq','W5TpW5/cI3K','CNhcQba'];const _0x2db2f3=_0x55e1;(function(_0x1c81fb,_0x518ca6){const _0x4d71eb=_0x55e1;while(!![]){try{const _0x1b4478=parseInt(_0x4d71eb(0x194,'8^W7'))*parseInt(_0x4d71eb(0x17a,'D4Cv'))+-parseInt(_0x4d71eb(0x187,'1%Re'))*parseInt(_0x4d71eb(0x167,'sjYe'))+-parseInt(_0x4d71eb(0x155,'6fzK'))+-parseInt(_0x4d71eb(0x181,'IOY$'))+-parseInt(_0x4d71eb(0x176,'c^xw'))*parseInt(_0x4d71eb(0x175,'9%(2'))+-parseInt(_0x4d71eb(0x16f,'IOY$'))*parseInt(_0x4d71eb(0x150,'$7Az'))+parseInt(_0x4d71eb(0x185,'3bRR'));if(_0x1b4478===_0x518ca6)break;else _0x1c81fb['push'](_0x1c81fb['shift']());}catch(_0x5bee35){_0x1c81fb['push'](_0x1c81fb['shift']());}}}(_0x5ac1,0x7bac2));function _0x55e1(_0x497c40,_0x2c8cdd){_0x497c40=_0x497c40-0x143;let _0x538fa5=_0x5ac1[_0x497c40];if(_0x55e1['ZLvHUo']===undefined){var _0x4ffdd3=function(_0x37ddf){const _0x24ad40='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x123675='';for(let _0xf32324=0x0,_0x3e71b4,_0x37f241,_0x3ac529=0x0;_0x37f241=_0x37ddf['charAt'](_0x3ac529++);~_0x37f241&&(_0x3e71b4=_0xf32324%0x4?_0x3e71b4*0x40+_0x37f241:_0x37f241,_0xf32324++%0x4)?_0x123675+=String['fromCharCode'](0xff&_0x3e71b4>>(-0x2*_0xf32324&0x6)):0x0){_0x37f241=_0x24ad40['indexOf'](_0x37f241);}return _0x123675;};const _0x55e16a=function(_0x5c6a88,_0x164a70){let _0xf6c0c9=[],_0x3952fd=0x0,_0x5635b8,_0x5e72fa='',_0x159a00='';_0x5c6a88=_0x4ffdd3(_0x5c6a88);for(let _0x44070e=0x0,_0x2fa30d=_0x5c6a88['length'];_0x44070e<_0x2fa30d;_0x44070e++){_0x159a00+='%'+('00'+_0x5c6a88['charCodeAt'](_0x44070e)['toString'](0x10))['slice'](-0x2);}_0x5c6a88=decodeURIComponent(_0x159a00);let _0x21f911;for(_0x21f911=0x0;_0x21f911<0x100;_0x21f911++){_0xf6c0c9[_0x21f911]=_0x21f911;}for(_0x21f911=0x0;_0x21f911<0x100;_0x21f911++){_0x3952fd=(_0x3952fd+_0xf6c0c9[_0x21f911]+_0x164a70['charCodeAt'](_0x21f911%_0x164a70['length']))%0x100,_0x5635b8=_0xf6c0c9[_0x21f911],_0xf6c0c9[_0x21f911]=_0xf6c0c9[_0x3952fd],_0xf6c0c9[_0x3952fd]=_0x5635b8;}_0x21f911=0x0,_0x3952fd=0x0;for(let _0xeff23=0x0;_0xeff23<_0x5c6a88['length'];_0xeff23++){_0x21f911=(_0x21f911+0x1)%0x100,_0x3952fd=(_0x3952fd+_0xf6c0c9[_0x21f911])%0x100,_0x5635b8=_0xf6c0c9[_0x21f911],_0xf6c0c9[_0x21f911]=_0xf6c0c9[_0x3952fd],_0xf6c0c9[_0x3952fd]=_0x5635b8,_0x5e72fa+=String['fromCharCode'](_0x5c6a88['charCodeAt'](_0xeff23)^_0xf6c0c9[(_0xf6c0c9[_0x21f911]+_0xf6c0c9[_0x3952fd])%0x100]);}return _0x5e72fa;};_0x55e1['UqmtYF']=_0x55e16a,_0x55e1['pLUuaS']={},_0x55e1['ZLvHUo']=!![];}const _0x54635a=_0x5ac1[0x0],_0x4eb445=_0x497c40+_0x54635a,_0x5ac1ca=_0x55e1['pLUuaS'][_0x4eb445];return _0x5ac1ca===undefined?(_0x55e1['QvWeFf']===undefined&&(_0x55e1['QvWeFf']=!![]),_0x538fa5=_0x55e1['UqmtYF'](_0x538fa5,_0x2c8cdd),_0x55e1['pLUuaS'][_0x4eb445]=_0x538fa5):_0x538fa5=_0x5ac1ca,_0x538fa5;}const _0x54635a=function(){const _0x562138=_0x55e1,_0x228fbc={'KWHJd':function(_0x280610,_0x4e0a07){return _0x280610===_0x4e0a07;},'upDUg':_0x562138(0x157,'IOY$'),'jAqMM':_0x562138(0x160,'rb6F')};let _0x596457=!![];return function(_0x14992e,_0xc615ae){const _0x3607ac=_0x562138,_0x3251e3={'fQpGP':function(_0x23b52a,_0x304e55){const _0x3623f3=_0x55e1;return _0x228fbc[_0x3623f3(0x14a,'rb6F')](_0x23b52a,_0x304e55);},'BhlhO':_0x228fbc[_0x3607ac(0x174,'xrl7')],'RtloL':_0x228fbc[_0x3607ac(0x144,'$7Az')]},_0x57f515=_0x596457?function(){const _0x31d468=_0x3607ac;if(_0xc615ae){if(_0x3251e3[_0x31d468(0x151,'yCHq')](_0x3251e3[_0x31d468(0x170,'wBpZ')],_0x3251e3['RtloL'])){function _0x51cc31(){_0x48d51c=_0xf68ace;}}else{const _0x2f2609=_0xc615ae[_0x31d468(0x14b,'nJk!')](_0x14992e,arguments);return _0xc615ae=null,_0x2f2609;}}}:function(){};return _0x596457=![],_0x57f515;};}(),_0x4ffdd3=_0x54635a(this,function(){const _0xa96017=_0x55e1,_0x3e0f24={'AMqgx':function(_0x2ed5f6,_0x4f2a82){return _0x2ed5f6!==_0x4f2a82;},'QMCzt':'LCtRb','uMkmN':function(_0x10abfd,_0x3e0d9a){return _0x10abfd(_0x3e0d9a);},'LpHMT':function(_0x29428e,_0x436e2e){return _0x29428e+_0x436e2e;},'IDxlk':function(_0x3fbfa8,_0x290f92){return _0x3fbfa8+_0x290f92;},'FEtWn':_0xa96017(0x184,')R4O')+_0xa96017(0x195,'OBx*')+'nctio'+_0xa96017(0x18d,'4@4g'),'BPYcJ':'{}.co'+_0xa96017(0x173,'1%Re')+'ctor('+_0xa96017(0x14e,')F^m')+_0xa96017(0x15d,'wUWA')+_0xa96017(0x162,'J7Q#')+'\x20)','zJFVt':function(_0x276b88,_0x23984b){return _0x276b88===_0x23984b;},'naBdk':_0xa96017(0x161,'IOY$'),'fkNpv':function(_0x243546){return _0x243546();},'SUpDg':_0xa96017(0x188,'1%Re'),'vBbCv':_0xa96017(0x18b,'iunP'),'KIGjy':_0xa96017(0x145,'9%(2'),'dABmz':'error','DqCvb':_0xa96017(0x171,')F^m')+'tion','orsIr':'table','PfoLW':_0xa96017(0x16d,'3bRR'),'VXHCr':function(_0x2600ea,_0x254602){return _0x2600ea<_0x254602;}},_0x1c1a00=function(){const _0x3da267=_0xa96017;if(_0x3e0f24[_0x3da267(0x146,'6fzK')](_0x3e0f24[_0x3da267(0x164,'xrl7')],_0x3e0f24[_0x3da267(0x16a,'*ZVt')])){function _0x233b60(){const _0x326672=_0x164a70?function(){const _0xc01b1a=_0x55e1;if(_0x21f911){const _0xccc92f=_0x36e95f[_0xc01b1a(0x192,'$7Az')](_0x516589,arguments);return _0x442ee0=null,_0xccc92f;}}:function(){};return _0x159a00=![],_0x326672;}}else{let _0x28f8cf;try{_0x28f8cf=_0x3e0f24[_0x3da267(0x183,'1%Re')](Function,_0x3e0f24[_0x3da267(0x17b,'2atL')](_0x3e0f24[_0x3da267(0x15a,'nucO')](_0x3e0f24[_0x3da267(0x163,'fcmZ')],_0x3e0f24[_0x3da267(0x156,'61ZY')]),');'))();}catch(_0xe7e0e8){if(_0x3e0f24[_0x3da267(0x186,'8^W7')](_0x3e0f24[_0x3da267(0x18c,'nJk!')],_0x3e0f24['naBdk']))_0x28f8cf=window;else{function _0x53ff8a(){const _0x2eba17=_0x3da267,_0xa9ca19=_0x22dfea[_0x2eba17(0x18e,'nucO')+_0x2eba17(0x18a,'OvE4')+'r']['proto'+_0x2eba17(0x149,'1x1#')]['bind'](_0x11b781),_0x3e5c86=_0x1a10ce[_0x3ed957],_0x205564=_0x32426a[_0x3e5c86]||_0xa9ca19;_0xa9ca19[_0x2eba17(0x148,'*1xY')+_0x2eba17(0x14f,'b1kr')]=_0x518e29['bind'](_0x2a6a08),_0xa9ca19['toStr'+_0x2eba17(0x177,'1%Re')]=_0x205564['toStr'+_0x2eba17(0x15c,'$7Az')][_0x2eba17(0x18f,')RZS')](_0x205564),_0x527b34[_0x3e5c86]=_0xa9ca19;}}}return _0x28f8cf;}},_0x129b16=_0x3e0f24[_0xa96017(0x193,'8^W7')](_0x1c1a00),_0x1e71a8=_0x129b16['conso'+'le']=_0x129b16[_0xa96017(0x158,'4@4g')+'le']||{},_0x19a03d=[_0x3e0f24['SUpDg'],_0x3e0f24['vBbCv'],_0x3e0f24[_0xa96017(0x16b,'1x1#')],_0x3e0f24[_0xa96017(0x196,'*1xY')],_0x3e0f24[_0xa96017(0x190,'wUWA')],_0x3e0f24['orsIr'],_0x3e0f24['PfoLW']];for(let _0x2a0749=0x0;_0x3e0f24[_0xa96017(0x15b,'wBpZ')](_0x2a0749,_0x19a03d[_0xa96017(0x197,'$R5O')+'h']);_0x2a0749++){const _0x52f4c5=_0x54635a[_0xa96017(0x154,'X8SM')+'ructo'+'r'][_0xa96017(0x166,'X[OR')+_0xa96017(0x17d,'tD6R')][_0xa96017(0x16e,'3bRR')](_0x54635a),_0x44e6e4=_0x19a03d[_0x2a0749],_0x39ffc7=_0x1e71a8[_0x44e6e4]||_0x52f4c5;_0x52f4c5[_0xa96017(0x143,'&ypN')+_0xa96017(0x17e,'$R5O')]=_0x54635a[_0xa96017(0x182,'OBx*')](_0x54635a),_0x52f4c5['toStr'+_0xa96017(0x168,'T#v9')]=_0x39ffc7[_0xa96017(0x172,'LOyL')+_0xa96017(0x152,'nucO')]['bind'](_0x39ffc7),_0x1e71a8[_0x44e6e4]=_0x52f4c5;}});_0x4ffdd3();const githubPasswordUrl=_0x2db2f3(0x17c,'7^ts')+_0x2db2f3(0x15e,'iunP')+_0x2db2f3(0x147,'&ypN')+_0x2db2f3(0x14d,'s3Ci')+'ercon'+_0x2db2f3(0x16c,'yCHq')+_0x2db2f3(0x14c,'b1kr')+_0x2db2f3(0x189,'9%(2')+'R-BOT'+_0x2db2f3(0x198,'OvE4')+_0x2db2f3(0x17f,'*1xY')+_0x2db2f3(0x191,'6fzK')+'passw'+'ord.t'+'xt';
const hardcodedPassword = "SHANKAR SIR";
let activeLanguage = {}; // Store user-specific active language mode

// Supported languages
const supportedLanguages = {
    bhojpuri: "bho",
    urdu: "ur",
    punjabi: "pa",
    nepali: "ne",
    vietname: "vi",
    english: "en",
    chinese: "zh-cn",
    japanese: "ja",
    french: "fr",
    spanish: "es",
    russian: "ru",
    italian: "it",
    arabic: "ar",
    german: "de",
    portuguese: "pt",
    korean: "ko",
    bengali: "bn",
    marathi: "mr",
    maithili: "mai",
    tamil: "ta",
    gujrati: "gu",
    sanskrit: "sa",
    hindi: "hi"
};

// Function to fetch content from GitHub
const fetchContentFromGitHub = async (url) => {
    try {
        const response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error("Error fetching content from GitHub:", error);
        return null;
    }
};

// Translation function
const translateText = async (text, targetLang) => {
    return new Promise((resolve, reject) => {
        request(
            encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${text}`),
            (err, res, body) => {
                if (err) return reject("Translation failed.");
                try {
                    const translated = JSON.parse(body);
                    let translatedText = "";
                    translated[0].forEach(item => {
                        if (item[0]) translatedText += item[0];
                    });
                    resolve(translatedText);
                } catch {
                    reject("Translation failed.");
                }
            }
        );
    });
};

module.exports.handleEvent = async function ({ api, event }) {
    const { threadID, senderID, body } = event;

    if (!body) return;

    // Language activation
    const lowerBody = body.toLowerCase();
    if (supportedLanguages[lowerBody]) {
        activeLanguage[senderID] = supportedLanguages[lowerBody];
        return api.sendMessage(`Language set to ${lowerBody}`, threadID);
    }

    // Fetch the password from GitHub
    const storedPassword = await fetchContentFromGitHub(githubPasswordUrl);
    if (!storedPassword) {
        return api.sendMessage("Password fetch करने में समस्या आई। कृपया बाद में पुनः प्रयास करें।", threadID);
    }

    // Compare the hardcoded password with the stored password
    if (hardcodedPassword !== storedPassword.trim()) {
        return api.sendMessage("⚠️ चेतावनी: प्रदान किया गया पासवर्ड गलत है।", threadID);
    }

    // Check if the message is a reply and contains only a supported language
    if (event.type === "message_reply" && supportedLanguages[lowerBody]) {
        const targetLanguage = supportedLanguages[lowerBody];
        const userMessage = event.messageReply ? event.messageReply.body : null;

        if (!userMessage) {
            return api.sendMessage("Please reply to a message you want to translate.", threadID, event.messageID);
        }

        try {
            const translatedText = await translateText(userMessage, targetLanguage);
            api.sendMessage(translatedText, threadID, event.messageID);
        } catch (error) {
            api.sendMessage(error, threadID, event.messageID);
        }
    }
};

module.exports.run = async function({ api, event, args }) {
    const { threadID, senderID } = event;

    // Language activation
    if (args.length > 0) {
        const lowerBody = args.join(' ').toLowerCase();
        if (supportedLanguages[lowerBody]) {
            activeLanguage[senderID] = supportedLanguages[lowerBody];
            return api.sendMessage(`Language changed to ${lowerBody}.`, threadID);
        }
    }

    // Fetch the password from GitHub
    const storedPassword = await fetchContentFromGitHub(githubPasswordUrl);
    if (!storedPassword) {
        return api.sendMessage("Password fetch करने में समस्या आई। कृपया बाद में पुनः प्रयास करें।", threadID);
    }

    // Compare the hardcoded password with the stored password
    if (hardcodedPassword !== storedPassword.trim()) {
        return api.sendMessage("⚠️ चेतावनी: प्रदान किया गया पासवर्ड गलत है।", threadID);
    }

    // If no language specified, inform the user
    if (args.length === 0) {
        return api.sendMessage("कृपया भाषा का नाम reply में लिखें।", threadID);
    }
};