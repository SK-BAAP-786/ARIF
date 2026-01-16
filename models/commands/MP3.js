const fs = require("fs");
module.exports.config = {
  name: "mahtab",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "ARIF BABU", 
  description: "hihihihi",
  commandCategory: "no prefix",
  usages: "arif",
    cooldowns: 5, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (event.body.indexOf("Arif")==0 || event.body.indexOf("arif")==0 || event.body.indexOf("Mahtab babu")==0 || event.body.indexOf("MAHTAB ")==0) {
    var msg = {
        body: "Mujhe mere Mahtab Boss  ne banaya he 😐",
        attachment: fs.createReadStream(__dirname + `/MAHTAB-BABU/dk.mp3`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("😘", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

  }
