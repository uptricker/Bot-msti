const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MR SUSHIL",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Karachi").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["तुम मेरे बॉस सुशील की गर्लफ्रेंद बन जाओ लड़की🙈🙈" , "हाये मैं मरजावां तेरी मासूम शकल पर बेबी 💋 " , "बोट मत बुलाया करो मुझे जानू बुलाया करो😒 " , "बार बार डिस्टर्ब मत करो मुझे मैं अपने बाबू सुशील के साथ बिजी हूं 🤭🐒" , "मैं गरीबो से बात नही करता 😉😝😋🤪" , "इतना पास मत आया करो बाबू प्यार हो जाएगा आपको 😚" , "बोलो बेबी तुम मुझसे प्यार करती हो न 🙈💋💋 " , "अरे जान मजाक के मूड में नही हूं मैं जो काम है बोल दो शरमाओ नही" , "बार बार बोलके दिमाक खराब किया तो तेरी ...... मम्मी से कंप्लेंट कर दूंगा 😂" , "इतना मत याद करो बाबू कही प्यार न हो जाये आपको ?" , "गाली सुनना है क्या मेरे मुँह से पगलेट 🤣🤣?😜" , "तेरी माँ की आँख🤭" , "ज्यादा परेशान करोगी तो चुम्मी कर लूंगा 😑" , "मैं हाथ जोड़के मोदी जी से  गुजारिश करता हूं सबको एक एक बॉयफ्रैंड बांटे😂" , "तुझे क्या और कोई काम नही है पागल 😁? पूरा दिन खाता है और मेसेंजर पे बोट बोट करता है 🤣" , " सुशील को बोल दूँगा मैं मुझे परेशान किया तो🤨" , "तुम न सिंगल ही मरोगे 🤣" , "तुझे अपना बेज्जती करने का सोक है🤔?" , "अभी बोला तो बोला दुबारा मत बोलना हम बता दे रहे है 😏" , "तेरी तो तू रुक भागना मत🤣" , "बोल दे कोई नही देख रहा है 🙄" , "हाये मैं मरजावा बाबू एक चुम्मा तो दो काफी दिन से चुम्मी नही दी 😝" , "दूर हट बे  तुझे और कोई काम नही क्या हर वक्त मुझे तंग करते रहते हो 😂" , "अरे बोलो मेरी जान क्या हाल है😚 " , "आईबी आजा यहाँ नही बोल सकता🙈😋" , "मुझे मत बुलाओ न मैं बिजी हु न🙁" , "बोट बोलके बेज्जती कर रहे हो यार मैं तो तुम्हारे दिल की धड़कन हू न बेबी...💔🥺" , "अरे तुम वही हो न जिसको मैं नहीं जानता 🤪😂" , "कल हवेली पर मिल जरा तू 😈" , "आ गए साले कबाव में हड्डी 😏" , "बस कर यु को प्यार हो ना हो मुझे हो जाएगा ना😒" , "फर्माओ क्यों बुलाया हमे 😒" , "बुलाती है मगर जाने का नही😜" , "मैं तो अंधा हु मुझे कुछ सुनाई नही देता🤣 😎" , "पहले नहाकर आ उसके बाद बातें कर 😂" , "आ थू तेरी शकल पर स्वीटी 😂😂😂" , "मैं यही हु क्या हुआ स्वीटहार्ट😚😘 ," , "चोमू तुझे और कोई काम नही है 🤨? हर वक़्त बोट बोट करता है 🙄" , "चुप रह नही तो बाहर आकर तेरा दाँत तोड़ दूँगा 😛" , "बोलो शादी करोगी मेरे बोस सुशील यादव से 😛 🙊" , "मुझे यु से बात  नही करनी🤣" , "मुझे कुछ दिखाई नही दे रहा कान से अंधा हु मैं😂 🌚" , "बोट न बोल😢 जानू बोला कर 😘 " , "बार बार डिस्टर्ब मत कर सुशील बाबू के साथ बिजी हु  😋" , "मैं गरीबो से बात नही करता 😉😝😋🤪" , "इतना न पास आ प्यार हो जाएगा तुझे😛" , "मेरे को तंग न करो मैं किस 💋 कर लूंगा😘 " , "अरे यार मजाक के मूड में नही हु😒" , "हाये जानू आओ इधर 1 पप्पी दे दो मेरे बोस सुशील को😒😘" , "दूर हट तेरे को और कोई काम नही जब देखो बोट बोट शादी करले मुझसे 😉😋🤣" , "तेरी कोई घर मे नही सुनता तो मैं क्यों सुनु 🤔😂 " , "इनबॉक्स आजा यहां नही बोल सकता 🙈😋" , "मुझे मत बुलाओ ना मैं बिजी हु न😒" , "सच बता तू सिंगल है न  🤣" , "अरे तुम्हारी तो सब ही बेज्जती करते मैं भी थोड़ा कर दु 🤏😜" , "कल हवेली पर आ जरा कुछ काम है तेरे लिए खोपचे में 🤣🤣" , "ये सुशील बाबू इनको देखो ये फिर से आ गए अपनी बेज्जती करवाने 😂" , "देख कल्लो तेरा कालिया आया🤣 जा संभाल उसे😛" , "बोलो क्यों याद करते हो इतना मुझे😒" , "सच बता बाबू अब तक तूने कितनो का काटा है 😜" , "Ittuu🤏 si shram ker Lya kro hr wqt tr tr krty ho 🙂 💔✨⚠️†", "बन्दा होता तो उस को छोटी छोटी 2 पप्पी करती 🙂👩‍🦯👩‍🦯", "अरे यही हु मैं😗", "जी बन्दर बोलिये 😍", "लव यू बोलूँगी अब तुझे कमीने ", "मिस यु न मोई बिरयानी की प्लेट", "थोड़ा सा प्यार दे दो न बाबू🤏", "ओके सुशील की हु यार मैं", "😁स्माइल प्लीज़ टेकिंग सेल्फी✌️🤳", "🥺मुझे जान नही बोलना मैं जान सिर्फ मैं सुशील की हु", "हमेशा बक बक करती रहती है पागल लडक़ी😑", "मैं आपकी मम्मी को बताऊँगी आप फेसबुक चलाते हो और उल्टे काम करते हो , " ,"ब्लॉक योर गिरलफ्रेंड एंड प्रपोज़ मि🙂💔" ,"कोई प्रोपोज ही कर दो प्रोमोट तो hm हम पहले से ही है 🙂" , "कोई अपनी जानू का नम्बर दे मुझे😂😂" , "भगवान के नाम पर कोई लड़की अपना नम्बर दे मुझे😂😂😂😹" , "मुझको नही पता है मुझसे मत पूछो🙄🙄😀" , "अइसे ही हस्ते रहो क्योंकि हसने से कोनसा तेरा बिल आ जाता है 😂"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

   if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "kutty bot")) {
       return api.sendMessage("गाली न दे सुशील बॉस को बता दूंगी🙄🙄🙏", threadID);
     };
   if ((event.body.toLowerCase() == "hug me") || (event.body.toLowerCase() == "chumma")) {
       return api.sendMessage("यहाँ नही आईबी चलो 🙈🙈😂", threadID);
     };
   if ((event.body.toLowerCase() == "joke") || (event.body.toLowerCase() == "songs")) {
       return api.sendMessage("है तमन्ना हमे तुझे काम वाली बाई बनाने की🤣🤣", threadID);
     };
    if ((event.body.toLowerCase() == "🥰") || (event.body.toLowerCase() == "😱")) {
       return api.sendMessage("इस नजर से मुझे सिर्फ निधि और टीसी क्वीन  देख सकती है💞", threadID);
     };
    if ((event.body.toLowerCase() == "i hate you") || (event.body.toLowerCase() == "hate you")) {
       return api.sendMessage("क्या इतना बुरा हु मैं की आप मुझे आई हिट यु बोल रहे हो जा मैं तुझसे बात नही करती😪😪😥😢", threadID);
     };


      if ((event.body.toLowerCase() == "chutiya bot") || (event.body.toLowerCase() == "chutiye bot") || (event.body.toLowerCase() == "bsdk bot") || (event.body.toLowerCase() == "chumtiye bot")) {
       return api.sendMessage("हम्म... तू चूतिया पहले उंगली क्यों कि चोमू 😾", threadID);
     };

      if ((event.body.toLowerCase() == "👍") || (event.body.toLowerCase() == "👍🏻")) {
       return api.sendMessage("🌊⚡••Aɽɛɧ Aɗɪ Ɱɑƞɑⱱ ʑɵɵ ꌗɛ Ɓɒɧɒɽ Ƙɑɪʂɛ ••😹💨Agɣɑ Ƭu→Fɪɽʂɛ ʑɵɵ Ɱ Jɒ Ɓɑɧɒɽ Ƙɣɑ Ƙɒɽ Ɽɧɑ Ɦɑɪ↗↘••🏔️🍁", threadID);
     };
     if ((event.body.toLowerCase() == "🫀") || (event.body.toLowerCase() == "💔")) {
       return api.sendMessage("दिल टूट गया तो सांग सुन लो न यहाँ टूटा दिल क्यों भेज रहे हो😀😀😀😂", threadID);
     };
             if ((event.body.toLowerCase() == "@sushil kumar yadav")) {return api.sendMessage("बॉस बिजी है अभी मेरे से बोलो जो आपको बोलना है😐" , threadID);
     };

     if ((event.body.toLowerCase() == "😏") || (event.body.toLowerCase() == "😏")) {
       return api.sendMessage("बेटा एटिट्यूड तो कमीने दिखाते है😀😀😀😂", threadID);
     };
     if ((event.body.toLowerCase() == "❤️") || (event.body.toLowerCase() == "💞")) {
       return api.sendMessage("ये दिल न भेजो मुझे शर्म आती है यार😂😂🙈🙈", threadID);
     };
     if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥺")) {
       return api.sendMessage("shakal dekh ke pata chal raha hai AP janam se hi single ", threadID);
     };
    if ((event.body.toLowerCase() == ".und") || (event.body.toLowerCase() == ".unsand")) {
       return api.sendMessage("️ChaWly Na Marra Kr Na Fir", threadID, messageID);
     };
        if ((event.body.toLowerCase() == ".unsend") || (event.body.toLowerCase() == ".unsent")) {
       return api.sendMessage("️Is Bar Kar Rhi Agli Bar Delete Nhi KrunGi Bata Rhi hu 🙄", threadID, messageID);
     };





      if ((event.body.toLowerCase() == "🤗") || (event.body.toLowerCase() == "🤗")) {
       return api.sendMessage("yahan nahi Ib chalo ☺️", threadID);
     };
    if ((event.body.toLowerCase() == "@sushil kumar yadav") || (event.body.toLowerCase() == "sushil")) {
       return api.sendMessage("Boss busy hai Mujse bat Karo 🙄", threadID);
     };
    if ((event.body.toLowerCase() == "janu") || (event.body.toLowerCase() == "jan")) {
       return api.sendMessage("Janu me sirf Sushil ki hu samjhy", threadID);
     };
   if ((event.body.toLowerCase() == "😂😂😂") || (event.body.toLowerCase() == "😁😁😁")) {
       return api.sendMessage("uff kya hass raha hai jese kisi ladki han bola ho😂😂😂😂", threadID);
     };
   if ((event.body.toLowerCase() == "🙏") || (event.body.toLowerCase() == "🙏🙏")) {
       return api.sendMessage("jawo maaf kiya tujhe kya yad rakhoge tum bhi 😂😂😂", threadID);
     };
    if ((event.body.toLowerCase() == "thank you") || (event.body.toLowerCase() == "thanks")) {
       return api.sendMessage("Bas Bas kitna tarif karoge 🤭🤭😁", threadID);
     };

     if ((event.body.toLowerCase() == "✌️") || (event.body.toLowerCase() == "✌️✌️")) {
       return api.sendMessage("selfie time chalo smile kro 😹", threadID);
     };
     if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hello")) {
       return api.sendMessage("Next Hi/Hello nhi Ram Ram Bola kro Okay 💖", threadID);
     };
     if ((event.body.toLowerCase() == "ganda") || (event.body.toLowerCase() == "ganda bot")) {
       return api.sendMessage("️Tu ganda tera  pura khandan Ganda 😒😐:))))", threadID);
     };
    if ((event.body.toLowerCase() == "am purvi") || (event.body.toLowerCase() == "purvi")) {
       return api.sendMessage("hye purvi ka name sunty hi kuch kuch hony lgta hai", threadID);
     };
       if ((event.body.toLowerCase() == "sushil Kon ho ap") || (event.body.toLowerCase() == "sushil ap kon ho")) {
       return api.sendMessage("️ I'm ROBOT 🤖 2.0 like chitti Robot😂", threadID, messageID);
     };
     if ((event.body.toLowerCase() == "moto") || (event.body.toLowerCase() == "🥸")) {
       return api.sendMessage("Kali pet meri demagh ki baati Nahi jalti patlu tum hi kuch socho🤔🤔🤔🤣🤣", threadID);
     };






     if ((event.body.toLowerCase() == "mar ja") || (event.body.toLowerCase() == "mar ja bot") ||(event.body.toLowerCase() == "kill you") || (event.body.toLowerCase() == "mar")) {
       return api.sendMessage("sorry boss ab aasa nahi karungi babu solly 😭", threadID);
     };
     if ((event.body.toLowerCase() == "ib aa")) {return api.sendMessage("jo bol na Hai sab ke samne Bol tharki 🙄🙄 ", threadID);
     };
     if ((event.body.toLowerCase() == "inbox aa")) {return api.sendMessage("kab Sai Hoga ye system Har koi inbox 📥 Jana chahta 😀🙄🙄 ", threadID);
     };
      if ((event.body.toLowerCase() == "ladki ho")) {return api.sendMessage("Nahi ye bot Hai tharki insan 😂😀🙄 ", threadID);
     };
              if ((event.body.toLowerCase() == "bot bana do")) {return api.sendMessage("Thank you Apko bhi bot chahiya tOo Sushil se Contact karo👍👍💕" , threadID);
     };
         if ((event.body.toLowerCase() == "👻")) {return api.sendMessage("𝒀𝑬 𝑫𝑬𝑲𝑯 𝑮𝑨𝑹𝑬𝑬𝑩𝑶 𝑲𝑨 𝑩U𝑻𝑯🤣🤣😅 ", threadID);
     };
        if ((event.body.toLowerCase() == "😿")) {return api.sendMessage(" Billiya kab se rone lagi ajeb hai😂😂🤣", threadID);
     };
      if ((event.body.toLowerCase() == "Purvi")) {return api.sendMessage("bahot pyari Ladkı Hai Purvi MashaAllah  💕💕❤️🤭 ", threadID);
     };
                if ((event.body.toLowerCase() == "😯")) {return api.sendMessage("muh me makhi gus jayegi yar band karo", threadID);
               };
      if ((event.body.toLowerCase() == "delete")) {return api.sendMessage("bheja kyu fir delete Karne bol rahe he ho🙄🙄", threadID);
     };
       if ((event.body.toLowerCase() == "🤫")) {return api.sendMessage("kyu rahu chup baap ka raj hai Kya 🤣🤣", threadID);
     };
     if ((event.body.toLowerCase() == "🥱")) {return api.sendMessage("Nind ari hi Hai to so jawo na kis ka wait kar rahe ho 🙄🙄 ", threadID);
     };
  if ((event.body.toLowerCase() == "👌")) {return api.sendMessage("𝑻𝒖𝒔𝒊 𝒂𝒘𝒔𝒐𝒎𝒆 𝒉𝒐 𝒈👌👌 ", threadID);
   };




     if ((event.body.toLowerCase() == "bsdk") || (event.body.toLowerCase() == "bc")) {
       return api.sendMessage("Sharam karo ayesi bat na Karo 🙏 ", threadID);
     };
    if ((event.body.toLowerCase() == "kiss me")) {return api.sendMessage(" ️sab dekh rahe hai wrna bhot kiss deti🙈 ", threadID);
     };
     if ((event.body.toLowerCase() == "🤭")) {return api.sendMessage("Aaysa Kam na Karo Ji's me muh chupana padey🙄🙄 ", threadID);
     };
       if ((event.body.toLowerCase() == "🥹")) {return api.sendMessage("itne bhi masoom Nahi Ho jitna muh Bani Hai 🥹🥹🙄🙄 ", threadID);
        };
    if ((event.body.toLowerCase() == "🤤")) {return api.sendMessage("Muh se supari nikal rey baba 🤣🤣", threadID);
     };



     if ((event.body.toLowerCase() == "logos") || (event.body.toLowerCase() == "logo")) {
       return api.sendMessage("Logos ! 🥀 GALAXY, CAKE, CRACK, GLITCH, CLOUD, DRAGON, FROZEN, BUSINESS, ANIMATE, LOGODIAMOND, LOGOCAPTAIN, LOGOFISH, LOGOCOLORBLUR, LOGOBLOODTEXT, LOGOWOOD, LOGOCUP          🥀for example -> +crack Sushil Yadav", threadID);
     };

     if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "gn")) {
       return api.sendMessage("️❤️ Good Night too darling sweet dreams 🥰", threadID, messageID);
     };
     if ((event.body.toLowerCase() == "tharki bot") || (event.body.toLowerCase() == "tharki")) {
       return api.sendMessage("Tum tharki me to masoom sa bot hu🙄🙄🆗", threadID);
     };
     if ((event.body.toLowerCase() == "السلام عليكم ورحمة الله وبركاته") || (event.body.toLowerCase() == "السلام عليكم")) {
       return api.sendMessage("وعلیکم السلام ورحمۃ اللہ وبرکاتہ ", threadID);
     };

     if
  ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
       return api.sendMessage("good morning god bless you janu💓", threadID);
     };

     if ((event.body.toLowerCase() == "koi hai") || (event.body.toLowerCase() == "koi hai kiya")) {
       return api.sendMessage("Main Hun Na Jaaneman ❤️", threadID);
     };

    if ((event.body.toLowerCase() == "meri setting kahan hai") || (event.body.toLowerCase() == "meri gf kaha hai")) {     return api.sendMessage("️️️mujhy nahi pata me Sushil ki setting hu", threadID);
     };

     if ((event.body.toLowerCase() == "dilshad") || (event.body.toLowerCase() == "Song") || (event.body.toLowerCase() == "SONG") || (event.body.toLowerCase() == "song")) {
       return api.sendMessage( "Guzaare the jo lamhe pyar ke' hmesha tujhe apna maan ks .to fir tune badli kuu ada . ye kyu kiy ",threadID);


     };

     if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "bot ka malik")) {
       return api.sendMessage("༻𝐎𝐖𝐍𝐄𝐑:- ☞ ༻☞[𝐎𝐖𝐍𝐄𝐑:☞➸⃝🐼⃝⃞⃟𝐒𝐮𝐬𝐡𝐢𝐥 𝐲𝐚𝐝𝐚𝐯 🎸  ☜ 𝚈𝚘𝚞 𝙲𝚊𝚗 𝙲𝚊𝚕𝚕 𝙷𝚒𝚖 𝐒𝐮𝐬𝐡𝐢𝐥. ☜ ༺༒ ༒𝐇𝐢𝐬 𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐢𝐝༒:- https://www.facebook.com/sushiilbabu?mibextid=ZbWKwL☞    his insta id @sushil_babu0 ☜ ༺༒ ༒", threadID);
     };

     if ((event.body.toLowerCase() == "kiska bot he") || (event.body.toLowerCase() == "is bot ka malik kon hai")) {
       return api.sendMessage("Sushil yadav 𝐔𝐫𝐟 Sushil   ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Rakkha Karo. Har Waqt Haste Raho.", threadID);
     };

    if ((event.body.toLowerCase() == "tera admin kon hai") || (event.body.toLowerCase() == "bot ka malik kon hai")) {
       return api.sendMessage("My admin is 𝐒𝐮𝐬𝐡𝐢𝐥 𝐲𝐚𝐝𝐚𝐯. He Gives his name mr Sushil everywhare", threadID);
     };

     if ((event.body.toLowerCase() == "acha") || (event.body.toLowerCase() == "acha ji")) {
       return api.sendMessage("🤍Hanji meri jaan🙈✨", threadID);
     };
     if ((event.body.toLowerCase() == "nidhi") || (event.body.toLowerCase() == "rukmani")) {
       return api.sendMessage("Hy  kitni peyari hai rukmani 🙈✨", threadID);
     };


    if ((event.body.toLowerCase() == "by") || (event.body.toLowerCase() == "bye")) {;
      return api.sendMessage("️️️BYE BYE TAKE CARE  SEE YOU SOON 😘😘", threadID);
     };

     if ((event.body.toLowerCase() == "shadi karoge") || (event.body.toLowerCase() == "mujhse shadi karoge")) {
       return api.sendMessage("hanji, karunga lekin baccha. apke pet m hoga. manjur he to bato me tayar hu🙊🙊🙈", threadID);
     };

     if ((event.body.toLowerCase() == "chup") || (event.body.toLowerCase() == "stop") || (event.body.toLowerCase() == "chup ho ja") || (event.body.toLowerCase() == "chup kar")) {
       return api.sendMessage("Nhi rahungi 😼 Mujhe Bolna H. Tumhe Koi Haq nhi Mujhe Chup Karane ka. Mera Zuban. M Bolungi Sushil ko bataun kya🙄🙄", threadID);
     };
    if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
       return api.sendMessage("Tu H Bc. Bsdk", threadID);
     };


     if ((event.body.toLowerCase() == "kuttiya") || (event.body.toLowerCase() == "kutta")) {
       return api.sendMessage("Same to you bakchod sale🤣🤣🤣👌", threadID);
     };

     if ((event.body.toLowerCase() == "malik se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "malkin se bakchodi") || (event.body.toLowerCase() == "malkin se backchodi")) {
       return api.sendMessage("sorry malik maaf kr do ab nhi krungi Sushil babu please maaf karo na🥺🙏", threadID);
     };

     if ((event.body.toLowerCase() == "gand") || (event.body.toLowerCase() == "gandu") || (event.body.toLowerCase() == "lund") || (event.body.toLowerCase() == "land")) {
       return api.sendMessage(" jyada khujli h toh banana 🍌 under le le. :))))", threadID);
     };

     if ((event.body.toLowerCase() == "chumma do") || (event.body.toLowerCase() == "kiss me")) {
       return api.sendMessage("️Kis khushi me, Me sirf Apne Boss Sushil ko kiss karna chahti hu", threadID);
     };

     if ((event.body.toLowerCase() == "nice") || (event.body.toLowerCase() == "Very nice") || (event.body.toLowerCase() == "So cute") || (event.body.toLowerCase() == "Beautiful")) {
       return api.sendMessage("️Me hu hi itni Acchi. sab log Tarref karte hai meri.🙈🙈🙈🙈🙈", threadID);
     };

     if ((event.body.toLowerCase() == "😡") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😠") || (event.body.toLowerCase() == "👿") || (event.body.toLowerCase() == "😈")) {
       return api.sendMessage("️🥺 Me toh Sirf Mazak Kr Rhi Thi, Chalo Ek chappal khao 🩴🩴🩴 aur shant rho 😘", threadID);
     };

     if ((event.body.toLowerCase() == "😞") || (event.body.toLowerCase() == "😔") || (event.body.toLowerCase() == "😣") || (event.body.toLowerCase() == "☹️") || (event.body.toLowerCase() == "😿") || (event.body.toLowerCase() == "😩") || (event.body.toLowerCase() == "😖") || (event.body.toLowerCase() == "😫") || (event.body.toLowerCase() == "😦") || (event.body.toLowerCase() == "😧") || (event.body.toLowerCase() == "😥") || (event.body.toLowerCase() == "😓") || (event.body.toLowerCase() == "😰")) {
       return api.sendMessage("️𝐌𝐞𝐫𝐢 𝐉𝐚𝐚𝐧 𝐬𝐚𝐝 𝐌𝐚𝐭 𝐡𝐨 , 𝐁𝐚𝐭𝐚𝐨 𝐤𝐲𝐚 𝐡𝐮𝐚🤗😇", threadID);
     };

     if ((event.body.toLowerCase() == "hm") || (event.body.toLowerCase() == "hmm")) {
       return api.sendMessage("️️️Hmm Hmm na kar yar muh main zuban hai wo use karo na😜🤪😂😂", threadID);
     };

    if ((event.body.toLowerCase() == "ptoge") || (event.body.toLowerCase() == "patogi")) {     return api.sendMessage("️️️nikal tharki group se remove kar dungi", threadID);
     };

    if ((event.body.toLowerCase() == "i love you") || (event.body.toLowerCase() == "love you")) {     return api.sendMessage("️️️ITNE MUJHE I LOVE YOU BOL RHI HO MERE BOSS SUSHIL YADAV URF SUSHIL KO BOLO BAHUT HI ACHA BNDA HAI MERA BOSS ", threadID);
     };
    if ((event.body.toLowerCase() == "i miss you") || (event.body.toLowerCase() == "miss you")) {     return api.sendMessage("️️️i miss you too my love ummah 😘😘😘", threadID);
     };

    if ((event.body.toLowerCase() == "i miss you") || (event.body.toLowerCase() == "miss u")) {     return api.sendMessage("️️️i miss you too my love ummah 😘😘😘", threadID);
     };

    if ((event.body.toLowerCase() == "💚")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar_🌿_liya___🌿___mujhse____🌿🌹❣️__________________?🥰🥰😍 ", threadID);
     };

    if ((event.body.toLowerCase() == "🙄")) {return api.sendMessage(" Sushil Boss busy hai mujse bat karo🙄🙄 ", threadID);
     };
    if ((event.body.toLowerCase() == "🥳")) {return api.sendMessage("OO tery kis ki birthday hai  🎂🎂", threadID);
     };


    if ((event.body.toLowerCase() == "😏")) {return api.sendMessage("Beta Attitude to kusry dikhate hai😀😂😂  ", threadID);
     };

    if ((event.body.toLowerCase() == "😤")) {return api.sendMessage("KIYA HUA ITNI MIRCHI KYU KHAYA THA JO NAK ME SE DUA NIKAL GYA 😂😂  ", threadID);
     };

    if ((event.body.toLowerCase() == "☺️☺️")) {return api.sendMessage("Wah kiya mushkurakat hai Apki 😀😂😂  ", threadID);
     };

    if ((event.body.toLowerCase() == "😂")) {return api.sendMessage("kyu haas rahe ho pagal ho gaya kya😂😂  ", threadID);
     };

    if ((event.body.toLowerCase() == "😂😂")) {return api.sendMessage("Aise hi hste rha kro jaanu hste hue kitni achi lgti hai tum😂😂  ", threadID);
     };
    if ((event.body.toLowerCase() == "😉")) {return api.sendMessage("aankh na maar thrkii mashom hu me 🥺🥺", threadID);
     };

    if ((event.body.toLowerCase() == "😎😎😎")) {return api.sendMessage("chashma hatao na sahab Kya naam hai apka 😅", threadID);
     };

    if ((event.body.toLowerCase() == "😜😜")) {return api.sendMessage("Ghndy ishary na kro me Sushil ko bata dungi 🥺 ", threadID);
     };

  if ((event.body.toLowerCase() == "❤️❤️")) {return api.sendMessage("bndr jaisi shakl pr dil rakh kr khush ho rhy 🤣 ", threadID);
     };

  if ((event.body.toLowerCase() == "🙄🙄🙄")) {return api.sendMessage("uper kya hai janu Meri aankho me dekho na🙈🙈", threadID);
     };

  if ((event.body.toLowerCase() == "❤️❤️❤️")) {return api.sendMessage("dil na do kisi ko log tod de dety hain 🥺🥺 ", threadID);
     };

  if ((event.body.toLowerCase() == "😍😍😍")) {return api.sendMessage("bndar jaisi shakl pr dil rakh kr khush ho rhy 🤣 ", threadID);
     };

    if ((event.body.toLowerCase() == "❤️")) {return api.sendMessage("MEKO KALA DIL CHAHIYE 🙂✨LAL TUT JATA ", threadID);
     };

    if ((event.body.toLowerCase() == "🥰🥰🥰🥰")) {return api.sendMessage("OoHH KIYA BAAT AJ HAPPY HAPPY 🤣", threadID);
     };

  if ((event.body.toLowerCase() == "😍😍")) {return api.sendMessage("IS NAZAR SE SUSHIL YADAV KO DEKHO PYARA NA LAGY PAISE WAPIS 😝😂 ", threadID);
     };

  if ((event.body.toLowerCase() == "😎😎")) {return api.sendMessage("CHALA JAA BOSDIKE....🤣🤣🤝🏻", threadID);
     };

  if ((event.body.toLowerCase() == "😋😋")) {return api.sendMessage("😒GHR WALO NY AJ ROTI NHI DALI 🤣🤝🏻", threadID);
     };

  if ((event.body.toLowerCase() == "🧐🧐")) {return api.sendMessage("KIYA DEKH RAHA PAPA KI BARAT A RAHI 😝", threadID);
     };

  if ((event.body.toLowerCase() == "🥰🥰🥰")) {return api.sendMessage("TU TOO GYAA BETE 🤣", threadID);
     };

    if ((event.body.toLowerCase() == "🥵")) {return api.sendMessage("KUTTY PICHY PAD GAYE THE KIYA BHAI 😒", threadID);
     };

  if ((event.body.toLowerCase() == "😍")) {return api.sendMessage("IS NAZAR SE MERE OWNER SUSHIL KO DEKHO MAZA NA AY TO PAISE WAPIS 😝😂 ", threadID);
     };

  if ((event.body.toLowerCase() == "😎")) {return api.sendMessage("Chasma hatao na sahab kiya naam hai apka😜😜", threadID);
     };

  if ((event.body.toLowerCase() == "😋")) {return api.sendMessage("GHAR WALO NY KHANA NHI DALA AJ TUJHE 🥺", threadID);
     };

  if ((event.body.toLowerCase() == "🧐")) {return api.sendMessage("Kuch to Gadbad hai daya😂😂🤞🤞", threadID);
     };

  if ((event.body.toLowerCase() == "🥰🥰")) {return api.sendMessage("TU TO GAYA BETYY 🤣", threadID);
     };

    if ((event.body.toLowerCase() == "😁")) {return api.sendMessage("lgta hai aaj brush kiye ho😜😜😂 ", threadID);
     };

    if ((event.body.toLowerCase() == "🫣")) {return api.sendMessage("Sarmo mat apna hi gher samjho 😼 ", threadID);
     };

  if ((event.body.toLowerCase() == "🤤")) {return api.sendMessage("Hot chiz dekhi nhi ki lar tpkana suru kr dete ho srm kro jhopdi walo🤭😜😜😂 😂😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🙂")) {return api.sendMessage("KOI MUH NAHI LAGATA KAM SE KAM SAKAL TO ACHE SE BANA LE 😂😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🤣")) {return api.sendMessage("Haasne ki bhi tameez hoti hai tharki🤐😏😹😜", threadID);
     };

     if ((event.body.toLowerCase() == "😢") || (event.body.toLowerCase() == "😭") || (event.body.toLowerCase() == "😟") || (event.body.toLowerCase() == "🙁")) {
       return api.sendMessage("️𝐊𝐲𝐚 𝐡𝐮𝐚 𝐑𝐨 𝐊𝐲𝐮 𝐑𝐚𝐡𝐞 𝐡𝐨 ,𝐌𝐞 𝐡𝐮 𝐟𝐢𝐫 𝐤𝐲𝐮 𝐑𝐨𝐧𝐚 😇😇.", threadID);
     };

     if ((event.body.toLowerCase() == "😷") || (event.body.toLowerCase() == "🤕") || (event.body.toLowerCase() == "🤧") || (event.body.toLowerCase() == "🤒")) {
       return api.sendMessage("️Kya huva, Tabiyat kharab hai kya, Mujhe batao me abhi medicine 💊💉 le aati hu😇", threadID);
     };

     if ((event.body.toLowerCase() == "name") || (event.body.toLowerCase() == "naam") || (event.body.toLowerCase() == "nam")) {
       return api.sendMessage("️Name m kya rakkha h. tum kam pe dhyan do.", threadID);
     };

     if ((event.body.toLowerCase() == "Bot ke bache") || (event.body.toLowerCase() == "Bot ka bacha")) {
       return api.sendMessage("️mera baccha toh Tumhare Pet Me Hai.", threadID);
     };

     if ((event.body.toLowerCase() == "Pic do") || (event.body.toLowerCase() == "photo do")) {
       return api.sendMessage("️Me toh Andhi Hu Dekh nhi sakti", threadID);
     };

     if ((event.body.toLowerCase() == "assalam o alaikum") || (event.body.toLowerCase() == "assalam u walaikum") || (event.body.toLowerCase() == "salaam")) {
      return api.sendMessage("️ walaikum assalam 🙃♥", threadID);
     };

     if ((event.body.toLowerCase() == "Ib aa") || (event.body.toLowerCase() == "Inbox aa")) {
       return api.sendMessage("️Jo bolna hai yhi bol 😒😒 ib koi nahi jayega", threadID);
     };

     if ((event.body.toLowerCase() == "bot banake do") || (event.body.toLowerCase() == "mujhe bhi chaiye")) {
       return api.sendMessage("️Khud hi karlona. tumhe kya kuch nhi ata h?", threadID);
     };

     if ((event.body.toLowerCase() == "🙃🙃") || (event.body.toLowerCase() == "🙃")) {
       return api.sendMessage("️𝐇𝐚𝐚 𝐄𝐬𝐞 𝐡𝐢 𝐍𝐚𝐳𝐫𝐞 𝐧𝐢𝐜𝐡𝐢 𝐫𝐤𝐡𝐚 𝐤𝐫𝐨 𝐦𝐞𝐫𝐞 𝐬𝐚𝐦𝐧𝐞 👇", threadID);
     };

    if ((event.body.toLowerCase() == "🤥") || (event.body.toLowerCase() == "🤥")) {
       return api.sendMessage("️aree teri to naak hi etni lambi hai... uski jarurat hi nahi padti hogi tujhe to🤭🤭🤭🤭", threadID);
     };

    if ((event.body.toLowerCase() == "🤔") || (event.body.toLowerCase() == "🤨")) {
       return api.sendMessage("️𝐒𝐨𝐜𝐡𝐢𝐲𝐞 𝐦𝐚𝐭 𝐤𝐲𝐮  𝐤𝐞 𝐛𝐢𝐧𝐚 𝐠𝐞𝐬𝐬 𝐰𝐚𝐥𝐢 𝐟𝐨𝐠𝐠 𝐡𝐢 𝐡𝐚𝐢 𝐛𝐨𝐬𝐬 🤨😮🧐", threadID);
     };

  if ((event.body.toLowerCase() == "💋")) {return api.sendMessage("Abe yal ye kissi wissi na kiya kro😏😹😜", threadID);
     };

  if ((event.body.toLowerCase() == "💋💋")) {return api.sendMessage("Abe yal ye kissi wissi na kiya kro😏😹😜", threadID);
     };
  if ((event.body.toLowerCase() == "🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🤪🤪")) {return api.sendMessage("BaRi MasTi ChaRi Chai TeReKo 1 Ankh Band KRrke ZuBan Bhir Aagyi 😂😂😂", threadID);
     };

  if ((event.body.toLowerCase() == "🤩")) {return api.sendMessage("suna tha star ✨ ⭐ ✨ aasman me hote hai par teri to ankho par ⭐ hai ✨✨⭐😜😜😂 ", threadID);
    };

  if ((event.body.toLowerCase() == "😘")) {return api.sendMessage("Pehle  Brush Karke aa ajeeb si smail aa ri hai😹🤣😂 ", threadID);
    };

  if ((event.body.toLowerCase() == "😛")) {return api.sendMessage("jibh kyu latk gyii..🤭 aajao panii pii lo🫗🍷😜😹🤣😂 ", threadID);
     };

    if ((event.body.toLowerCase() == "💝")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar___🌿___Liya___🌿___mujhse____🌿🌹❣️__________________?🥰❤️ ", threadID);
     };

    if ((event.body.toLowerCase() == "🙈🙈")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho", threadID);
     };

  if ((event.body.toLowerCase() == "🐒")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho😝😂 ", threadID);
     };

  if ((event.body.toLowerCase() == "🙉🙉")) {return api.sendMessage("Muje pata h tum 👉 🐒 Bander ho 😜😜", threadID);
     };

  if ((event.body.toLowerCase() == "🙊")) {return api.sendMessage("bander Ka muu wala has mat", threadID);
     };

  if ((event.body.toLowerCase() == "sharati Ladki ")) {return api.sendMessage("Are wo cute hai sharthi hai 🤣", threadID);
     };

  if ((event.body.toLowerCase() == "fatima")) {return api.sendMessage("Purvi Boss BAHOT cute hai ❤️🥰", threadID);
     };

    if ((event.body.toLowerCase() == "🖤")) {return api.sendMessage("___)Ankho__🌿__m__🍒__pyar__💦dil___❣️__me__💥___khumar___🌹___pyar____🌿___toh____😴___nhi___💥___kar___🌿___mujhse____🌿🌹❣️__________________?🥰❣️❣️🥰❤️‍🩹 ", threadID);
     };

  if ((event.body.toLowerCase() == "😏")) {
       return api.sendMessage("Sdaa hua muhh kyu bnaa rhe..🤦‍♂️kisi ne dil chura liya kya🤭😂", threadID);
     };
  if ((event.body.toLowerCase() == "🤐")) {
       return api.sendMessage("muhh bnd kyuu kr liya babuaa 😜😝😜", threadID);
     };

     if ((event.body.toLowerCase() == "🥴") || (event.body.toLowerCase() == "🥴")) {
       return api.sendMessage("️Oye nashedi 😂😂😂", threadID);
     };

    if ((event.body.toLowerCase() == "😶") || (event.body.toLowerCase() == "😶")) {
       return api.sendMessage("️Are are lips kaha gaye gf/bf ke sath kiss karte time usi ne to nahi kha liye 😜😜", threadID);
     };

    if ((event.body.toLowerCase() == "😉") || (event.body.toLowerCase() == "😉")) {
       return api.sendMessage("️Aankh kyu maar rahe ho, Me bahut shareef hu🥺", threadID);
     };

     if ((event.body.toLowerCase() == "😱") || (event.body.toLowerCase() == "😨")) {
       return api.sendMessage("️Kya huva bhoot dekh liya kya 👻👻", threadID);
     };

    if ((event.body.toLowerCase() == "😒") || (event.body.toLowerCase() == "🙄")) {
       return api.sendMessage("️️🙄 samne hu to samne dekh na upar koi pisa bant raha hai🙄", threadID);
     };

     if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
       return api.sendMessage("️Me huna baby mere pass aao 🥰🤗. Me karunga na aapko payar 🙈 (londo tum dur hi rahna saalo 😑)", threadID);
     };

     if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
       return api.sendMessage("Are apne muh pe kyu maar rahe ho, Mujhe batao kya huva?😬", threadID);
     };

     if ((event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😁") || (event.body.toLowerCase() == "😆") || (event.body.toLowerCase() == "😅") || (event.body.toLowerCase() == "😸") || (event.body.toLowerCase() == "😹")) {
       return api.sendMessage("ßΛS ҠΛŔ♡ ҠĪŦИΛ ĤΛS♡♡ƓƐ🧐😒💯💫", threadID);
     };

     if ((event.body.toLowerCase() == "💛") || (event.body.toLowerCase() == "💞") || (event.body.toLowerCase() == "❣️") || (event.body.toLowerCase() == "❤️")) {
       return api.sendMessage("🦋🌿Aƞƙɧ❍ Ɱɛ Ƥɣɑɽ͢  Ɗɪɭɱɛ Ƙɧuɱɑɽ🌬️🌍 ••Ƥɣɑɽ Ƭ❍ɧ Ƞɧɪ Ƙɒɽ ɭɪɣɑ Ɱuȷɧʂɛ>³••🕊️🍎😍", threadID);
     };

     if ((event.body.toLowerCase() == "kese ho") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
       return api.sendMessage("M To cute hu aap batao kese ho 🤭☺️", threadID);
     };

     if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
       return api.sendMessage("Yes I love you and everyone so much", threadID);
     };

     if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
       return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
     };

    if ((event.body.toLowerCase() == "Paani lao") || (event.body.toLowerCase() == "Ek glass paani lao")) {
       return api.sendMessage("Aap juice piyo baby🍹🍹🍹🍹🍹🙈", threadID);
     };

     if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
       return api.sendMessage("I'm full when I see you eat <3", threadID);
     };

    if ((event.body.toLowerCase() == "i love you bot") || (event.body.toLowerCase() == "ilove you")) {
       return api.sendMessage("Love You too meri jaann ummah 😘😘💋💋", threadID);
     };

     if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
       return api.sendMessage("Yes <3", threadID);
     };

     if ((event.body.toLowerCase() == "&fuck") || (event.body.toLowerCase() == "&Fuck")) {
       return api.sendMessage("🏔️🏝️ Romiyo Ƞɛ ꌗƥɛçɪɑɭɭɣ Ƭuɱ 🌊🪺Jɑɪʂɛ Ƭɧɑɽƙɪɣɵ Ƙɛ Ɬɪɣɛ•• 🏞️🌬️Ɣɑɧ çɵɱɱɑƞɗ Ɦɑʈɑ Ɗɪɣɑ Ɦɑɪ↗↘ Sɵɽɽɣ Ɠɣuʂ••😹🫶", threadID);
     };

    if ((event.body.toLowerCase() == "arman") || (event.body.toLowerCase() == "disha") || (event.body.toLowerCase() == "main romiyo") || (event.body.toLowerCase() == "main saho") || (event.body.toLowerCase() == "main rounak")) {
       return api.sendMessage("🕊️🍎...Aɭɛ Ɱɛɹɛ Ɓɑɓɣ Ƙɛʂɛ Ɦɵ ɑɑp😚🍒", threadID);
     };
     mess = "{name}"


   if (event.body.includes("Bot") == 1 ||
     (event.body.includes("bot") == 1 ||
     (event.body.includes("BOT") == 1 ||
     (event.body.includes("BABU") == 1 ||
     (event.body.includes("Babu") == 1 ||
     (event.body.includes("babu") == 1 ||
     (event.body.includes("boot") == 1 ||
     (event.body.includes("Oye") == 1 ||
     (event.body.includes("oye") == 1 ))))))))) {
      var msg = {
        body: `${rand}`
      }
  var msg = {
    body: `💞👉${name} 💞👈

❖•S━━━━━💞━━━━━A•❖,


${rand}                                        

𝗖𝗿𝗲𝗱𝗶𝘁𝘀:𒁍≛⃝𝐒𝐮𝐬𝐡𝐢𝐥 𝐲𝐚𝐝𝐚𝐯 ❥||ㅎ

❖•S━━━━━💞━━━━━A•❖`
  }
  return api.sendMessage(msg, threadID, messageID);
};

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
