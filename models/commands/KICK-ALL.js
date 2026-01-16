module.exports.config = {
    name: "kickall",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "ARIF BABU",
    description: "THIS BOT WAS MADE BY MR ARIF BABU",
    commandCategory: "ALL MEMBERS REMOVE THE GROUP",
    usages: "PREFIX",
    usePrefix: false,
    cooldowns: 5
};
module.exports.run = async function({ api, event, getText,args }) {
  const { participantIDs } = await api.getThreadInfo(event.threadID)
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  };
  const botID = api.getCurrentUserID();
  const listUserID = participantIDs.filter(ID => ID != botID);
  return api.getThreadInfo(event.threadID, (err, info) => {
    if (err) return api.sendMessage("Sahi se camand dalo boss 😐✌️", event.threadID);
    if (!info.adminIDs.some(item => item.id == api.getCurrentUserID()))
      return api.sendMessage(`Boss me is group ka admin nhi hu admin banao phle mujhe😐✌️`, event.threadID, event.messageID);
    if (info.adminIDs.some(item => item.id == event.senderID)) {
      setTimeout(function() { api.removeUserFromGroup(botID, event.threadID) }, 300000);
      return api.sendMessage(`Good bay sabko ye group khtam ho raha he alvida 🙂✌️`, event.threadID, async (error, info) => {
        for (let id in listUserID) {
          await new Promise(resolve => setTimeout(resolve, 1000));
          api.removeUserFromGroup(listUserID[id], event.threadID)
        }
      })
    } else return api.sendMessage(Ye camand sirf mere boss mahtab ke liye he  😐✌️', event.threadID, event.messageID);
  })
}
