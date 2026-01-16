const fs = require("fs");
module.exports.config = {
  name: "mahtab",
    version: "1.1.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "Just Respond",
  usePrefix: true,
  commandCategory: "no prefix",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("mahtab") ||
     react.includes("mahtab") || react.includes("MAHTAB") || react.includes("@𓏵𓋠𒅓𓏪𓉚𝐌𝐀𝐇𝐓𝐀𝐁𒀭𝐁𝐀𝐁𝐔𓉛𓏪𒅓𓋠𓏵 𒆜𒋟❮𝗨𝗣𒀭𝗞𝗔𒀭𝗕𝗔𝗗𝗦𝗛𝗔𝗛❯𒋟𒆜 𒀭𒀮𓁫𓂔𓏵𓏜𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞𓏜𓏵𓂔𓁬𒀮𒀭 𓃉𓃊𓃑𓄋𝐈𝐓𝐒𓇻︎𓇻𝐁𝐑𝐀𝐍𝐃𓄋𓃑𓃊𓃉 𓆈 y -  【‿】") ||
react.includes("mahtab babu") ||
react.includes("MAHTAB BABU")) {
    var msg = {
        body: `𝘋𝘌𝘒𝘏𝘖 𝘔𝘌 𝘈 𝘎𝘈𝘠𝘈 𝘈𝘈𝘗𝘒𝘈 𝘔𝘈𝘏𝘛𝘈𝘉 𝘉𝘈𝘉𝘜 🙈 🤣 𓆩♡𓆪`,attachment: fs.createReadStream(__dirname + `/MAHTAB-BABU/ARIF-DPZ.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
